var scoreCount = 15;//幾則評價
var currentPage=1;//目前頁數
var firstPage=1;//第一頁
var lastPage = 5;//最後一頁

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
}

function appendScoreElement()
{
    var p;
    p=document.createElement("p");
    p.textContent=scoreCount;
    var score_block = document.getElementsByClassName("index__article__score")[0];
    score_block.appendChild(p);

    scoreCount++;
    document.getElementById("index__article__score-count").textContent
    ="共"+scoreCount.toString()+"筆評價，第" + currentPage.toString() + "頁";


    
}