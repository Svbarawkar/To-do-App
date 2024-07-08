package com.task.TodoApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.TodoApp.Model.TodoItem;
import com.task.TodoApp.Repository.TodoItemRepository;

import java.util.List;

@Service
public class TodoItemService {
 @Autowired
 private TodoItemRepository todoItemRepository;

 public List<TodoItem> getAllTodoItems() {
     return todoItemRepository.findAll();
 }

 public TodoItem getTodoItemById(Long id) {
     return todoItemRepository.findById(id).orElse(null);
 }

 public TodoItem createTodoItem(TodoItem todoItem) {
     return todoItemRepository.save(todoItem);
 }

 public TodoItem updateTodoItem(Long id, TodoItem todoItemDetails) {
     TodoItem todoItem = todoItemRepository.findById(id).orElse(null);
     if (todoItem != null) {
         todoItem.setTitle(todoItemDetails.getTitle());
         todoItem.setDescription(todoItemDetails.getDescription());
         todoItem.setCompleted(todoItemDetails.isCompleted());
         return todoItemRepository.save(todoItem);
     }
     return null;
 }

 public void deleteTodoItem(Long id) {
     todoItemRepository.deleteById(id);
 }
 
 public List<TodoItem> searchTodos(String title) {
     return todoItemRepository.findByTitleContaining(title);
 }
}
