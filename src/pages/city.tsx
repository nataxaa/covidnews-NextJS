import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { api } from './service/api'

export default function Details(){

    const [uf, setUf] = useState<string>()
    const [country, setCountry] = useState<any>()
    const [error, setError] = useState<string>()
    

    async function handleUf(){
        if(uf){
            const response = await api.get(`/brazil/uf/${uf}`)
            if(response){
                setCountry(response.data)
            }else{
                setError('Estado não Encontrado.')
            }
        }else{
            alert("Estado não informado.")
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
                Buscar Estado do Brasil.
            </Text>
            <Flex
            gap={'5px'}
            >
                <Input
                placeholder='Digite a UF do estado aqui...'
                value={uf}
                onChange={(e)=>setUf(e.target.value)}
                w={'20rem'}
                />
                <Button
                onClick={handleUf}
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
                <Text>{country?.state}</Text>
                <Text>Casos confirmados: {country?.cases}</Text>
                <Text>Mortes: {country?.deaths}</Text>
                <Text>Suspeitos: {country?.suspects}</Text>
            </Flex>
        )}
        </Flex>
    )
}