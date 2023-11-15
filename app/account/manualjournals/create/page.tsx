/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [categorie, setCategorie] = React.useState('');

    const [subCategorie, setSubCategorie] = React.useState('')

    const categories = useQueryFetch('categories').fetchedData;

    const subCategories = useQueryFetch(`sub-categories/list/${categorie}`).fetchedData

    console.log("categorie", categorie);
    console.log("subCategorie", subCategorie);


    const formik = useFormik({

        initialValues: {

            jvNo: '',
            refNo: '',
            date: '',
            LFno: '',
            // unit: '',
            // category_id: '',
            // subcategory_id: '',
            // tax_type: '',
            // tax_amount: '',

        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}journal-entries`, {


                "jvNo": values.jvNo,
                "refNo": values.refNo,
                "date": values.date,
                "LFno": values.LFno,
                // "unit": values.unit,
                // category_id: 12,
                // subcategory_id: 11,
                // "tax_type": values.tax_type,
                // "tax_amount": values.tax_amount,

            },

                {
                    headers
                }

            ).then((res: any) => {

                res.data.statusCode == 200 ? alert('created sccesfully') : alert('failed to create')
                router.back()

            })

        },

    });



    const formItems = [
        {
            textFieldName: 'jvNo',
            id: 'jvNo',
            name: 'jvNo',
            type: "number",
        },
        {
            textFieldName: 'refNo',
            id: 'refNo',
            name: 'refNo',
            type: "text",
        },
        {
            textFieldName: 'date',
            id: 'date',
            name: 'date',
            type: "date",
        },
        {
            textFieldName: 'LFno',
            id: 'LFno',
            name: 'LFno',
            type: "number",
        },

    ]



    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 7, }} height="">


            <Grid container justifyContent="center" >

                <Grid container bgcolor="" lg={11} px={10} mt={3} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 10
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Product" />

                        <Grid container >

                            {/* <CustomDropDown fieldName="category" dropDownData={categories} data={categorie} setData={setCategorie} />

                            <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategories} data={subCategorie} setData={setSubCategorie} /> */}

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                        </Grid>

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page