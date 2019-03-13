import axios from 'axios';

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID 8aedfd6feeeebaccf7ca7634748904e6ffbef1879cde3b83b61b3b82f2e06dfc`
  }
});
