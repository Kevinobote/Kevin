# Kevin Obote — Personal Portfolio

A modern, editorial-precision personal portfolio website built by **Guild Code**. Showcases Kevin's research, projects, professional experience, teaching, volunteering, and achievements.

## Live Site

🌐 **[kevin.guild-code.com](https://kevin.guild-code.com)**

## Features

- **Editorial Precision Design**: Navy/teal palette, serif headings, generous whitespace
- **Research & Publications**: Full publication list with DOIs, Google Scholar, and ORCID links
- **Projects**: Flagship case studies (Sema Sasa, Kalenjin ASR, Telecom Churn ML Pipeline)
- **Experience Timeline**: Verified professional history with company logos
- **Teaching & Mentorship**: iLabAfrica, Guild Code, Genesys Tech Hub, WiSSAfrica, APDK
- **Volunteering**: AfroCom, Watoto Go Green, Red Cross, Swahilipot Hub, and more
- **Testimonials**: Real recommendations from colleagues
- **Contact Form**: Powered by Resend API (emails to obote@guild-code.com)
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between modes
- **CV Download**: Single canonical PDF

## Technologies

- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion
- **Backend**: Python Django (REST API for contact form)
- **Email**: Resend API
- **Icons**: Lucide React, React Icons
- **Hosting**: cPanel (LiteSpeed)

## Project Structure

```
├── frontend/           # React frontend (Vite)
│   ├── src/
│   │   ├── components/ # Hero, Navbar, Footer, Experience, Testimonials, CTA
│   │   ├── pages/      # Main, Research, Projects, Experience, Teaching, Volunteer, Contact
│   │   ├── assets/     # Images, logos, icons
│   │   └── config.js   # API URL configuration
│   ├── .env            # Local dev API URL
│   └── .env.production # Production API URL
├── backend/            # Django backend
│   ├── backend/        # Django settings, URLs
│   ├── core/           # Contact API (views, models, serializers)
│   ├── passenger_wsgi.py # cPanel WSGI entry point
│   └── requirements.txt
└── DEPLOYMENT.md       # Hosting instructions
```

## Local Development

### Backend
```bash
cd backend
pip install -r requirements.txt
export RESEND_API_KEY="re_your_key"
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## Deployment (cPanel)

See [DEPLOYMENT.md](DEPLOYMENT.md) for full instructions.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (hero, about, testimonials, CTA) |
| `/research` | Publications with DOIs, Google Scholar, ORCID |
| `/projects` | Flagship and other projects |
| `/experience` | Professional timeline with logos |
| `/teaching` | Teaching and mentorship roles |
| `/volunteer` | Volunteering activities |
| `/contact` | Contact form, WhatsApp, Google Calendar booking |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL (frontend) |
| `RESEND_API_KEY` | Resend API key (backend) |
| `DJANGO_SECRET_KEY` | Django secret key (backend) |
| `DEBUG` | Django debug mode (backend) |
| `ALLOWED_HOSTS` | Allowed hostnames (backend) |
| `CORS_ORIGINS` | Allowed CORS origins (backend) |

---

Powered by [Guild Code](https://guild-code.com)
