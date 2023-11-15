"use client"
import React from 'react'
import useBearerToken from '../../../hooks/useBearerToken';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Grid } from '@mui/material';
import { CustomTextField } from '../../../Components/TextField/TextField';
import VideoPreview from '../../../Components/UI/VideoPreview/VideoPreview';
import CustomDropDown from '../../../Components/CustomDropDown/CustomDropDown';
import { useQueryFetch } from '../../../hooks/useFetch';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import FormHeader from '../../../Components/CustomeForm/FormHeader';

function page() {

    const router = useRouter()
    const token = useBearerToken()

    const [video, setVideo]: any = React.useState(null);

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [workOutPlan, setWorkoutPlan] = React.useState(0);

    const [languageId, setLanguageId] = React.useState(0)

    const Category = useQueryFetch('category').fetchedData;

    const language = [{ id: 22, name: 'English' }, { id: 20, name: 'Tamil' }]

    // const language = useQueryFetch('languages').fetchedData;

    const formik = useFormik({

        initialValues: {

            title: '',
            description: '',
            video: '',
            dayNo: '',
            languageId: '',
            categoryId: ''

        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}video`, {

                title: values.title,
                description: values.description,
                video: video,
                dayNo: values.dayNo,
                languageId: languageId,
                categoryId: workOutPlan
            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {

                    message.success('Video Added Successfully');
                    router.push('/videos')

                } else {
                    console.log(res, '66666666666666666')
                    message.error('Failed to Add Video, Please try Again!!')
                }
                // console.log('api succesfull');
                // console.log(res);
            }).catch(error => {
                console.log(error, '444444444444444444')
                message.error('Failed to Add Video, Please try Again!!')
            })

        },

        //validationSchema: SignUpSchema

    });

    const formItems = [
        {
            textFieldName: 'Title',
            id: 'title',
            type: "text",
        },
        {
            textFieldName: 'Description',
            id: 'description',
            type: "text",
        },
        {
            textFieldName: 'Day No',
            id: 'dayNo',
            type: "number",
        },

    ]

    return (
        <Grid container sx={{ bgcolor: '' }}>

            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                <Grid container sx={{ mx: 4 }}>

                    <FormHeader heading="Create Video" />

                    <Grid md={4}>

                        <Grid container>

                            <CustomDropDown fieldName="Category" dropDownData={Category} data={workOutPlan} setData={setWorkoutPlan} />

                            <CustomDropDown fieldName="Language" dropDownData={language} data={languageId} setData={setLanguageId} />

                        </Grid>

                        {
                            formItems.map((data, index) =>

                                <CustomTextField formik={formik} data={data} />

                            )
                        }

                        <VideoPreview title="Upload video" video={video} setVideo={setVideo} />
                    </Grid>

                </Grid>


            </form>


        </Grid >
    )
}

export default page
