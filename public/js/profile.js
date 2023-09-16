function openProfile(customerDataJson) {
    let customerData = JSON.parse(customerDataJson);
    let profileElements = document.getElementsByClassName("profile-1");
    
    profileElements[0].style.display = 'block';
    profileElements[0].querySelector(".pro-la:nth-child(2)").textContent = "Account Number: " + customerData.AccountNumber;
    profileElements[0].querySelector(".pro-la:nth-child(3)").textContent = "Name: " + customerData.Name;
    profileElements[0].querySelector(".pro-la:nth-child(4)").textContent = "Email: " + customerData.Email;
    profileElements[0].querySelector(".pro-la:nth-child(5)").textContent = "Current Balance: " + customerData.currentBalance;
    document.getElementById("customerID").value = customerData.AccountNumber;
    let hiddenInput = document.getElementById("customerID");
    hiddenInput.value = customerData.AccountNumber;
    let customerAccountNumber = hiddenInput.value;
    let transferLink = document.querySelector(".subm-transfer-link");
    transferLink.href = `/Transfer?customer_Id=${customerAccountNumber}`;
  }

function closeProfile() {

  let profileElement =  document.getElementsByClassName("profile-1");
  profileElement[0].style.display='none';
}