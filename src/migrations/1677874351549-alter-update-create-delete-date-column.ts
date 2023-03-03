import { MigrationInterface, QueryRunner } from "typeorm";

export class alterUpdateCreateDeleteDateColumn1677874351549 implements MigrationInterface {
    name = 'alterUpdateCreateDeleteDateColumn1677874351549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
