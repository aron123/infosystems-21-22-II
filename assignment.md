# Beadandó feladat

## Általános információk

A feladatkiírások a [tanszék oktatási oldalán](http://ait2.iit.uni-miskolc.hu/oktatas/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:feleves_feladat#feladatok) olvashatók.

A feladatkiosztás [ITT érhető el](assignment-list.md).

## Alkalmazandó technológiák
A feladat megoldásához a gyakorlatokon bemutatott technológiákat lehet felhasználni.

- Frontend:
  - Angular 12 vagy 13 keretrendszer, az alkalmazás legyen logikus módon komponensekre bontva
  - Tetszőleges CSS keretrendszer (pl. Bootstrap, Material, Tailwind CSS),
  - A lapok között történő navigációhoz a beépített Angular Router legyen alkalmazva.

- Backend:
  - TypeScript programozási nyelv
  - Express.js szerver
  - TypeORM
  - Adatbázis: a következők bármelyike: MySQL, SQLite, Oracle, PostgreSQL (preferált: MySQL vagy SQLite)

## Megajánlott jegy
A szorgalmi időszakban beadott feladatokkal megajánlott jegy szerezhető:

- 4-es megajánlott jegyért a beadandó feladatnak maradéktalanul teljesítenie kell a feladatkiírásban meghatározottakat.
- 5-ös megajánlott jegyért az alkalmazásnak felhasználókezelést is meg kell valósítania az alábbiak szerint:
  - az alkalmazás funkcióinak csak bejelentkezés után kell érhetőnek lenniük,
  - két szerepkört kell kialakítani (adminisztrátor, felhasználó):
    - az adminisztrátor a rendszer minden funkcióját eléri és új felhasználókat tud hozzáadni,
    - a felhasználó a rendszer olvasási műveleteit éri csak el.

## Feladat beadás
A feladat megoldását a <kiss.aron@uni-miskolc.hu> címre elküldött e-mailben be kell adni és a kijelölt gyakorlatok valamelyikén (előreláthatólag a 12.-13. héten) röviden be kell mutatni, meg kell védeni. 

Pótlásra a 14. heti gyakorlaton van lehetőség.

A megoldás beküldhető egy publikus git repository-ra mutató linkként vagy 1 db .zip fájlba csomagolva. A ``node_modules/`` mappa egyik esetben se legyen mellékelve!