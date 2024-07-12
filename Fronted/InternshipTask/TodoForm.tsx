import React, { useState } from 'react';
import { Todo } from '../Interface/Todo';
import { addTodo } from '../Services/ConnectionApi';

interface TodoFormProps {
    onAdd: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = { id: 0, title, description, completed: false };
        const response = await addTodo(newTodo);
        onAdd(response.data);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
