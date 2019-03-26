//globals
var acctNumbers = new Array();
var amountOfAccounts = 0;
var totalAllowed = 20;
var accounts = new Array();
function searchAccounts(acct)
    {
       

    };
//class
class bankAccount
{
    constructor(firstName, lastName, amt, p){
        console.log(firstName);
        function checkRandom(rand)
        {
            var found = acctNumbers.findIndex(k => k==rand);
            return found;
        }
        
    function random() {
        do{
            var max = 60000000;
            var min = 20000000;
            var random = Math.floor(Math.random() * (+max - +min) + +min);
            var check = checkRandom(random);
            console.log(check);
        }   
        while(check != -1);
        acctNumbers.push(random)
        return random;
    }
        if(amountOfAccounts < totalAllowed)
        {
        this.first = firstName;
        this.last = lastName;
        this.amount = amt;
        this.acctNo = 6;
        this.pin = p;
        this.attempts = 0;
        amountOfAccounts++;
        }
        else
        {
            console.log("not able to create");
            this.first, this.last, this.amount, this.acctNo, this.pin, this.attempts ="n/a";
        }
        
    };
   
   //finds if account number matches account
    
    verifyAccount(index, p)
    {
       var found = searchAccounts(index);
       if(found != -1)
       {
           accounts[index]
       }
    }
    updateAccount(index, amt)
    {

    }
    outputUserInfo(index)
    {

    }

}
function openAccount()
{
    var txt;
     var first = prompt("Please enter your First Name:", "");
     var last = prompt("Please enter your First Name:", "");
     var deposit = prompt("Please enter your first Desposit", "0");
     var p = prompt("Please enter your pin:", "");
    let account = new bankAccount(first, last, deposit, p);
    accounts.push(account);
    console.log("Account Created, ");
    console.log(accounts);
    
}



let test = new bankAccount("alira" , "coffman", 20, 2231);
accounts.push(test);
let test1 = new bankAccount("alira" , "coffman", 20, 2231);
let test2 = new bankAccount("alira" , "coffman", 20, 2231);
let test3 = new bankAccount("alira" , "coffman", 20, 2231);
console.log(searchAccounts(6))
console.log("hi");
