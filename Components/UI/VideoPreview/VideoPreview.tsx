'use client'

import axios from 'axios';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import AWS from 'aws-sdk';
import { VideoCallOutlined } from '@mui/icons-material';

export default function VideoPreview(props: any) {


    const { video, setVideo, title } = props;
    const [uploading, setUploading] = React.useState(false);
    const [videoUrl, setVideoUrl] = React.useState('');


    const AddVideos = (event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file', event.target.files[0]);

        axios.post(`/video/upload`, formData).then((res) => {
            setUploading(true)
            console.log("res", res);


            if (res.status === 201) {

                setVideo(res.data.Location)

                message.success('Video Uploaded Successfully')
                setUploading(false)
            }
            else {

                message.error('Failed to Upload Video, Please try Again!!')
                setUploading(false)

            }


        }).catch((res) => {

            message.error("Failed to Upload Video, Please try Again!!")
            setUploading(false)

        })
    }

    const prop: UploadProps = {
        name: 'file',
        action: 'https://api.fitpeps.com/video/upload',
        headers: {},
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
            }
            if (info.file.status === 'done') {
                setVideo(info?.file.response.key);
                const s3 = new AWS.S3({
                    accessKeyId: 'AKIA37K4C6DLEXDWCYP6',
                    secretAccessKey: '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',
                    signatureVersion: 'v4',
                    region: 'ap-south-1',
                });

                const params = {
                    Bucket: 'fitpepsbucket',
                    Key: info?.file.response.Key,
                };

                s3.getSignedUrl('getObject', params, (err, url) => {
                    if (err) {
                        console.error("********************", err);
                        message.error(`filed to load ${info.file.name}.`);
                    } else {
                        setVideoUrl(url);

                    }
                });
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    return (

        <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "end",
            alignItems: "end", m: 1
        }}>

            <Box sx={{ width: "100%", position: "relative" }}>

                <Typography sx={{ my: 0.5, fontWeight: "bold", color: "#566573", }}>{title}</Typography>
                {videoUrl ?
                    <video controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    :
                    <Upload {...prop}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>}


                {/* <Box sx={{
                    backgroundColor: "lightgray", width: "150px", mb: 2,
                    height: "150px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                }}>

                    {video === undefined ? <ImageIcon sx={{ fontSize: "2.5rem" }} />

                        :

                        <img src={video} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />

                    }

                </Box>

                <Button component="label" sx={{
                    width: "150px", height: "150px",
                    bgcolor: "transparent", position: "absolute", top: "0"
                    , left: "0"
                }}>

                    <input hidden type='file' key="image" id="outlined-basic"

                        onChange={(event: any) => AddVideos(event)} />

                </Button> */}

            </Box>

        </Box >

    )
} 