import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

  const [todos, setTodos] = useState([]);

  return (

    <div>

      <h1>ToDo List</h1>
      <Create />
      {

        todos.length === 0
          ?
          <div>
            <h2>No Records</h2> 
          </div>
          :
          todos.map((todo) => {

            return(
            <div>
              {todo}
            </div>
          )})
      }

    </div>
  )
}

export default Home