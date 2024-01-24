import { Prisma, PrismaClient } from "@prisma/client";

// exportrando e conectando com o banco
export const prisma =  new PrismaClient({
    log: ['query']
});