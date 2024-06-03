document.addEventListener('DOMContentLoaded', () => {
  const newsSection = document.getElementById('news-section');

  // Function to fetch news articles based on category
  const fetchNews = async (category) => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=YOUR_API_KEY`);
      const data = await response.json();
      return data.articles;
  };

  // Function to display news articles on the page
  const displayNews = async (category) => {
      newsSection.innerHTML = ''; // Clear existing news articles
      const articles = await fetchNews(category);
      articles.forEach(article => {
          const articleElement = `
              <article>
                  <h2>${article.title}</h2>
                  <p>${article.description}</p>
                  <a href="${article.url}" target="_blank">Read more</a>
              </article>
          `;
          newsSection.innerHTML += articleElement;
      });
  };

  // Event listeners for navigation links
  document.getElementById('home-link').addEventListener('click', () => displayNews('general'));
  document.getElementById('world-link').addEventListener('click', () => displayNews('world'));
  document.getElementById('politics-link').addEventListener('click', () => displayNews('politics'));
  document.getElementById('business-link').addEventListener('click', () => displayNews('business'));
  document.getElementById('sports-link').addEventListener('click', () => displayNews('sports'));

  // Display initial news on page load
  displayNews('general');
});
