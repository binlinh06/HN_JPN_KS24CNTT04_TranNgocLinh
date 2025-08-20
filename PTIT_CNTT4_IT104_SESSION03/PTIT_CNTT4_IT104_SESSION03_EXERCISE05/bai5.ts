let firstName:string = "jonh"
let lastName :string = "doe"
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
let fullname :string = firstName + " " + lastName

console.log(fullname);
