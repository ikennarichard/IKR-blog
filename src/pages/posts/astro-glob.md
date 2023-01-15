---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Astro.glob'
pubDate: 2023-01-14
description: 'Load local files into your site with astro.glob()'
author: 'Ikenna Richard'
image:
 url: '/assets/earth-from-space.jpg' 
alt: 'Earth seen from space'

tags: ['glob']
---

Astro provides a way to fetch local files into your site with Astro.glob methd. The Astro.glob function takes one parameter, a relative URL of the files to fetch and returns an array of the matching files. The process is asynchronous.

```astro
const allPosts = await Astro.glob('../pages/posts/*.md')
```

Under the hood `Astro.glob` uses Vites `import.meta.glob()` which brings us to the point, Astro.glob dosent support dynamic variables or string interpolation only static string literals. This is due to a limitation in Vite's `import.meta.glob()` implementation. 

One way to get around this limitation is to import all the files you need using `Astro.glob()`, then filter them
```astro
const posts = await Astro.glob('../pages/blog/*.md');
const myFeaturedPost = posts.find(post => post.file.includes(pathToMyFeaturedPost));
```
Check the link below for more details
https://docs.astro.build/en/guides/troubleshooting/#supported-values
https://docs.astro.build/en/reference/api-reference/#astro-global