# Simple Todo API
### This repository contains a simple Todo API built using Express.js. The API supports basic CRUD operations (Create, Read, Update, Delete) for managing a list of todos.

# API Endpoints

## Get all todos
### GET /todos

## Get a specific todo
### GET /todos/:id
Retrieve details of a specific todo by providing its id.

## Create a new todo
### POST /todos
Create a new todo by sending a JSON payload in the request body with title and description fields.

## Update a todo
### Update a todo
Update an existing todo by providing its id and sending a JSON payload in the request body with the updated title, description, and completion fields.

## Delete a todo
### DELETE /todos/:id
Delete a todo by providing its id.
