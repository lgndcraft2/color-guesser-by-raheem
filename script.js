const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5",
    "#FFC300", "#C70039", "#900C3F", "#581845", "#1A5276", "#1E8449"
  ];
  
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('[data-testid="colorOption"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');
  

  let targetColor;
  let score = 0;
  
  
  function getRandomColors() {
            const shuffledColors = colors.sort(() => 0.5 - Math.random());
            return shuffledColors.slice(0, 6);
  }
  
  function startNewGame() {
        const randomColors = getRandomColors();
        targetColor = randomColors[Math.floor(Math.random() * 6)];
    
        colorBox.style.backgroundColor = targetColor;
    
        colorOptions.innerHTML = "";

        randomColors.forEach(color => {
                const button = document.createElement("button");
                button.style.backgroundColor = color;
                button.addEventListener("click", () => checkGuess(color));
                colorOptions.appendChild(button);
        });
        gameStatus.textContent = "";
  }
  
 
  function checkGuess(selectedColor) {
    if(selectedColor === targetColor){
            gameStatus.textContent = "Correct! 🎉";
            gameStatus.style.color = "green";
            score++;
            scoreElement.textContent = `Score: ${score}`;
            setTimeout(startNewGame, 1500);
    }else{
            gameStatus.textContent = "Wrong! Try again. 😢";
            gameStatus.style.color = "red";
    }
  }
  
  newGameButton.addEventListener("click", () => {
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    startNewGame();
  });
  
  startNewGame();