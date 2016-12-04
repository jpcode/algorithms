// Problem statement:
//https://codefights.com/arcade/code-arcade/lab-of-transformations/M97sbwRp3tGy8uAb8

function stolenLunch(note) {
  var i = 0, len = note.length, m = '';
  var abc= 'abcdefghijklmnopqrstuvwxyz';
  for ( ; i < len; ++i ){
      var c = note[ i ];
      if ( c >= '0'&& c <= '9' ){
          m += abc[ parseInt( c ) ];
      }else if ( c >= 'a' && c <= 'z' ){
          m += abc.indexOf(c) <= 9 ? abc.indexOf( c ) : c;
      }else{
          m += c;
      }
  }
    return m;
}

