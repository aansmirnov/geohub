-- AlterTable
ALTER TABLE "User" ADD COLUMN     "authCode" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_authCode_key" ON "User"("authCode");
