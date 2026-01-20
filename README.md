# Contract Management Platform

This project is a frontend-based **Contract Management Platform** built from scratch to demonstrate **product thinking, UI design, state management, and clean code architecture**.

The application allows users to create reusable contract blueprints, generate contracts from those blueprints, and manage contract signing workflows.

---

## Objective

Build a Contract Management Platform that demonstrates:

- Component-based UI design
- State management
- Reusable data models
- Controlled contract workflows
- Clean and readable code

This project is developed as part of a **full-stack / frontend assignment**.

---

## Features

### Blueprint Management
- Create reusable contract blueprints
- Supported field types:
  - Text
  - Date
  - Signature
  - Checkbox
- Store field metadata:
  - Field type
  - Label
  - Position (basic layout positioning)

### Contract Creation
- Create contracts from existing blueprints
- Auto-generate contract fields from blueprint configuration
- Maintain contract status:
  - Draft
  - Sent
  - Signed

### Signing Workflow
- Simulated signature handling
- Controlled state transitions
- Status-based UI behavior

---

## Tech Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** CSS
- **Linting:** ESLint
- **State Management:** React Hooks / Local State

---

## Project Structure



```
contract-management-platform/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── models/ # Blueprint and Contract data models
│ ├── utils/ # Helper functions
│ ├── App.tsx
│ └── main.tsx
├── public/
├── index.html
├── package.json
└── README.md

```

---

## Getting Started

This project uses **Vite** for fast development with Hot Module Replacement (HMR).

---

## Installation

```bash
git clone https://github.com/Tanishka-K03/contract-management-platform.git
cd contract-management-platform
npm install

