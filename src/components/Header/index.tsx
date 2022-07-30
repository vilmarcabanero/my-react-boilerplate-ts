import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from 'utils/misc';

interface Props {}

export function Header(props: Props) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid #EBEBEB',
          // boxShadow: '0 -1px 1.5px 0 rgba(0,0,0,0.5)',
          boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)',
          display: { xs: 'flex' },
          justifyContent: 'center',
          alignItems: 'space-between',
          height: '56px',
          paddingBottom: '1px',
        }}
      >
        <Toolbar
          sx={{
            display: { xs: 'flex' },
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              cursor: 'pointer',
              '&:hover': {
                opacity: '0.8',
              },
            }}
            variant="h6"
            component="div"
            color="primary"
            onClick={() => {
              navigate('/');
              scrollToTop();
            }}
          >
            Fiona
          </Typography>
          <Box
            sx={{
              display: { xs: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          ></Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
