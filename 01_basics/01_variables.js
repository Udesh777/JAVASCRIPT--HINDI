const account_Id = 14453
let accountemail = "udeshkumarsai777@mail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// account_Id = 2
console.log(account_Id);

accountemail = "ussdj@oogle.com"
accountPassword = "212131234"
accountCity = "Benglauru"
/*
prefer not to use var
because of issue in Block scope and Functional Scope
We will use let and const

*/
let accountState

console.table([account_Id , accountemail , accountPassword,accountCity,accountState])