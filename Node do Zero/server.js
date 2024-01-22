// import {createServer} from "node:http";

// // request são os dados que o usuario faz requisição
// // response é o objeto que vai devolver uma resposta pra quem ta chamando a API

// const server = createServer((request, response) => {
//     // console.log("oi")
//     response.write("OI")
//     return response.end()
// })

// server.listen(3333)

// // coloca isso no package.jason pra o sever inicar e atualizar direto sem avisos
// // node --watch server.js, o node avisou que: node: bad option: --no-warnigs


// agora vamo usar fastify, um freamwork pra fazer a msm coisa

import { fastify } from "fastify";
import { DataBaseMemory } from "./database-memory.js";

const sever = fastify();

const database = new DataBaseMemory;

// fazer crud basico (get, post, put, delete)

sever.post("/videos", (request, reply) => {
    const body = request.body;
    
    console.log(body);

    database.create({
        titulo: "Video 01",
        info: "É o primeiro video",
        tempo: 180
    });

    console.log(database.list());

    return reply.status(201).send();
})

sever.get("/videos", () => {
    return "RocketSeat"
})

sever.delete("/videos/:id", () => {
    return "RocketSeat"
})

sever.put("/videos/:id", () => {
    return "RocketSeat"
})

sever.listen({
    port:3333,
})