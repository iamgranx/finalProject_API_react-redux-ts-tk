import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import List from '@mui/material/List';


import { getSlice } from "store/users/users.selectors";
import { setUsers } from "store/users/users.actions";


import UserWrapper from "components/User/User";
// import { User, ResponseSucces } from "api/users.types";
import { getUser } from "api/users";

 

const UserList: React.FC = () => {


    const { userList } = useSelector(getSlice);
    const dispatch = useDispatch();
    

    useEffect(() => {
      getUser().then((data) => dispatch(setUsers(data.results)))  ;
   }, [dispatch]);

   

  
    
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {userList.map((user) => (
              <UserWrapper key={user.id.value} {...user}  />
          ))}
        </List>
        
      </nav>
    </Box>
        
    )
};

export default UserList;