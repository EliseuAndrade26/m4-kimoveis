import { MigrationInterface, QueryRunner } from "typeorm";

export class alterRealEstateCategoriesColumn1678205730671 implements MigrationInterface {
    name = 'alterRealEstateCategoriesColumn1678205730671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_da69d37040a04d33df8f9b3b596"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoresId" TO "categoriesId"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "categories_id_seq" OWNED BY "categories"."id"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" SET DEFAULT nextval('"categories_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" SET DEFAULT nextval('categires_id_seq')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "categories_id_seq"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoriesId" TO "categoresId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_da69d37040a04d33df8f9b3b596" FOREIGN KEY ("categoresId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
