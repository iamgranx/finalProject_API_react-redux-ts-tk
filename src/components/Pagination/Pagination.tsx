import React from "react";

import { useDispatch} from 'react-redux';


import {Pagination,
        Stack,
        Box,
        InputLabel,
        MenuItem,
        FormControl,
        Select,
        SelectChangeEvent} from '@mui/material';



import { PaginationProps } from './Pagination.types';
import { setCurrentPage, setPerPage } from 'store/users/users.actions';


const BasicPagination: React.FC<PaginationProps> = ({page, results}) => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setPerPage(event.target.value))
  }


  return (
    <>
    <Stack spacing={1}>
      <Pagination page={page} onChange={(_,num) => dispatch(setCurrentPage(num))} count={10} color="primary" size="small" />
    </Stack>
    <Box sx={{ minWidth: 110 }}>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
    <InputLabel id="demo-simple-select-standard-label">Results</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={results}
        label="results"
        onChange={handleChange}   
        
      > <MenuItem value={"10"}>10</MenuItem>
        <MenuItem value={"15"}>15</MenuItem>
        <MenuItem value={"20"}>20</MenuItem>
        <MenuItem value={"25"}>25</MenuItem>
        <MenuItem value={"50"}>50</MenuItem>
        <MenuItem value={"100"}>100</MenuItem>
        <MenuItem value={"150"}>150</MenuItem>
        <MenuItem value={"200"}>200</MenuItem>
        <MenuItem value={"250"}>250</MenuItem>
        <MenuItem value={"500"}>500</MenuItem>
      </Select>
    </FormControl>
  </Box>
    
    </>
    
  );
};

export default BasicPagination;