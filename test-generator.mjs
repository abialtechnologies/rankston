import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('API_KEY_HERE'); // We need to grab this from .env.local

async function run() {
    console.log("Ready.");
}
run();
