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

    var index= 0;
    for(var car of carList){

        result += `<div class="listofcars">
                        <div class="print-row-division">
                           <p class="printrow">${car.row}</p>
                        </div>
                        <div class="print-car-division">
                           <p class="printcar">${car.name}</p>
                        </div>
                        <div class="print-type-division">
                           <p class="printtype">${car.type}</p>
                        </div>
                        <div class="print-colour-division">
                           <p class="printcolour">${car.colour}</p>
                        </div>
                        <div class="btn-edit-division">
                           <span class="btn-edit" onclick="editCar(${index})">EDIT</span>
                        </div>
                        <div class="btn-remove-division">
                           <span class="btn-remove" onclick="removeCar(${index})">REMOVE</span>
                        </div>
                     </div>`;
        index++;
    }
    var carListElement = document.querySelector(".car-list");
    carListElement.innerHTML = result;
}


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

    if(chechForDuplicates(car)){                                                                                            //chech for duplicates
        alert("Toks automobilis jau yra įrašytas");
        return;
    }

    carList.push(car);
    carsJSON = JSON.stringify(carList); //gauta auto perrasyti json formatu(papildymas)
    localStorage.setItem("cars", carsJSON);
    console.log(carList);
}

function chechForDuplicates(car) {
    var isDuplicate=false;

    carList.forEach(function (item) {
        if(item.name == car.name && item.type == car.type && item.colour == car.colour){
            isDuplicate = true;
        }
    });
    return isDuplicate;                                                                                                    // chech for duplicates ends.

}

function submitCar(){
        var row = rowElement.value;
        var name = nameElement.value;
        var type = typeElement.value;
        var colour = colourElement.value;
        addCar(row, name, type, colour);
        renderCars();
}

function clearCar(){
        rowElement.value = "";
        nameElement.value = "";
        typeElement.value = "";
        colourElement.value = "";
}

function removeCar(index) {
   carList.splice(index,1); //turi removeinti paselektinta elementa
    renderCars();

}

function editCar(index) {
    var tmpCarList = carList;
    var carData = tmpCarList.splice(index,1);
    // console.log(carData[0]["name"]);

        rowElement.value = carData[0]["row"];
        nameElement.value = carData[0]["name"];
        typeElement.value = carData[0]["type"];
        colourElement.value = carData[0]["colour"];

}

function findCarBy(id) {
    for(car of carList){
        if(car.name == id );
        return car;
    }
}


//reikia numesti info atgal i inputus