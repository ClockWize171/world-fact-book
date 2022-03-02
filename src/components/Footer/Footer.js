import { Box, Text } from "@chakra-ui/react";
import './Footer.css'

const Footer = (props) => {
    return ( 
        <Box
        className="footer" 
        padding="5vh"
        textAlign="center"
        >
            <Text fontSize="sm"> Developed by <strong>Thet Min Htin</strong> © 2022 All Right Reserved. </Text>
        </Box>
     );
}
 
export default Footer;