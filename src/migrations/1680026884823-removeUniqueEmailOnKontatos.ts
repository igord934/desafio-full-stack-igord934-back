import { MigrationInterface, QueryRunner } from "typeorm";

export class removeUniqueEmailOnKontatos1680026884823 implements MigrationInterface {
    name = 'removeUniqueEmailOnKontatos1680026884823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontatos" DROP CONSTRAINT "UQ_ae12467e180d2fcc16c0b5500ae"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "kontatos" ADD CONSTRAINT "UQ_ae12467e180d2fcc16c0b5500ae" UNIQUE ("email")`);
    }

}
