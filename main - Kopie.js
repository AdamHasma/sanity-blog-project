const outputTag = document.getElementById("output");
const apiUrl = "https://swojf974.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B%0A%09title%2C%0A%20%20slug%2C%0A%20%20tags%2C%0A%20%20author%2C%0A%20%20%22imageUrl%22%3A%20mainImage.asset-%3Eurl%2C%0A%20%20categories%2C%0A%20%20publishedAt%2C%0A%20%20body%0A%7D"

window.addEventListener("load", getPosts);

async function getPosts() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data.result);
  let output = `<h2>Posts</h2>`;
  for (let i = 0, len = data.result.length; i < len; i++) {
    output += `
    <a href="http://127.0.0.1:3000/frontend/${data.result[i].slug}">
    <div class="blog-container">
      <h1>Title: ${data.result[i].title}</h1>
      <p>Author: ${data.result[i].author}</p>
      <img class="blog-image" src="${data.result[i].imageUrl}">
    </div>
    </a>
  `;
    outputTag.innerHTML = output;
  }
};
// const query = `*[_type == "post"]{
// 	title,
//   slug,
//   tags,
//   author,
//   "imageUrl": mainImage.asset->url,
//   categories,
//   publishedAt,
//   body
// }`
