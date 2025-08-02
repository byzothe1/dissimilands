document.addEventListener('DOMContentLoaded', () => {
  fetch('posts/posts.json')
    .then(response => response.json())
    .then(posts => {
      // Sort posts by date descending (most recent first)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      const container = document.getElementById('posts-container');
      posts.forEach(post => {
        const section = document.createElement('section');
        section.className = 'post-preview';
        section.innerHTML = `
          <h2><a href="${post.path}">${post.title}</a></h2>
          <p>${post.excerpt}</p>
        `;
        container.appendChild(section);
      });
    })
    .catch(err => {
      console.error('Failed to load posts:', err);
    });
});