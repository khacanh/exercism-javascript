module.exports = function(str) {
  var obj = {};
  obj.str = str;

  obj.matches = function(arr) {
    function getArrayArgument(arg, args) {
      var result = [];
      if ((typeof arg) == 'string') {
        result = [arg];
        for(var i = 1, len = args.length; i < len; i++) {
          result.push(args[i]);
        }
      } else {
        result = arg;
      }
      return result;
    }

    function isAnagram(strA, strB) {
      if (strA === strB) {
        return false;
      } else {
        return strA.split('').sort().join() === strB.split('').sort().join();
      }
    }

    arr = getArrayArgument(arr, arguments);

    return arr.filter(function(ele) {
      return isAnagram(str.toLowerCase(), ele.toLowerCase());
    });
  };

  return obj;
}

