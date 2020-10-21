
(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0;i<names.length;i++) {
  var f= names[i].charAt(0);
  f=f.toLowerCase();
  
  if (f=='j') {
    byespeaker.speak(names[i]);
  } 
  else {
    hellospeaker.speak(names[i]);
  }
 }
}
)(window);
