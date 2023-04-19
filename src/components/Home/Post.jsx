import React from 'react';
import { PostBottomBar } from './PostBottomBar';

export const Post = ({ picture, profilePicture, title }) => {
	//console.log(profilePicture);
	return (
		<>
			<div className='rounded-md p-5'>
				<img
					src={picture}
					alt={'Imagen'}
					className='w-full rounded-t-md object-cover'
				/>

				<PostBottomBar title={title} />
			</div>
		</>
	);
};
