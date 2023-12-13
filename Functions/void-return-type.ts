/*
Preferrred to use type annotations for functions, even if they don't
return anything.
If there is no return valye we treat it as a void so that would be
the type annotation.
*/
function makeFruitSalad(fruit1:string, fruit2:string):void{
    let salad=fruit1+fruit2+fruit2+fruit1+fruit2+fruit1+fruit1;
    console.log(salad);
  }

  makeFruitSalad('banana','pineapple');
