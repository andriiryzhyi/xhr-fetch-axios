const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? { 'Content-Type': 'application/json' } : {}
	})
		.then(response => {
			console.log(response);
			if (response.status >= 400) {
				return response.json().then(errResData => {
					const error = new Error('Something went wrong!');
					error.data = errResData;
					throw error;
				});
			}
			return response.json();
		});
};

const getData = () => {
	console.log('GET DATA');
	sendHttpRequest('GET', 'https://reqres.in/api/users')
		.then(responseData => {
			console.log(responseData);
		})
		.catch(error => {
			console.error('ERROR', error);
		});
};

const sendData = () => {
	console.log('SEND DATA');
	sendHttpRequest('POST', 'https://reqres.in/api/register', {
		email: 'eve.holt@reqres.in',
		// password: 'pistol'
	})
		.then(responseData => {
			console.log(responseData);
		})
		.catch(error => {
			console.error('ERROR', error);
		});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);