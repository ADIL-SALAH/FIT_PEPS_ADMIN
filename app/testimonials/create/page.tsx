"use client"
import { Grid } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomTextField } from '../../../Components/TextField/TextField'
import ImagePreview from '../../../Components/UI/ImagePreview/ImagePreview'
import useBearerToken from '../../../hooks/useBearerToken'
import { BASE_URL } from '../../../urls/urls'

export default function page() {

    const router = useRouter()

    const token = useBearerToken()
    const [image, setImage]: any = React.useState();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };



    const formik = useFormik({

        initialValues: {
            rating: '',
            message: '',
            image: '',
            remarks: '',
            isActive: ''

        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            console.log("values", values);


            axios.post(`${BASE_URL}testimonials`, {

                rating: values.rating,
                message: values.message,
                image: image,
                remarks: values.remarks,

            },

                {
                    headers
                }

            ).then((res: any) => {
                router.back();
            })

        },


    });

    const formItems = [
        {
            textFieldName: 'message',
            id: 'message',
            type: "text",
            rows: '5'
        },
        {
            textFieldName: 'rating',
            id: 'rating',
            type: 'number'
        },
        {
            textFieldName: 'remarks',
            id: 'remarks',
            type: 'text'
        }

    ]

    return (
        <Grid container sx={{
            bgcolor: '', padding: '20px'
        }}>

            < form style={{
                width: '100%'
            }} onSubmit={formik.handleSubmit} >

                <Grid container md={4} sx={{ mx: 4 }}>

                    <ImagePreview title="Image" image={image} setImage={setImage} />

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }

                </Grid>

                <button>Submit</button>

            </form >


        </Grid >
    )
}

