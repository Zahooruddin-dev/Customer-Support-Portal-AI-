// filepath: /customer-support-portal/customer-support-portal/src/services/ai.js

import axios from 'axios';

const AI_API_URL = process.env.REACT_APP_AI_API_URL;

export const fetchAIResponse = async (userInput) => {
    try {
        const response = await axios.post(`${AI_API_URL}/chat`, {
            message: userInput
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        throw error;
    }
};

export const fetchAIHelpTopics = async () => {
    try {
        const response = await axios.get(`${AI_API_URL}/help-topics`);
        return response.data;
    } catch (error) {
        console.error("Error fetching AI help topics:", error);
        throw error;
    }
};