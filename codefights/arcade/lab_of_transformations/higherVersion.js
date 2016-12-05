// Problem statement:
//https://codefights.com/arcade/code-arcade/lab-of-transformations/vsKRjYKv4SCjzJc8r
function higherVersion(ver1, ver2) {
    var v1 = ver1.split('.');
    var v2 = ver2.split('.');
    for ( var i = 0 ; i < v1.length; ++i ){
        var c1 = parseInt( v1[ i ] );
        var c2 = parseInt( v2[ i ] );
        if ( c1 == c2 ) continue;
        if ( c1 > c2 ) return true;
        return false;
    }
    return false;
}
