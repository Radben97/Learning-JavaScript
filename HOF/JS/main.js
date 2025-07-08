// higher order functions are those that take in functions as parametre and gives off a function
import { posts } from "./posts.js";

/* posts.forEach(post => { console.log(post); }); */ // acts like a for loop but without an iterator

const filteredPosts = posts.filter((post) => {
  return post.userId === 8;
});
console.log(filteredPosts);

const filteredMapped = filteredPosts.map((post) => {
  return post.id * 10;
});

console.log(filteredMapped);

const reducedPostsValue = filteredMapped.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
