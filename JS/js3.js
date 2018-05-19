function kiemtra() {
    var loi = true;
    hoten = document.getElementById("name");
    ht = hoten.value;
    if (ht == "") {
        document.getElementById("errname").innerHTML = "Họ tên không được để trống ";
        hoten.style.backgroundColor = "yellow";
        loi = (loi && false);
    }
    else {
        document.getElementById("errname").innerHTML = "";
        hoten.style.backgroundColor = "Green"
    }
    ////email
    //email = document.getElementById("gmail");
    //g = email.value;
    //var gt = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //if (!gt.test(g)) {
    //    document.getElementById("errmail").innerHTML = "Email không được để trống hoặc bạn đã nhập sai email";
    //    email.style.backgroundColor = "yellow";
    //    loi = (loi && false);
    //}
    //else {
    //    document.getElementById("errmail").innerHTML = "";
    //    email.style.backgroundColor = "Green"
    //}

    //sdt
    sodt = document.getElementById("sdt");
    dt = sodt.value;
    var khonghople = /^[0-9-+]+$/;
    if (!khonghople.test(dt)) {
        document.getElementById("errsdt").innerHTML = "Số điện thoại không được để trống hoặc số điện này có chứa một số ký tự không phù hợp";
        sodt.style.backgroundColor = "yellow";
        loi = (loi && false);
    }

    else {
        document.getElementById("errsdt").innerHTML = "";
        sodt.style.backgroundColor = "Green"
    }
    //tinh
    tinhtp = document.getElementById("tinh");
    tt = tinhtp.value;
    if (tt == "") {
        document.getElementById("errtinh").innerHTML = "Vui lòng chọn tỉnh thành phố để xác định vị trí của bạn";
        tinhtp.style.backgroundColor = "yellow";
        loi = (loi && false);

    }
    else {
        document.getElementById("errtinh").innerHTML = "";
        tinhtp.style.backgroundColor = "Green"
    }
    //duong
    duongdc = document.getElementById("duong");
    dg = duongdc.value;
    if (dg == "") {
        document.getElementById("errduong").innerHTML = "Đường không được để trống không được để trống ";
        duongdc.style.backgroundColor = "yellow";
        loi = (loi && false);
    }
    else {
        document.getElementById("errduong").innerHTML = "";
        duongdc.style.backgroundColor = "Green"
    }
    //diachi
    d_chi = document.getElementById("diachi");
    dc = d_chi.value;
    if (dc == "") {
        document.getElementById("errdiachi").innerHTML = "Địa chỉ không được để trống không được để trống ";
        d_chi.style.backgroundColor = "yellow";
        loi = (loi && false);
    }
    else {
        document.getElementById("errdiachi").innerHTML = "";
        d_chi.style.backgroundColor = "Green"
    }
    //kiểm tra magiamgia
    gg = document.getElementById("magg");
    ma = gg.value
    var khonghp = /^[0-9-+]+$ /;
    if (!khonghople.test(ma)) {
        document.getElementById("errgg").innerHTML = "Mã giảm giá này không hợp lệ";
        gg.style.backgroundColor = "yellow";
        loi = (loi && false);
    } else {
        document.getElementById("errgg").innerHTML = "";
        gg.style.backgroundColor = "Green"
    }
    if (loi == true) {
        document.getElementById("myform").submit();
        alert("Bạn được giảm giá 5% trên tổng số tiền");
    }

}