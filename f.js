
var description = querySelector('#description');
var incident = querySelector('#incident');
var vehicles = querySelector("#vehicles");
var casualties = querySelector('#casualties');
var button = querySelector('#submit');

button.addEventListener('click',()=>{

    var obj = {
        description:description.value,
        incident:incident.value,
        vehicles:vehicles.value,
        casualties:casualties.value,
    };

    fetch("/info",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })

})
