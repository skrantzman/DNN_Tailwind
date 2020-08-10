---
layout: default
permalink: /Commands
---

Make sure you have navigated to your project root within your node command line. From this point you can use several commands. There are a few main dev commands, and then several smaller commands for more granular control.

## Main Dev Commands

### gulp init

This command initializes all third-party dependencies utilized within **DNN_Tailwind**. More specifically, it executes the following SubTask Commands in series (completes each task before the next):

- **gulp fontsInit**
- **gulp slimMenuInit**

### gulp build

This command cleans your `./dist/` folder, then error checks, concatenates and minifies all your JS and SCSS into the `./dist/` folder, as well as copies your containers to the correct folder. More specifically, it executes the following commands in series (completes each task before the next):

- **gulp cleandist**
- **gulp init**
- **gulp tailwind**
- **gulp styles**
- **gulp scripts**
- **gulp images**
- **gulp containers**
- **gulp manifest**

### gulp build_p

This command does exactly what the above `gulp build` command does, but also purges your style.css file of unused tailwind utility classes.

- **gulp cleandist**
- **gulp init**
- **gulp tailwind**
- **gulp purge**
- **gulp styles**
- **gulp scripts**
- **gulp images**
- **gulp containers**
- **gulp manifest**

\* **_If you have used `gulp build_p` to purge your css, and you want to restore the purged css classes, just rerun `gulp build`._**

### gulp watch

This sets your node instance to watch all changes of images, JS and CSS in the `./src/` folder, as well as containers in the `./containers/` folder. Upon changes it will automatically run the **gulp build** command.

**Note:** _This command will take over your node instance (in Command Prompt, PowerShell, Git Bash, VS Code Terminal, etc.). Therefore, you may want to start a new instance if you need to run other commands at the same time._

### gulp package

This command builds and packages your custom theme into a DNN theme installation package (ZIP file). It will place the ZIP file in the `./build/` folder using the following naming convention: `[project]_[version]_install.zip`

### gulp package_p

This command does the exact same thing as the `gulp package` command, but also purges your style.css file of unused tailwind classes befor minifying it.

---

## SubTask Commands

These commands are mostly used within the four Main Dev Commands, but can be used individually if desired.

### gulp manifest

You should recognize this command from setting up your project. This command will update your manifest with the information provided in `project-details.json`. Anytime you need to update this information, like when changing the version number, you will need to run this command. This command is also executed as a part of the **gulp build** and **gulp package** commands.

### gulp scripts

Error checks, concatenates, compiles, and minifies all JS in the `./src/js/` folder and distributes to the `./dist/js/` folder.

### gulp styles

Error checks, concatenates, and minifies all CSS in the `./src/css/` folder and distributes to the `./dist/css/` folder.

### gulp tailwind

Creates/Updates the style.css file base on your tailwind.config.js tailwind.css, custom-\*.css files.

### gulp images

Compresses images in the `./src/images/` folder and distributes to the `./dist/images/` folder.

### gulp containers

Copies containers to the correct folder within your DNN instance (assuming you are developing within a DNN instance). This translates to `../../Containers/[your theme project name]/`.

---

## Process Commands

These commands are used within other commands and for other special situations. _We recommend use of these only for advanced users._

### gulp cleandist

Deletes contents of `./dist/` folder. This is particularly useful when assets (such as images) are no longer required and removed from `./src/` folder. It is the first task triggered during **gulp build**.

### gulp zipdist

ZIPs contents of `./dist/` folder. Used to prepare for theme packaging.

### gulp zipcontainers

ZIPs contents of `./containers/` folder. Used to prepare for theme packaging.

### gulp zipelse

ZIPs contents of `./menus/` folder, `./partials/` folder, and all ASCX, XML, HTML and HTML files withinthe root folder (`./`). Used to prepare for theme packaging.

### gulp zippackage

ZIPs all subset ZIP files and other pertinent project files into theme package installation file using the following naming convention: `[project]_[version]_install.zip`

### gulp cleantemp

Deletes all temporary ZIP and project files from `./temp/` folder used in package tasks.
