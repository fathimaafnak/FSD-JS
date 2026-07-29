const CompanyName = "abc";

function showCompanyName() {
    console.log("Company name is ", CompanyName);
}
showCompanyName();
console.log(CompanyName);

function showTotal() {
    let total = 500;
    console.log("Total =", total);
}
showTotal();
console.log("fn outside, Total =", total);