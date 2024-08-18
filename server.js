import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import axios from "axios";
import pg from "pg";
const app = express();
const port = process.env.PORT || 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Users",
  password: "CarlstonRebelo_0325",
  port: 5432,
});
db.connect().catch((err) => {
  console.error("Failed to connect to the database:", err.message);
  process.exit(1);
});

//middleware
app.use(cors());
app.use(express.json());

//requests
// Login User
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await db.query(
      "SELECT * FROM carlstons_coffee_users WHERE email = $1",
      [email]
    );

    if (data.rows.length > 0) {
      const user = data.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.json({ success: true, userId: user.id });
      } else {
        res.json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get User Data
app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const data = await db.query(
      "SELECT id, name, surname, email, TO_CHAR(date_of_birth, 'DD-MM-YY') AS birthday FROM carlstons_coffee_users WHERE id = $1",
      [userId]
    );
    res.json(data.rows);
  } catch (err) {
    console.error("Error getting user data: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register a User
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.query(
      "INSERT INTO carlstons_coffee_users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    res.status(201).json(result.rows);
  } catch (err) {
    if (err.code === "23505") {
      // PostgreSQL error code for unique constraint violation
      res.status(400).json({ success: false, message: "Email already exists" });
    } else {
      console.error("Error during registration:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

// Update user data
app.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  const {
    firstName: name,
    lastName: surname,
    email,
    password,
    date_of_birth,
  } = req.body;
  if (!password) {
    try {
      await db.query(
        "UPDATE carlstons_coffee_users SET name = $1, surname = $2, email = $3, date_of_birth = $4 WHERE id = $5",
        [name, surname, email, date_of_birth, userId]
      );
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.query(
        "UPDATE carlstons_coffee_users SET name = $1, surname = $2, email = $3, password = $4, date_of_birth = $5 WHERE id = $6",
        [name, surname, email, hashedPassword, date_of_birth, userId]
      );
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});

// Delete user
app.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await db.query(
      "DELETE FROM carlstons_coffee_users WHERE id = $1",
      [userId]
    );

    if (data.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ success: true, deletedUser: result.rows[0] });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
