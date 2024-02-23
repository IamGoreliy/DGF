import styled from '@emotion/styled';
import {TextField} from '@mui/material';
import {TelegranSvg} from '../image/svgComponents';
import {createSvgIcon} from '@mui/material';

export const CustDiv = styled(props => {
  const {...other} = props;
  return <div {...other}/>
})(() => {
  return {

  }
})

export const CustH2 = styled(props => {
  const {color, widthB, heightB, topB, leftB, bgcB, ...other} = props;
  return <h2 {...other}/>
})(({
  color = 'white',
  widthB = '4rem',
  heightB = '3px',
  topB = '0px',
  leftB = '0px',
  bgcB = 'black',

}) => {
  return {
      color: color,
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        width: widthB,
        height: heightB,
        position: 'absolute',
        top: topB,
        left: leftB,
        backgroundColor: bgcB,
      }
  }
})

export const CustH3 = styled(props => {
  const {content, color, widthB, heightB, topB, leftB, bg, bgcB, colorB, ...other} = props;
  return <h2 {...other}/>
})(({
  content = '""',
  color = 'white',
  widthB = '4rem',
  heightB = '3px',
  topB = '0px',
  leftB = '0px',
  bg = 'white',
  bgcB = 'black',
  colorB = 'white'
}) => {
  return {
    color: color,
    position: 'relative',
    padding: '20px clamp(20px,2.5vw,40px) 20px',
    backgroundColor: bg,
    margin: '0px',
    '&::before': {
      content: `${content}`,
      display: 'block',
      width: widthB,
      height: heightB,
      position: 'absolute',
      top: topB,
      left: leftB,
      backgroundColor: bgcB,
      color: colorB,
      fontFamily: 'inherit',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: '10px',
      lineHeight: '12px',
      textTransform: 'uppercase',
    }
  }
})

export const CustH4 = styled(props => {
  const {...other} = props;
  return <h4 {...other} />
})(() => {
  return {

  }
})

export const CustP = styled(props => {
  const {fonts, display, color,...other} = props;
  return <p {...other}/>
})((
  {
    color = 'white',
    display = 'inline',
    width = 'auto',
    fonts= {},
    // color = 'white',
    // margin = '0px',
    // padding = '0px',
  }
) => {
  return {
    color,
    display,
    width,
    padding: '0px',
    margin: '0px',
    ...fonts,
    // display: display,
    // color: color,
    // margin: margin,
    // padding: padding,
  }
})

export const CustSpan = styled(props => {
  const {marginLeft, marginRight,  textAlign, ...other} = props;
  return <span {...other}/>
})(({
  color = 'white',
  display = 'block',
  width = 'auto',
  marginLeft = '0px',
  marginRight = '0px',
  textAlign = 'none',
}) => {
  return {
    color,
    display,
    width,
    marginLeft,
    marginRight,
    textAlign,
  }
})
export const CustLi = styled(props => {
  const {mtEplusE, mlEplusE, ...other} = props;
  return <li {...other}/>
})(({
  mtEplusE = '0px',
  mlEplusE = '0px',
}) => {
  return {
    '& + &': {
      marginTop: mtEplusE,
      marginLeft: mlEplusE,
    }
  }
})


export const CustTextField = styled(props => {
  const {textAlign,...other} = props;
  return <TextField {...other}/>
})(({
  textAlign = false,
}) => {
  return {
    '& label': {
      color: 'white',
      fontSize: 18,
      width: '100%',
      textAlign: textAlign ? 'left' : 'center',
},
    '&:hover label': {
      color: 'yellow',
    },
    '& label.Mui-focused': {
      color: 'lime',
    },
    '& input': {
      color: 'white',
      fontSize: 18
    },
    '.MuiInput-root:before': {
      borderBottom: '2px solid white',
      left: 0,
      bottom: 0,
      content: '""',
      position: 'absolute',
      right: 0,
    },
    '.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottom: '2px solid yellow',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid lime',
    },
  }
})

export const CustTelegram = styled(props => {
  const {...other} = props;
  return <TelegranSvg {...other}/>
})(({
  hoverFill = 'yellow',
}) => {
  return {
    '&:hover': {
      fill: hoverFill,
    }
  }
})

export const CustSvg = styled(props => {
  const {svgurl, ...other} = props;
  const SvgIcon = createSvgIcon(svgurl);
  return <SvgIcon {...other}/>
})(({
  hoverFill = 'yellow',
}) => {
  return {
    '&:hover': {
      fill: hoverFill
    }
  }
})

export const CustPSectionAbout = styled(props => {
  const {fonts, display, color,...other} = props;
  return <p {...other}/>
})((
  {
    color = 'black',
    display = 'block',
    width = 'auto',
    fonts= {},
    // color = 'white',
    // margin = '0px',
    // padding = '0px',
  }
) => {
  return {
    color,
    display,
    width,
    padding: '0px',
    margin: '0px',
    ...fonts,
    // display: display,
    // color: color,
    // margin: margin,
    // padding: padding,
  }
})

export const CustSpanSectionAbout = styled(props => {
  const {fonts, display, color,...other} = props;
  return <span {...other}/>
})((
  {

  }
) => {
  return {

  }
})