class KernelClicker {
    constructor() {
        this.money = 0.0;
        this.computingPower = 1; // kHz
        this.energySource = 1;   // kW
        this.reputation = 0;     // Hírnév
        this.users = 0;          // Felhasználók száma
        this.running = true;

        // Computing Power fejlesztések (50 szint)
        this.computingUpgrades = [
            { name: "Intel Atom", power: 1, cost: 10 },
            { name: "Intel Core2Duo", power: 5, cost: 50 },
            { name: "AMD Ryzen 3", power: 20, cost: 200 },
            { name: "Intel i5", power: 100, cost: 1000 },
            { name: "AMD Ryzen 5", power: 500, cost: 5000 },
            { name: "Intel i7", power: 2000, cost: 20000 },
            { name: "AMD Ryzen 7", power: 10000, cost: 100000 },
            { name: "Intel i9", power: 50000, cost: 500000 },
            { name: "AMD Ryzen 9", power: 200000, cost: 2000000 },
            { name: "AMD Threadripper", power: 1000000, cost: 10000000 },
            { name: "IBM Power10", power: 5000000, cost: 50000000 },
            { name: "NVIDIA Grace CPU", power: 20000000, cost: 200000000 },
            { name: "Google TPU v4", power: 100000000, cost: 1000000000 },
            { name: "Quantum Chip v1", power: 500000000, cost: 5000000000 },
            { name: "Quantum Chip v2", power: 2000000000, cost: 20000000000 },
            { name: "Neural Processor", power: 10000000000, cost: 100000000000 },
            { name: "Photonic CPU", power: 50000000000, cost: 500000000000 },
            { name: "DNA Computing Unit", power: 200000000000, cost: 2000000000000 },
            { name: "Singularity Processor", power: 1000000000000, cost: 10000000000000 },
            { name: "Planck Computing Core", power: 5000000000000, cost: 50000000000000 },
            { name: "Hyper-Threaded Quantum Core", power: 20000000000000, cost: 200000000000000 },
            { name: "Exascale Neural Network", power: 100000000000000, cost: 1000000000000000 },
            { name: "Galactic Supercomputer", power: 500000000000000, cost: 5000000000000000 },
            { name: "Interdimensional Processor", power: 2000000000000000, cost: 20000000000000000 },
            { name: "Omniscient AI Core", power: 10000000000000000, cost: 100000000000000000 },
            { name: "Cosmic Brain", power: 50000000000000000, cost: 500000000000000000 },
            { name: "Universal Consciousness", power: 200000000000000000, cost: 2000000000000000000 },
            { name: "Infinity Processor", power: 1000000000000000000, cost: 10000000000000000000 },
            { name: "Eternity Engine", power: 5000000000000000000, cost: 50000000000000000000 },
            { name: "Godlike Computing Unit", power: 20000000000000000000, cost: 200000000000000000000 },
            { name: "Omnipotent Core", power: 100000000000000000000, cost: 1000000000000000000000 },
            { name: "Reality Fabricator", power: 500000000000000000000, cost: 5000000000000000000000 },
            { name: "Multiversal Processor", power: 2000000000000000000000, cost: 20000000000000000000000 },
            { name: "Timeless Computing Unit", power: 10000000000000000000000, cost: 100000000000000000000000 },
            { name: "Infinite Loop Engine", power: 50000000000000000000000, cost: 500000000000000000000000 },
            { name: "Absolute Zero Processor", power: 200000000000000000000000, cost: 2000000000000000000000000 },
            { name: "Singularity Core", power: 1000000000000000000000000, cost: 10000000000000000000000000 },
            { name: "Omniverse Processor", power: 5000000000000000000000000, cost: 50000000000000000000000000 },
            { name: "Eternal Computing Unit", power: 20000000000000000000000000, cost: 200000000000000000000000000 },
            { name: "Infinity² Processor", power: 100000000000000000000000000, cost: 1000000000000000000000000000 },
            { name: "Ultimate Reality Engine", power: 500000000000000000000000000, cost: 5000000000000000000000000000 },
            { name: "God Core", power: 2000000000000000000000000000, cost: 20000000000000000000000000000 },
            { name: "Omnipotent Singularity", power: 10000000000000000000000000000, cost: 100000000000000000000000000000 },
            { name: "Infinite Power Processor", power: 50000000000000000000000000000, cost: 500000000000000000000000000000 },
            { name: "Absolute Infinity Core", power: 200000000000000000000000000000, cost: 2000000000000000000000000000000 },
            { name: "The Final Processor", power: 1000000000000000000000000000000, cost: 10000000000000000000000000000000 },
        ];

        // Power Source fejlesztések (50 szint)
        this.powerUpgrades = [
            { name: "PSU 300W", power: 1, cost: 5 },
            { name: "BeQuiet 600W", power: 5, cost: 30 },
            { name: "Corsair Platinum 1000W", power: 20, cost: 150 },
            { name: "EVGA SuperNOVA 1600W", power: 100, cost: 1000 },
            { name: "Solar Array", power: 500, cost: 5000 },
            { name: "Wind Turbine", power: 2000, cost: 20000 },
            { name: "Nuclear Reactor", power: 10000, cost: 100000 },
            { name: "Fusion Reactor v1", power: 50000, cost: 500000 },
            { name: "Fusion Reactor v2", power: 200000, cost: 2000000 },
            { name: "Antimatter Generator", power: 1000000, cost: 10000000 },
            { name: "Dyson Sphere Segment", power: 5000000, cost: 50000000 },
            { name: "Zero-Point Energy", power: 20000000, cost: 200000000 },
            { name: "Quantum Energy Core", power: 100000000, cost: 1000000000 },
            { name: "Singularity Reactor", power: 500000000, cost: 5000000000 },
            { name: "Black Hole Generator", power: 2000000000, cost: 20000000000 },
            { name: "Dark Matter Harvester", power: 10000000000, cost: 100000000000 },
            { name: "Cosmic String Tap", power: 50000000000, cost: 500000000000 },
            { name: "Multiversal Energy Link", power: 200000000000, cost: 2000000000000 },
            { name: "Omnipotent Power Core", power: 1000000000000, cost: 10000000000000 },
            { name: "Big Bang Replicator", power: 5000000000000, cost: 50000000000000 },
            { name: "Infinite Energy Source", power: 20000000000000, cost: 200000000000000 },
            { name: "Eternal Power Generator", power: 100000000000000, cost: 1000000000000000 },
            { name: "Galactic Power Grid", power: 500000000000000, cost: 5000000000000000 },
            { name: "Interdimensional Power Plant", power: 2000000000000000, cost: 20000000000000000 },
            { name: "Omniscient Energy Core", power: 10000000000000000, cost: 100000000000000000 },
            { name: "Cosmic Power Nexus", power: 50000000000000000, cost: 500000000000000000 },
            { name: "Universal Energy Matrix", power: 200000000000000000, cost: 2000000000000000000 },
            { name: "Infinity Power Source", power: 1000000000000000000, cost: 10000000000000000000 },
            { name: "Eternity Energy Core", power: 5000000000000000000, cost: 50000000000000000000 },
            { name: "Godlike Power Generator", power: 20000000000000000000, cost: 200000000000000000000 },
            { name: "Omnipotent Energy Core", power: 100000000000000000000, cost: 1000000000000000000000 },
            { name: "Reality Energy Fabricator", power: 500000000000000000000, cost: 5000000000000000000000 },
            { name: "Multiversal Power Grid", power: 2000000000000000000000, cost: 20000000000000000000000 },
            { name: "Timeless Energy Source", power: 10000000000000000000000, cost: 100000000000000000000000 },
            { name: "Infinite Loop Generator", power: 50000000000000000000000, cost: 500000000000000000000000 },
            { name: "Absolute Zero Power Core", power: 200000000000000000000000, cost: 2000000000000000000000000 },
            { name: "Singularity Energy Core", power: 1000000000000000000000000, cost: 10000000000000000000000000 },
            { name: "Omniverse Power Grid", power: 5000000000000000000000000, cost: 50000000000000000000000000 },
            { name: "Eternal Energy Source", power: 20000000000000000000000000, cost: 200000000000000000000000000 },
            { name: "Infinity² Power Core", power: 100000000000000000000000000, cost: 1000000000000000000000000000 },
            { name: "Ultimate Reality Energy", power: 500000000000000000000000000, cost: 5000000000000000000000000000 },
            { name: "God Power Core", power: 2000000000000000000000000000, cost: 20000000000000000000000000000 },
            { name: "Omnipotent Singularity Energy", power: 10000000000000000000000000000, cost: 100000000000000000000000000000 },
            { name: "Infinite Power Source", power: 50000000000000000000000000000, cost: 500000000000000000000000000000 },
            { name: "Absolute Infinity Energy", power: 200000000000000000000000000000, cost: 2000000000000000000000000000000 },
            {
