//https://codefights.com/challenge/WbDRnJGc7TYLdtkcp
function getLexOrder( key ){
    var ks = key.split('').sort().join('');
    var r = '';
    var o = {};
    for ( var i = 0; i < key.length; ++i ){
    	  var ki = key[ i ];
    	  if ( !o.hasOwnProperty( ki ) ){
    	  			o[ki] = 1;
    	  }else o[ ki ]++;
    	  r += o[ki] + ks.indexOf( ki );
    }
    return r;

}

function init( l ){
    var r = [];
    for ( var i = 0; i < l; i++  ) r.push('');
    return r;
}
function splitByLength( m, l ){
    var h = ~~( m.length / l );
    var r = init( h );
    var x = 0, i = 0;
    for ( ; i < m.length; ++i ){
            if ( x == h ) x = 0;
            r[x++] += m[i];
        }
    return r;
}

function transform( w, lex ){
    var r = w.split(''), x = '';
    for ( var i = 0; i < lex.length; ++i ){
        var idx = ~~lex[ i ] - 1;
        var c = r[idx];
        x += c;
    }
    return x;
}

function getOrder( W, lex ){
    var r = '';
    for ( var i = 0; i < W.length; i++ )
        r += transform( W[i], lex );
    return r;
}

function Ubachi(message, keyword) {
    var lexorder = getLexOrder( keyword );
    var rword = splitByLength( message, lexorder.length );
    var nword = getOrder( rword, lexorder );
    //repeat process
    rword = splitByLength( nword, lexorder.length )
    nword = getOrder( rword, lexorder );
    
    return nword;
}
