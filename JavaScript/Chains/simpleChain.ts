import dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "langchain/llms/openai";

(async () => {
    const model = new OpenAI({ temperature: 0.1 });
    const res = await model.call("What is the capital city of France?");
    console.log(res);
})()

