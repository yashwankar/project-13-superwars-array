const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    players.map((p,i) => {
        let agent={};
        agent.name=p;
        agent.strength = getRandomStrength();
        agent.image = `images/super-${i + 1}.png`;
        agent.type = (i % 2 != 0) ? "hero" : "villain";
        detailedPlayers.push(agent);
    });

    return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Using chaining of Array methods - filter, map and join
    let fragment = players.filter((p) => p.type === type);
    let card = fragment.map((p) => {
        return `
        <div class="player">
            <img src="${p.image}" alt="">
            <div class="name">${p.name}</div>
            <div class="strength">${p.strength}</div>
        </div>`}).join("");
    return card;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}