import { search } from "@groceristar/groceristar-fetch";


// this function will
function getFormattedAttributes( attribute ) {
  return search.getFormattedAttributes(attribute);
}

function getPlaceholder( attribute ){
  return search.getPlaceholder(attribute);
}

function getFormattedIngredients(){
  return search.getFormattedIngredients();
}

function toOpt(array){
  return search.toOpt(array);
}

function toOptAntD(array) {
  return search.toOptAntD(array);
}


export {

  getPlaceholder,

  toOpt, toOptAntD,
  getFormattedAttributes,
  getFormattedIngredients

}
