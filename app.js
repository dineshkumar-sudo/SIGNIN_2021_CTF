const answer = ["8.8.8.8", "4D454E4F4E","menon","MENON","7769787978","monkey","kongu convention center","abdul kalam","apj","vodafone","etisalat","rilachandrupranauvkiruthika", "Without any noise, please leave the hall. Thank you"];
//page variable
var i = 1;
let result=0;
var score = 10;
var totalScore = 0;





function liveScore(hintNumber)
{
    if(hintNumber == 'h1')
    {
        score-=2;
        console.log("score "+score)
        document.getElementById('LiveScore'+i).innerText = score;
        // document.getElementById("b1").disabled
        const button = document.getElementById(i+"h1");
        button.disabled="true";
        const button1 = document.getElementById(i+"h2");
           button1.disabled="";      

    }
    else if(hintNumber == 'h2')
    {
        score-=3;
        console.log(score);
        document.getElementById('LiveScore'+i).innerText = score;
        // document.getElementsByClassName('hint2')[0].style.disable = "true";
        const button = document.getElementById(i+"h2");
        button.disabled="true";
    }
    else if(hintNumber == 'h3')
    {
        score-=4;
        console.log(score);
        document.getElementsByClassName('LiveScore')[0].innerHTML = score;
        // document.getElementsByClassName('hint2')[0].style.disable = "true";
        const button = document.getElementById("b3");
        button.disabled="true";
    }
}


/* function starter()
{
    let score = 10;
} */


function validatedata(cls)
{
    const name = document.getElementById(cls).value;
   /* const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;
    const name5 = document.getElementById("name5").value;
    const name6 = document.getElementById("name6").value;
    const name7 = document.getElementById("name7").value;
    const name8 = document.getElementById("name8").value;
    const name9 = document.getElementById("name9").value;
    const name10 = document.getElementById("name10").value;*/

    
    /* if (name1 == "" || name2 == "" || name3 == "" || name4 == "" ||name5 == "" || name6 == "" || name7 == "" || name8 == "" || name9 == "" ||name10 == "")
    {
        alert("your box is empty");

    } */
    
        if(answer.indexOf(name) !== -1)  
        {  
            alert("Hurray!  you have Captured a Flag , Please enter OK to continue");   
            totalScore += parseInt(document.getElementById("LiveScore" + i).innerText);
            document.getElementById("next").click();
                
        } 
      
        else{

            alert("Retry");
        }

    }

    



function firstHint(id)
{
    
    if(id== "1h1")
    {
        document.getElementsByClassName('hint1')[0].innerHTML = "The one who knows everything";
        liveScore("h1");
    }
    else if(id == "2h1")
    {
        console.log("inside else if id = 2h2");
        document.getElementsByClassName('2hint1')[0].innerText = "Can be divided into decimal,hexadecimal or alphabet";
        liveScore("h1");
    }
    else if(id == "3h1")
    {
        document.getElementsByClassName('3hint1')[0].innerHTML = " Decrypted image is present in this site ";
        liveScore("h1");
    }
    else if(id == "4h1")
    {
        document.getElementsByClassName('4hint1')[0].innerHTML = "Arithmatic operations wont give any results.";
        liveScore("h1");
    }
    else if(id == "5h1")
    {
        document.getElementsByClassName('5hint1')[0].innerHTML = "add or subtract the letters with some numerical values";
        liveScore("h1");
    }
    else if(id == "6h1")
    {
        document.getElementsByClassName('6hint1')[0].innerHTML = "It's a social media link";
        liveScore("h1");
    }
    else if(id == "7h1")
    {
        document.getElementsByClassName('7hint1')[0].innerHTML = " It's a phone number";
        liveScore("h1");
    }
    else if(id == "8h1")
    {
        document.getElementsByClassName('8hint1')[0].innerHTML = "A kind of language used in thala 57";
        liveScore("h1");
    }
    else if(id == "9h1")
    {
        document.getElementsByClassName('9hint1')[0].innerHTML = "hint1";
        liveScore("h1");
    }
    else if(id == "10h1")
    {
        document.getElementsByClassName('10hint1')[0].innerHTML = "hint1";
        liveScore("h1");
    }
    
}

