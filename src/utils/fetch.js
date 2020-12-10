import { message } from 'antd';

const BASEHOST = 'https://cs148-python-backend.herokuapp.com';

function parseUrlParams(url, data) {
	return url.replace(/(\{(\w*?)\})/g, function (match, full, n1) {
		if (full === "$$") {
			return data;
		} else if (data[n1] !== undefined) {
			var rs = data[n1];
			delete data[n1];
			return rs;
		}
		return full;
	});
}

class Fetch {
	get(urls, params) {
		let url = parseUrlParams(urls, params);
		if (params) {
			var paramsArray = [];
			Object.keys(params).forEach(function (key) {
				paramsArray.push(key + '=' + params[key])
			});
			if (url.search(/\?/) === -1) {
				url += '?' + paramsArray.join('&')
			} else {
				url += '&' + paramsArray.join('&')
			}
		}
		let fetchConfig = {
			method: 'get',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			credentials: "include",
			mode: 'cors',
		}
		return fetch(BASEHOST + url, fetchConfig).then(response => {
			return response.json().then((res) => {
				return Promise.resolve(res)
			})
		}).catch(err => {
			message.success('Network request abnormal', 2);
		})
	}
	post(url, options) {
		return fetch(BASEHOST + url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			credentials: "include",
			mode: 'cors',
			body: JSON.stringify(options)
		}).then(response => {
			return response.json().then((res) => {
				return Promise.resolve(res)
			})
		}).catch(err => {
			message.success('Network request abnormal', 2);
		})
	}
}

export default new Fetch()
