"use client"

import { useState, useEffect } from "react"
import { TodoForm } from "./todo-form"
import { TodoItem } from "./todo-item"
import { TodoFilters } from "./todo-filters"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

export type FilterType = "all" | "active" | "completed"

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<FilterType>("all")

  // Load todos from localStorage on mount
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos")
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos))
      }
    } catch (error) {
      console.error("Failed to load todos:", error)
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos))
    } catch (error) {
      console.error("Failed to save todos:", error)
    }
  }, [todos])

  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos([newTodo, ...todos])
  }

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Edit a todo
  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)))
  }

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  // Calculate stats
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length
  const activeTodos = totalTodos - completedTodos

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle>My Tasks</CardTitle>
        <CardDescription>
          {activeTodos} active • {completedTodos} completed • {totalTodos} total
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <TodoForm onAddTodo={addTodo} />

        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {filter === "completed" && totalTodos > 0
                ? "🎉 No completed tasks yet. Keep going!"
                : filter === "active" && totalTodos > 0
                  ? "✨ All tasks completed! Great job!"
                  : "📝 No tasks yet. Add one to get started!"}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
