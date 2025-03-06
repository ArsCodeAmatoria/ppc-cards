const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Ensure the images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function generateSocialCards() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {
      width: 1200,
      height: 630,
      deviceScaleFactor: 2, // Higher resolution for better quality
    }
  });
  
  const page = await browser.newPage();
  
  try {
    // Generate main social card
    console.log('Generating main social card...');
    await page.goto('http://localhost:3000/social-card', { waitUntil: 'networkidle0' });
    await page.waitForSelector('.min-h-screen', { timeout: 5000 });
    
    // Wait a bit for any animations to complete
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(imagesDir, 'ppc-social-card.jpg'),
      quality: 100,
      type: 'jpeg',
    });
    console.log('Main social card generated successfully!');
    
    // Generate analysis social card
    console.log('Generating analysis social card...');
    await page.goto('http://localhost:3000/social-card/analysis', { waitUntil: 'networkidle0' });
    await page.waitForSelector('.min-h-screen', { timeout: 5000 });
    
    // Wait a bit for any animations to complete
    await page.waitForTimeout(1000);
    
    await page.screenshot({
      path: path.join(imagesDir, 'analysis-social-card.jpg'),
      quality: 100,
      type: 'jpeg',
    });
    console.log('Analysis social card generated successfully!');
  } catch (error) {
    console.error('Error generating social cards:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

// Check if the development server is running
const checkServerRunning = async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { timeout: 5000 });
    await browser.close();
    return true;
  } catch (error) {
    console.error('Error: Development server is not running. Please start it with "npm run dev" first.');
    return false;
  }
};

// Main execution
(async () => {
  console.log('Checking if development server is running...');
  const isServerRunning = await checkServerRunning();
  
  if (isServerRunning) {
    console.log('Development server is running. Proceeding with social card generation...');
    await generateSocialCards();
    console.log('Social card generation complete!');
  } else {
    process.exit(1);
  }
})(); 