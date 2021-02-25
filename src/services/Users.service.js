import axios from 'axios';

const baseUrl = "https://jsonmock.hackerrank.com/api";
const headers = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const axiosCurried = (params) => (address) => axios.get(address, params);


const axiosWithHeaders = (address, params) => axiosCurried({...headers, params: params})(address);
export const getUsers = async (page) => await axiosWithHeaders(`${baseUrl}/article_users/search`, { page: page});
export const searchUsers = async (searchString) => await axiosWithHeaders(`${baseUrl}/article_users/search`, { username: searchString});
