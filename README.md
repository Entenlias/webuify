<div id="top"></div>

[![NPM][npm-shield]][npm-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Entenlias/webuify">
  </a>

<h3 align="center">Webuify</h3>

  <p align="center">
    Webuify is an true fullstack library for developing web applications, like an Windows-Forms-App 
    <br />
    <a href="https://github.com/Entenlias/webuify/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Entenlias/webuify/issues">Report Bug</a>
    ·
    <a href="https://github.com/Entenlias/webuify/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Webuify is an true fullstack library for developing web applications, like an Windows-Forms-App 
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)


<p align="right">(<a href="#top">back to top</a>)</p>


## Installation

Simply install via [npm](https://www.npmjs.com/package/webuify):
   ```sh
   npm install webuify
```



<!-- USAGE EXAMPLES -->
## Usage

Simple global counter:
```js
const { Webuify, View, label, button, HtmlStyle, BootstrapStyle } = require("webuify");

const webuify = new Webuify({
    httpPort: 8080,
    style: new BootstrapStyle(),
});

const view = new View(webuify, "home", {
    default: true,
    title: "Homepage"
});

let counter = 0;
view.add(label(view, "Clicks: " + counter).id("counter"));
view.add(button(view, "Click me!").click((action) => {
    counter++;
    view.element("counter").text("Clicks: " + counter);
}));

webuify.add(view);
webuify.launch();
```

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[npm-shield]: https://img.shields.io/npm/v/webuify?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/webuify
[forks-shield]: https://img.shields.io/github/forks/Entenlias/webuify.svg?style=for-the-badge
[forks-url]: https://github.com/Entenlias/webuify/network/members
[stars-shield]: https://img.shields.io/github/stars/Entenlias/webuify.svg?style=for-the-badge
[stars-url]: https://github.com/Entenlias/webuify/stargazers
[issues-shield]: https://img.shields.io/github/issues/Entenlias/webuify.svg?style=for-the-badge
[issues-url]: https://github.com/Entenlias/webuify/issues
[license-shield]: https://img.shields.io/github/license/Entenlias/webuify.svg?style=for-the-badge
[license-url]: https://github.com/Entenlias/webuify/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png