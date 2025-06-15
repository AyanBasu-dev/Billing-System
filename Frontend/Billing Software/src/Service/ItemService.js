import axios from "axios";

export const addItem = async (item) => {
    return await axios.post('http://localhost:8080/api/v1.0/admin/items', item, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
                }
            });
        }

export const deleteItem = async (itemId) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/admin/items/${itemId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
        }
    });
}

export const fetchItems = async () => {
    return await axios.get('http://localhost:8080/api/v1.0/items', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
        }
    });
}