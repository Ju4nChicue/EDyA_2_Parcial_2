import { setPosts, startLoading } from './PostSlice';
import axios from 'axios';

export const getPosts = () => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

		const responseImages = await axios.get(
			`https://jsonplaceholder.typicode.com/photos`
		);

		const response = responseImages.data.map((item, key) => ({
			id: item.id,
			albumId: item.id,
			title: item.title,
			picture: item.url,
		}));

		const groups = [];
		const groupSize = 50;
		for (let i = 0; i < response.length; i += groupSize) {
			groups.push(response.slice(i, i + groupSize));
		}

		dispatch(
			setPosts({
				getPosts: groups,
			})
		);
	};
};
