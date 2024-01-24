import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import {z} from 'zod';

export async function rotasMemorias(app: FastifyInstance) {
    
    app.post('/memorias', async (request) => {
        const bodySchema = z.object({
            content: z.string(),
            imgURL: z.string(),
            isPublic: z.coerce.boolean().default(false)
        });
        
        const {content, imgURL, isPublic} = bodySchema.parse(request.body)

        const memory = await prisma.memoria.create({
            data:{
                conteudo,
                imgURL,
                isPublic,
                usuariosId: //aki vc coloca o id do usuario
            }
        });
    });

    app.get('/memorias', async () => {
        const memorias = await prisma.memoria.findMany({
            orderBy: {
                createdAt: 'asc',

            },
        });

        return memorias.map(memory => {
            return{
                id: memory.id,
                imgURL: memory.imgURL,
                info: memory.conteudo.substring(0, 115).concat("...")
            }
        });
    });

    app.get('/memorias/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid()
        });

        const {id} = paramsSchema.parse(request.params)

        const memory = await prisma.memoria.findUniqueOrThrow({
            where: {
                id,
            },
        });

        return memory;
    });

    app.put('/memorias/:id', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid()
        });

        const {id} = paramsSchema.parse(request.params)

        const bodySchema = z.object({
            content: z.string(),
            imgURL: z.string(),
            isPublic: z.coerce.boolean().default(false)
        });

        const {content, imgURL, isPublic} = bodySchema.parse(request.body)

        const memory = await prisma.memoria.update({
            where: {
                id,
            },
            data:{
                conteudo,
                imgURL,
                isPublic
            }
        });

        return memory;
    });

    app.delete('/memorias', async (request) => {
        const paramsSchema = z.object({
            id: z.string().uuid()
        });

        const {id} = paramsSchema.parse(request.params)

        const memory = await prisma.memoria.delete({
            where: {
                id,
            },
        });
    });
}