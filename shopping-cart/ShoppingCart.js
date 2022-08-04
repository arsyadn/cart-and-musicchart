const arrData = [];
class Cart{
    tambahProduk(kodeProduk, kuantitas){
        let item = arrData.find((data) => data.kodeProduk === kodeProduk);
        if(!item){
            let dataObj = {};
            dataObj.kodeProduk = kodeProduk;
            dataObj.kuantitas = kuantitas;
            arrData.push(dataObj);
        }
        else{
            return item.kuantitas += kuantitas;
        }
    }
    hapusProduk(kodeProduk){
        let filter = arrData.find((data) => data.kodeProduk === kodeProduk);
        if(filter){
            const item = arrData.findIndex((data) => data.kodeProduk === kodeProduk);
            let result = arrData.splice(item, 1);
            return result;
        }
    }
    tampilkanCart(){
        console.log(arrData);
    }
}
const keranjang = new Cart;
keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();