import shutil, os

src_outputs = r"C:\Users\xiezh\Downloads\nihongo-online"  # source outputs folder
nihongo     = r"C:\Users\xiezh\Downloads\nihongo"
online      = r"C:\Users\xiezh\Downloads\nihongo-online"

# Files updated (nav change) + new listening.html
files = ["grammar.html","vocabulary.html","kanji.html",
         "reading.html","quiz.html","progress.html","listening.html"]

print("This script copies updated files from nihongo-online to nihongo.")
print("But first you need to manually copy from Claude outputs.")
print("\nFiles to upload to GitHub (nihongo-online):")
for f in files:
    p = os.path.join(online, f)
    if os.path.exists(p):
        print(f"  ✓ {f}")
    else:
        print(f"  ✗ {f} MISSING")
