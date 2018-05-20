function rePlay() {
    for (var i = 1; i <= 300; i++) {
        setTimeout(TaoSoNgauNhien, 50 * i);
    }
}
function TaoSoNgauNhien() {
    max = parseInt(document.getElementsByName("giatri")[0].value);
    a = parseInt(Math.random() * (max) + 1);
    document.getElementsByName("kq")[0].value = a;
}