/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { SelectChangeEvent, Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {
    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [subCategoryId, setSubCategoryId] = React.useState('')

    const handleChangeSubCategory = (event: SelectChangeEvent) => {
        setSubCategoryId(event.target.value as string);
    };

    const formik: any = useFormik({

        initialValues: {

            code: '',
            name: '',
            brand: '',
            description: '',
            unit: '',
            category_id: '',
            subcategory_id: '',
            tax_type: '',
            tax_amount: '',

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}products`, {

                code: values.code,
                name: values.name,
                brand: values.name,
                description: values.description,
                unit: values.unit,
                category_id: categoryId,
                subcategory_id: subCategoryId,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Account Type',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Account Name',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Account Code',
                id: 'values.brand',
                type: "text",
            },
            {
                textFieldName: 'Description',
                id: 'description',
                type: "email",
            },
            {
                textFieldName: 'Customer Phone',
                id: 'unit',
                type: "number",
            },
            {
                textFieldName: 'Website',
                id: 'tax_type',
                type: "number",
            },

        ],


    }

    const tabName = ["other Datails", "Address", "Contact Persons"]


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer" />

                        <Grid container alignItems="center">

                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>

                    </form>
                </Grid>

            </Grid >

        </Grid >
    )
}

export default page