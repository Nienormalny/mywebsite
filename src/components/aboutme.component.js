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
                    <h2>Short story about me</h2>
                    <p>
                        Hello, my name is <b>Dawid</b>. I have been programming websites for years. But before I started working with the code,
                        I tried to fulfil my dreams of becoming a footballer. However, everything went diffrently and I become a web developer.
                        Ihave always dealt with creativity, I was interested in animations, graphics, film editing or cre<span className="text-red">a</span>ting 3D graphics,
                        My first approaches to animation appeared at the age of 12, when I met Flash Maker/Macromedia Flash.
                        Then I had the first contact with programming in <b>Action Script 2</b>
                    </p>
                    <p>
                        Over the years I have learned wonderful programs from Adobe such as <b>Photoshop</b>, <b>Flash</b> (Makromedia Flash), <b>Afte<b className="text-red">r</b> Effect</b>.
                        By expanding my knowledge and learnig how to use the above mentioned programs I could create content for other people and share my <span className="text-red">c</span>reativity.
                        Thereby inspire others. During this time I had the opportunity to work with interesting Polis<span className="text-red">h</span> Youtubers
                        or create a social networking site in the form of a forum for many video makers.
                        While I was actively involved in developing the "First project" I learned how to freely navigate the <b>WordPress</b> interface and also how to modify it.
                        As an administrator of website/portal/forum I had the opportunity to learn about the difficulties that go hand in hand with coordinating team and what responsability this entails.
                    </p>
                    <p>
                        Going to Germany I had no idea what awaited me, much less I didn't think that someday "creating webs<span className="text-red">i</span>tes"  could become my profession.
                        Not knowing the <b>German language</b>, I signed up fot the course and finished it at <b>B2 level</b>.
                        After that I tried my chance at a company that de<span className="text-red">v</span>elops a Web application. I was invited for an interview and I got a chance.
                        I had 2 weeks to show my willingness with futher development, not only personal. So I took my time and started to learn <b className="text-blue">HTML</b>/<b>CSS</b>/<b className="text-orange">JS</b>.
                        Sleepless nights opened the door to a new future for me!
                    </p>
                    <p>
                        It was like lov<span className="text-red">e</span> at first sigh. At the time I wrote my first script I knew that this is what I would like to do for the rest of my life.
                        I felt satisfied. Thus I began to delve into the subject of web development and continued my learnig, raising standards higher and higer every day.
                    </p>
                    <h2>Today</h2>
                    <h3>My Front<span className="text-red">-</span>end knowlage:</h3>
                    <ul>
                        <li>HTML5/Twig</li>
                        <li>CSS3/SASS/LESS</li>
                        <li>JavaScript ES5 & ES6/JQUERY/TypeScript</li>
                        <li>ReactJs/VueJs</li>
                        <li>Redux</li>
                        <li>BackboneJs</li>
                        <li>AframeJs</li>
                    </ul>
                    <h3>My Back-end knowlage:</h3>
                    <ul>
                        <li>NodeJs</li>
                        <li>E<span className="text-red">x</span>pressJs</li>
                        <li>MongoDb</li>
                    </ul>
                    <h3>My other knowlage:</h3>
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