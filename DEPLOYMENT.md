# Deployment

The site deploys as **static files**. No server-side runtime is required for the current build
(the contact form uses `mailto:`).

## 1. Build

```bash
cd frontend
npm install
npm run build
```

Output lands in `frontend/build/` and includes `index.html`, hashed `assets/`, `.htaccess`,
`robots.txt`, `sitemap.xml`, `Kevin_Obote.pdf`, and `images/`.

Optional convenience zip:

```bash
cd frontend/build && zip -r ../kevin-frontend.zip . && zip ../kevin-frontend.zip .htaccess
```

(The second command is needed because zip skips dotfiles by default.)

## 2. Upload (DirectAdmin)

1. **File Manager** -> `domains/guild-code.com/public_html/kevin/`.
2. Empty the folder.
3. Upload `kevin-frontend.zip`, then **Extract** it in place. Files must sit directly in `kevin/`
   (so `kevin/index.html`, not `kevin/build/index.html`). Delete the zip afterward.
4. Turn on **Show hidden files** and confirm `.htaccess` is present. If DirectAdmin's extractor
   skipped it, create it manually with this content:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ErrorDocument 404 /index.html
   ```

   Without it, refreshing any route other than `/` returns 404.

## 3. SSL

DirectAdmin -> **SSL Certificates** -> select `kevin.guild-code.com`. The `*.guild-code.com`
wildcard certificate already covers the subdomain. Enable **Force HTTPS redirect**.

## 4. Verify

```bash
curl -I https://kevin.guild-code.com/
curl -o /dev/null -w "%{http_code}\n" https://kevin.guild-code.com/research   # expect 200 (SPA rewrite)
curl -o /dev/null -w "%{http_code}\n" https://kevin.guild-code.com/sitemap.xml
```

## Optional: server-side contact form (Django)

Only needed if you want form submissions handled server-side instead of via `mailto:`.

1. Set up a Python app in DirectAdmin (CloudLinux "Setup Python App" or Passenger), application
   startup file `passenger_wsgi.py`, mounted so requests to `/api` reach Django.
2. `pip install -r requirements.txt` and `python manage.py migrate` in the app environment.
3. Set environment variables: `RESEND_API_KEY`, `DJANGO_SECRET_KEY`, `DEBUG=False`,
   `ALLOWED_HOSTS=kevin.guild-code.com`, `CORS_ORIGINS=https://kevin.guild-code.com`.
4. Point `frontend/.env.production` `VITE_API_URL` at `https://kevin.guild-code.com`, rebuild,
   redeploy, and restore the `fetch`-based submit handler in `src/pages/contact_page.jsx`.
