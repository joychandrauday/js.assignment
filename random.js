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