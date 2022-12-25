// Set frequency (in ms) to check whether content has been loaded
const TIMEOUT = 1000;
// Define the selector we use to find the chapter HTML elements
const CHAPTER_SELECTOR = ".chapterListItem";
// Declare variable that will hold the interval timer ID
var idleUntilLoaded;

// Function to get book chapters
function updateChapters() {
	let chapters = document.querySelectorAll(CHAPTER_SELECTOR);
        console.log("Got chapters", chapters);
	if (chapters.length < 2)
		return;

	// If we're here, we got chapters, so stop calling function
	clearInterval(idleUntilLoaded);

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
}

console.log("Waiting for chapters to load...");
// Keep calling function to get chapters until we get at least two
idleUntilLoaded = setInterval(updateChapters, TIMEOUT);
