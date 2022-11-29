// Set frequency (in ms) to check whether content has been loaded
const TIMEOUT = 1000;
// Define the selector we use to find the chapter HTML elements
const CHAPTER_SELECTOR = ".chapterListItem";

// Function to get book chapters (wait if content hasn't been loaded, yet)
function getChapters() {
	console.log("Waiting for chapters to load...");
	let chapters = document.querySelectorAll(CHAPTER_SELECTOR);
	// If no chapters are loaded, yet, call function again after TIMEOUT
	if (chapters.length < 1)
		return setTimeout(getChapters, TIMEOUT);
	// Else, return the chapters, we found
	return chapters;
}

let chapters = getChapters();
console.log("Got chapters", chapters);

// Change first chapter in print menu so that its last page is the last page of the last chapter
chapters[0].dataset["to"] = chapters[chapters.length/2 - 1].dataset["to"];
chapters[0].dataset["labelto"] = chapters[chapters.length/2 - 1].dataset["labelto"];
// Change label of first chapter in print menu
chapters[0].children[0].innerText = "Gesamtes Buch";

// Do the same thing for the chapter in download menu
chapters[chapters.length/2].dataset["to"] = chapters[chapters.length - 1].dataset["to"];
chapters[chapters.length/2].dataset["labelto"] = chapters[chapters.length - 1].dataset["labelto"];
// Change label of first chapter in download menu
chapters[chapters.length/2].children[0].innerText = "Gesamtes Buch";

console.log("Successfully updated first chapter to download entire book");
