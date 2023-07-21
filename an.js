
const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
const vowel = ['a', 'e', 'i', 'o', 'u'];
const error_block= document.getElementById("error-block");
const result_block= document.getElementById("result-block");
function removeDiacritics(str) {
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    str = str.replace(/đ/g, "d");
    return str;
}
function isVowel(char) {
    if (vowel.includes(char)) {
        return true;
    }
    return false;
}
function isConsonant(char) {
    if (consonant.includes(char)) { return true; }
    return false;
}
function getChar(name) {

    let removeDiacriticsName = removeDiacritics(name);

    // const character =removeDiacriticsName.split("");
    let myConsonant = [];
    let myVowel = [];
    for (let index = 0; index < removeDiacriticsName.length; index++) {

        if (isConsonant(removeDiacriticsName[index])) {
            myConsonant.push(removeDiacriticsName[index]);
        }
        else if (isVowel(removeDiacriticsName[index])) {

            myVowel.push(removeDiacriticsName[index]);

        }
        else if (removeDiacriticsName[index] === 'y') {
            if ((index > 0 && (isVowel(removeDiacriticsName[index - 1]) || removeDiacriticsName[index - 1] === ' ')) || (index < removeDiacritics.length - 1 && isVowel(removeDiacritics[index + 1])) || index === 0) { myConsonant.push(removeDiacriticsName[index]) }
            else { myVowel.push(removeDiacriticsName[index]) }
        }

    }

    return {
        consonant: myConsonant,
        vowel: myVowel
    };
    // console.log("ten:"+removeDiacriticsName);
    // console.log("phu am:"+myConsonat);
    // console.log("nguyen am:"+myVowel);
}

function splitName(str) {
    return removeDiacritics(str).split("");
}

function changeToNum(array) {
    let numArray = [];
    array.forEach(element => {

        switch (element) {
            case 'a':
            case 'j':
            case 's': numArray.push(1);
                break;
            case 'b':
            case 'k':
            case 't': numArray.push(2);
                break;
            case 'c':
            case 'l':
            case 'u': numArray.push(3);
                break;
            case 'd':
            case 'm':
            case 'v': numArray.push(4);
                break;
            case 'e':
            case 'n':
            case 'w': numArray.push(5);
                break;
            case 'f':
            case 'o':
            case 'x': numArray.push(6);
                break;
            case 'g':
            case 'p':
            case 'y': numArray.push(7);
                break;
            case 'h':
            case 'q':
            case 'z': numArray.push(8);
                break;
            case 'i':
            case 'r': numArray.push(9);
                break;
            default: numArray.push(0);
        }

    });
    return numArray;
}

function caculateNumArray(array) {
    let sum = 0;

    array.forEach(el => {
        sum += el;
    });
    return sum;
}

