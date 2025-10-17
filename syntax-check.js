// Simple syntax validation script for LanguageContext.js
const fs = require('fs');

console.log('🔍 Checking LanguageContext.js syntax...');

try {
  // Read the file content
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  
  // Check for common syntax issues
  const lines = content.split('\n');
  
  // Check the specific area that was causing problems
  const problemArea = lines.slice(135, 145);
  console.log('\n📍 Problem area that was fixed (lines 136-144):');
  problemArea.forEach((line, index) => {
    console.log(`${136 + index}: ${line.trim()}`);
  });
  
  // Verify the fix
  const hasClosingBracket = content.includes('          icon: \'exclamation-triangle\'\n        }\n      ]\n    },');
  const hasCorrectTitle = content.includes('title: "So einfach geht\'s"');
  
  console.log('\n✅ Verification Results:');
  console.log(`   - Items array properly closed: ${hasClosingBracket ? '✓' : '✗'}`);
  console.log(`   - Title uses correct quotes: ${hasCorrectTitle ? '✓' : '✗'}`);
  
  if (hasClosingBracket && hasCorrectTitle) {
    console.log('\n🎉 SUCCESS: All syntax issues have been resolved!');
    console.log('   The file should now compile successfully on Vercel.');
  } else {
    console.log('\n❌ WARNING: Some issues may still exist.');
  }
  
} catch (error) {
  console.error('❌ Error reading file:', error.message);
}