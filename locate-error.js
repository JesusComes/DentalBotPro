// Find exact syntax error location
const fs = require('fs');

console.log('🔍 Locating exact syntax error...');

try {
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  const lines = content.split('\n');
  
  // Simple brace counting from start
  let braceDepth = 0;
  let isInTranslations = false;
  
  console.log('📊 Detailed brace analysis:');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1;
    
    if (line.includes('const translations = {')) {
      isInTranslations = true;
      braceDepth = 1;
    }
    
    if (isInTranslations) {
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      braceDepth += openBraces - closeBraces;
      
      // Show detailed analysis around problem area
      if (lineNum >= 280 && lineNum <= 300) {
        console.log(`${lineNum}: [${braceDepth}] ${line.trim()}`);
      }
      
      if (braceDepth <= 0 && lineNum < 1000) {
        console.log(`❌ PREMATURE END at line ${lineNum}: depth=${braceDepth}`);
        console.log(`   Line content: "${line.trim()}"`);
        break;
      }
    }
  }
  
  // Also check for the specific problem
  console.log('\n🔍 Checking specific issue:');
  console.log('The error points to lines 298-300 which contain:');
  console.log(`298: ${lines[297]?.trim()}`);
  console.log(`299: ${lines[298]?.trim()}`);
  console.log(`300: ${lines[299]?.trim()}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
}