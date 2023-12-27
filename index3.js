let num5 = 0;
let num4n5 = 0;
let nummid = 0;
let num2 = 0;

let cell5 = '';
let cell4n5 = '';
let cellmid = '';
let cell2 = '';

let myform = document.getElementById('myform');
myform.addEventListener("submit", (e)=>
{
    e.preventDefault();

    
    let name1 = document.getElementById('studentname').value;
    let marks = [];
    marks.push(document.getElementById('mark1').value);
    marks.push(document.getElementById('mark2').value);
    marks.push(document.getElementById('mark3').value);
    marks.push(document.getElementById('mark4').value);
    marks.push(document.getElementById('mark5').value);

    if(marks[0]==5 && marks[1]==5 && marks[2]==5 &&
        marks[3]==5 && marks[4]==5)
    {
        num5++;
        document.getElementById('num5').innerHTML = num5;
        cell5+= name1 + '<br>';
        document.getElementById('cell5').innerHTML = cell5;
    }
    else if(marks[0]==2 || marks[1]==2 || marks[2]==2 ||
        marks[3]==2 || marks[4]==2)
    {
        num2++;
        document.getElementById('num2').innerHTML = num2;
        cell2+= name1 + '<br>';
        document.getElementById('cell2').innerHTML = cell2;
    }
    else if((marks[0]==5 || marks[0]==4) && (marks[1]==5 || marks[1]==4) &&
        (marks[2]==5 || marks[2]==4) &&(marks[3]==5 || marks[3]==4) &&
        (marks[4]==5 || marks[4]==4))
    {
        num4n5++;
        document.getElementById('num4n5').innerHTML = num4n5;
        cell4n5+= name1 + '<br>';
        document.getElementById('cell4n5').innerHTML = cell4n5;
    }
    else 
    {
        nummid++;
        document.getElementById('nummid').innerHTML = nummid;
        cellmid+= name1 + '<br>';
        document.getElementById('cellmid').innerHTML = cellmid;
    }

})