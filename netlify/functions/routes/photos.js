import express from "express";
import { readFromFile, writeToFile } from "../fsUtils";
import { v4 } from "uuid";

const photosRouter = express.Router();

photosRouter.get("/", (req, res) => {
    const photos = readFromFile("photos");
    res.json(
        photos.map((p) => ({
            id: p.id,
            photo: p.photo,
            photoDescription: p.photoDescription,
            tags: p.tags,
            photographer: p.photographer,
        }))
    );
});

photosRouter.get("/:id", (req, res) => {
    const photos = readFromFile("photos");
    const photo = photos.find((p) => p.id === req.params.id);

    if (!photo) {
        res.sendStatus(404);
    } else {
        res.json(photo);
    }
});

photosRouter.post("/:id/comments", (req, res) => {
    const { name, comment } = req.body;

    if (!name || !comment) {
        return res.status(400).send('"name" and "comment" are required fields');
    }

    const photos = readFromFile("photos");
    const photo = photos.find((p) => p.id === req.params.id);

    if (!photo) {
        return res.sendStatus(404);
    }

    const newComment = { id: v4(), name, comment, timestamp: Date.now() };
    photo.comments.push(newComment);
    writeToFile("photos", photos);
    res.json(newComment);
});

export default photosRouter;
