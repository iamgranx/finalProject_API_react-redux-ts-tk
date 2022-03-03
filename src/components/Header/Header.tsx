import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { HeaderProps } from './Header.types';


import BasicSelect from 'components/NatFilter/NatFilter';
import BasicPagination from 'components/Pagination/Pagination';
import ButtonsForFiter from 'components/GenderFilter/GenderFilter';

const Header: React.FC<HeaderProps> = ({page, nat, results, gender}) => {
  return (
    <Box  sx={{ width:'100%', maxWidth: 750, flexGrow: 1, mb: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="body1" color="inherit" component="div">
            Users
          </Typography>
          <BasicPagination page={page} results={results} />
          <BasicSelect nat={nat} />
          <ButtonsForFiter gender={gender} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;