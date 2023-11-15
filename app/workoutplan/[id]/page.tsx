"use client"
import React from 'react';
import { Grid, TextField } from "@mui/material";
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Field, useFormik } from 'formik';
import useBearerToken from '../../../hooks/useBearerToken';
import { CustomTextField } from '../../../Components/TextField/TextField';
import ImagePreview from "../../../Components/UI/ImagePreview/ImagePreview"
import { useRouter, usePathname } from 'next/navigation';
import FormHeader from '../../../Components/CustomeForm/FormHeader';
import { useQueryFetchById } from '../../../hooks/useFetch';


export default function page() {
    const pathName = usePathname()
    const id = pathName.split('/')[2]
    const router = useRouter()

    const token = useBearerToken()

    const [image, setImage]: any = React.useState();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    // export const useQueryFetchById = (url: any, id: any) => {
    const finalData = useQueryFetchById('category', id).fetchedData;

    console.log("final>>>>>>>>>>", finalData);





    const formik = useFormik({

        initialValues: {
            name: finalData?.name,
            description: finalData?.description,
            image: finalData?.image

        },

        // validationSchema: employeeShema,

        onSubmit: (values) => {

            console.log("values", values);


            axios.patch(`${BASE_URL}category/${id}`, {

                name: values.name,
                description: values.description,
                image: image

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
            textFieldName: 'Category Name',
            id: 'name',
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

                <FormHeader heading='Edit Workout Plan' edit='true' />

                <Grid container md={4} sx={{ mx: 4 }}>

                    <ImagePreview title="Image" image={image} setImage={setImage} />

                    {
                        formItems.map((data, index) =>

                            <CustomTextField formik={formik} data={data} />

                        )
                    }

                </Grid>

                {/* <button>Submit</button> */}

            </form>


        </Grid >
    )
}


