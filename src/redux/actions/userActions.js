import {SET_TOTAL_PAGES, SET_TOTAL_USERS, SET_USER_LIST} from './types';

export const setUserList = item => { return { type: SET_USER_LIST, payload: item } }
export const setTotalPages = item => { return { type: SET_TOTAL_PAGES, payload: item } }
export const setTotalUsers = item => { return { type: SET_TOTAL_USERS, payload: item } }