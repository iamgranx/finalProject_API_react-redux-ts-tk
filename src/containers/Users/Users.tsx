import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import List from '@mui/material/List';


import { getSlice } from "store/users/users.selectors";
import { setUsers, setCurrentPage } from "store/users/users.actions";


import UserWrapper from "components/User/User";
import Header from "components/Header";
import { getUser } from "api/users";

 

const UserList: React.FC = () => {


    const { userList, currentPage, perPage } = useSelector(getSlice);
    const dispatch = useDispatch();
 


    useEffect(() => {
      getUser(currentPage, perPage).then((data) => dispatch(setUsers(data.results))) ;
   }, [currentPage, dispatch, perPage]);

   function handleChange() {
    dispatch(setCurrentPage(currentPage))};





    return (   
      <>
      <Header onHandle={handleChange} page={currentPage}/>      
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {userList.map((user) => (
              <UserWrapper key={user.id.value} {...user}  />
          ))}
        </List>
        
      </nav>
    </Box>
      </>  
    )
};

export default UserList;