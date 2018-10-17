export function fetch(a,b) {
	console.log(a+b);
}
export function deleteCookie(name) {
	var date = new Date();
	date.setTime(date.getTime() - 100000000);
	document.cookie = name + "=v;expires=" + date.toGMTString();
}
export function formatDate (tdate, fmt) {
	//console.log(90909090)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (tdate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': tdate.getMonth() + 1,
        'd+': tdate.getDate(),
        'h+': tdate.getHours(),
        'm+': tdate.getMinutes(),
        's+': tdate.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};