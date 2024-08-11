# Week1-phase2-code-challenge
# Bank Transactions React App

## Introduction

This React application is designed to help users manage and visualize their bank transactions. It provides a user-friendly interface for viewing, adding, searching, and filtering financial transactions. This project serves as an excellent example of how to build a basic CRUD (Create, Read, Update, Delete) application using React, demonstrating key concepts such as component structure, state management, and API interactions.

Key features of this application include:
- Displaying a list of transactions in a table format
- Adding new transactions through a form
- Searching and filtering transactions
- (Bonus features: Sorting transactions and deleting individual entries)

This project is ideal for beginners looking to understand React fundamentals and for intermediate developers aiming to reinforce their React skills.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 12.0 or higher)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Fork the Repository
   - Visit the project repository on GitHub
   - Click the "Fork" button in the top-right corner to create a copy in your GitHub account

2. Clone the Repository
   - Open your terminal
   - Navigate to the directory where you want to store the project
   - Run the following command, replacing `<your-username>` with your GitHub username:
     ```
     git clone https://github.com/<your-username>/bank-transactions-react-app.git
     ```

3. Navigate to the Project Directory
4. Install Dependencies
- Run the following command to install all necessary packages:
  ```
  npm install
  ```

5. Set Up the JSON Server
- This project uses `json-server` to simulate a backend API
- Create a file named `db.json` in the root directory of the project
- Add the following initial data to `db.json`:
 
http://localhost:8001/transactions

6. Start the JSON Server
- Open a new terminal window
- Navigate to the project directory
- Run the following command:
  ```
  json-server --watch db.json --port 8001
  ```
- Keep this terminal open to keep the server running

7. Start the React Application
- In your original terminal window, run:
  ```
  npm start
  ```
- This will start the development server and open the app in your default browser

## Using the Application

Once the application is running, you can:
- View existing transactions in the table
- Add new transactions using the form at the top of the page
- Search for specific transactions using the search bar
- (If implemented: Sort transactions by clicking on table headers)
- (If implemented: Delete transactions using the delete button in each row)

## Project Structure

- `src/App.js`: The main component that orchestrates the entire application
- `src/TransactionTable.js`: Renders the table of transactions
- `src/TransactionForm.js`: Handles the form for adding new transactions
- `src/SearchBar.js`: Manages the search functionality

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue for discussion.
