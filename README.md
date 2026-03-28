# Sudarshan - Live Darshan | Holy Places of India

A static web application that provides live darshan (live streaming) from temples and holy places across India using YouTube live streams.

![Sudarshan Logo](Sudarshan_Logo.png)

## Features

- **Live Darshan** — Watch live temple streams from YouTube channels, all in one place
- **Multi-Channel Support** — Configure multiple YouTube channels via a simple JSON file
- **Responsive Design** — Works on desktop, tablet, and mobile devices
- **Lightweight** — Pure HTML/CSS/JS, no frameworks needed
- **Ad-Ready** — Floating ad placeholders ready for Google AdSense integration
- **Docker Support** — Deploy with a single Docker command
- **Secure** — Security headers, input validation, CSP headers

## Project Structure

```
Sudarshan-WebApp/
├── index.html              # Home page
├── live.html               # Live darshan page
├── contact.html            # Contact us page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── app.js              # Core JS (navigation, ads)
│   ├── live.js             # YouTube API integration
│   └── contact.js          # Contact form validation
├── config/
│   └── channels.json       # YouTube channel configuration
├── Sudarshan_Logo.png      # Site logo
├── Home.png                # Hero background image
├── nginx.conf              # Nginx server configuration
├── Dockerfile              # Docker container definition
├── .dockerignore           # Docker build exclusions
├── README.md               # This file
└── DEPLOY.md               # Deployment guide
```

## Quick Start

### 1. Configure YouTube Channels

Edit `config/channels.json`:

```json
{
    "youtube_api_key": "YOUR_YOUTUBE_API_KEY_HERE",
    "channels": [
        {
            "name": "Temple Name",
            "channel_id": "UC...",
            "description": "Description of the channel"
        }
    ]
}
```

**To get your YouTube API Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project or select an existing one
3. Enable the **YouTube Data API v3**
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. (Recommended) Restrict the key to YouTube Data API v3 and your domain

**To find a YouTube Channel ID:**
1. Go to the YouTube channel page
2. View page source or use a tool like [Comment Picker](https://commentpicker.com/youtube-channel-id.php)
3. The channel ID starts with `UC...`

### 2. Run Locally

Simply open `index.html` in a browser. For the Live page to fetch streams properly (due to CORS with the config file), use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### 3. Run with Docker

```bash
# Build the image
docker build -t sudarshan .

# Run the container
docker run -d -p 8080:80 --name sudarshan sudarshan
```

Open `http://localhost:8080` in your browser.

## Configuration

### channels.json

| Field | Description |
|-------|-------------|
| `youtube_api_key` | Your YouTube Data API v3 key |
| `channels[].name` | Display name for the channel |
| `channels[].channel_id` | YouTube channel ID (starts with UC...) |
| `channels[].description` | Brief description (for your reference) |

### Ad Placeholders

Two floating ad boxes are included on every page. They can be closed by the user and will reappear after 1 minute. To integrate Google AdSense:

1. Replace the `<div class="ad-placeholder">` content in each HTML file with your AdSense code
2. Update the CSP meta tag in the `<head>` to allow Google AdSense scripts

### Contact Form

The contact form performs client-side validation. Since this is a static site, form submission shows a success message. To actually send emails, integrate with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## Security

- **Content Security Policy** headers on all pages
- **X-Frame-Options**, **X-Content-Type-Options**, **X-XSS-Protection** headers via nginx
- **Input validation** on contact form (client-side)
- **HTML escaping** for all dynamic content
- **No inline scripts** — all JavaScript in separate files
- Hidden files blocked in nginx config

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome for Android)

## License

All rights reserved. &copy; 2026 Sudarshan.
