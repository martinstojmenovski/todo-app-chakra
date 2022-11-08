import { HStack, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function AddTodo() {

    function handleSubmit(e) {

    }


  return (
    <form onSubmit={handleSubmit}>
        <HStack mt='8'>
            <Input 
            variant='filled' placeholder='chakra todo app'
            />
            <Button colorScheme='pink' px='8' type='submit'>Add Todo</Button>
        </HStack>
    </form> 
  )
}
