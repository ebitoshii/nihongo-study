import shutil, os

src = r"C:\Users\xiezh\Downloads\nihongo"
dst = r"C:\Users\xiezh\Downloads\nihongo-online"

files = ["grammar.html", "vocabulary.html", "kanji.html",
         "reading.html", "quiz.html", "progress.html"]

os.makedirs(dst, exist_ok=True)
for f in files:
    s = os.path.join(src, f)
    d = os.path.join(dst, f)
    shutil.copy2(s, d)
    print(f"Copied: {f}")

print("\nDone! nihongo-online is ready to push to GitHub.")
print("\nFiles already written directly:")
print("  index.html    — updated (no VoiceVox mention)")
print("  voicevox.js   — Web Speech API drop-in")
print("  quiz-bank.js  — same 344-question bank")
