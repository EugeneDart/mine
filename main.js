/* Мой город */
let cityname = 'Винница';
    console.log(cityname);
let countryname = 'Украина';
    console.log(countryname);
let populationnumb = 350.000;
    console.log(populationnumb);

let stadiumyes = true;
let stadiumno = false;

    if(stadiumyes == true) {
        console.log('Да, у нас есть футбольный стадион');
    } else { 
        console.log('Нет, у нас есть футбольный стадион');
    }

    let height = 40;
    let width = 70;
    let square = (40 * 70);
    console.log(square + ' ' + 'см');

    const time = 2;
    const speedOfFirst = 95;
    const speedOfSecond = 114;
        let firstcardistance = speedOfFirst * time;
        let secondcardistance = speedOfSecond * time;
    console.log(firstcardistance + secondcardistance + ' ' + 'км');

    const randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber < 20) {
        console.log('randomNumber меньше 20');
    } else if (randomNumber > 50) {
        console.log('randomNumber больше 50');
    } else {
        console.log('randomNumber больше 20, и меньше 50');
    }

        switch (randomNumber) {
            case 'randomNumber < 20' : console.log('randomNumber меньше 20');
                break;
            case 'randomNumber > 50' : console.log('randomNumber больше 50');
                break;
            default:
                console.log('randomNumber больше 20, и меньше 50');
        }

