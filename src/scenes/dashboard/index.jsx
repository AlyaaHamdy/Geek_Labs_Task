import { Box, Typography, Divider } from '@mui/material';
import { textData } from '../../data/textData';

const Dashboard = () => {
  return (
    <Box m='15px'>
      <Box
        display='grid'
        gridTemplateColumns='repeat(9, 1fr)'
        gridAutoRows='140px'
        gap='20px'
        sx={{
          borderRadius: '15px',
          backgroundColor: '#212121',
        }}
      >
        <Box gridColumn='span 12' gridRow='span 4'>
          <Box
            sx={{
              border: '1px solid #D5D5D5',
              borderRadius: '10px',
              height: 'auto',
              margin: '10px',
              padding: '15px',
              background: 'linear-gradient(to top left, #667EEA , #212121 70%)',
            }}
          >
            <Box
              display='flex'
              justifyContent='space-between'
              flexDirection={{ xs: 'column', md: 'row' }}
            >
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems={'center'}
                sx={{ textAlign: 'center' }}
              >
                <img
                  alt='ticker'
                  src='../assets/ticker.png'
                  width={'40px'}
                  height={'33px'}
                />
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xl: '20px', sm: '15px', xs: '15px' },
                  }}
                >
                  $TSLA
                </Typography>
              </Box>
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
                sx={{ color: '#B9B9B9' }}
              />
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems={'center'}
                sx={{ textAlign: 'center' }}
              >
                <img
                  alt='contract'
                  src='../assets/contract.png'
                  width={'40px'}
                  height={'33px'}
                />
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xl: '20px', sm: '15px', xs: '15px' },
                  }}
                >
                  200 Contracts
                </Typography>
              </Box>
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
                sx={{ color: '#B9B9B9' }}
              />
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems={'center'}
                sx={{
                  textAlign: 'center',
                }}
              >
                <img
                  alt='volume'
                  src='../assets/volume.png'
                  width={'40px'}
                  height={'33px'}
                />
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xl: '20px', sm: '15px', xs: '15px' },
                  }}
                >
                  12.2%
                </Typography>
              </Box>
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
                sx={{ color: '#B9B9B9' }}
              />
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems={'center'}
                sx={{
                  textAlign: 'center',
                }}
              >
                <img
                  alt='high risk'
                  src='../assets/highRisk.png'
                  width={"xl:'40px',sm:'20px'"}
                  height={'33px'}
                />
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: {
                      xl: '20px',
                      sm: '15px',
                      xs: '15px',
                    },
                  }}
                >
                  High Risk
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: { xl: '25px', sm: '15px', xs: '15px' },
                mt: '5px',
                padding: '15px',
                fontFamily: 'Nunito Sans',
              }}
            >
              Someone Just bought xxxx contracts of $XYZ, this is notable
              because the relative volume on this options trade is X.X%.
            </Typography>
          </Box>
          {textData.map((details, i) => (
            <Box
              key={`${details.txId}-${i}`}
              sx={{
                border: '1px solid #D5D5D5',
                borderRadius: '10px',
                backgroundColor: '#121213',
                padding: '5px',
                margin: '10px',
              }}
            >
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontSize: {
                    xl: '24px',
                    lg: '20px',
                    md: '18px',
                    sm: '15px',
                  },
                  fontFamily: 'Nunito Sans',
                  ml: '30px',
                }}
              >
                {details.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
