import { Box, Typography, Divider } from '@mui/material';

const Navbar = () => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      flexDirection={{ xs: 'column', md: 'row' }}
      p={2}
      backgroundColor='#181818'
      borderRadius='15px'
      sx={{
        m: '40px',
        mt: '0px',
        width: {
          xl: '1850px',
          lg: '1400px',
          md: '100%',
          sm: '100%',
          xs: '600px',
        },
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#554DB7',
            borderRadius: '35px',
            color: '#FFFFFF',
            width: '100px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          coming soon
        </button>

        <Typography
          // variant='h1'
          fontWeight='bold'
          sx={{
            color: '#484848',
            fontFamily: 'Poppins',
            fontSize: {
              xl: '48px',
              lg: '38px',
              md: '30px',
              sm: '38px',
              xs: '30px',
            },
          }}
        >
          Trading
        </Typography>
      </Box>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        sx={{ color: '#B9B9B9' }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#554DB7',
            borderRadius: '35px',
            color: '#FFFFFF',
            width: '100px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          coming soon
        </button>
        <Typography
          // variant='h1'
          fontWeight='bold'
          sx={{
            color: '#484848',
            fontFamily: 'Poppins',
            fontSize: {
              xl: '48px',
              lg: '38px',
              md: '30px',
              sm: '38px',
              xs: '30px',
            },
          }}
        >
          Automation
        </Typography>
      </Box>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        sx={{ color: '#B9B9B9' }}
      />
      <Box sx={{ textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#554DB7',
            borderRadius: '35px',
            color: '#FFFFFF',
            width: '100px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          coming soon
        </button>
        <Typography
          // variant='h1'
          fontWeight='bold'
          sx={{
            color: '#484848',
            fontFamily: 'Poppins',
            fontSize: {
              xl: '48px',
              lg: '38px',
              md: '30px',
              sm: '38px',
              xs: '30px',
            },
          }}
        >
          Portfolio
        </Typography>
      </Box>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        sx={{ color: '#B9B9B9' }}
      />
      <Box>
        <Typography
          // variant='h1'
          fontWeight='bold'
          sx={{
            color: 'white',
            fontFamily: 'Poppins',
            textAlign: 'center',
            fontSize: {
              xl: '48px',
              lg: '38px',
              md: '30px',
              sm: '38px',
              xs: '30px',
            },
          }}
        >
          Alerts
        </Typography>
      </Box>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        sx={{ color: '#B9B9B9' }}
      />
      <Box>
        <Typography
          variant='h1'
          fontWeight='bold'
          sx={{
            color: '#484848',
            fontFamily: 'Poppins',
            textAlign: 'center',
            fontSize: {
              xl: '48px',
              lg: '38px',
              md: '30px',
              sm: '38px',
              xs: '30px',
            },
          }}
        >
          Training
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
