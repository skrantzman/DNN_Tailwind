# Todos in DNN_Tailwind build process

## Styling

- [x] Style default.axcx with Tailwind classes and its partials.
  - [x] \_footer.ascx
  - [x] \_header.ascx
- [ ] Style any container ascx files
- [x] Create PostCss entry point files for Tailwind.css
  - [x] base-styles.css
  - [x] components.css
  - [x] utilities.css
- [ ] Add additional import files as needed to the above entry point files (This will start to resemble nvQuickTheme's scss folder structure)
  - [x] Prime example, convert \_nav.scss to Tailwind structured components in nav.css file iported into components.css

## Functionality

- [x] Add Tailwind/Typography plugin. - This is needed so that end users can style page content with the buil-in html editor! Without it, elements like h1 will appear as plain text unless they know to go into the source html and add appropriate tailwind classes which they most likely will not.
- [x] Add PostCss-Import plugin. This will allow us to create structured CSS import files if needed.
- [ ] Determing if Postcss-Purgecss is needed to clean up style.css of any unused tailwind classes and if so add file list to postcss.config.js
  - This could be interesting as we don't know as developers if the endusers would need access to any classes not currently used in the skin templates
- [ ] Possibly move build script out of package.json and into gulpfile.js
- [ ] Possibly port over from using SASS to PostCSS as the only preprocessor

## Documentation

- [ ] Update documentation to reflect Tailwind framework and not Bootstrap.
