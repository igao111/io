(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('https://101.igao57.com/', "_self");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('https://102.igao57.com/', "_self");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('https://103.igao57.com/', "_self");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('https://104.igao57.com/', "_self");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('https://www.baidu.com', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
