import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/slices/thunks';
import { useEffect } from 'react';


export const usePosts = () => {
    const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getPosts());
		console.log(posts);
	}, []);

    return { posts };
}