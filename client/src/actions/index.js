export const createPage = (id, title, content) => {
	return (dispatch) => {
		const createTimestamp = new Date().toString();
		fetch('/api/create', {
			method: 'post',
			headers: new Headers({ 'content-type': 'application/json' }),
			body: JSON.stringify({ id, title, content, createTimestamp })
		})
		.then((res) => res.json())
		.then((msg) => {
			console.log(msg);
			dispatch({
				type: 'SET_PAGE',
				id,
				title,
				content,
				createTimestamp,
				updateTimestamp: null
			});
		});
	};
};

export const updatePage = (id, title, content, createTimestamp) => {
	return (dispatch) => {
		const updateTimestamp = new Date().toString();
		fetch('/api/update', {
			method: 'post',
			headers: new Headers({ 'content-type': 'application/json' }),
			body: JSON.stringify({ id, title, content, createTimestamp, updateTimestamp })
		})
		.then((res) => res.json())
		.then((msg) => {
			console.log(msg);
			dispatch({
				type: 'SET_PAGE',
				id,
				title,
				content,
				createTimestamp,
				updateTimestamp
			});
		})
	}
};

export const fetchPage = (id) => {
	return (dispatch) => {
		fetch('/api/get/' + id, {
			method: 'get'
		})
		.then((res) => res.json())
		.then((page) => dispatch({
			type: 'FETCH_PAGE',
			page
		}));
	};
};

export const fetchPages = () => {
	return (dispatch) => {
		fetch('/api/list', {
			method: 'get'
		})
		.then((res) => res.json())
		.then((pages) => dispatch({
			type: 'FETCH_PAGES',
			pages
		}));
	};
};