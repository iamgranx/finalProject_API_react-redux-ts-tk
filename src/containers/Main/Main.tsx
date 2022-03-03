import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {Box,
        List,
        CssBaseline,
        Container} from '@mui/material';

import { getSlice } from "store/users/users.selectors";
import { setUsers } from "store/users/users.actions";


import UserWrapper from "components/User/User";
import Header from "components/Header";
import { getUser } from "api/users";

 

const Main: React.FC = () => {

  const { userList, currentPage, perPage, nat, gender } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(currentPage, perPage, nat, gender).then((data) => dispatch(setUsers(data.results))) ;
  }, [currentPage, dispatch, perPage, nat, gender]);





  return (
    <Box  sx={{ width:'100%', maxWidth: 750, flexGrow: 1, }}>
      <Header  page={currentPage} nat={nat} results={perPage} gender={gender} />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ width: '100%', bgcolor: 'background.paper', height: '100vh' }}>
            <nav aria-label="main mailbox folders">
              <List>
                {userList.map((user) => (
                <UserWrapper key={user.id.value} {...user}  />
              ))}
            </List>        
          </nav>
        </Box>
        </Container>
      </React.Fragment>
    </Box>  
    )
  };




export default Main;