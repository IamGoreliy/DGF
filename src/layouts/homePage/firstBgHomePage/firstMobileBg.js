import { Box } from "@mui/material";
import Image from "next/image";
import mobileBg from '../../../../public/image/homePage/firstMobile.png';
import { positions } from "@mui/system";
export const FirstMobileBg = () => {
    return (
        <Box 
            sx={{
                display: {xs: 'block', md: 'none'}
            }}>
        <Image
            src={mobileBg}
            alt="Mountains"
            // width='100vw'
            style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'absolute'
            }}
        />
        </Box>
    )
}