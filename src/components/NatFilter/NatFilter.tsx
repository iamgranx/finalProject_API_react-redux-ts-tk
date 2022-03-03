import * as React from 'react';


import {Box,
        InputLabel,
        MenuItem,
        FormControl,
        Select,
        SelectChangeEvent } from '@mui/material';

import { NatProps } from './NatFilter.types';
import { setNat } from 'store/users/users.actions';
import { useDispatch } from 'react-redux';



const BasicSelect: React.FC<NatProps> = ({nat}) => {

  const dispatch = useDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNat(event.target.value as string));
  };

  return (
    <Box sx={{ minWidth: 130,  margin: '5'}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={nat}
          label="Nationalities"
          onChange={handleChange}   
          
        >
          <MenuItem value={"au,br,ca,ch,de,dk,es,fi,fr,gb,ie,ir,nl,nz,tr,us"}>
            <em>All</em>
            </MenuItem>
          <MenuItem value={"au"}>AU</MenuItem>
          <MenuItem value={"br"}>BR</MenuItem>
          <MenuItem value={"ca"}>CA</MenuItem>
          <MenuItem value={"ch"}>CH</MenuItem>
          <MenuItem value={"de"}>DE</MenuItem>
          <MenuItem value={"dk"}>DK</MenuItem>
          <MenuItem value={"es"}>ES</MenuItem>
          <MenuItem value={"fi"}>FI</MenuItem>
          <MenuItem value={"fr"}>FR</MenuItem>
          <MenuItem value={"gb"}>GB</MenuItem>
          <MenuItem value={"ie"}>IE</MenuItem>
          <MenuItem value={"ir"}>IR</MenuItem>
          <MenuItem value={"nl"}>NL</MenuItem>
          <MenuItem value={"nz"}>NZ</MenuItem>
          <MenuItem value={"tr"}>TR</MenuItem>
          <MenuItem value={"us"}>US</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;