import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { NewsItem } from "../NewsItem";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("renders news data", async () => {
	const fakeNews = {
		author: "SQL2219",
		comment_text: null,
		created_at: "2020-05-16T14:54:55.000Z",
		created_at_i: 1589640895,
		num_comments: 34,
		objectID: "23203860",
		parent_id: null,
		points: 39,
		story_id: null,
		story_text: null,
		story_title: null,
		story_url: null,
		title: "Hey tested",
		url: "https://google.com",
	};
	jest.spyOn(global, "fetch").mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(fakeNews)
		})
	);

	await act(async () => {
		render(<Provider store={store}><NewsItem {...fakeNews} /></Provider>, container);
	});
	expect(container.querySelector(".title-elem").textContent).toBe(fakeNews.title);
	expect(container.querySelector(".num-elem").textContent).toBe(fakeNews.num_comments.toString());
global.fetch.mockRestore();
});