function getDob(day, month, year) {

    console.log(day, month, year);

}
//main
function search() {

    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let check=valid(firstName,lastName,day,month,year);
    if(check)
    {
        error_block.innerHTML="";
        error_block.style.display="none";
        result_block.style.display="block";
        
        let duongDoiNum = duongDoi(day, month, year);
        let canBangNum = canBang(firstName, lastName);
        let suMenhNum = suMenh(firstName, lastName);
        let lienKetDDSMNum = lienKet(duongDoiNum, suMenhNum);
        let linhHonNum = linhHon(firstName, lastName);
        let ngaySinhNum = ngaySinh(day);
        let nhanCachNum = nhanCach(firstName, lastName);
        let lienKetNCLH = lienKet(linhHonNum, nhanCachNum);
        let truongThanhNum = truongThanh(duongDoiNum, suMenhNum);
        let thieuNum = thieu(firstName, lastName);
        let tuDuyLTNum = tuDuyLyTri(firstName, day);
        let sucManhTTNum = sucManhTT(thieuNum);
        let damMeNum = damMe(firstName, lastName);
        let namNum = nam(day, month);
        let chanNum = chan(day, month, year);
        let ttNUm = thachThuc(day, month, year);

      result_block.innerHTML= ` <p>Chỉ Số Đường Đời: ${duongDoiNum}</p>
        <p>Chỉ số cân bằng: ${canBangNum}</p>
        <p>Chỉ số sứ mệnh: ${suMenhNum} </p>
        <p>Chỉ số liên kết ĐĐ-SM : ${lienKetDDSMNum}</p>
        <p>Chỉ số linh hồn: ${linhHonNum}</p>
        <p>CHỉ số ngày sinh: ${ngaySinhNum}</p>
        <p>Chỉ số nhân cách:${nhanCachNum} </p>
        <p>Chỉ số liên kết NC-LH:${lienKetNCLH}</p>
        <p>Chỉ số trưởng thành: ${truongThanhNum}</p>
        <p>Chỉ số thiếu :${thieuNum}</p>
        <p>Chỉ số tư duy lý trí:${tuDuyLTNum}</p>
        <p>Chỉ số sức mạnh tìềm thức:${sucManhTTNum}</p> 
        <p>Chỉ số đam mê: ${damMeNum}</p>
        <p>Chỉ số năm: ${namNum}<p>
        <p>Chỉ số chặn: chặn 1:${chanNum.chan1} chặn 2 :${chanNum.chan2} chặn 3 : ${chanNum.chan3} chặn 4:${chanNum.chan4}</p>
        <p>Thách Thức 1: ${ttNUm.tt1} Thách thức  2 :${ttNUm.tt2} Thách thức 3:${ttNUm.tt3} Thách thức 4:${ttNUm.tt4} </p> `
        // console.log("duong đời:" + duongDoiNum);
        // console.log("can bằng: " + canBangNum);
        // console.log("su menh: " + suMenhNum);
        // console.log("lien ket DDSM: " + lienKetDDSMNum);
        // console.log("linh hon: " + linhHonNum);
        // console.log("ngay sinh: " + ngaySinhNum);
        // console.log("nhan cach:  " + nhanCachNum);
        // console.log("lien ket LHNC:  " + lienKetNCLH);
        // console.log("truong thành: " + truongThanhNum);
        // console.log("thieu :" + thieuNum);
        // console.log("tu duy LT:" + tuDuyLTNum);
        // console.log("SMTT :" + sucManhTTNum);
        // console.log("dam me: " + damMeNum);
        // console.log("nam: " + namNum);
        // console.log("chan1:" + chanNum.chan1 + " chan 2 :" + chanNum.chan2 + " chan 3 :" + chanNum.chan3 + " chan 4: " + chanNum.chan4);
        // console.log("tt1:" + ttNUm.tt1 + " tt 2 :" + ttNUm.tt2 + " tt 3 :" + ttNUm.tt3 + " tt 4: " + ttNUm.tt4);    
    }else{
        result_block.style.display="none";
    }
    // let nameChar = getNameChar(lastName, firstName);
    // let splitedFirstName = splitName(firstName);
    // let myNum = changeToNum(nameChar.consonant);
    // console.log(nameChar, splitedFirstName);
    // console.log(myNum)
    // getDob(day, month, year);
   
}
//
function numCaculate(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}
function numshortCut(num) {
    while (num > 9) {
        if (num === 11 || num === 22 || num === 33) {
            break;
        }
        else {
            num = numCaculate(num);
        }
    }
    return num;
}
function numshortCut2(num) {
    while (num > 9) {

        num = numCaculate(num);
    }
    return num;
}

