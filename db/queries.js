const pool = require("./pool");

async function getMessages() {
  try {
    const { rows } = await pool.query(
      "SELECT message, username, added FROM messages"
    );
    return rows.map((row) => ({
      text: row.message,
      user: row.username,
      added: new Date(row.added).toDateString(),
    }));
  } catch (error) {
    console.error("Error in getMessages:", error);
    return [];
  }
}

async function addMessage(message, user, added) {
  await pool.query(
    "INSERT INTO messages (message, username, added) VALUES ($1, $2, $3)",
    [message, user, added]
  );
}

module.exports = {
  getMessages,
  addMessage,
};
