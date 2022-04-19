# Informatikai rendszerek építése (2021/22. II. félév)

- [Tanszéki weboldal](http://ait2.iit.uni-miskolc.hu/oktatas/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:informatikai_rendszerek_epitese)
- [BProf gyakorlat](bprof.md)
- [Beadandó információk](assignment.md)

## 1. hét
Szoftveres követelmények ismertetése, telepítése, ismerkedés az Angular keretrendszerrel.

- [Szoftverkövetelmények](sw_requirements.md)
- [Laborgépeken szükséges beállítások](lab_sw_requirements.md)
- [What is Angular?](https://angular.io/guide/what-is-angular)
- [Getting started with Angular](https://angular.io/start)

## 2. hét
Node Package Manager használata. Bootstrap telepítése, grid rendszer. Sztring interpoláció és strukturális direktívák (`*ngIf`, `*ngFor`) az Angular keretrendszerben.

Adatok:
- [Jelentkezők listája](https://github.com/aron123/infrend-2022/blob/master/_data/applicants.ts)

Forráskódok:
- [Állásjelentkezések nyilvántartása](https://github.com/aron123/infrend-2022/tree/master/job-application) - [[DEMO]](https://aron123.github.io/infrend-2022/dists/job-application/)

Dokumentációk, egyéb anyagok:
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Emmet abbreviations](https://docs.emmet.io/abbreviations/syntax/) (+[Emmet in VSCode](https://code.visualstudio.com/docs/editor/emmet))

## 3. hét
Angular komponensek létrehozása (`ng generate`), komponensek közötti együttműködés (`@Input` és `@Output` dekorátorok, `EventEmitter` osztály használata).

Forráskódok, tananyagok:
- [Komponensek együttműködése - feladatok](component-interaction.md)
  - [Szavazó felület](https://github.com/aron123/infrend-2022/tree/master/voting) - [[DEMO]](https://aron123.github.io/infrend-2022/dists/voting/)
  - [Szemantikus verziószámozás](https://github.com/aron123/infrend-2022/tree/master/semver) - [[DEMO]](https://aron123.github.io/infrend-2022/dists/semver/)

Dokumentációk, egyéb anyagok:
- [Angular Components Overview](https://angular.io/guide/component-overview)
- [Sharing data between child and parent components](https://angular.io/guide/inputs-outputs)
- [Semantic Versioning 2.0.0](https://semver.org/)

## 4. hét
Angular komponensek további gyakorlása (lásd 3. hét).

## 5. hét
HTTP kérések kezelése Angular-ban. Az Angular Router.

Forráskódok, tananyagok:
- [HTTP protokoll](http.md)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (Fake JSON API)
- [Közösségi alkalmazás](https://github.com/aron123/infrend-2022/tree/master/social-media) - [[DEMO]](https://aron123.github.io/infrend-2022/dists/social-media/)

Dokumentációk, egyéb anyagok:
- [DummyJSON](https://dummyjson.com/) (Fake JSON API komplexebb adatstruktúrával)
- [Routing in SPAs](https://dev.to/marcomonsanto/routing-in-spas-173i)
- [Common Routing Tasks in Angular](https://angular.io/guide/router)

## 6. hét
Aszinkron végrehajtás JavaScript-ben. Angular keretrendszer további gyakorlása.

Forráskódok, tananyagok:
- [Aszinkron végrehajtás](async.md)
- előző heti feladat befejezése

Dokumentációk, egyéb anyagok:
- [Promise Basics](https://javascript.info/promise-basics) + [async/await](https://javascript.info/async-await)

## 7. hét
Adatbázis-kezelés TypeORM segítségével. Webshop példa kezdeti felületének kialakítása.

Adatok:
- [Termékadatbázis](products-database.md)

Forráskódok, tananyagok:
- [Webshop alkalmazás terve](webshop.md)
- [TypeORM gyakorlat](http://ait2.iit.uni-miskolc.hu/oktatas/doku.php?id=tanszek:oktatas:informatikai_rendszerek_epitese:type_orm) (Dr. Nehéz Károly anyaga)

Dokumentációk, egyéb anyagok:
- [TypeORM dokumentáció](https://typeorm.io/)

## 8. hét
TypeORM további gyakorlása. HTTP API készítése Express.js segítségével. Webshop példa backendjének létrehozása.

Forráskódok, tananyagok:
- [Szerver létrehozása, Express alapok](backend.md)
- [Kezdő backend projekt](https://github.com/aron123/infrend-2022/tree/master/backend)
- [Webshop projekt (szerda 8:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz08)
- [Webshop projekt (szerda 10:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz10)

Dokumentációk, egyéb anyagok:
- [Express.js Documentation](https://expressjs.com/)

## 9. hét
Webshop példa fejlesztése. CRUD műveletek implementálása, karbantartható projekt struktúra kialakítása szerveroldalon.

Forráskódok, tananyagok:
- [Webshop projekt (szerda 8:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz08)
- [Webshop projekt (szerda 10:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz10)

Dokumentációk, egyéb anyagok:
- [Postman Portable](https://portapps.io/app/postman-portable/#download)

## 10. hét
Webshop példa továbbfejlesztése. Szerver- és kliensoldal illesztése. Reaktív form-ok az Angular-ban.

Forráskódok, tananyagok:
- [Webshop projekt (szerda 8:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz08)
- [Webshop projekt (szerda 10:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz10)

## 11. hét
Webshop példa továbbfejlesztése. Adatfelvitel, hibakezelés kliens- és szerveroldalon. 1:1, 1:N, N:M kapcsolatok TypeORM entitások között.

Forráskódok, tananyagok:
- [Webshop projekt (szerda 8:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz08)
- [Webshop projekt (szerda 10:00)](https://github.com/aron123/infrend-2022/tree/master/webshop-sz10)

## Elérhetőség
Kiss Áron, tanszéki mérnök<br>
ME-GÉIK Informatikai Intézet

E-mail: kiss.aron@uni-miskolc.hu
