import express from "express";
import cors from "cors";
import photosRouter from "../../routes/photos.js";
import tagsRouter from "../../routes/tags.js";
import serverless from "serverless-http";


const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());


app.use("/photos", photosRouter);
app.use("/tags", tagsRouter);

// app.listen(process.env.PORT || 8080, () =>
//     console.log(`Express server listening on port ${process.env.PORT || 8080}`)
// );

export const handler = serverless(app);