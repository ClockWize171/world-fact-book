import React from "react";
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button
} from '@chakra-ui/react'

const Pagination = ({ postPerPage, totalPosts, pagniate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Box>
            <Breadcrumb spacing={2} separator='.'>
                {pageNumbers.map(number => (
                    <BreadcrumbItem key={number} >
                        <BreadcrumbLink
                            style={{ textDecoration: "none" }}
                            paddingTop={2}>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => pagniate(number)}
                                mr='-px'
                                colorScheme="blue">
                                {number}
                            </Button>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}

            </Breadcrumb>
        </Box>
    );
}

export default Pagination;