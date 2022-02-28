import * as React from 'react';


import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar } from '@mui/material';

import { UserProps } from './User.types';

const UserWrapper: React.FC<UserProps> = ({ picture, name, id }) => {
    // const handleClick = () => {
    //     onClick(id);
    // };

    return (
      
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src={picture.thumbnail} />
              </ListItemIcon>
              <ListItemText primary={name.first + name.last} />
            </ListItemButton>
          </ListItem>
      </nav>
    </Box>
        
    );
};

export default UserWrapper;