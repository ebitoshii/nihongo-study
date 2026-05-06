import shutil, os

nihongo = r"C:\Users\xiezh\Downloads\nihongo"
online  = r"C:\Users\xiezh\Downloads\nihongo-online"

# These are too large to write via tool — copy from nihongo (already updated there)
# After running this script, manually replace grammar.html and vocabulary.html in both folders
# with the downloaded versions from Claude outputs

# Copy small updated files from online to nihongo
small = ["quiz.html", "progress.html", "reading.html", "kanji.html"]
for f in small:
    src = os.path.join(online, f)
    dst = os.path.join(nihongo, f)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {f} → nihongo")
    else:
        print(f"MISSING: {f} in nihongo-online")

# listening.html goes to both
for folder in [nihongo, online]:
    dst = os.path.join(folder, "listening.html")
    src = os.path.join(online, "listening.html")
    if os.path.exists(src) and folder != online:
        shutil.copy2(src, dst)
        print(f"Copied listening.html → {os.path.basename(folder)}")

print("\nDone. Still need to manually copy:")
print("  grammar.html   → both folders")
print("  vocabulary.html → both folders")
