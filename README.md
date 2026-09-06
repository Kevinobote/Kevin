# Kevin Obote: Personal Portfolio

Personal portfolio site for Kevin Obote: AI researcher and engineer, Nairobi. Covers research and
publications, project case studies, professional experience, teaching, and volunteering, in a calm
editorial design.

**Live:** [kevin.guild-code.com](https://kevin.guild-code.com)

## Tech stack

| Layer | Tools |
| --- | --- |
| Frontend | React 18, Vite 6, Tailwind CSS 3, Framer Motion, React Router 7 |
| Fonts | Fraunces (headings), Inter (body), JetBrains Mono (metrics/DOIs) |
| Icons | Lucide React, React Icons |
| Backend (optional) | Django 4.2 + DRF, Resend API for the contact email |
| Hosting | DirectAdmin / LiteSpeed shared hosting, served as static files |

## How the contact form works

The deployed site is **fully static**. The contact form composes a pre-filled email in the
visitor's mail client (`mailto:`), so no server is required. The Django app in `backend/` is an
optional upgrade for a true server-side form (it emails via Resend); it is not deployed by default.

## Project structure

```
frontend/
  index.html            # document head: SEO, Open Graph, JSON-LD, fonts, theme bootstrap
  public/
    .htaccess           # SPA routing, caching, compression, security headers
    robots.txt
    sitemap.xml
    Kevin_Obote.pdf     # downloadable CV
  src/
    App.jsx             # routes
    components/          # Hero, Navbar, Footer, Experience, Testimonials, CTA, ...
    pages/               # main, about, research, projects, experience, teaching, volunteer, contact
    data/socials.js      # single source of truth for external links
    contexts/            # theme (light default, follows OS, remembers choice)
    assets/              # images and logos

backend/                # optional Django contact API (not deployed by default)
  backend/               # settings, urls
  core/                  # ContactView, model, serializer
  passenger_wsgi.py      # WSGI entry point for Passenger hosts
  requirements.txt

DEPLOYMENT.md           # step-by-step deploy notes for DirectAdmin
```

## Local development

### Frontend

```bash
cd frontend
npm install
npm run dev            # http://localhost:5173
```

> Note: this project pins `esbuild` to `0.25.10` via `overrides` in `package.json` because
> `0.24.x` crashes on some Linux machines. Keep the override until Vite ships a newer base esbuild.

### Backend (only if you want the server-side contact form)

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export RESEND_API_KEY="re_your_key"
export DEBUG=True
python manage.py migrate
python manage.py runserver        # http://127.0.0.1:8000
```

## Build

```bash
cd frontend
npm run build          # outputs to frontend/build/
```

`build/` contains everything to deploy, including `.htaccess`, `robots.txt`, `sitemap.xml` and the
CV PDF. Upload the **contents** of that folder to the site's document root. See
[DEPLOYMENT.md](DEPLOYMENT.md).

## Routes

| Route | Content |
| --- | --- |
| `/` | Hero, about teaser, testimonials, call to action |
| `/about` | Full bio, current roles, CV download |
| `/research` | Publications with DOIs, Google Scholar, ORCID |
| `/projects` | Flagship case studies plus other work |
| `/experience` | Professional timeline with company logos |
| `/teaching` | Teaching and mentorship roles |
| `/volunteer` | Volunteering history |
| `/contact` | Contact form (mailto), WhatsApp, calendar booking |

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `VITE_API_URL` | frontend `.env` | Backend base URL. Only used if the Django backend is deployed. |
| `RESEND_API_KEY` | backend | Resend API key for sending contact emails. |
| `DJANGO_SECRET_KEY` | backend | Django secret. |
| `DEBUG` | backend | `True` locally, `False` in production. |
| `ALLOWED_HOSTS` | backend | Comma-separated hostnames. |
| `CORS_ORIGINS` | backend | Comma-separated allowed origins. |
