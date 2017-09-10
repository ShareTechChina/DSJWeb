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

export function timeFormat(time,parrent) {
    const data = new Date(time);
    let cal = (fmt)=>{
        let o = {
            "M+": data.getMonth() + 1, //月份
            "d+": data.getDate(), //日
            "h+": data.getHours(), //小时
            "m+": data.getMinutes(), //分
            "s+": data.getSeconds(), //秒
            "q+": Math.floor((data.getMonth() + 3) / 3), //季度
            "S": data.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)){
            fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o){
            if (new RegExp("(" + k + ")").test(fmt)){
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };
    return cal(parrent);
}

export function device(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isAndroid){
        return 'android';
    } else if(isiOS) {
        return 'ios';
    }
    return null;
}