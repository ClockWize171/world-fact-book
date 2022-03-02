import React from "react";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup
} from '@chakra-ui/react'

const Pagination = ({ postPerPage, totalPosts, pagniate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Box>
            <Breadcrumb spacing={2} separator=''>
                {pageNumbers.map(number => (
                    <BreadcrumbItem key={number}>
                        <BreadcrumbLink
                            style={{ textDecoration: "none" }}
                            paddingTop={2}
                            onClick={() => pagniate(number)}>
                            <Button colorScheme="blue">
                                {number}
                            </Button>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </Box>
        // <ButtonGroup colorScheme="blue" isAttached size="sm" variant='outline'>
        //     {pageNumbers.map(number => (
        //         <Button
        //             onClick={() => pagniate(number)}
        //             key={number}
        //             mr="-px">{number}</Button>
        //     ))}

        // </ButtonGroup>
    );
}

export default Pagination;