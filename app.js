document.querySelector('#loan-form').addEventListener('submit', calculateResults);
// calculateResults 
function calculateResults(e){
    e.preventDefault();
   
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    const calculatedPayments =parseFloat(years.value)*12;
    

    //monthly payments
    const x = Math.pow(1+calculatedInterest,calculatedPayments);

    const monthly = (principal*x*calculatedInterest)/(x-1);
    
    if(isFinite(monthly)){
    
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
     
    }
    else{
        showErr();
    }
    
}
function showErr(){
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const alert=document.createElement('div');
    alert.className= 'alert alert-danger alert-dismissible fade show';
    alert.appendChild(document.createTextNode('please check your numbers'));
    card.insertBefore(alert,heading)
    //clear alert
   


}
