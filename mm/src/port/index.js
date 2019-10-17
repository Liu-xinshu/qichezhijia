import axios from 'axios';


//登陆接口
export const login = (params) => axios.post('/login/required', params);