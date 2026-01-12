Dashboard (React 19 + React Router v7)
Навчальний dashboard-проєкт з фокусом на modern data-flow, optimistic UI та offline-first мислення.
Stack
React 19
React Router v7 (Data APIs)
Vite
jsonplaceholder (mock API)
Key Concepts Demonstrated
1. Router-first architecture
loaders / actions
deferred data
revalidation rules
2. Optimistic UI
create / edit / delete
inline edit
bulk edit
undo actions
validation-safe optimistic updates
3. React 19 Hooks
use()
useOptimistic
useActionState
useTransition
useId
4. Error Boundaries
route-level
widget-level
isolation strategy
Optimistic Data Flow (Users example)
Копіювати код

Form submit
 └─ optimistic state update
     └─ immediate UI update
         └─ server response
             ├─ success → merge
             └─ error → rollback
Accessibility
useId for form control binding
aria-live for optimistic feedback
keyboard-first inline editing
Why this project matters
This project demonstrates how to build fast, resilient UIs that:
feel instant
handle failures gracefully
scale architecturally