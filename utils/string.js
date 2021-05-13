const removeSpaces = (str) => {

 if(!str) return "";
 return str.replace(/\s+/g, '');
}

module.exports = {
 removeSpaces
};