const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);

		xhr.responseType = 'json';

		if (data) {
			xhr.setRequestHeader('Content-Type', 'application/json');
		}

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};

		xhr.onerror = () => {
			reject('Something went wrong!');
		}

		xhr.send(JSON.stringify(data));
	});
}

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
		password: 'pistol'
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