## Color Scheme

### Defining Tailwind Colors

In tailwind, you can define colors in the `./tailwind.config.js` file. When using this file, you have the option to override all of tailwind's default colors, or you may extend these colors with your own. As an example, we extended tailwind's base colors with 9 shades of each of the following three colors:

- `dnnred`
- `dnnblue`
- `dnnbrown`

We created our shades of the above colors with a nice little utility called [Color Shades Generator for Tailwind CSS](https://javisperez.github.io/tailwindcolorshades/#/).

Once you define a color for Tailwind, that color is availible in most classes that colors are used, i.e.

- `text-dnnblue-700`
- `bg-dnnbrown-500`
- `hover:bg-dnnred-300`

You can read more about customizing Tailwind CSS colors in their documentation [here](https://tailwindcss.com/docs/customizing-colors/#app).

### Change Color Scheme

Most websites however are going to key off the colors for the brand being represented. Following industry best practices, there are typically three colors selected for the website main colors: primary, secondary and tertiary.

So as an alternative method, we defined these within the `./src/css/custom-base-styles/colors.css` file as variables. Updating these CSS variable color definitions using HEX or RGB colors will change usage of these throughout the entire theme.

_If you change these colors and do not have `gulp watch` running, don't forget to run `gulp build` to rebuild the style.css file, to reflect your changes._
