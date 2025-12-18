"use client"

import { Button } from "@/components/ui/button"
import type { FilterType } from "./todo-list"
import { cn } from "@/lib/utils"

interface TodoFiltersProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export function TodoFilters({ currentFilter, onFilterChange }: TodoFiltersProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ]

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-muted/50 rounded-lg">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? "default" : "ghost"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={cn("transition-all", currentFilter === filter.value && "shadow-sm")}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
