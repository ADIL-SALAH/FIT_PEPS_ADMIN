import { Grid } from '@mui/material';
import React from 'react'
import { CustomTextField } from '../TextField/TextField';

export default function OtherDetails(props: any) {

    const { otherDetails, formik } = props;

    console.log("formItems", otherDetails);

    return (
        <Grid container alignItems="center" justifyContent="center" >

            {otherDetails.map((data: any, index: React.Key | null | undefined) =>

                <CustomTextField key={index} data={data} formik={formik} />

            )}

        </Grid>
    )
}
