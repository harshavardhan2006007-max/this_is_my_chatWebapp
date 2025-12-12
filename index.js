import { GoogleGenAI } from "@google/genai";

async function jack() {
    // 1. Get the user input and prepare the output element
    const inputElement = document.getElementById('tag');
    if (!inputElement) {
        console.error("Input element with ID 'tag' not found.");
        return;
    }
    const value = inputElement.value;
    const newElement = document.createElement('div'); // Using a <div> for block display

    // 2. Initialize the Client with the PUBLIC API Key
    // !!! CRITICAL SECURITY WARNING: DO NOT USE A PRODUCTION KEY HERE !!!
    const ai = new GoogleGenAI({
        // Replace this placeholder with your actual, publicly exposed key
        apiKey: 'AIzaSyB2PeQxF56rBZO8Lhz4kLfQv_W_YKNNtcw', 
    }); 

    try {
        // 3. Make the API Call
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: value, 
        });
        
        // 4. Handle a successful response
        newElement.textContent = response.text;
        newElement.style.color = 'green'; 
        
    } catch (error) {
        // 5. Handle any network or API-side errors
        console.error("Gemini API Error:", error);
        newElement.textContent = `Error: Could not get response. Check API Key restrictions. (${error.message})`;
        newElement.style.color = 'darkred';
        
    } finally {
        // 6. Final display and cleanup
        newElement.style.textAlign = 'center';
        document.body.appendChild(newElement);
    }
}