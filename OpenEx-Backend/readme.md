# OpenEx-Backend

OpenEx is a marketplace system for hostel residents to sell or exchange items within their community. This repository contains the backend API built with Go, Gin, and PostgreSQL.

## Features

- User authentication with JWT
- Role-based access control (users and admins)
- Item listings with approval workflow
- Transaction system for buy/exchange requests
- Hostel management

## Prerequisites

- Go 1.16+
- PostgreSQL database
- Environment variables configured

## Environment Setup

Before running the application, set up the following environment variables:

```bash
# Database configuration
export DB_HOST=localhost
export DB_USER=postgres
export DB_PASSWORD=yourpassword
export DB_NAME=openex
export DB_PORT=5432

# JWT configuration
export JWT_SECRET=your-secret-key-here
```

## Running the Application

1. Clone the repository:
```bash
git clone https://github.com/yourusername/OpenEx-Backend.git
cd OpenEx-Backend
```

2. Install dependencies:
```bash
go mod tidy
```

3. Start the server:
```bash
go run main.go
```

The server will start on port 8080.

## Initial Setup

When the application starts for the first time:

1. The system automatically creates a default hostel named "FRF"
2. You'll need to create an admin user to manage hostels and approve items

### Creating an Admin User

1. First, sign up as a regular user using the API:

```bash
curl -X POST http://localhost:8080/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "secure_password",
    "contact_details": "1234567890",
    "hostel_id": 1
  }'
```

2. Manually update the user role in the database:

```sql
-- Connect to your PostgreSQL database
psql -U your_db_user openex

-- Update user role to admin
UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';
```

3. Log in as admin to get your access token:

```bash
curl -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "secure_password"
  }'
```

4. Save the returned token for admin operations.

## API Endpoints

### Public Endpoints

- `POST /signup` - Create new user account
- `POST /login` - Authenticate and receive JWT token

### User Endpoints (Requires Authentication)

- `GET /hostels` - List all hostels
- `GET /hostels/:id/items` - List approved items in a hostel
- `POST /items` - Create a new item (pending approval)
- `GET /items/:id` - Get item details
- `POST /requests` - Create buy/exchange request
- `GET /requests` - List user's transaction requests
- `PATCH /requests/:id/approve` - Approve a transaction request

### Admin Endpoints (Requires Admin Role)

- `GET /admin/items` - List all pending items
- `PATCH /admin/items/:id/approve` - Approve an item
- `PATCH /admin/items/:id/reject` - Reject an item
- `POST /admin/hostels` - Create a new hostel

## Authentication

For authenticated endpoints, include the JWT token in the Authorization header:

```
Authorization: your-jwt-token
```

## Development Notes

- Item status values: "pending", "approved", "rejected"
- Transaction type values: "buy", "exchange"
- Item type values: "sell", "exchange"