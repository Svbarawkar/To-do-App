import React, { useEffect, useState } from 'react';
import { Todo } from '../Interface/Todo';
import { getTodos, deleteTodo, editTodo, searchTodos } from '../Services/ConnectionApi';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import '../index.css';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleComplete = async (id: number) => {
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            const updatedTodo = { ...todo, completed: !todo.completed };
            await editTodo(id, updatedTodo);
            setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
        }
    };

    const handleAdd = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    };

    const handleEdit = async (id: number, updatedTodo: Todo) => {
        await editTodo(id, updatedTodo);
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const handleSearch = async (title: string) => {
        const response = await searchTodos(title);
        setTodos(response.data);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <div className="todo-container">
            <h2>To-Do List</h2>
            <TodoForm onAdd={handleAdd} />
            <form onSubmit={handleSearchSubmit}>
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search todos..." />
                <button type="submit">Search</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDelete}
                        onToggleComplete={handleToggleComplete}
                        onEdit={handleEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
