import React from 'react';
import { Button, Empty } from 'antd';
import { useRouter } from 'next/navigation';
import { Grid } from '@mui/material';


function EmptyScreen(props: any) {

    const router = useRouter()

    const { path } = props;

    return (

        <Grid container bgcolor="" sx={{ justifyContent: 'center', alignItems: 'center', height: "78vh" }}>

            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={
                    <span>
                       Empty Data
                    </span>
                }>
                <Button type="primary" onClick={() => router.push(`${path}/create`)}>Create Now</Button>
            </Empty>

        </Grid>

    )
}

export default EmptyScreen