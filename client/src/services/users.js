import axios from 'axios';
import { BACKEND_URL } from '../environment/environment';

const USERS_URL = `${BACKEND_URL}/users`

async function getUsers(page, sortBy, name) {
    const response = await axios.post(USERS_URL, { page, sortBy, name });

    return response.data;
}

export default {
    getUsers,
}