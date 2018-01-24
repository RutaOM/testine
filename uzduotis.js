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


    for(var car of carList){
        var index= 0;
        result += `<div class="row">
                    <div class="col-lg-2 col-md-2 col-xs-2"></div>
                    <div class="col-lg-8 col-md-8 col-xs-8 firstlight">
                        <div class="row line">
                            <div class="col-lg-1 col-md-1 col-xs-1">
                                <p class="printrow" id="printrow">${car.row}</p>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-4">
                                <p class="printcar" id="printcar">${car.name}</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-xs3">
                                <p class="printtype" id="printtype">${car.type}</p>
                            </div>
                            <div class="col-lg-2 col-md-2 col-xs-2">
                                <p class="printcolour" id="printcolour">${car.colour}</p>
                            </div>
                             <div>
                            <span class="btn-edit" onclick="editCar(this.index)">EDIT</span>
                        </div>
                        <div>
                            <span class="btn-remove" onclick="removeCar(this.index)">REMOVE</span>
                        </div>
                        </div>
                	</div>
                    <div class="col-lg-2 col-md-2 col-xs-2"></div>
            	</div>`/*riestiniuose rasom kintamojo reiksme*/
        ;
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
    console.log(carList);
    renderCars();

}

function editCar(id) {
    var car = findElement(id);

    function findElement(id) {
        var count = 0;
        for(car of carList);{
            if(car.name == id );
            return car;
        }
        count++;

    }


}

//reikia numesti info atgal i inputus