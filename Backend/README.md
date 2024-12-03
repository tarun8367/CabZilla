


# User Registration Endpoint
==========================

### Description

The `/users/register` endpoint allows users to register a new account by providing their fullname, email, and password.

### HTTP Method

`POST`

### Status Codes

* `201 Created`: User account created successfully
* `400 Bad Request`: Validation errors or missing required fields

### Request Body

The request body should contain the following fields:

* `fullname`: An object with two properties:
  + `firstname`: The user's first name (required, minimum 3 characters)
  + `lastname`: The user's last name (Optional, minimum 2 characters)
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

Note: This documentation is based on the provided code snippets and may not be comprehensive or up-to-date. It is recommended to review the code and update the documentation accordingly.


