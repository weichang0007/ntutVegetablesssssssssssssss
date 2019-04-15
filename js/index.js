var scoreCount = 0;

function appendScoreElement()
{
    var p;
    p=document.createElement("p");
    p.textContent=scoreCount;
    var score_block = document.getElementsByClassName("index__article__score")[0];
    score_block.appendChild(p);

    scoreCount++;
    document.getElementById("index__article__score__count").textContent
    ="共"+scoreCount.toString()+"筆評價";
}