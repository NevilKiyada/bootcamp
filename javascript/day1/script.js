console.log("hello world");
console.warn("giving an warrning");
console.error("given an error");  
document.write("hello world");
document.getElementById("mainid").innerHTML = `
     <nav>
        <ul class="list">
            <li><a href="#html">HTML</a></li>
            <li><a href="#css">CSS</a></li>
            <li><a href="#js">JavaScript</a></li>
        </ul>
    </nav>
    <div class="main">
        <div>
            <h2 id="html">HTML (Hyper Text Markup Langauge)</h1>
            <p>HTML is a starnderd markup langauge for<b> creating Web Pages</b>, It describes the structure of web page using markup.</p>
            <img src="./assets/images/html-logo.png">
            <ul>
                <li>Block Elements: &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;ol&gt;</h1></li>
                <li>Inline Elements: &lt;i&gt;, &lt;strong&gt;, &lt;img&gt;</li>
                <li>Attributes: type, src, alt, href</li>
            </ul>
            <table cellspacing="2px" width="100%">
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th style="width: 60%;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&lt;h1&gt;</td>
                        <td>Main Heading</td>
                    </tr>
                    <tr>
                        <td>&lt;p&gt;</td>
                        <td>Paragraph</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2 id="css">CSS (Cascading Style Sheet)</h1>
            <p>CSS is used for <b>styling Web Pages</b>. It describe how elements should be displayed on screen.</p>
            <img src="./assets/images/css-logo.png">
            <ul>
                <li>Font Properties: font-family, font-size, color</li>
                <li>BOx Model: margin, padding, border</li>
                <li>Text Properties: text-align, line-height, text-decoration</li>
            </ul>
            <table cellspacing="2px" width="100%">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th style="width: 60%;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>font-family</td>
                        <td>Defines the font of text</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>Sets the text color</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2 id="js">JavaScript</h1>
            <p>JAvaScript is scripting Language that <b>enables interactive web pages</b>. It can dynamically modify content.</p>
            <img src="./assets/images/js-logo.png">
            <ul>
                <li>Variables and Datatypes</li>
                <li>Functions and Controls</li>
                <li>DOM Manipulation</li>
            </ul>
            <table cellspacing="2px" width="100%">
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th style="width: 60%;">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Variables</td>
                        <td>Containers for storing values</td>
                    </tr>
                    <tr>
                        <td>Functions</td>
                        <td>Resuable block of code</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <footer>
        <p>© 2024 Programming Langauge Project</p>
    </footer>
`