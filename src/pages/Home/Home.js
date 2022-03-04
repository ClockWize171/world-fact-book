import {
    Stack,
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Skeleton,
    SkeletonText
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import worldMap from '../../assets/images/worldmap.png'

const url = ('https://restcountries.com/v3.1/all')

const Home = () => {


    const totalCountries = []
    const population = []
    const sortingPopulation = []
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

    // Start of Population Section
    // Pushing All populiation into empty array "population"
    countries.map(country => {
        return (
            population.push(country.population)
        )
    })
    // Total Population By Reducer
    const totalPopulation = population.reduce((partialSum, a) => partialSum + a, 0);
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
    // End of Population Section

    // Start of counting countries
    countries.map(country => {
        return (
            totalCountries.push(country.name.common)
        )
    })
    // End of counting countries

    // Start of sorting by population
    countries.map(country => {
        return (
            sortingPopulation.push(country)
        )
    })
    var toArray = Object.values(sortingPopulation)
    var sortedByPopulation = [...toArray].sort((a, b) => b.population - a.population)
    var sortedPopulation = sortedByPopulation.slice(0, 4)
    // End of sorting by population

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:479px)");

    return (
        <Container
            maxW='container.xl'
            paddingTop={isNotSmallerScreen ? "5vh" : "5vh"}
            paddingBottom="2vh">
            <Stack direction={['column', 'row']} justify="space-between">
                {/* first column */}
                <Box>
                    <Heading
                        color="blue.400"
                        as="u">
                        World Information
                    </Heading>
                    <Box
                        paddingTop={isNotSmallerScreen ? "10vh" : "5vh"}>
                        <Image w="25rem" h="15rem" src={worldMap}></Image>
                    </Box>
                    <Box paddingTop={5}>
                        {/* skeleton added */}
                        {isLoading ? (
                            <Text
                                fontSize={isNotSmallerScreen ? "3xl" : "2xl"}>
                                Total Countries: <strong>{totalCountries.length}</strong>
                            </Text>
                        ) :
                            <Skeleton h="40px" w="70%" />}

                        {isLoading ? (
                            <Text
                                fontSize={isNotSmallerScreen ? "3xl" : "2xl"}>
                                Total World Population: <strong>{BigNumberCalculation(totalPopulation)}</strong>
                            </Text>
                        ) :
                            <Skeleton marginTop={5} h="40px" w="100%" />}



                    </Box>
                </Box>

                {/* second column */}
                <Box
                    paddingTop={isNotSmallerScreen ? "0" : "5vh"}>
                    <Heading
                        color="blue.400"
                        as="u">
                        World's Most Populous Countries
                    </Heading>
                    <SimpleGrid
                        paddingTop={8}
                        columns={[1, null, 2]}
                        spacing='40px'>

                        {/* skeleton added */}
                        {isLoading ? (
                            <></>
                        ) :
                            <>
                                <Box
                                    align="center">
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
                                </Box>
                                <Box
                                    align="center">
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
                                </Box>
                                <Box
                                    align="center">
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
                                </Box>
                                <Box
                                    align="center">
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
                                </Box>
                            </>}


                        {sortedPopulation.map(country => {
                            return (
                                <Box
                                    align="center"
                                    key={country.cca2}>
                                    <Box
                                        w="full"
                                        borderWidth='2px'
                                        borderRadius='lg'>
                                        <Box>
                                            <Image
                                                style={{ border: '1px solid black', borderRadius: '5px' }}
                                                margin={4}
                                                src={country.flags.png}
                                                w={isNotSmallerScreen ? "75%" : "60%"}
                                                height="7rem" />
                                        </Box>
                                        <Box
                                            textAlign="justify"
                                            padding={4}>
                                            <Text
                                                fontSize={isNotSmallerScreen ? "" : "xl"}>
                                                Name: <strong>{country.name.common}</strong>
                                            </Text>
                                            <Text
                                                fontSize={isNotSmallerScreen ? "" : "xl"}>
                                                Population: <strong>{BigNumberCalculation(country.population)}</strong>
                                            </Text>
                                            <Text
                                                fontSize={isNotSmallerScreen ? "" : "xl"}>
                                                Area: <strong>{BigNumberCalculation(country.area)} km<sup>2</sup></strong>
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}

                    </SimpleGrid>
                </Box>
            </Stack>
        </Container>
    );
}

export default Home;