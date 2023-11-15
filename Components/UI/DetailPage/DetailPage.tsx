import { Grid, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import FormHeader from '../Form/FormHeader'

export default function DetailPage(props: any) {

    const { overviewData } = props;

    const path = usePathname();

    let parts = path.split("/");

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto' }} height="">

            <Grid container>
                <FormHeader parts={parts} type="false" heading="Overview" />
            </Grid>

            {
                overviewData?.map((data: any, index: any) =>

                    <Grid key={index} container sm={10} md={10} lg={11} sx={{ bgcolor: "", my: 0.6 }}>

                        <Grid sm={3.5} md={3} container bgcolor="" sx={{ alignItems: 'end' }}>
                            <Typography sx={{ ml: 'auto', mr: 2, fontSize: '1.2rem' }}>{data.fieldName} :</Typography>
                        </Grid>

                        <Grid sm={3.5} md={3.5} container bgcolor="">
                            <Typography sx={{ ml: 2, fontSize: '1.3rem', fontWeight: 550 }}>{data.value}</Typography>
                        </Grid>

                    </Grid>

                )
            }

        </Grid>


    )
}