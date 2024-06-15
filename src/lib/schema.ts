import {varchar, primaryKey, mysqlTable, datetime, timestamp, text, boolean, float, date, foreignKey, int} from 'drizzle-orm/mysql-core';


export const ejemplo = mysqlTable('tabla_ejemplo', {
    id: int('id').notNull().autoincrement(),
    value: varchar('value', {length: 64}).notNull(),
}, (tabla) => ({
    pk: primaryKey({columns: [tabla.id]}),
}))
export type TipoEjemplo = typeof ejemplo.$inferInsert;