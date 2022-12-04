const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blog_system'
});

app.post('/create', (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const body = req.body.body;

    db.query(
        "insert into blogs (title, body) VALUES (?, ?)",
        [title, body],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted");
            }
        }
    );
});

app.get('/blogs', (req, res) => {
    db.query("select * from blogs", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/blog/:id', (req, res) => {
    db.query("select * from blogs where id = ?", req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("delete from blogs where id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/deleteAll', (req, res) => {
    db.query("delete from blogs", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;
    db.query("update blogs set title = ?, body = ? where id = ?", [title, body, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

 app.listen(3001, () => {
  console.log('Server started on port 3001');
});

