var scoreCount = 0;//幾則評價
var currentPage = 1;//目前頁數
var firstPage = 1;//第一頁
var lastPage = 1;//最後一頁
var scoreArr=[];//評價陣列
var scoreItem=['id','name','phone','email','dish','other'];

$(document).ready(function(){
        
    $("#index__article__score__first-page").click(function()
    {
        currentPage = firstPage;
        update();
    });

    $("#index__article__score__previous-page").click(function()
    {
        if(currentPage > 1)
        {
            currentPage--;
        }
        update();
    });

    $("#index__article__score__next-page").click(function()
    {
        if(currentPage < lastPage)
        {
            currentPage++;
        }
        update();
    });

    $("#index__article__score__last-page").click(function()
    {
        currentPage=lastPage;
        update();
    });    
});

function update()
{
    $("#index__article__score__current-page")[0].textContent = currentPage.toString();
    showScore();
}

function getScore()//從網頁撈資料
{
    $.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=dXkY1PXnu9gf1G96WZWtylBqSMIWwTvgKxiEZa3_TDDPBVrv4AUz6PxZGNYVfmPUw_5spayZS7BCPGjkkU45kvO_qgbTezvKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnI5daHpPPSKjQlPBWY9WuMUWHu9M7EOUWaSTcCMfOmyJy4P8aAIol9j21qbmr1esBycS1-3f5PS4&lib=MS_5mHCSVnuP__4TSP99mV2uMxfb3m1Vb",function(data)
    {
            var len=data.length;
            for(var i = 0;i<len;i++)
            {                
                scoreArr.push(data[i]);//評分陣列增加一筆資料
                if(scoreCount < 5)//一頁只顯示五筆
                {
                   appendScoreElement(data[i].id,data[i].name,data[i].phone,data[i].email,data[i].dish,data[i].other);
                }
                scoreCount++;//評分數量增加

                
                    
                if((scoreCount - 1) % 5 == 0 && scoreCount > 5)//超過五筆增加頁面，每五筆增加一次
                {
                    lastPage++;
                    document.getElementById("index__article__score__last-page").textContent="第"+lastPage.toString()+"頁";
                }
                document.getElementById("index__article__score-count").textContent
                ="共"+scoreCount.toString()+"筆評價";
                
            }

    });
}

function appendScoreElement(id,name,phone,email,dish,other)
{    
    var table = document.getElementById("index__article__score-table");

    var newTr=document.createElement('tr');
    
    for(var i = 0;i<6;i++)
    {
        var newTd = document.createElement('td');

        switch(i)
        {
            case 0:
                newTd.appendChild(document.createTextNode(id));
            break;
            
            case 1:
                newTd.appendChild(document.createTextNode(name));
            break;
            
            case 2:
                newTd.appendChild(document.createTextNode(phone));
            break;
            
            case 3:
                newTd.appendChild(document.createTextNode(email)); 
            break;
            
            case 4:
                newTd.appendChild(document.createTextNode(dish));
            break;
            
            case 5:
                newTd.appendChild(document.createTextNode(other));
            break;
        }
        newTr.appendChild(newTd);
    }

    table.appendChild(newTr);
}

function showScore()
{
    var score_table = document.getElementById("index__article__score-table");
    
    for(var i = scoreCount % 5;i<5;i++)
    {
        for(var j = 0;j<6;j++)
        {
            score_table.rows[i+1].cells[j].textContent = "";
        }
    }

    for(var i = 0;i<score_table.rows.length;i++)
    {
        for(var j = 0;j<6;j++)
        {
            score_table.rows[i+1].cells[j].textContent = scoreArr[5*(currentPage-1)+i][scoreItem[j]];
        }  
    }

    
    
}