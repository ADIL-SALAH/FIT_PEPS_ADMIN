import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function SalesFormField(props: any) {

    const { items } = props;

    return (

        <Grid container display="flex" mt={4} justifyContent="space-around" >
            {
                items.map((data: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; titleName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (

                    <Box key={index}>

                        <Typography fontWeight="550">{data.title}</Typography>

                        <Box sx={{ bgcolor: '#E5E4E2', width: 350, mt: 1, borderRadius: 2 }}>

                            <Typography sx={{ py: 1, ml: 1, fontWeight: 550 }}>{data.titleName}</Typography>

                        </Box>

                    </Box>

                ))
            }

        </Grid>


        // <div>SalesFormField</div>
    )
}
