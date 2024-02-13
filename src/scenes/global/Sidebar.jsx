import { useState } from 'react';
import { ProSidebar, Menu } from 'react-pro-sidebar';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  ListItemText,
} from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Sidebar = () => {
  const [isCollapsed] = useState(false);
  const [careType, setCareType] = useState('');

  const handleChange = (event) => {
    setCareType(event.target.value);
  };
  const [TypeRisk, setTypeRisk] = useState([]);
  const riskType = ['Low risk', 'Mid risk', 'High risk', 'Option text here'];
  const handleChangeRisk = (event) => {
    const {
      target: { value },
    } = event;
    setTypeRisk(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `#212121 !important`,
          borderRadius: '15px',
          height: '650px !important',
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {!isCollapsed && (
            <Box mb='25px'>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Filters
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            paddingLeft={isCollapsed ? undefined : '10%'}
            sx={{ mr: '20px' }}
          >
            <Typography
              variant='h6'
              // color={colors.grey[300]}
              sx={{ color: '#FFFFFF', fontSize: '14px' }}
            >
              Industry
            </Typography>
            <FormControl sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id='demo-simple-select-helper-label'>
                <LayersOutlinedIcon />
                Health care
              </InputLabel>
              <Select
                labelId='demo-simple-select-helper-label'
                id='demo-simple-select-helper'
                value={careType}
                label='Health Care'
                onChange={handleChange}
              >
                <MenuItem value={10}>Hospitals</MenuItem>
                <MenuItem value={20}>Nursing</MenuItem>
                <MenuItem value={30}>Birth centers</MenuItem>
              </Select>
              <FormHelperText sx={{ color: '#6B6B6B' }}>
                Choose something
              </FormHelperText>
            </FormControl>
          </Box>

          <Box
            paddingLeft={isCollapsed ? undefined : '10%'}
            sx={{ mt: '20px', mr: '20px' }}
          >
            <Typography
              variant='h6'
              sx={{ color: '#FFFFFF', fontSize: '14px' }}
            >
              Market Cap
            </Typography>
            <FormControl sx={{ mr: '20px', minWidth: 120 }} fullWidth>
              <InputLabel id='demo-simple-select-helper-label'>
                <LayersOutlinedIcon />
                Large-cap
              </InputLabel>
              <Select
                labelId='demo-simple-select-helper-label'
                id='demo-simple-select-helper'
                value={careType}
                label='Health Care'
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText sx={{ color: '#6B6B6B' }}>
                Press Apply to see changes.
              </FormHelperText>
            </FormControl>
          </Box>

          <Box
            paddingLeft={isCollapsed ? undefined : '10%'}
            sx={{ mt: '20px', mr: '20px' }}
          >
            <Typography
              variant='h6'
              sx={{ color: '#FFFFFF', fontSize: '14px' }}
            >
              Risk
            </Typography>
            <FormControl sx={{ mr: '20px', minWidth: 120 }} fullWidth>
              <InputLabel>
                <LayersOutlinedIcon />
                Insert text here
              </InputLabel>
              <Select
                // labelId='demo-simple-select-helper-label'
                // id='demo-simple-select-helper'
                value={careType}
                onChange={handleChangeRisk}
                sx={{ border: '1px solid #D6D6D6' }}
              >
                <Box
                  sx={{
                    border: '1px solid #D6D6D6',
                    borderRadius: '8px',
                  }}
                >
                  {riskType.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#F1F3F5 !important',
                          color: '#6B6B6B',
                        },
                      }}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        checked={TypeRisk.indexOf(name) > -1}
                        sx={{
                          m: '5px',
                        }}
                      />

                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Box>
              </Select>
            </FormControl>
          </Box>
          <button
            style={{
              backgroundColor: '#554DB7',
              borderRadius: '15px',
              width: '200px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '20px',
              margin: '40px',
              border: 'none',
              marginTop: '120px',
              cursor: 'pointer',
            }}
          >
            Apply Filters
          </button>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
