var scoreCount = 0;//幾則評價
var currentPage = 1;//目前頁數
var firstPage = 1;//第一頁
var lastPage = 1;//最後一頁
var scoreArr=[];//評價陣列

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
                var content="";
                content += "id:" + data[i]['id'] + ", name:" + data[i]['name']
                 + ", phone:" + data[i]['phone'] + ", email:" + data[i]['email']
                 + ", dish:" + data[i]['dish'] + ", other:" + data[i]['other'];
                 
                scoreArr.push(content);//評分陣列增加一筆資料
                scoreCount++;//評分數量增加

                if(scoreCount <= 5)//一頁只顯示五筆
                    appendScoreElement(content);
                    
                if((scoreCount - 1) % 5 == 0 && scoreCount > 5)//超過五筆增加頁面，每五筆增加一次
                {
                    lastPage++;
                    document.getElementById("index__article__score__last-page").textContent="第"+lastPage.toString()+"頁";
                }
                document.getElementById("index__article__score-count").textContent
                ="共"+scoreCount.toString()+"筆評價，第" + currentPage.toString() + "頁";
                
            }

    });
}

function appendScoreElement(data)
{
    var p = document.createElement("p");
    p.className="index__article__score";
    p.textContent = data;
    var score_block = document.getElementsByClassName("index__article__score-block")[0];
    score_block.appendChild(p);
}

function showScore()
{
    var scores = document.getElementsByClassName("index__article__score");
    for(var i = 0;i<5;i++)
    {
        scores[i].textContent = scoreArr[5*(currentPage-1)+i];
    }
}