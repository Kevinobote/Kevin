# Deployment Guide: cPanel Hosting

## Frontend (Static Site)

The frontend builds to `frontend/build/`. Upload this entire folder to your cPanel `public_html` (or subdomain directory).

### Steps:
1. Build: `cd frontend && npm run build`
2. Upload the contents of `frontend/build/` to your cPanel document root
3. The `.htaccess` file handles SPA routing (all paths serve index.html)
4. Make sure `Kevin_Obote.pdf` is in the root of the uploaded folder

### Environment:
- Edit `frontend/.env.production` before building:
  ```
  VITE_API_URL=https://api.kevin.guild-code.com
  ```

---

## Backend (Django API)

### Option A: Python App on cPanel

1. In cPanel, go to **Setup Python App**
2. Create a new app:
   - Python version: 3.10+
   - Application root: `backend`
   - Application URL: `api.kevin.guild-code.com` (or a subdirectory)
   - Application startup file: `passenger_wsgi.py`
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set environment variables in cPanel:
   ```
   RESEND_API_KEY=re_your_key_here
   DJANGO_SECRET_KEY=your-random-secret-key
   DEBUG=False
   ALLOWED_HOSTS=api.kevin.guild-code.com
   CORS_ORIGINS=https://kevin.guild-code.com
   ```
5. Run migrations:
   ```bash
   python manage.py migrate
   ```

### Option B: Separate VPS / Cloud

If cPanel doesn't support Python well, deploy the backend on:
- Railway (free tier)
- Render
- A small VPS with gunicorn + nginx

---

## passenger_wsgi.py (for cPanel)

Already included in the backend folder.

---

## Production Checklist

- [ ] Set RESEND_API_KEY environment variable
- [ ] Set DJANGO_SECRET_KEY (generate a random one)
- [ ] Set DEBUG=False
- [ ] Set ALLOWED_HOSTS to your domain
- [ ] Set CORS_ORIGINS to your frontend domain
- [ ] Update .env.production with correct API URL
- [ ] Run `npm run build` after updating .env.production
- [ ] Upload build folder to cPanel
- [ ] Test contact form
- [ ] Verify CV download works
