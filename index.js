    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const holes = document.getElementsByClassName('hole');
    const proffess = ['prof', 'prof2', 'prof3'];
    let gameInterval;
    let timerInterval;
    let timeLeft = 10;

    function updateTimerDisplay() {
      const timerDisplay = document.getElementById('timer');
      timerDisplay.textContent = `Time left: ${timeLeft}`;
    }


// Start Time  //////////////////////////////////////////
    function startTimer() {
      updateTimerDisplay();

      const timer = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
          clearInterval(timer);
          endGame();
        }
      }, 1000);
    }




// Start game fucntion ///////////////////////////////////////////
    function startGame() {
      // Reset the score and display
      score = 0;
      scoreDisplay.innerText = score;
      // Reset timeLeft to the original value
      timeLeft = 10; 

      // Clear any remaining professors from holes
      for (let hole of holes) {
        hole.classList.remove(...proffess);
      }


    clearInterval(gameInterval); // Clear the previous game interval if exists


      // Start the game interval again
      gameInterval = setInterval(function() {
        let choice = proffess[Math.floor(Math.random() * proffess.length)];
        const randomHoleIndex = Math.floor(Math.random() * holes.length);
        holes[randomHoleIndex].classList.toggle(choice);
      }, 300);

       startTimer(); // Start the timer when the game starts
    }



// Remove  ///////////////////////////////////////////
    function remove(event) {
      for (let i = 0; i < proffess.length; i++) {
        if (i === 0)
          event.remove('prof');
        else
          event.remove('prof' + (i + 1));
      }
    }


// End Game  //////////////////////////////////////////
    function endGame() {
      clearInterval(gameInterval);
      alert('Game Over! Your final score is ' + score);
    }

    const gameArea = document.getElementById('whack-a-prof');
    gameArea.addEventListener('click', function(clickEvent) {
      console.log(clickEvent.target.className);
      if (clickEvent.target.className.length > 4) {
        remove(clickEvent.target.classList);
        score++;
        scoreDisplay.innerText = score;

        if (score >= 30) {
          endGame();
        }
      }
    });

// Start Button //////////////////////////////////////////
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function() {
      startGame();
    });


// Start Game //////////////////////////////////////////
    // Start the game initially
    startGame();


  