
import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const todos = [
  { description: 'Aprender React', complete: true },
  { description: 'Aprender Angular', complete: false },
  { description: 'Aprender HTML', complete: false },
  { description: 'Aprender CSS', complete: true },
  { description: 'Aprender C#', complete: true },
  { description: 'Aprender C++', complete: true }
]

const taskTotal = todos.length;
const taskPendiente = todos.filter(todo => !todo.complete).length;
const taskRealizadas = todos.filter(todo => todo.complete).length;

function App() {

  const [valor, setValor] = useState('');

  /**declaracion de variable de las tareas filtradas */
  let newTodos = [];

  /** buscador de tareas */
  if (valor.length === 0) {
    newTodos = Array.from(todos);;
  } else {
    newTodos = todos.filter((todo) => {
      let Todoitems = todo.description.toLowerCase();
      const srTodos = valor;
      return Todoitems.includes(srTodos.toLowerCase());
    })
  }

  return (

    <div className='container'>
      <TodoCounter taskTotal={taskTotal} taskPendiente={taskPendiente} taskRealizadas={taskRealizadas} />
      <TodoSearch valor={valor} setValor={setValor} />
      <TodoList >
        {newTodos.map((todo) => (
            
          <TodoItem complete={todo.complete} description={todo.description} >
          </TodoItem>
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
