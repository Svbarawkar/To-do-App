import React, { useState } from 'react';
import { Todo } from '../Interface/Todo';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggleComplete: (id: number) => void;
    onEdit: (id: number, updatedTodo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggleComplete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [editDescription, setEditDescription] = useState(todo.description);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleEditSave = () => {
        const updatedTodo = { ...todo, title: editTitle, description: editDescription };
        onEdit(todo.id, updatedTodo);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <div className="edit-form">
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="edit-input"
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="edit-input"
                    />
                    <div className="edit-buttons">
                        <button onClick={handleEditSave} className="complete">Save</button>
                        <button onClick={handleEditToggle} className="delete">Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                    <div className="todo-buttons">
                        <button onClick={() => onToggleComplete(todo.id)} className="complete">
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => onDelete(todo.id)} className="delete">Delete</button>
                        <button onClick={handleEditToggle} className="edit">Edit</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
