// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.post("/post", express.json(), (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

api.use("/api/", router);

export const handler = serverless(api);
