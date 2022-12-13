let searchInput=document.getElementById("searchInput");
let search=document.getElementById("search");
let searchResults=document.getElementById("searchResults")


let pincode=""
let count=1
clearSearchResults=()=>{
    searchResults.textContent="";
    count=1;
}
search.onclick=()=>{
    pincode=searchInput.value
    if(pincode!==""){
    clearSearchResults()
    getPinCodeDetails()
}
else{
    searchResults.textContent="";
    alert("Enter Valid Input")
}
    console.log(pincode)
}


appendPostOfficeDetails=(data)=>{
    const {Block,Name,BranchType,DeliveryStatus,Circle,Country,Division,Pincode}=data;
    const textData=document.createElement("p");
    textData.textContent=`${count}). Name: ${Name}, Block: ${Block}, BranchType: ${BranchType}, Delivery Status: ${DeliveryStatus}, Circle:${Circle}, Country:${Country}, Division:${Division}, Pincode:${Pincode} `
    textData.style.fontSize="18px"
    searchResults.appendChild(textData)
    count+=1
console.log(data)
}

createAndAppendResults=(each)=>{
    const {Message,PostOffice}=each
    let headingText=document.createElement("h1");
    headingText.textContent=Message
    searchResults.appendChild(headingText)
    for (let each of PostOffice){
        appendPostOfficeDetails(each)
    }
   
}

getPinCodeDetails= async()=>{
    const response=await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data=await response.json()
    for(let each of data){
        createAndAppendResults(each)
    }
    console.log(data)
}

