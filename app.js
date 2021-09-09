//Object literal
var salon={
    name:"The Fashion Pet",
    address:{
        state:"California",
        city:"San Diego",
        street:"Rancho Mission Road",
        zip:"92108"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age: 60,
            gender:"Male",
            breed:"Great Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age: 50,
            gender:"Male",
            breed:"Great Dane",
            service:"Nails cut",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Skippy",
            age: 55,
            gender:"Male",
            breed:"Great Dane",
            service:"Ear cleaning",
            owner:"Shaggy",
            phone:"555-555-5555"
        }
    ]
}

//name, age, gender, breed, service, owner, phone
function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${salon.name}</h3>
    <p>${salon.address.street}. ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>
    `;
}
displayInfo();

function displayPetInfo(){
    document.getElementById("petsInfo").innerHTML=`
    <p>${salon.pets.length} pets are currently scheduled:</p>   
    `;
}
displayPetInfo();

function displayPetName(){
    for (let i=0; i<salon.pets.length; i++){
    document.getElementById("petsName").innerHTML+=`
    <p>${salon.pets[i].name}</p>
    `;     
    }
}
displayPetName();