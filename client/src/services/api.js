import axios from 'axios';

const URL = 'https://serverstartup.onrender.com'
export const getHostelsData = async () => {
    try {
        return await axios.get(`${URL}/hostel`);
    } catch (error) {
        console.log("error while fetching the data", error.message);
    }
}