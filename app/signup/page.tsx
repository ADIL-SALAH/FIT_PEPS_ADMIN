/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../urls/urls';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { SignUpSchema } from './validation';
import Image from 'next/image';
import { PrimaryButton } from '../../Components/UI/Button/Button';
import { PRIMARY_COLOUR } from '../../urls/colours';

function page() {

    const router = useRouter()

    const formik: any = useFormik({

        initialValues: {
            name: '',
            tagline: '',
            address: '',
            mobile: '',
            email: '',
            logo: '',
            tax_type: '',
            tax_no: '',
            username: '',
            password: ''


        },

        validationSchema: SignUpSchema,

        onSubmit: values => {

            axios.post(`${BASE_URL}firms/register`, {

                name: values.name,
                taglin: values.tagline,
                address: values.address,
                mobile: values.mobile,
                email: values.email,
                tax_type: values.tax_type,
                tax_no: values.tax_no,
                username: values.username,
                password: values.password

            }).then((res) => {
                if (res.data.success) {
                    message.success(res.data.message, 1)
                    router.push('login')
                } else {
                    message.error(res.data.message, 1,)
                }
            })

        },

    });

    const formItems = [
        {
            textFieldName: 'Name',
            name: 'name',
            type: "text",


        },
        {
            textFieldName: 'Tagline',
            name: 'tagline',
            type: "text",
        },
        {
            textFieldName: 'Adress',
            name: 'address',
            type: "text",

        },
        {
            textFieldName: 'Mobile',
            name: 'mobile',
            type: "number",

        },
        {
            textFieldName: 'Email',
            name: 'email',
            type: "email",

        },
        {
            textFieldName: 'Tax Type',
            name: 'tax_type',
            type: "text",

        },
        {
            textFieldName: 'Tax No',
            name: 'tax_no',
            type: 'text',

        },
        {
            textFieldName: 'UserName',
            name: 'username',
            type: "text",

        },
        {
            textFieldName: 'Password',
            name: 'password',
            type: "password",
        },
        {
            textFieldName: 'Password Confirm',
            name: 'passwordconfirm',
            type: "password",
        },

    ]

    return (

        <Grid container justifyContent="center"
            sx={{
                position: 'fixed', top: "0", left: "0",
                zIndex: 100, height: '100vh', bgcolor: 'white'
            }}>

            <Grid container md={11} sx={{ overflowY: { xs: "scroll", md: "hidden" }, height: "100vh" }} >

                <Grid sx={{ bgcolor: "" }} container
                    justifyContent="start" alignItems="center" md={5}>

                    <Image src={'/assets/login/login.webp'}
                        alt="ourteam-oyvaa"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', padding: "10px" }} // optional
                    />

                </Grid>


                <Grid container md={7} justifyContent="end" alignItems="center">

                    <Grid container xs={12} md={10} justifyContent="start"
                        alignItems="center" sx={{ height: "fit-content", bgcolor: "", p: 1 }}>

                        <Typography variant='h4' sx={{ fontWeight: 600, color: 'black', mb: 5 }}> Sign Up..!! </Typography>

                        <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                            <Grid container>

                                {formItems.map((data, index) =>

                                    <Grid key={index} container md={6} sx={{ p: 1 }}>

                                        <Typography textAlign="start" fontWeight="semibold"
                                            textTransform="capitalize">{data.textFieldName}</Typography>

                                        <TextField size='small' sx={{ width: "100%", my: 1 }}
                                            id={data.name}
                                            name={data.name}
                                            type={data.type}
                                            onChange={formik.handleChange}
                                            value={formik.values[data.name]}
                                            error={formik.touched[data.name] && Boolean(formik.errors[data.name])}
                                            helperText={formik.touched[data.name] && formik.errors[data.name]}
                                        />

                                    </Grid>



                                )}

                            </Grid>


                            <PrimaryButton onClick={formik.handleSubmit} width="50%" bgcolor={PRIMARY_COLOUR} mt={1}>Sign Up</PrimaryButton>


                            <Grid container alignItems="center" justifyContent="center" >

                                <Typography textAlign="center"
                                    sx={{ cursor: 'pointer', fontWeight: "normal", mt: 3 }}> Don't have an Account? </Typography>

                                <Typography onClick={() => router.push('login')} textAlign="center"
                                    sx={{ cursor: 'pointer', fontWeight: 550, mt: 3, ml: 1, color: 'dodgerblue' }}>Sign In</Typography>

                            </Grid>

                        </form>

                    </Grid>

                </Grid>


            </Grid>

        </Grid >

    )
}

export default page