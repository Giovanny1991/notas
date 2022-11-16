
import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';


const todos = [
  { description: 'Aprender React', complete: false },
  { description: 'Aprender Angular', complete: false },
  { description: 'Aprender Vue', complete: false },
  { description: 'Aprender Vue', complete: true },
  { description: 'Aprender Vue', complete: true },
  { description: 'Aprender Vue', complete: true }
]

const taskTotal = todos.length;
const taskPendiente = todos.filter(todo => !!todo.complete).length;
const taskRealizadas = todos.filter(todo => todo.complete).length;


function App() {

  const [valor, setValor] = useState('');

  let newTodos= [];

  if (setValor.length === 0) {

    newTodos = todos.slice();

  } else {

    newTodos=todos.filter((todo) => {
      const description=todo.description.toLowerCase();
      const srTodos=valor.toLowerCase();
      return description.includes(srTodos);
      
    })
  }


  return (


    <div className='container'>
      <TodoCounter taskTotal={taskTotal} taskPendiente={taskPendiente} taskRealizadas={taskRealizadas} />
      <TodoSearch valor={valor} setValor={setValor} />
      <TodoList >
        {newTodos.map((todo) => (
          <TodoItem key={todo.description} text={todo.description}>
          </TodoItem>
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
