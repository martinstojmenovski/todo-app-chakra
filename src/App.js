import { Heading } from '@chakra-ui/react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'
function App() {
//   const initialTodos = [
//     {
//         id: 1,
//         body: 'get bread',
//     },
//     {
//         id: 2,
//         body: 'get milk',
//     }
// ]
const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || []
  )

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos)
}

const addTodo = (todo) => {
  setTodos([...todos, todo])
}
const {colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
      <IconButton 
      icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
      isRound='true' 
      size='lg' 
      alignSelf='flex-end'
      onClick={toggleColorMode}
       />
      <Heading
        //marginBottom='8'// couldn't overwrite marginBottom
        pb='8'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
        >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
      <AddTodo addTodo={addTodo}/>
    </VStack>
  );
}

export default App;
