import { Grid, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useQueryFetchById } from '../../hooks/useFetch';

export default function CustomDropDown(props: any) {

  const { fieldName, dropDownData, data, setData, type, drop } = props;

  //console.log("dropDownData", dropDownData);

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  const path = usePathname();

  let parts = path.split("/");

  // const one = useQueryFetchById('products', parts[3]).fetchedData

  return (

    <Grid md={12} container sx={{ alignItems: 'center', justifyContent: 'start', my: 2 }}  >

      <Grid container justifyContent="start" md={12} xs={6} sx={{ bgcolor: '' }} >

        <Typography sx={{ textAlign: { md: 'end', sm: 'start', fontSize: '1rem' }, }}> {fieldName} : </Typography>

      </Grid>

      <Grid md={12} xs={12}>

        <FormControl fullWidth size='small'>
          <InputLabel id="demo-simple-select-label">{drop}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            onChange={handleChange}
          >

            <MenuItem value={0} disabled>Select {fieldName}</MenuItem>

            {dropDownData?.map((item: any, index: any) => {


              return (
                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
              )

            })
            }
          </Select>
        </FormControl>

      </Grid>
    </Grid >

  );
}