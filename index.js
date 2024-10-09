function getDOB(){
    const dobInput=document.getElementById("inputDate").value;
    const cDate=document.getElementById("cDate").value;
    if(!dobInput || !cDate){
        alert("enter from date to date to calculate !");
        return;
    }
    const dob=new Date(dobInput);
    const currentDate=new Date(cDate);

    let age=currentDate.getFullYear()-dob.getFullYear();
    const monthdiff=currentDate.getMonth()-dob.getMonth();
    if(monthdiff<0 || (monthdiff===0&& currentDate.getDate()<dob.getDate())){
        age--;
    }
    document.getElementById("currentAge").textContent = `Your age is ${age} years.`;
}
