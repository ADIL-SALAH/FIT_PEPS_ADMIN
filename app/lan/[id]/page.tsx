"use client"
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'
import useBearerToken from '../../../hooks/useBearerToken';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Grid } from '@mui/material';
import ImagePreview from '../../../Components/UI/ImagePreview/ImagePreview';
import { CustomTextField } from '../../../Components/TextField/TextField';
import FormHeader from '../../../Components/CustomeForm/FormHeader';
import { useQueryFetchById } from '../../../hooks/useFetch';

export default function page() {
    const router = useRouter()
    const id = usePathname().split('/')[2]

    const token = useBearerToken()


    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const finalData = useQueryFetchById('languages', id).fetchedData

    const formik = useFormik({

        initialValues: {
            name: finalData?.name,
            description: finalData?.description,
            code: finalData?.code,
            isActive: finalData?.isActive
        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            console.log("values", values);

            axios.patch(`${BASE_URL}languages/${id}`, {

                name: values.name,
                description: values.description,
                code: values.code,
                isActive: true
            },

                {
                    headers
                }

            ).then((res: any) => {
                // router.back();
            })

        },
        enableReinitialize: true

    });

    const formItems = [
        {
            textFieldName: 'Language Name',
            id: 'name',
            type: "text",
            rows: '1'
        },
        {
            textFieldName: 'Code',
            id: 'code',
            type: "text",
            rows: '1'
        },
        {
            textFieldName: 'Description',
            id: 'description',
            type: "text",
            rows: '5'
        },

    ]

    return (
        <Grid container sx={{ bgcolor: '' }}>

            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                <FormHeader heading='Edit Language' edit='true' />

                <Grid container md={4} sx={{ mx: 4 }}>

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }

                </Grid>

            </form>


        </Grid >
    )
}
