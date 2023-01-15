import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Richards Blog',
    description: 'My journey learning Astro',
    site: 'https://richardsblog.netlify.app',
    items: import.meta.glob('./**/*.md'),
    customData: `<language>en-us</language>`,
})