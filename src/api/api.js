// api.js

import axios from 'axios';

// Function to fetch all music data from the backend
export const fetchMusicData = async () => {
    try {
        const response = await axios.get('/api/music');
        return response.data;
    } catch (error) {
        console.error('Error fetching music data:', error);
        return null;
    }
};

// Function to add new music data to the backend
export const addMusicData = async (musicData) => {
    try {
        const response = await axios.post('/api/music', musicData);
        return response.data;
    } catch (error) {
        console.error('Error adding music data:', error);
        return null;
    }
};

// Function to update existing music data in the backend
export const updateMusicData = async (id, updatedMusicData) => {
    try {
        const response = await axios.put(`/api/music/${id}`, updatedMusicData);
        return response.data;
    } catch (error) {
        console.error('Error updating music data:', error);
        return null;
    }
};

// Function to delete music data from the backend
export const deleteMusicData = async (id) => {
    try {
        const response = await axios.delete(`/api/music/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting music data:', error);
        return null;
    }
};
