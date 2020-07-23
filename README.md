![Airplane silhouette with red D N N and blue Tailwind painted on the side](https://raw.githubusercontent.com/skrantzman/DNN_Tailwind/master/images/DNN_Tailwind.svg)

## This project is under development and not ready for production

Started production on 7/14/2020 - 9:00 am pst.

**DNN_Tailwind**, based on [nvQuickTheme](https://github.com/nvisionative/nvQuickTheme) by nvisionative,
is more than just a great minimalist DNN (DotNetNuke) theme. It is a powerful **Tailwind CSS** theme building framework and developer workflow.

## Instalation Instructions

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
4. You can open the Terminal window of your code editor for the following steps.

5. Install the dependencies need for the framework
   ```
   npm install
   or
   yarn install
   ```
6. Create/Update Tailwind css files as well as the projects dist folder and files.
   ```
   gulp build
   ```
7. Enable auto updating the dist files every time you save.

   ```
   gulp watch
   ```

   At this point you are ready to start customizing the base theme with Tailwind CSS!

8. Once you're satisfied with your theme you can package it up into a dnn skin package with the following command.

   ```
   gulp package
   ```
