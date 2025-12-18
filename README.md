# 📝 Todo List App

A modern, fully-featured Todo List application built with Next.js, React, and TypeScript. Stay organized and productive with a beautiful, responsive interface.

![Todo List App](https://placehold.co/1200x630/0ea5e9/ffffff?text=Todo+List+App&font=roboto)

## ✨ Features

- ✅ **Add Tasks** - Quickly add new tasks with a clean input form
- ✏️ **Edit Tasks** - Edit existing tasks inline with a simple UI
- 🗑️ **Delete Tasks** - Remove completed or unnecessary tasks
- ☑️ **Mark Complete/Incomplete** - Toggle task completion status
- 💾 **LocalStorage Persistence** - Your tasks are saved automatically and persist across sessions
- 🔍 **Smart Filters** - View all tasks, only active tasks, or completed tasks
- 🌓 **Dark Mode** - Beautiful dark theme that respects system preferences
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface built with shadcn/ui components
- 📊 **Task Statistics** - See your progress with active/completed/total task counts

## 🛠️ Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Storage**: Browser localStorage API
- **Font**: [Geist](https://vercel.com/font)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Steps

1. **Clone or download the project**

```bash
git clone <repository-url>
cd todo-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 How to Run

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
todo-app/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and theme tokens
├── components/
│   ├── todo-list.tsx        # Main todo list container with state management
│   ├── todo-item.tsx        # Individual todo item with edit/delete actions
│   ├── todo-form.tsx        # Form for adding new todos
│   ├── todo-filters.tsx     # Filter buttons (all/active/completed)
│   ├── theme-toggle.tsx     # Dark mode toggle component
│   └── ui/                  # shadcn/ui components (button, input, card, etc.)
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
├── README.md                # This file
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── next.config.mjs          # Next.js configuration
```

## 🎯 How to Use

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Edit a Task**: Click the edit icon, modify the text, and press Enter or click the check icon
4. **Delete a Task**: Click the trash icon to remove a task permanently
5. **Filter Tasks**: Use the All/Active/Completed buttons to filter your view
6. **Toggle Theme**: Click the sun/moon icon in the top right to switch between light and dark modes

## 🧪 Code Quality

- **Clean Code**: Well-structured, readable, and maintainable code
- **TypeScript**: Full type safety throughout the application
- **Modular Components**: Reusable components following React best practices
- **Comments**: Important logic is documented with clear comments
- **Error Handling**: Graceful handling of localStorage errors
- **No Console Errors**: Clean console output with no warnings or errors

## ✅ Feature Checklist

- [x] Add tasks
- [x] Edit tasks
- [x] Delete tasks
- [x] Mark tasks as complete/incomplete
- [x] LocalStorage persistence
- [x] Filter tasks (all/active/completed)
- [x] Modern responsive UI
- [x] Dark mode support
- [x] Task statistics
- [x] Keyboard shortcuts (Enter to submit, Escape to cancel edit)
- [x] Empty state messages
- [x] Smooth animations and transitions
- [x] Accessible UI with proper ARIA labels

## 🔧 Tool Used

This project was built with [**v0.app**](https://v0.app) - an AI-powered UI generation tool by Vercel.

## 👨‍💻 Architecture Overview

### State Management
- **Local State**: Uses React's `useState` for component-level state
- **Side Effects**: `useEffect` hooks handle localStorage sync automatically
- **Props Down**: Parent-to-child data flow for clean component architecture

### Data Persistence
- Tasks are stored in `localStorage` under the 'todos' key
- Automatic save on every state change
- Automatic load on component mount
- Error handling for storage failures

### Component Structure
- **page.tsx**: Main layout and theme toggle
- **TodoList**: Container component managing state and filters
- **TodoForm**: Controlled form component for adding tasks
- **TodoItem**: Individual task with inline editing capability
- **TodoFilters**: Filter button group for task views

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom design tokens for consistent theming
- Dark mode via CSS custom properties
- Responsive breakpoints for mobile-first design

## 📸 Screenshots

### Light Mode
![Light Mode Placeholder](https://placehold.co/800x600/ffffff/333333?text=Light+Mode+Screenshot)

### Dark Mode
![Dark Mode Placeholder](https://placehold.co/800x600/1a1a1a/ffffff?text=Dark+Mode+Screenshot)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Credits

- Built with [v0.app](https://v0.app)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com)

---

**Made with ❤️ and AI**
