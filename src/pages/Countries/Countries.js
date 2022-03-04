import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Pagination from "../../components/Pagination/Pagination";
import {
    Container,
    Box,
    Flex,
    SimpleGrid,
    Skeleton,
    SkeletonText,
    Image,
    Text,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon, Search2Icon, ArrowUpDownIcon } from '@chakra-ui/icons'

const url = ('https://restcountries.com/v3.1/all')

const Countries = (props) => {
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12);

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

    // Calculation for Billion Population
    function BigNumberCalculation(labelValue) {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9

            ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(3) + " Billion"
            // Six Zeroes for Millions 
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(3) + " Million"
                // Three Zeroes for Thousands
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(3) + " Thousand"

                    : Math.abs(Number(labelValue));
    }

    // Get Current Page
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost)

    // Change Page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Skeleton Counts
    const n = 12;

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
                                borderRadius="sm"
                                value={searchInput}
                                onChange={(e) => searchCountry(e.target.value)}
                                type='text'
                                placeholder='Search Country' />
                        </InputGroup>
                    </Box>
                    <Box paddingLeft={3}>
                        <Menu>
                            <MenuButton
                                variant="ghost"
                                colorScheme="blue"
                                as={Button}
                                rightIcon={<ArrowUpDownIcon />}>
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


            {/* Countries */}
            <Box padding={5}>
                <Container maxW="8xl">
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
                                                    <Box
                                                        align="center">
                                                        <Image
                                                            style={{ border: '1px solid black' }}
                                                            margin={4}
                                                            src={country.flags.png}
                                                            w="90%"
                                                            height="10rem" />
                                                    </Box>
                                                    <Box
                                                        textAlign="justify"
                                                        padding={4}>
                                                        <Text>
                                                            Name: <strong>{country.name.common}</strong>
                                                        </Text>
                                                        <Text>
                                                            Population: <strong>{BigNumberCalculation(country.population)}</strong>
                                                        </Text>
                                                        <Text>
                                                            Region: <strong>{country.region}</strong>
                                                        </Text>
                                                    </Box>
                                                    <Box
                                                        paddingLeft={5}
                                                        paddingBottom={5}>
                                                        <Link to={`/${country.name.common}`} style={{ textDecoration: "none" }}>
                                                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='solid'>
                                                                See More
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            )
                                        })}
                                    </>) : (
                                    <>
                                        {currentPosts.map(country => {
                                            return (
                                                <Box
                                                    key={country.cca2}
                                                    w="full"
                                                    borderWidth='2px'
                                                    borderRadius='lg'>
                                                    <Box
                                                        align="center">
                                                        <Image
                                                            style={{ border: '1px solid black' }}
                                                            margin={4}
                                                            src={country.flags.png}
                                                            w="90%"
                                                            height="10rem" />
                                                    </Box>
                                                    <Box
                                                        padding={5}>
                                                        <Text>
                                                            Name: <strong>{country.name.common}</strong>
                                                        </Text>
                                                        <Text>
                                                            Population: <strong>{BigNumberCalculation(country.population)}</strong>
                                                        </Text>
                                                        <Text>
                                                            Region: <strong>{country.region}</strong>
                                                        </Text>
                                                    </Box>
                                                    <Box
                                                        paddingLeft={5}
                                                        paddingBottom={5}>
                                                        <Link to={`/${country.name.common}`} style={{ textDecoration: "none" }}>
                                                            <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' variant='solid'>
                                                                See More
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                                </Box>

                                            )
                                        })}
                                    </>)}

                            </>
                        ) : (
                            <>
                                {[...Array(n)].map((index) => (
                                    <div className="" key={index}>
                                        <Box
                                            w="full"
                                            borderWidth='2px'
                                            borderRadius='lg'>
                                            <Box>
                                                <Skeleton w="full" h="100px"></Skeleton>
                                            </Box>
                                            <Box
                                                textAlign="justify"
                                                padding={4}>
                                                <SkeletonText mt='4' noOfLines={3} spacing='4' />
                                            </Box>
                                        </Box>
                                    </div>
                                )
                                )}
                            </>


                        )}
                    </SimpleGrid>

                    {/* Pagination */}
                    {searchInput.length > 0 ?
                        (
                            <></>
                        ) : (
                            <Box padding={5} align="center">
                                <Pagination postPerPage={postsPerPage} totalPosts={countries.length} pagniate={paginate} />
                            </Box>
                        )}

                </Container>
            </Box>
        </>
    );
}

export default Countries;