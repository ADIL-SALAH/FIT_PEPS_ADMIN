"use client"
import { Grid } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'
import { CustomTextField } from '../../../Components/TextField/TextField'
import ImagePreview from '../../../Components/UI/ImagePreview/ImagePreview'
import useBearerToken from '../../../hooks/useBearerToken'
import { BASE_URL } from '../../../urls/urls'
import { useQueryFetchById } from '../../../hooks/useFetch'
import FormHeader from '../../../Components/CustomeForm/FormHeader'

export default function page() {

    const router = useRouter()

    const token = useBearerToken()
    const [image, setImage]: any = React.useState();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const id = usePathname().split('/')[2]
    const finalData = useQueryFetchById('testimonials', id).fetchedData
    console.log(id, finalData, '888888888')

    const formik = useFormik({

        initialValues: {
            name: finalData?.name,
            rating: finalData?.rating,
            message: finalData?.message,
            image: finalData?.image,
            remarks: finalData?.remarks,
            isActive: finalData?.isActive
        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            console.log("values", values);


            axios.patch(`${BASE_URL}testimonials/${id}`, {
                name: values.name,
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

        enableReinitialize: true

    });

    const formItems = [
        {
            textFieldName: 'name',
            id: 'name',
            type: 'text'
        },
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
        <Grid container sx={{ bgcolor: '', padding: '20px', paddingBottom: '40px' }}>

            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                <FormHeader heading="Edit testimonial" edit />
                <Grid container md={4} sx={{ mx: 4 }}>


                    <ImagePreview title="Image" image={image} setImage={setImage} />

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }

                </Grid>

                <button>Submit</button>

            </form>


        </Grid >
    )
}

