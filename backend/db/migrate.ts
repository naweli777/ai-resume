import { migrate } from "drizzle-orm/node-postgres/migrator";
import db from "./db.js";

async function main(){
    console.log('Migration Started');
    await migrate(db,{migrationsFolder:'drizzle'});
    console.log('Migration Ended');
    // process.exit(0);
}

main().catch((err)=>{
    console.log(err);
    process.exit(0);
})