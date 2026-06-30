# Bara Health

Static website for [barahealth.com](https://barahealth.com), serving both an English (`/`) and Icelandic (`/is/`) version of the site.

## About Bara

Bara designs and produces support cushions and other health and lifestyle products, including the Apple, Pear, and Snake cushions and the Handpad. The first cushion was created in 2002 as custom-built arm support for a wheelchair user with ALS, and was later refined with users and health-care professionals into the current product line. Bara's products are distributed in Iceland through the Assistive-device division of the Icelandic Health Insurance and are sold to a growing base of users abroad.

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

The site will be available at <http://localhost:3000>.

To live-reload on file changes:

```bash
caddy run --watch
```
