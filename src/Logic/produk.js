import { templateBahan } from "./template";

export function template(bahan, markup = 30){
    const hpp = Object.values(bahan).reduce((total, harga) => total + harga, 0);
    const hpp_pembulatan = Math.ceil(hpp / 1000) * 1000; // Pembulatan ke ribuan terdekat
    const harga_jual = hpp_pembulatan + (markup / 100) * hpp_pembulatan; // 20% markup
    const harga_jual_pembulatan = Math.ceil(harga_jual / 1000) * 1000; // Pembulatan ke ribuan terdekat

    return {
        bahan,
        hpp_pembulatan,
        hpp,
        harga_jual,
        harga_jual_pembulatan
    }
}

export function americano() {
    const es_batu = templateBahan(10000, 10000, 150);
    const kopi_beana = templateBahan(60000, 250, 8);
    const packaging = templateBahan(35000, 25, 1);
    const bahan = {
        "es batu": es_batu,
        "kopi Beana": kopi_beana,
        "packaging": packaging
    };
    return template(bahan, 40);
}

export function americanoHot() {
    const kopi_beana = templateBahan(60000, 250, 8);
    const packaging = templateBahan(25000, 50, 1);
    const bahan = {
        "kopi Beana": kopi_beana,
        "packaging": packaging
    };
    return template(bahan, 40);
}

export function cappucino(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_kental_manis = templateBahan(20000, 545, 10);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const bubuk_kayu_manis = templateBahan(15000, 50, 0.5);

    const bahan = {
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Kental Manis": susu_kental_manis,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Bubuk Kayu Manis": bubuk_kayu_manis
    };
    return template(bahan, 20);
}

export function cappucinoHot(){
    const packaging = templateBahan(25000, 50, 1);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_kental_manis = templateBahan(20000, 545, 10);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const bubuk_kayu_manis = templateBahan(15000, 50, 0.5);

    const bahan = {
        "packaging": packaging,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Kental Manis": susu_kental_manis,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Bubuk Kayu Manis": bubuk_kayu_manis
    };
    return template(bahan, 20);
}

export function moccacino(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_kental_manis = templateBahan(20000, 545, 10);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const bubuk_cokelat = templateBahan(30000, 80, 2);

    const bahan = {
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Kental Manis": susu_kental_manis,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Bubuk Cokelat": bubuk_cokelat
    };
    return template(bahan, 20);
}

export function ButterscotchSeaSaltLatte(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const sirupButterscotch = templateBahan(65000, 500, 20);
    const seaSalt = templateBahan(26000, 250, 0.5);

    
    return template({
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Sirup Butterscotch": sirupButterscotch,
        "Sea Salt": seaSalt
    }, 20);
}

export function saltedCaramelLatte(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const sirupCaramel = templateBahan(65000, 500, 20);
    const seaSalt = templateBahan(26000, 250, 0.5);

    
    return template({
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Sirup Caramel": sirupCaramel,
        "Sea Salt": seaSalt
    }, 20);
}

export function cookiesAndCreamLatte(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const sirupVanilla = templateBahan(65000, 500, 20);
    const seaSalt = templateBahan(26000, 250, 0.5);

    
    return template({
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Sirup Vanilla": sirupVanilla,
        "Sea Salt": seaSalt
    }, 20);
}

export function palmSugarLatte(){
    const packaging = templateBahan(35000, 25, 1);
    const es_batu = templateBahan(10000, 10000, 150);
    const nescafe = templateBahan(26000, 45, 3);
    const susu_uht = templateBahan(19000, 900, 70);
    const susu_foaming = templateBahan(21000, 1000, 30);
    const susu_evaporasi = templateBahan(20000, 405, 30);
    const krimer = templateBahan(33000, 500, 8);
    const sirupGulaAren = templateBahan(45000, 500, 20);
    const seaSalt = templateBahan(26000, 250, 0.5);

    
    return template({
        "packaging": packaging,
        "es batu": es_batu,
        "nescafe": nescafe,
        "susu UHT": susu_uht,
        "susu Foaming": susu_foaming,
        "susu Evaporasi": susu_evaporasi,
        "Krimer": krimer,
        "Sirup Gula Aren": sirupGulaAren,
        "Sea Salt": seaSalt
    });
}

export function tubrukRobusta(){
    const kopi_gajah = templateBahan(20000, 138,12)
    const packaging = templateBahan(25000, 50, 1);
    const gula = templateBahan(20000, 1000, 20);

    return template({
        "Kopi Gajah": kopi_gajah,
        "packaging": packaging,
        "gula": gula
    });
}

export function v60Robusta(){
    const kopi_beana = templateBahan(60000, 250,12)
    const packaging = templateBahan(25000, 50, 1);
    const filter = templateBahan(30000, 100, 1);

    return template({
        "Kopi Beana": kopi_beana,
        "packaging": packaging,
        "filter": filter
    });
}

export function vietnamDrip(){
    const kopi_beana = templateBahan(60000, 250,12)
    const packaging = templateBahan(25000, 50, 1);
    const susu_kental_manis = templateBahan(20000, 545, 30);

    return template({
        "Kopi Beana": kopi_beana,
        "packaging": packaging,
        "Susu Kental Manis": susu_kental_manis
    });
}