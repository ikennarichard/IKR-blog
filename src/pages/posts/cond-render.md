---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Conditional Rendering'
pubDate: 2023-01-13
description: 'Conditional rendering with Astro'
author: 'Ikenna Richard'
image:
 url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg' 
alt: 'The Astro logo with the word One.'

tags: ["conditional rendering"]
---

Conditional rendering is the ability to render content when a certain condition is met. Most web frameworks including Astro implement conditional rendering, it makes Single Page Applications (SPA) dynamic  and more interactive. 

You can use javascript variables in astro to decide whether or not to render contents of the HTML `<body>` content.
```astro

{happy && <p>Astro is awesome</p>}
{finished && <p>I finished this tutorial</p>}
{happy && <p>My goal is to finish in three days</p>}


```

Javascript variables, are declared in the frontmatter component script within an Astro component. 

Astro uses JSX like expressions `<p> {happy} </p>` to insert the Javascript expression within the components HTML template.