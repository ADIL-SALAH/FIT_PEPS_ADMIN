import { Box, Grid, Tab, Typography } from '@mui/material';
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Adress from '../Customers/Adress';
import OtherDetails from '../Customers/OtherDetails';

export default function Tabs(props: any) {

    const { details, otherDetails, formik, tabName } = props;

    const [value, setValue] = React.useState(1);



    return (
        <Grid sx={{ typography: 'body1', mt: 4 }}>


            <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>


                <Grid container>

                    <Typography sx={{
                        bgcolor: value === 1 ? "dodgerblue" : "white",
                        color: value === 1 ? "white" : "black",
                        cursor: "pointer", p: 1, m: 1, borderRadius: "10px"
                    }} onClick={() => setValue(1)}>Address</Typography>

                    <Typography sx={{
                        bgcolor: value === 2 ? "dodgerblue" : "white",
                        color: value === 2 ? "white" : "black",
                        cursor: "pointer", p: 1, m: 1, borderRadius: "10px"
                    }} onClick={() => setValue(2)}>OtherDetails</Typography>


                </Grid>


                {value === 1 ?
                    <Adress formik={formik} details={details} />

                    : <OtherDetails formik={formik} otherDetails={otherDetails} />

                }


            </Grid>


        </Grid >
    )
}
