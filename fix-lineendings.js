// Fix line endings in LanguageContext.js
const fs = require('fs');

console.log('🔧 Fixing line endings in LanguageContext.js...');

try {
  // Read the file content
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  
  // Remove all carriage returns and normalize line endings
  const fixedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Write back with Unix line endings
  fs.writeFileSync('./contexts/LanguageContext.js', fixedContent, 'utf8');
  
  console.log('✅ Line endings fixed!');
  console.log('📊 File size before/after:', content.length, '->', fixedContent.length);
  
  // Verify the fix
  const verifyContent = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  const hasCarriageReturns = verifyContent.includes('\r');
  
  console.log(`✅ Verification: ${hasCarriageReturns ? '❌ Still has \\r characters' : '✓ No \\r characters found'}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
}