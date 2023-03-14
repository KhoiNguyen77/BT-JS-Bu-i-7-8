let daySo = [];
document.getElementById('btnThemSo').onclick = function () {
    var so = +document.getElementById('so').value;
    daySo.push(so);
    console.log(daySo);
    document.getElementById('daySo').innerHTML = daySo;
}

// Bài 1
function tongSoDuong() {
    output = 0;
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            output = output + daySo[i];
        }
    }
    return output
}
document.getElementById('btnTong').onclick = function () {
    document.getElementById('ket-qua-b1').innerHTML = tongSoDuong();
}
// Bài 2
function demSoDuong() {
    tongSo = 0;
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            tongSo += 1;
        }
    }
    return tongSo
}
document.getElementById('btnDem').onclick = function () {
    document.getElementById('ket-qua-b2').innerHTML = demSoDuong();
}
// Bài 3
function soNhoNhat() {
    soMin = daySo[0];
    for (var i = 1; i < daySo.length; i++) {
        if (daySo[i] < soMin) {
            soMin = daySo[i];
        }
    }
    return soMin;
}
document.getElementById('btnMin').onclick = function () {
    document.getElementById('ket-qua-b3').innerHTML = soNhoNhat();
}
// Bài 4
var mangSoDuong = [];
function soDuongMin() {
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] > 0) {
            mangSoDuong.push(daySo[i]);
        }
    }
    var soDuongMin = mangSoDuong[0];
    for (var x = 0; x < mangSoDuong.length; x++) {
        if (mangSoDuong[i] < soDuongMin) {
            soDuongMin = mangSoDuong[i];
        }
    }
    return soDuongMin
}
document.getElementById('btnMinDuong').onclick = function () {
    document.getElementById('ket-qua-b4').innerHTML = soDuongMin();
}
// Bài 5
function soChanLast() {
    var soChanCuoi = 0;
    for (var i = 0; i < daySo.length; i++) {
        if (daySo[i] % 2 === 0) {
            soChanCuoi = daySo[i];
        }
    }
    if (soChanCuoi != 0) {
        return soChanCuoi;
    }
    else {
        soChanCuoi = -1;
    }
    return soChanCuoi
}
document.getElementById('btnSoChan').onclick = function () {
    document.getElementById('ket-qua-b5').innerHTML = soChanLast()
};
// Bài 6
function swap(viTri1, viTri2) {
    var a = daySo[viTri1];
    var b = daySo[viTri2];
    for (var i = 0; i < daySo.length; i++) {
        if (i === viTri1) {
            daySo[i] = b;
        }
        if (i === viTri2) {
            daySo[i] = a;
        }
    }
    return daySo
}
document.getElementById('btnSwap').onclick = function () {
    document.getElementById('ket-qua-b6').innerHTML = swap(+document.getElementById('vi-tri-1').value, +document.getElementById('vi-tri-2').value)
}