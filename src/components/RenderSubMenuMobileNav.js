import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { height } from '@mui/system';

const subMenuLink = [
  'ПИТАННЯ ТА ВІДПОВІДІ',
  'НАСЛІДКИ НЕСПЛАТИ БОРГУ',
  'ІДЕНТИФІКАЦІЯ БОРГУ'
];

const animationSubMenu = (state) => {
  if (state) {
    return {
      height: '120px',
    }
  }
  return {
    height: '0px',
    marginTop: '0px',
  }
}

export const RenderSubMenuMobileNav = ({ nameElement, stateSubMenu, setStateSubMenu }) => {
  return (
    <Box>
      <Typography
        onClick={() => setStateSubMenu(!stateSubMenu)}
        sx={{
          color: 'white',
        }}
      >
        {nameElement}
      </Typography>
      <Box
        component={'ul'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '20px',
          listStyle: 'none',
          padding: 0,
          mt: '20px',
          backgroundColor: '#2a364b',
          width: '100%',
          overflow: 'hidden',
          ...animationSubMenu(stateSubMenu),
          transition: 'height, 500ms linear'

        }}
      >
        {subMenuLink.map((ele, index) => {
          return (
            <Box
              key={index}
              component={'li'}
            >
              <Link
                href={''}
                style={{
                  textDecoration: "none",
                  color: 'white',
                }}
              >
                {ele}
              </Link>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}