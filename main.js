function calculateMoney(ticketNumber) {
    if (ticketNumber < 0) {
        return 'Ticket number cant be negative.';
    }

    const ticketPrice = 120;
    const totalTicketPrice = ticketPrice * ticketNumber;
    const netIncome = totalTicketPrice - (500 + (8 * 50));

    return netIncome;
}
calculateMoney(130);

///////////

function checkName(name) {
    if (typeof name != 'string') {
        return 'enter a valid name';
    }
    const lastLetter = name.slice(-1);
    if (lastLetter === 'a' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' || lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w') {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
    

}
checkName('rakib');

///////////

function deleteInvalids(array) {
    const validArray = [];
    for (const element of array) {
        if (typeof element === 'number') {
            validArray.push(element);
        }
    }
    return validArray;
}
deleteInvalids(["aas", 'tt', "gh", '56', true,0]);

///////////

function password(person) {
    const FnewSiteName=person.siteName;
    const firstLetter = FnewSiteName.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = person.siteName.slice(1);
    const newSiteName = firstLetterCap + remainingLetters;
    
    const password=newSiteName.concat("#",person.name,"@",person.birthYear);

    return password;
}
const person={name:"kolimuddin", birthYear:1999, siteName:"google"}
password(person);

///////////

function monthlySavings(allPayment,livingCost) {

    const typeAllPayment=Array.isArray(allPayment);
    if (typeAllPayment===false ||typeof livingCost != 'number') {
        return 'invalid input';
    }

    const allPayments=allPayment;
    let totalIncome=0;
    for (let i = 0; i < allPayments.length; i++) {
        if (allPayments[i]>=3000) {
            allPayments[i]=allPayments[i]-((20*allPayments[i])/100);
            totalIncome= totalIncome + allPayments[i];
        }else{
            totalIncome=totalIncome + allPayments[i];
        }
    }
    const savings=totalIncome-livingCost;
    if (savings>=0) {
        return savings;
    }else{
        return 'Earn More';
    }
}

monthlySavings([2000,2000,2000,2000],7000);