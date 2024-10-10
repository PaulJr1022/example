// Assuming users data is shared or passed here from user creation
const users = JSON.parse(localStorage.getItem('users')) || [
    
];

function encryptPassword(password) {
    return btoa(password);
}

// Login
document.getElementById('loginFrom').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('loginUsername').value;
    let password = encryptPassword(document.getElementById('loginPassword').value);
    

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginMessage').textContent = "";
        if (user.role === 'manager') {        
           window.location.href = 'dashBoard.html';
        } else if (user.role === 'customer') {
            sessionStorage.setItem("User",username);
            window.location.href = 'bikeDescription.html';
        } 
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password.";
    }
    
});