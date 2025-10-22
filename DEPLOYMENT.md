# Deployment Guide - Vercel

This guide provides step-by-step instructions for deploying Muhammad Waleed Khalil's portfolio to Vercel with a custom domain.

## 📋 Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your custom domain `waleedkhalil.dev` (or any domain you own)
- Git installed on your local machine

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository

1. **Initialize Git (if not already done)**
   ```bash
   git init
   ```

2. **Add all files to Git**
   ```bash
   git add .
   ```

3. **Commit your changes**
   ```bash
   git commit -m "Initial portfolio setup for Muhammad Waleed Khalil"
   ```

4. **Create a GitHub repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `portfolio-waleed-khalil` (or your preferred name)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

5. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-waleed-khalil.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository `portfolio-waleed-khalil`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
   
   Leave all settings as default - Vercel automatically detects Next.js configuration.

4. **Environment Variables** (Optional)
   
   If you have any environment variables, add them here. For this portfolio, none are required initially.

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)
   - You'll get a URL like: `portfolio-waleed-khalil.vercel.app`

#### Option B: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate.

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm project settings
   - Deploy to preview

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Step 3: Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to your project dashboard in Vercel
   - Click "Settings" → "Domains"
   - Enter `waleedkhalil.dev`
   - Click "Add"

2. **Configure DNS Records**

   Vercel will provide you with DNS records. Go to your domain registrar and add:

   **For Apex Domain (waleedkhalil.dev):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

   **For WWW Subdomain (www.waleedkhalil.dev):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

   *Note: DNS values may vary. Always use the values Vercel provides in your dashboard.*

3. **Alternative: Using Nameservers (Easier)**

   Instead of manual DNS records, you can point your domain's nameservers to Vercel:
   
   Update your domain's nameservers to:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

4. **Verify Domain**
   - DNS propagation takes 24-48 hours (usually much faster)
   - Vercel will automatically issue an SSL certificate
   - Your site will be live at `https://waleedkhalil.dev`

### Step 4: Verify Deployment

1. **Check Build Logs**
   - Go to your Vercel project dashboard
   - Click on the latest deployment
   - Review build logs for any errors

2. **Test Your Site**
   - Visit your Vercel URL
   - Test all sections: Hero, About, Projects, Services, Skills
   - Check dark/light mode toggle
   - Test CV download functionality
   - Verify all links (email, GitHub, LinkedIn, phone)

3. **Performance Check**
   - Run Lighthouse audit in Chrome DevTools
   - Aim for scores: Performance 90+, Accessibility 95+, SEO 100

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

1. **Make changes locally**
   ```bash
   # Edit files
   git add .
   git commit -m "Update project description"
   git push
   ```

2. **Automatic Deployment**
   - Vercel detects the push
   - Builds and deploys automatically
   - New version goes live in 1-3 minutes

3. **Preview Deployments**
   - Every pull request gets its own preview URL
   - Test changes before merging to main

## ⚙️ Environment Variables (Future Use)

If you add features requiring environment variables:

1. **Add in Vercel Dashboard**
   - Project Settings → Environment Variables
   - Add key-value pairs
   - Choose environment: Production, Preview, Development

2. **Example Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://waleedkhalil.dev
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (for Google Analytics)
   CONTACT_FORM_API_KEY=xxxxx (if adding contact form)
   ```

3. **Local Development**
   Create `.env.local` (already in .gitignore):
   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## 🔧 Troubleshooting

### Build Fails

1. **Check build logs** in Vercel dashboard
2. **Test locally**:
   ```bash
   npm run build
   npm run start
   ```
3. **Common issues**:
   - Missing dependencies: `npm install`
   - TypeScript errors: Fix in code
   - Image optimization errors: Check image URLs

### Domain Not Working

1. **Verify DNS records** are correct
2. **Wait for propagation** (up to 48 hours)
3. **Check DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net)
4. **Force refresh**: Clear browser cache or use incognito

### Images Not Loading

1. **Check Unsplash URLs** are valid
2. **Verify Next.js Image** configuration
3. **Add domains to next.config.mjs**:
   ```javascript
   images: {
     domains: ['images.unsplash.com'],
   }
   ```

### SSL Certificate Issues

- Vercel auto-issues SSL certificates
- If not working after 24 hours, contact Vercel support
- Ensure DNS records point to Vercel correctly

## 📊 Analytics Setup (Optional)

### Add Google Analytics

1. **Get GA4 tracking ID** from Google Analytics

2. **Add to layout.tsx**:
   ```typescript
   import Script from 'next/script'
   
   // In <head> or <body>
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

### Vercel Analytics

1. **Enable in project settings**
2. **Install package**:
   ```bash
   npm install @vercel/analytics
   ```

3. **Add to layout**:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly at custom domain
- [ ] HTTPS/SSL certificate is active
- [ ] All images display properly
- [ ] Dark/light mode toggle works
- [ ] CV download functions
- [ ] All contact links work (email, LinkedIn, GitHub, phone)
- [ ] Mobile responsive design works
- [ ] Animations play smoothly
- [ ] SEO meta tags are correct
- [ ] Favicon displays
- [ ] No console errors
- [ ] Lighthouse scores are good

## 📞 Support

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Support: Available through Vercel dashboard

### Portfolio Updates
- For customization help, refer to `README.md`
- For technical issues, check build logs in Vercel dashboard

## 🔄 Updating Content

To update your portfolio content after deployment:

1. **Update JSON files** in `src/data/`
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update projects and services"
   git push
   ```
3. **Automatic deployment** to production in 1-3 minutes

---

**Deployed Portfolio**: https://waleedkhalil.dev  
**Status**: ✅ Live and operational  
**Last Updated**: 2024

For questions or issues, contact: mwaleedkhalil@gmail.com