document.querySelectorAll('.more-games').forEach(games => {
    const gameIcon = document.createElement('div');

    const gameImg = games.getAttribute('data-game-img');
    const gameType = games.getAttribute('data-game-type');
    const gameName = games.getAttribute('data-game-name');

    gameIcon.innerHTML = `
    <div class = "game-container mx-2">
        <div class = "game-icon game-card-icon">
            <img class = "game-icon" src="${gameImg}" alt="">
        </div>
        <div class = "game-icon-info">
        <p class = "text-secondary">Apple Arcade</p>
            <h6>${gameName}</h6>
        </div>
        <div>
        <p>Games</p>
        </div>
    </div>
    `
    games.appendChild(gameIcon);
})

