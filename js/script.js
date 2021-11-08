
const graph = document.getElementsByClassName("ccc-widget ccc-chart")
const select = document.querySelector("select")







const change =()=> {
    if (select.value == "Btc") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=BTC&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    }
    else if (select.value == "Eth") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        var cccTheme = { "Followers": { "color": "#123" } };
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=ETH&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    }
    else if (select.value == "Shiba") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=SHIB&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    }
    else if (select.value == "Atom") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=ATOM&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    }
    else if (select.value == "BNB") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=BNB&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    
    }
    else if (select.value == "Doge") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=DOGE&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    
    }
    else if (select.value == "Inch") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=1INCH&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    
    }
    else if (select.value == "One") {
        $(graph).remove()
        baseUrl = "https://widgets.cryptocompare.com/";
        var scripts = document.getElementsByTagName("script");
        var embedder = scripts[scripts.length - 1];
        (function () {
            var appName = encodeURIComponent(window.location.hostname);
            if (appName == "") { appName = "local"; }
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            var theUrl = baseUrl + 'serve/v1/coin/chart?fsym=ONE&tsym=USD';
            s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
            document.getElementById("boxc").appendChild(s);
        })();
    
    }
    else if (select.value == "None") {
       
        $(graph).remove()
    }
}