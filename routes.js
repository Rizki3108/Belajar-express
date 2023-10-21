// import express
import Express from "express";

// init express router
const router = Express.Router();

router.get('/Biodata/:nama/:tempat_lahir/:Tanggal_lahir/:jk/:agama/:alamat/:telepon/:email/:hobi/:cita_cita/:moto_hidup', (req, res) => {

    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat_lahir;
    var tanggal_lahir = req.params.tanggal_lahir;
    var jk = req.params.jk;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;
    var moto_hidup = req.params.moto_hidup;

    res.send(
        '<h1>Biodata</h1>' + '<br>' +
        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : ' + tempat_lahir + '<br>' +
        'Tanggal Lahir : ' + tanggal_lahir + '<br>' +
        'JK : ' + jk + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat : ' + alamat + '<br>' +
        'Telepom : ' + telepon + '<br>' +
        'Email : ' + email + '<br>' +
        'Hobi : ' + hobi + '<br>' +
        'Cita-cita : ' + cita_cita + '<br>' +
        'Moto Hidup : ' + moto_hidup + '<br>'
        );
});

router.get('/aritmatika', (req, res) => {

    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2
    var kurang = bilangan1 - bilangan2
    var kali = bilangan1 * bilangan2
    var bagi = bilangan1 / bilangan2

    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr>' +

        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + kurang + '<hr>' +

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + kali + '<hr>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + bagi + '<hr>'
    )
})

router.get('/bangun_datar', (req, res) => {

    var sisi = 5;
    var luas = 25;
    var lebar = 30;
    var panjang = 20;
    var alas = 4;
    var tinggi = 8;
    var jari_jari = 14;

    var persegi = sisi * sisi
    var persegi_panjang = panjang * lebar
    var segitiga = 1/2 * alas * tinggi
    var lingkaran = 22/7 * jari_jari * jari_jari

    res.send(
        '<h3>Luas Persegi</h3>' +
        'Sisi : ' + sisi + '<br>' +
        'Rumus = sisi * sisi' + '<br>' +
        'Hasil : ' + persegi + '<hr>' +

        '<h3>Luas Persegi Panjang</h3>' +
        'Panjang : ' + panjang + '<br>' +
        'Lebar : ' + lebar + '<br>' +
        'Rumus = Panjang * Lebar' + '<br>' +
        'Hasil : ' + persegi_panjang + '<hr>' +

        '<h3>Luas Segitiga</h3>' +
        'Alas : ' + alas + '<br>' +
        'Tinggi : ' + tinggi + '<br>' +
        'Rumus = 1/2 * Alas * Tinggi' + '<br>' +
        'Hasil : ' + segitiga + '<hr>' +

        '<h3>Luas Lingkaran</h3>' +
        'Jari-Jari : ' + jari_jari + '<br>' +
        'Rumus = 22/7 * jari-jari * jari-jari' + '<br>' +
        'Hasil : ' + lingkaran + '<hr>'
    )
})

router.get('/biodata2/:nama/:tempat', (req, res) =>{
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;

    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : ' + tempat_lahir
    );
})

router.get('/tes/:nama/:kelas/:pts/:pas' , (req, res) => {

    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas) / 2;

    var Keterangan;
    if(rapot >= 90){
        Keterangan = "Grade A"
    } else if (rapot >= 80){
        Keterangan = "Grade B"
    } else if (rapot >= 70){
        Keterangan = "Grade C"
    } else if (rapot >= 60){
        Keterangan = "Grade D"
    } else if (rapot >= 50){
        Keterangan = "Grade E"
    } else {
        Keterangan = "Belajar sing Rajin!!!"
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + kelas + '<br>' +
        'PTS : ' + pts + '<br>' +
        'PAS : ' + pas + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan : ' + Keterangan 
    )
});

router.get('/bersarang/:nama/:provinsi/:kota', (req, res) => {

    var nama = req.params.nama;
    var provinsi = req.params.provinsi;
    var kota = req.params.kota;

    if (provinsi == "Jawa Barat") {

        if (kota == "Bandung"){
            var ket = "Anda asli orang bandung";
        } else if (kota == "Garut"){
            var ket = "Anda asli orang garut";
        } else if (kota == "Cimahi"){
            var ket = "Anda asli orang Cimahi";
        } else {
            var ket = "Anda bukan orang Jawa Barat"
        }
    } else if (provinsi == "Jawa Tengah") {

        if (kota == "Semarang"){
            var ket = "Anda asli orang Semarang";
        } else if (kota == "Cilacap"){
            var ket = "Anda asli orang Cilacap";
        } else if (kota == "Salatiga"){
            var ket = "Anda asli orang Salatiga";
        } else {
            var ket = "Anda bukan orang Jawa Tengah"
        }

    } else if (provinsi == "Jawa Timur") {

        if (kota == "Surabaya"){
            var ket = "Anda asli orang Surabaya";
        } else if (kota == "Malang"){
            var ket = "Anda asli orang Malang";
        } else if (kota == "Madura"){
            var ket = "Anda asli orang Madura";
        } else {
            var ket = "Anda bukan orang Jawa Tidur"
        }
    } else {
        var ket = "Provinsi yang anda masukan tidak tersedia"
    }

    res.send(
        `Nama : ${nama} <br>` +
        `Provinsi : ${provinsi} <br>` +
        `Kota : ${kota} <br>` +
        `Keterangan : ${ket}` 
    )

})

router.get('/kasir/:nama_pembeli/:tanggal_pembelian/:jenis/:nama_pesanan/:jumlah', (req, res) => {

    var nama_pembeli = req.params.nama_pembeli;
    var tanggal_pembelian = req.params.tanggal_pembelian;
    var jenis = req.params.jenis;
    var nama_pesanan = req.params.nama_pesanan;
    var jumlah = parseInt(req.params.jumlah);

    if (jenis == "makanan"){
        if (nama_pesanan == "seblak"){
            var harga = 25000
        } else if (nama_pesanan == "spageti"){
            var harga = 30000
        } else if (nama_pesanan == "burger"){
            var harga = 35000
        } else {
            var nama_pesanan = "Makanan tidak tersedia"
        }
    } else if (jenis == "minuman"){
        if (nama_pesanan == "air mineral"){
            var harga = 10000
        } else if (nama_pesanan == "lemon tea"){
            var harga = 20000
        } else if (nama_pesanan == "kopi"){
            var harga = 30000
        } else {
            var nama_pesanan = "minuman mu tidak tersedia"
        }
    } else {
        var jenis = "maaf jenis minuman tidak tersedia"
    }
    

    var total = (harga * jumlah);
    if (total > 100000){
        var potongan = (total) * 0.2
    } else {
        var potongan = 0
    }

    var total_pembayaran = (total - potongan);

    res.send(
        "<h3><center>*Waroeng's Enjoy's*</center></h3>" + '<hr>' +
        `Nama Pembeli : ${nama_pembeli} <br>` +
        `Tanggal Pembelian : ${tanggal_pembelian} <br>` +
        `Jenis : ${jenis} <br>` +
        `Nama Pesanan : ${nama_pesanan} <br>` +
        `Harga : ${harga} <br>` +
        `Jumlah : ${jumlah} <br> <hr>` + 
        `Total : ${total} <br>` +
        `Potongan 20% : ${potongan} <br>` +
        `Total Pembayaran : ${total_pembayaran}` + '<hr>' +
        '================================Terima Kasih================================'
    )
})


// export default router
export default router;