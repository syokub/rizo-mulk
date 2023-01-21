// api.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE,
});

export const mock = new MockAdapter(api);

if (process.env.REACT_APP_MOCK_API === "true") {
	mock.onGet("/todos/1").reply(200, {
		users: [{ id: 1, name: "John Smith" }],
	});
} else {
	mock.restore();
}

export default api;
