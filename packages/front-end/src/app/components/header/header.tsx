import { AppBar, Typography, Toolbar } from '@mui/material';

export const Header = () => (
  <AppBar>
    <Toolbar sx={{ display: 'flex' }}>
      <Typography sx={{ flex: 1 }}>Pointing pocker2</Typography>
      <Typography>Login</Typography>
    </Toolbar>
  </AppBar>
);
