// const bikes = JSON.parse(localStorage.getItem('bikes')) || [];

// // add bike
// document.getElementById('bikeAdd').addEventListener('submit', function (event) {

//     event.preventDefault();

//     let bikeNo = document.getElementById('bikeRegNo').Value;
//     let bikeModel = document.getElementById('bikeModel').Value;
//     let bikeTypes = document.getElementById('bikeType').Value;
//     let bikeYear = document.getElementById('year').Value;
//     let bikeImg = document.getElementById('bikeImage').Value;



//     if (bikes.find(bike => bike.bikeNo === bikeNo)) {
//         // document.getElementById('creationMessage').textContent = "Username already exists.";
//         alert("This Bike Number Added already")
//         return;
//     }

    
//     //if (password === confirmPassword) {
//         users.push({ bikeNo, bikeModel, bikeTypes, bikeYear, bikeImg});
//         localStorage.setItem('bikes', JSON.stringify(bikes));
    
//         document.getElementById('createMsg').textContent = "Bike Added successfully!";
//         // document.getElementById('userCreationForm').reset();
//   //  }
//     // else{
//     //     document.getElementById('creationMessage').textContent="Your password must be same...!";
//    // }
// });

// Retrieve the bikes array from localStorage or initialize as an empty array
const bikes = JSON.parse(localStorage.getItem('bikes')) || [];

// Add bike
document.getElementById('bikeAdd').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve values from form inputs
    let bikeNo = document.getElementById('bikeRegNo').value;
    let bikeModel = document.getElementById('bikeModel').value;
    let bikeTypes = document.getElementById('bikeType').value;
    let bikeYear = document.getElementById('year').value;
    let rent = document.getElementById('rentHour').value;

    // Handle image file
    let bikeImgInput = document.getElementById('bikeImage');
    let bikeImg = '';
    
    if (bikeImgInput.files.length > 0) {
        let file = bikeImgInput.files[0];
        let reader = new FileReader();        
        
        reader.onload = function (e) {
            bikeImg = e.target.result;
            console.log(bikeImg);
            
            
            // Check if bike number already exists
            if (bikes.find(bike => bike.bikeNo === bikeNo)) {
                alert("This Bike Number has already been added");
                return;
            }

            // Add new bike to array and update localStorage
            bikes.push({ bikeNo, bikeModel, bikeTypes, bikeYear,rent, bikeImg });
            localStorage.setItem('bikes', JSON.stringify(bikes));

            document.getElementById('createMsg').textContent = "Bike Added successfully!";
            document.getElementById('bikeAdd').reset();
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    } else {
        // Handle case where no image is provided
        if (bikes.find(bike => bike.bikeNo === bikeNo)) {
            alert("This Bike Number has already been added");
            return;
        }

        // Add new bike to array and update localStorage
        bikes.push({ bikeNo, bikeModel, bikeTypes, bikeYear, bikeImg });
        localStorage.setItem('bikes', JSON.stringify(bikes));

        document.getElementById('createMsg').textContent = "Bike Added successfully!";
        document.getElementById('bikeAdd').reset();
    }
});
