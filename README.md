![Airplane silhouette with red D N N and blue Tailwind painted on the side](https://raw.githubusercontent.com/skrantzman/DNN_Tailwind/master/images/DNN_Tailwind.png)

## This project is under development and not ready for production

Started production on 7/14/2020 - 9:00 am pst.

**DNN_Tailwind**, based on [nvQuickTheme](https://github.com/nvisionative/nvQuickTheme) by nvisionative,
is more than just a great minimalist DNN (DotNetNuke) theme. It is a powerful **Tailwind CSS** theme building framework and developer workflow.

## Instalation Instructions

1. Clone this git to the skins folder of a local DNN development machine accessible by dnndev.me. The default folder name is "DNN_Tailwind", but you can rename this if desired.

2. Change directory into DNN_Tailwind folder.
   ```
   cd DNN_Tailwind
   ```
3. Install then dependencies need for the framework
   ```
   yarn install
   ```
4. Create/Update the Tailwind CSS files... This will create a new folder under src/scss called tailwind that contains the \_tailwind.scss file.
   ```
   yarn run build
   ```
5. Create/Update the projects dist folder and files.
   ```
   gulp build
   ```
6. Enable auto updating the dist files every time you save.

   ```
   gulp watch
   ```

   At this point you are ready to start customizing the base theme with Tailwind CSS!

7. Once you're satisived with your theme you can package it up into a dnn skin package with the following command.

   ```
   gulp package
   ```
