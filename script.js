// Sample data for initial posts
let posts = [
    { username: 'user1', imageUrl: 'images/post1.jpg', likes: 10, comments: ['Nice pic!', 'Awesome!'] },
    { username: 'user2', imageUrl: 'images/post2.jpg', likes: 20, comments: ['Beautiful!', 'Love it!'] }
];

// Function to display posts
function displayPosts() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    posts.forEach(post => {
        const postElem = document.createElement('div');
        postElem.classList.add('post');
        postElem.innerHTML = `
            <p><strong>${post.username}</strong></p>
            <img src="${post.imageUrl}" alt="Post">
            <div class="likes">${post.likes} likes</div>
            <div class="comments">
                ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
            </div>
        `;
        timeline.appendChild(postElem);
    });
}

// Event listener for post button
document.getElementById('btnPost').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        // Here you would handle file upload to your server
        // For simplicity, let's just add a dummy post
        posts.push({ username: 'user3', imageUrl: URL.createObjectURL(file), likes: 0, comments: [] });
        displayPosts();
        fileInput.value = ''; // Clear file input
    }
});

// Event listener for logout button (dummy action)
document.getElementById('btnLogout').addEventListener('click', function() {
    alert('Logged out!');
    // You can redirect to a logout page or perform other actions here
});

// Display initial posts
displayPosts();
