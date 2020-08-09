### Tailwind CSS

By far the largest dependency, Tailwind CSS, is the framework we chose to use because: _"Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."_

We encourage anyone unfamiliar with Tailwind to bookmark and reference their extensive documentation [here](https://tailwindcss.com//).

Our **default.ascx**, **\_header.ascx** and **\_footer.ascx** partials show proper use of Tailwind and its utility-first classes. Bootstrap is robust, powerful, and has all the bells and whistles that most websites need.

---

### @tailwindcss/typography

@tailwindcss/typography is a plugin for Tailwind CSS.

Because Tailwind is a non-opinionated css framework, even elements such as `p`, `h1-h6`, `ect`... have no style applied to them, and show up as plain text. In the theme's design, this is not an issue as we style our elements with Tailwind's utility classes.

However this causes a problem when our end users use DNN's built-in HTML editor. Although it appears they are styling the text in the editor, when they save, their text shows up as plain text, as the elements are not styled by Tailwind.

We get around this by adding "prose" classes from Tailwind's typorgraphy plugin, to DNN's panes, such as the ContentPane. This allows the content created within the html text editor to appear as styled. I encourage you to learn more about the typography plugin by viewing its documentaion [here](https://github.com/tailwindlabs/tailwindcss-typography).
