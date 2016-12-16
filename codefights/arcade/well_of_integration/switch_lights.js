//https://codefights.com/arcade/code-arcade/well-of-integration/x3ix7CY93z2bwKDtG
function switchLights(a) {
  for ( var i = 0; i < a.length; ++i ){
      if ( a[i]){
        for ( var j = 0; j < i; ++j ){
           a[j] = a[j] ? 0:1;
        }
          a[i] = 0;
      }
      
  }
    return a;
}
