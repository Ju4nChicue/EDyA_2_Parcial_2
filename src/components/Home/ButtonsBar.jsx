import React from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const ButtonsBar = ({ nextPage, previousPage }) => {
	return (
		<>
			<div className='flex justify-center m-5 space-x-3'>
				<button  onClick={previousPage} className='bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center'>
					<BsFillArrowLeftCircleFill className='h-5 w-5 mr-2' />
					Anterior
				</button>
				<button onClick={nextPage} className='bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full flex items-center'>
					Siguiente
					<BsFillArrowRightCircleFill className='h-5 w-5 ml-2' />
				</button>
			</div>
		</>
	);
};
