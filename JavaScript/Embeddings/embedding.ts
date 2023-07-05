import { OpenAIEmbeddings } from "langchain/embeddings";
import dotenv from "dotenv";
dotenv.config();

(async () => {

  const embeddings = new OpenAIEmbeddings();
  const res = await embeddings.embedQuery("Hello world");
  console.log("query vector", res);

  const documentRes = await embeddings.embedDocuments([
    "Hello world",
    "Bye bye",
  ]);
  console.log({ documentRes });
})()