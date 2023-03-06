import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidebar(){
    return(
        <Flex
        flexDirection={'column'}
        alignItems={'center'}
        position={'fixed'} 
        top={'0'}
        right={'0'}
        bgColor={'gray.600'}
        w={'18rem'}

        h={'100vh'}
        
        >
            <Text 
            as={'h1'}
            fontSize={'3xl'}
            bgColor={'gray.800'}
            fontWeight={'bold'}
            w={'100%'}
            align={'center'}
            paddingY={'10px'}
            mb={'20px'}
            >
                SideBar
            </Text>
            <Link
            href={'/'}
            >
               <Text
               fontSize={'20px'}
               transition={'0.1s'}
               _hover={{
                background:'gray.400',
               }}
               padding={'5px'}
               borderRadius={'5px'}
               >
                Home
                </Text> 
            </Link>

            <Link
            href={'/details'}
            >
               <Text
               fontSize={'20px'}
               transition={'0.1s'}
               _hover={{
                background:'gray.400',
               }}
               padding={'5px'}
               borderRadius={'5px'}
               >
                Buscar Países
                </Text> 
            </Link>

            <Link
            href={'/city'}
            >
               <Text
               fontSize={'20px'}
               transition={'0.1s'}
               _hover={{
                background:'gray.400',
               }}
               padding={'5px'}
               borderRadius={'5px'}
               >
                Buscar Cidade
                </Text> 
            </Link>
        </Flex>
    )
}