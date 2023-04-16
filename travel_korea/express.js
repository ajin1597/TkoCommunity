const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
  organization: process.env.REACT_APP_OPENAI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/chatbot", async (req, res) => {
  const { inputValue } = req.body;

  console.log(inputValue);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: inputValue }],
  });

  console.log(response.data.choices[0].message);

  if (response.data) {
    if (response.data.choices) {
      res.json({
        message: response.data.choices[0].message.content,
      });
    }
  }
});

app.listen(port, () => {
  console.log("Example app port: " + port);
});
