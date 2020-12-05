String.prototype.padding = function(n, c)
{
        var val = this.valueOf();
        if ( Math.abs(n) <= val.length ) {
                return val;
        }
        var m = Math.max((Math.abs(n) - this.length) || 0, 0);
        var pad = Array(m + 1).join(String(c || ' ').charAt(0));
        return (n < 0) ? pad + val : val + pad;
};

let tempat = {
    'Toko':0,
  	'Tempat A':1,
  	'Tempat B':2,
  	'Tempat C':3,
  	'Tempat D':4,
	}
let listJarak = [2,5,1.5,2.5]
let jarakBensin = 2.5
let hargaBensin = 7000

function hitungJarak(asal,tujuan){
  rute=[tempat[asal],tempat[tujuan]]
  rute.sort()
  
  let sumJarak=0
  for (dari=rute[0];dari<rute[1];dari++){
    sumJarak=sumJarak+listJarak[dari]
    }
  return sumJarak
}

function perjalananSales(...perjalanan){
  perjalanan.push('Toko')
  let totalJarak=0
  let totalBensin=0
  let totalHarga=0
  
  for(trip=0;trip<perjalanan.length-1;trip++){
    myLog=''
    
    jarak=hitungJarak(perjalanan[trip],perjalanan[trip+1])
    bensin=jarak/jarakBensin
    harga=bensin*hargaBensin
    
    myLog+=perjalanan[trip].padding(10) + ' - ' + perjalanan[trip+1].padding(10)+ ' = '
    myLog+=jarak + ' KM | '
    myLog+='RP ' + harga + ' | '
    myLog+=bensin + 'Liter'
    
    console.log(myLog)
    
    totalJarak+=jarak
    totalBensin+=bensin
    totalHarga+=harga
  }
  
  console.log('Total Jarak'.padding(15)+'= '+totalJarak+' KM')
  console.log('Total Harga'.padding(15)+'= Rp '+ totalHarga)
  console.log('Total Bensin'.padding(15)+ '= '+totalBensin+' Liter ')

}

perjalananSales('Toko', 'Tempat A', 'Tempat D', 'Tempat C')
