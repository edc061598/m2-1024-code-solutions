import { User } from '../components/UserContext';

const authKey = 'um.auth';

type Auth = {
  user: User;
  token: string;
};

export function saveAuth(user: User, token: string): void {
  const auth: Auth = { user, token };
  localStorage.setItem(authKey, JSON.stringify(auth));
}

export function removeAuth(): void {
  localStorage.removeItem(authKey);
}

export function readUser(): User | undefined {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return (JSON.parse(auth) as Auth).user;
}

export function readToken(): string | undefined {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return (JSON.parse(auth) as Auth).token;
}

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export async function readTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo[];
}

export async function insertTodo(todo: UnsavedTodo): Promise<Todo> {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo;
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  const req = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return (await res.json()) as Todo;
}

export async function removeTodo(todoId: number): Promise<void> {
  const req = {
    method: 'DELETE',
  };
  const res = await fetch(`/api/todos/${todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
}
