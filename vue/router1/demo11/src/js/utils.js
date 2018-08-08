class Utils {
    format(opt) {
        let querystring = "";
        for (let key in opt) {
            let val = opt[key] !== undefined ? opt[key] : "";
            querystring += `&${key}=${encodeURI(val)}`
        }
        return querystring ? querystring.substring(1) : ''

    }
}
const utils = new Utils();
export default utils;