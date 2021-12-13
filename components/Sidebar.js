import { useEffect } from 'react';
import { Link as NextLink } from 'next/link';

import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

import NavSection from 'components/NavSection';
import MHidden from 'components/@material-extends/MHidden';

import sidebarConfig from 'constans/sidebarMenu';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {

  const renderContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex', 
        flexDirection: 'column'
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={NextLink} to="/" sx={{ display: 'inline-flex' }}>
          DEV_
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={NextLink} to="#">
          <AccountStyle>
            <Avatar src="/avatar.jpg" alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Artur
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200'
          }}
        >
          <Box
            component="img"
            src="/static/illustrations/illustration_avatar.png"
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Chcesz więcej?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Wykup Premium
            </Typography>
          </Box>

          <Button
            fullWidth
            href="/"
            target="_blank"
            variant="contained"
          >
            Boom
          </Button>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
};

export default Sidebar;