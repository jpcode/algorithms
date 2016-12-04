// Problem statement:
// https://codefights.com/arcade/code-arcade/lab-of-transformations/JeDDnToFtitiiWDZn


function sumc( m, i, l ){
    var s = 0;
    for ( var i = 0; i < m.length; i++ ){
        s += l.indexOf( m[ i ] );
    }
    return s;
}

function getX( ci, cm, l ){
    // will be improved...with math.
    for ( var i = 0; i < 26; i++ ){
        if ( ( ci + i ) % 26  == cm ){
            return l[ i ];
        }
    }
}

function cipher26(message) {
  var cypher = message[ 0 ];
  var l = 'abcdefghijklmnopqrstuvwxyz';
  for ( var i = 1; i < message.length; i++ ){
       var cm = l.indexOf( message[ i ] );
       var ci = sumc( cypher, i , l );
       // ( ci + x ) % 26 = cm
       var x = getX( ci, cm, l );
       cypher += x;
  }
    
  return cypher;
}
