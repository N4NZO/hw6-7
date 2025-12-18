"use client"

import { TodoList } from "@/components/todo-list"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Todo List App</h1>
            <p className="text-muted-foreground">Stay organized and productive</p>
          </div>
          <ThemeToggle />
        </div>
        <TodoList />
      </div>
    </main>
  )
}
