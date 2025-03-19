// what are functions

//how do we create functions

//keyword function, return !

//conditions if else

//create a program that takes in onces gross salary and calculates the tax amount

//0-10000 10%
//10001-20000 = 12%

function taxCalculator(grossSalary) {

    //validate

    if(!grossSalary) {
        return "Please provide a gross salary";
    }

    //check salary

   
    let taxAmount = 0;

    if(grossSalary <= 10000) {
        tax = 10/100 * grossSalary;
    }else{
        let firstTiertax = 10/100 * 10000;

        const remainingSalary = grossSalary - 10000;

            if(remainingSalary < 10000) {
                const secondTierTax = 12/100 * remainingSalary;

                    

                taxAmount = firstTiertax + secondTierTax;

                taxAmount = firstTiertax + secondTierTax;

            }else{
                const thirdTierTax = 12/100 * 10000;

                taxAmount = taxAmount + thirdTierTax;
                const remainingSalary = grossSalary - 20000;

                if(remainingSalary > 0){
                    lastTax =14/100 * (grossSalary - 20000);

                    thirdTierTax = thirdTierTax + lastTax;
                }
            }

        }

    
    
        //finally
        return grossSalary - taxAmount;
    }


   const netSalary = taxCalculator(9000)
    console.log(netSalary);
