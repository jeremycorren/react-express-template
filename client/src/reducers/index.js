import { combineReducers } from 'redux';

const page = (state, action) => {
	switch (action.type) {
		case 'SET_PAGE':
			return {
				id: action.id,
				title: action.title,
				content: action.content,
				createTimestamp: action.createTimestamp,
				updateTimestamp: action.updateTimestamp
			};
		case 'FETCH_PAGE':
			return {
				id: action.page.id,
				title: action.page.title,
				content: action.page.content,
				createTimestamp: action.page.createTimestamp,
				updateTimestamp: action.page.updateTimestamp
			}
		default:
			return state;
	}
};

const pages = (state = [], action) => {
	switch (action.type) {
		case 'SET_PAGE':
		case 'FETCH_PAGE':
			return [page(undefined, action)];
		case 'FETCH_PAGES':
			const nextState = [];
			action.pages.forEach((page) => nextState.push(page));
			return nextState;
		default:
			return state;
	}
};

const reducer = combineReducers({
	pages
});

export const getPages = (state) => state.pages;

export default reducer;