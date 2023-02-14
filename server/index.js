import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/home", async (req, res) => {
  res.send("hello from DALL-E");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("server has started on port http://localhost:8080 ")
  );
};

startServer();
