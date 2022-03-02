import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    SimpleGrid,
    Spinner,
    Image,
    Text,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import { ArrowForwardIcon, Search2Icon, ArrowUpDownIcon } from '@chakra-ui/icons'

const url = ('https://restcountries.com/v3.1/all')

const Countries = (props) => {
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setCountries(data)
            setIsLoading(true)
        }
        fetchData()
    }, [])

    // search function
    const searchCountry = (value) => {
        setSearchInput(value)

        if (searchInput) {
            const filteredCountries = countries.filter((country) => (
                Object.values(country).join("").toLowerCase().includes(value.toLowerCase())
            ))
            setFiltered(filteredCountries)
        } else {
            setFiltered(countries)
        }
    }

    return (
        <>
            {/* Start Toolbar */}
            <Box padding={5}>
                <Flex justify="space-between">
                    <Box>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<Search2Icon color='gray.300' />}
                            />
                            <Input
                                value={searchInput}
                                onChange={(e) => searchCountry(e.target.value)}
                                type='tel'
                                placeholder='Search Country' />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ArrowUpDownIcon />}>
                                Filter By Region
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Africa</MenuItem>
                                <MenuItem>America</MenuItem>
                                <MenuItem>Asia</MenuItem>
                                <MenuItem>Europe</MenuItem>
                                <MenuItem>Oceania</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Box>
            {/* End Toolbar */}

            <Box padding={5}>
                <SimpleGrid columns={[1, 2, 4]} spacing='40px'>
                    {isLoading ? (
                        <>
                            {searchInput.length > 0 ? (
                                <>
                                    {filtered.map(country => {
                                        return (
                                            <Box
                                                key={country.cca2}
                                                w="full"
                                                borderWidth='2px'
                                                borderRadius='lg'>
                                                <Box>
                                                    <Image
                                                        style={{ border: '1px solid black' }}
                                                        margin={4}
                                                        src={country.flags.png}
                                                        w="92%"
                                                        height="9rem" />
                                                </Box>
                                                <Box
                                                    textAlign="justify"
                                                    padding={4}>
                                                    <Text>
                                                        Name: <strong>{country.name.common}</strong>
                                                    </Text>
                                                    <Text>
                                                        Population: <strong>{country.population}</strong>
                                                    </Text>
                                                    <Text>
                                                        Area: <strong>{country.area}</strong>
                                                    </Text>
                                                </Box>
                                                <Box
                                                    paddingLeft={5}
                                                    paddingBottom={5}>
                                                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='solid'>
                                                        See More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </>) : (
                                    <>
                                    {countries.map(country => {
                                        return (
                                            <Box
                                                key={country.cca2}
                                                w="300px"
                                                borderWidth='2px'
                                                borderRadius='lg'>
                                                <Box
                                                    align="center">
                                                    <Image
                                                        style={{ border: '1px solid black' }}
                                                        margin={4}
                                                        src={country.flags.png}
                                                        w="60%"
                                                        height="9rem" />
                                                </Box>
                                                <Box
                                                    padding={5}>
                                                    <Text>
                                                        Name: <strong>{country.name.common}</strong>
                                                    </Text>
                                                    <Text>
                                                        Population: <strong>{country.population}</strong>
                                                    </Text>
                                                    <Text>
                                                        Area: <strong>{country.area}</strong>
                                                    </Text>
                                                </Box>
                                                <Box
                                                    paddingLeft={5}
                                                    paddingBottom={5}>
                                                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='solid'>
                                                        See More
                                                    </Button>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </>)}
                        </>
                    ) : (
                        <Box align="center">
                            <Text fontSize="4xl">
                                <Spinner size='lg' /> Countries Loading...
                            </Text>
                        </Box>

                    )}
                </SimpleGrid>
            </Box>
        </>
    );
}

export default Countries;