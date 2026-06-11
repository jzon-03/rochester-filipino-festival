# Rochester Filipino Festival - Deployment Guide

## GitHub Pages Setup

### 1. Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### 2. Custom Domain Configuration

The CNAME file is already configured in the `public` folder with your domain:
```
rochesterfilipinofestival.upstatepinoy.com
```

### 3. DNS Configuration

You need to configure your DNS settings at your domain provider (upstatepinoy.com):

#### For a subdomain (rochesterfilipinofestival.upstatepinoy.com):

Add a **CNAME record**:
- Type: `CNAME`
- Name: `rochesterfilipinofestival`
- Value: `YOUR-GITHUB-USERNAME.github.io`
- TTL: `3600` (or your provider's default)

Example:
```
rochesterfilipinofestival.upstatepinoy.com → yourusername.github.io
```

### 4. Verify Custom Domain

After setting up DNS:

1. Go to repository **Settings** → **Pages**
2. In the "Custom domain" field, enter: `rochesterfilipinofestival.upstatepinoy.com`
3. Click **Save**
4. Wait for DNS check to complete (may take a few minutes)
5. Check **Enforce HTTPS** once DNS is verified

### 5. Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Or manually trigger the workflow from the Actions tab

### Build Process

The GitHub Actions workflow:
1. Checks out the code
2. Installs dependencies
3. Builds the Angular application
4. Deploys to GitHub Pages

### Troubleshooting

#### DNS not resolving
- Wait up to 48 hours for DNS propagation (usually much faster)
- Use `nslookup rochesterfilipinofestival.upstatepinoy.com` to check DNS

#### Custom domain not working
- Verify CNAME file exists in `public` folder
- Check that DNS is properly configured
- Ensure GitHub Pages is set to use GitHub Actions as the source

#### Build failures
- Check the Actions tab for error logs
- Verify Node.js version (should be 20+)
- Make sure all dependencies are in package.json

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Preview production build locally
npx http-server dist/rochester-filipino-festival/browser
```

## Contact

For questions about the website, contact: info@rochesterfilipinofestival.com
