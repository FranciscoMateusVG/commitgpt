// Adapted from: https://github.com/wong2/chat-gpt-google-extension/blob/main/background/index.mjs

import { Configuration, OpenAIApi } from 'openai'
import { getApiKey, getPromptOptions } from './config.js'

const configuration = new Configuration({
  //@ts-ignore
  apiKey: await getApiKey()
})
const openai = new OpenAIApi(configuration)

export class ChatGPTClient {
  async getAnswer(question: string): Promise<string> {
    const { model, maxTokens, temperature } = await getPromptOptions()

    try {
      const result = await openai.createChatCompletion({
        model,
        messages: [{ role: 'user', content: question }],
        max_tokens: maxTokens,
        temperature
      })
      const text = result.data.choices[0].message?.content
      if (text === undefined) {
        throw new Error('No text found in response.')
      }
      return text
    } catch (e: any) {
      console.error(e?.response ?? e)
      throw e
    }
  }
}
