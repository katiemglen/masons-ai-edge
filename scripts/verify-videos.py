#!/usr/bin/env python3
"""Verify YouTube videos via oembed and output results as JSON."""

import json
import urllib.request
import urllib.error
import sys
import time
from collections import defaultdict

# Read raw video IDs
raw_file = "/home/katie/.openclaw/workspace/masons-ai-edge/scripts/raw-videos.txt"

# Group video IDs by search query number
groups = defaultdict(list)
with open(raw_file) as f:
    for line in f:
        line = line.strip()
        if not line or '|' not in line:
            continue
        group_num, vid = line.split('|', 1)
        if vid not in groups[int(group_num)]:
            groups[int(group_num)].append(vid)

# Map search query groups to modules:
# Searches 1-3 -> Module 1 (Mixing Foundations)
# Searches 4-6 -> Module 2 (Mastering)
# Searches 7-9 -> Module 3 (Sound Design)
# Searches 10-12 -> Module 4 (Arrangement)
# Searches 13-15 -> Module 5 (Ableton Workflow)
# Searches 16-18 -> Module 6 (AI Mixing)
# Searches 19-21 -> Module 7 (AI Mastering)
# Searches 22-24 -> Module 8 (AI Sound Design)
# Searches 25-27 -> Module 9 (AI Music Analysis)
# Searches 28-30 -> Module 10 (AI Visuals)
# Searches 31-33 -> Module 11 (Free AI Tools)
# Searches 34-36 -> Module 12 (First Payout)
# Searches 37-39 -> Module 13 (Digital Products)
# Searches 40-42 -> Module 14 (Content Business)
# Searches 43-45 -> Module 15 (Scaling)
# Searches 46-48 -> Module 16 (Prompt Engineering)
# Searches 49-51 -> Module 17 (Custom GPTs)
# Searches 52-54 -> Module 18 (AI Landscape)
# Searches 55-57 -> Module 19 (Automation)
# Searches 58-60 -> Module 20 (Staying Cutting Edge)

module_search_map = {}
for mod_num in range(1, 21):
    base = (mod_num - 1) * 3 + 1
    module_search_map[mod_num] = [base, base+1, base+2]

# Collect candidate video IDs per module
module_candidates = defaultdict(list)
for mod_num, search_nums in module_search_map.items():
    seen = set()
    for sn in search_nums:
        for vid in groups.get(sn, []):
            if vid not in seen:
                seen.add(vid)
                module_candidates[mod_num].append(vid)

def verify_video(vid):
    """Verify a video via oembed. Returns (title, channel) or None."""
    url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            return data.get("title", ""), data.get("author_name", "")
    except Exception:
        return None

# Verify videos for each module - need 3 per module
results = {}
total_verified = 0

for mod_num in range(1, 21):
    candidates = module_candidates[mod_num]
    verified = []
    print(f"Module {mod_num}: {len(candidates)} candidates", file=sys.stderr)
    
    for vid in candidates:
        if len(verified) >= 5:  # Get 5 to have backup choices
            break
        result = verify_video(vid)
        if result:
            title, channel = result
            verified.append({
                "id": vid,
                "title": title,
                "channel": channel,
                "url": f"https://www.youtube.com/watch?v={vid}"
            })
            total_verified += 1
        time.sleep(0.2)
    
    results[mod_num] = verified
    print(f"  -> Verified: {len(verified)}", file=sys.stderr)

print(f"\nTotal verified: {total_verified}", file=sys.stderr)

# Output as JSON
output_file = "/home/katie/.openclaw/workspace/masons-ai-edge/scripts/verified-videos.json"
with open(output_file, 'w') as f:
    json.dump(results, f, indent=2)

print(f"Saved to {output_file}", file=sys.stderr)
