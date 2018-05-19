function rePlay1() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(TaoDaySoNgauNhien, 50 * i);
    }
}
function TaoDaySoNgauNhien() {

    document.getElementsByName("ketqua")[0].value = "";
    max = parseInt(document.getElementsByName("giatri")[0].value);
    var b = new Array(max);
    var c = '';
    var m = '';
    var n = '';
    var temp = '';
    for (var i = 0; i < b.length; i++) {
        b[i] = i + 1;
    }
    for (var j = 0; j < b.length; j++) {
        m = parseInt(Math.random() * (max));
        n = parseInt(Math.random() * (max));
        temp = b[m];
        b[m] = b[n];
        b[n] = temp;
    }
    for (var k = 0; k < b.length; k++) {
        if (k == b.length - 1) {
            c += b[k];
        }
        else c += b[k] + ',';
    }


    document.getElementsByName("ketqua")[0].value = c;
}