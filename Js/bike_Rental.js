

detailsSet();

function detailsSet() {

  const container = document.getElementById('selectedBike');
  container.innerHTML = ''; // Clear the content

  const request_details = JSON.parse(sessionStorage.getItem("request_details"));  
  

  var myBody = `<div id="selectedBikeDetails">
        <img src="${request_details.bikeImg}"  alt="Selected Bike" loading="lazy" width="250" height="300" title="Your Selected Bike">
        <div class="bikeDetails">
            <table>
                <tr>
                    <td><label for="Text">Bike Reg No </label> </td>
                    <td> <input type="number" name="" id="" readonly value="${request_details.bikeNo}"></td>
                </tr>
                <tr>
                    <td><label for="Text">Bike Name</label></td>
                    <td><input type="text" name="" id="" readonly value="${request_details.bikeModel}"></td>
                </tr>
                <tr>
                    <td><label for="Text">Type</label></td>
                    <td><input type="text" name="" id="" readonly value="${request_details.bikeTypes}"></td>
                </tr>
                <tr>
                    <td><label for="Text">From</label></td>
                    <td><input type="datetime-local" id="form_date"></td>
                </tr>   
                <tr>
                    <td><label for="Text">To</label></td>
                    <td><input type="datetime-local" name="" id="to_date"></td>
                </tr> 
                <tr>
                    <td><label for="Text">Rent per hour</label></td>
                    <td> <input type="number" readonly value="${request_details.rent}"></td> <br> 
                </tr> <br>
               
                <tr>
                    <td>    </td>
                    <td><button onclick="confirmBuy()" id="confirmBuyButton">Confirm To Buy</button></td>
                </tr>
            </table>
            
            <h3 style="display: none;" id="showMassage">Wait You Will Recive Confirmed Notification....</h3>
           
        </div>
       </div>`;

  container.innerHTML = myBody;
}

function confirmBuy() {

  const requestList = JSON.parse(localStorage.getItem('requestList')) || [];

  const request_details = JSON.parse(sessionStorage.getItem("request_details"));

  const user_name = "user 1";
  const form_date = document.getElementById('form_date').value;
  const to_date = document.getElementById('to_date').value;
  const bike_reg_no = request_details.bikeNo;
  const bike_model = request_details.bikeModel;

  requestList.push({user_name, form_date, to_date, bike_reg_no, bike_model});

  console.log(requestList);
  

  localStorage.setItem('requestList', JSON.stringify(requestList));

  document.getElementById('confirmBuyButton').disabled = true;
  
  document.getElementById('showMassage').style.display = 'block';
  
}