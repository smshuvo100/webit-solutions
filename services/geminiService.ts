import { GoogleGenAI } from "@google/genai";

export const generateAudit = async (businessInput: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing from environment");
    return "API Key missing. Unable to perform audit.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are an aggressive, high-performance business consultant for WebIT Solutions.
      The user has provided this input about their business: "${businessInput}".
      
      Give them a "brutally honest" 3-point mini-audit on how they are likely failing to scale online based on typical industry bottlenecks.
      Keep it punchy, short, and use "Big Dog" positioning language (e.g., "Stop leaving money on the table", "Your competitors are eating your lunch").
      
      Format:
      1. [Point 1]
      2. [Point 2]
      3. [Point 3]
      
      End with a short sentence: "We fix this."
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate audit. Try again.";
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    return "System overload. Our AI is currently analyzing too many requests.";
  }
};