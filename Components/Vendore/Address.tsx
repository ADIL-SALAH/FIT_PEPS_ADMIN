import { Grid } from '@mui/material';
import React from 'react'
import { CustomTextField } from '../TextField/TextField';

export default function Address(props: any) {

    const { address, formik  } = props;

    return (
        <Grid container alignItems="center" justifyContent="center" >

            {address.map((data: any, index: React.Key | null | undefined) =>

                <CustomTextField key={index} data={data} formik={formik} />

            )}

        </Grid>
    )
}
