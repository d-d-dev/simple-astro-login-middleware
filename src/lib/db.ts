import { drizzle, type MySqlRawQueryResult } from 'drizzle-orm/mysql2';
import mysql, { type ResultSetHeader } from "mysql2/promise";
import * as schema from './schema';
import { asc, desc, eq } from 'drizzle-orm';


type TDBConnection = {
    client: mysql.PoolConnection | null,
    error: mysql.ErrorPacketParams | null
};
type TDBPool = {
    pool: mysql.Pool | null,
    conn: () => Promise<TDBConnection>
};
const db_pool: TDBPool = {
    pool: null,
    conn: async function() {
        try{
            if(!this.pool) this.pool = mysql.createPool({
                host: import.meta.env.DB_HOST, 
                database: import.meta.env.DB_NAME,
                user: import.meta.env.DB_USER,
                password: import.meta.env.DB_PASS,
            });
            return {client: await this.pool.getConnection(), error: null};
        }
        catch(err){
            return {client:null, error: err as mysql.ErrorPacketParams}
        }
    }
};

type TCachedQuery<T> = {
    data: T[],
    error: mysql.ErrorPacketParams | null,
    read: (refresh?:boolean) => Promise<T[]>,
};

