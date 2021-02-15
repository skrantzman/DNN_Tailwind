---
layout: default
title: Dependencies
permalink: /Dependencies
---

### Tailwind CSS

By far the largest dependency, Tailwind CSS, is the framework we chose to use because: _"Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."_

We encourage anyone unfamiliar with Tailwind to bookmark and reference their extensive documentation [here](https://tailwindcss.com//).

Our **default.ascx**, **\_header.ascx** and **\_footer.ascx** partials show proper use of Tailwind and its utility-first classes. Tailwind is robust, powerful, an most importantly non-opinionated. Because of this, you have everthing you need for total control and flexibility in designing your DNN Theme, including Flexbox and CSS Grid!

---

### @tailwindcss/typography

@tailwindcss/typography is a plugin for Tailwind CSS.

Because Tailwind is a non-opinionated css framework, even elements such as `p`, `h1-h6`, `ect`... have no style applied to them, and show up as plain text. In the theme's design, this is not an issue as we style our elements with Tailwind's utility classes.

However this causes a problem when our end users use DNN's built-in HTML editor or third party wsiswig modules. Although it appears they are styling the text in the editor, when they save, their text shows up as plain text, as the elements are not styled by Tailwind.

We get around this by adding "prose" classes from Tailwind's typography plugin, to DNN's panes, such as the ContentPane. This allows the content created within the html text editor to appear as styled. I encourage you to learn more about the typography plugin by viewing its documentation [here](https://github.com/tailwindlabs/tailwindcss-typography).

---

### @fortawesome/fontawesome-free v5

Font Awesome Free is arguably the most used icon font set available today. And why not, they offer 1,609 icons for free to use on your website. The following free, fa-brands, fa-regular and fa-solid font families are included in the distributed webfonts folder, although you can modify the code and use a CDN if you prefer.  In addition, it is very easy to modify the code to include all the Font Awesome paid icons, if you have a Pro subscription, bringing the total number of available fonts to 7,865.  You can view the availible Font Awesome Free icons [here](https://fontawesome.com/icons).





