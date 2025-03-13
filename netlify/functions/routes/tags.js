import express from "express";
import { readFromFile, writeToFile } from "../fsUtils";

const tagsRouter = express.Router();

tagsRouter.get("/", (req, res) => {
    const tags = readFromFile("tags");
    res.json(tags);
});

export default tagsRouter;
