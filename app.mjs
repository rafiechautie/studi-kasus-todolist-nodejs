import http from "http"
import { TodolistService } from "./todolist-service.mjs"

const service = new TodolistService();
const server  = http.createServer((request, response) => {
   
    // ngasih tau value yang dikerluarkan harus berupa json
    response.setHeader("Content-Type", "application/json");

    if(request.method === "GET"){
        service.getTodolist(request, response)
    }else if(request.method === "POST"){
        service.createTodo(request, response)
    }else if(request.method === "PUT"){
        service.updateTodo(request, response)
    }else if(request.method === "DELETE"){
        service.deleteTodo(request, response)
    }

    response.end()
})

server.listen(3000);