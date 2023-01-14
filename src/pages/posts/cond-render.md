---
title: 'Conditional Rendering'
pubDate: 2023-1-13
description: 'Conditional rendering with Astro'
author: 'Ikenna Richard'

tags: ["conditional rendering","astro", "blogging", "learning in public"]
---

# Conditional Rendering

Published on: 2023-01-13

Conditional rendering is the ability to render content when a certain condition is met. Most web frameworks including Astro implement conditional rendering, it makes Single Page Applications (SPA) dynamic  and more interactive. 

You can use javascript variables in astro to decide whether or not to render contents of the HTML `<body>` content.
```astro

{happy && <p>Astro is awesome</p>}
{finished && <p>I finished this tutorial</p>}
{happy && <p>My goal is to finish in three days</p>}


```

Javascript variables, are declared in the frontmatter component script within an Astro component. 

Astro uses JSX like expressions `<p> {happy} </p>` to insert the Javascript expression within the components HTML template.