// Problem statement:
//https://codefights.com/arcade/code-arcade/lab-of-transformations/dB9drnfWzpiWznESA
function decipher(cipher) {
   var min = 97, max = 122;
   var r = '', result = '';
    for ( var i = 0; i < cipher.length; ++i ){
        r += cipher[ i ];
        var n = ~~r;
        if ( n >= min && n <= max ){
           result +=  String.fromCharCode( n );
           r = '';
        }
    }
    return result;
}
