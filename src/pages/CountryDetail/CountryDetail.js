import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import {
    Link,
    SimpleGrid,
    Heading,
    Box,
    Text,
    Container,
    Button,
    AspectRatio,
    Skeleton,
    SkeletonText,
    Image,
    Badge,
    useMediaQuery,
    useColorMode
} from "@chakra-ui/react";
import { ArrowBackIcon, ExternalLinkIcon, ArrowDownIcon, InfoIcon } from '@chakra-ui/icons'

const CountryDetail = (props) => {
    const [country, setCountry] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await response.json()
            setCountry(data)
            setIsLoading(true)
        }
        fetchData()
    }, [name])

    // Go Back Function
    const navigate = useNavigate()

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:479px)");

    // Toggle Color Mode 
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"

    return (
        <Container maxW="8xl">
            <Box paddingTop={3}>
                <Button
                    variant="outline"
                    leftIcon={<ArrowBackIcon />}
                    colorScheme='blue'
                    size='sm'
                    onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </Box>
            <Box
                padding="2vh"
                align="center">
                <Heading as="u" color="blue.400">
                    Country Detail Information
                </Heading>
            </Box>
            <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                {/* First Column */}
                <Box>
                    <Box
                        paddingBottom={5}>
                        <Text
                            fontWeight="semibold"
                            color="blue.400"
                            fontSize="3xl">
                            Explore Below<ArrowDownIcon mx={1} />
                        </Text>
                    </Box>
                    <Box borderWidth='2px'
                        borderRadius='lg'>
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                title="Embedded google Map"
                                src='https://www.google.com/maps/embed'
                                alt='embedded map'
                            />
                        </AspectRatio>
                    </Box>
                    <Box paddingTop={5}>
                        {isLoading ? (
                            <>
                                {country.map((location) => {
                                    return (
                                        <Box key={location.cca2} lineHeight={9}>
                                            <Text
                                                fontWeight="semibold"
                                                fontSize="lg">
                                                - Open ({location.name.common}) location via<Link fontWeight="bold" color='blue.400' onClick={() => window.open(location.maps.googleMaps)}> Google Maps<ExternalLinkIcon mx={1} /></Link> and <Link fontWeight="bold" color='blue.400' onClick={() => window.open(location.maps.openStreetMaps)}> OpenStreetMaps<ExternalLinkIcon mx={1} /></Link>
                                            </Text>
                                        </Box>
                                    )

                                })}
                            </>
                        ) : (
                            <Skeleton height='20px' />
                        )}
                    </Box>
                </Box>

                {/* Second Column */}
                <Box
                    marginLeft={isNotSmallerScreen ? "5rem" : "0rem"}>
                    <Box
                        paddingBottom={2}>
                        <Text
                            fontWeight="semibold"
                            color="blue.400"
                            fontSize="3xl">
                            <InfoIcon
                                boxSize={6}
                                color={isDark ? "gray.200" : "gray.500"}
                                mb={1.5}
                                mx={2} />Country Data
                        </Text>
                    </Box>

                    {isLoading ? (
                        <>
                            {country.map(data => {
                                return (
                                    <Box
                                        key={data.cca2}
                                        paddingLeft={isNotSmallerScreen ? "0" : "2vh"}>
                                        <Box paddingTop={3}>
                                            <Image
                                                style={{ border: '1px solid black', borderRadius: "5px" }}
                                                w="20rem"
                                                h="11rem"
                                                src={data.flags.png}
                                                alt='Flags'
                                            />
                                        </Box>
                                        <Box
                                            fontSize="lg"
                                            lineHeight={8}
                                            paddingTop={5}>
                                            <Text>
                                                Name:&nbsp;&nbsp;<strong>{data.name.common}</strong>
                                            </Text>
                                            <Text>
                                                Continent:&nbsp;&nbsp;<strong>{data.continents}</strong>
                                            </Text>
                                            <Text>
                                                Capital:&nbsp;&nbsp;<strong>{data.capital ? data.capital : "<No Capital>"}</strong>
                                            </Text>
                                            <Text>
                                                Region:&nbsp;&nbsp;<strong>{data.region}</strong>
                                            </Text>
                                            <Text>
                                                Sub-region:&nbsp;&nbsp;<strong>{data.subregion ? data.subregion : "<No Sub-region>"}</strong>
                                            </Text>
                                            <Text>
                                                Top-level Domain:&nbsp;&nbsp;<Badge variant="solid" colorScheme="blue">{data.tld}</Badge>
                                            </Text>
                                            <Text>
                                                Population:&nbsp;&nbsp;<strong>{data.population}</strong>
                                            </Text>
                                            <Text>
                                                Area:&nbsp;&nbsp;<strong>{data.area} km<sup>2</sup></strong>
                                            </Text>
                                            <Text>
                                                Time Zone:&nbsp;&nbsp;<strong>{data.timezones} </strong>
                                            </Text>
                                        </Box>
                                    </Box>

                                )
                            })}

                        </>
                    ) : (
                        <>
                            <Box>
                                <Skeleton w="50%" height="11rem"></Skeleton>
                                <SkeletonText mt='4' w="20rem" noOfLines={9} spacing='5' />
                            </Box>
                        </>
                    )}
                </Box>
            </SimpleGrid>

            {/* {country.map(OneCountry => {
                return (
                    <Box key={OneCountry.cca2}>
                        <Text>Name: <strong>{OneCountry.name.common}</strong></Text>
                        <Text>Region: <strong>{OneCountry.region}</strong></Text>
                        
                    </Box>
                )
            })} */}

        </Container>
    );
}

export default CountryDetail;