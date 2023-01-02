import { DataSourceOptions } from "typeorm";
import { Categories_1672271218613 } from "./database/migrations/Categories_1672271218613";
import { Courses_1672271206733 } from "./database/migrations/Courses_1672271206733";

export function getConfig() {
    return {
        type: 'postgres',
        host: 'db_graphql',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'graphql_db',
        synchronize: false,
        migrations: [Categories_1672271218613, Courses_1672271206733],
        entities: ['./src/modules/**/infra/typeorm/entities/*.{ts,js}'],
    }  as DataSourceOptions
};