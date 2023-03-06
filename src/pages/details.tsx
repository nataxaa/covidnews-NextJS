import Header from '@/components/header'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { api } from './service/api'

export default function Details(){

    const [name_country, setName_country] = useState<string>()
    const [country, setCountry] = useState<any>()
    const [error, setError] = useState<string>()
    

    async function handleCountry(){
        if(name_country){
            const response = await api.get(`/${name_country}`)
            if(response){
                setCountry(response.data.data)
            }else{
                setError('Pais não Encontrado.')
            }
        }else{
            alert("Pais não informado.")
        }
    }
    console.log(country)

    return(
        <Flex
        w={'71rem'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        mt={'2rem'}
        >

            <Text
            as={'h1'}
            fontSize={'2rem'}
            >
                Buscar País.
            </Text>
            <Flex
            gap={'5px'}
            >
                <Input
                placeholder='Digite o nome do pais aqui...'
                value={name_country}
                onChange={(e)=>setName_country(e.target.value)}
                w={'20rem'}
                />
                <Button
                onClick={handleCountry}
                >
                    Buscar
                </Button>
                </Flex>
            { country && (
                
                <Flex
                justifyContent={'center'}
                flexDirection={'column'}
                backgroundColor={'gray.600'}
                alignItems={'center'}
                p={'20px'}
                borderRadius={'5px'}
                mt={'20px'}
                >
                <Text>Casos confirmados: {country?.confirmed}</Text>
                <Text>Mortes: {country?.deaths}</Text>
            </Flex>
        )}
        </Flex>
    )
}