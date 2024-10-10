document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });


    setDetail();
    
function setDetail() {
    const requestList = JSON.parse(localStorage.getItem('requestList')) || [];
    console.log(requestList);
    

    const container = document.getElementById('tbody');
    container.innerHTML = ''; // Clear the content

    requestList.forEach(bike => {
        const format_form_date =bike.form_date ? bike.form_date.split('T')[0] : '---';
        const format_from_time =bike.form_date ? bike.form_date.split('T')[1] : '---';

        const format_to_date =bike.to_date ? bike.to_date.split('T')[0] : '---';
        const toat_from_time =bike.to_date ? bike.to_date.split('T')[1] : '---';

        var body = `<tr>
                <td>${bike.user_name}</td>
                <td>${bike.bike_reg_no}</td>
                <td>${bike.bike_model}</td>
                <td>${format_form_date} <br> ${format_from_time} </td>
                <td>${format_to_date} <br> ${toat_from_time} </td>
                <td>
                    <button id="btn1" onclick="Accept()">Accept</button>
                    <button id="btn2" onclick="Reject()"> Reject</button>
                </td>
            </tr>`;

        container.innerHTML += body;
    });
    
}