function secondHint(id)
{
    if(id== "1h2")
    {
        document.getElementsByClassName('hint2')[0].innerHTML = "A service that we daily use.";
        liveScore("h2");
    }
    else if(id == "2h2")
    {
        document.getElementsByClassName('2hint2')[0].innerHTML = "divide into 8 bit format";
        liveScore("h2");
    }
    else if(id == "3h2")
    {
        document.getElementsByClassName('3hint2')[0].innerHTML = "The link is present in the source code.";
        liveScore("h2");
    }
    else if(id == "4h2")
    {
        document.getElementsByClassName('4hint2')[0].innerHTML = " might be some place around you.";
        liveScore("h2");
    }
    else if(id == "5h2")
    {
        document.getElementsByClassName('5hint2')[0].innerHTML = "Try it with Caeser Cipher method";
        liveScore("h2");
    }
    else if(id == "6h2")
    {
        document.getElementsByClassName('6hint2')[0].innerHTML = "It's an insta image";
        liveScore("h2");
    }
    else if(id == "7h2")
    {
        document.getElementsByClassName('7hint2')[0].innerHTML = "https://drive.google.com/file/d/1vBHRYIfZ5xWU9ixkA9N0BSMJSpHVj1V2/view?usp=sharing";
        liveScore("h2");
    }
    else if(id == "8h2")
    {
        document.getElementsByClassName('8hint2')[0].innerHTML = "Remove the alphabets";
        liveScore("h2");
    }
    else if(id == "9h2")
    {
        document.getElementsByClassName('9hint2')[0].innerHTML = "hint2";
        liveScore("h2");
    }
    else if(id == "10h2")
    {
        document.getElementsByClassName('10hint2')[0].innerHTML = "hint2";
        liveScore("h2");
    }
}



function swapping(ans)
{
    
    /* let ans,ne; */
    /* ans = document.getElementById("prev"); */
    /* console.log(ans); */
    /* ne = document.getElementById("next");
    console.log(ne); */
    console.log("hai");
    if(i==8)
    {
        totalScore += parseInt(document.getElementById("LiveScore" + i).innerText);
        totalScore -= 10;
        alert("Thanking you Your Score is "+totalScore);
    }
    else{
    if(ans == "prev")
    {

        i--;
        /* if(i == 1)
        {
            document.getElementById("prev").style.display = "none";
        } */
        if(i == 10)
        {
            document.getElementById("next").style.display = "none";
        }
        /* if(i > 1 )
        {
            document.getElementById("prev").style.display = "inline-block";
        } */
        if(i < 10)
        {
            document.getElementById("next").style.display = "inline-block";
        }
        var ele = document.getElementsByClassName('form');
        for (var j = 0; j < ele.length; j++ ) 
        {
                ele[j].style.display = "none";
        }
        var x = document.getElementById(`${i}`);
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
     /*    if(i <= 10)
    {
        document.getElementById("next").style.display = "block";
    } */
        console.log(i);
    }
    else if(ans == "next")
    {
       
        console.log("Inside the else if "+ totalScore);
        i++;
        
        score = 10;

        /* if(i == 1)
        {
            document.getElementById("prev").style.display = "none";
        } */
        if(i == 8)
        {
            document.getElementById("next").innerText="Completed"
        }
        /* if(i > 1 )
        {
            document.getElementById("prev").style.display = "inline-block";
        } */
        if(i < 8)
        {
            document.getElementById("next").style.display = "inline-block";
        }
        var ele = document.getElementsByClassName('form');
        for (var j = 0; j < ele.length; j++ ) 
        {
                console.log(ele[j]);
                    ele[j].style.display = "none";
        }

        
            var x = document.getElementById(`${i}`);
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          
        
        console.log(i);
        var c = document.getElementById("LiveScore"+i);
        console.log("Class name "+c.innerText);
        c.innerText = 10;
    }
    


}
}


window.onload = (event) => {
    document.getElementsByClassName('LiveScore')[0].innerHTML = "10";
    console.log('page is fully loaded');
    console.log("File function called");

  };


  /* totalscore function */

