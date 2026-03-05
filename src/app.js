import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/movie", movieRoutes);
app.use(errorHandler);

export default app;
