
let b=0;
let number = +prompt('Nhap 1 so bat ki');
do {
let a= number%10;
 b = b*10+a;
number= (number-number%10)/10;
} while( number>0);
document.write(b);