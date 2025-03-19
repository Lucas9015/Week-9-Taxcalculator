// take in a pupils score and return their grade


const school_system = {
    name: 'St. Marys',
    location: 'Nairobi',
}
function calculateGrade(marks){


    if(!marks || typeof marks !== 'number'){
        return 'Please enter a valid score';
    }

    if(marks < 50){
        return 'E';
    }

    if(marks < 60){
        return 'D';
    }

    if (marks < 70) {
        return 'C';

    }

    if (marks < 80) {
        return 'B';

    }
    return 'A';
}

const grade = calculateGrade(95)
console.log(grade) 