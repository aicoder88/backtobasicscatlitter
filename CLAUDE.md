# CLAUDE.md - Back to Basics Cat Litter

## Project Overview

Satellite marketing site for [Purrify.ca](https://purrify.ca) promoting natural, simple cat litter solutions. Built with Eleventy (11ty) static site generator.

## Tech Stack

- **Framework:** Eleventy 3.x
- **Templating:** Nunjucks (.njk)
- **Styling:** Vanilla CSS
- **Deployment:** Static HTML

## Project Structure

```
backtobasicscatlitter/
├── src/
│   ├── _data/
│   │   └── site.json       # Site config, nav, Purrify links
│   ├── _includes/
│   │   └── partials/       # Header, footer components
│   ├── _layouts/
│   │   └── base.njk        # Main HTML template
│   ├── css/
│   │   └── style.css       # All styles
│   ├── pages/              # Content pages
│   │   ├── guide.njk
│   │   ├── ingredients.njk
│   │   ├── natural-options.njk
│   │   └── why-simple.njk
│   ├── index.njk           # Homepage
│   ├── robots.txt.njk      # SEO robots file
│   └── sitemap.njk         # XML sitemap
├── public/
│   ├── favicon.svg         # Site favicon
│   └── og-image.png        # Social sharing image (1200x630)
├── _site/                  # Built output (git-ignored)
├── eleventy.config.js      # Eleventy configuration
└── package.json
```

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Clean build output
npm run clean
```

## Key Files

### Site Configuration (`src/_data/site.json`)
Contains site metadata, navigation structure, and all Purrify.ca product links with UTM tracking.

### Base Layout (`src/_layouts/base.njk`)
Includes all meta tags, Open Graph, Twitter cards, and Schema.org structured data.

### Eleventy Config (`eleventy.config.js`)
- Passthrough copy for CSS and public assets
- `year` shortcode for dynamic copyright year
- `utm` filter for adding UTM tracking to Purrify links

## Content Guidelines

- All pages use front matter with `layout`, `title`, and `description`
- Purrify links use the `utm` filter: `{{ site.purrify.products | utm('source') }}`
- Keep messaging focused on "simple" and "natural" themes

## SEO Features

- Canonical URLs on all pages
- Open Graph and Twitter meta tags
- XML sitemap at `/sitemap.xml`
- Robots.txt allowing all crawlers
- Schema.org WebSite structured data

## Adding New Pages

1. Create `.njk` file in `src/pages/`
2. Add front matter:
   ```yaml
   ---
   layout: base.njk
   title: Page Title
   description: Meta description for SEO
   ---
   ```
3. Add to navigation in `src/_data/site.json` if needed
4. Build and verify with `npm run dev`
