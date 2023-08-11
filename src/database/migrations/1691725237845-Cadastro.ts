import { MigrationInterface, QueryRunner, Table  } from "typeorm"

export class Cadastro1691725237845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Cadastro",
                columns: [
                    {
                        name: "Nome",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "Email",
                        type: "uuid",//identificador unico
                    },
                    {
                        name:"Senha",
                        type:"varchar"
                    },
                    {
                        name:"Criação",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
