# Mini Message Board

Mini Message Board is a simple web application built to learn Node.js and Express fundamentals. This project uses Express as the server framework and EJS as the templating engine to render dynamic HTML pages. Users can view messages on the home page and submit new messages via a form.

## Try It Out

Check out the live demo of the Mini Message Board application [here](https://mini-message-board-production-9bb5.up.railway.app).

## Features

- **View Messages:** Display a list of messages with the author's name, message text, and the date the message was added.
- **Post Messages:** Submit new messages through a form which then appear on the home page.
- **Dynamic Templating:** Use of EJS to create dynamic and reusable HTML templates.
- **Static Assets:** CSS styling is applied through a static stylesheet served by Express.

## Project Structure

```
mini-message-board
├── app.js                 # Main application file
├── package.json           # Project metadata and dependencies
├── controllers/
│   ├── indexController.js # Controller for the home page
│   └── newController.js   # Controller for handling new message form rendering and submission
├── data/
│   └── message.js         # Data store for messages (an array of message objects)
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

### Running the Application

Start the server with:

```sh
node app.js
```

The application will run on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the message board.

## Usage

- **Home Page (`/`):**  
  Displays all messages from the data store. Each message shows the user's name, message text, and the added date.

- **New Message Form (`/new`):**  
  Click the "Write a new message" link on the home page to go to the form. Submit the form to post a new message and get redirected back to the home page.

## Customization

- **Views:**  
  Modify the EJS templates in the `/views` folder (e.g., `index.ejs`, `form.ejs`) to change the layout or add new elements.

- **Styling:**  
  Update the CSS in `/public/styles.css` to customize the look and feel of your message board.

## Acknowledgments

- **The Odin Project:**  
  For providing excellent educational resources and guidance in learning full-stack web development.
- **Express & EJS:**  
  For offering powerful yet easy-to-use tools for building web applications.
