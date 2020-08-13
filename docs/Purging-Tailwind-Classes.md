---
layout: default
title: Purging Tailwind Classes
permalink: /Purging-Tailwind-Classes
---

Tailwind CSS derives its power and flexibility in designing custom websites/themes, through its thousands of utility classes. However, this flexibility and control comes at a cost, in the form of a large css file. The development build of Tailwind CSS is 1,677.2K uncompressed. Even minified and compressed, the file size is 130.4k. Add on top of that the needed DNN classes so that your dnn site functions correctly, and you can see the size of the file can quickly grow way beyond what is needed for fast page load speeds.

It is important when working with Tailwind to have a strategy in place to keep the size of your generated css small and perfromant. Many aspects of these strategies are beyond the scope of this documentation, but you may read more about them on Tailwinds' website here: [Controlling File Size](https://tailwindcss.com/docs/controlling-file-size).

One strategy in particular, "Purging", is very much in your control and made extremely easy using DNN_Tailwind. Purging involves tree-shaking all of the unused Tailwind styles that you do not need from your final production build. It is achieved through one of two commands:

```
gulp build_p
```

or

```
gulp package_p
```

### Gulp build_p

This command works similar to the standard `gulp build` command in DNN_Tailwind but purges all unused Tailwind styles in addition to its other tasks. As an example, this will take the Out-of-Box theme's style.min.css file in the dist/css folder from 2,253k down to 100k. That's a significant decrease in file size.

To reverse this command and add back all the unused Tailwind styles, simply run `gulp build` (gulp build_p without the trailing \_p).

### Gulp package_p

This is the command you will want to run when you are ready to package your theme into an installable zip file, without the unused tailwind styles. `Gulp package_p` does everything the standard 'gulp package' command does but includes the purging of unused styles as well.
