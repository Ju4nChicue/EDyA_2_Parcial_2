import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';

export const PostBottomBar = ({ title }) => {
	return (
		<>
			<div className='flex justify-center py-2 px-6 bg-gray-200 rounded-b-md space-y-2 h-20'>
				<h1 className='text-sm xl:text-xl sm:text-xs'>{title}</h1>
			</div>
		</>
	);
};
