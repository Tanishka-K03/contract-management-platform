-- CreateTable
CREATE TABLE `Blueprint` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlueprintField` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `positionX` INTEGER NOT NULL,
    `positionY` INTEGER NOT NULL,
    `blueprintId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('CREATED', 'APPROVED', 'SENT', 'SIGNED', 'LOCKED', 'REVOKED') NOT NULL,
    `blueprintId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContractField` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NULL,
    `contractId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BlueprintField` ADD CONSTRAINT `BlueprintField_blueprintId_fkey` FOREIGN KEY (`blueprintId`) REFERENCES `Blueprint`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContractField` ADD CONSTRAINT `ContractField_contractId_fkey` FOREIGN KEY (`contractId`) REFERENCES `Contract`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
