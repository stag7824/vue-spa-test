import axios from 'axios';

const mockApiUserPlaceHolder = [{
    "id": 1,
    "name": "John Doe",
    "role": "admin",
    "status": "active",
    "email": "john.doe@example.com",
    "avatar": "https://randomuser.me/api/portraits/men/10.jpg",

},
{
    "id": 2,
    "name": "Jane Smith",
    "role": "user",
    "status": "inactive",
    "email": "jane.smith@example.com",
    "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
},
];

const randomUsers = [
    {
        id: 3,
        name: "Oliver Kantola",
        role: "user",
        status: "active",
        email: "oliver.kantola@example.com",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
        id: 4,
        name: "Zemislav Lagno",
        role: "user",
        status: "inactive",
        email: "zemislav.lagno@example.com",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
        id: 5,
        name: "Andrew Köllner",
        role: "user",
        status: "active",
        email: "andrew.kollner@example.com",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
        id: 6,
        name: "Wayne Fleming",
        role: "admin",
        status: "inactive",
        email: "wayne.fleming@example.com",
        avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
        id: 7,
        name: "Kristijan Zeljković",
        role: "user",
        status: "active",
        email: "kristijan.zeljkovic@example.com",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: 8,
        name: "Abigail Lee",
        role: "admin",
        status: "active",
        email: "abigail.lee@example.com",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
        id: 9,
        name: "Gönül Heins",
        role: "user",
        status: "inactive",
        email: "gonul.heins@example.com",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
        id: 10,
        name: "Serge Vollrath",
        role: "user",
        status: "active",
        email: "serge.vollrath@example.com",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 11,
        name: "Ian Cole",
        role: "admin",
        status: "inactive",
        email: "ian.cole@example.com",
        avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    {
        id: 12,
        name: "Anna Dupuis",
        role: "user",
        status: "active",
        email: "anna.dupuis@example.com",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    }
];

const finalUpdatedMockApiUserPlaceHolder = [...mockApiUserPlaceHolder, ...randomUsers];

export const fetchUsers = async () => {
    //   const response = await axios.get('https://api.example.com/users');
    //   return response.data;
    return finalUpdatedMockApiUserPlaceHolder;
};

export const fetchUserById = async (id) => {
    //   const response = await axios.get(`https://api.example.com/users/${id}`);
    //   return response.data;
    return finalUpdatedMockApiUserPlaceHolder;
};
