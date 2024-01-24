import fastify from "fastify";
import {PrismaClient} from "@prisma/client";
import { rotasMemorias } from "./Rotas/memorias";

// conectando com freamwork
const app = fastify();

app.register(rotasMemorias)

// rodar o sever em um porta local
// o then permite vc ouvir quando a porta tiver no ar
app.listen({
    port:3333,
}).then(() => {
    console.log("👍 Server HTTP ta on no http://localhost:3333")
});

