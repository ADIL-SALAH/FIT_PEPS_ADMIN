import { Typography } from '@mui/material'
// import React, { Children } from 'react'

export const H6 = (props: any) => {

    return (
        <Typography sx={{
            fontSize: { lg: '1rem', md: '1', sm: '1', sx: '1' },
            fontWeight: 550,
            py: { lg: 1, md: 0.5 }
        }}>{props.children}</Typography>
    )
}
