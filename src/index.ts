import express from "express";
import { createConnection, BaseEntity,ConnectionOptions } from 'typeorm'
import dbConfig from "./ormconfig";
const heroRouter = require("./route/hero");

let app = async () => {
  const app = express()

  const connection = await createConnection(
    dbConfig as ConnectionOptions,
  );

  BaseEntity.useConnection(connection)

  app.use("/api/hero", heroRouter);
  app.listen(3001, () => console.log('Example app listening on port 3001!'))
}

app()