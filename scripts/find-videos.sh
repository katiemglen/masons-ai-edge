#!/bin/bash
# Find and verify YouTube videos for all 20 modules
# Outputs JSON with verified video data

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# Function to search YouTube and get unique video IDs
search_youtube() {
  local query="$1"
  local encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$query'))")
  curl -s "https://www.youtube.com/results?search_query=${encoded}" \
    -H "User-Agent: $UA" | \
    grep -oP '"videoId":"[^"]+' | \
    sed 's/"videoId":"//g' | \
    sort -u | head -15
}

# Function to verify a video via oembed and get title/channel
verify_video() {
  local vid="$1"
  local result=$(curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${vid}&format=json" 2>/dev/null)
  if echo "$result" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['title']+'|||'+d['author_name'])" 2>/dev/null; then
    return 0
  fi
  return 1
}

# Module search queries
declare -A QUERIES
QUERIES[1]="mixing foundations EQ compression gain staging EDM tutorial beginner"
QUERIES[2]="mixing EQ compression tutorial In The Mix beginner"
QUERIES[3]="how to mix EDM music Ableton tutorial 2024"
QUERIES[4]="mastering fundamentals LUFS limiting stereo imaging tutorial"
QUERIES[5]="mastering EDM music tutorial beginner 2024"
QUERIES[6]="mastering tutorial Musician on a Mission loudness"
QUERIES[7]="sound design fundamentals synthesis subtractive wavetable EDM tutorial"
QUERIES[8]="Vital synth sound design dubstep bass tutorial"
QUERIES[9]="future bass supersaw sound design tutorial Ableton"
QUERIES[10]="EDM arrangement song structure drop buildup tutorial"
QUERIES[11]="EDM song structure energy curve arrangement tutorial 2024"
QUERIES[12]="how to arrange EDM track tutorial Ableton"
QUERIES[13]="Ableton workflow shortcuts tips tutorial beginner 2024"
QUERIES[14]="Ableton session arrangement view warping sampling tutorial"
QUERIES[15]="Ableton shortcuts productivity workflow tips"
QUERIES[16]="iZotope Neutron AI mixing tutorial 2024"
QUERIES[17]="AI assisted mixing plugin Sonible smart EQ tutorial"
QUERIES[18]="AI mixing tools plugins tutorial music production"
QUERIES[19]="LANDR AI mastering review tutorial 2024"
QUERIES[20]="BandLab mastering free AI tutorial"
QUERIES[21]="AI mastering service comparison LANDR iZotope Ozone"
QUERIES[22]="AI sound design music production tools 2024"
QUERIES[23]="Google Magenta AI music tools tutorial"
QUERIES[24]="AI sample generator music production tools"
QUERIES[25]="AI music analysis Spotify data reference track"
QUERIES[26]="reference track analysis mixing tutorial technique"
QUERIES[27]="music trend research Spotify algorithm 2024"
QUERIES[28]="AI album art cover art Leonardo AI tutorial music"
QUERIES[29]="music producer branding visual identity tutorial"
QUERIES[30]="CapCut music video tutorial producer 2024"
QUERIES[31]="best free AI tools 2025 2026 complete list"
QUERIES[32]="free AI tools for making money beginner 2024"
QUERIES[33]="ChatGPT Claude Gemini free tools tutorial"
QUERIES[34]="make money with AI freelancing first dollar 2024"
QUERIES[35]="AI side hustle beginner Fiverr freelancing tutorial"
QUERIES[36]="fastest way make money online AI tools 2024"
QUERIES[37]="sell digital products AI Gumroad Etsy 2024"
QUERIES[38]="AI digital products zero investment passive income"
QUERIES[39]="print on demand AI art Redbubble tutorial 2024"
QUERIES[40]="faceless YouTube channel AI tools content creation 2024"
QUERIES[41]="start YouTube channel zero budget AI content 2024"
QUERIES[42]="content creation AI tools beginner tutorial"
QUERIES[43]="micro SaaS build AI tools business 2024"
QUERIES[44]="scale freelancing to business AI automation"
QUERIES[45]="AI automation local business services 2024"
QUERIES[46]="prompt engineering tutorial beginner ChatGPT Claude 2024"
QUERIES[47]="advanced prompt engineering techniques framework tutorial"
QUERIES[48]="prompt engineering Anthropic Claude techniques"
QUERIES[49]="custom GPT tutorial how to build ChatGPT 2024"
QUERIES[50]="Claude Projects tutorial AI assistant workspace"
QUERIES[51]="custom AI assistant build tutorial beginner"
QUERIES[52]="ChatGPT vs Claude vs Gemini comparison 2024 2025"
QUERIES[53]="best AI tools comparison which to use 2024"
QUERIES[54]="AI tool landscape overview guide 2024 2025"
QUERIES[55]="Zapier Make automation tutorial beginner AI 2024"
QUERIES[56]="n8n automation tutorial workflow AI 2024"
QUERIES[57]="AI workflow automation tools business 2024"
QUERIES[58]="staying updated AI tools learning system 2024"
QUERIES[59]="AI learning roadmap beginner guide 2024 2025"
QUERIES[60]="generative AI roadmap staying cutting edge 2024"

OUTPUT_FILE="/home/katie/.openclaw/workspace/masons-ai-edge/scripts/raw-videos.txt"
> "$OUTPUT_FILE"

for i in $(seq 1 60); do
  query="${QUERIES[$i]}"
  if [ -z "$query" ]; then continue; fi
  echo "Searching: $query" >&2
  ids=$(search_youtube "$query")
  for vid in $ids; do
    echo "$i|$vid" >> "$OUTPUT_FILE"
  done
  # Small delay to avoid rate limiting
  sleep 0.5
done

echo "Raw video IDs saved to $OUTPUT_FILE" >&2
echo "Total entries: $(wc -l < "$OUTPUT_FILE")" >&2
