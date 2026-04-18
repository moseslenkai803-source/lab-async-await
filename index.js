// Function to fetch posts from the external API
async function fetchPosts() {
  try {
    // Fetch data from the JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Parse the JSON response
    const posts = await response.json();
    
    // Display the posts
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to display posts on the page
function displayPosts(posts) {
  // Get the ul element with id 'post-list'
  const postList = document.getElementById('post-list');
  
  // Loop through the posts array
  posts.forEach((post) => {
    // Create an li element
    const li = document.createElement('li');
    
    // Create an h1 element for the title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create a p element for the body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul
    postList.appendChild(li);
  });
}

// Call fetchPosts when the page loads
fetchPosts();

