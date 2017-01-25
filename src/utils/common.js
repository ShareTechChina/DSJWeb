import configs from '../constants/configs';


export function request(url, method, body, token) {
    let success;
    let options = {method, headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-App-Token': token ? token : ''
    }};

    if (method === 'POST') {
        options.body = body;
    }

    return new Promise((resolve, reject) => {
        fetch(configs.serviceUrl + url).then((response) => {
            if (response.status === 200) {
                success = true;
            } else {
                success = false;
            }
            return response.json();
        }).then((responseData) => {
            if (success) {
                resolve(responseData);
            } else {
                reject(responseData);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

