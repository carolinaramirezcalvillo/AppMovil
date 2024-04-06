class Rectangulo
{
    constructor(alto, ancho)
    {
        this.alto=alto;
        this.ancho=ancho;
    }
    
    calculararea()
    {
       return  this.ancho*this.alto; 
    }
}


function saludar()
{
    alert("Buenos Dias");
}

function area()
{
    var ancho =document.getElementById("ancho").value;
    var alto =document.getElementById("alto").value;
    let rectangulo1 = new Rectangulo(alto,ancho);
    alert(rectangulo1.calculararea());
}
const abecedario =[

  {id:'a', name: '1',},
  {id:'b', name: '2',},
  {id:'c', name: '3',},
  {id:'d', name: '4',},
  {id:'e', name: '5',},
  {id:'f', name: '6',},
  {id:'g', name: '7',},
  {id:'h', name: '8',},
  {id:'i', name: '9',},
  {id:'j', name: '10',},
  {id:'k', name: '11',},
  {id:'l', name: '12',},
  {id:'m', name: '13',},
  {id:'n', name: '14',},
  {id:'ñ', name: '15',},
  {id:'o', name: '16',},
  {id:'p', name: '17',},
  {id:'q', name: '18',},
  {id:'r', name: '19',},
  {id:'s', name: '20',},
  {id:'t', name: '21',},
  {id:'u', name: '22',},
  {id:'v', name: '23',},
  {id:'w', name: '24',},
  {id:'x', name: '25',},
  {id:'y', name: '26',},
  {id:'z', name: '27',},

]
function encriptar()
{
    const input=document.getElementById('palabra').value
    var arraypalabra=palabra.split('');
    const letra= abecedario.find(c=>c.id==='a');
    const valor=letra.name;
    for(var i=0; i<arraypalabra.length;i++){
        if(arraypalabra[i]==arraypalabra[name])
        {
          bandera=true;
        }
        else{
          bandera=false;
          alert("Esta es tu palabra");
          break;
        }
        numeroletras--;
      
    }
    
}  
