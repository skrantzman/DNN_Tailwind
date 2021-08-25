![Airplane silhouette with red D N N and blue Tailwind painted on the side](https://raw.githubusercontent.com/skrantzman/DNN_Tailwind/master/images/DNN_Tailwind.svg)

![GitHub package.json version](https://img.shields.io/github/package-json/v/skrantzman/dnn_tailwind?logo=github) &ensp;
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/skrantzman/dnn_tailwind/tailwindcss?color=38B2AC&logo=tailwind-css) &ensp;
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/skrantzman/dnn_tailwind?logo=Snyk) &ensp;
![GitHub](https://img.shields.io/github/license/skrantzman/dnn_tailwind) &ensp;
![GitHub repo size](https://img.shields.io/github/repo-size/skrantzman/dnn_tailwind?logo=github)

&nbsp;

**Dnn_Tailwind** is a powerful theme development platform that allows you to create robust and responsive DNN website themes, all while writing very little CSS. It achieves this by leveraging the power of the Tailwind CSS framework. It is based on [nvQuickTheme](https://www.nvquicktheme.com/) by nvisionative, but the CSS framework has been ported over from Bootstrap, to Tailwind CSS.

If you are wondering why we would choose Tailwind CSS as our framework of choice, Adam Wathan creator of Tailwind CSS answers that question best:

> "If you're sick of fighting the framework, overriding unwanted styles, and battling specificity wars, Tailwind was made for you."

To read more about DNN_Tailwind or view our documentation pages, please visit [dnntailwind.com](https://dnntailwind.com). If you are unsure of what Tailwind CSS is, or how it works, visit [tailwindcss.com](http://www.tailwindcss.com) to find out more. If you are well aware of what `DNN` is, what `Tailwind CSS` is and are familiar with `nvQuickTheme`, then just jump down to our Quick Start Guide below to get on the fast track.

## Quick Start Guide

\* **_This quick start guide also assumes you have `Node`, `NPM` (or `Yarn`), and `Gulp` installed in your development environment. If you do not, visit our full [installation
documentation](https://www.dnntailwind.com/Installation)_**.

### Installation Instructions

Follow the steps outlined below to install DNN_Tailwind in your development environment.

1. Open a terminal/console window.

2. Clone this repository to the skins folder of a local DNN development machine with a domain name such as `theme.dnndev.me`. I recommend using [nvQuickSite](https://www.nvquicksite.com/) to quickly setup a DNN dev environment with the `dnndev.me` domain name which resolves to localhost.

   ```
   git clone https://github.com/skrantzman/DNN_Tailwind.git
   ```

   The name of the root folder created is "DNN_Tailwind", but you can rename this to your theme name if desired.

3. Change directory into DNN_Tailwind folder.
   ```
   cd DNN_Tailwind
   ```
4. Launch VS Code (or your editor of choice).

   ```
   code .
   ```

   You can open the Terminal window of your code editor for the following steps or continue to run them in the terminal/console you have open.

5. Install the dependencies need for the framework using either NPM or Yarn. It is not recommended that you swith between dependency managers, so pick one and stick with it.
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
6. Create/Update Tailwind css files (/src/css/style.css) as well as the projects dist folder and files.
   ```
   gulp build
   ```
7. Enable auto updating the dist files every time you save.

   ```
   gulp watch
   ```

   At this point you are ready to start customizing the base theme with Tailwind CSS!

### Purging Instructions

Tailwind CSS has thousands of utility classes, many of which you will not use in your final build. Purging your style.css file of those unused tailwind utility classes is an important step in drastically reducing the size of your css and increasing your page load speeds.

1. If you want to purge unused Tailwind css from the src/css/style.css file run the following command:
   ```
   gulp build_p
   ```
2. If you ever want to revert the src/css/style.css file, back to include all Tailwind CSS utility classes, run the following command:
   ```
   gulp tailwind
   ```
3. If you want to revert both src/css/style.css as well as the minified dist/css/style.min.css back to include all Tailwind CSS utility classes, run the following command:
   ```
   gulb build
   ```

### Deployment Instructions

Once you have completed styling your theme you can now package it up for deployment. You have two package option.

- FULL:&emsp;Style.min.css will contain all Tailwind CSS utility classes and will be ~ 2,253 KB in size.

  ```
  gulp package
  ```

- PURGED:&emsp;Style.min.css will have all unused Tailwind CSS utility classes remove, and be ~ 100 KB in size\*

  ```
  gulp package_p
  ```

  After running either of these commands, you will find your zipped theme in the newly created "build" folder at the theme root.

  \* _100 KB based on Out Of The Box theme. Your actual file size will depend on how many Tailwind CSS utility classes you use in your theme as well as how many custom classes you create_.
