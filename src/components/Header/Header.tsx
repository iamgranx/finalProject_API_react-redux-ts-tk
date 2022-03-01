import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { HeaderProps } from './Header.types';
import BasicPagination from 'components/Pagination/Pagination';

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <BasicPagination />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;