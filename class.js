//globals
var acctNumbers = new Array();
var amountOfAccounts = 0;
var totalAllowed = 3;
var accounts = new Array();

//class
class bankAccount
{
    constructor(firstName, lastName, amt, p){
        
        function checkRandom(rand)
        {
            var found = acctNumbers.findIndex(k => k==rand);
            return found;
        }
        
    function random() {
        do{
            var max = 6;
            var min = 2;
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
        this.acctNo = 2;
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
searchAccounts(acct)
    {
        var found;
        do{
            var times =0;
            found = accounts.findIndex(k => k==acct[i].acctNo);
            times++;
        }while(found != -1 || times == numberofAccounts)
        
        return found;

    };


let test = new bankAccount("alira" , "coffman", 20, 2231);
accounts.push(test);
let test1 = new bankAccount("alira" , "coffman", 20, 2231);
let test2 = new bankAccount("alira" , "coffman", 20, 2231);
let test3 = new bankAccount("alira" , "coffman", 20, 2231);

console.log(searchAccounts(2));
