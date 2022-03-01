import React, { useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationProps } from './Pagination.types';
import { useDispatch, useSelector } from 'react-redux';
import { getSlice } from 'store/users/users.selectors';
import { getUser } from "api/users";
import { setCurrentPage } from "store/users/users.actions";



const BasicPagination: React.FC<PaginationProps> = () => {

  const {  currentPage, perPage } = useSelector(getSlice);
  const dispatch = useDispatch();
  


  function handleChange() {
    dispatch(setCurrentPage(currentPage))
  } 


    


  return (
    <Stack spacing={2}>
      <Pagination page={currentPage} onChange={handleChange} count={10} color="primary" />
    </Stack>
  );
};

export default BasicPagination;