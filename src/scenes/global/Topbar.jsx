import {
  Box,
  IconButton,
  Badge,
  Avatar,
  Tooltip,
  Typography,
  CardMedia,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const Topbar = () => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Box>
        <CardMedia
          component='img'
          src={'../../assets/street suite logo-04.png'}
          sx={{
            // bgcolor: 'white',
            // ml: { md: '20px', xs: 0, md: '60px' },
            width: { xs: '50px', md: 400 },
            height: '100px',
            display: { sm: 'block' },
          }}
        />
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        p={2}
        backgroundColor='#181818'
        borderRadius='19px'
        sx={{ m: '20px', flex: 1 }}
        height={'60px'}
      >
        {/* SEARCH BAR */}
        <Box
          backgroundColor={'#F5F6FA'}
          borderRadius='50px'
          sx={{ width: '388px' }}
        >
          <IconButton type='button' sx={{ color: '#202224' }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ color: '#202224' }} placeholder='Search' />
        </Box>

        {/* ICONS */}
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Badge badgeContent={6} color='success' sx={{ m: '15px' }}>
            <NotificationsIcon sx={{ color: '#554DB7' }} />
          </Badge>
          <Tooltip title='Open settings'>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt='Admin' src='../../assets/userImg.png' />
            </IconButton>
          </Tooltip>
          <Box m={2}>
            <Typography sx={{ color: '#404040' }}>Moni Roy</Typography>
            <Typography sx={{ color: '#404040' }}>Admin</Typography>
          </Box>

          <ArrowDropDownCircleOutlinedIcon sx={{ color: '#5C5C5C' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
