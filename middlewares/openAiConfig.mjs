import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

dotenv.config();

 const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.API_KEY,
});

export const openai = new OpenAIApi(configuration);

