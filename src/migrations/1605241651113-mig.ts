import {MigrationInterface, QueryRunner} from "typeorm";

export class mig1605241651113 implements MigrationInterface {
    name = 'mig1605241651113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hero" ("id" SERIAL NOT NULL, "name" character varying, "gender" character varying, "eyeColor" character varying, "race" character varying, "hairColor" character varying, "height" double precision, "publisher" character varying, "skinColor" character varying, "alignment" character varying, "weight" double precision, CONSTRAINT "PK_313d51d6899322b85f2df99ccde" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hero"`);
    }

}
