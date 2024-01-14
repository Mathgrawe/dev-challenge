import express, { Request, Response } from "express";
import * as fs from "fs";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("MultiSearch Backend is running!");
});

router.get("/search/:query", (req: Request, res: Response) => {
  const searchTerm: string = req.params.query.toLowerCase();
  const result: any[] = [];

  const files: string[] = fs.readdirSync("./src/data");

  files.forEach((file) => {
    const data = JSON.parse(fs.readFileSync(`./src/data/${file}`, "utf-8"));

    const filteredData = data.filter((item: any) =>
      JSON.stringify(item).toLowerCase().includes(searchTerm)
    );

    result.push(...filteredData);
  });

  res.json(result);
});

export default router;
