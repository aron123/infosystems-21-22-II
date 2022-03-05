# BProf gyakorlati feladatok

## 1-2. hét
Szoftverkövetelmények telepítése, ismerkedés az Angular keretrendszer alapjaival.

## 3. hét
Tetszőleges nyilvántartó rendszer fejlesztése Angular keretrendszerben, Bootstrap helyett Tailwind CSS felhasználásával. A kezelt objektumoknak legyen legalább 4 mezője. Legyen lehetőség a tárolt rekordok listázására, törlésére, új rekord hozzáadására. Legyen felhasználva minnél több Tailwind CSS által biztosított osztály.

Segédanyagok:
- [Install Tailwind CSS with Angular](https://tailwindcss.com/docs/guides/angular)
- [Quick Tailwind Introduction](https://www.better.dev/quick-tailwind-introduction)
- [Get Started w/ Tailwind CSS in 15 Minutes](https://www.youtube.com/watch?v=6zIuAyLZPH0)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

## 4. hét 
A következő alkalmazás elkészítése: [[Screenshot]](assets/images/component-interaction-jokes-list.png)

Követelmények:
- legalább 3 komponensből álljon az alkalmazás,
- lehessen új vicceket felvinni (felhasználónév, vicc szövege),
- legyen szavazási lehetőség (lehet többször is szavazni),
- az eredmény viccenként és összesítve is jelenjen meg,
- a legalább +50-es eredményt elért vicceknél jelenjen meg a "Community Approved" jelvény.

## 5-6. hét
Alkalmazás készítése a GitHub API felhasználásával. 

Elkészítendő lapok:
- **Felhasználó keresés lap**: Be lehet írni a keresett felhasználó nevét, egy "Keresés" gombra kattintva megjelennek a GitHub API-tól kapott találatok.
- **Felhasználói adatlap**: A keresés során megtalált felhasználóknak meg lehet nyitni az adatlapját, ahol megjelenik néhány alap adatuk, és a rendszerben szereplő repository-jaik.
- **Repository keresés lap**: Be lehet írni a keresett repository nevét, egy "Keresés" gombra kattintva megjelennek a GitHub API-tól kapott találatok.
- **Repository adatlap**: A keresés során megtalált repository-knak meg lehet nyitni az adatlapját, ahol megjelenik néhány alapadatuk.

Referencia dokumentáció:
- [Reference Overview](https://docs.github.com/en/rest/reference)
- [Search repositories](https://docs.github.com/en/rest/reference/search#search-repositories)
- [Get a repository](https://docs.github.com/en/rest/reference/repos#get-a-repository)
- [Search users](https://docs.github.com/en/rest/reference/search#search-users)
- [Get a user](https://docs.github.com/en/rest/reference/users#get-a-user)
- [List repositories for a user](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user)