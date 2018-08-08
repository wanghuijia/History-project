import jsonp from "@/js/jsonp"
import { commonParams, jsonpParams } from "@/js/config"
export function getRecommdDetail(id) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg";
    const cof = Object.assign(commonParams, {
        albummid: id
    });
    return jsonp(url, cof, jsonpParams)
}
export function getRecomList() {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
    const cof = Object.assign(commonParams, {
        tpl: 3,
        page: "detail",
        date: "2018-07-19",
        topid: 4,
        type: "top",
        song_begin: 0,
        song_num: 30
    });

    return jsonp(url, cof, jsonpParams)
}