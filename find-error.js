// Find the exact syntax error in LanguageContext.js
const fs = require('fs');

console.log('🔍 Finding exact syntax error...');

try {
  const content = fs.readFileSync('./contexts/LanguageContext.js', 'utf8');
  
  // Extract just the translations object to test
  const translationsMatch = content.match(/const translations = (\{[\s\S]*?\})\s*const/);
  
  if (translationsMatch) {
    const translationsCode = translationsMatch[1];
    
    console.log('📊 Testing translations object syntax...');
    
    try {
      // Try to parse as JavaScript object (eval is safe here since it's our own code)
      eval(`(${translationsCode})`);
      console.log('✅ Translations object syntax is valid!');
    } catch (syntaxError) {
      console.log('❌ Syntax error found:', syntaxError.message);
      
      // Find the problematic area by testing smaller chunks
      console.log('\n🔧 Analyzing structure...');
      
      // Count braces and brackets systematically
      let openBraces = 0;
      let openBrackets = 0;
      const lines = content.split('\n');
      
      console.log('\nBrace/bracket analysis around problem area:');
      for (let i = 270; i < 310; i++) {
        if (lines[i]) {
          const line = lines[i];
          const braceOpen = (line.match(/\{/g) || []).length;
          const braceClose = (line.match(/\}/g) || []).length;
          const bracketOpen = (line.match(/\[/g) || []).length;
          const bracketClose = (line.match(/\]/g) || []).length;
          
          openBraces += braceOpen - braceClose;
          openBrackets += bracketOpen - bracketClose;
          
          if (i >= 295 && i <= 305) {
            console.log(`${i + 1}: [${openBraces}/${openBrackets}] ${line.trim()}`);
          }
        }
      }
    }
  } else {
    console.log('❌ Could not extract translations object');
    
    // Manual inspection of problem lines
    const lines = content.split('\n');
    console.log('\n📍 Problem area:');
    for (let i = 295; i <= 305; i++) {
      if (lines[i]) {
        console.log(`${i + 1}: ${lines[i]}`);
      }
    }
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
}