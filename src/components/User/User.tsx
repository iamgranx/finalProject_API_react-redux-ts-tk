import * as React from 'react';


import {Box,
        ListItem,
        ListItemButton,
        ListItemIcon,
        ListItemText,
        Avatar,
        Modal,
        CardContent,
        Typography,
        ImageList,
        ImageListItem,
        ImageListItemBar} from '@mui/material';

import { UserProps } from './User.types';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
  bgcolor: 'background.paper',
  border: '2px'
};

const UserWrapper: React.FC<UserProps> = ({ picture, name, id, nat, gender, location, email, dob }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 

    return (
      <>
      <Box sx={{ width: '100%',  bgcolor: 'background.paper'}}>
        
      <nav aria-label="main mailbox folders">

          <ListItem disablePadding onClick={handleOpen}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src={picture.thumbnail} />
              </ListItemIcon>
              <ImageListItemBar
                title={name.first + name.last}
                subtitle={<span>E-mail: {email}</span>}
                position="below"
          />
            </ListItemButton>
          </ListItem>
      </nav>
    </Box>
    <div>
      
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <ImageList sx={style}>
        <ImageListItem>
          <img
            src={picture.large}
            alt={name.title + name.first + name.last}
            loading="lazy"
          />
          <ImageListItemBar
            title={name.first}
            subtitle={<span>E-mail: {email}</span>}
            position="below"
          />
      </ImageListItem>
      <CardContent>
          <Typography variant="body2">
          <ListItemText primary={"Gender: " + gender} />
          </Typography>
          <Typography variant="body2">
          <ListItemText primary={"Loaction: " + location.state} />
          </Typography>
          <Typography variant="body2">
          <ListItemText primary={"Age: " + dob.age + " y.o"} />
          </Typography>
          <Typography variant="body2">
          <ListItemText primary={"Nationality: " + nat} />
          </Typography>
      </CardContent>
    </ImageList>



    </Modal>
  </div>
      </>
    );
};

export default UserWrapper;