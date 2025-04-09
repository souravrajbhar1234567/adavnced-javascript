let globalVar ="accesible everywhere";
console.log("accces to global variables inside the fucntions", globalVar);
function ctreatingNewscope(x){
    console.log("acces to global vars inside the fucntions"., globalVar);

}
ctreatingNewscope("some parameter");
console.log("still available", globalVar);

