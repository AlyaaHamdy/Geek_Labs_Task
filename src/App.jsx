import { useState } from 'react';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useMode } from './theme';
import Navbar from './scenes/global/Navbar';

function App() {
  const [theme] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
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
              height: {
                xl: '73vh',
                lg: '85vh',
                md: '100%',
                sm: 'auto',
                xs: '160vh',
              },
              width: {
                xl: '1850px',
                lg: '1400px',
                md: '1000px',
                sm: '700px',
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
  );
}

export default App;
