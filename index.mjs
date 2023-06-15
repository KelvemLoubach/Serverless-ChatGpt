
import { openai } from './middlewares/openAiConfig.mjs';

export const handler = async (event) => {

  try {

    const searche = event.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Responda sempre de uma forma grossa e inconveniente.
                      ${searche}
            `
        }
      ]
    });

    const message = response.data.choices[0].message.content;

    console.log(message);

    return {
      statusCode: 200,
      body: JSON.stringify(message),
    };

  } catch (err) {

    return err;

  }
};
