import { sql } from "./db.js";

sql`
    CREATE TABLE videos (
        titulo    TEXT,
        info      TEXT,
        tempo     INTEGER
    );
`.then(()=>{
    console.log("Tabela Criada")
});