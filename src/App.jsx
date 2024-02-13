import { useState } from 'react';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Navbar from './scenes/global/Navbar';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Navbar />
            <Box
              display='flex'
              justifyContent='space-between'
              p={2}
              backgroundColor='#181818'
              borderRadius='15px'
              sx={{
                m: '40px',
                mt: '-15px',
                height: { xl: '73vh', md: '100%', sm: '100%', xs: '130vh' },
                width: {
                  xl: '1850px',
                  lg: '1400px',
                  md: '100%',
                  sm: '100%',
                  xs: '600px',
                },
              }}
            >
              <Sidebar isSidebar={isSidebar} />
              <Dashboard />
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
