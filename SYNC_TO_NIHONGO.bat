@echo off
echo Syncing nihongo-online files to nihongo (excluding voicevox.js)...

set SRC=C:\Users\xiezh\Downloads\nihongo-online
set DST=C:\Users\xiezh\Downloads\nihongo

copy /Y "%SRC%\listening.html"   "%DST%\listening.html"
copy /Y "%SRC%\grammar.html"     "%DST%\grammar.html"
copy /Y "%SRC%\vocabulary.html"  "%DST%\vocabulary.html"
copy /Y "%SRC%\kanji.html"       "%DST%\kanji.html"
copy /Y "%SRC%\reading.html"     "%DST%\reading.html"
copy /Y "%SRC%\quiz.html"        "%DST%\quiz.html"
copy /Y "%SRC%\mocktest.html"    "%DST%\mocktest.html"
copy /Y "%SRC%\progress.html"    "%DST%\progress.html"
copy /Y "%SRC%\quiz-bank.js"     "%DST%\quiz-bank.js"
copy /Y "%SRC%\index.html"       "%DST%\index.html"
copy /Y "%SRC%\mistakes.html"    "%DST%\mistakes.html"
copy /Y "%SRC%\flashcards.html"  "%DST%\flashcards.html"
copy /Y "%SRC%\writing.html"     "%DST%\writing.html"
copy /Y "%SRC%\schedule.html"    "%DST%\schedule.html"
copy /Y "%SRC%\glossary.html"    "%DST%\glossary.html"
copy /Y "%SRC%\shared-data.js"   "%DST%\shared-data.js"

echo.
echo Done! voicevox.js was NOT overwritten.
echo.
pause
