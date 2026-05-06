@echo off
echo Syncing nihongo-online files to nihongo...
echo (voicevox.js is EXCLUDED — nihongo keeps its own VoiceVox version)
echo.

set SRC=C:\Users\xiezh\Downloads\nihongo-online
set DST=C:\Users\xiezh\Downloads\nihongo

copy /Y "%SRC%\listening.html"   "%DST%\listening.html"
copy /Y "%SRC%\grammar.html"     "%DST%\grammar.html"
copy /Y "%SRC%\vocabulary.html"  "%DST%\vocabulary.html"
copy /Y "%SRC%\kanji.html"       "%DST%\kanji.html"
copy /Y "%SRC%\reading.html"     "%DST%\reading.html"
copy /Y "%SRC%\quiz.html"        "%DST%\quiz.html"
copy /Y "%SRC%\progress.html"    "%DST%\progress.html"
copy /Y "%SRC%\quiz-bank.js"     "%DST%\quiz-bank.js"
copy /Y "%SRC%\index.html"       "%DST%\index.html"

echo.
echo Done! voicevox.js was NOT overwritten.
echo.
pause
