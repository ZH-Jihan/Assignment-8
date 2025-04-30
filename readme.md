# 🚀 Bike Servicing Management System

## 📝 Project Summary

A robust backend API for managing bike service center operations. Enables CRUD operations for customers, bikes, and service records with additional features for tracking service statuses and deadlines. Perfect for small-to-medium bike service businesses looking to digitize their operations.

---

## 🌐 Live Link

> 🔗 [Live Link](#)
> 📂 [GitHub Repository](https://github.com/ZH-Jihan/Assignment-8)

## 🛠 Tech Stack

| Technology
|---------------
| **Node.js**  
| **Express.js**
| **TypeScript**
| **Prisma ORM**
| **PostgreSQL**

---

## Key Features ✨

- **Customer Management**: Full CRUD operations for customer records
- **Bike Tracking**: Maintain detailed bike information with owner relationships
- **Service Workflows**:
  - Create service tickets with status tracking (pending/in-progress/done)
  - Mark services as completed with automatic timestamping
  - Find overdue services (pending/in-progress + older than 7 days)
- **Robust Validation**: Type-safe request validation using Zod
- **Error Handling**: Standardized error responses with development stack traces
- **UUID Identifiers**: All entities use UUIDv4 for unique identification

---

## Setup Guide 🛠️

### Prerequisites

- Node.js v18+
- PostgreSQL database
- npm

### Installation

## 1. Clone the Repository

````bash
git clone https://github.com/ZH-Jihan/Assignment-8
cd Assignment-8

### Create .env file in root
```
DATABASE_URL="...."
````

## Run

```shell
npm i
npx prisma generate
```

### Run the Project

```shell
npm run dev
```

## 🧪 API Endpoints Overview

### ✅ Customers

| Method | Endpoint                     | Description            |
| ------ | ---------------------------- | ---------------------- |
| POST   | `/api/customers`             | Create a new customer  |
| GET    | `/api/customers`             | Get all customers      |
| GET    | `/api/customers/:customerId` | Get customer by ID     |
| PUT    | `/api/customers/:customerId` | Update customer        |
| DELETE | `/api/customers/:customerId` | hardly delete customer |

### ✅ Bikes

| Method | Endpoint             | Description    |
| ------ | -------------------- | -------------- |
| POST   | `/api/bikes`         | Add a new bike |
| GET    | `/api/bikes`         | Get all bikes  |
| GET    | `/api/bikes/:bikeId` | Get bike by ID |
| PUT    | `/api/bikes/:bikeId` | Get bike by ID |

### ✅ Services

| Method | Endpoint                            | Description                  |
| ------ | ----------------------------------- | ---------------------------- |
| POST   | `/api/services`                     | Create a service record      |
| GET    | `/api/services`                     | Get all service records      |
| GET    | `/api/services/:serviceId`          | Get service by ID            |
| PUT    | `/api/services/:serviceId/complete` | Complete a service           |
| GET    | `/api/services/status`              | Get pending/overdue services |

---
