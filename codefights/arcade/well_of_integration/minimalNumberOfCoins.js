//https://codefights.com/arcade/code-arcade/well-of-integration/sGwCfM5FzX7LhLcdk
function minimalNumberOfCoins(coins, price) {
    var r = 0;
    for ( var i = coins.length - 1 ; i >=0; i-- ){
        var c = coins[ i ];
        var len = ~~(price/c);
        price -= len*c;
        r += len;
        if ( price == 0 ) return r;
    }
}
