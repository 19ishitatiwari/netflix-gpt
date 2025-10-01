import OpenAI from 'openai';
import { openai_key } from './constants';

const openai = new OpenAI({
  apiKey: openai_key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai;