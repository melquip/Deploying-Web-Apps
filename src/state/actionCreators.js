import axios from 'axios';
import * as types from './actionTypes';
import * as withAuth from '../helpers/withAuth';

export const setLoading = (isLoading) => {
	return { type: types.SET_LOADING, payload: isLoading };
}
export const setFriendsList = list => {
	return { type: types.SET_FRIENDS_LIST, payload: list };
}
export const addFriendToList = friend => dispatch => {
	dispatch(setLoading(true));
	withAuth.asAxios().post("https://api.melquip.now.sh/api/friends", friend)
		.then(({ data }) => {
			console.log('added a friend', data);
			dispatch(setFriendsList(data));
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err))
}
export const startEditFriend = friend => {
	return { type: types.EDIT_FRIEND, payload: friend };
}
export const editFriend = friend => dispatch => {
	dispatch(setLoading(true));
	withAuth.asAxios().put(`https://api.melquip.now.sh/api/friends/${friend.id}`, friend)
		.then(({ data }) => {
			dispatch(setFriendsList(data));
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err))
}
export const deleteFriend = id => dispatch => {
	dispatch(setLoading(true));
	withAuth.asAxios().delete(`https://api.melquip.now.sh/api/friends/${id}`)
		.then(({ data }) => {
			dispatch(setFriendsList(data));
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err))
}
export const getFriendsList = () => dispatch => {
	withAuth.asAxios().get("https://api.melquip.now.sh/api/friends")
		.then(({ data }) => {
			dispatch(setFriendsList(data));
			dispatch(setLoading(false));
		})
		.catch(err => console.log(err))
}
export const onLoginInputChange = field => {
	return {
		type: types.ON_LOGIN_INPUT_CHANGE,
		payload: { [field.name]: field.value }
	};
}
export const onFriendsInputChange = field => {
	return {
		type: types.ON_FRIENDS_INPUT_CHANGE,
		payload: { [field.name]: field.value }
	};
}
export const logout = () => {
	localStorage.removeItem('login_token');
	return { type: types.LOGOUT };
}
export const attemptLogin = (login) => dispatch => {
	axios.post(`https://api.melquip.now.sh/api/login`, login)
		.then(({ data }) => {
			console.log('logged in', data);
			dispatch({ type: types.LOGIN });
			localStorage.setItem('login_token', data.payload);
			window.location.href = '/friends';
		})
		.catch(err => console.log(err));
}