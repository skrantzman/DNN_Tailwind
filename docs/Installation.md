---
layout: default
title: Installation
permalink: /Installation
---

## Prerequisites

There are thre prerequisites for working with DNN_Tailwind:

- Node
- Yarn
- Gulp

If you have these installed skip to DNN_Tailwind Installation section below, otherwise install them in the order listed.

### Install Node

Node is a server framework that we use to keep track of all our dependencies and help run our scripts. Head over to [https://nodejs.org/en/](https://nodejs.org/en/) to find out how to install Node.

Once you have Node installed, load up the Node command prompt. This is where you will be running all commands for the environment.

---

### Install Yarn

Yarn is a package manager that we use to manage all our dependencies quickly and securely.

Refer to the [yarn installation page](https://yarnpkg.com/en/docs/install) for details on your specific operating system.

---

### Install Gulp

Gulp is our task script manager and executor. In order for us to run this on command line in any project we're doing, from the node command line, you will need to run: `npm install gulp -g`. This will install Gulp globally on your machine. Note that if you run several installations of nvQuickTheme, you will only need to run this command on the first install.

---

## DNN_Tailwind installation

### Clone Repository

The dev environment is setup to be run directly in a DNN instance under: `Portals\_default\Skins\[your theme name]`. Setup your empty Skin folder and clone our repo to that.

---

### Install Dependencies

With Yarn & Gulp installed, and the repo cloned, we can now use that package file.

Run: `yarn` or `yarn install`

This will read the package file and pull the necessary dependencies required for the environment.

---

### Build Project

Now that the dependencies are install for the development environment, we should now build the project to make sure all css files are up to date.

Run: `gulp build`

This will rebuild your style.css file to include any changes that may have been made to your tailwind.config.js, tailwind.css and custom-\*.css files in addition to other task.

With the repo cloned, all of the dependencies installed, and the project built, your dev environment is ready to go!
