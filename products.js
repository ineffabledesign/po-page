// ===== EDIT DI SINI: daftar produk (dipakai index.html DAN halaman admin; foto di folder images/) =====
const PRODUCTS=[
  {id:"p1",name:"Set A (7 pcs)",desc:"Star Dust Collector.",price:25000,img:"images/p1.jpg"},
  {id:"p2",name:"Set B (6 pcs)",desc:"Love Comes Then Dies.",price:25000,img:"images/p2.jpg"},
  {id:"p3",name:"Face Art 1",desc:"Deskripsi singkat.",price:15000,img:"images/p3.jpg"},
  {id:"p4",name:"Face Art 2",desc:"Deskripsi singkat.",price:15000,img:"images/p4.jpg"},
  {id:"p5",name:"Face Art 3",desc:"Deskripsi singkat.",price:15000,img:"images/p5.jpg"}
];
// ======================================================================

// ===== JADWAL PO: isi format 2026-11-10T20:00:00+07:00 (kosongkan "" kalau belum ditentukan) =====
const PO={buka:"",tutup:""};
// ===== TEMPLATE PESAN DM (dipakai tombol "Salin pesan" di admin). {nama} dan {id} otomatis keganti =====
const TEMPLATES={
  pending:"Hai kak {nama}! Order #{id} sudah kami terima ya. Pembayarannya lagi kami cek dulu. 💙",
  dp_masuk:"Hai kak {nama}! Pembayaran order #{id} sudah masuk ya. Terima kasih! 💙",
  confirmed:"Hai kak {nama}! Order #{id} sudah dikonfirmasi ya. Mohon ditunggu kabar selanjutnya. 💙",
  cek_shopee:"Hai kak {nama}! Order #{id} sudah siap. Silakan cek Shopee untuk pelunasan ya. Terima kasih! 💙",
  done:"Hai kak {nama}! Order #{id} sudah selesai. Terima kasih banyak sudah order! 💙"
};
