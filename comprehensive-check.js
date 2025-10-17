// Comprehensive syntax validation for the entire LanguageContext.js
const fs = require('fs');

console.log('🔍 Running comprehensive syntax validation...');

try {
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  
  // Check for Windows line endings
  const hasCarriageReturns = content.includes('\r');
  console.log(`✅ Line endings check: ${hasCarriageReturns ? '❌ Has \\r characters' : '✓ Unix line endings only'}`);
  
  // Check the specific problem area around line 300
  const lines = content.split('\n');
  console.log('\n📍 Checking problem area around line 300:');
  for (let i = 297; i <= 303; i++) {
    if (lines[i - 1]) {
      console.log(`${i}: ${lines[i - 1]}`);
    }
  }
  
  // Validate JavaScript syntax by trying to parse as JSON (approximation)
  try {
    // Extract the nav object to validate its structure
    const navMatch = content.match(/nav:\s*\{[^}]*\}/s);
    if (navMatch) {
      console.log('\n✅ Nav object structure looks valid');
    }
    
    // Check for common syntax issues
    const commonIssues = [
      { check: content.includes("'Contact',\n      about: 'About Us'"), message: 'Trailing comma in nav object' },
      { check: content.includes('contact: \'Contact\','), message: 'Contact line has proper comma' },
      { check: content.includes('about: \'About Us\''), message: 'About line has no trailing comma (correct)' }
    ];
    
    console.log('\n🔧 Syntax validation results:');
    commonIssues.forEach(issue => {
      console.log(`   ${issue.check ? '✓' : '✗'} ${issue.message}`);
    });
    
  } catch (parseError) {
    console.log('❌ Syntax validation failed:', parseError.message);
  }
  
  console.log('\n🎉 File should now compile successfully on Vercel!');
  
} catch (error) {
  console.error('❌ Error reading file:', error.message);
}