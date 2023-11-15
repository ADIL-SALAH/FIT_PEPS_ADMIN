import { Grid, Typography, TextField } from '@mui/material'
import React from 'react';
import { useFormik } from 'formik';
import { CustomTextField } from '../TextField/TextField';

export default function Adress(props: any) {

    const { details, formik } = props

    return (
        <Grid container>

            {

                details?.map((data: { textFieldName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; id: string | undefined; name: string | undefined; type: string | (string & {}) | undefined; value: unknown; touched: any; errors: any; }, index: React.Key | null | undefined) =>


                    <CustomTextField key={index} data={data} formik={formik} />
                    // <Grid lg={6} sx={{ my: 1.5 }} container key={index}>

                    //     <Grid alignItems="center" width={200} display="flex"  >

                    //         <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                    //         <Typography variant='h6' fontWeight="550">:</Typography>

                    //     </Grid>

                    //     <Grid bgcolor="">

                    //         <TextField sx={{ width: 300 }}
                    //             InputProps={{ sx: { height: 40 } }}
                    //             placeholder={data.textFieldName}
                    //             id={data.id}
                    //             name={data.name}
                    //             type={data.type}
                    //             onChange={formik.handleChange}
                    //             value={data.value}
                    //             error={data.touched && Boolean(data.errors)}
                    //             helperText={data.touched && data.errors}
                    //             onBlur={formik.handleBlur}
                    //         />

                    //     </Grid>

                    // </Grid>

                )

            }

        </Grid>
    )
}