function getFirstLetter(str) {
    let words = removeDiacritics(str).split(" ");
    firstLetters = [];
    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0]
        firstLetters.push(firstLetter);
    }
    return firstLetters;
}
// function  CACULATE 
//duong doi 1
function duongDoi(day, month, year) {
    let intDay = parseInt(day);
    let sumDay = 0;
    let intMonth = parseInt(month);
    let sumMonth = 0;
    let intYear = parseInt(year);
    let sumYear = 0;
   sumDay= numshortCut(intDay);
   sumMonth= numshortCut(intMonth);
   sumYear= numshortCut(intYear);
    let result = 0;
    result = sumDay + sumMonth + sumYear;
    result=numshortCut(result);

    return result;

}

// can bang 2

function canBang(firstName, lastName) {
    let myName = firstName + " " + lastName;
    let nameFirstLetter = getFirstLetter(myName);

    let arrNum = changeToNum(nameFirstLetter);
    let result = caculateNumArray(arrNum);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;
}

//SU MENH 3

function suMenh(firstName, lastName) {

    let name = firstName + " " + lastName;
    let myName = removeDiacritics(name);
    let words = myName.split(" ");
    let sum = 0;
    words.forEach(el => {
        let wordNum = changeToNum(splitName(el));
        let wordSum = caculateNumArray(wordNum);
        while (wordSum > 9) {
            if (wordSum === 11 || wordSum === 22 || wordSum === 33) {
                break;
            }
            else {
                wordSum = numCaculate(wordSum);
            }
        }
        sum += wordSum;
    });
    let result = numCaculate(sum);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;
}
//SU MENH 

function lienKet(num1, num2) {
    num1 = numshortCut2(num1);
    num2 = numshortCut2(num2);
    let result = Math.abs(num1 - num2);
    return result;
}

//linh hồn 5
function linhHon(firstName, lastName) {
    let myName = firstName + " " + lastName;
    let nameVowel = getChar(myName).vowel;
    let arrNum = changeToNum(nameVowel);
    let result = caculateNumArray(arrNum);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;
}

// ngay sinh  6

function ngaySinh(day) {
    let result = numCaculate(parseInt(day));
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;
}
//nhan cach 7
function nhanCach(firstName, lastName) {
    let name = firstName + " " + lastName;
    let myName = removeDiacritics(name);

    let words = myName.split(" ");
    let sum = 0;
    words.forEach(element => {
        let consonantArr = getChar(element).consonant;
        let wordNum = changeToNum(consonantArr)
        let wordSum = caculateNumArray(wordNum);
        while (wordSum > 9) {
            if (wordSum === 11 || wordSum === 22 || wordSum === 33) {
                break;
            }
            else {
                wordSum = numCaculate(wordSum);
            }
        }
        sum += wordSum;

    });

    let result = numCaculate(sum);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;

}

//truong thanh 9
function truongThanh(num1, num2) {
    let result = numCaculate(num1 + num2);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;
}
//thiếu 10
function thieu(firstName, lastName) {
    let name = firstName + " " + lastName;
    let arrChar = splitName(name);
    let arrNum = changeToNum(arrChar);
    let result = [];
    for (let i = 1; i < 10; i++) {
        if (!arrNum.includes(i)) {
            result.push(i);
        }
    }
    return result;
}
//tu duy lt 11
function tuDuyLyTri(firstName, day) {

    let arrName = splitName(firstName);
    let dayNum = numCaculate(parseInt(day));
    let arrNum = changeToNum(arrName);
    let wordSum = caculateNumArray(arrNum);
    while (wordSum > 9) {
        if (wordSum === 11 || wordSum === 22 || wordSum === 33) {
            break;
        }
        else {
            wordSum = numCaculate(wordSum);
        }
    }

    let sum = dayNum + wordSum;

    let result = numCaculate(sum);
    if (result > 9 && result !== 11 && result !== 22 && result !== 33) { result = numCaculate(result) }
    return result;

}
//smtt 12
function sucManhTT(arr) {
    let SMTT = 9 - arr.length;
    return SMTT;
}
//dam me 13 
function damMe(firstName, lastName) {
    let myName = firstName + " " + lastName;
    let arrChar = splitName(myName);
    let arrNum = changeToNum(arrChar);
    let mostFrequentElement = [];
    let maxCount = 0;
    let elementCount = new Map();
    for (let i = 0; i < arrNum.length; i++) {
        const element = arrNum[i];
        let count = elementCount.get(element) || 0;
        count++;
        elementCount.set(element, count);
        if (count > maxCount && element !== 0) {
            maxCount = count;
            mostFrequentElement = [element];
        } else if (count === maxCount && element !== 0) {
            mostFrequentElement.push(element);
        }
    }
    return mostFrequentElement.sort();
}

