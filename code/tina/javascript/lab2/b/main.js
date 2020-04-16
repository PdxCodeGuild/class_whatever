let tableunit = {
    'ft': .3084,
    'mi': 1609.34,
    'km':1000,
    'm': 1,
    'yd':.9144,
  }

function lengthConverter() {
    let distance = document.getElementById('distance').value;
    let unit = document.getElementById('unit').value;
    let conversion = document.getElementById('conversion').value;
    let conmath = (tableunit[unit] * distance / tableunit[conversion]);

    document.getElementById("results").value = conmath 

    
    
}

