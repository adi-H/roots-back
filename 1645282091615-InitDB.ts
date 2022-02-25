import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1645282091615 implements MigrationInterface {
    name = 'InitDB1645282091615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Building" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_fe25db44682279be0e4849e7c65" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Unit" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "parent_id" integer, CONSTRAINT "PK_0a83556fc363a57bdeee23f9a9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Class" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "building_id" integer, "owner_unit_id" integer, CONSTRAINT "PK_18f5c53bfffaf0be6bd56a33315" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "team_id" integer, "role_id" integer, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Unit" ADD CONSTRAINT "FK_f403bda4390004994c829a6809d" FOREIGN KEY ("parent_id") REFERENCES "Unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Class" ADD CONSTRAINT "FK_1d76cb87c2156041a3a9cfe5d8a" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Class" ADD CONSTRAINT "FK_3cb9366a2cc998ed8b8ffadb756" FOREIGN KEY ("owner_unit_id") REFERENCES "Unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_585daf8514121da1e35d78037bf" FOREIGN KEY ("team_id") REFERENCES "Unit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_775147058c769ea57efe923d288" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_775147058c769ea57efe923d288"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_585daf8514121da1e35d78037bf"`);
        await queryRunner.query(`ALTER TABLE "Class" DROP CONSTRAINT "FK_3cb9366a2cc998ed8b8ffadb756"`);
        await queryRunner.query(`ALTER TABLE "Class" DROP CONSTRAINT "FK_1d76cb87c2156041a3a9cfe5d8a"`);
        await queryRunner.query(`ALTER TABLE "Unit" DROP CONSTRAINT "FK_f403bda4390004994c829a6809d"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Role"`);
        await queryRunner.query(`DROP TABLE "Class"`);
        await queryRunner.query(`DROP TABLE "Unit"`);
        await queryRunner.query(`DROP TABLE "Building"`);
    }

}
