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
        agent.type = i % 2 == 0 ? "hero" : "villain";
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
    let fragment = '';
    // Using chaining of Array methods - filter, map and join
    fragment=players.filter((p) => p.type == type).map((p,i) => {
        return `
        <div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
        </div>`}).join("");
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}