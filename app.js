import { GoogleGenAI } from "@google/genai";
async function jack(){
    const ai = new GoogleGenAI({});
    const value = document.getElementById('tag').value;
    const newElement = document.createElement('span')
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: value,
  });
  newElement.textContent=response.text;
    newElement.style.color='red';
    document.body.appendChild(newElement);
    newElement.style.textAlign = 'center';
    newElement.style.display = 'block';
}