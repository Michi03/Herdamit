# Herdamit
Dieses kleine Programm ist dafür da, um das Herunterladen von Büchern im PDF-Format über besonder unkooperative Verläge (z.B. Felix Meiner) einfacher zu gestalten.
Hier werden sonst gewisse Umwege von den Studierenden gefordert, wie das Herunterladen einzelner Kapitel und anschließende manuelle Zusammenführen über PDF-Editoren.
Bis jetzt unterstützen wir die folgenden Verläge:

* [Felix Meiner Verlag](https://meiner-elibrary.de/)
* Ja lol, das war's schon... Kommt aber (vielleicht) bald mehr

## Installation
Das wichtigste zuerst, wie installiere ich den Bums?
Ganz pauschal lässt sich das nicht beantworten, da es sich hier um eine [Browser-](https://de.wikipedia.org/wiki/Webbrowser)Erweiterung (bzw. *Erweiterung* oder auch *add-on*) handelt und die Installation von extensions je nach verwendetem Browser (die großen sind Firefox, Chrome und Safari[^1]) unterschiedlich verläuft.
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

Eine detailiertere entsprechende Anleitung gibt es auch nochmal [hier](https://support.google.com/chrome/a/answer/2714278?hl=de#:~:text=Rufen%20Sie%20chrome%3A%2F%2Fextensions,und%20w%C3%A4hlen%20Sie%20ihn%20aus.).

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

## Funktionsweise
Die Funktionsweise ist abhängig von dem jeweiligen Verlag und ist daher entsprechend dieser im Folgenden unterteilt.
Es werden zunächst in den jeweiligen Abschnitten erklärt, wie das add-on das Herunterladen vereinfacht und dann die Dateien erklärt, die den entsprechenden Code beinhalten, der auf der Webseite irgenwas macht.
Darüber hinaus besteht die ***Herdamit***-Erweitung noch aus den folgenden Dateien:

* [**icons**](https://github.com/Michi03/Herdamit/tree/master/icons) Hier liegen die Bilddateien für die Icons, die in der Erweiterung verwendet werden
* [**manifest.json**](https://github.com/Michi03/Herdamit/blob/main/manifest.json) Diese Datei fungiert quasi als eine Art Index, wo der Name, die Version, eine kurze Beschreibung, die Zugriffsrechte, und anderes aufgelistet werden. Eine genauere Erklärung der Funktion dieser Datei findet ihr auch [hier](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension?retiredLocale=de#manifest.json) (leider nur auf Englisch)

### Meiner

Für den Felix Meiner Verlag ist die folgende Code-Datei relevant [`meiner.js`](https://github.com/Michi03/Herdamit/blob/main/meiner.js).

#### Was macht das add-on
Der Meiner Verlag macht es uns einfach.
Hier wird nämlich in dem e-Reader bereits das gesamte Buch im PDF-Format geladen.
Es wird dann nur zusätzlich noch ein Inhaltsverzeichnis geladen, in der jeweils genau steht von welcher bis zu welcher Seite ein bestimmtes Kapitel geht.
Klickt man jetzt auf den Download (oder Drucken) -Button, wird einem die Möglichkeit gegeben *jeweils* jedes dieser Kapitel herunterzuladen (oder halt zu drucken).
Das Skript macht daher einfach das: ändere im Inhaltsverzeichnis das erste Kapitel so, dass es bis zu derselben Seite wie das letzte Kapitel geht (anfangen tut es ja höchstwahrscheinlich schon auf Seite 1).
Es wird außerdem die Beschreibung des ersten Kapitels (zutreffender Weise) zu **Gesamtes Buch** geändert.

#### Code Zeile für Zeile
***Kommt noch***

## Noch fragen
Wenn Du wirklich bis hier alles gelesen und immernoch nicht genug hast, würde ich Dir herzlichst empfehlen einfach selber Mal aktiv zu werden.
Mozilla hat einen ziemlich guten [Einstiegs-Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) verfasst (nur nicht auf Deutsch), der Dir dabei helfen kann, einen eigenen Einstieg in extension-Entwicklung zu wagen.
