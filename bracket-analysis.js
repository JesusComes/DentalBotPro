// Bracket and brace matching analysis
const fs = require('fs');

console.log('🔧 Analyzing bracket/brace matching in LanguageContext.js...');

try {
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  const lines = content.split('\n');
  
  let bracketCount = 0;
  let braceCount = 0;
  let parenCount = 0;
  
  console.log('\n📊 Bracket/Brace count analysis around the problem area:');
  
  for (let i = 290; i < 310 && i < lines.length; i++) {
    const line = lines[i];
    const openBrackets = (line.match(/\[/g) || []).length;
    const closeBrackets = (line.match(/\]/g) || []).length;
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    const openParens = (line.match(/\(/g) || []).length;
    const closeParens = (line.match(/\)/g) || []).length;
    
    bracketCount += openBrackets - closeBrackets;
    braceCount += openBraces - closeBraces;
    parenCount += openParens - closeParens;
    
    if (openBrackets || closeBrackets || openBraces || closeBraces) {
      console.log(`${i + 1}: ${line.trim()} | Brackets: ${bracketCount}, Braces: ${braceCount}`);
    }
  }
  
  console.log('\n🔍 Looking for potential syntax issues around lines 295-305...');
  
  // Check specific problem area
  const problemLines = lines.slice(294, 304);
  console.log('\nProblem area:');
  problemLines.forEach((line, index) => {
    console.log(`${295 + index}: ${line}`);
  });
  
  // Check for common issues
  const hasTrailingComma = content.includes("contact: 'Contact',\n      about: 'About Us'\n    }");
  console.log(`\n✅ Checking for trailing comma issue: ${hasTrailingComma ? 'FOUND ISSUE' : 'OK'}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
}