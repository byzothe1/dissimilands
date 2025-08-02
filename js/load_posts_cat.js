document.addEventListener('DOMContentLoaded', () => {
  fetch('../posts/posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      const container = document.getElementById('posts-container');
      // Use window.category, not a local variable
    //   console.log("window.category =", window.category);
    //   console.log("Loaded posts =", posts);
      const filteredPosts = window.category
        ? posts.filter(post => post.category === window.category)
        : posts;
    //   console.log("Filtered posts =", filteredPosts);
      filteredPosts.forEach(post => {
        const section = document.createElement('section');
        section.className = 'post-preview';
        section.innerHTML = `
          <h2><a href="../${post.path}">${post.title}</a></h2>
          <p>${post.excerpt}</p>
        `;
        container.appendChild(section);
      });
    })
    .catch(err => {
      console.error('Failed to load posts:', err);
    });
});