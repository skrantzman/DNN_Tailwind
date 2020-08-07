![Airplane silhouette with red D N N and blue Tailwind painted on the side](https://raw.githubusercontent.com/skrantzman/DNN_Tailwind/master/images/DNN_Tailwind.svg)

## This project is under development and not ready for production

- ### Status: Currently in Beta-Testing phase

  - Started production on 7/14/2020 - 9:00 am pst.
  - Beta-testing started on 7/23/2020 - 2:20 pm pst.

**DNN_Tailwind**, based on [nvQuickTheme](https://github.com/nvisionative/nvQuickTheme) by nvisionative,
is more than just a great minimalist DNN (DotNetNuke) theme. It is a powerful **Tailwind CSS** theme building framework and developer workflow for DNN themes.

## Instalation Instructions

1. Clone this git to the skins folder of a local DNN development machine accessible by dnndev.me. The default folder name is "DNN_Tailwind", but you can rename this if desired.

   ```yaml
   git clone https://github.com/skrantzman/DNN_Tailwind.git
   ```

2. Change directory into DNN_Tailwind folder.
   ```yaml
   cd DNN_Tailwind
   ```
3. Launch VS Code (or your editor of choice)
   ```yaml
   code .
   ```
4. You can open the Terminal window of your code editor for the following steps or continute to run them in the terminal you have open.

5. Install the dependencies need for the framework
   ```yaml
   npm install
   ```
   or
   ```yaml
   yarn install
   ```
6. Create/Update Tailwind css files (/src/css/style.css) as well as the projects dist folder and files.
   ```yaml
   gulp build
   ```
7. Enable auto updating the dist files every time you save.

   ```yaml
   gulp watch
   ```

   At this point you are ready to start customizing the base theme with Tailwind CSS!

## Purging Instructions

1. If you want to purge unused Tailwind css from the src/css/style.css file run the following command:
   ```yaml
   gulp build_p
   ```
2. If you ever want to revert the src/css/style.css file, back to the full file, run the following command:
   ```yaml
   gulp tailwind
   ```

## Deployment Instructions

Once you have completed styling your theme you can now package it up for deployment. You have two package option.

- Full Css ~ 5,688 KB (style.min.css ~ 2,143 KB, style.min.css.map ~ 3,545 KB)

  ```yaml
  gulp package
  ```

- Purged Css ~ 101 KB (style.min.css ~ 33 KB, style.min.css.map ~ 66 KB)

  ```yaml
  gulp package_p
  ```

After running either of these commands, you will find your zipped theme in the newly created "build" folder at the theme root.
