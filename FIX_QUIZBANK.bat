@echo off
echo Fixing quiz-bank.js apostrophe errors...
python3 -c "
import re
with open('quiz-bank.js', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('\\'', chr(8217))
c = re.sub(r'([a-zA-Z])' + chr(39) + r'([a-zA-Z])', r'\1' + chr(8217) + r'\2', c)
with open('quiz-bank.js', 'w', encoding='utf-8') as f:
    f.write(c)
print('Fixed!')
" 2>nul || python -c "
import re
with open('quiz-bank.js', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('\\'', chr(8217))
fixed = ''
i = 0
while i < len(c):
    if c[i] == chr(39) and i > 0 and i < len(c)-1 and c[i-1].isalpha() and c[i+1].isalpha():
        fixed += chr(8217)
    else:
        fixed += c[i]
    i += 1
with open('quiz-bank.js', 'w', encoding='utf-8') as f:
    f.write(fixed)
print('Fixed!')
"
echo.
echo Done! Now run SYNC_TO_NIHONGO.bat
pause
