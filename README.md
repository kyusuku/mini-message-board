# Mini Message Board

Mini Message Board is a simple web application built to learn Node.js, Express, and PostgreSQL fundamentals. This project uses Express as the server framework, EJS as the templating engine, and PostgreSQL as the persistence layer to store and retrieve messages. Users can view messages on the home page and submit new messages via a form.

## Try It Out

Check out the live demo of the Mini Message Board application [here](https://mini-message-board-production-9bb5.up.railway.app).

## Features

- **View Messages:** Display a list of messages with the author's name, message text, and the date the message was added.
- **Post Messages:** Submit new messages through a form which then appear on the home page.
- **Dynamic Templating:** Use of EJS to create dynamic and reusable HTML templates.
- **Persistent Data:** Uses PostgreSQL to store messages.
- **Static Assets:** CSS styling is applied through a static stylesheet served by Express.

## Project Structure

```
mini-message-board
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
├── controllers/
│   ├── indexController.js # Controller for the home page
│   └── newController.js   # Controller for handling new message form rendering and submission
├── db/
│   ├── pool.js            # PostgreSQL connection pool
│   ├── queries.js         # SQL queries for messages
│   └── populatedb.js      # Database schema creation script
├── public/
│   └── styles.css         # Static CSS for styling the application
├── routes/
│   ├── indexRouter.js     # Router for home page and general routes
│   └── newRouter.js       # Router for routes related to posting new messages
└── views/
    ├── form.ejs           # EJS template for the new message form
    └── index.ejs          # EJS template for displaying messages
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) installed and running
- A configured `.env` file (see [Environment Variables](#environment-variables) below)

### Environment Variables

Create a `.env` file in the project root (it is excluded from version control) and add your database credentials:

```properties
PORT=3000
HOST=localhost
USER=your_db_username
DATABASE=your_db_name
PASSWORD=your_db_password
DATABASE_PORT=5432
```

> **Note:** Replace `your_db_username`, `your_db_name`, and `your_db_password` with your actual PostgreSQL credentials.

### Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/kyusuku/mini-message-board.git
   cd mini-message-board
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Set Up the Database:**  
   Create the `messages` table by running the populatedb script:
   ```sh
   node db/populatedb.js
   ```
   This script creates the necessary table (with columns for message, username, and added timestamp).

### Running the Application

Start the server with:

```sh
node app.js
```

The application will run on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the message board.

## Usage

- **Home Page (`/`):**  
  Displays all messages stored in PostgreSQL. Each message shows the author's name, message text, and the date added (formatted via JavaScript).
- **New Message Form (`/new`):**  
  Click the "Write a new message" link on the home page to open the form. Submit the form to post a new message, which then appears on the home page.

## Customization

- **Views:**  
  Modify the EJS templates in the `/views` folder (e.g., `index.ejs`, `form.ejs`) to change the layout or add new elements.
- **Styling:**  
  Update the CSS in `/public/styles.css` to customize the look and feel of your message board.
- **Database Queries:**  
  Adjust the SQL queries in `/db/queries.js` if you need to change the data handling logic. You can also use PostgreSQL's formatting functions directly in SQL if desired.

## Acknowledgments

- **The Odin Project:**  
  For providing excellent educational resources and guidance in learning full-stack web development.
- **Express, EJS & PostgreSQL:**  
  For offering powerful yet easy-to-use tools for building web applications.

## Security

Make sure to:

- Include your `.env` file in `.gitignore` to avoid pushing sensitive data to GitHub.
- Use parameterized queries to prevent SQL injection.
