import React from 'react';

const AboutMe = () => {
    return (
        <section id="aboutme">
            <h1>About me</h1>
            <div className="flex-box">
                <div className="dotted-border">
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                </div>
        	    <img src="/mypic.jpg" />
                <div className="description">
                    <h2>Krótka historia o mnie</h2>
                    <p>
                        Witam, mam na imię <b>Dawid</b>. Od lat zajmuję się programowaniem stron internetowych.
                        Zanim jednak zacząłem pracę z kodem starałem się spełnić swoje marzenie o zostaniu piłkarzem.
                        Jednak wszystko potoczyło się inaczej i tak zostałem web developerem...
                    </p>
                    <p>
                        Zasze miałem doczynienia z kreatywnością, interesowały mnie <b>animacje</b>, <b>grafika</b>, <b>montaż filmów</b> czy <b>tworzenie grafik 3D</b>.
                        Pierwsze podejścia do animacji pojawiły się w wieku 12 lat, kiedy to poznałem program <b>Flash Maker</b>/<b>Macromedia Flash</b>.
                        Wówczas miałem pierwszą styczność z programowaniem akcji w <b>Action Script 2</b>.
                    </p>
                    <p>
                        Z biegiem lat poznałem wspaniałe programy od Adobe takie jak <b>Photoshop</b>, <b>Flash</b> (Macromedia Flash), <b>After Effect</b>.
                        Zgłębiając swoją wiedzę i ucząc się obsługi wyżej wymienionych programów, mogłem tworzyć kontent dla innych ludzi
                        i dzielić sie swoją kreatywnością. Tym samym inspirować innych. W przeciągu tego czasu miałem okazję współpracować z
                        ciekawymi Polskimi Youtuberami czy tez stworzyć <b>portal społecznościowy</b> w formie forum dla wielu twórców video.
                        Podczas gdy brałem czynny udział w rozwijaniu <b>"Pierwszego projektu"</b> nauczyłem sie swobodnie poruszać po interfejsie <b>WordPress</b> oraz jak go modyfikować.
                        Jako administrator strony/portalu/forum miałem okazje poznać trudności jakie idą w parze z koordynowaniem innych użytkowników i jaka odpowiedzialność
                        za tym idzie.
                    </p>
                    <p>
                        Wyjeżdżając do Niemiec nie miałem pojęcia co mnie czeka a tym bardziej nie sądziłem, że kiedyś "tworzenie stron" może sta się moim zawodem.
                        Nie znając języka zapisałem sie na kurs Niemieckiego i ukończyłem go na poziomie B2. Po czym spróbowałem swoich sił w firmie, która rozwija aplikacje Webową.
                        Zostałem zaproszony na rozmowe wstępną i dostałem szansę. Miałem 2 tygodnie na pokazanie moich chęci z dalszym rozwojem nie tylko osobistym.
                        Tak więc poświeciłem swój czas i przystąpiłem do nauki <b className="text-blue">HTML</b>/<b>CSS</b>/<b className="text-orange">JS</b>. Nie przespane nocki otworzyły mi drzwi do nowej przyszłości!
                    </p>
                    <p>
                        To było jak miłość od pierwszego wejrzenia. W momencie gdy napisałem swój pierwszy skrypt wiedziałem, że to jest to co chciałbym robic do końca mojego życia.
                        Czułem się spełniony. Tym samym zacząłem się zagłębiać w tematyke web developingu i kontynuowałem swoją naukę podnosząc z dnia na dzień coraz to wyżej poprzeczkę.
                    </p>
                    <h2>Na dzień dzisiejszy</h2>
                    <h3>Co potrafię - Front-end:</h3>
                    <ul>
                        <li>HTML5/Twig</li>
                        <li>CSS3/SASS/LESS</li>
                        <li>JavaScript ES5 & ES6/JQUERY/TypeScript</li>
                        <li>ReactJs/VueJs</li>
                        <li>Redux</li>
                        <li>BackboneJs</li>
                        <li>AframeJs</li>
                    </ul>
                    <h3>Co potrafię - Back-end:</h3>
                    <ul>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>MongoDb</li>
                    </ul>
                    <h3>Co potrafię - inne przydatne:</h3>
                    <ul>
                        <li>NPM</li>
                        <li>GIT</li>
                        <li>AWS</li>
                        <li>Firebase</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;