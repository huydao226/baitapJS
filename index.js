

//Bai 1
document.querySelector('#tinhLuong').onclick = function () {
    var luong1ngay = 100000;
    var soNgay = document.getElementById('soNgay').value;
    console.log(soNgay)
    var luongNhanVien = luong1ngay * soNgay;
    document.getElementById("tienLuong").innerHTML = 'Lương Nhân Viên Là: ' + luongNhanVien
}

// //Bai 2
document.querySelector('#avg').onclick = function () {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;
    var num4 = +document.getElementById('num4').value;
    var num5 = +document.getElementById('num5').value;
    var avg = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById("avgValue").innerHTML = 'Avg: ' + avg
}

//Bai 3
document.querySelector('#chuyenDoi').onclick = function () {
    var rate = 23500;
    var usd = document.getElementById('usd').value;
    var vnd = rate * usd;
    document.getElementById("vnd").innerHTML = 'VND: ' + vnd
}

// //Bai 4
document.querySelector('#gen').onclick = function () {
    var width = +document.getElementById('width').value;  
    var height = +document.getElementById('height').value;
    var cv = (width + height) * 2;
    var dt = width * height;
    document.getElementById("cv").innerHTML = 'Chu Vi: ' + cv
    document.getElementById("dt").innerHTML = 'Diện Tích: ' + dt

}

//Bai 5
document.querySelector('#calc').onclick = function () {
    var so = +document.getElementById('so').value;  
    if(9 < so  && so < 99 && Number.isInteger(so)) {
        var so_hang_dv = so%10;
        var so_hang_chuc = (so - so_hang_dv)/10;
        var tong = + (so_hang_dv + so_hang_chuc)
        document.getElementById("tong").innerHTML = 'Tổng của 2 số: ' + tong
    } else alert("Nhap Sai");

}