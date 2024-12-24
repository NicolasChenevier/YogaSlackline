let poses = [
    {
        "name": "Sitting Pose",
        "difficulty": 1,
        "photo": "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        "category": "sit"
    },
    {
        "name": "Standing Pose",
        "difficulty": 2,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Man_on_a_slackline.jpg/1280px-Man_on_a_slackline.jpg",
        "category": "both feet"
    },
    {
        "name": "One Leg Stand",
        "difficulty": 3,
        "photo": "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        "category": "both feet"
    },
    {
        "name": "Handstand",
        "difficulty": 4,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Man_on_a_slackline.jpg/1280px-Man_on_a_slackline.jpg",
        "category": "2 hands"
    },
    {
        "name": "Backbend",
        "difficulty": 5,
        "photo": "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        "category": "back"
    },
    {
        "name": "Shoulder Stand",
        "difficulty": 4,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Man_on_a_slackline.jpg/1280px-Man_on_a_slackline.jpg",
        "category": "shoulder"
    },
    {
        "name": "Buddhasana",
        "difficulty": 3,
        "photo": "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg",
        "category": "1 foot 1 hand"
    },
    {
        "name": "Plank Pose",
        "difficulty": 2,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Man_on_a_slackline.jpg/1280px-Man_on_a_slackline.jpg",
        "category": "2 hands"
    }
];

const poseList = document.getElementById('pose-list');
const searchBar = document.getElementById('search-bar');
const difficultyFilter = document.getElementById('difficulty');
const categoryFilter = document.getElementById('category');

displayPoses(poses);

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredPoses = filterPoses(searchTerm, difficultyFilter.value, categoryFilter.value);
    displayPoses(filteredPoses);
});

difficultyFilter.addEventListener('change', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredPoses = filterPoses(searchTerm, difficultyFilter.value, categoryFilter.value);
    displayPoses(filteredPoses);
});

categoryFilter.addEventListener('change', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredPoses = filterPoses(searchTerm, difficultyFilter.value, categoryFilter.value);
    displayPoses(filteredPoses);
});

function filterPoses(searchTerm, difficulty, category) {
    return poses.filter(pose => {
        return pose.name.toLowerCase().includes(searchTerm) &&
               (difficulty === '' || pose.difficulty === parseInt(difficulty)) &&
               (category === '' || pose.category === category);
    });
}

function displayPoses(poses) {
    poseList.innerHTML = '';
    poses.forEach(pose => {
        const poseCard = document.createElement('div');
        poseCard.classList.add('pose-card');
        poseCard.innerHTML = `
            <img src="${pose.photo}" alt="${pose.name}">
            <h3>${pose.name}</h3>
            <p>Difficulty: ${pose.difficulty}</p>
            <p>Category: ${pose.category}</p>
        `;
        poseList.appendChild(poseCard);
    });
}
