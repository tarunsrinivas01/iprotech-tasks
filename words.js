function isString(word) {
    for (var i = 0; i < word.length; i++) {
      var charcode = word.charCodeAt(i);
      if (
        !(charcode >= 65 && charcode <= 90) && 
        !(charcode >= 97 && charcode <= 122) 
      ) {
        return false;
      }
    
    return true;
  }
}
  
  function isNumeric(word) {
    for (var i = 0; i < word.length; i++) {
      var charcode = word.charCodeAt(i);
      if (!(charcode >= 48 && charcode <= 57)) { 
        return false;
      }
    }
    return true;
  }
  
  function isAlphanumeric(word) {
    for (var i = 0; i < word.length; i++) {
      var charcode = word.charCodeAt(i);
      if (
        !(charcode >= 65 && charcode <= 90) && 
        !(charcode >= 97 && charcode <= 122) &&
        !(charcode >= 48 && charcode <= 57) 
      ) {
        return false;
      }
    }
    return true;
  }
  
  function countWordTypes(sentence) {
    var words = sentence.split(" ");
    var stringCount = 0;
    var numericCount = 0;
    var alphanumericCount = 0;
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      
      if (isString(word)) {
        stringCount++;
      } else if (isNumeric(word)) {
        numericCount++;
      } else if (isAlphanumeric(word)) {
        alphanumericCount++;
      }
    }
  
    return {
      stringCount: stringCount,
      numericCount: numericCount,
      alphanumericCount: alphanumericCount
    };
  }
  
  // Usage example
  var sentence = "876 records are there for 3A block";
  var wordTypes = countWordTypes(sentence);
  
  console.log("String Count:", wordTypes.stringCount);
  console.log("Numeric Count:", wordTypes.numericCount);
  console.log("Alphanumeric Count:", wordTypes.alphanumericCount);
