---
layout: post
title: Windows OS bate Mac OS în colțuri.
#permalink: /2015/07/windows-os-bate-mac-os-in-colturi/
categories: Blog
tag: design
meta: 'Lucruri aparent banale dar care ascund taine'
featured-image: "/assets/img/post/windows-os-bate-mac/wobm-1.png"
image-size: contain
---
Deunăzi mă plimbam prin __partea aceea*__ a internetului și am descoperit o anume [lege a lui Fitts][1].

Pe scurt: omul a analizat cum niște voluntari au click-ăit pe un ecra apoi a scris o formulă. Oarecum această formulă oferă un indice al accesibilității unui obiect aflat pe ecranul calculatorului, bazându-se pe de lățimea acestuia și distanța pe care cursurul mouse-ului trebuie să o parcurgă pentru a ajunge la el.
<!--more-->
<img class="post-image" src="{{ site.baseurl }}/assets/img/post/windows-os-bate-mac/wobm-1.png" alt="legea lui Fitts" />

Bizar studiu, însă formula oferă un rezultat interesant ce stă la baza unor decizii foarte importante de design.  

Să presupunem că dezvoltăm o nouă aplicație web și dorim să aflăm răspunsul la întrebarea : *”Care este cel mai bun loc pentru butonul [y]?”.* Conform formulei avem 2 variante optime:

  -varianta 1 <span style="color:red">W</span>: butonul este ENORM = dacă butonul este aproape la fel de mare pe cât este ecranul atunci vom ajunge la el foarte ușor, indiferent de poziția cursorului (accesibilitate garantată);

  -varianta 2 <span style="color:green">D</span>: butonul este cât se poate de aproape ce cursor;

Varianta 2 este ușor de demonstrat dacă rulezi un sistem Windows: dacă ai mâna pe mouse apasă pe click-dreapta: meniul ce apare oferă cele mai relevante acțiuni în contextul actual. Oriunde se lansează un click-dreapta meniul apare imediat lângă cursor, deci distanța între cursor și obiectele de interes( opțiunile meniului) este cea mai mică posibilă (accesibilitate mare).

Însă nu fiecare obiect de pe ecran se poate plimba cu săgețica de mână. Dacă nu putem aplica varianta 2 atunci ne rămâne prima opțiune, un obiect cât se poate de mare. Pe cât de mare pe atât de ușor de accesat .Putem crea un buton care să ocupe tot ecranul dar unde punem restul de conținut? Aici e partea frumoasă, butonul nu trebuie să fie atât de mare, ba chiar mărimea lui nu contează, ci poziția!

Un exemplu foarte popular este butonul de START al sistemului de operare Windows. Fiind poziționat fix în colțul ecranului mărimea lui devine practic infinită. Dacă un utilizator duce cursorul mouse-ului deasupra butonului START, atunci acesta va rămâne deasupra butonului indiferent de cât de mult este prelungită mișcarea prin care s-a ajuns în acest punct!

<img class="post-image" src="{{ site.baseurl }}/assets/img/post/windows-os-bate-mac/wobm-2.png" alt="legea lui Fitts" />

Cu alte cuvinte poți apăsa butonul START și cu ochii închiși dacă muți mouse-ul mult în direcția unde e poziționat acesta (implicit stânga-jos).
Multe sisteme fac uz de această schemă: privește colțurile, vei găsi funcționalități acolo! Acum să revin la teza titlului.

<img class="post-image" src="{{ site.baseurl }}/assets/img/post/windows-os-bate-mac/wobm-3.png" alt="legea lui Fitts" />

Fiecare sistem de operare are un buton de închidere a ferestrei. În cazul *Windows* butonul apărea lipit( sau foarte aproape) de colțul dreapta-sus al ecranului atunci când fereastra era la dimeniunea maximă, era deci infinit de mare și ca atare foarte accesibil. Cei de la *Apple* au ales să mute un pic butonul în interior căutând probabil un design mai ”zen”, dar făcând asta au detașat butonul de accesibilitatea colțului!

Tare m-am mirat când am aflat: Microsoft aveau un atuu față de Apple în ceea ce privește designul sistemului! Am zis ”aveau” pentru că lucrurile încep să se schimbe, o dată cu dezvoltarea sistemelor mobile.

Observ că și Windows începe să îndepărteze butonul [X] de colțul ecranului, și asta nu e tocmai un lucru rău în contextul dezvoltării din ce în ce mai mult al pieței mobile (telefoane, tablete). Pentru aceste noi dispozitive colțul nu mai reprezintă un punct atât de accesibil pe cât este pe un sistem desktop. Dacă degetul utilizatorului (consider că astfel se interacționează cu dispozitivul) ajunge în colțul ecranului atunci acțiunea prin care s-a ajuns acolo **nu** mai poate fi continuată din motive fizice (degetul va depăși ecranul). Astfel infinitatea unui obiect aflat în colțul ecranului dispare, însă designerii au găsit un nou loc cu accesibilitate mare: laturile.

<img class="post-image" src="{{ site.baseurl }}/assets/img/post/windows-os-bate-mac/wobm-4.png" alt="legea lui Fitts" />

În cazul unui telefon sau al unei tablete laturile devin zonele cu accesibilitate optimă. Sistemul desktop oferă mărime infinită obiectelor din colțuri iar sistemele mobile oferă acces din oricare punct al laturii ecranului profitând la maxim de mărimea acestuia. (swipe-ul ce începe de pe o margine a ecranului poate îndeplini o altă funcție față de swipe-ul ce începe din centrul acestuia)

Subiectul poate fi mult dezbătut, las pe fiecare să observe propiul device. Important este să fim tot timpul alerți deoarece până și chestiile banale precum studiul lui Fitts pot ascunde informații valoroase!

** zona cu articole deștepte*

 [1]: https://en.wikipedia.org/wiki/Fitts%27s_law
