function timkiem() {
    //location.reload();
    hienthi = document.getElementsByClassName("sanpham1");
    var tim = document.getElementById("search").value;
    var text = document.getElementsByClassName("thongtin").innerHTML;
    var a = ['iphone', 'dienthoai', 'huawei', 'laptop', 'phụ kiện', 'may tinh bang', 'ip', 'hua', 'điện thoại', 'tablet'];
    var b = ['sac du phong', 'sac', 'sạc dự phòng'];
    var c = ['gaytusuong', 'gay tu suong', 'gay', 'gậy tự sướng']
    var d = ['tainghe', 'tai nghe'];
    var e = ['op lung', 'oplung', 'ốp lưng'];
    //var a = 'iphone';
    //var b = 'dienthoai';
    //var c = 'huawei';
    //var d = 'latop';
    //var e = 'phụ kiện';
    //var f = 'may tinh bang';
    if ((tim == a[2]) || (tim == a[7])) {

        document.getElementById("iphone").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("phukien").style.display = 'none';

    }
    if ((tim == a[0]) || (tim == a[6])) {
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("phukien").style.display = 'none';
        document.getElementById("huawei").style.display = 'none';

    }
    if ((tim == a[1]) || (tim == a[8])) {
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("phukien").style.display = 'none';


    }
    if (tim == a[3]) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("phukien").style.display = 'none';
    }
    if (tim == a[4]) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
    }
    if ((tim == a[5]) || (tim == a[9])) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("phukien").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
    }
    if ((tim == b[0]) || (tim == b[1]) || (tim == b[2])) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("tainghe").style.display = 'none';
        document.getElementById("oplung").style.display = 'none';
        document.getElementById("gaytusuong").style.display = 'none';
    }
    if ((tim == c[0]) || (tim == c[1]) || (tim == c[2]) || (tim == c[3])) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("tainghe").style.display = 'none';
        document.getElementById("oplung").style.display = 'none';
        document.getElementById("sacduphong").style.display = 'none';
    }
    if ((tim == d[0]) || (tim == d[1])) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("sacduphong").style.display = 'none';
        document.getElementById("oplung").style.display = 'none';
        document.getElementById("gaytusuong").style.display = 'none';
    }
    if ((tim == e[0]) || (tim == e[1]) || (tim == e[2])) {
        document.getElementById("dienthoai").style.display = 'none';
        document.getElementById("maytinhbang").style.display = 'none';
        document.getElementById("laptop").style.display = 'none';
        document.getElementById("tainghe").style.display = 'none';
        document.getElementById("sacduphong").style.display = 'none';
        document.getElementById("gaytusuong").style.display = 'none';
    }
}