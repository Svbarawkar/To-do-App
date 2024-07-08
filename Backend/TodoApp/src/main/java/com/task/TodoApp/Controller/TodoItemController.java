package com.task.TodoApp.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.task.TodoApp.Model.TodoItem;
import com.task.TodoApp.Service.TodoItemService;

import java.util.List;

@RestController
@RequestMapping("/api/todoitems")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoItemController {
 @Autowired
 private TodoItemService todoItemService;

 @GetMapping
 public List<TodoItem> getAllTodoItems() {
     return todoItemService.getAllTodoItems();
 }

 @GetMapping("/{id}")
 public TodoItem getTodoItemById(@PathVariable Long id) {
     return todoItemService.getTodoItemById(id);
 }

 @PostMapping
 public TodoItem createTodoItem(@RequestBody TodoItem todoItem) {
     return todoItemService.createTodoItem(todoItem);
 }

 @PutMapping("/{id}")
 public TodoItem updateTodoItem(@PathVariable Long id, @RequestBody TodoItem todoItemDetails) {
     return todoItemService.updateTodoItem(id, todoItemDetails);
 }

 @DeleteMapping("/{id}")
 public void deleteTodoItem(@PathVariable Long id) {
     todoItemService.deleteTodoItem(id);
 }
 

 @GetMapping("/search")
 public List<TodoItem> searchTodos(@RequestParam String title) {
     return todoItemService.searchTodos(title);
 }
}
