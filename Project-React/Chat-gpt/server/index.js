import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

const app = express();

env.config();

app.use(cors());
app.use(bodyParser.json());

// const Configuration = new Configuration({
//   organization: "org-ZOSfuPC2wjRywwTM6iueuVZi",
// });

// configure open api
const openai = new OpenAI({
  organization: "org-ZOSfuPC2wjRywwTM6iueuVZi",
  apiKey: "API_KEY", // This is also the default, can be omitted
});

// listening
app.listen("3080", () => console.log("Server is running on port 3080"));

// dummy route to test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// post route for making request

app.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    res.json({ message: response.data.choices[0].text });
  } catch (e) {
    console.log(e);
    res.send(e).status(400);
  }
});
