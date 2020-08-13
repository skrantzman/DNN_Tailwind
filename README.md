![Airplane silhouette with red D N N and blue Tailwind painted on the side](https://raw.githubusercontent.com/skrantzman/DNN_Tailwind/master/images/DNN_Tailwind.svg)

![GitHub package.json version](https://img.shields.io/github/package-json/v/skrantzman/dnn_tailwind) &ensp;
![GitHub repo size](https://img.shields.io/github/repo-size/skrantzman/dnn_tailwind) &ensp;
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/skrantzman/dnn_tailwind/tailwindcss?color=blueviolet) &ensp;
[![Known Vulnerabilities](https://snyk.io/test/github/skrantzman/DNN_Tailwind/badge.svg?targetFile=package.json)](https://snyk.io/test/github/skrantzman/DNN_Tailwind?targetFile=package.json) &ensp;
![GitHub last commit](https://img.shields.io/github/last-commit/skrantzman/dnn_tailwind)

&nbsp;

**Dnn_Tailwind** is a powerful theme development platform that allows you to create robust and responsive DNN website themes, all while writing very little CSS. It achieves this by leveraging the power of the Tailwind CSS framework. It is based on [nvQuickTheme](https://www.nvquicktheme.com/) by nvisionative, but the CSS framework has been ported over from Bootstrap, to Tailwind CSS.

Adam Wathan creator of Tailwind CSS answers the question of "Why Tailwind"

> "If you're sick of fighting the framework, overriding unwanted styles, and battling specificity wars, Tailwind was made for you."

To read more about **DNN_Tailwind** and view our documentation pages, please visit [https://dnntailwind.com](https://dnntailwind.com). If you are well aware of what [DNN](https://www.dnnsoftware.com/) is, what [Tailwind CSS](http://www.tailwindcss.com) is and are familiar with [nvQuickTheme](https://www.nvquicktheme.com/), then just jump down to our Quick Start Guide below. If you are unfamiliar with Tailwind CSS and are intrigued, you can read more at [https://tailwindcss.com](http://www.tailwindcss.com).

## Quick Start Guide

### Instalation Instructions

1. Clone this git to the skins folder of a local DNN development machine accessible by dnndev.me. The default folder name is "DNN_Tailwind", but you can rename this if desired.

   ```
   git clone https://github.com/skrantzman/DNN_Tailwind.git
   ```

2. Change directory into DNN_Tailwind folder.
   ```
   cd DNN_Tailwind
   ```
3. Launch VS Code (or your editor of choice)
   ```
   code .
   ```
4. You can open the Terminal window of your code editor for the following steps or continue to run them in the terminal you have open.

5. Install the dependencies need for the framework
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
2. If you ever want to revert the src/css/style.css file, back to the full file, run the following command:
   ```
   gulp tailwind
   ```

### Deployment Instructions

Once you have completed styling your theme you can now package it up for deployment. You have two package option.

- Full style.min.css ~ 2,253 KB

  ```
  gulp package
  ```

- Purged style.min.css ~ 100 KB

  ```
  gulp package_p
  ```

After running either of these commands, you will find your zipped theme in the newly created "build" folder at the theme root.
