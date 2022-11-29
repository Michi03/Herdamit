# Herdamit
Dieses kleine Programm ist dafür da, um das Herunterladen von Büchern im PDF-Format über besonder unkooperative Verläge (z.B. Felix Meiner) einfacher zu gestalten.
Hier werden sonst gewisse Umwege von den Studierenden gefordert, wie das Herunterladen einzelner Kapitel und anschließende manuelle Zusammenführen über PDF-Editoren.
Bis jetzt unterstützen wir die folgenden Verläge:

* [Felix Meiner Verlag](https://meiner-elibrary.de/)
* Ja lol, das war's schon... Kommt aber (vielleicht) bald mehr

## Installation
Das Wichtigste zuerst: wie installiere ich den Bums?
Ganz pauschal lässt sich das nicht beantworten, da es sich hier um eine [Browser-](https://de.wikipedia.org/wiki/Webbrowser)Erweiterung (bzw. *add-on* oder auch *extension*) handelt und die Installation von extensions je nach verwendetem Browser (die großen sind Firefox, Chrome und Safari[^1]) unterschiedlich verläuft.
***Herdamit*** wurde explizit entwickelt für Firefox und zusätzlich getestet für [Chromium](https://de.wikipedia.org/wiki/Chromium_(Browser)), sodass die extension auch unter allen entsprechenden Derivaten ([Google Chrome](https://de.wikipedia.org/wiki/Google_Chrome), [Microsoft Edge](https://de.wikipedia.org/wiki/Microsoft_Edge), [Opera](https://de.wikipedia.org/wiki/Opera_(Browser)), [Brave](https://de.wikipedia.org/wiki/Brave_(Browser)), etc.) funktionieren *sollte*.

### Firefox
Firefox-Nutzer:innen können sich glücklich schätzen.
Ihr könnt einfach [**hier**](https://github.com/Michi03/Herdamit/releases/download/1.1/cdecc117410c4eb1a757-1.1.xpi) klicken.
Ihr müsst dann einmal bestätigen, dass ihr das add-on installieren wollt und dann zustimmen, dass es auf "eure Daten" auf folgenden Seiten zugreifen darf.

* https://meiner-elibrary.de/viewer2.0/pdfviewer/index/viewer

Für weitere Informationen über Firefox-Erweiterungen würde ich euch einfach Mal an die entsprechende [Support-Seite](https://support.mozilla.org/de/kb/tipps-beurteilung-der-sicherheit-einer-erweiterung) verweisen.

[^1]: https://www.statista.com/statistics/543218/worldwide-internet-users-by-browser/

### Chromium (Chrome, Edge und co)
Aber auch unter Chromium, sowie Google Chrome, wie es bei anderen Chromium-basierten Browsern aussieht weiß ich leider nicht, ist der Installationsprozess nicht allzu kompliziert.
Ladet euch zunächst das [ZIP-Archiv](https://github.com/Michi03/Herdamit/archive/refs/tags/1.1.zip) runter und entpackt es irgendwo auf eurem Rechner.
Ihr müsst dann in die Browser-Einstellungen (Settings) kommen, was für gewöhnlich über die drei Punkte im oberen rechten Rand des Browser-Fensters funktioniert und von da aus zu Erweiterungen (Extensions) navigieren[^2].
*Wenn euch das zu kompliziert ist, solltet ihr auch einfach `chrome://extensions/` in die Adresszeile eingeben und Enter drücken können.*
Man muss dann oben rechts über den Slider den **Entwicklermodus** aktivieren.
Da sollte es dann einen Button **Entpackte Erweiterung laden** geben.
Da klickt ihr dann drauf und wählt das Verzeichnis aus, wohin ihr das ZIP-Archiv entpackt hattet.

Eine detailliertere entsprechende Anleitung gibt es auch nochmal [hier](https://support.google.com/chrome/a/answer/2714278?hl=de#:~:text=Rufen%20Sie%20chrome%3A%2F%2Fextensions,und%20w%C3%A4hlen%20Sie%20ihn%20aus.).

[^2]: https://support.google.com/chrome_webstore/answer/2664769?hl=de#cke_bm_1361S

### Safari
Keine Ahnung.
Sorry, ich bin kein Apple-Nutzer und ich nehme einfach Mal an, Apple lässt nur lizensierte Erweiterungen zu.
Davon kann man natürlich zunächst Mal halten, was man will.
Fall ihr selbst enthusiastische Coderin oder Coder seid, könnt ihr gerne eine Pull-Request erstellen :)

### Alles andere
Für alle weiteren Browser kann ich leider auch nichts sagen, aber ihr könnt einfach Mal versuchen, ob die unter [Chromium](#chromium-chrome-Edge-und-co) beschriebene Anleitung eventuell funktioniert.
Ansonsten müsst ihr leider selber aktiv werden (Repo gerne pullen) oder darauf warten, dass es jemand anderes wird.

## FAQ
Bzw. was ich mir vorstelle, was häufige Fragen/Probleme sein könnten (/werden):

### Willst Du mich hacken?
Wahrscheinlich nicht.
Ich hab damit auch keine Erfahrung, Indi... hm... Ehrenwort!
Misstrauen ist aber natürlich erstmal richtig und wichtig.
Insofern, solltest Du Dir diese Frage gestellt haben, sehr gut!
Ich erkläre etwas weiter unten auch ein bisschen ausführlicher, wie das add-on funktioniert, vielleicht reicht das ja schon, um Dein vertrauen zu gewinnen.
Ansonsten musst Du mich vielleicht privat anschreiben und wir treffen und Mal und schnacken ein bisschen, damit Du Dir selber ein Bild machen kannst, ob ich eine vertrauenswürdige Person bin.

### Was soll der Scheiß? Das funktioniert ja gar nicht!
Ja, vielleicht.
Zunächst überprüfe bitte, ob wir den Verlag über den Du ein Buch runterladen möchtest von dem add-on unterstützt wird.
Eine entsprechende Liste findest Du [oben](#herdamit).
Browser-Erweiterung (und Web-Technologie insgesamt) haben die unschöne Eigenschaft sehr schnell obsolet zu werden.
Ohne zu technisch zu werden liegt hier folgendes Problem zu Grunde: jedes Mal, wenn an einer Webseite irgendwas geändert wird, besteht die Möglichkeit, dass das add-on kaputt geht, da es immer sehr spezifisch auf das Design und die Funktionsweise der Webseite angepasst werden muss.
Noch bin ich zwar voller Enthusiasmus und versuche auf entsprechende Updates zu reagieren, aber es kann immer auch sein, dass ich was verpasse, keine Zeit hab, oder ich es einfach aufgebe.
Fühlt euch aber frei ein [Issue](https://docs.github.com/de/issues) aufzumachen, wenn ihr mit irgendwelchen Problemen zu kämpfen habt.

### Darf ich das add-on weiterschicken
Ja, gerne!
Darfst das sogar verändern, meinetwegen auch verkaufen, wenn Du es schaffst, jemandem Geld dafür aus den Rippen zu leiern.
Du kannst das auch in einer tollen, neuen Erfindung verwenden und darauf ein Patent anmelden.
Für mehr Informationen bezüglich Deiner Rechte und Pflichten in dem Zusammenhang, lies bitte die [Linzensinformationen](https://github.com/Michi03/Herdamit/blob/main/LICENSE).
Auf jeden Fall, sind mir die folgenden Zwei Punkte wichtig:

* Schick das Ding weiter, an wen Du willst
* Ich gebe keinerlei Garantie und bin nicht schuld, wenn irgendwas nicht funktioniert oder das add-on irgendwas unvorhergesehenes macht

## Funktionsweise
Die Funktionsweise ist abhängig von dem jeweiligen Verlag.
Es wird daher zunächst in den jeweiligen Abschnitten erklärt, wie das add-on das Herunterladen vereinfacht und dann die Dateien erklärt, die den entsprechenden Code beinhalten, der auf der Webseite irgenwas macht.
Darüber hinaus besteht die ***Herdamit***-Erweitung noch aus den folgenden Dateien:

* [**icons**](https://github.com/Michi03/Herdamit/tree/master/icons) Hier liegen die Bilddateien für die Icons, die in der Erweiterung verwendet werden
* [**manifest.json**](https://github.com/Michi03/Herdamit/blob/main/manifest.json) Diese Datei fungiert quasi als eine Art Index, wo der Name, die Version, eine kurze Beschreibung, die Zugriffsrechte, und Anderes aufgelistet werden. Eine genauere Erklärung der Funktion dieser Datei findet ihr auch [hier](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension?retiredLocale=de#manifest.json) (leider nur auf Englisch)

### Meiner

Für den Felix Meiner Verlag ist die folgende Code-Datei relevant [`meiner.js`](https://github.com/Michi03/Herdamit/blob/main/meiner.js).

#### Was macht das add-on
Der Meiner Verlag macht es uns einfach.
Hier wird nämlich in dem e-Reader bereits das gesamte Buch im PDF-Format geladen.
Es wird dann nur zusätzlich noch ein Inhaltsverzeichnis geladen, in dem jeweils genau steht von welcher bis zu welcher Seite ein bestimmtes Kapitel geht.
Klickt man jetzt auf den Download (oder Drucken) -Button, wird einem die Möglichkeit gegeben *jeweils* jedes dieser Kapitel herunterzuladen (oder halt zu drucken).
Das Skript macht daher einfach das: ändere im Inhaltsverzeichnis das erste Kapitel so, dass es bis zu derselben Seite wie das letzte Kapitel geht (anfangen tut es ja höchstwahrscheinlich schon auf Seite 1).
Es wird außerdem die Beschreibung des ersten Kapitels (zutreffender Weise) zu **Gesamtes Buch** geändert.

#### Code Zeile für Zeile
Alle Zeilen, die mit zwei Slashes (`//`) anfangen sind **Kommentare**, also keine Anweisungen sondern lediglich für menschliche Leser:innen (Entwickler:innen), um besser zu verstehen, was an der jeweiligen Stelle passiert und warum.

```JavaScript
const TIMEOUT = 1000;
```

In der ersten Zeile definieren wir die Variable `TIMEOUT`.
Der Ausdruck `const` bedeutet dabei, dass es sich um eine [Konstante](https://wiki.selfhtml.org/wiki/JavaScript/Variable/const) handelt, der Wert also an einer späteren Stelle im Code nicht mehr geändert werden kann.
Diese Variable wird zwar erst etwas später wichtig, aber der Sinn ist der Folgende.
Wir müssen zunächst warten, bis das Buch, bzw. das Inhaltsverzeichnis, komplett geladen wurde, bevor wir etwas daran ändern können.
Der TIMEOUT gibt dabei an, wie regelmäßig wir versuchen, auf das Inhaltsverzeichnis zuzugreifen.

```JavaScript
const CHAPTER_SELECTOR = ".chapterListItem";
```

Hier wird definiert, woran das Skript diejenigen [HTML-Elemente](https://de.w3docs.com/html-lernen/html-elemente.html) (also quasi Bausteine der jeweiligen Webseite) erkennt, die das Inhaltsverzeichnis, bzw. die einzelnen Kapitel darin darstellen.

```JavaScript
function getChapters() {
```

Hier wird einfach eine [Funktion](https://wiki.selfhtml.org/wiki/JavaScript/Funktion) (ein Codeblock, der an einer späteren Stelle im Skript aufgerufen werden kann) mit dem Namen `getChapters` definiert, die keine [Parameter](https://wiki.selfhtml.org/wiki/JavaScript/Funktion#Funktionen_mit_Parametern) hat.
Die geschweifte Klammer (`{`) zeigt den Anfang der Funktionsdefinition an.

```JavaScript
console.log("Waiting for chapters to load...");
```

Hier wird etwas auf der Konsole ausgegeben.
Das ist quasi ein Kommentar während der Laufzeit.
Derartige Ausgaben helfen beim [Debuggen](https://de.wikipedia.org/wiki/Debuggen), also der Diagnose und Beseitigung von fehlerhaftem Verhalten des Programms.
Diese konkrete Ausgabe dient vor Allem dazu, anzuzeigen, dass die Funktion aufgerufen wurde.

```JavaScript
let chapters = document.querySelectorAll(CHAPTER_SELECTOR);
```

Hier definieren wir eine Variable `chapters`, die im Gegensatz zu den Konstanten oben tatsächlich einen variablen Wert hat (siehe [let](https://wiki.selfhtml.org/wiki/JavaScript/Variable/let)).
Dieser Wert ist gleich dem Rückgabewert der Funktion [`querySelectorAll`](https://wiki.selfhtml.org/wiki/JavaScript/DOM/ParentNode/querySelectorAll) mit dem oben definierten `CHAPTER_SELECTOR` als Parameter.
Wir wollen damit also die Kapitel-Elemente in der Variable `chapters` zwischenspeichern, um später wieder darauf zugreifen zu können.
Die Funktion `querySelectorAll` gibt immer eine Liste (bzw einen [Array](https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Array/constructor)) zurück, also mehrere Elemente, was ja auch Sinn ergibt, das es (in aller Regel) mehrere Kapitel gibt.
Das wird nachher nochmal wichtig.

```JavaScript
if (chapters.length < 1)
```

Hier haben wir eine [if-Anweisung](https://wiki.selfhtml.org/wiki/JavaScript/Verzweigung), d.h. das Skript verzweigt sich in seiner Ausführung entsprechend der angegebenen Bedingung.
Dabei ist ja `chapters` die Liste mit unseren Kapiteln und `.length` gibt uns die Länge der Liste (also die Anzahl der Kapitel).
Wir überprüfen also an dieser Stelle, ob unsere Liste weniger als ein Kapitel beinhaltet, sprich, ob sie leer ist.
Wir unterstellen hier, dass das bedeutet, das Inhaltsverzeichnis wurde noch nicht geladen.
Vielleicht kann man hier schon vermuten, dass dies (z.B. wenn der Selektor nicht mehr stimmt, weil der Code der Webseite geändert wurde) theoretisch eine falsche Annahme sein kann und folglich zu Problemen führen könnte.

```JavaScript
return setTimeout(getChapters, TIMEOUT);
```

Wenn die obige Bedingung erfüllt ist, unsere Liste also leer ist, setzen wir einen [Timeout](https://wiki.selfhtml.org/wiki/JavaScript/WindowOrWorkerGlobalScope/setTimeout), das bedeutet, wir warten eine bestimmte Zeit, die Zeit, die in der Konstanten `TIMEOUT` gespeichert ist, und rufen anschließend wieder die Funktion `getChapters` auf.
Dies ist dann ein [rekursiver](https://de.wikipedia.org/wiki/Rekursive_Programmierung) Funktionsaufruf.
Dies wiederholt sich solange die obige Bedingung erfüllt ist, wir also eine leere Liste an Kapiteln zurückbekommen, also (so nehmen wir an) das Inhaltsverzeichnis noch nicht geladen wurde.
Mit `return` geben wir dann das entsprechende Ergebnis dieses rekursiven Funktionsaufrufs, der uns (hoffentlich irgendwann) die Kapitel zugänglich macht, als Ergebnis des Funktionsaufrufs zurück.
***Ja lol, realtime-debugging beim Dokumentieren xD
Mir fällt gerade auf, dass die `setTimeout` Funktion natürlich nicht das Ergebnis der angegebenen Funktion weitergibt, sondern eine ID, die auf den Timeout verweist.
Das bedeutet, die Rekursion funktioniert so nicht.
Das wird mit dem nächsten Update auf jeden Fall behoben.***

```JavaScript
return chapters;
```

Wenn unsere Liste mit Kapiteln zumindest ein Element enthält, geben wir die entsprechende Variable, in der diese zwischengespeichert wurde, zurück.

```JavaScript
}
```

Die geschlossene Klammer zeigt das Ende der Funktionsdefinition an.

```JavaScript
let chapters = getChapters();
```

Hier fängt unser Programm im Prinzip erst richtig an.
Alles vorherige waren bisher nur Konstanten- und Funktionsdefinitionen.
Wir speichern zunächst unsere Kapitel, die wir über die oben erläuterte Funktion erhalten in der Variable (etwas verwirrender Weise auch genannt) `chapters`.
Die Klammern `()` zeigen dabei, dass wir die Funktion aufrufen (und keine Parameter übergeben).

```JavaScript
console.log("Got chapters", chapters);
```

Hier machen wir nochmal eine Ausgabe auf der Konsole, wo wir nachsehen können, welche Kapitel-Elemente wir jetzt tatsächlich durch die Funktion gefunden haben.

```JavaScript
chapters[0].dataset["to"] = chapters[chapters.length/2 - 1].dataset["to"];
```

Hier wird es eventuell etwas verwirrend.
Also der Punkt ist, wir nehmen das erste Element der Kapitel-Liste (`chapters[0]`) und greifen darin auf ein bestimmtes [Attribut](https://wiki.selfhtml.org/wiki/HTML/Attribute/data-*) der mit dem Kapitel-Element verknüpften Datenpunkte zu, genannt `to`.
Das zeigt an, bis zu welcher Seite des PDFs das entsprechende Kapitel geht.
Wir ändern dabei den Wert dieses Attributs zu dem Wert des gleichen Attributs, aber desjenigen Elements, welches in der Liste an der Stelle `chapters.length/2 - 1` steht.
Warum dieses Attribut?
Also, was ich bisher nicht erzählt habe ist, die Kapitel-Liste hat zweimal genau die gleichen Kapitel (zumindest geht das Skript davon aus, dass dem so ist).
Das erste sind die Kapitel aus dem Drucken-Menü und dann nochmal exakt die gleichen Kapitel für das Download-Menü (also der PDF-Download).
Der Trick ist jetzt dieser.
Der PDF-Download greift im Hintergrund (soweit ich das beurteilen kann) auf die Drucken-Funktion zu, daher müssen wir die Kapitel auch hier ändern.
Da wir nun eine Liste mit zweimal genau den gleichen Elementen nacheinander haben, steht das letzte Element der Drucken-Liste an der letzten Stelle in der Liste, wenn wir sie in der Mitte durchschneiden würden.
Daher `chapters.length/2`.
Da die Indizierung der Listenelemente aber immer mit 0 anfängt (also `chapters[0]` ist das erste Element der Kapitel-Liste), müssen wir noch 1 abziehen, daher `chapters.length/2 - 1`.
Wenn der Teil klar ist, ist der Rest ab hier auch offensichtlich.

```JavaScript
chapters[0].dataset["labelto"] = chapters[chapters.length/2 - 1].dataset["labelto"];
```

Hier haben wir jetzt noch ein zweites Attribut, genannt `labelto`.
Was das genau ist, weiß ich selbst nicht, aber es funktioniert und wird in der Funktion, die beim Klicken des Download-Buttons aufgerufen wird, darauf zugegriffen.
Deswegen ändere ich den Wert auch entsprechend dem letzten Kapitel-Element (in der Drucken-Liste).

```JavaScript
chapters[0].children[0].innerText = "Gesamtes Buch";
```

Hier wird jetzt noch der Beschreibungstext des ersten Kapitels in dem Menü geändert, damit auch klar wird, dass darüber das gesamte Buch heruntegeladen wird und nicht, wie ohne das add-on, nur das erste Kapitel.

```JavaScript
chapters[chapters.length/2].dataset["to"] = chapters[chapters.length - 1].dataset["to"];
chapters[chapters.length/2].dataset["labelto"] = chapters[chapters.length - 1].dataset["labelto"];
chapters[chapters.length/2].children[0].innerText = "Gesamtes Buch";
```

An der Stelle wiederholen wir das ganze Spiel jetzt nocheinmal für die tatsächliche PDF-Download-Liste.
Hier ist natürlich das erste Kapitel jenes, welches auf das letzte Kapitel der vorherigen Listenhälfte (der Drucken-Liste) folgt.
Dementsprechend `chapters.length/2` anstatt `chapters.length/2 - 1`.

```JavaScript
console.log("Successfully updated first chapter to download entire book");
```

Zum Abschluss schreiben wir noch eine zelebrierende Freudenbotschaft in die Konsole, um anzuzeigen, das alle Änderungen erfolgreich durchgeführt wurden und das Ende des Skripts, ohne vorher an einem Fehler hängenzubleiben, erreicht wurde.

## Noch fragen
Wenn Du wirklich bis hier alles gelesen und immernoch nicht genug hast, würde ich Dir herzlichst empfehlen einfach selber Mal aktiv zu werden.
Mozilla hat einen ziemlich guten [Einstiegs-Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) verfasst (nur nicht auf Deutsch), der Dir dabei helfen kann, einen eigenen Einstieg in die extension-Entwicklung zu wagen.
