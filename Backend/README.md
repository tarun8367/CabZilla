# User Registration Endpoint
==========================

### Description

The `/users/register` endpoint allows users to register a new account by providing their fullname, email, and password.

### HTTP Endpoint

`POST /users/register`

### Status Codes

* `201 Created`: User account created successfully
* `400 Bad Request`: Validation errors or missing required fields

### Request Body

The request body should contain the following fields:

* `fullname`: An object with two properties:
  + `firstname`: The user's first name (required, minimum 3 characters)
  + `lastname`: The user's last name (required, minimum 2 characters)
* `email`: The user's email address (required, unique, minimum 5 characters)
* `password`: The user's password (required, minimum 6 characters)

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "mysecretpassword"
}
```

### Response

If the registration is successful, the response will contain a JSON object with the following properties:

* `token`: A JSON Web Token (JWT) that can be used for authentication
* `user`: An object containing the newly created user's data

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIERvZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.k4Zb6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "hashed_password" // Note: The actual password is not returned, only a hashed version
  }
}
```

# User Login Endpoint
=====================

### Description

The `/users/login` endpoint allows users to log in to their account by providing their email and password.

### HTTP Endpoint

`POST /users/login`

### Status Codes

* `200 OK`: User logged in successfully
* `401 Unauthorized`: Invalid email or password

### Request Body

The request body should contain the following fields:

* `email`: The user's email address (required)
* `password`: The user's password (required)

### Example Request

```json
{
  "email": "johndoe@example.com",
  "password": "mysecretpassword"
}
```

### Response

If the login is successful, the response will contain a JSON object with the following properties:

* `token`: A JSON Web Token (JWT) that can be used for authentication
* `user`: An object containing the user's data

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIERvZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.k4Zb6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "hashed_password" // Note: The actual password is not returned, only a hashed version
  }
}
```

# User Profile Endpoint
=====================

### Description

The `/users/profile` endpoint allows users to retrieve their profile information.

### HTTP Endpoint

`GET /users/profile`

### Status Codes

* `200 OK`: Profile information retrieved successfully
* `401 Unauthorized`: User is not authenticated

### Response

If the request is successful, the response will contain a JSON object with the following properties:

* `user`: An object containing the user's data

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "hashed_password" // Note: The actual password is not returned, only a hashed version
  }
}
```

# # User Logout Endpoint
=====================

### Description

The `/users/logout` endpoint allows to Logout the current user and blacklist the token provided in cookie headers.

### HTTP Endpoint

`GET /users/logout`

### Status Codes

* `200 OK`: User logged out successfully
* `401 Unauthorized`: User is not authenticated

### Request Body

Requires a valid JWT token in the Authorization header or cookie.

### Response

If the logout is successful, the response will contain a JSON object with the following properties:

* `message`: A success message indicating that the user has been logged out

```json
{
  "message": "Logout successful"
}
```


# Captain Registration Endpoint
==========================

### Description

The `/captains/register` endpoint allows captains to register a new account by providing their fullname, email, password, and vehicle information.

### HTTP Endpoint

`POST /captains/register`

### Status Codes

* `201 Created`: Captain account created successfully
* `400 Bad Request`: Validation errors or missing required fields

### Request Body

The request body should contain the following fields:

* `fullname`: An object with two properties:
  + `firstname`: The captain's first name (required, minimum 3 characters)
  + `lastname`: The captain's last name (required, minimum 2 characters)
* `email`: The captain's email address (required, unique, minimum 5 characters)
* `password`: The captain's password (required, minimum 6 characters)
* `vehicle`: An object with four properties:
  + `color`: The vehicle's color (String, required)
  + `plate`: The vehicle's plate number (String, required)
  + `capacity`: The vehicle's capacity (Integer, required, min: 1)
  + `vehicleType`: The vehicle's type (String, required) and must be in ['car', 'motorcycle', 'auto]

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "mysecretpassword",
  "vehicle": {
    "color": "black",
    "plate": "UP 85 AQ 0001",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

### Response

If the registration is successful, the response will contain a JSON object with the following properties:

* `token`: A JSON Web Token (JWT) that can be used for authentication
* `captain`: An object containing the newly created captain's data
* `status`: The captain's status (active{Default})
* `vehicle`: An object containing the vehicle's information

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaGFuIERvZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.k4Zb6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q5u6Q",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "status": "active",
  "vehicle": {
    "color": "black",
    "plate": "UP 85 AQ 0001",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```
