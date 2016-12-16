//https://codefights.com/arcade/code-arcade/well-of-integration/ZCD7NQnED724bJtjN/solutions
function addBorder(picture) {
  var r = [];
    r.push("*".repeat( picture[0].length + 2 ) );
    for ( var i = 0; i < picture.length; ++i ){
      r.push("*");
      for ( var j = 0; j < picture[0].length; ++j ){
          r[i+1] += picture[i][j];
      }
        r[i+1] += '*';
     }
    r.push("*".repeat( picture[0].length + 2 ) );
    return r;
}