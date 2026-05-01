# Apple Migration — Next.js Website

Professional website for Apple Education & Immigration Consultancy, built with Next.js 14 + Tailwind CSS.

## Pages
- `/` — Home (hero, services, about strip, CTA)
- `/about` — Full about page with director bio, mission, values
- `/visas` — Interactive visa explorer (8 visa types, filterable)
- `/contact` — Contact form + FAQ accordion

## Deploy to Vercel (5 minutes)

### Option A — GitHub + Vercel (recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Apple Migration website"
   git remote add origin https://github.com/YOUR_USERNAME/apple-migration.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → "Add New Project"
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy** — done!

3. **Connect your domain**
   - In Vercel project → Settings → Domains
   - Add `applemigration.com.au` and `www.applemigration.com.au`
   - In GoDaddy DNS, point your domain to Vercel's nameservers (Vercel gives you these)

### Option B — Vercel CLI

```bash
npm install -g vercel
npm install
vercel --prod
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Next Features to Add
- [ ] AI visa eligibility chatbot (Claude API)
- [ ] Points calculator for skilled migration
- [ ] Blog/news section
- [ ] Resend email integration for contact form
- [ ] Google Analytics
