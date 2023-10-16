const express = require("express")
const app = express()
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json());

// ROUTES //

// create user
app.post("/users", async(req, res) => {
    try {
        const { name, surname, city, age } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (name, surname, city, age) VALUES($1, $2, $3, $4) RETURNING *",
            [name, surname, city, age]
        );

        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

// get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// update a user
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, city, age } = req.body;
        const updateUser = await pool.query(
            "UPDATE users SET name = $1, surname = $2, city = $3, age = $4 WHERE user_id = $5",
            [name, surname, city, age, id]
        );

        res.json("User was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a users
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM users WHERE user_id = $1",
            [id]
        );
        res.json("User was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
})