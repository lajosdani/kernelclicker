let computingPower = 0;
let money = 0;
let energy = 0;
let reputation = 0;

// Computation Power Upgrades
const computationUpgrades = [
    "Intel 4004", "Intel 8086", "Pentium III", "AMD Athlon 64", "Intel Core 2 Duo",
    "Intel i7-2600K", "AMD Ryzen 7 3700X", "Apple M1", "Quantum Core X1", "Neural Compute Unit",
    "AI Supercomputer", "Quantum Grid Node", "Holographic Processor", "Exascale Server",
    "DNA Quantum Hybrid", "Singularity Core", "Neural AI Cluster", "Planetary Compute Hub",
    "Dark Matter Processor", "Galactic Neural Mesh", "Dimensional Core", "Reality Engine",
    "Omniversal Compute Node", "ChronoSync Processor", "Eternity Grid", "Omega AI Kernel",
    "HyperCube CPU", "Subspace Server", "Void Core", "Singularity SingeDrive", "Infinity Engine",
    "Cosmic Neural Web", "Black Hole Supercomputer", "Multiversal Quantum Brain",
    "Godlike AI Kernel", "AI Overseer", "Universal Data Core", "Ultimate Computing Singularity",
    "Beyond Reality Processor", "Absolute Intelligence Node", "Hyperdimensional Cloud",
    "True AI Consciousness", "Infinity Intelligence Grid", "Omnipotent Compute Hub",
    "Perfect Quantum Logic", "Endless Neural Machine", "Divine Compute Core",
    "Final Singularity Node", "Beyond Existence AI"
];

// Energy Source Upgrades
const energyUpgrades = [
    "Hand Crank Generator", "Coal Power Plant", "Diesel Generator", "Hydroelectric Dam",
    "Solar Panel", "Nuclear Reactor", "Fusion Reactor", "Antimatter Generator",
    "Dark Energy Core", "Zero-Point Module", "Quantum Singularity Reactor", "Neutrino Harvesting",
    "Black Hole Extractor", "Dyson Sphere Segment", "Dyson Swarm", "Galactic Power Grid",
    "Stellar Fusion Extractor", "Wormhole Energy Tap", "Chrono Energy Harvester",
    "Gravitational Well Generator", "Cosmic Energy Extractor", "Dark Matter Forge",
    "Void Energy Absorber", "Interdimensional Power Core", "Eternal Energy Well",
    "Omega Power Core", "Subspace Energy Grid", "Reality Fabricator", "Tachyon Reactor",
    "Infinity Power Nexus", "Hyperdimensional Energy Collector", "Black Hole Singularity Tap",
    "Quantum Energy Drive", "Ultimate Cosmic Power Grid", "AI-Controlled Dyson Sphere",
    "Absolute Energy Machine", "Dimensional Rift Extractor", "Universe Battery",
    "Beyond Reality Energy Core", "True Omnipotent Power", "Final Cosmic Generator",
    "Infinity Energy Grid", "Singularity Power Source", "Ethereal Power Core",
    "Dark Universe Reactor", "Final Omniversal Energy Nexus", "All-Powerful Energy Singularity"
];

// Upgrade pricing function
function getUpgradeCost(base, level) {
    return Math.floor(base * Math.pow(1.5, level));
}

// Display upgrades
function displayUpgrades() {
    let upgradeDiv = document.getElementById("upgrades");
    upgradeDiv.innerHTML = "";

    computationUpgrades.forEach((name, index) => {
        let cost = getUpgradeCost(10, index);
        let button = document.createElement("button");
        button.className = "upgrade";
        button.innerHTML = `${name} - Cost: $${cost}`;
        button.onclick = () => buyUpgrade("computing", index, cost);
        upgradeDiv.appendChild(button);
    });

    energyUpgrades.forEach((name, index) => {
        let cost = getUpgradeCost(15, index);
        let button = document.createElement("button");
        button.className = "upgrade";
        button.innerHTML = `${name} - Cost: $${cost}`;
        button.onclick = () => buyUpgrade("energy", index, cost);
        upgradeDiv.appendChild(button);
    });
}

// Buying upgrades
function buyUpgrade(type, index, cost) {
    if (money >= cost) {
        money -= cost;
        if (type === "computing") {
            computingPower += index + 1;
        } else if (type === "energy") {
            energy += index + 1;
        }
        displayUpgrades();
        updateStats();
    }
}

// Clicking for money
function earnMoney() {
    money += 1 + computingPower;
    updateStats();
}

// Updating the UI
function updateStats() {
    document.getElementById("computingPower").innerText = computingPower;
    document.getElementById("money").innerText = money;
    document.getElementById("energy").innerText = energy;
    document.getElementById("reputation").innerText = reputation;
}

// Initial UI setup
displayUpgrades();
updateStats();
