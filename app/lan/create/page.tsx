"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import useBearerToken from '../../../hooks/useBearerToken';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../../urls/urls';
import { Grid } from '@mui/material';
import ImagePreview from '../../../Components/UI/ImagePreview/ImagePreview';
import { CustomTextField } from '../../../Components/TextField/TextField';
import FormHeader from '../../../Components/CustomeForm/FormHeader';

export default function page() {
  const router = useRouter()

  const token = useBearerToken()


  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };



  const formik = useFormik({

    initialValues: {
      name: '',
      description: '',
      code: "",
      isActive: ''
    },

    // validationSchema: employeeShema,

    onSubmit: (values) => {

      console.log("values", values);

      axios.post(`${BASE_URL}languages`, {

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

        <FormHeader heading='Create Language' />

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
