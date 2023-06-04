import { StructuredOutputParser } from "langchain/output_parsers";

gift_schema =
    ResponseSchema(
        name = "gift",
        description =
            "Was the item purchased\
                             as a gift for someone else? \
                             Answer True if yes,\
                             False if not or unknown.",
    );
delivery_days_schema =
    ResponseSchema(
        name = "delivery_days",
        description =
            "How many days\
                                      did it take for the product\
                                      to arrive? If this \
                                      information is not found,\
                                      output -1.",
    );
price_value_schema =
    ResponseSchema(
        name = "price_value",
        description =
            "Extract any\
                                    sentences about the value or \
                                    price, and output them as a \
                                    comma separated Python list.",
    );

response_schemas = [gift_schema, delivery_days_schema, price_value_schema];