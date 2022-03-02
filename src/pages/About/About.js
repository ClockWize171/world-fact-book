import React from "react";
import { Link, Text, Box, Container, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const About = (props) => {
    return (
        <Container padding={5}>
            <Box paddingTop={100} textAlign="center">
                <Heading
                    color="blue.400"
                    align="center"
                    as="u">About</Heading>
            </Box>
            <Box textAlign="justify" lineHeight={10} paddingTop={5}>
                <Text fontSize="xl" style={{ textIndent: "4rem" }} fontWeight="semibold">
                    This web app is developed with ReactJS. All the information of countries are being fetched and rendered on the <Link fontWeight="bold" color='blue.400' href='https://restcountries.com/'>REST Countries<ExternalLinkIcon mx={2} /></Link>and you can donate to help a countries RESTful API alive.
                </Text>
                <Text fontSize="xl" style={{ textIndent: "4rem" }} fontWeight="semibold">
                    For the styling and theming over the web app, the <Link fontWeight="bold" color='blue.400' href='https://chakra-ui.com/'> Chakra UI<ExternalLinkIcon mx={2} /></Link>is used and you can also support communities on their website.
                </Text>
            </Box>
        </Container>
    );
}

export default About;