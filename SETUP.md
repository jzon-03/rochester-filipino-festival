# Rochester Filipino Festival Website - Setup Guide

## 🎉 Website Complete!

Your Rochester Filipino Festival website is ready to deploy! The site features:

- ✨ Modern, responsive design with Philippine flag colors
- 📱 Mobile-friendly layout
- 🎨 Beautiful hero section with gradient background
- 📅 Complete event schedule for both days
- 🍜 Filipino food showcase
- 📍 Event details and location information
- 👥 Vendor and sponsor sections
- 📧 Contact information

## 🚀 Next Steps to Deploy

### 1. Push to GitHub

First, commit and push your code to GitHub:

```bash
git add .
git commit -m "Complete Rochester Filipino Festival website"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The GitHub Actions workflow will automatically deploy your site

### 3. Configure Custom Domain

#### DNS Setup at your domain provider (upstatepinoy.com):

Add a **CNAME record**:
- Type: `CNAME`
- Name: `rochesterfilipinofestival`
- Value: `YOUR-GITHUB-USERNAME.github.io`
- TTL: `3600` (or default)

**Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username!**

Example:
```
rochesterfilipinofestival.upstatepinoy.com → jzonthemtn.github.io
```

#### GitHub Custom Domain Setup:

1. Wait 5-10 minutes after adding the DNS record
2. Go to **Settings** → **Pages** in your repository
3. Under "Custom domain", enter: `rochesterfilipinofestival.upstatepinoy.com`
4. Click **Save**
5. Wait for DNS check to complete
6. Once verified, check **Enforce HTTPS**

### 4. Verify Deployment

After pushing to GitHub, the deployment process:

1. GitHub Actions will automatically build the site
2. Check the **Actions** tab to monitor progress
3. Build takes ~2-3 minutes
4. Once complete, visit your site:
   - https://YOUR-GITHUB-USERNAME.github.io/rochester-filipino-festival/
   - https://rochesterfilipinofestival.upstatepinoy.com (after DNS setup)

## 📁 Project Structure

```
rochester-filipino-festival/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   ├── .nojekyll               # Disable Jekyll processing
│   ├── 404.html                # SPA redirect handler
│   ├── robots.txt              # SEO - search engine instructions
│   └── sitemap.xml             # SEO - site map
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.ts         # Home component (TypeScript)
│   │   │   ├── home.html       # Home component template
│   │   │   └── home.css        # Home component styles
│   │   ├── app.ts              # Root component
│   │   ├── app.html            # Root template
│   │   ├── app.css             # Root styles
│   │   └── app.routes.ts       # Application routes
│   ├── index.html              # Main HTML file with SEO meta tags
│   ├── main.ts                 # Application bootstrap
│   └── styles.css              # Global styles
├── DEPLOYMENT.md               # Detailed deployment instructions
└── README.md                   # Project documentation
```

## 🎨 Customization

### Update Event Details

Edit [src/app/home/home.ts](src/app/home/home.ts):

```typescript
eventDetails = {
  date: 'August 9-10, 2026',
  time: 'Saturday 11 AM - 9 PM, Sunday 11 AM - 7 PM',
  location: 'Martin Luther King Jr. Memorial Park',
  address: '200 Elton St, Rochester, NY 14605'
};
```

### Modify Colors

Edit [src/app/home/home.css](src/app/home/home.css):

```css
:host {
  --primary-blue: #0038a8;     /* Philippine blue */
  --primary-red: #ce1126;      /* Philippine red */
  --primary-yellow: #fcd116;   /* Philippine yellow */
}
```

### Add/Remove Schedule Items

Edit the `schedule` object in [src/app/home/home.ts](src/app/home/home.ts).

### Update Food List

Edit the `foods` array in [src/app/home/home.ts](src/app/home/home.ts).

## 🔧 Development

### Run Locally

```bash
npm start
```

Visit http://localhost:4200

### Build for Production

```bash
npm run build
```

Output will be in `dist/rochester-filipino-festival/`

### Preview Production Build

```bash
npm run build
npx http-server dist/rochester-filipino-festival/browser
```

## 📊 SEO Features

The website includes:

- ✅ SEO-friendly meta tags
- ✅ Open Graph tags (Facebook sharing)
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Descriptive page title
- ✅ Semantic HTML structure

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Build fails in GitHub Actions

- Check the Actions tab for detailed error logs
- Verify all files are committed and pushed
- Ensure package.json has all dependencies

### Custom domain not working

- Wait up to 48 hours for DNS propagation (usually faster)
- Use `nslookup rochesterfilipinofestival.upstatepinoy.com` to verify DNS
- Ensure CNAME file exists in public folder
- Check that CNAME record points to correct GitHub Pages URL

### 404 errors on page refresh

- The 404.html file handles client-side routing
- Ensure it's being deployed (should be in public folder)

### Images not loading

- Place images in the public folder
- Reference them with absolute paths: `/image.jpg`

## 📞 Support

For technical questions about the website:
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions
- Review GitHub Actions logs in the Actions tab
- Consult Angular documentation: https://angular.dev

For festival information:
- Email: info@rochesterfilipinofestival.com
- Website: https://rochesterfilipinofestival.upstatepinoy.com

## ✅ Pre-Deployment Checklist

- [ ] Code is committed to Git
- [ ] Pushed to GitHub main branch
- [ ] GitHub Pages is enabled (Settings → Pages → GitHub Actions)
- [ ] DNS CNAME record is configured
- [ ] Custom domain is added in GitHub Pages settings
- [ ] Build is passing in GitHub Actions
- [ ] HTTPS is enforced (after DNS verification)

## 🎊 You're All Set!

Your beautiful Rochester Filipino Festival website is ready to go live. Once you complete the DNS setup and push to GitHub, visitors will be able to access your site and learn about this amazing cultural celebration!

Mabuhay! 🇵🇭
