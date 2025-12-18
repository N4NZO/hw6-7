# EXPERIENCE.md

## Tool Selection Justification

For this project, I chose **v0.dev (by Vercel)** as the primary vibe coding tool. The main reason for this choice was its strong focus on **UI generation and frontend best practices**, especially for React-based applications. Since the assignment required a clean, modern, and fully functional Todo List app with good structure and readability, v0.dev was well-suited to quickly generate a solid foundation that followed modern frontend conventions.

Another important factor was how v0.dev translates **natural language requirements into structured components**. Instead of starting from a blank project, the tool allowed me to move directly from the assignment prompt to a working UI and component structure, which saved time and reduced cognitive overhead. Its alignment with React, JSX, and component-based architecture made it particularly appealing for a beginner-friendly yet professional project.

---

## Development Process

I began by providing v0.dev with a **detailed and structured prompt** that clearly outlined functional requirements, file structure, UI expectations, and documentation needs. Being explicit about features such as task persistence with `localStorage`, editing behavior, and responsive UI helped the tool generate more accurate and usable code from the start.

Throughout development, I used an **iterative prompting approach**. After the initial code generation, I reviewed the output, identified missing logic or UI inconsistencies, and refined my prompts to request specific improvements (such as smoother task editing, better state handling, or cleaner component separation). The most effective prompts were those that focused on *intent* rather than low-level implementation details (for example, “ensure task editing works smoothly and updates localStorage correctly”).

It took approximately **3–5 iterations** to arrive at fully working code that met all requirements. Each iteration improved either functionality, readability, or structure. The AI was especially helpful in scaffolding components, handling repetitive logic, and maintaining consistency across files.

---

## Challenges and Solutions

One of the main challenges was ensuring that **localStorage persistence worked correctly across edits, deletions, and page refreshes**. While v0.dev generated the basic logic, edge cases (such as editing a task without breaking its completion state) required manual review and adjustment. I had to verify that state updates and localStorage writes stayed synchronized.

Another challenge was ensuring **beginner-friendly readability**. AI-generated code can sometimes be overly abstract or compact. In this case, I manually added comments, simplified variable names, and slightly refactored logic to make it easier to understand for someone new to JavaScript or React.

While the AI handled UI structure and basic logic well, I still needed to **test the application manually**, check the browser console for errors, and fix small issues related to event handling and state updates. The tool accelerated development significantly, but human review was essential to ensure correctness and clarity.

---

## Reflection

What surprised me most about vibe coding was how much it **shifted my role from writing code line-by-line to reviewing, guiding, and refining code**. Instead of focusing on syntax, I spent more time thinking about requirements, architecture, and user experience. This made the development process feel more like directing a project than implementing every detail manually.

Using v0.dev changed my workflow by encouraging **prompt-driven development**. Clear, well-structured prompts produced better results than vague requests. This reinforced the importance of communication skills even in software development, as the quality of output directly depended on how well the task was described.

I would definitely use this type of tool again for **prototypes, small-to-medium projects, and UI-heavy applications**. However, for highly complex logic or performance-critical systems, I would rely more on manual coding with AI assistance rather than full generation. Overall, vibe coding tools like v0.dev have the potential to significantly impact software development by increasing productivity, lowering the barrier to entry, and allowing developers to focus more on problem-solving than boilerplate implementation.
