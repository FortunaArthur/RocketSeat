// isso aki foi td COPIA E COLA, só o dele ta diferente ai fui tentando ir com a nova versão
import 'dotenv/config';
import postgres from 'postgres';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: true, // Ajuste conforme necessário
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

// deu erro de n sei oq, mandei p chat e ele arrumo