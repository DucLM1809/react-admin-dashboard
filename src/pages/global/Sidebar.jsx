import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => {
        setSelected(title)
        navigate(to)
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SidebarLayout = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .ps-sidebar-root': {
          border: 'none'
        },
        '& .ps-sidebar-container': {
          background: `${colors.primary[400]} !important`
        },
        '& .ps-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .ps-menuitem-root .ps-menu-button:hover': {
          color: '#868dfb !important'
        },
        '& .ps-menu-button': {
          background: `${colors.primary[400]} !important`
        },
        '& .ps-menuitem-root.ps-active .ps-menu-button': {
          color: '#6870fa !important'
        }
      }}
    >
      <Sidebar defaultCollapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed)
            }}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed)
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  src='../../assets/user.png'
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>

              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Admin MD
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  Admin MD
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Contacts Infor'
              to='/contacts'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Invoices'
              to='/invoices'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title='Profile Form'
              to='/form'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title='Bar Chart'
              to='/bar'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Pie Chart'
              to='/pie'
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Line Chart'
              to='/line'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geography Chart'
              to='/geography'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SidebarLayout
