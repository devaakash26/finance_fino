/*
  Warnings:

  - You are about to drop the column `currency` on the `accounts` table. All the data in the column will be lost.
  - Changed the type of `type` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- AlterEnum
ALTER TYPE "RecurringInterval" ADD VALUE 'DAILY';

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "currency";

-- AlterTable
ALTER TABLE "budgets" ALTER COLUMN "lastAlertSent" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "type",
ADD COLUMN     "type" "TransactionType" NOT NULL,
ALTER COLUMN "recurringInterval" DROP NOT NULL;

-- DropEnum
DROP TYPE "TranscationType";
