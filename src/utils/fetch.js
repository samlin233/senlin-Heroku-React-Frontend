const BASEHOST = 'http://musicapi.ignorantscholar.cn';

class Fetch {
	get(url, params) {
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
				authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				'Content-Type': 'application/json; charset=utf-8'
			},
			credentials: "include",
			mode: 'cors',
		}
		return fetch(BASEHOST + url, fetchConfig).then(response => {
			return response.json().then((res) => {
				if (response.ok && res.code === 200) {
					return Promise.resolve(res)
				} else {
					return Promise.reject(res)
				}
			})
		})
	}
	post(url, options) {
		return fetch(BASEHOST + url, {
			method: 'post',
			headers: {
				//  authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
				//  'Content-Type': 'application/json; charset=utf-8'
				// token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : 'GSVDADGFN_WDBSADVD'
			},
			credentials: "include",
			mode: 'cors',
			body: JSON.stringify(options)
		}).then(response => {
			return response.json().then((res) => {
				delete this.urlList[url] // 每次请求成功后 都删除队列里的路径
				if (response.ok && res.code === 200) {
					return Promise.resolve(res)
				} else {
					Toasts(res.msg || '网络请求异常', 2000)
					return Promise.reject(res)
				}
			})
		}).catch(err => {
			delete this.urlList[url] // 每次请求成功后 都删除队列里的路径
			Toasts('网络请求异常，请两分钟后再试', 2000)
		})
	}
}

export default new Fetch()
