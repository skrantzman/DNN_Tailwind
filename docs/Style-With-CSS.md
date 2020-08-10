---
layout: default
title: Style With CSS
permalink: /Style-With-CSS
---

### CSS

Our css is located under `[root]/src/css/`. Unlike nvQuickTheme which uses scss (sass), DNN_Tailwind has removed scss and replaced it with pure css. This is to reflect the design of tailwind, which requires little custom css by nature. However we still hold true to nvQuickTheme's organizational structure for our css.

### Adding custom .css files

Our organization is solid, but it won't always cover what you have. You will need to add your own .scss files for your projects, just try to keep with the organization! SCSS needs to be compiled, and to do so, there are instruction files setup to tell it how to compile, so when you add a new .scss file, you need to make sure you setup the instruction file to include your file. For almost all of them, they are named after the folder they are in. `/custom-components/components.css` for instance:

```css
@import "buttons";
@import "nav";
@import "search";
@import "[your new file]";
```

### Import Order

It's important to keep in mind that order matters when compiling tailwind css because that's the order it will be in the final css document. If you have css that is dependent on previous css, you will need to make sure that it's compiling in the correct order for both tailwind and your custom css. The current order is as such:

```scss
// ***** BASE CLASSES *****

// tailwind base classes
@import "tailwindcss/base";

// followed by our custom base classes
@import "./custom-base-styles/base-styles.css";
- @import "colors.css";
- @import "fonts.css";
- @import "styles.css";

@import "./custom-layouts/layouts.css";
- @import "popUpSkin.css";

// ***** COMPONENT CLASSES *****

// tailwind components classes
@import "tailwindcss/components";

// followed by our custom component classes
@import "./custom-components/components.css";
- @import "buttons.css";
- @import "nav.css";
- @import "search.css";

@import "./dnn-base-styles/dnn-base-styles.css";
- @import "dnn.css";
- @import "login.css";

// ***** UTILITY CLASSES *****

// tailwind utility classes
@import "tailwindcss/utilities";

// followed by
@import "./custom-utilities/utilities.css";
- @import "helpers.css";
```

### /custom-base-styles/

This folder and its files are used for theme colors, font-face declaratoions and base element styling. Ex:

```scss
// all headings are indigo-500 with font-weight of 700
h1,
h2,
h3,
h4,
h5,
h6 {
	@apply text-indigo-500 font-bold;
}
```

### /custom-components/

Any website component styling should be done in this folder. We already have it broken down into several components, but you should add more if it makes sense, for instance, if you added an FAQ module with your own custom styling, you could add a `faq.css` to this folder.

### /custom-utilities/

This is where any utilities you create to extend tailwind's already excelent functionality are located.

### /dnn-base-styles/

Any DNN specific styling is done here. We have already add dnn base styles as well as login specific styling. Fell free to modify/add styles as needed for your design.
