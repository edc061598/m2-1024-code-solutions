import { type FormEvent, useState } from 'react';
import type { UnsavedTodo } from './Todos';

type Props = {
  onSubmit: (todo: UnsavedTodo) => void;
};
export function TodoForm({ onSubmit }: Props) {
  // Note: Use a controlled form so we can easily reset it after submit.
  const [task, setTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTodo = {
      task,
      isCompleted: false,
    };
    onSubmit(newTodo);
    setTask('');
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        required
        autoFocus
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="py-1 px-2 mb-2 text-gray-800 border border-gray-200"
        placeholder="What to do?"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-none py-1 px-3 mb-2 bg-blue-600 text-white">
        Add Todo
      </button>
    </form>
  );
}
