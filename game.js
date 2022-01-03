window.onload = function()
{
    ball = document.getElementById("ball");
    score = 10;
    puan = document.getElementById("score");
    firstWindow = document.getElementById("firstWindow");
    window2 = document.getElementById("window2");
    start =  document.getElementById("start");
    rt = 3;
    function counter()
    {
        remainingTime = document.getElementById("remainingTime");
        remainingTime.innerHTML = rt;
        if(rt<=0)
        {
            lastWindow =  document.getElementById("lastWindow");
            window2.style.visibility = "hidden";
            lastWindow.style.visibility = "visible";
            gameOver = document.getElementById("gameOver");
            gameOver.innerHTML = "Game Over!! Your score: " + (score-10);
        }
        else
        {
            rt--;
        }
    }
    setInterval(counter,1000);
    start.onclick = function()
    {
        date = new Date()
        firstTime = date.getSeconds();
        firstWindow.style.visibility = "hidden";
        window2.style.visibility = "visible";
        randomX = Math.floor(Math.random()*450);
        randomY = Math.floor(Math.random()*450);
        ball.style.marginTop = randomY + "px";
        ball.style.marginLeft = randomX + "px";
    }
    ball.onclick = function()
    {
        randomX = Math.floor(Math.random()*450);
        randomY = Math.floor(Math.random()*450);
        ball.style.marginTop = randomY + "px";
        ball.style.marginLeft = randomX + "px";
        puan.innerHTML = "Score: " + score;
        date = new Date()
        lastTime = date.getSeconds();
        if(lastTime-firstTime >= 3)
        {
            lastWindow =  document.getElementById("lastWindow");
            window2.style.visibility = "hidden";
            lastWindow.style.visibility = "visible";
            gameOver = document.getElementById("gameOver");
            score -= 10;
            gameOver.innerHTML = "Game Over!! Your score: " + score;
        }
        else
        {
            firstTime = lastTime;
            score += 10; 
            rt = 3;
        }
    }
}