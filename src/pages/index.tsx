import Header from '@/components/header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from './service/api';
import Details from './details';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import {MdLocationCity} from 'react-icons/md'
import {GiBrazil} from 'react-icons/gi'

export default function Home(){

    const [city, setCity] = useState<any>()

    useEffect(() => {
        (async ()=>{
            const response = await api.get('/brazil');
            setCity(response.data.data)
        })();
    },[])
    console.log(city)


    return(
        <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        w={'71rem'}
        >

        <Flex
        padding={'30px'} 
        justifyContent={'space-evenly'}
        >
            <Flex
            borderRadius={'5px'}
            padding={'10px'}
            >
                <Link
                href={'/details'}
                >
                <Button
                color={'#000'}
                >Buscar Países</Button>
                </Link>
            </Flex>
        

            <Flex
            borderRadius={'5px'}
            padding={'10px'}
            >
                <Link
                href={'/city'}
                >
                <Button
                color={'#000'}
                >Buscar Cidades</Button>
                </Link>
            </Flex>
        </Flex>
        
        <GiBrazil fontSize={'5rem'} color={'green'}/>
         <Flex
         direction={'row'}
         gap={'5px'}
         >
            <Text fontSize={'3xl'}>{city?.country}</Text>
        </Flex>

        <Box
        bgColor={'gray.300'}
        display={'grid'}
        gridTemplateColumns={' 1fr 1fr'} 
        p={'15px 30px'}
        borderRadius={'10px'}
        mt={'50px'}
        >
            <Text>Mortes: {city?.deaths}</Text>
            <Text>Casos Confirmados: {city?.confirmed}</Text>
        </Box>

       
        </Flex>
    )
}