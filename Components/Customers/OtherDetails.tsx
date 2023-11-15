import { Grid, Typography, TextField } from '@mui/material';
import React from 'react'
import { CustomTextField } from '../TextField/TextField';

function OtherDetails(props: any) {

    const { otherDetails, formik } = props

    return (
        <Grid container>

            {

                otherDetails?.map((data: { textFieldName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.PromiseLikeOfReactNode | null | undefined; id: string | undefined; name: string | undefined; type: string | (string & {}) | undefined; value: unknown; touched: any; errors: any; }, index: React.Key | null | undefined) =>

                    <CustomTextField key={index} data={data} formik={formik} />

                )


            }

        </Grid>
    )
}

export default OtherDetails