import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1645280387223 implements MigrationInterface {
    name = 'InitDB1645280387223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
