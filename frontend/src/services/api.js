import axios from 'axios';

const api = axios.create({
  baseURL: "https://ep-rapid-snowflake-a4vr6eo2-pooler.us-east-1.aws.neon.tech",
});

export default api;