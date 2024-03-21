import OpenAI from 'openai';
import { openai_gpt_key } from './constants';

const openai = new OpenAI({
  apiKey: openai_gpt_key,
  dangerouslyAllowBrowser:true
});

export default openai