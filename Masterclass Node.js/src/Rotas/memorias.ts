import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function rotasMemorias(app: FastifyInstance) {
    
    app.post('/memorias', async () => {
        
    });

    app.get('/memorias', async () => {
        const memorias = await prisma.memoria.findMany({
            orderBy: {
                createdAt: 'asc',

            },
        });

        return memorias 
    });

    app.get('/memorias/:id', async () => {
        
    });

    app.put('/memorias', async () => {
        
    });

    app.delete('/memorias', async () => {
        
    });
   
}