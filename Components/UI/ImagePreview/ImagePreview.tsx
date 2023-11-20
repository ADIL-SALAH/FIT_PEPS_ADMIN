import { Box, Button, Grid, Typography, } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import { PrimaryButton } from '../Button/Button';
import { message } from 'antd';

// export const ImagePreview = (props: any) => {
export default function ImagePreview(props: any) {

    const { image, setImage, title } = props;


    const AddImages = (event: any) => {

        if (event.target.files[0] === undefined) return;
        console.log(image, '222222222')
        const formData = new FormData();

        formData.append('file', event.target.files[0]);

        axios.post(`/image/upload`, formData).then((res) => {

            if (res.data.success) {

                setImage(res.data.result)
                console.log(res, 'kiiiiiiiiiiiiiii', image)

                message.success(res.data.message)

            }
            else {

                message.error(res.data.message)

            }


        }).catch((res) => {

            message.error("Try Again")

        })
    }


    return (

        <Box sx={{
            display: "flex", flexDirection: "column", justifyContent: "end",
            alignItems: "end", m: 1
        }}>

            <Box sx={{ width: "100%", position: "relative" }}>

                <Typography sx={{ my: 0.5, fontWeight: "bold", color: "#566573", }}>{title}</Typography>

                <Box sx={{
                    backgroundColor: "lightgray", width: "150px", mb: 2,
                    height: "150px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                }}>

                    {image === undefined ? <ImageIcon sx={{ fontSize: "2.5rem" }} />

                        :

                        <img src={image} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />

                    }

                </Box>

                <Button component="label" sx={{
                    width: "150px", height: "150px",
                    bgcolor: "transparent", position: "absolute", top: "0"
                    , left: "0"
                }}>

                    <input hidden type='file' key="image" id="outlined-basic"

                        onChange={(event: any) => AddImages(event)} />

                </Button>

            </Box>

        </Box >

    )
}



export const MultiImagePreview = (props: any) => {

    const { image, setImage } = props;

    const AddImages = (index: any, event: any) => {

        if (event.target.files[0] === undefined) return;

        const formData = new FormData();

        formData.append('file_location', event.target.files[0]);

        axios.post(`images`, formData).then((response) => {

            const values = [...image]
            values[index]['image'] = response.data.result.file_location
            setImage(values)

        })
    }



    const handleAddFields = () => {

        setImage([...image, { id: image.length + 1 }])

    }

    const handleRemoveFields = () => {
        setImage((image: any) => image.filter((_: any, i: any) => i !== image.length - 1))
    }


    return (

        <Grid container lg={12} justifyContent="center">

            <Box sx={{ width: "100%" }}>

                <Grid container lg={12}>

                    {image.map((data: any, index: any) =>

                        <Grid lg={2}>

                            <Box sx={{ width: "100%", position: "relative" }}>

                                <Box sx={{
                                    backgroundColor: "lightgray", width: "150px", mb: 2,
                                    height: "150px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                                }}>

                                    {image[index].image === undefined ? <ImageIcon sx={{ fontSize: "2.5rem" }} />

                                        :

                                        <img src={image[index].image} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />

                                    }

                                </Box>

                                <Button component="label" sx={{
                                    width: "150px", height: "150px",
                                    bgcolor: "transparent", position: "absolute", top: "0"
                                    , left: "0"
                                }}>

                                    <input hidden type='file' key="image" id="outlined-basic"

                                        onChange={(event: any) => AddImages(index, event)} />

                                </Button>

                            </Box>

                        </Grid>

                    )}

                </Grid>


                <Box sx={{ display: "flex" }}>

                    <PrimaryButton bgColor="dodgerblue" onClick={handleAddFields}>Add New</PrimaryButton>{image.length > 1
                        && <PrimaryButton bgColor="black" onClick={handleRemoveFields}>Remove</PrimaryButton>
                    }

                </Box>

            </Box>

        </Grid>

    )
}