import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid, Tab } from '@mui/material';
import React from 'react'
import Adress from '../Customers/Adress';
import Address from './Address';
import OtherDetails from './OtherDetails';


export default function VendorTab(props: any) {

    const { formik, otherDetails, address } = props

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{ typography: 'body1', mt: 7 }}>

            <TabContext value={value}>
                <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>

                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                        ".Mui-selected": { bgcolor: '#1F51FF', borderRadius: 3, fontWeight: 600 },
                    }}>

                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Other Details" value="1" />
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Address" value="2" />

                    </TabList>

                    <TabPanel value="1">
                        <OtherDetails formik={formik} otherDetails={otherDetails} />
                    </TabPanel>

                    <TabPanel value="2">
                        <Address formik={formik} address={address} />
                    </TabPanel>

                </Grid>

            </TabContext >

        </Grid >
    )
}
