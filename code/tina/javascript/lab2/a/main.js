let unit = {
    'ft': '.3084',
    'mi': '1609.34',
    'km':'1000',
    'm': '1',
    'yd':'.9144',
  }
  
  let message1 = "Enter distance as a number: > "
  let message2 = "starting uint(ft, mi, km, m, yd): > "
  let message3 = "conversion uint(ft, mi, km, m, yd): > "
  
  let unitstart = prompt(message2)
  let number_input = prompt(message1);
  let conunit = prompt(message3);
  
  function convertToMeters(unit, number_input){
  Object.keys(unit).forEach(function eachKey(key) { 
      if (key === unitstart){
      return meters = (unit[key] * number_input)
      }
    })
  };
  
  convertToMeters(unit, number_input)
  console.log(meters)
  
  function convertToSelectedUnit(unit, conunit){
    Object.keys(unit).forEach(function eachKey(key) { 
        if (key === conunit){
        return conversion = ( meters / unit[key])
        }
      })
    };
  
  convertToSelectedUnit(unit, conunit)
  console.log(conversion)