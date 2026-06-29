# Bara Health

Static website for [barahealth.com](https://barahealth.com), serving both an English (`/`) and Icelandic (`/is/`) version of the site.

## Structure

```
.
├── index.html          # English home page
├── about.html
├── handpad.html
├── includes/           # Shared partials (English)
│   ├── head.html
│   ├── header.html
│   └── footer.html
├── is/                 # Icelandic site
│   ├── index.html
│   ├── about.html
│   ├── handpad.html
│   └── includes/       # Shared partials (Icelandic)
│       ├── head.html
│       ├── header.html
│       └── footer.html
├── content/            # Images and media
├── js/                 # JavaScript (jQuery, plugins)
├── plugins/            # CSS from WordPress block library
└── style/              # Site stylesheets
```

HTML pages use [Caddy template](https://caddyserver.com/docs/modules/http.handlers.templates) `{{ include }}` directives to pull in shared partials for the `<head>`, header, and footer.

## Local development

Requires [Caddy](https://caddyserver.com/docs/install).

```bash
caddy run
```

The site will be available at <http://localhost:8080>.

To live-reload on file changes:

```bash
caddy run --watch
```
