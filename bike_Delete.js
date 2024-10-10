

deleteBike();

function deleteBike() {

    const bikes = JSON.parse(localStorage.getItem('bikes')) || [];

    const container = document.getElementById('deleteBikes');
    container.innerHTML = ''; //delete hard code

    const bikeList = bikes;

    bikeList.forEach((dlt, index) => {

        var body = `<tr>
                    <td><img src="${dlt.bikeImg}" alt="" width="60" height="50" border-radius: 5px;></td>
                    <td>${dlt.bikeModel}</td>
                    <td>${dlt.bikeNo}</td>
                    <td>${dlt.bikeTypes}</td>
                    <td><button id="btn2" onclick="dltBike('${index}')">Delete</button></td>
                    <td><button type="submit"  onclick="ediBike('${index}')" class="editBtn" >Edit</button></td>
                </tr>`;

        container.innerHTML += body;

    });
}



function dltBike(index) {
    //console.log(index);

    const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
    //console.log(bikes);

    var newBikeList = [];
    bikes.forEach((dlt, ind) => {
        if (ind != index) {
            newBikeList.push(dlt);
        }
    });

    localStorage.setItem('bikes', JSON.stringify(newBikeList));

    deleteBike();

}

function ediBike(index) {
    console.log(index);

    const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
    
}