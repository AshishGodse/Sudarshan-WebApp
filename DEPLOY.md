# Sudarshan - Deployment Guide

## Deployment Options

Sudarshan is a fully static website. It can be deployed on any web server or static hosting platform. No backend processing is required — only file serving.

---

## Option 1: Docker (Recommended for Self-Hosting)

### Prerequisites
- Docker installed on your machine

### Steps

```bash
# 1. Navigate to project directory
cd Sudarshan-WebApp

# 2. Build the Docker image
docker build -t sudarshan .

# 3. Run the container
docker run -d -p 8080:80 --name sudarshan sudarshan

# 4. Open in browser
# http://localhost:8080
```

### Managing the Container

```bash
# Stop the container
docker stop sudarshan

# Start it again
docker start sudarshan

# View logs
docker logs sudarshan

# Remove the container
docker stop sudarshan && docker rm sudarshan

# Rebuild after changes
docker build -t sudarshan . && docker run -d -p 8080:80 --name sudarshan sudarshan
```

### Update channels without rebuilding

If you only change `config/channels.json`, you can mount it as a volume:

```bash
docker run -d -p 8080:80 \
  -v $(pwd)/config/channels.json:/usr/share/nginx/html/config/channels.json:ro \
  --name sudarshan sudarshan
```

On Windows PowerShell:
```powershell
docker run -d -p 8080:80 `
  -v "${PWD}\config\channels.json:/usr/share/nginx/html/config/channels.json:ro" `
  --name sudarshan sudarshan
```

---

## Option 2: Nginx on Linux Server

### Prerequisites
- A Linux server (Ubuntu/Debian recommended)
- Nginx installed

### Steps

```bash
# 1. Install nginx
sudo apt update && sudo apt install nginx -y

# 2. Copy website files to nginx root
sudo rm -rf /var/www/html/*
sudo cp -r index.html live.html contact.html css/ js/ config/ Sudarshan_Logo.png Home.png /var/www/html/

# 3. Copy nginx config
sudo cp nginx.conf /etc/nginx/sites-available/sudarshan
sudo ln -sf /etc/nginx/sites-available/sudarshan /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 4. Test and restart nginx
sudo nginx -t
sudo systemctl restart nginx
```

### Enable HTTPS with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Get certificate (replace with your domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

---

## Option 3: Static Hosting Platforms

### Netlify

1. Push your code to a Git repository (GitHub/GitLab)
2. Go to [netlify.com](https://www.netlify.com/) and sign in
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repo
5. Set **Publish directory** to `.` (root)
6. Click **Deploy**

### Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/) and sign in
3. Click **"Add New Project"** → select your repo
4. Framework Preset: **Other**
5. Output Directory: `.`
6. Click **Deploy**

### GitHub Pages

1. Push code to GitHub
2. Go to repo **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Select `main` branch, root `/`
5. Click **Save**
6. Site will be available at `https://username.github.io/repo-name/`

### Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages**
3. Click **Create a project** → Connect to Git
4. Build command: (leave empty)
5. Build output directory: `.`
6. Click **Deploy**

---

## Option 4: Simple File Server (Python)

For quick testing or internal use:

```bash
cd Sudarshan-WebApp
python -m http.server 8000
```

Open `http://localhost:8000`.

---

## Post-Deployment Checklist

- [ ] Update `config/channels.json` with real YouTube channel IDs
- [ ] Set your YouTube API key in `config/channels.json`
- [ ] Restrict your YouTube API key to your domain in Google Cloud Console
- [ ] Test all three pages (Home, Live, Contact Us)
- [ ] Verify responsive layout on mobile devices
- [ ] Set up HTTPS if self-hosting
- [ ] Update contact email in `contact.html` if needed
- [ ] Replace ad placeholders with real AdSense code when ready

## Updating Content

To add or remove temple channels:

1. Edit `config/channels.json`
2. Add/remove channel entries
3. If using Docker with volume mount — changes apply immediately
4. If using Docker without volume — rebuild the image
5. If using static hosting — push changes to trigger redeploy

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Live streams not loading | Check API key and channel IDs in `config/channels.json` |
| CORS error when opening locally | Use a local server (python/node) instead of file:// |
| Docker build fails | Ensure all files listed in Dockerfile exist |
| Blank page | Check browser console for errors (F12) |
| Ads not reappearing | Wait 1 minute after closing, or refresh the page |