//nam 14

function nam(day, month) {
    const now = new Date();
    const currentYear = now.getFullYear();
    let thisYearNum = numCaculate(currentYear);
    let myDay = parseInt(day);
    let myMonth = parseInt(month);
    while (myDay > 9) {
        myDay = numCaculate(myDay);
    }

    while (myMonth > 9) {
        myMonth = numCaculate(myMonth);
    }

    while (thisYearNum > 9) {
        thisYearNum = numCaculate(thisYearNum);
    }
    let result = numCaculate(myDay + myMonth+thisYearNum);
    if (result > 9) { result = numCaculate(result) }
    return result;
}

// chặng 16
function chan(day, month, year) {
    let intDay = numshortCut(parseInt(day));
    let intMonth = numshortCut(parseInt(month));
    let intYear = numshortCut(parseInt(year));
    let sum1 = intDay + intMonth;
    let sum2 = intDay + intYear;

    let sum4 = intMonth + intYear;
    if (sum1 > 9 && sum1 !== 11 && sum1 !== 22 && sum1 !== 33) { sum1 = numCaculate(sum1); }
    if (sum2 > 9 && sum2 !== 11 && sum2 !== 22 && sum2 !== 33) { sum2 = numCaculate(sum2); }
    let sum3 = sum1 + sum2;
    if (sum3 > 9 && sum3 !== 11 && sum3 !== 22 && sum3 !== 33) { sum3 = numCaculate(sum3); }
    if (sum4 > 9 && sum4 !== 11 && sum4 !== 22 && sum4 !== 33) { sum4 = numCaculate(sum4); }
    return {
        chan1: sum1,
        chan2: sum2,
        chan3: sum3,
        chan4: sum4

    };
}
//thach thuc 17

function thachThuc(day, month, year) {
    let intDay = numshortCut2(parseInt(day));
    let intMonth = numshortCut2(parseInt(month));
    let intYear = numshortCut2(parseInt(year));
    let sum1 = Math.abs(intMonth - intDay);
    let sum2 = Math.abs(intDay - intYear);
    let sum3 = Math.abs(sum1 - sum2);
    let sum4 = Math.abs(intYear - intMonth);
    return { tt1: sum1, tt2: sum2, tt3: sum3, tt4: sum4 };
}
function valid(firstName, lastName, day, month, year) {
    const nameRegex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const dayRegex = /^(0?[1-9]|[1-2]\d|3[0-1])$/;
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    const yearRegex = /^\d{4}(\d{4})?$/;
    let flag= true;
    let error="";
    if (!nameRegex.test(firstName)) {
        error+="<p>Tên không hợp lệ!</p>";
        flag=false;
    }
    if (!nameRegex.test(lastName)) {
        error+="<p>Họ Không hợp lệ!</p>";
        flag=false;
    }
    if (!dayRegex.test(day)) {
        error+="<p>Ngày sinh không hợp lệ!</p>";
        flag=false;
    }
    if (!monthRegex.test(month)) {
        error+="<p>Tháng không hợp lệ!</p>";
        flag=false;
    }
    if (!yearRegex.test(year)) {
        error+="<p>Năm không hợp lệ!</p>";
        flag=false;
    }
    error_block.innerHTML=error;
    error_block.style.display="block";
    // console.log(error);
        return flag;
}