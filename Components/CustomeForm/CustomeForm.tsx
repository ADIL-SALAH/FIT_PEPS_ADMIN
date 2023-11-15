import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomDropDown from '../CustomDropDown/CustomDropDown'
import { CustomTextField } from '../TextField/TextField'
import FormHeader from '../UI/Form/FormHeader'

export default function CustomeForm(props: any) {

  const { formik, data, heading, dropDownData } = props;

  return (
    <Grid justifyContent="center" bgcolor="" px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

        <FormHeader heading={heading} />

        <Grid container alignItems="center">

          <CustomDropDown dropDownData={dropDownData} fieldName="Customer Name" />

        </Grid>

        <Grid container sx={{ mt: 4 }}>
          {data.map((data: any, index: any) =>

            <CustomTextField key={index} data={data} formik={formik} />

          )}
        </Grid>

        <Grid alignItems="center" sx={{ mt: 5 }}>

          <CustomDropDown fieldName="Delevery Method" />

          <CustomDropDown fieldName="Salesperson" />

        </Grid>





























        <Grid container sx={{ justifyContent: 'end' }}>

          <Grid lg={5} container sx={{ mt: 4, bgcolor: "#D9D9D9", borderRadius: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Grid container lg={11} sx={{ my: 1 }}>

              <Grid container sx={{ justifyContent: 'space-between', my: '' }}>

                <Typography>Sub Total</Typography>

                <Typography>0.000</Typography>

              </Grid>

              <Grid container sx={{ bgcolor: '', mt: 1, justifyContent: 'space-between', alignItems: 'center' }}  >

                <Grid md={7} bgcolor="" sx={{ justifyContent: 'space-between' }} container>
                  <Typography>Shipping Charges </Typography>

                  <Grid container lg={5} sx={{ bgcolor: '', justifyContent: 'space-between' }}>
                    <TextField
                      sx={{ width: '90%' }}
                      InputProps={{ sx: { height: 30 } }}
                      id="outlined-basic"
                    />
                  </Grid>
                </Grid>

                <Typography>0.000</Typography>

              </Grid>

              <Grid container sx={{ bgcolor: '', mt: 1, justifyContent: 'space-between', alignItems: 'center' }}  >

                <Grid md={7} bgcolor="" sx={{ justifyContent: 'space-between' }} container>
                  <Typography>Adjustments</Typography>

                  <Grid container lg={5} sx={{ bgcolor: '', justifyContent: 'space-between' }}>
                    <TextField
                      sx={{ width: '90%' }}
                      InputProps={{ sx: { height: 30 } }}
                      id="outlined-basic"
                    />
                  </Grid>
                </Grid>

                <Typography>0.000</Typography>

              </Grid>

              <Grid container sx={{ justifyContent: 'space-between', my: 1 }}>

                <Typography sx={{ fontWeight: '700' }}>Total (₹)</Typography>

                <Typography sx={{ fontWeight: '700' }}>0.000</Typography>

              </Grid>

            </Grid>

          </Grid>

        </Grid>



















      </form>
    </Grid>
  )
}
