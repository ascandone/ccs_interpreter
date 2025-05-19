# Generate the parser
antlr4 -Dlanguage=TypeScript CCS.g4 -visitor -o src/parser/antlr

# Suppress ts errors in generated files
echo "$(echo '// @ts-nocheck'; cat src/parser/antlr/CCSParser.ts)" > src/parser/antlr/CCSParser.ts
echo "$(echo '// @ts-nocheck'; cat src/parser/antlr/CCSLexer.ts)" > src/parser/antlr/CCSLexer.ts

