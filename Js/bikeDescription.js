// const user = sessionStorage.getItem("User");

// const bikes_1 = JSON.parse(localStorage.getItem('bikes_1')) || [];

// search();
// function search() {
//     //console.log(88888);

//     const bikes = JSON.parse(localStorage.getItem('bikes')) || [];

//     const container = document.getElementById('bikeDetailBody');
//     container.innerHTML = ''; // Clear the content

//     const searchKey = document.getElementById('mySearch').value;

//     const finalArray = bikes.filter(a =>
//         a.bikeModel.toLowerCase().includes(searchKey.toLowerCase()));

//     //console.log(finalArray);

//     finalArray.forEach(bike => {
//         var body = `<div class="bikes">
//             <div class="gallery">
//                 <img src="${bike.bikeImg}" alt="Bike 1" loading="lazy" title="Harly-Davidson">
//             </div>
//             <div class="details">
//                 <h1>${bike.bikeModel}</h1>
//                 <h2>Rs.${bike.rent}.00 per hour</h2>
//                 <h3>16% OFF </h3>
//                 <p style="color: black;">Bike Reg No : <span id="bikeRegNo"> ${bike.bikeNo} </span></p>
//                 <p style="color: black;">Bike Model : <span id="bikeModelNo">${bike.bikeTypes}</span></p>
//                 <p style="color: black;">Bike Model : <span id="bikeYear">${bike.bikeYear}</span></p>
//                 <p style="text-align: center; color: gray">A motorcycle is a two-wheeled motor vehicle designed for quick and efficient transportation. It consists of a frame, engine, and two wheels, with the engine providing the power needed for movement. Motorcycles come in various styles, including sport bikes, cruisers, touring bikes, and dirt bikes, each tailored to different riding preferences and purposes.</p>

//                 <div class="hourRent">
//                     <button class="rentBtn" onclick="SaveID('${bike.bikeNo}')">Select Bike</button>
//                 </div>

//                 <p id="getNotification"></p>
//             </div>
//         </div>`;

//         container.innerHTML += body;

//     });
// }

// function SaveID(no, model, rent) {
//     const request_details = bikes_1.filter(bike => bike.bikeNo == no);
//     console.log(request_details);



//     const bike_details = {
//         User: user,
//         BikeNo: no,
//         //bikeModel:model,
//         Rent: rent

//     }




//     localStorage.setItem("Request_Info", JSON.stringify(bike_details));
//     sessionStorage.setItem("bike", no);
//     window.location.href = "bike_Rent.html";

// }

//new

//const user = sessionStorage.getItem("User");

//const bikes_1 = JSON.parse(localStorage.getItem('bikes_1')) || [];
const bikes = JSON.parse(localStorage.getItem('bikes')) || [];
search();
function search() {
    //console.log(88888);

    

    const container = document.getElementById('bikeDetailBody');
    container.innerHTML = ''; // Clear the content

    const searchKey = document.getElementById('mySearch').value;

    const finalArray = bikes.filter(a =>
        a.bikeModel.toLowerCase().includes(searchKey.toLowerCase()));

    //console.log(finalArray);

    finalArray.forEach(bike => {
        var body = `<div class="bikes">
            <div class="gallery">
                <img src="${bike.bikeImg}" alt="Bike 1" loading="lazy" title="Harly-Davidson">
            </div>
            <div class="details">
                <h1>${bike.bikeModel}</h1>
                <h2>Rs.${bike.rent}.00 per hour</h2>
                <h3>16% OFF </h3>
                <p style="color: black;">Bike Reg No : <span id="bikeRegNo"> ${bike.bikeNo} </span></p>
                <p style="color: black;">Bike Model : <span id="bikeModelNo">${bike.bikeTypes}</span></p>
                <p style="color: black;">Bike Model : <span id="bikeYear">${bike.bikeYear}</span></p>
                <p style="text-align: center; color: gray">A motorcycle is a two-wheeled motor vehicle designed for quick and efficient transportation. It consists of a frame, engine, and two wheels, with the engine providing the power needed for movement. Motorcycles come in various styles, including sport bikes, cruisers, touring bikes, and dirt bikes, each tailored to different riding preferences and purposes.</p>
    
                <div class="hourRent">
                    <button class="rentBtn" onclick="SaveID('${bike.bikeNo}')">Select Bike</button>
                </div>
    
                <p id="getNotification"></p>
            </div>
        </div>`;

        container.innerHTML += body;

    });
}

function SaveID(bikeNo) {
    console.log(bikeNo);
    
    const request_details = bikes.filter(bike => bike.bikeNo == bikeNo)[0];

    sessionStorage.setItem("request_details", JSON.stringify(request_details));
     console.log(request_details);

    window.location.href = "bike_Rent.html";


}
