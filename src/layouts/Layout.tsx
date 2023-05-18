import { Outlet } from 'react-router-dom';
import { MantineProvider, Box } from '@mantine/core';
import customTheme from 'utils/mantine/customTheme';
import Header from './Header';

function Layout() {
  return (
    <MantineProvider theme={customTheme} withNormalizeCSS withGlobalStyles>
      <Header />
      <Box component='main' pt={40} pb={44} bg='#F5F5F5' mih='calc(100vh - 84px)'>
        <Outlet />
      </Box>
    </MantineProvider>
  );
}

export default Layout;
