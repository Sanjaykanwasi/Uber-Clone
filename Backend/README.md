# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the user's password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required).
  - `lastname`: A string with at least 3 characters (optional).
- `email`: A string with at least 5 characters and a valid email format (required).
- `password`: A string with at least 8 characters (required).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Login Endpoint

## Endpoint: /users/login

### Method: POST

### Description:

This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user details if the credentials are valid.

### Request Body:

The request body should be a JSON object with the following fields:

-`email`: A string with at least 5 characters and a valid email format (required). -`password`: A string with at least 8 characters (required).

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```
