import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Courses_1672271206733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'courses',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                        },
                        {
                            name: 'name',
                            type: 'varchar'
                        },
                        {
                            name: 'description',
                            type: 'varchar'
                        },
                        {
                            name: 'category_id',
                            type: 'uuid'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()',
                        }
                    ],
                    foreignKeys: [
                        {
                          name: "FKCategory",
                          referencedTableName: "categories",
                          referencedColumnNames: ["id"],
                          columnNames: ["category_id"],
                          onDelete: "SET NULL",
                          onUpdate: "SET NULL",
                        }
                      ],
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courses");
    }

}
