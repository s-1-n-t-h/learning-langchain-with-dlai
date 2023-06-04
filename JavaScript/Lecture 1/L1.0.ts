// LangChain: Models, Prompts and Output
require("dotenv").config();
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
	ChatPromptTemplate,
	HumanMessagePromptTemplate,
} from "langchain/prompts";
import { LLMChain } from "langchain/chains";

(async () => {
	const chat = new ChatOpenAI({ temperature: 0 });

	const templateString =
		"Translate the text \
        that is delimited by triple backticks \
        into a style that is {style}. \
        text: ```{text}```";
    
    // prompt template
	const promptTemplate = ChatPromptTemplate.fromPromptMessages([
		HumanMessagePromptTemplate.fromTemplate(templateString),
	]);

	const customerStyle =
		"American English \
    in a calm and respectful tone";

	const customerEmail =
		"Arrr, I be fuming that me blender lid \
    flew off and splattered me kitchen walls \
    with smoothie! And to make matters worse, \
    the warranty don't cover the cost of \
    cleaning up me kitchen. I need yer help \
    right now, matey!";

	const inputVariables = {
		style: customerStyle,
		text: customerEmail,
	};

	const chain = new LLMChain({ llm: chat, prompt: promptTemplate });
	const response = await chain.call(inputVariables);
	console.log(response);

	const serviceReply =
		"Hey there customer, \
        the warranty does not cover \
    cleaning expenses for your kitchen \
    because it's your fault that \
    you misused your blender \
    by forgetting to put the lid on before \
    starting the blender. \
    Tough luck! See ya!";

    const serviceStylePirate =
		"\
        a polite tone \
        that speaks in English Pirate\
        ";

	const inputVariables2 = {
		style: serviceStylePirate,
		text: serviceReply,
	};

	console.log(await chain.call(inputVariables2));

    // Output Parsers
})();
