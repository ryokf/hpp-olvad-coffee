export function templateBahan(harga, jumlahPerHarga, jumlahPerPorsi){
    const jumlah_porsi = Math.floor(jumlahPerHarga / jumlahPerPorsi)
    const harga_satuan = Math.ceil(harga / jumlah_porsi)

    return harga_satuan
}

export function templateProduk(...bahan){
    console.log('Bahan yang digunakan:', bahan);
}