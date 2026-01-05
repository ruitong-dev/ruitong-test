// Cat data
const cats = [
    {
        id: 1,
        name: "Luna",
        breed: "Persian",
        emoji: "🐱",
        description: "Elegant and calm, Persian cats are known for their luxurious long coats and sweet personalities. Perfect for a quiet home.",
        coat: "Long Hair",
        temperament: "Calm",
        size: "Medium",
        lifespan: "12-17 years",
        tags: ["long-hair", "hypoallergenic"]
    },
    {
        id: 2,
        name: "Max",
        breed: "British Shorthair",
        emoji: "😺",
        description: "Stocky build with a round face and dense coat. British Shorthairs are easygoing and adapt well to family life.",
        coat: "Short Hair",
        temperament: "Gentle",
        size: "Large",
        lifespan: "12-20 years",
        tags: ["short-hair"]
    },
    {
        id: 3,
        name: "Milo",
        breed: "Maine Coon",
        emoji: "🦁",
        description: "Gentle giants with tufted ears and bushy tails. Maine Coons are friendly, intelligent, and great with children.",
        coat: "Long Hair",
        temperament: "Friendly",
        size: "Large",
        lifespan: "12-15 years",
        tags: ["long-hair", "playful"]
    },
    {
        id: 4,
        name: "Bella",
        breed: "Siamese",
        emoji: "😸",
        description: "Vocal and social, Siamese cats are known for their striking blue eyes and color-pointed coats. They love attention!",
        coat: "Short Hair",
        temperament: "Social",
        size: "Medium",
        lifespan: "15-20 years",
        tags: ["short-hair", "playful"]
    },
    {
        id: 5,
        name: "Charlie",
        breed: "Bengal",
        emoji: "🐆",
        description: "Wild-looking with leopard-like spots, Bengals are active and playful. They need plenty of mental stimulation.",
        coat: "Short Hair",
        temperament: "Active",
        size: "Medium-Large",
        lifespan: "12-16 years",
        tags: ["short-hair", "playful"]
    },
    {
        id: 6,
        name: "Daisy",
        breed: "Ragdoll",
        emoji: "🧸",
        description: "Large and docile, Ragdolls go limp when picked up (hence the name). They're affectionate and perfect lap cats.",
        coat: "Long Hair",
        temperament: "Docile",
        size: "Large",
        lifespan: "12-17 years",
        tags: ["long-hair", "hypoallergenic"]
    },
    {
        id: 7,
        name: "Oliver",
        breed: "Scottish Fold",
        emoji: "🦉",
        description: "Distinctive folded ears and round eyes give them an owl-like appearance. They're sweet, calm, and adapt well.",
        coat: "Short/Long Hair",
        temperament: "Calm",
        size: "Medium",
        lifespan: "11-15 years",
        tags: ["short-hair"]
    },
    {
        id: 8,
        name: "Lily",
        breed: "Sphynx",
        emoji: "👽",
        description: "Hairless and wrinkled, Sphynx cats are warm to the touch and very affectionate. They're like warm peaches!",
        coat: "Hairless",
        temperament: "Affectionate",
        size: "Medium",
        lifespan: "13-15 years",
        tags: ["hypoallergenic", "playful"]
    },
    {
        id: 9,
        name: "Tiger",
        breed: "American Shorthair",
        emoji: "🐯",
        description: "Hardy and good-natured, American Shorthairs are excellent family pets. They're healthy and easy to care for.",
        coat: "Short Hair",
        temperament: "Good-natured",
        size: "Medium",
        lifespan: "15-20 years",
        tags: ["short-hair"]
    },
    {
        id: 10,
        name: "Sophie",
        breed: "Norwegian Forest Cat",
        emoji: "🌲",
        description: "Large, strong cats with water-repellent coats. They're independent but friendly, perfect for cooler climates.",
        coat: "Long Hair",
        temperament: "Independent",
        size: "Large",
        lifespan: "14-16 years",
        tags: ["long-hair"]
    },
    {
        id: 11,
        name: "Leo",
        breed: "Russian Blue",
        emoji: "💎",
        description: "Stunning silver-blue coat with emerald green eyes. Russian Blues are shy with strangers but loyal to their family.",
        coat: "Short Hair",
        temperament: "Reserved",
        size: "Medium",
        lifespan: "15-20 years",
        tags: ["short-hair", "hypoallergenic"]
    },
    {
        id: 12,
        name: "Zoe",
        breed: "Abyssinian",
        emoji: "🏃",
        description: "Active and curious, Abyssinians love to climb and explore. Their ticked coat gives them a wild appearance.",
        coat: "Short Hair",
        temperament: "Active",
        size: "Medium",
        lifespan: "12-15 years",
        tags: ["short-hair", "playful"]
    }
];

// DOM Elements
const catalogueGrid = document.getElementById('catalogue');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCats(cats);
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterAndRender();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterAndRender();
        });
    });
}

// Filter and render cats
function filterAndRender() {
    let filteredCats = cats;

    // Apply search filter
    if (searchQuery) {
        filteredCats = filteredCats.filter(cat =>
            cat.name.toLowerCase().includes(searchQuery) ||
            cat.breed.toLowerCase().includes(searchQuery) ||
            cat.description.toLowerCase().includes(searchQuery)
        );
    }

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredCats = filteredCats.filter(cat =>
            cat.tags.includes(currentFilter)
        );
    }

    renderCats(filteredCats);
}

// Render cat cards
function renderCats(catsToRender) {
    if (catsToRender.length === 0) {
        catalogueGrid.innerHTML = `
            <div class="no-results">
                <h2>🐾 No cats found</h2>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    catalogueGrid.innerHTML = catsToRender.map(cat => `
        <div class="cat-card">
            <div class="cat-image">
                ${cat.emoji}
            </div>
            <div class="cat-info">
                <h2 class="cat-name">${cat.name}</h2>
                <div class="cat-breed">${cat.breed}</div>
                <p class="cat-description">${cat.description}</p>
                <div class="cat-tags">
                    ${cat.tags.map(tag => `<span class="tag">${formatTag(tag)}</span>`).join('')}
                </div>
                <div class="cat-details">
                    <div class="detail-item">
                        <span class="detail-label">Coat</span>
                        <span class="detail-value">${cat.coat}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Temperament</span>
                        <span class="detail-value">${cat.temperament}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Size</span>
                        <span class="detail-value">${cat.size}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Lifespan</span>
                        <span class="detail-value">${cat.lifespan}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Format tag for display
function formatTag(tag) {
    return tag.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
