import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const subMenu = [
  {
    name: 'ПИТАННЯ ТА ВІДПОВІДІ',
    link: '/FAQ',
  },
  {
    name: 'НАСЛІДКИ НЕСПЛАТИ БОРГУ',
    link: '/consequences',
  },
  {
    name: 'ІДЕНТИФІКАЦІЯ БОРГУ',
    link: '/Identification',
  }
];

export const RenderSubMenuPc = ({ subMenuState, changeStateSubMenu }) => {
  return (
    <Box
      // onClick={() => changeStateSubMenu(!subMenuState)}
      sx={{
        position: 'relative',
        padding: '10px 0px',
        '&:hover > ul': {
          display: 'flex',
        },
      }}
    >
      <Typography
        sx={{
          color: 'white'
        }}
      >
        ПОЗИЧАЛЬНИКАМ
      </Typography>
      <Box
        component={'ul'}
        sx={{
          position: 'absolute',
          top: '40px',
          left: '-20px',
          listStyle: 'none',
          padding: '20px',
          display:'none',
          flexDirection: 'column',
          rowGap: '10px',
          backgroundColor: '#2a364b',
          width: '300px',
          borderRadius: '20px',
          zIndex: 1,
          '&:hover': {
            display: 'flex'
          },
        }}
      >
        {subMenu.map((ele, index) => {
          const {name, link} = ele
          return (
            <Box
              key={index}
              component={'li'}
            >
              <Link
                href={link}
                style={{
                  textDecoration: 'none',
                  color: 'white'
                }}
              >
                {name}
              </Link>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}