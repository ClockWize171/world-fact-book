import React from "react";
import {
    Box,
    Flex,
    InputGroup,
    InputLeftElement,
    Input
} from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'

const Toolbar = ({ searchCountry, searchInput }) => {
    // const [regions, setRegions] = useState([])
    // const [isloading, setIsLoading] = useState(false)

    return (
        <Box paddingBottom={5}>
            <Flex justify="space-between">
                <Box>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Search2Icon color='gray.300' />}
                        />
                        <Input
                            borderRadius="md"
                            value={searchInput}
                            onChange={(e) => searchCountry(e.target.value)}
                            type='text'
                            placeholder='Search Country' />
                    </InputGroup>
                </Box>
                <Box paddingLeft={3}>
                    {/* <Menu>
                        <MenuButton
                            variant="ghost"
                            colorScheme="blue"
                            as={Button}
                            rightIcon={<ArrowUpDownIcon />}>
                            Filter By Region
                        </MenuButton>
                        <MenuList
                            value={region.name}
                            onClick={(e => fetchCountrybyRegion(e.target.value))}
                            >
                            <MenuItem  value="Africa">Africa</MenuItem>
                            <MenuItem value="Americas">Americas</MenuItem>
                            <MenuItem value="Asia">Asia</MenuItem>
                            <MenuItem value="Europe">Europe</MenuItem>
                            <MenuItem value="Oceania">Oceania</MenuItem>
                        </MenuList>
                    </Menu> */}
                </Box>
            </Flex>
        </Box>
    );
}

export default Toolbar;