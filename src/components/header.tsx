import { api } from "@/pages/service/api";
import { Avatar, Flex, Heading, Image, Img, Input, Text } from "@chakra-ui/react";
import {GrStorage} from 'react-icons/gr'






export default function Header(){

    return(
        <Flex
        as={'header'}
        w={'71rem'}
        paddingTop={'2rem'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'2rem'}
        >
            <Text
            fontSize={"4xl"}
            fontWeight={'bold'}
            >
               Dados da Covid
            </Text>
                

        </Flex>     
    )
}