const splitObjectIntoArrays = (obj, numElements) => {

 let arrayOfArrays = [];
 let numKeys = Object.keys(obj).length;

 if(numKeys === 0) return(arrayOfArrays);

 for (let i=0; i<numKeys; i +=numElements ) {
  arrayOfArrays.push(obj.slice(i,i+numElements));
 }

 return arrayOfArrays;
}


module.exports = {
 splitObjectIntoArrays
};