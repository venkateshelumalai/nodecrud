# nodecrud
nodecrud

# Product API

This is a Node.js and Express.js backend API that provides CRUD operations for products using MongoDB for data storage. It also includes user authentication and authorization using JWT (JSON Web Tokens).

## Setup

1. Clone the repository:
- git clone <repository_url>

2. Install dependencies:
3. 
3. Set up the MongoDB database:
- Install MongoDB (if not already installed) and start the MongoDB service.
- Create a new database named `product_api`.

4. Configure environment variables:
- Create a `.env` file in the root directory.
- Add the following variables to the `.env` file:
  ```
  PORT=3000
  JWT_SECRET=secret-key
  MONGO_URI=mongodb://localhost/product_api
  ```

5. Start the server:

The server should now be running on http://localhost:3000.

## API Endpoints

### Products

- `GET /products` - Get all products.
- `POST /products` - Create a new product (requires authentication).
- `PUT /products/:id` - Update a product by ID (requires authentication).
- `DELETE /products/:id` - Delete a product by ID (requires authentication).


## Authentication and Authorization

- To access the protected endpoints (`POST /products`, `PUT /products/:id`, `DELETE /products/:id`), include the JWT token in the `Authorization` header of the requests. Example:
- Authorization: Bearer <JWT Token>
  
That's it! You have set up and can now run the Product API. Feel free to customize and extend it to meet your specific requirements.



