import { PromptTemplate } from "langchain/prompts"

(async () => {
    const template = "What is the capital city of {country}"
    const prompt = new PromptTemplate({
        inputVariables: ["country"],
        template: template
    })
    const res = await prompt.format({
        country: "France"
    })
    console.log(res)
})()

