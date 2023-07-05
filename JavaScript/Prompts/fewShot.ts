import { FewShotPromptTemplate, PromptTemplate } from "langchain/prompts";

(
    async () => {
        const examples = [
            {country: "United States", capital: "Wahington, D.C"},
            {country: "Canada", capital: "Ottawa"}
        ]

        const exampleFormatterTemplate = "Country: {country}\nCapital: {capital}\n"
        const examplePrompt = new PromptTemplate({
            inputVariables: ["country", "capital"],
            template: exampleFormatterTemplate
        })

        const fewShotPrompt = new FewShotPromptTemplate({
            examples,
            examplePrompt,
            prefix: "What is the capital city of the country below?",
            suffix: "Country: {country}\n capital:",
            inputVariables: ["capital"],
            exampleSeparator: "\n\n",
            templateFormat: "f-string"
        })

        const res = await fewShotPrompt.format({ country: "France"})
        console.log(res)
    }
)()