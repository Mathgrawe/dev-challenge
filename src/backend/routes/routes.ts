import express, { Request, Response } from "express";
import search from "../service/search";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("MultiSearch Backend is running!");
});

router.get("/search/:query", (req: Request, res: Response) => {
  const searchTerm: string = req.params.query.toLowerCase(); //pega os dados
  const result: any[] = search(searchTerm); //armazena

  res.json(result);
});

export default router;
