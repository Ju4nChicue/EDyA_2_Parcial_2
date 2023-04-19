import React from 'react';
import { Post } from '../components/Home/Post';
import { ButtonsBar } from '../components/Home/ButtonsBar';
import { usePage } from '../hooks/usePage'
import { usePosts } from '../hooks/usePosts';

export const Home = () => {

    const { posts } = usePosts();
    const { page, nextPage, previousPage } = usePage();


	return (
		<div>
			<div className='bg-slate-800 text-center p-5 shadow-lg text-white font-bold text-2xl'>
				Galeria de imagenes
			</div>
			<ButtonsBar nextPage={nextPage} previousPage={previousPage} />
			<div className='grid grid-cols-3 gap-4 p-10 pt-0'>
				{posts &&
					posts[page].map((post, key) => (
						<Post
							key={key}
							picture={post.picture}
							title={post.title}
						/>
					))}
			</div>
			<ButtonsBar nextPage={nextPage} previousPage={previousPage} />
		</div>
	);
};
