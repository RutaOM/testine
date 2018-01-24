var rowElement = document.getElementById('row');
var nameElement = document.getElementById('name');
var typeElement = document.getElementById('type');
var colourElement = document.getElementById('colour');
var chechBoxElement = document.getElementById('chechbox');
var timesBoxElement = document.getElementById('timesbox');

localStorage.setItem("cars", JSON.stringify([])); //isvalom masinu sarasa

//cia saugosim visas suvestas auto
var carsJSON = localStorage.getItem("cars"); //pasiimsim auto is localstorage
var carList = JSON.parse(carsJSON);

if(carList == null){
	carList = []		//jei sarasas tuscias-sukurti masyva, i kuri bus saugomos suvestos auto
}

/*addCar(1,'asd','asd','asd');
addCar(1,'asdsa','asasdasdd','aasdassd');*/
renderCars();

function renderCars(){

    if(!carList) return; //jei tuscias masyvas-iseik
    var result = "";

    for(var car of carList){  //naujas! nebe lauko pavad, o ima reiksme in ima is kaires, o sitas reiksme
        result += `<div class="row">
                    <div class="col-lg-2 col-md-2 col-xs-2"></div>
                    <div class="col-lg-8 col-md-8 col-xs-8 firstlight">
                        <div class="row ">
                            <div class="col-lg-1 col-md-1 col-xs-1">
                                <p class="smallgrey">${car.row}</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-4">
                                <p class="smallgrey">${car.name}</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-xs3">
                                <p class="smallgrey">${car.type}</p>
                            </div>
                            <div class="col-lg-2 col-md-2 col-xs-2">
                                <p class="smallgrey">${car.colour}</p>
                            </div>
                             <div>
                            <span class="btn-edit" onclick="edit()">EDIT</span>
                        </div>
                        <div>
                            <span class="btn-remove" onclick="remove()">REMOVE</span>
                        </div>
                        </div>
                	</div>
                    <div class="col-lg-2 col-md-2 col-xs-2"></div>
            	</div>`/*riestiniuose rasom kintamojo reiksme*/
        ;

    }
    var carListElement = document.querySelector(".car-list");
    carListElement.innerHTML = result;
}

//
// var addCarButton = document.querySelector(".btn-save-car");
// addCarButton.addEventListener("click", addCar);
//
function addCar(row, name, type, colour){
    if(!row || !name || !type || !colour){
	alert("Užpildykite visus laukelius.");
	return;
}

    var car = {
        "row": row,
        "name": name,
        "type": type,
        "colour": colour
    }

    carList.push(car);
    carsJSON = JSON.stringify(carList); //gauta auto perrasyti json formatu(papildymas)
    localStorage.setItem("cars", carsJSON);

    // renderCars();
}
//
// var record = {
// 	"row": row,
// 	"name": name,
// 	"tipas": tipas,
// 	"colour": colour
// }
//
//
//
// carList.push(record);
// carsJSON = JSON.stringify(carList); //gauta auto perrasyti json formatu(papildymas)
// localStorage.setItem("cars", carsJSON);
//
//
//
 	function submit(){
        var row = rowElement.value;
        var name = nameElement.value;
        var type = typeElement.value;
        var colour = colourElement.value;
        addCar(row, name, type, colour);
        renderCars();
}
  function remove() {

  }
