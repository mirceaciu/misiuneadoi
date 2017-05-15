---
layout: post
title: SMIL și hărțile web
#permalink: /2015/02/cand-facebook-ucide/
categories: Blog
tag: tutorial
meta: 'SMIL poate fi folosit pentru animații în hărți web, dar e învechit'
featured-image: "/assets/img/post/smil-si-harta/map-marker-128.png"

---
Hărțile devin din ce în ce mai accesibile iar din ce în ce mai multe servicii oferă utilizatorilor non-[gis][8]-iști posibilitatea de a crea și de a publica o hartă. Mai mult decât atât hărțile au devenit dinamice și interactive făcând uz pe cât posibil de capacitățile browserelor și inovațiile din limbaje web precum javascript. Ba chiar hărțile adoptă și metode [responsive][1] afișând date în funcție de nivelul de zoom sau mărimea containter-ului în care sunt incluse. Un lucru minunat în ecuația responsive îl reprezintă imaginile în format __.svg__ deoarece acestea oferă autorului certitudinea unor randări impecabile indiferent de dimensiunile cerute de utilizator.
<!--more-->



In domeniul hărților interactive aceste formate pot fi utilizate pentru markere precum cel din imaginea următoare:

<img class="post-image" src="{{ site.baseurl }}/assets/img/post/smil-si-harta/map-marker-128.png" alt="map-marker"/>


Avantaje: rezoluție impecabilă pentru orice dimensiune, posibilitatea costumizări în editoare grafice precum InkScape, fundal transparent și __animație__. Un mare bonus al imaginilor svg este acela că ele pot fi animate, nu doar rotite sau redimensionate precum o imagine .png, ci animații în întregul sens al cuvântului.

Animațiile complexe sunt posibile datorită modului în care un svg este creat. O imagine svg nu este formată din înlănțuiri de declarații de pixeli ci din linii de cod. Mai jos se află codul (în tab-ul html) pentru un marker creat de mine în Illustrator.


<iframe width="300" height="350" style="width: 100%;" scrolling="no" src="//codepen.io/mirceaciu/embed/QyxBxo/?height=350&amp;theme-id=6471&amp;default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="allowfullscreen">See the Pen <a href="http://codepen.io/mirceaciu/pen/QyxBxo/">Santa-map-marker</a> by Stanciu Bogdan Mircea (<a href="http://codepen.io/mirceaciu">@mirceaciu</a>) on <a href="http://codepen.io">CodePen</a>.
</iframe>

Fiecare layer din Illustrator (capul, barba, ochii, gura, sprâncenele) sunt salvate în svg sub linii de cod diferite, grupate în taguri cu id-uri reprezentative.

{% highlight xml linenos %}
<g id="eyes">
        <circle id="XMLID_21_" class="st2" cx="64" cy="116.1" r="6.3"/>
        <circle id="XMLID_17_" class="st2" cx="97.9" cy="116.1" r="6.3"/>
</g>
{% endhighlight %}

În grupul cu id "eyes" sunt incluși doi vectori de tip cerc, ce reprezintă ochii. Aceste elemente pot fi interogate cu ajutorul javascript și animate cu librării precum [GreenSock][2]. În exemplul anterior am folosit GreenSock pentru a anima ochii și sprâncele moșului.

Posibilitățile de animare cu GreenSock sunt numeroase: redimensionări, transformări de scară sau poziție, trasformări de culoare sau transparență, sacadări, tranziții, efecte de ease în mișcări.
Astfel putem oferi hărților un pic de caracter animând markerii. Gândul meu pleacă spre iconițe animate pentru puncte-de-interes (o ceașcă de cafea din care ies aburi, un mic polițist care gestigulează în mijlocul unei intersecții, o macara care se învârte în centrul unui șantier).

În decembrie am creat în cadrul echipei [Gisbusters][7] o hartă tematică: traseul lui Moș Crăciun prin România. Cu ajutorul lui Leaflet și a librăriei [MovingMarker][3] o iconiță moș-crăciun.png era plimbată în diferite sectoare ale României în funcție de un interval orar. M-am gândit că acea iconiță ar putea fi animată, așa a apărut demo-ul pe codepen. Am recrat iconița în format svg, am animat-o cu ajutorul GreenSock și am inclus resursele în harta leaflet. Iconița s-a afișat cu succes, însă animația lipsea. Problema? Modul în care leaflet injectează imaginea svg in DOM face ca librăria GreenSock să nu poată interoga codul din svg. Dezamăgire.

Dar există o soluție. Se poate ca fișierul svg să fie animat nativ, inline, fără a depinde de librări externe! Acest lucru este posibil cu [SMIL][4].

Cu SMIL putem scrie cod direct în fișierul svg, utilizând un nou tag : __&lt;animate&gt;__. Pentru a folosi SMIL trebuie să facem mici modificări în codul svg. Tag-urile în mod normal sunt auto-inchise  dar &lt;animate&gt; cere să fie inclus între tagurile de deschidere și de închidere ale elementului pe care dorim să-l animăm. Cu alte cuvinte:

{% highlight xml linenos %}
<circle id="XMLID_70_" class="st1" cx="64" cy="121.1" r="6.6"/>
{% endhighlight %}
devine
{% highlight xml linenos %}
<circle id="XMLID_70_" class="st1" cx="64" cy="121.1" r="6.6"> <animate> </circle>
{% endhighlight %}

Avantaje: este inline, nu depinde de alte librări.
Dezavantaje: nu este la fel de flexibil precum GreenSock, este considerat învechit de către browserele contemporane și va fi probabil înlocuit de animațiile css.

Cu toate acestea încă funcționează. Cu ajutorul lui putem anima proprietăți ale elementului cu ajutorul unui "from-to". În exemplul anterior cx reprezintă poziția cercului pe axa X a paginii (relativ view-box-ului svg) . Cu SMIL putem modifica acea poziție

{% highlight xml linenos %}
<circle id="XMLID_70_" class="st1" cx="64" cy="121.1" r="6.6">
<animate attributeName="cx" from="64" to="100" dur="5s" repeatCount="indefinite" />
</circle>
{% endhighlight %}

Cercul se va plimba de la coordonata 64 la coordonata 100, va parcurge distanța în 5 secunde iar la final va repeta animația.

Cu aceste funcții limitate am animat un pic ochii Moșului. Fișerul svg cu animația inclusă funcționează! rezultatul poate fi urmărit [aici][5].

O notă finală: deși este tentant să animăm mult trebuie să fim precauți și să ne impunem o anumită măsură. Sunt utilizatori care pot suferi din cauza numeroasele deplasări ale pixelilor, un fel de [”rău de mișcare”][6].


[1]: http://en.wikipedia.org/wiki/Responsive_web_design
[2]: http://greensock.com/
[3]: http://github.com/ewoken/Leaflet.MovingMarker
[4]: http://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL
[5]: http://gisbusters.github.io/vine-mosu/
[6]: http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity
[7]: http://gisbusters.com/
[8]: http://en.wikipedia.org/wiki/Geographic_information_system
