"use client"
import { Grid } from "@mui/material"
import TableList from '../../../Components/UI/TableList/TableList'
import { Button } from "antd"
import { useRouter } from "next/navigation";

function page() {
    const routers = useRouter();

    function handleNew() {
        routers.push("/plan/new")
    }
    
    return (
        <Grid sx={{ mt: { md: 0 } }}>
            <Grid item container sx={{ p: 1.5 }} >
                <Grid container sx={{
                    height: "80vh",
                    width: "100%",
                    // overflowY: "scroll",
                    bgcolor: "white",
                    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                    borderRadius: "20px", p: 2
                }}>

                    <Grid container direction="row">
                        <Grid container justifyContent="flex-start" alignItems="flex-start" sx={{ width: '50%' }}>
                            {/* <Button type='text' icon={<LeftOutlined />}
                                onClick={handleButtonClick}>
                                Back
                            </Button> */}
                        </Grid>
                        <Grid container justifyContent="flex-end" alignItems="flex-start" sx={{ width: '50%' }}>
                        <Button type="primary" onClick={handleNew}>
                            Create New Plan
                        </Button>
                        </Grid>
                    </Grid>
                    <TableList />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default page