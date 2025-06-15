import axios from "axios";

export const login = async (data) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1.0/login', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response; // Assuming the API returns user data on successful login
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Propagate the error to be handled by the calling function
    }
}