
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';


const todos = [
  { description: 'Aprender React', complete: 'flase' },
  { description: 'Aprender Angular', complete: 'flase' },
  { description: 'Aprender Vue', complete: 'flase' }
]


function App() {
  return (
    <div className='container'>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {todos.map((todo) => (
          <TodoItem key={todo.description} text={todo.description}>

          </TodoItem>
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
