const express = require('express')
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const app = express()
const port = 3000
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get('/test', async (req, res) => {
    console.log(process.env.OPENAI_API_KEY);
    const response = await openai.createEdit({
        model: "text-davinci-edit-001",
        input: "What day of the wek is it?",
        instruction: "Fix the spelling mistakes",
    });
    // res.send(response)
    res.json(response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})