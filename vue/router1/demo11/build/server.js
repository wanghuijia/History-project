module.exports.getHotPerform = function(res, axios) {
    const url = "https://c.y.qq.com/yanchu/cgi-bin/yanchu/mb_api/jsondata.fcg?g_tk=5381&sCmd=week_hot&IDS=221&format=2"
        // const config = {
        //     g_tk: 5381,
        //     uin: 0,
        //     format: 'json',
        //     inCharset: 'utf-8',
        //     outCharset: 'utf-8',
        //     notice: 0,
        //     platform: 'h5',
        //     needNewCode: 1,
        //     _: Math.round(new Date() / 1000)
        // };
    axios.get(url, {
        headers: {
            referer: "https://p.y.qq.com",
            host: "p.y.qq.com"
        },
        params: {
            g_tk: 5381,
            sCmd: "week_hot",
            IDS: 221,
            format: 2
        }

    }).then(result => {

        res.json(result.data)
    }).catch(error => {
        console.log(error)
    });
}


module.exports.getCarouselList = function(res, axios) {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const config = {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        _: Math.round(new Date() / 1000)
    };
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com',
            host: 'y.qq.com'
        },
        params: config
    }).then(result => {
        res.json(result.data.data)
    })
}