/*
  Warnings:

  - You are about to drop the column `Detally` on the `Move` table. All the data in the column will be lost.
  - You are about to drop the column `Import` on the `Move` table. All the data in the column will be lost.
  - Added the required column `Amount` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Move` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Move" DROP COLUMN "Detally",
DROP COLUMN "Import",
ADD COLUMN     "Amount" INTEGER NOT NULL,
ADD COLUMN     "Name" TEXT NOT NULL;
