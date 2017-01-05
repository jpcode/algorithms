//https://codefights.com/arcade/code-arcade/well-of-integration/mJr7vgtN4X4ecL7ZA/description

function getWord( w ){
    var s = '';
    for ( var i = 0; i < w.length; ++i ){
        if ( w[i] >= 'a' && w[i] <= 'z' || w[i] >= 'A' && w[i] <= 'Z' ){
            s += w[i];
        }
    }
    return s;
}

function timedReading(maxLength, text) {
    var it = 0, c = 0;
    var w = text.split(" ");
    for ( var i = 0; i < w.length; i++ ){
        var sw = getWord( w[ i ] );
        if ( sw.length && sw.length <= maxLength) c++;
    }
    return c;
}
