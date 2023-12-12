const paragraphs = document.getElementsByTagName("p");
let charCount = 0;
for (const paragraph of paragraphs) {
  let text = paragraph.innerText;
  charCount += text.length;
}

console.log(charCount);

let wordCount = charCount / 4.7;
console.log(wordCount);
let readingTime = Math.round(wordCount / 183);
console.log(readingTime);

const articleName = document.getElementById("firstHeading");
const badge = document.createElement("p");
badge.textContent = `⏱️ ${readingTime} min read`;
articleName.insertAdjacentElement("afterend", badge);
