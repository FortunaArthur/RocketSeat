/*
  Warnings:

  - Added the required column `avatarGIT` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gitID` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginGIT` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Memoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imgURL" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "memoryDATA" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuariosId" TEXT NOT NULL,
    CONSTRAINT "Memoria_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gitID" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "loginGIT" TEXT NOT NULL,
    "avatarGIT" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("id", "nome") SELECT "id", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_gitID_key" ON "Usuario"("gitID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
