(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('http://igao1.com', "_blank");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('http://igao2.com', "_blank");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('http://igao3.com', "_blank");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('http://igao111.com', "_blank");
        }
        document.getElementById("btnEnter5").onclick = function() {
            window.open('http://igao555.com', "_blank");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('http://www.google.com', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
