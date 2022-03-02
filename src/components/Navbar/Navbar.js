import { Box, Heading, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, IconButton, Spacer } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbar = (props) => {

    // Toggle Color Mode 
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Box padding={5}>
            <Flex>
                <Box>
                    <Heading
                        color="blue.400"
                        size="md">
                        World-Fact Book
                    </Heading>
                </Box>
                <Spacer />
                <Box>
                    <Breadcrumb color="blue.400">
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/about'>About</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/countries'>Countries</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Spacer />
                <Box>
                    <IconButton color="blue.400" icon={isDark ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode}></IconButton>
                </Box>
            </Flex>
        </Box>
    );
}

export default Navbar;