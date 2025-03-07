# Social Media Cards for PPC Policy Website

This document provides instructions on how to generate social media card images for the PPC Policy website. These images are used when sharing links on social media platforms like Twitter, Facebook, LinkedIn, etc.

## Available Social Cards

The project includes two social card designs:

1. **Main Social Card** - Used for the home page and general sharing
2. **Analysis Social Card** - Specifically for the Liberal Failures Analysis page

## How to Generate the Images

### Method 1: Screenshot from Browser

1. Start the development server:
   ```
   npm run dev
   ```

2. Navigate to the social card pages:
   - Main card: http://localhost:3000/social-card
   - Analysis card: http://localhost:3000/social-card/analysis

3. Take a screenshot of the card (make sure to capture the entire card at 1200x630 pixels)
   - In Chrome: Right-click > "Capture Screenshot" or use browser developer tools
   - In Firefox: Right-click > "Take Screenshot" or use browser developer tools
   - On Mac: Use Command+Shift+4 to take a custom screenshot

4. Save the screenshots as:
   - `public/images/ppc-social-card.jpg`
   - `public/images/analysis-social-card.jpg`

### Method 2: Using Puppeteer (Automated)

For automated generation, you can use Puppeteer to programmatically take screenshots:

1. Install Puppeteer:
   ```
   npm install puppeteer
   ```

2. Create a script file `scripts/generate-social-cards.js`:
   ```javascript
   const puppeteer = require('puppeteer');
   const path = require('path');
   
   async function generateSocialCards() {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     
     // Set viewport to match OG image dimensions
     await page.setViewport({
       width: 1200,
       height: 630,
       deviceScaleFactor: 1,
     });
     
     // Generate main social card
     await page.goto('http://localhost:3000/social-card');
     await page.waitForSelector('.min-h-screen');
     await page.screenshot({
       path: path.join(__dirname, '../public/images/ppc-social-card.jpg'),
       quality: 100,
     });
     
     // Generate analysis social card
     await page.goto('http://localhost:3000/social-card/analysis');
     await page.waitForSelector('.min-h-screen');
     await page.screenshot({
       path: path.join(__dirname, '../public/images/analysis-social-card.jpg'),
       quality: 100,
     });
     
     await browser.close();
     console.log('Social card images generated successfully!');
   }
   
   generateSocialCards().catch(console.error);
   ```

3. Add a script to package.json:
   ```json
   "scripts": {
     "generate-social-cards": "node scripts/generate-social-cards.js"
   }
   ```

4. Run the development server in one terminal:
   ```
   npm run dev
   ```

5. Run the generation script in another terminal:
   ```
   npm run generate-social-cards
   ```

## Metadata Configuration

The social card images are referenced in the metadata configuration:

- Root layout metadata in `src/app/layout.tsx`
- Home page metadata in `src/app/metadata.ts`
- Analysis page metadata in `src/app/analysis/metadata.ts`

These metadata configurations include Open Graph and Twitter Card metadata that reference the social card images.

## Domain Configuration

The metadata is configured to use the domain `https://www.backtest.ca`. If the domain changes, you'll need to update:

1. The `metadataBase` URL in `src/app/layout.tsx`
2. The OpenGraph URLs in `src/app/metadata.ts` and `src/app/analysis/metadata.ts`
3. The displayed URLs on the social cards in `src/components/SocialCard.tsx` and `src/components/AnalysisSocialCard.tsx`

## Testing Social Media Cards

You can test how your social cards will appear on different platforms using these tools:

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Troubleshooting

If the social cards are not appearing correctly when shared:

1. Make sure the images are properly generated and saved in the correct location
2. Verify that the metadata in the layout and page files correctly references the images
3. Use the testing tools mentioned above to debug any issues
4. Clear the cache on the social media platform or use their debugging tools to refresh the cache 