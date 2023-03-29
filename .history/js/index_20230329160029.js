let daySo = [];
document.getElementById('btnThemSo').onclick = function () {
    var so = +document.querySelector('#so').value;
    daySo.push(so);
    document.querySelector('#daySo').innerHTML = daySo;
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
document.querySelector('#btnTong').onclick = function () {
    document.querySelector('#ket-qua-b1').innerHTML = tongSoDuong();
}
// Bài 2
function demSoDuong(mangSo) {
    var soDuong = 0;
    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            soDuong += 1;
        }
    }
    return soDuong
}
document.querySelector('#btnDem').onclick = function () {
    document.querySelector('#ket-qua-b2').innerHTML = demSoDuong(daySo);
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
document.querySelector('#btnMin').onclick = function () {
    document.querySelector('#ket-qua-b3').innerHTML = soNhoNhat();
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
        if (mangSoDuong[x] < soDuongMin) {
            soDuongMin = mangSoDuong[x];
        }
    }
    return soDuongMin
}
document.querySelector('#btnMinDuong').onclick = function () {
    document.querySelector('#ket-qua-b4').innerHTML = soDuongMin();
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
document.querySelector('#btnSoChan').onclick = function () {
    document.querySelector('#ket-qua-b5').innerHTML = soChanLast()
};
// Bài 6
function swap(viTri1, viTri2, outputB8) {
    var a = daySo[viTri1];
    var b = daySo[viTri2];
    if (viTri1 >= daySo.length || viTri2 >= daySo.length) {
        document.querySelector(outputB8).innerHTML = `Vui lòng chỉ nhập vị trí cần đổi trong giới hạn của mảng`;
    }
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
document.querySelector('#btnSwap').onclick = function () {
    swap(+document.querySelector('#vi-tri-1').value, +document.querySelector('#vi-tri-2').value, "#ket-qua-b8")
}
// Bài 7
function sapXep() {
    for (var i = 1; i < daySo.length; i++) {
        for (var n = 0; n < i; n++) {
            if (daySo[n] > daySo[i]) {
                var a = daySo[n];
                daySo[n] = daySo[i];
                daySo[i] = a;
            }
        }
    }
    return daySo
}
document.querySelector('#btnSapXep').onclick = function () {
    document.querySelector('#ket-qua-b7').innerHTML = sapXep()
}
// Bài 8
function timSoNguyenTo(x) {
    var soNT = true;
    if (daySo[x] <= 1) {
        soNT = false;
        return soNT;
    } else
        for (i = 2; i < daySo[x]; i++) {
            if (daySo[x] % i === 0) {
                soNT = false;
                break
            }
        }
    return soNT;
}
document.querySelector('#btnTimSo').onclick = function () {
    var indexSoNT = 0;
    var isNguyenTo = false;
    for (n = 0; n < daySo.length; n++) {
        if (timSoNguyenTo(n)) {
            indexSoNT = n;
            isNguyenTo = true;
            break;
        }
    }
    if (isNguyenTo = true) {
        document.querySelector('#ket-qua-b8').innerHTML = daySo[indexSoNT];
    } else {
        document.querySelector('#ket-qua-b8').innerHTML = -1;
    }
}
// Bài 9
let daySoThuc = [];
document.querySelector('#btnThemSoThuc').onclick = function () {
    var soThuc = +document.querySelector('#soThuc').value;
    daySoThuc.push(soThuc);
    document.querySelector('#daySoThuc').innerHTML = daySoThuc;
}
document.querySelector('#btnTimSoNguyen').onclick = function () {
    var demSoNguyen = 0;
    for (i = 0; i < daySoThuc.length; i++) {
        if (Number.isInteger(daySoThuc[i])) {
            demSoNguyen += 1;
        }
    }
    document.querySelector('#ket-qua-b9').innerHTML = demSoNguyen;
}
// Bài 10

function demSoAm(mangSo) {
    var soAm = 0;
    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] < 0) {
            soAm += 1;
        }
    }
    return soAm;
}
document.querySelector('#btnSoSanh').onclick = function () {
    if (demSoDuong(daySo) > demSoDuong(daySoThuc)) {
        document.querySelector('#ket-qua-b10-1').innerHTML = `Dãy số 1 có nhiều số dương hơn `
    } else if (demSoDuong(daySo) === demSoDuong(daySoThuc)) {
        document.querySelector('#ket-qua-b10-1').innerHTML = `2 dãy số có cùng số lượng số dương `
    } else {
        document.querySelector('#ket-qua-b10-1').innerHTML = `Dãy số 2 sau có nhiều số dương hơn `
    }
    if (demSoAm(daySo) > demSoAm(daySoThuc)) {
        document.querySelector('#ket-qua-b10-2').innerHTML = `Dãy số 1 có nhiều số âm hơn `
    } else if (demSoAm(daySo) === demSoAm(daySoThuc)) {
        document.querySelector('#ket-qua-b10-2').innerHTML = `2 dãy số có cùng số lượng số âm `
    } else {
        document.querySelector('#ket-qua-b10-2').innerHTML = `Dãy số 2 sau có nhiều số âm hơn `
    }
}