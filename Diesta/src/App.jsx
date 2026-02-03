import { useEffect, useState } from 'react'
import supabase from '../supabase'

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data, error } = await supabase
        .from('todos')
        .select('*')

      if (error) {
        console.error('Supabase error:', error)
        return
      }

      setTodos(data)
    }

    getTodos()
  }, [])

  return (
    <div>
      <div className='text-4xl' >
          hello dudeu
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>Todo {todo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
