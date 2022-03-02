import { Box, Text } from "@chakra-ui/react";
import './Footer.css'

const Footer = (props) => {
    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <Box
            className="footer"
            paddingTop="5vh"
            paddingBottom="5vh"
            textAlign="center"
        >
            <Text fontSize="sm"> Developed by <strong>Thet Min Htin</strong> © {getYear()} All Right Reserved. </Text>
        </Box>
    );
}

export default Footer;