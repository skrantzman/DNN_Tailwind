---
layout: default
title: Add Font Awesome Pro Icons
permalink: /Add-Font-Awesome-Pro-Icons
---

### Add Your Font Awesome 

If you would like access to more icons than the Font Awesome Free collection provides, you can add your additional Icons if you have a Font Awesome Pro subscription.  The steps below are on how to install Font Awesome Pro via npm packet manager.

1. At the root of your DNN_Tailwind project (or where you have your package.json file), create a new file called `.npmrc`.
   
2. Paste in the following code: `@fortawesome:registry=https://npm.fontawesome.com/ //npm.fontawesome.com/:_authToken=TOKEN`.
   
3. On the Font Awesome website, login to your account, select the profile icon, and then select Account Details.
   
4. Scroll down the page and locate the "Pro Package Token" for your account and copy it.
   
5. Now back in the .nmprc file select the word `TOKEN` at the end of the code and pate in your code.
   
6. Save your changes.  Your code should now look something like this: <br />
    <img src="../assets/images/npmrc_file.png" alt="npmrc file" />

7. Next open the gulp.js file found at the root of the project and locate `@fortawesome/fontawesome-free` in the Dependencies section.
   
8. Replaece `free` with `pro` and save your changes.
   
9.  Open the gulp.js file found at the root of the project.
    
10. Using find and replace, find `fontawesome-free` and replace with `fontawesome-pro` and save your changes.

You are now ready to rebuild your project by running `gulp build`.  If you are successful you should now have access to the following Font Awesome font family sets in your /dist/webfonts folder: <br>
    <img src="../assets/images/FA_webfonts.png" alt="Font Awesome Pro Font Families" />

You can now use these pro icons in your theme and they will be available to all content modules on the web site.
