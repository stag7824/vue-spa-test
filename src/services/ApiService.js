import axios from 'axios';

export const fetchUsers = async () => {
    //   const response = await axios.get('https://api.example.com/users');
    //   return response.data;
    return [{
        "id": 1,
        "name": "John Doe",
        "role": "admin",
        "status": "active",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "role": "user",
        "status": "inactive",
        "email": "jane.smith@example.com"
    }
    ]
};

export const fetchUserById = async (id) => {
    //   const response = await axios.get(`https://api.example.com/users/${id}`);
    //   return response.data;
    return [
        {
            "id": 1,
            "name": "John Doe",
            "role": "admin",
            "status": "active",
            "email": "john.doe@example.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "role": "user",
            "status": "inactive",
            "email": "jane.smith@example.com"
        }
    ]
};
