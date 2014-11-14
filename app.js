var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var tasks = require('./routes/tasks');
var corsOptions = {
    origin: '*',
    methods: ['GET','PUT','POST','DELETE']
};

var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/tasks', tasks.getAllTasks);
app.post('/tasks/:id', tasks.createTask);
app.put('/tasks/:id', tasks.updateTask);
app.delete('/tasks/:id', tasks.deleteTask);

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server running at http://localhost:5000/R');