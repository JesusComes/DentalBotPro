// Rebuild the English nav section cleanly
const fs = require('fs');

console.log('🔧 Rebuilding English nav section...');

try {
  let content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  
  // Find and replace the English nav section
  const navStart = content.indexOf('  en: {');
  const navSectionEnd = content.indexOf('    // Hero Section', navStart);
  
  if (navStart !== -1 && navSectionEnd !== -1) {
    const beforeNav = content.substring(0, navStart);
    const afterNav = content.substring(navSectionEnd);
    
    // Create a clean English nav section
    const cleanEnglishSection = `  en: {
    nav: {
      home: 'Home',
      solution: 'Solution',
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      about: 'About Us'
    },
    `;
    
    // Combine the parts
    const newContent = beforeNav + cleanEnglishSection + afterNav;
    
    // Write the new file
    fs.writeFileSync('./contexts/LanguageContext.js', newContent, 'utf8');
    
    console.log('✅ English nav section rebuilt successfully!');
    console.log('🧪 Testing syntax...');
    
    // Test the new content
    const testContent = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
    
    // Quick syntax check on the nav area
    const lines = testContent.split('\n');
    for (let i = 290; i < 305; i++) {
      if (lines[i]) {
        console.log(`${i + 1}: ${lines[i]}`);
      }
    }
    
  } else {
    console.log('❌ Could not find English nav section boundaries');
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
}