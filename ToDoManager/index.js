//importar bibliotecas
const express = require('express');
const app = express();
app.get('/',(req,res) => res.send('To Do Manager'));
app.listen(3000,()=> console.log('Server started on port 3000'));


//configurando requisições para trafegar json

const app = express;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Método Post
const tasks = [];

app.post('/tasks',(request, response) => {
    const {body} = request;
    const task = {
        id : Math.random().toString().replace('0.','');
        title: body.title,
        resume: body.resume,
        isDonde: body.isDonde,
        isPriority: body.isPriority
    };
    tasks.push(task);
    response.status(201);
    response.send(task);
});


//Método Get - sem parâmtro

app.get('/tasks', (request, response)=>{
    response.send(tasks);
});

//Método get - com parâmetros - consultar uma tarefa específica
app.get('/tasks/:taskId',(request, response) => {
    const task = tasks.find(t => t.id == request.params.taskId)
    if(task){
        response.status(200);
        response.send(task);
    }else{
        response.status(404);
        response.send;
    }
});

//Método put
app.put('/tasks/:taskId',(request, response)=>{
    const {body} = request;
    const task = tasks.find(t => t.id == request.params.taskId);
    if(task){
        task.title = body.title;
        task.resume = body.resume;
        body.isDonde = body.isDonde;
        body.isPriority = body.isPriority

        response.send(task)
   
    } else{
        response.status(404);
        Response.send
    }
});


//Método delete

app.delete('/tasks/:taskId',(request, response)=>{
    const task = tasks.find(t => t.id == request.params.taskId);
    if(task){
        tasks.pop(task);
        response.send(task);
    }else{
        response.status(404)
        response.send;
    }
});