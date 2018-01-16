var countLetters = function(input){
 var output = {};
 // uncomment if you don't want to count the position of the spaces
 // input = input.join(" ");
 for (var i = 0; i < input.length; i++){
   if(output[input.charAt(i)]){
     output[input.charAt(i)].push(i) ;
   }
   else {
     output[input.charAt(i)] = [(i)];
   }
   // uncomment if you want to not show the space key
   // delete output[" "];
 }
 return output;
};

console.log(countLetters("lighthouse in the house"));