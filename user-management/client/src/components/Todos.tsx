import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { Todo, UnsavedTodo, readTodos, insertTodo, updateTodo } from '../lib';

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await readTodos();
        setTodos(todos);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTodos();
  }, []);

  async function addTodo(newTodo: UnsavedTodo) {
    try {
      const todo = await insertTodo(newTodo);
      setTodos([...todos, todo]);
    } catch (e) {
      setError(e);
    }
  }

  async function toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    try {
      const updated = await updateTodo(todo);
      const allTodos = todos.map((original) =>
        original.todoId === updated.todoId ? updated : original
      );
      setTodos(allTodos);
    } catch (e) {
      setError(e);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="px-4">
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
