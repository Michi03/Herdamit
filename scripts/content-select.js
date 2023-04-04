const CHAPTER_SELECTOR = '#followingChapters';
const DOWNLOAD_BUTTON_CLASSES = ['toolbarButton'];
const DOWNLOAD_BUTTON_AREA_SELECTOR = '#toolbarViewerRight';
const CHAPTER_URL_PREFIX = 'https://content-select.com/media/display/';
const CHAPTER_URL_KEY = '#chapter=';

async function getChapterUrls() {
    console.log('Getting chapters...');
    let chapters = document.querySelector(CHAPTER_SELECTOR).children;
    let bookUrl = CHAPTER_URL_PREFIX + chapters[0].children[0].href.split('/')[5];
    let chapterUrls = [bookUrl];
    for (let i = 1; i < chapters.length; i++) {
    	let url = chapters[i].children[0].href;
        let id = url.split(CHAPTER_URL_KEY)[1].split('&')[0];
        chapterUrls.push(bookUrl + '/' + id);
    }
    console.log(`Got ${chapterUrls.length} chapters`);
    return chapterUrls;
}

async function mergeAllPDFs(urls) {   
    console.log('Starting book download');
    let pdfDoc = await PDFLib.PDFDocument.create();
    let numDocs = urls.length;
    
    for (let i = 0; i < numDocs; i++) {
        let donorPdfBytes = await fetch(urls[i]).then(res => res.arrayBuffer());
        let donorPdfDoc, docLength;
        try {
            donorPdfDoc = await PDFLib.PDFDocument.load(donorPdfBytes);
            docLength = donorPdfDoc.getPageCount();
        } catch(err) {
            console.log(err);
            return;
        }
        for (let k = 0; k < docLength; k++) {
            let [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
            console.log("Doc " + i + ", page " + k);
            pdfDoc.addPage(donorPage);
        }
    }

    let pdfData = await pdfDoc.save();
    return pdfData;
}

async function downloadPdf() {
	downloadButton.innerHTML = 'Das Buch wird runtergeladen, bitte einen Moment...';
	downloadButton.setAttribute('disabled', '');
	const chapterUrls = await getChapterUrls();
        const pdfData = await mergeAllPDFs(chapterUrls);
        if (!pdfData) {
            downloadButton.innerHTML = 'Irgendwas ist leider schief gelaufen :/';
            return;
        }
	// Create file with PDF content
        const pdfFile = new File([pdfData], document.title, {
            type: 'application/pdf',
        });

	// Download file
        const pdfLink = document.createElement('a');
        const pdfUrl = URL.createObjectURL(pdfFile);
        pdfLink.href = pdfUrl;
        pdfLink.download = pdfFile.name;
        document.body.appendChild(pdfLink);
        pdfLink.click();

	// Cleanup
        document.body.removeChild(pdfLink);
	window.URL.revokeObjectURL(pdfUrl);
	downloadButton.innerHTML = 'Download erfolgreich!';
}

console.log('Adding download button');
const downloadButton = document.createElement('button');
for (let i = 0; i < DOWNLOAD_BUTTON_CLASSES.length; i++) {
    downloadButton.classList.add(DOWNLOAD_BUTTON_CLASSES[i]);
}
downloadButton.style = 'width:15em';
downloadButton.addEventListener('click', downloadPdf, false);
downloadButton.innerHTML = "Gesamtes Buch runterladen";
document.querySelector(DOWNLOAD_BUTTON_AREA_SELECTOR).insertBefore(downloadButton, document.querySelector(DOWNLOAD_BUTTON_AREA_SELECTOR).firstChild);
