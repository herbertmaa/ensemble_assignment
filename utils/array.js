const flattenArray = (arr) => {
 const obj = {};

 for(let i = 0; i < arr.length; ++i){
   obj[arr[i].id] = arr[i];
 }

 return obj;
}


module.exports = {
 flattenArray
};