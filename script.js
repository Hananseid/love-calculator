const Match = document.getElementById('btn');
const result = document.getElementById('result');
const sayp = document.getElementById('say');

Match.onclick = () => {
  const loveScore = Math.floor(Math.random() * 100) + 1;

  function getMessage(score) {
    if (score === 100) {
      return 'Just get married 💍';
    } else if (score >= 80) {
      return 'You Guys are meant to be together 💖';
    } else if (score > 50) {
      return 'You Guys are a Good Match 😊';
    } else {
      return 'Find Someone Else 😅';
    }
  }

  result.textContent = `Your Love score is ${loveScore}% 💖`;
  sayp.textContent = getMessage(loveScore);
};
