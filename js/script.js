
 let graph = document.getElementsByClassName("ccc-widget ccc-chart")

function change() {
    if (document.getElementById('Cryselect').value == "Btc") {
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
    else if (document.getElementById('Cryselect').value == "Eth") {
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
    else if (document.getElementById('Cryselect').value == "Shiba") {
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
    else if (document.getElementById('Cryselect').value == "Atom") {
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
    else if (document.getElementById('Cryselect').value == "BNB") {
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
    else if (document.getElementById('Cryselect').value == "Doge") {
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
    else if (document.getElementById('Cryselect').value == "Inch") {
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
    else if (document.getElementById('Cryselect').value == "One") {
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
    else if (document.getElementById('Cryselect').value == "None") {
       
        $(graph).remove()
    }
}