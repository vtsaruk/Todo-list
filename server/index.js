const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

let todoLists = [{ id: 1, title: 'First list' }];
let tasks = [
    { id: 1, todoListsId: 1, body: 'First task', status: true },
    { id: 2, todoListsId: 1, body: 'Second task', status: false }
];

app.get('/api/todo-lists', function(req, res) {
    const list = todoLists.map(_ => ({
        ..._,
        tasks: tasks.filter(task => task.todoListsId === _.id)
    }));
    res.json({ success: true, todoLists: list });
});

app.post('/api/todo-lists/', function(req, res) {
    if (req.body.title) {
        todoLists.push({
            id: todoLists.length + 1,
            title: req.body.title
        });
        res.json({ success: true, todoList: todoLists[req.params.id] });
        return;
    }
    res.json({ success: false });
});

app.put('/api/todo-lists/:id', function(req, res) {
    todoLists.forEach((_, index) => {
        if (_.id == req.params.id) {
            todoLists[index].title = req.body.title;
        }
    });
    res.json({ success: true });
});

app.delete('/api/todo-lists/:id', function(req, res) {
    todoLists.splice(req.params.id - 1, 1);
    tasks = tasks.filter(_ => _.todoListsId != req.params.id);
    res.json({ success: true });
});

app.post('/api/tasks', function(req, res) {
    if (req.body.todoListsId) {
        tasks.push({
            id: tasks.length + 1,
            todoListsId: req.body.todoListsId,
            body: req.body.body,
            status: false
        });
        res.json({ success: true });
        return;
    }
    res.json({ success: false });
});

app.put('/api/tasks/:id', function(req, res) {
    tasks.forEach((_, index) => {
        if (_.id == req.params.id) {
            _.body = req.body.body;
            _.status = req.body.status;
            tasks[index] = _;
        }
    });
    res.json({ success: true });
});

app.delete('/api/tasks/:id', function(req, res) {
    tasks.splice(req.params.id - 1, 1);
    res.json({ success: true });
});

app.listen(3003);
