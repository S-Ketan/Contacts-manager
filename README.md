# MyContacts App

MyContacts App is an Express-based backend API for managing contacts. This project provides endpoints for user registration, login, and CRUD operations on contacts.

## Project Structure

```
.env
.gitignore
config/
    DataBaseConnection.js
    Constants.js
Controllers/
    ContactController.js
    UserController.js
Middleware/
    ErrorHandler.js
    ValidateTokenHandler.js
Models/
    ContactModel.js
    UserModel.js
package.json
Routes/
    ContactRoutes.js
    UserRoutes.js
server.js
```

## Installation

Clone the repository:
```sh
git clone <repository-url>
cd mycontacts-app
```

Install dependencies:
```sh
npm install
```

Create a `.env` file in the root directory and add the following environment variables:
```
PORT=5000
CONNECTING_STRING=<your-mongodb-connection-string>
ACCESS_TOKEN_SECRET=<your-jwt-secret>
```

## Usage

Start the server:
```sh
npm run dev
```

The server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### User Routes
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login a user.
- `GET /api/users/current`: Get the current logged-in user (requires token).

### Contact Routes
- `GET /api/contacts`: Get all contacts for the logged-in user (requires token).
- `POST /api/contacts`: Create a new contact (requires token).
- `GET /api/contacts/:id`: Get a contact by ID (requires token).
- `PUT /api/contacts/:id`: Update a contact by ID (requires token).
- `DELETE /api/contacts/:id`: Delete a contact by ID (requires token).

## Middleware

- **ErrorHandler**: Handles errors and sends appropriate responses.
- **ValidateTokenHandler**: Validates JWT tokens for protected routes.

## Models

- **UserModel**: Defines the schema for user data.
- **ContactModel**: Defines the schema for contact data.

## License

This project is licensed under the MIT License.

## Author

Ketan Sharma