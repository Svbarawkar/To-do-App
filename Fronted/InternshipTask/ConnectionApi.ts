import axios from 'axios';
import { Todo } from '../Interface/Todo';

const API_URL = 'http://localhost:8080/api/todoitems';

export const getTodos = () => axios.get<Todo[]>(API_URL);
export const getTodoById = (id: number) => axios.get<Todo>(`${API_URL}/${id}`);
export const addTodo = (todo: Todo) => axios.post(API_URL, todo);
export const editTodo = (id: number, todo: Todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
export const searchTodos = (title: string) => axios.get<Todo[]>(`${API_URL}/search?title=${title}`);
