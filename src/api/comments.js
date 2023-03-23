import axios from 'axios';

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";
const getComments = async () => {
    const response = await axios.get(`${COMMENTS_URL}`);
    return response.data;
}

export {getComments};