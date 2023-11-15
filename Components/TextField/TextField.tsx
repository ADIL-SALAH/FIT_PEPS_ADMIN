import { Typography, Grid, TextField } from '@mui/material'
import React from 'react'

export const CustomTextField = (props: any) => {

    const { data, formik, rows, type } = props;




    return (


        <Grid container
            lg={type == "billing" ? 6 : ''}
            sx={{ alignItems: 'center', justifyContent: 'start', py: 2 }} >

            <Grid container justifyContent="start" md={12} xs={12} sx={{ bgcolor: '' }} >

                <Typography sx={{ textAlign: { md: 'end', sm: 'start', fontSize: '1rem' } }}> {data.textFieldName} : </Typography>

            </Grid>

            <Grid container justifyContent="start"
                // md={4}
                md={type == "billing" ? 3 : ''}
                xs={12}
                sx={{ alignItems: 'center', bgcolor: '' }}>

                <TextField
                    size='small'
                    sx={{
                        width: {
                            xs: '100%', md: '100%',
                            mt: 1
                        }
                    }}
                    placeholder={data.textFieldName}
                    id={data.id}
                    name={data.id}
                    type={data.type}
                    onChange={formik.handleChange}
                    value={formik.values[data.id]}
                    error={formik.touched[data.id] && Boolean(formik.errors[data.id])}
                    helperText={formik.touched[data.id] && formik.errors[data.id]}
                    onBlur={formik.handleBlur}
                    multiline
                    rows={data.rows}

                //  minRows={5}

                />

            </Grid>

        </Grid>




    )
}
