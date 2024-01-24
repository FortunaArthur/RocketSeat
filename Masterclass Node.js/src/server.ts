import fastify from "fastify";

const app = fastify();

// rotas
app.get('/hello', () => {
    return "OLÁ MUNDO"
});









// rodar o sever em um porta local
// o then permite vc ouvir quando a porta tiver no ar
app.listen({
    port:3333,
}).then(() => {
    console.log("👍 Server HTTP ta on no http://localhost:3333")
});

