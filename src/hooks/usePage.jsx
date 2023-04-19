import { useState, useEffect } from 'react';

export const usePage = () => {
	const [page, setPage] = useState(0);

	const nextPage = () => {
		setPage(page + 1);
	};
	const previousPage = () => {
		if (page > 0) setPage(page - 1);
	};

    return { page, nextPage, previousPage };
};
