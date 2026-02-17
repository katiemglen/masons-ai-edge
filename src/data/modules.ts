export interface VideoLink {
  title: string;
  url: string;
}

export interface Tool {
  name: string;
  cost: "free" | "freemium" | "free-trial" | "paid";
  costNote: string;
  url: string;
}

export interface HandsOn {
  title: string;
  description: string;
  deliverable: string;
}

export interface Module {
  id: string;
  trackId: string;
  trackName: string;
  trackIcon: string;
  number: number;
  title: string;
  subtitle: string;
  xp: number;
  badge?: string;
  badgeLabel?: string;
  estimatedHours: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  tools: Tool[];
  handsOn: HandsOn[];
  videos: VideoLink[];
  proTips: string[];
}

export interface Track {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  modules: Module[];
}

const TRACKS: Track[] = [
  {
    id: "production",
    name: "AI-Powered Music Production",
    icon: "🎛️",
    description:
      "Master mixing, mastering, and sound design with AI tools. Priority: getting your tracks to radio-ready quality.",
    color: "from-purple-600 to-violet-500",
    modules: [
      {
        id: "prod-1",
        trackId: "production",
        trackName: "AI-Powered Music Production",
        trackIcon: "🎛️",
        number: 1,
        title: "Foundations of Mixing with AI",
        subtitle: "EQ, compression, stereo imaging, and limiting — demystified",
        xp: 200,
        badge: "mix_master",
        badgeLabel: "Mix Master",
        estimatedHours: "4-6 hours",
        description:
          "Before you touch any AI tool, you need to understand WHAT mixing actually does. This module breaks down the four pillars of mixing — EQ, compression, stereo imaging, and limiting — in plain English. Then we'll layer in AI-assisted tools that help you make better decisions faster. Genre-specific focus on dubstep bass processing and future bass width/clarity.",
        sections: [
          {
            title: "What Is Mixing and Why Does It Matter?",
            content: `Mixing is the process of taking all the individual tracks in your project (drums, bass, synths, vocals, FX) and blending them into one cohesive stereo audio file that sounds good on any speaker system.

**Think of it like this:** Each track is an ingredient. Mixing is the cooking process. A great mix makes every element clear, punchy, and sitting in its own space — without anything fighting for attention.

**Why AI helps:** Traditional mixing takes years to develop your ears. AI mixing tools analyze your audio mathematically and suggest (or auto-apply) processing that would take a skilled engineer to figure out. BUT — and this is key — AI is a tool, not a replacement for understanding. You need to know WHY an EQ cut helps so you can guide the AI.`,
          },
          {
            title: "EQ (Equalization) — Carving Space",
            content: `**What it does:** EQ boosts or cuts specific frequency ranges in your audio. Think of it as a precise volume control for different parts of the sound spectrum.

**The frequency ranges you need to know:**
- **Sub Bass (20-60 Hz):** The rumble you feel. Key for dubstep. Too much = mud.
- **Bass (60-250 Hz):** The body/warmth. Where your kick and bass live.
- **Low Mids (250-500 Hz):** The "boxy" zone. Often needs cutting.
- **Mids (500 Hz-2 kHz):** Where most instruments live. Clarity zone.
- **Upper Mids (2-4 kHz):** Presence and bite. Harsh if overdone.
- **Highs (4-8 kHz):** Brightness, clarity, air.
- **Air (8-20 kHz):** Sparkle and shimmer. Future bass lives here.

**Dubstep-specific tip:** Your bass needs to dominate 60-200 Hz. Use a high-pass filter on EVERYTHING else below 100 Hz to keep the sub clean. This is the single biggest improvement beginners can make.

**Future bass tip:** Width comes from the 4-12 kHz range. Use a shelf boost on your supersaws in that range, but keep the low end mono.

**AI tool spotlight — TDR Nova (FREE):** This is a dynamic EQ that responds to your audio in real-time. It's like having a mixing engineer who adjusts EQ moment-by-moment. Set up a band around the problem frequency, and Nova will only cut when that frequency gets too loud.`,
          },
          {
            title: "Compression — Controlling Dynamics",
            content: `**What it does:** Compression reduces the difference between the loudest and quietest parts of a signal. This makes things sound more consistent, punchy, and "professional."

**Key parameters:**
- **Threshold:** The volume level where compression kicks in.
- **Ratio:** How much compression is applied (4:1 means for every 4dB above threshold, only 1dB gets through).
- **Attack:** How fast the compressor reacts. Fast attack = kills transients. Slow attack = lets the punch through.
- **Release:** How fast the compressor lets go. Match it to the tempo for a pumping effect (common in EDM).

**For dubstep:** Use slower attack on drums to keep the punch, faster attack on basses to tame the transients. Parallel compression (blending compressed + uncompressed) is your secret weapon for massive drums.

**For future bass:** Gentle compression on your main chords to keep them consistent. Sidechain compression from the kick to everything else creates that classic pumping effect.

**AI tool spotlight — iZotope Neutron:**
⚠️ **Cost reality check:** Neutron is NOT free. Elements sometimes goes on sale for $30-50. The full version is $250+. However, iZotope frequently offers free trials and sometimes gives away older versions. Check their site for current deals.

**Better free option — TDR Kotelnikov (FREE):** A transparent mastering-grade compressor. Excellent for learning because you can see what it's doing.`,
          },
          {
            title: "Stereo Imaging — Width and Space",
            content: `**What it does:** Controls how wide or narrow your mix sounds. Makes things feel like they're coming from specific positions between your speakers.

**The rule:** Keep low frequencies (below 200 Hz) in MONO. Spread high frequencies wider. This keeps your mix powerful and compatible with club systems and phone speakers.

**Dubstep:** Sub bass = dead center, always. Mid-range bass textures can be wider. Snares often get slight width.

**Future bass:** This is where width MATTERS. Your supersaws should be WIDE (use detuning, chorus, and stereo spread). But always check in mono — if it disappears in mono, you've gone too far.

**Free tools:**
- **Ableton's Utility plugin:** Already in your DAW. Use the Width knob and Mid/Side mode.
- **Ozone Imager (FREE standalone):** iZotope gives this away free. It shows you a visual representation of your stereo field AND lets you adjust width.
- **Wider by Polyverse (FREE):** Simple, effective stereo widener.`,
          },
          {
            title: "Limiting — The Final Loudness Stage",
            content: `**What it does:** A limiter is like a brick wall ceiling for your audio. Nothing goes above the threshold, allowing you to push the overall volume up without clipping.

**In mixing vs mastering:** In mixing, you might use a limiter on individual buses. In mastering (next module), the limiter is the final plugin in your chain.

**Key concept — LUFS:** Loudness Units Full Scale. This is the standard measurement for perceived loudness. Streaming platforms target around -14 LUFS (Spotify, Apple Music). If your track is louder, they'll turn it DOWN. If it's quieter, they turn it up — but turning up reveals noise and lack of punch.

**Target levels:**
- Streaming release: -14 LUFS integrated
- Club play: -8 to -10 LUFS  
- Dubstep/Bass music: Artists often master to -6 to -8 LUFS for raw power

**Free limiter options:**
- **Youlean Loudness Meter (FREE):** Doesn't limit, but shows your LUFS in real-time. Essential.
- **Limiter No6 by Vladg (FREE):** Full-featured mastering limiter with multiple stages.`,
          },
          {
            title: "Sonible smart:EQ — AI That Learns Your Mix",
            content: `**What it is:** An EQ plugin that uses AI to analyze your audio and suggest corrections. It's like having a second set of ears.

⚠️ **Cost reality check:** smart:EQ is NOT free. It's €129. However, Sonible offers a 30-day free trial with full functionality. Use it to learn, then decide if it's worth the investment later.

**How to use the trial wisely:**
1. Download the 30-day trial
2. Run it on your current project's mix bus
3. Listen to what it suggests — don't just blindly accept
4. Take notes on what frequencies it's cutting/boosting
5. After the trial, replicate those moves manually with TDR Nova (free)

**The learning value:** Even if you never buy it, the trial teaches you what a well-trained ear would do. That knowledge is permanent.`,
          },
        ],
        tools: [
          {
            name: "TDR Nova",
            cost: "free",
            costNote: "100% free forever. Dynamic parametric EQ.",
            url: "https://www.tokyodawn.net/tdr-nova/",
          },
          {
            name: "TDR Kotelnikov",
            cost: "free",
            costNote: "100% free forever. Mastering-grade compressor.",
            url: "https://www.tokyodawn.net/tdr-kotelnikov/",
          },
          {
            name: "Ozone Imager",
            cost: "free",
            costNote: "Free standalone stereo imaging tool from iZotope.",
            url: "https://www.izotope.com/en/products/ozone-imager.html",
          },
          {
            name: "Youlean Loudness Meter",
            cost: "free",
            costNote: "Free version has all essential features. LUFS metering.",
            url: "https://youlean.co/youlean-loudness-meter/",
          },
          {
            name: "Limiter No6",
            cost: "free",
            costNote: "100% free. Full mastering limiter.",
            url: "https://vladgsound.wordpress.com/plugins/limiter6/",
          },
          {
            name: "Sonible smart:EQ",
            cost: "free-trial",
            costNote:
              "30-day free trial. After that, €129. Use the trial to learn, not as a permanent solution.",
            url: "https://www.sonible.com/smarteq/",
          },
          {
            name: "iZotope Neutron",
            cost: "paid",
            costNote:
              "Elements ~$30-50 on sale, Standard $250+. NOT free. Check for holiday sales or giveaways.",
            url: "https://www.izotope.com/en/products/neutron.html",
          },
          {
            name: "Wider by Polyverse",
            cost: "free",
            costNote: "100% free stereo widener plugin.",
            url: "https://polyversemusic.com/products/wider/",
          },
        ],
        handsOn: [
          {
            title: "Apply AI-Assisted EQ to a Rough Mix",
            description:
              "Take any rough track you've made (or download a free multistem from Splice/Cambridge MT). Load TDR Nova on your mix bus. Identify and fix at least 3 frequency problems: cut the mud around 250-400 Hz, tame any harshness around 2-4 kHz, and boost air above 10 kHz if needed.",
            deliverable: "Before and after audio bounces (.wav or .mp3)",
          },
          {
            title: "Compress Your Drums for Punch",
            description:
              "Apply compression to your drum bus using TDR Kotelnikov. Set a moderate ratio (3:1-4:1), slow attack (10-30ms) to let transients through, and medium release. A/B test compressed vs uncompressed and describe the difference.",
            deliverable:
              "Audio comparison file + a text file describing what you hear",
          },
          {
            title: "Check Your Stereo Image",
            description:
              "Load Ozone Imager on your master bus. Is your sub bass mono? Are your high elements spread wide? Fix any issues using Ableton's Utility plugin on individual tracks.",
            deliverable:
              "Screenshot of your stereo image before and after corrections",
          },
        ],
        videos: [
          {
            title: "The SCIENCE of Mixing Perfect Kick and Bass",
            url: "https://www.youtube.com/watch?v=27ewHn5SAiI",
          },
          {
            title: "Learn EQ From Noob To PRO",
            url: "https://www.youtube.com/watch?v=3S95UaiToho",
          },
          {
            title: "How I would learn music production (If I had to start over)",
            url: "https://www.youtube.com/watch?v=3RjQ1WjAl7Q",
          },
        ],
        proTips: [
          "Always mix at low volume. If it sounds good quiet, it'll sound GREAT loud.",
          "Reference your mix against a commercial track in the same genre. A/B constantly.",
          "High-pass everything that doesn't need low end. Guitar, vocals, hats, FX — all get a cut below 80-100 Hz.",
          "Take breaks every 30-45 minutes. Ear fatigue is real and will destroy your judgment.",
        ],
      },
      {
        id: "prod-2",
        trackId: "production",
        trackName: "AI-Powered Music Production",
        trackIcon: "🎛️",
        number: 2,
        title: "AI Mastering — From Demo to Radio-Ready",
        subtitle: "The signal chain that makes your tracks compete with the pros",
        xp: 200,
        estimatedHours: "3-5 hours",
        description:
          "Mastering is the final step before release — the polish that makes your track sound professional on every speaker system. This module covers the mastering signal chain, then shows you how AI mastering services compare to doing it yourself. We'll be brutally honest about what's free and what costs money.",
        sections: [
          {
            title: "What Is Mastering?",
            content: `Mastering is the final processing applied to a stereo mixdown before distribution. Its goals:

1. **Tonal balance:** Making sure no frequency range is too loud or quiet
2. **Loudness:** Getting the track to competitive volume without distortion
3. **Consistency:** If you're releasing an EP/album, all tracks should have similar loudness and tone
4. **Format optimization:** Preparing the file for streaming, vinyl, CD, etc.

**The mastering signal chain (in order):**
1. EQ (subtle corrections)
2. Stereo imaging (final width adjustments)
3. Compression (glue compression to bind elements)
4. Limiter (final loudness push)
5. Dithering (if converting to 16-bit for CD/streaming)

**IMPORTANT:** If your mix is bad, mastering won't fix it. Mastering enhances a good mix. If you're constantly pushing the mastering chain hard, go back and fix the mix.`,
          },
          {
            title: "AI Mastering Services — Honest Breakdown",
            content: `**BandLab Mastering — FREE ✅**
- Built into BandLab's free DAW and available online
- Upload a WAV, get a mastered version back
- Quality: Decent for demos. Can sound a bit generic.
- Limitations: Limited control over the result. No genre-specific profiles.
- Best for: Quick masters of demos, learning what mastering sounds like
- **Verdict: Start here. It's free and teaches you what mastering does.**

**LANDR — FREEMIUM ⚠️**
- Free tier: You can preview masters but downloading in high quality requires a subscription
- Basic plan: ~$6/month (billed annually) for MP3 downloads
- Creator plan: ~$12/month for WAV downloads + more features
- Quality: Better than BandLab for most genres. Has genre detection.
- **Verdict: The free preview is useful for A/B comparison. Only pay if you're releasing tracks.**

**iZotope Ozone Elements — PAID ⚠️**
- ~$50 on sale (sometimes given away free in promotions)
- Plugin for your DAW — you have full control
- Has AI "Master Assistant" that analyzes your track and sets up a starting chain
- **Verdict: Best AI mastering option IF you catch it on sale. Check Plugin Boutique for deals.**

**CloudBounce — FREEMIUM ⚠️**
- Free tier: Limited previews
- Plans start at ~$9/month
- Quality: Comparable to LANDR
- **Verdict: Another option but no significant advantage over LANDR.**

**The honest truth:** For Mason's budget ($0), BandLab mastering + manual mastering with free plugins (from Module 1) is the move. LANDR's free preview is useful for comparison. Save paid tools for when you're earning from music.`,
          },
          {
            title: "A/B Comparison Techniques",
            content: `A/B comparison is THE most important skill in mastering. Here's how to do it properly:

**Level matching:** When comparing your master to a reference, they MUST be at the same loudness. Our brains perceive "louder" as "better." Use Youlean Loudness Meter on both and match the LUFS.

**The A/B workflow:**
1. Import a reference track (a released song in your genre you want to sound like)
2. Put it on a separate track in Ableton
3. Apply a gain plugin to match its volume to your master
4. Solo back and forth rapidly — listen for differences in:
   - Low end weight
   - Mid clarity
   - High frequency sparkle
   - Stereo width
   - Overall punch/energy

**What to listen for in EDM specifically:**
- Does your kick hit as hard?
- Is your sub bass as clean?
- Do your supersaws have the same width?
- Is the vocal (if any) as present?

**Free tool:** ADPT Audio A/B plugin (free) lets you switch between two sources with automatic level matching.`,
          },
          {
            title: "DIY Mastering Chain with Free Plugins",
            content: `You don't need to pay for mastering. Here's a complete free mastering chain:

**1. TDR Nova (FREE EQ)**
- Gentle corrections. Cut any buildup around 200-400 Hz. Slight boost at 40 Hz for sub weight. Air boost at 12 kHz+.

**2. Ozone Imager (FREE)**
- Narrow the lows (below 200 Hz toward mono). Widen the highs slightly.

**3. TDR Kotelnikov (FREE Compressor)**
- Gentle glue compression. Ratio: 2:1. Threshold so you're getting 1-2 dB of gain reduction. Slow attack, auto release.

**4. Limiter No6 (FREE)**
- Set the ceiling at -1 dB (True Peak). Push the input gain until you hit your target LUFS. For streaming: -14 LUFS. For club: -8 to -10 LUFS.

**5. Youlean Loudness Meter (FREE)**
- Monitor your final LUFS, true peak, and loudness range.

This chain, used with care, will get you 80% of the way to professional mastering. The last 20% is experience and expensive analog gear.`,
          },
        ],
        tools: [
          {
            name: "BandLab Mastering",
            cost: "free",
            costNote:
              "Completely free. Upload and master tracks online. No payment required.",
            url: "https://www.bandlab.com/mastering",
          },
          {
            name: "LANDR",
            cost: "freemium",
            costNote:
              "Free to preview masters. Downloading requires Basic ($6/mo) or Creator ($12/mo) plan.",
            url: "https://www.landr.com/",
          },
          {
            name: "iZotope Ozone Elements",
            cost: "paid",
            costNote:
              "~$50 on sale. Sometimes given away free during promotions. Check Plugin Boutique regularly.",
            url: "https://www.izotope.com/en/products/ozone.html",
          },
          {
            name: "CloudBounce",
            cost: "freemium",
            costNote:
              "Free preview. Plans from ~$9/month. No major advantage over LANDR.",
            url: "https://www.cloudbounce.com/",
          },
          {
            name: "Youlean Loudness Meter",
            cost: "free",
            costNote:
              "Free version has everything you need for LUFS monitoring.",
            url: "https://youlean.co/youlean-loudness-meter/",
          },
        ],
        handsOn: [
          {
            title: "Master a Track with BandLab (Free)",
            description:
              "Take your best current track (or a rough mix from Module 1). Export it as a WAV from Ableton. Upload to BandLab's free mastering service. Download the result. Compare the original mix to the master — what changed?",
            deliverable:
              "Original mix .wav + mastered .wav + text notes on differences",
          },
          {
            title: "DIY Master with Free Plugins",
            description:
              "Using the free plugin chain (TDR Nova → Ozone Imager → TDR Kotelnikov → Limiter No6 → Youlean Meter), master the same track yourself. Target -14 LUFS for streaming.",
            deliverable: "DIY mastered .wav file",
          },
          {
            title: "A/B Compare Against a Reference",
            description:
              "Pick a professional track in your genre (dubstep or future bass). Level-match it against your master. Document at least 5 specific differences and what you'd adjust.",
            deliverable:
              "Written A/B comparison document (.txt or .pdf) with specific observations",
          },
        ],
        videos: [
          {
            title: "STOP Paying for Mastering! BandLab's AI is a Game-Changer",
            url: "https://www.youtube.com/watch?v=0HxrG9IE8ss",
          },
          {
            title:
              "AI MASTERING and Why LANDR Is a Game-Changer for Indie Musicians",
            url: "https://www.youtube.com/watch?v=9Lzi30Io3Vs",
          },
          {
            title: "Complete Music Producer Course (4h+)",
            url: "https://www.youtube.com/watch?v=6YwWKn6k0Mg",
          },
        ],
        proTips: [
          "Master with fresh ears. Don't master the same day you mixed.",
          "Listen to your master on multiple systems: headphones, car, phone speaker, laptop.",
          "If your master sounds worse than the mix, you're pushing too hard. Back off the limiter.",
          "Keep a reference track loaded in every mastering session. A/B constantly.",
        ],
      },
      {
        id: "prod-3",
        trackId: "production",
        trackName: "AI-Powered Music Production",
        trackIcon: "🎛️",
        number: 3,
        title: "AI Sound Design for Unique Sounds",
        subtitle: "Create sounds nobody has heard before",
        xp: 250,
        badge: "sound_designer",
        badgeLabel: "Sound Designer",
        estimatedHours: "5-7 hours",
        description:
          "Sound design is what separates a generic track from YOUR track. This module teaches you how to use AI tools alongside Vital (the best free synth ever made) to create dubstep growls, future bass supersaws, melodic atmospheres, and completely original textures.",
        sections: [
          {
            title: "Vital Synth — Your Free Sound Design Powerhouse",
            content: `**Vital is 100% FREE** and it's one of the best synths available at ANY price point. Professional producers use it. It runs great on your RTX 3050.

**Why Vital is perfect for you:**
- Wavetable synthesis = infinite sound possibilities
- Visual interface shows you exactly what's happening to your sound
- Built-in effects (chorus, reverb, delay, distortion, compressor)
- Modulation drag-and-drop = fast experimentation
- Huge community with thousands of free presets

**Download:** https://vital.audio — the free version has everything except some wavetables. You don't need the paid version.

**The three oscillators model:**
- OSC 1: Your main tone (saw, square, custom wavetable)
- OSC 2: Layer or detune against OSC 1 for width
- OSC 3: Sub layer or texture
- Each can load different wavetables and morph between them

**For dubstep basses:** Load aggressive wavetables, modulate the wavetable position with an LFO, add distortion, and use the formant filter. This is literally how Excision-style basses are made.

**For future bass leads:** Stack detuned saws across OSC 1 and 2, add unison voices (7-16), slight chorus, and a gentle LPF with envelope modulation.`,
          },
          {
            title: "AI-Assisted Sound Design Tools",
            content: `**Google Magenta — FREE ✅**
- Open-source AI tools for music creation
- NSynth: Creates new sounds by blending existing instruments
- Works in your browser or as downloadable tools
- URL: https://magenta.tensorflow.org/
- Great for creating unusual textures and ambient layers
- Limitation: Not real-time. You generate sounds, then import them.

**Splice with AI Search — FREEMIUM ⚠️**
- Splice's AI can find samples based on descriptions ("dark dubstep bass hit")
- Free tier: Very limited (used to offer 100 credits). Check current terms.
- Starter plan: ~$8/month for 100 credits
- **Verdict:** The AI search is cool but the free tier is very limited. Use it for inspiration, not as a primary tool.

**AIVA — FREEMIUM ⚠️**
- AI music composition tool
- Free tier: 3 downloads/month, non-commercial use
- Not great for EDM specifically, but useful for melody ideas
- **Verdict:** Niche use case. Try it for writer's block.

**The honest approach:** Vital (free) + your ears + experimentation = better results than any AI tool. AI is supplementary here, not primary.`,
          },
          {
            title: "Dubstep Bass Design — Step by Step",
            content: `**The Classic Growl Bass:**
1. Open Vital. Load a complex wavetable on OSC 1 (try "Analog Growl" or "Formant")
2. Set up an LFO mapped to wavetable position — rate around 2-4 Hz for a wobble
3. Add the Formant filter. Map another LFO to the filter vowel parameter
4. Turn on the built-in Distortion effect (try "Soft Clip" or "Hard Clip")
5. Add a touch of reverb (very short, just for space)
6. Bounce to audio and process further in Ableton (more distortion, EQ, multiband compression)

**The Riddim Bass:**
1. Simple square or saw wavetable
2. Very short pitch envelope (sharp downward pitch at note start)
3. Aggressive high-pass + band-pass filter automation
4. Heavy OTT compression (Ableton has a free OTT preset, or use Xfer OTT which is FREE)
5. Layer with a clean sub sine wave

**The Melodic Bass Atmosphere:**
1. Soft, evolving wavetable (try "Dreamy" category)
2. Long attack, long release on the amp envelope
3. Chorus + reverb (long tail)
4. Stereo spread on OSC 2
5. Gentle LPF with slow LFO modulation`,
          },
          {
            title: "Xfer OTT — The EDM Secret Weapon (FREE)",
            content: `OTT (Over The Top) is a multiband upward/downward compressor. It's used on literally every dubstep and future bass track. It's FREE from Xfer Records.

**What it does:** Makes everything louder, more aggressive, and more present. It brings up quiet details and tames peaks across three frequency bands.

**How to use it:**
- On dubstep basses: 50-70% depth. Instant aggression.
- On future bass chords: 30-50% depth. Adds clarity without harshness.
- On drums: 20-40% depth. Brings out ghost notes and room.
- On the master bus: 10-20% depth MAX. Just a touch of glue.

**WARNING:** OTT is addictive. It's easy to slap it on everything at 100%. Resist. Use it surgically.

Download: https://xferrecords.com/freeware`,
          },
        ],
        tools: [
          {
            name: "Vital Synth",
            cost: "free",
            costNote:
              "Free tier has full synthesis engine. Paid ($25/$80) adds more wavetables. Free is enough.",
            url: "https://vital.audio/",
          },
          {
            name: "Google Magenta",
            cost: "free",
            costNote:
              "100% free and open source. Browser-based tools for AI sound generation.",
            url: "https://magenta.tensorflow.org/",
          },
          {
            name: "Xfer OTT",
            cost: "free",
            costNote:
              "100% free. The most-used compressor in EDM production.",
            url: "https://xferrecords.com/freeware",
          },
          {
            name: "Splice",
            cost: "freemium",
            costNote:
              "Very limited free tier. Starter plan ~$8/month. Good but not essential at $0 budget.",
            url: "https://splice.com/",
          },
          {
            name: "AIVA",
            cost: "freemium",
            costNote:
              "Free: 3 downloads/month, non-commercial. Limited use for EDM.",
            url: "https://www.aiva.ai/",
          },
        ],
        handsOn: [
          {
            title: "Create 5 Unique Sounds in Vital",
            description:
              "Create: (1) A dubstep growl bass (2) A riddim bass (3) A future bass supersaw (4) A melodic pad/atmosphere (5) A unique lead sound. Start from an initialized patch for each — no presets.",
            deliverable:
              "5 audio files (.wav) of your sounds + Vital preset files (.vital) if possible",
          },
          {
            title: "Generate an AI Texture with Magenta",
            description:
              "Use Google Magenta's NSynth or other tools to create an unusual sound. Import it into Ableton, process it (EQ, reverb, granular stretch), and use it as a layer in a track.",
            deliverable: "Audio file of the processed AI-generated texture",
          },
          {
            title: "Process a Sound Through the Full Chain",
            description:
              "Take one of your Vital sounds, bounce it to audio, then process through: EQ (TDR Nova) → OTT → Distortion → Reverb. Show the before and after.",
            deliverable: "Before and after audio files + processing chain notes",
          },
        ],
        videos: [
          {
            title: "Dubstep Growls in Vital - Sound Design Tutorial",
            url: "https://www.youtube.com/watch?v=4cH0TaJ_ExE",
          },
          {
            title: "Dubstep Bass in Vital - Quick Tutorial",
            url: "https://www.youtube.com/watch?v=1hZUiAr2fgc",
          },
          {
            title: "How to Make Wubs in Vital - Sound Design",
            url: "https://www.youtube.com/watch?v=1kaEu-YZL0Y",
          },
        ],
        proTips: [
          "Save EVERYTHING. Made a cool sound by accident? Save the preset immediately.",
          "Resampling is your friend: bounce audio, chop it up, reverse it, pitch it. Your sounds become 100% unique.",
          "Layer multiple bass sounds. Sub sine wave for the lows + growl for the mids + distorted layer for the highs = massive.",
          "OTT at 100% is a meme. Use 30-60% for musicality.",
        ],
      },
      {
        id: "prod-4",
        trackId: "production",
        trackName: "AI-Powered Music Production",
        trackIcon: "🎛️",
        number: 4,
        title: "AI Music Analysis & Trend Research",
        subtitle: "Reverse-engineer what makes tracks blow up",
        xp: 200,
        estimatedHours: "4-5 hours",
        description:
          "The best producers don't just make music — they study it. This module teaches you how to systematically analyze reference tracks, understand arrangement patterns, and use free tools to research what's trending in dubstep, future bass, and melodic bass.",
        sections: [
          {
            title: "Why Analysis Matters More Than You Think",
            content: `Most beginners spend 100% of their time making music and 0% studying it. Flip that to 70/30 and you'll improve 5x faster.

**What to analyze in a reference track:**
1. **Arrangement:** How long is the intro? When does the drop hit? How many drops? What's between them?
2. **Energy curve:** How does the energy build and release throughout the song?
3. **Frequency balance:** Is it bass-heavy? How bright is it? Where does the vocal sit?
4. **Sound selection:** What kinds of sounds are used? How many layers?
5. **Effects:** What transitions/risers/impacts are used? How do sections flow into each other?
6. **Stereo field:** What's wide? What's narrow? How does width change at the drop?

**The 10-listen method:**
- Listen 1: Just enjoy it. Note your emotional response.
- Listen 2: Map the arrangement (intro, buildup, drop 1, breakdown, drop 2, outro)
- Listen 3: Focus ONLY on the low end
- Listen 4: Focus ONLY on the mids
- Listen 5: Focus ONLY on the highs and stereo field
- Listen 6-10: Deep dive into specific elements that interest you`,
          },
          {
            title: "Free Analysis Tools",
            content: `**Ableton's built-in Spectrum analyzer:**
Already in your DAW. Drop a reference track in and use the Spectrum device to see the frequency balance. Compare it visually to your own tracks.

**SPAN by Voxengo (FREE):**
Much better spectrum analyzer than Ableton's default. Shows peak and average levels, supports multiple slope options, and is more visually detailed.
URL: https://www.voxengo.com/product/span/

**Using ChatGPT/Claude for analysis:**
You can describe a track to AI and ask for analysis help:
- "I'm analyzing a dubstep track. The drop has a heavy sub bass, distorted mid-range growls, and snappy drums. What frequency ranges should I focus on for each element?"
- "Help me create an arrangement template for a 3-minute future bass track with 2 drops"

**Spotify for Artists / Spotify data:**
While you can't access deep analytics without releases, you CAN:
- Study playlist placements (what genres are growing?)
- Look at "Fans Also Like" to understand your niche
- Check release dates and frequency of top artists in your genre

**YouTube comments and engagement:**
- Read comments on popular tracks to understand what listeners love
- Check view counts vs subscriber counts to gauge virality
- Study upload frequency of successful channels`,
          },
          {
            title: "Arrangement Templates by Genre",
            content: `**Dubstep (typical 3-4 min track):**
- 0:00-0:30 — Intro (atmospheric, minimal)
- 0:30-1:00 — Buildup (rising tension, snare rolls, risers)
- 1:00-1:30 — DROP 1 (full energy, main bass + drums)
- 1:30-2:00 — Breakdown (half-time feel or atmospheric break)
- 2:00-2:15 — Buildup 2 (shorter, more intense)
- 2:15-2:45 — DROP 2 (variation on drop 1, maybe heavier)
- 2:45-3:15 — Bridge/Breakdown
- 3:15-3:45 — DROP 3 or Final section
- 3:45-4:00 — Outro

**Future Bass (typical 3 min track):**
- 0:00-0:15 — Intro
- 0:15-0:45 — Verse (vocal or melodic hook)
- 0:45-1:00 — Pre-drop buildup
- 1:00-1:30 — DROP 1 (big chords, sidechained, emotional)
- 1:30-2:00 — Verse 2 / Breakdown
- 2:00-2:15 — Buildup 2
- 2:15-2:45 — DROP 2 (variation — maybe stripped back then full)
- 2:45-3:00 — Outro

These are starting points, not rules. But knowing the formula lets you intentionally break it.`,
          },
          {
            title: "Energy Curves and the Drop Science",
            content: `Every great EDM track follows an energy curve. Think of it as tension and release.

**The energy scale (1-10):**
- Intro: 3-4
- Verse: 5-6
- Buildup: 7 → 9 (rising)
- Drop: 10 (maximum)
- Breakdown: 4-5 (contrast!)
- Build 2: 8 → 10 (faster rise)
- Drop 2: 10+ (somehow even bigger)

**Key insight:** The drop doesn't feel powerful because of what's IN it — it feels powerful because of what was REMOVED before it. The bigger the contrast between the quiet section and the drop, the harder it hits.

**How to create contrast:**
- Filter sweep (low-pass filter everything, then remove at drop)
- Remove drums in the breakdown
- Drop the volume
- Use silence (even a half-second gap before the drop is powerful)
- Rising white noise/risers
- Snare build-ups

**Study this in real tracks:** Open any Excision, Virtual Riot, or Illenium track in Ableton. Look at the waveform. The quiet-loud pattern is visually obvious.`,
          },
        ],
        tools: [
          {
            name: "SPAN by Voxengo",
            cost: "free",
            costNote: "100% free spectrum analyzer plugin.",
            url: "https://www.voxengo.com/product/span/",
          },
          {
            name: "ChatGPT (Free Tier)",
            cost: "free",
            costNote:
              "Free tier available. Great for arrangement advice and analysis discussion.",
            url: "https://chat.openai.com/",
          },
          {
            name: "Ableton Spectrum Analyzer",
            cost: "free",
            costNote:
              "Built into Ableton. You already have it.",
            url: "https://www.ableton.com/",
          },
        ],
        handsOn: [
          {
            title: "Deep Analysis of 5 Reference Tracks",
            description:
              "Choose 5 tracks: 2 dubstep, 2 future bass, 1 melodic bass. For each, document: arrangement map (sections with timestamps), energy curve (rate each section 1-10), frequency balance notes, sound selection list, and 3 specific production techniques you notice.",
            deliverable:
              "Analysis document (.txt or .pdf) with all 5 tracks analyzed",
          },
          {
            title: "Create Your Arrangement Template",
            description:
              "Based on your analysis, create a DAW template in Ableton with arrangement markers, placeholder tracks, and basic structure. This becomes your starting point for future tracks.",
            deliverable:
              "Screenshot of your Ableton template + description of your standard arrangement",
          },
        ],
        videos: [
          {
            title: "Using Reference Tracks in Ableton THE RIGHT WAY",
            url: "https://www.youtube.com/watch?v=5_fAIF512G4",
          },
          {
            title:
              "You're WRONG About Reference Tracks (and why it makes you miserable)",
            url: "https://www.youtube.com/watch?v=72Kb0LobhEg",
          },
          {
            title: "The Fastest Way to Arrange a Track",
            url: "https://www.youtube.com/watch?v=3gnSs21XXwI",
          },
        ],
        proTips: [
          "Create a Spotify playlist of 20 reference tracks in your genre. Update it monthly.",
          "When you hear something cool in a track, immediately try to recreate it. Reverse engineering is the fastest way to learn.",
          "The arrangement is just as important as the sounds. A mediocre drop with great arrangement > great drop with confusing arrangement.",
          "Use SPAN to compare the frequency spectrum of your tracks vs reference tracks. The visual difference tells you exactly what to fix.",
        ],
      },
      {
        id: "prod-5",
        trackId: "production",
        trackName: "AI-Powered Music Production",
        trackIcon: "🎛️",
        number: 5,
        title: "AI Visuals, Branding & Release Strategy",
        subtitle: "Look like a pro before you are one",
        xp: 200,
        estimatedHours: "4-6 hours",
        description:
          "Your music is only half the game. Visual branding, artwork, and release strategy determine whether anyone actually FINDS and LISTENS to your tracks. This module covers free AI tools for creating album art, building a visual brand, and planning releases strategically.",
        sections: [
          {
            title: "Building a Producer Brand from Zero",
            content: `**Your brand is:**
- Your producer name (already have one? If not, pick something memorable and unique)
- Your visual aesthetic (colors, style, vibe)
- Your genre identity (what people expect from you)
- Your online presence (socials, streaming profiles)

**For EDM producers, your brand needs to feel:**
- Dark and powerful (dubstep)
- Colorful and emotional (future bass)
- Or a blend that's uniquely YOU

**Brand consistency checklist:**
- Same profile pic across all platforms
- Same color scheme on all artwork
- Consistent bio/description
- Regular release schedule (even if monthly)

**The truth about starting:** Nobody has a brand when they start. You build it by consistently releasing music and content. Don't wait until it's "perfect." Start ugly and iterate.`,
          },
          {
            title: "AI Album Art & Visuals (Free Tools)",
            content: `**Leonardo.ai — FREE TIER ✅**
- 150 free tokens/day (enough for ~10-15 images)
- High quality AI image generation
- Great for album covers, social media graphics, visualizers
- Style options: cyberpunk, abstract, dark fantasy — all perfect for EDM
- **How to use for covers:** Prompt example: "Dark cyberpunk album cover art, neon purple and cyan, abstract bass waves, dubstep aesthetic, no text, 1:1 ratio"
- URL: https://leonardo.ai/

**Canva AI — FREE TIER ✅**
- Free plan includes AI image generation (limited), templates, and design tools
- Best for: Social media posts, YouTube thumbnails, story templates
- Has music-specific templates
- **Limitation:** Free tier has a daily AI generation limit and Canva watermark on some premium elements
- URL: https://www.canva.com/

**Microsoft Designer — FREE ✅**
- Free with Microsoft account (you probably have one for Windows)
- AI image generation + design templates
- Quality is decent, not as good as Leonardo for artistic styles
- URL: https://designer.microsoft.com/

**What NOT to use:**
- Midjourney: Requires a paid subscription ($10/mo minimum). Not free.
- DALL-E: ChatGPT free tier has limited image generation. Useful but not reliable for album art.`,
          },
          {
            title: "Music Videos on Zero Budget",
            content: `**CapCut — FREE ✅**
- Free video editor by ByteDance (TikTok's parent company)
- AI features: auto-captions, background removal, effects
- Template-based music videos — choose a template, add your audio, done
- Desktop + mobile versions
- Limitation: Some premium effects/templates require Pro ($8/month)
- **For visualizers:** Use CapCut's audio visualizer templates for quick lyric/visualizer videos

**DaVinci Resolve — FREE ✅**
- Professional video editor, same level as Adobe Premiere
- Free version has 95% of features
- Steeper learning curve than CapCut, but WAY more powerful
- Runs well on your RTX 3050
- Great for: Custom music videos, longer-form content, color grading

**Runway ML — FREEMIUM ⚠️**
- AI video generation and editing
- Free tier: Very limited (125 credits, enough for ~1 minute of video)
- Paid plans start at $12/month
- Cool for experimental visual effects, not practical for regular use at $0

**Strategy for music videos at $0 budget:**
1. Create a visualizer video (audio waveform + album art + effects) in CapCut — 30 minutes
2. Use free stock footage sites (Pexels, Pixabay) + CapCut effects for a "real" music video — 2-3 hours
3. Screen record yourself performing/producing in Ableton — authenticity sells`,
          },
          {
            title: "Release Strategy — Getting Your Music Heard",
            content: `**Distribution (how to get on Spotify, Apple Music, etc.):**
- **DistroKid:** ~$23/year for unlimited uploads. Cheapest per-release option.
- **Amuse:** Free tier exists (limited features, slower release). Good for first release.
- **TuneCore:** More expensive. Skip unless you have a reason.

**Release timeline:**
- 4 weeks before: Finalize the track. Create artwork. Write descriptions.
- 3 weeks before: Upload to distributor. Set release date.
- 2 weeks before: Start teasing on socials (clips, behind-the-scenes)
- 1 week before: Pre-save campaign. Submit to Spotify playlists.
- Release day: Post everywhere. Share link. Engage with every comment.
- 1 week after: Still promoting. Share a "how I made this" post.

**Playlist strategy:**
- Submit to independent playlist curators (free): SubmitHub has a free tier
- Daily Playlists, PlaylistPush — some have free options
- Network with other small producers and share each other's music
- Spotify editorial playlists: Submit through Spotify for Artists (free, set up when you have releases)

**The honest timeline:** Your first 5-10 releases will get 10-100 plays. That's NORMAL. Don't get discouraged. The game is consistency. Track 20 will do better than track 1 if you're learning and networking.`,
          },
        ],
        tools: [
          {
            name: "Leonardo.ai",
            cost: "free",
            costNote:
              "150 free tokens/day. Excellent for album art and visuals.",
            url: "https://leonardo.ai/",
          },
          {
            name: "Canva",
            cost: "free",
            costNote:
              "Free plan has tons of templates. Some premium elements cost money but free tier is very usable.",
            url: "https://www.canva.com/",
          },
          {
            name: "CapCut",
            cost: "free",
            costNote:
              "Free for most features. Some premium templates/effects need Pro ($8/mo).",
            url: "https://www.capcut.com/",
          },
          {
            name: "DaVinci Resolve",
            cost: "free",
            costNote:
              "Free version is industry-grade. Studio version ($295) adds minor features. Free is enough.",
            url: "https://www.blackmagicdesign.com/products/davinciresolve",
          },
          {
            name: "Microsoft Designer",
            cost: "free",
            costNote:
              "Free with Microsoft account. AI image generation + templates.",
            url: "https://designer.microsoft.com/",
          },
        ],
        handsOn: [
          {
            title: "Create Album Art with AI",
            description:
              "Use Leonardo.ai (free) to generate 5+ variations of album art for a real or hypothetical release. Pick the best one, refine the prompt, and create a final 3000x3000 image suitable for distribution.",
            deliverable:
              "Final album art image (.png or .jpg) + the prompts you used",
          },
          {
            title: "Build Your Visual Brand Kit",
            description:
              "Using Canva's free tools, create: (1) A profile picture/logo (2) A banner image for SoundCloud/YouTube (3) A template for Instagram posts (4) A color palette document. All should have a consistent visual style.",
            deliverable:
              "Brand kit images + a text document describing your brand identity (colors, fonts, vibe)",
          },
          {
            title: "Plan a Release Strategy",
            description:
              "Write a complete release plan for your next track: timeline (4 weeks out), social media posts planned, platforms to distribute to, playlists to submit to, and engagement strategy.",
            deliverable: "Release strategy document (.txt or .pdf)",
          },
        ],
        videos: [
          {
            title: "Create Your Own AI Album Cover (The Easiest Way)",
            url: "https://www.youtube.com/watch?v=2e44v4w3w0A",
          },
          {
            title: "How to Build a Music Brand (Full Masterclass)",
            url: "https://www.youtube.com/watch?v=7Bvkoe21n98",
          },
          {
            title:
              "Music Marketing Mastery: Branding an Artist from Unknown to Unforgettable",
            url: "https://www.youtube.com/watch?v=6psMBL5_z1k",
          },
        ],
        proTips: [
          "Your album art is the first thing people see. Put real effort into it — bad art = people scroll past.",
          "Consistent visual branding makes you look 10x more professional than you are. Use the same colors, fonts, and style on everything.",
          "Don't wait for perfection. Release early, release often. Every release is practice.",
          "Engage with comments on your own posts AND on other producers' posts. Networking > marketing at this stage.",
        ],
      },
    ],
  },
  {
    id: "income",
    name: "AI Side Income — $0 to First Dollar",
    icon: "💰",
    description:
      "Start from absolute zero and build real income with AI tools. Every recommendation is $0-$10 to start. No BS.",
    color: "from-emerald-500 to-cyan-500",
    modules: [
      {
        id: "income-1",
        trackId: "income",
        trackName: "AI Side Income — $0 to First Dollar",
        trackIcon: "💰",
        number: 1,
        title: "Free AI Tools Arsenal (2026)",
        subtitle: "Everything you can use without spending a dime",
        xp: 150,
        estimatedHours: "3-4 hours",
        description:
          "Before you make your first dollar, you need to know your weapons. This is a complete, honest inventory of every free and freemium AI tool available in 2026 — what each one can and can't do, and how to maximize free tiers strategically.",
        sections: [
          {
            title: "The Core Free AI Assistants",
            content: `**ChatGPT (Free Tier) ✅**
- What you get: GPT-4o access with limits (~15 messages/3 hours on GPT-4o, unlimited on GPT-4o-mini)
- Can do: Write, code, analyze, brainstorm, create images (limited)
- Can't do: Browse web consistently, upload large files, use advanced features like memory
- Best for: General writing, brainstorming, coding help
- URL: https://chat.openai.com/

**Claude (Free Tier) ✅**
- What you get: Claude 3.5 Sonnet access with daily limits (~30+ messages)
- Can do: Long document analysis, careful reasoning, writing with nuance
- Can't do: Generate images, browse web, unlimited usage
- Best for: Long-form writing, analysis, nuanced tasks, coding
- URL: https://claude.ai/

**Gemini (Free) ✅**
- What you get: Gemini Pro access, Google integration
- Can do: Web search, image analysis, workspace integration
- Can't do: Some advanced reasoning tasks
- Best for: Research, Google Workspace users, image analysis
- URL: https://gemini.google.com/

**Grok (Free with X) ✅**
- What you get: Grok access with X (Twitter) account
- Can do: Real-time X data analysis, general AI tasks
- Can't do: Heavy document processing
- Best for: Social media research, trend analysis
- URL: https://x.com/

**Perplexity (Free) ✅**
- What you get: 5 Pro searches/day, unlimited basic searches
- Can do: Cited research, real-time web search, source-backed answers
- Can't do: Creative writing, coding, heavy analysis on free tier
- Best for: Research, fact-checking, finding sources
- URL: https://www.perplexity.ai/`,
          },
          {
            title: "Free Creative & Design Tools",
            content: `**Canva AI (Free) ✅**
- AI text-to-image generation (limited daily)
- Thousands of free templates
- Magic Write (AI text generation in designs)
- Limitation: Some premium elements have watermarks, limited AI generations

**Leonardo.ai (Free) ✅**
- 150 tokens/day for AI image generation
- Multiple models and styles
- Best free AI image generator for quality
- Limitation: Daily token limit, some advanced features locked

**Microsoft Designer (Free) ✅**
- AI image generation
- Design templates
- Integrates with Microsoft ecosystem

**Grammarly (Free) ✅**
- Spelling and grammar correction
- Basic tone detection
- Chrome extension
- Limitation: Advanced suggestions (clarity, engagement) require Premium ($12/mo)

**Remove.bg (Free) ✅**
- AI background removal
- Limitation: Free downloads are low resolution. High-res needs credits.`,
          },
          {
            title: "The Strategic Free Tier Rotation",
            content: `Here's the play: Don't rely on one tool. Rotate between them.

**The daily workflow:**
1. Morning: Use Claude for deep writing/analysis work (30 messages)
2. Midday: Switch to ChatGPT for quick tasks, brainstorming, image generation
3. Afternoon: Gemini for research with web access
4. Perplexity for any fact-checking needed
5. End of day: Grok for social media insights

**Why this works:** Each tool has a daily limit, but they reset independently. By the time you've cycled through all of them, the first one has reset.

**Pro move:** Create a bookmark folder called "AI Tools" with all of these. Open the freshest one each time you need help.

**What you CAN'T do on free tiers:**
- Run massive batch operations
- Process huge documents consistently
- Generate unlimited images
- Access the latest models every time
- Get API access for automation

**When to upgrade (NOT NOW):**
- Only after you're earning $100+/month from AI-assisted work
- First upgrade: ChatGPT Plus ($20/mo) — most versatile
- Second upgrade: Claude Pro ($20/mo) — best for writing-heavy work`,
          },
        ],
        tools: [
          {
            name: "ChatGPT",
            cost: "free",
            costNote:
              "Free tier with GPT-4o (limited) and GPT-4o-mini (unlimited).",
            url: "https://chat.openai.com/",
          },
          {
            name: "Claude",
            cost: "free",
            costNote:
              "Free tier with Claude 3.5 Sonnet. ~30 messages/day.",
            url: "https://claude.ai/",
          },
          {
            name: "Gemini",
            cost: "free",
            costNote: "Free with Google account. Gemini Pro access.",
            url: "https://gemini.google.com/",
          },
          {
            name: "Grok",
            cost: "free",
            costNote: "Free with X (Twitter) account.",
            url: "https://x.com/",
          },
          {
            name: "Perplexity",
            cost: "free",
            costNote:
              "Free: unlimited basic searches, 5 Pro searches/day.",
            url: "https://www.perplexity.ai/",
          },
          {
            name: "Canva",
            cost: "free",
            costNote: "Free tier very usable. Pro: $13/month (not needed yet).",
            url: "https://www.canva.com/",
          },
          {
            name: "Leonardo.ai",
            cost: "free",
            costNote: "150 free tokens/day for AI image generation.",
            url: "https://leonardo.ai/",
          },
          {
            name: "Grammarly",
            cost: "free",
            costNote:
              "Free: spelling, grammar, basic tone. Premium: $12/mo (not needed yet).",
            url: "https://www.grammarly.com/",
          },
        ],
        handsOn: [
          {
            title: "Set Up All Free AI Accounts",
            description:
              "Create accounts on ALL free tools listed: ChatGPT, Claude, Gemini, Grok, Perplexity, Canva, Leonardo.ai, Grammarly. Test each one with the same prompt: 'Write a 200-word product description for noise-canceling headphones aimed at gamers.' Compare the outputs.",
            deliverable:
              "Screenshot of all accounts + comparison document of the outputs",
          },
          {
            title: "One-Day Free Tier Rotation",
            description:
              "Spend one full working day using ONLY free AI tools. Log which tool you used for each task, how many queries you had left at the end of the day, and any limitations you hit.",
            deliverable:
              "Day log document (.txt) with tools used, tasks completed, and limitations encountered",
          },
        ],
        videos: [
          {
            title: "120 Mind-Blowing AI Tools",
            url: "https://www.youtube.com/watch?v=0MQEf_7qk4s",
          },
          {
            title:
              "ChatGPT | Best AI Tools | Prompt Engineering Full Course",
            url: "https://www.youtube.com/watch?v=4eFYlFXijO0",
          },
          {
            title: "How to Get Ahead of 99% of People (with AI)",
            url: "https://www.youtube.com/watch?v=0tLHVyd7WtM",
          },
        ],
        proTips: [
          "Don't pay for ANY AI tool until you're earning at least $100/month. Free tiers are enough to start.",
          "Claude is better at writing. ChatGPT is more versatile. Gemini is best for research. Use the right tool for each job.",
          "Save your best prompts in a text file. Your prompt library is your most valuable asset.",
          "Free tiers change. Check what's included monthly — tools often add or remove free features.",
        ],
      },
      {
        id: "income-2",
        trackId: "income",
        trackName: "AI Side Income — $0 to First Dollar",
        trackIcon: "💰",
        number: 2,
        title: "Fastest Path to First Payout",
        subtitle: "Ranked by speed to your first dollar",
        xp: 250,
        badge: "first_dollar",
        badgeLabel: "First Dollar",
        estimatedHours: "5-8 hours",
        description:
          "This is the most important module in the income track. We rank income methods by how fast you can realistically get paid, starting from zero. No hype — real timelines and real strategies.",
        sections: [
          {
            title: "The Income Methods (Ranked by Speed)",
            content: `**🥇 #1: AI-Assisted Freelance Writing/Editing (1-2 weeks to first payout)**
- Platforms: Fiverr (free to join), Upwork (free to join)
- What you do: Write blog posts, edit articles, create social media copy using AI to speed up your workflow
- Why it's fastest: Businesses ALWAYS need content. Lower competition than tech-heavy gigs.
- Realistic first gig: $15-50 for a blog post. Takes 1-2 hours with AI assistance.
- With your logic background, you can write clear, structured content that AI helps polish.

**🥈 #2: Resume & Cover Letter Services (1-3 weeks)**
- Platform: Fiverr, direct outreach
- What you do: Rewrite resumes and cover letters using AI + your own editing
- Why it works: People HATE writing about themselves. You charge $25-75 per resume.
- AI does 70% of the heavy lifting. Your value is formatting, customization, and human touch.

**🥉 #3: AI-Powered Virtual Assistance (2-4 weeks)**
- Platforms: Upwork, Belay, local businesses
- What you do: Email management, scheduling, data entry, social media — all accelerated by AI
- Why it works: Small business owners are drowning in admin. You're 3x faster with AI tools.
- Realistic rate: $15-25/hour to start.

**#4: Social Media Content Creation (2-4 weeks)**
- Target: Local businesses (restaurants, salons, gyms, cabinet companies... 👀)
- What you do: Create a month of social media posts (text + images) using AI tools
- Package: "30 posts for $200" is a common entry point
- Why it works: Local businesses know they need social media but have no time.`,
          },
          {
            title: "Setting Up on Freelance Platforms (Free)",
            content: `**Fiverr Setup (Free):**
1. Create account at fiverr.com
2. Complete your profile: Professional photo, clear bio, mention AI skills
3. Create 2-3 "gigs" (service listings):
   - "I will write SEO blog posts using AI-assisted research" — $25-50/post
   - "I will create professional resumes that get interviews" — $30-75/resume
   - "I will create 30 days of social media content" — $100-200/package

**Sample gig description template:**
"I'll write a [LENGTH] [TYPE] for your [INDUSTRY] business. Using advanced AI tools combined with human editing and strategy, I deliver polished, engaging content that drives results. Each piece is:
✅ SEO-optimized (if blog post)
✅ Original and plagiarism-free
✅ Tailored to your brand voice
✅ Delivered within [TIMEFRAME]"

**Upwork Setup (Free):**
1. Create account, complete profile
2. Take free skill tests (Writing, Virtual Assistant, etc.)
3. Start with low bids to build reviews
4. Write personalized proposals (NOT copy-paste templates)

**THE KEY RULE:** Never deliver raw AI output. Always edit, personalize, and add genuine value. Clients can use ChatGPT themselves. They're paying for YOUR curation and quality control.`,
          },
          {
            title: "Prompt Templates for Freelance Work",
            content: `**Blog Post Prompt Template:**
"Write a 1200-word blog post about [TOPIC] for a [INDUSTRY] business. Target audience: [AUDIENCE]. Tone: [PROFESSIONAL/CASUAL/FRIENDLY]. Include:
- An engaging hook in the first paragraph
- 3-5 subheadings with H2 tags
- Actionable advice in each section  
- A clear call-to-action at the end
- Naturally include these keywords: [KEYWORD1], [KEYWORD2]"

**Resume Rewrite Template:**
"Rewrite this resume for a [JOB TITLE] position. The candidate has [X YEARS] experience in [FIELD]. Improve the language to be:
- Action-verb focused (led, created, managed, increased)
- Quantified where possible (%, $, team size)
- ATS-friendly (applicant tracking system keywords)
- Concise and impactful
Current resume: [PASTE]"

**Social Media Content Template:**
"Create 10 social media posts for a [BUSINESS TYPE] in [LOCATION]. Mix of:
- 3 educational/tips posts
- 3 behind-the-scenes/personal posts
- 2 promotional posts
- 2 engagement posts (questions, polls)
Include hashtag suggestions for each. Tone: [FRIENDLY/PROFESSIONAL]"

Save these templates. Modify them for each client. They'll save you hours.`,
          },
          {
            title: "Scam Awareness — Protecting Yourself",
            content: `**Red flags in the "make money with AI" space:**

🚩 **"Buy my $997 course to learn the secret"** — If someone charges hundreds for info that's available free on YouTube, they're selling the dream, not the skill.

🚩 **"Make $10K/month passively with no work"** — Doesn't exist. AI makes work faster, not nonexistent.

🚩 **"Just copy this exact system"** — Saturated. If 50,000 people follow the same "secret" method, it stops working.

🚩 **Guaranteed income promises** — Nobody can guarantee income. Run from anyone who does.

**What actually works:**
- Building real skills (prompt engineering, content creation, AI workflow)
- Providing genuine value to clients
- Consistent effort over months (not overnight riches)
- Starting small and scaling based on results

**Free learning resources that are legit:**
- YouTube: Search "[skill] tutorial" — free, unlimited, current
- Coursera: Many courses available for free (audit mode)
- Reddit: r/freelance, r/sidehustle, r/Fiverr — real people sharing real experiences
- Google's free AI course: "Introduction to Generative AI" on Coursera
- freeCodeCamp on YouTube: Free coding education`,
          },
        ],
        tools: [
          {
            name: "Fiverr",
            cost: "free",
            costNote:
              "Free to join. Fiverr takes 20% of each sale. No upfront cost.",
            url: "https://www.fiverr.com/",
          },
          {
            name: "Upwork",
            cost: "free",
            costNote:
              "Free to join. Limited free 'Connects' monthly for proposals. May need to buy more ($0.15/each).",
            url: "https://www.upwork.com/",
          },
          {
            name: "ChatGPT + Claude (Free tiers)",
            cost: "free",
            costNote: "Your main content creation tools. Both free.",
            url: "https://chat.openai.com/",
          },
          {
            name: "Grammarly",
            cost: "free",
            costNote: "Polish all client deliverables. Free tier is enough.",
            url: "https://www.grammarly.com/",
          },
        ],
        handsOn: [
          {
            title: "Create Profiles on 2 Freelance Platforms",
            description:
              "Set up complete profiles on Fiverr AND Upwork. Professional photo, compelling bio, at least 2 gig listings on Fiverr.",
            deliverable:
              "Screenshots of both completed profiles",
          },
          {
            title: "Submit 5 Proposals",
            description:
              "Find 5 real gigs on Fiverr or Upwork and submit personalized proposals using AI to help draft them. Track which ones get responses.",
            deliverable:
              "Screenshots of 5 submitted proposals + text file with your proposal templates",
          },
          {
            title: "Complete a Sample Project",
            description:
              "Even without a client, complete one full sample deliverable: a 1000-word blog post OR a resume rewrite OR a social media content pack. This becomes your portfolio piece.",
            deliverable:
              "Your completed sample deliverable (document or image files)",
          },
        ],
        videos: [
          {
            title: "How to Find Freelance Data & AI Projects",
            url: "https://www.youtube.com/watch?v=66Y02L2OhEs",
          },
          {
            title: "7 BEST Ways to Make Money with AI as a Beginner",
            url: "https://www.youtube.com/watch?v=8BbUjvnWEoc",
          },
          {
            title: "How to Make Money with AI",
            url: "https://www.youtube.com/watch?v=51_hrwsYZM4",
          },
        ],
        proTips: [
          "Your first 5 gigs should be priced LOW to get reviews. Reviews are currency on freelance platforms.",
          "Never deliver raw AI output. Always edit, fact-check, and add personal touches.",
          "Respond to messages within 1 hour during business hours. Speed wins gigs.",
          "Track your time. If you're earning less than $10/hour on a gig, raise your prices or work faster.",
        ],
      },
      {
        id: "income-3",
        trackId: "income",
        trackName: "AI Side Income — $0 to First Dollar",
        trackIcon: "💰",
        number: 3,
        title: "Digital Products with $0 Investment",
        subtitle: "Create once, sell forever — with free tools only",
        xp: 200,
        estimatedHours: "5-7 hours",
        description:
          "Digital products are the holy grail of online income: create once, sell infinitely. This module shows you how to create and sell digital products using 100% free tools. No inventory, no shipping, no startup costs.",
        sections: [
          {
            title: "What to Sell (Ranked by Effort vs Reward)",
            content: `**1. Prompt/Template Packs — Easiest to start**
- Collections of tested AI prompts for specific use cases
- Example: "50 ChatGPT Prompts for Real Estate Agents" — sell for $5-15
- Sell on: Gumroad (free to list, 10% fee on sales), Etsy ($0.20/listing)
- Time to create: 2-4 hours
- Why it works: People will pay $5 to save hours of prompt engineering

**2. Social Media Content Packs**
- Pre-designed templates for Canva (free tier)
- Example: "60 Instagram Templates for Fitness Coaches" — sell for $10-25
- Create in Canva, export as editable templates
- Time to create: 4-8 hours

**3. AI-Generated Ebooks**
- Short (30-50 page) guides on specific topics
- Use AI to draft, then heavily edit and add your own expertise
- Sell on: Gumroad, Amazon KDP (free)
- Example: "The Beginner's Guide to Dubstep Production" — sell for $5-15
- Time to create: 10-20 hours (don't rush this)

**4. Print-on-Demand Designs**
- Create designs using free AI image generators
- Upload to: Redbubble (FREE), TeeSpring (FREE), Merch by Amazon (free, application required)
- Profit: $2-8 per sale (platform handles printing/shipping)
- Time per design: 15-30 minutes
- Volume game: Need 50-100+ designs to see consistent sales`,
          },
          {
            title: "Creating Your First Digital Product (Step by Step)",
            content: `**Let's create a prompt pack — fastest path to your first digital product sale:**

**Step 1: Choose a niche** (2 minutes)
Pick something you know about + has demand. Ideas:
- Music production prompts for producers
- Resume writing prompts for job seekers
- Social media prompts for small businesses
- Content creation prompts for YouTubers

**Step 2: Create 25-50 prompts** (2-3 hours)
For each prompt, include:
- The prompt text (ready to copy/paste)
- What it does / when to use it
- An example of the output
- Tips for customizing it

Use Claude or ChatGPT to help, but test EVERY prompt yourself and refine.

**Step 3: Format it nicely** (1 hour)
- Use Canva or Google Docs (free)
- Professional cover page
- Table of contents
- Clean formatting
- Export as PDF

**Step 4: List on Gumroad** (30 minutes)
- Create account at gumroad.com (free)
- Upload your PDF
- Set a price ($5-10 for your first product)
- Write a compelling description
- Gumroad takes 10% + payment processing (small)

**Step 5: Promote** (ongoing)
- Share on Twitter/X, Reddit (relevant subreddits), TikTok
- Create a free sample (5 prompts) to give away — drives traffic to the paid version`,
          },
          {
            title: "Print-on-Demand with AI Art",
            content: `**The setup (all free):**
1. Generate designs in Leonardo.ai (free tier — 150 tokens/day)
2. Create an account on Redbubble.com (free)
3. Upload designs to products (t-shirts, stickers, mugs, phone cases)
4. Redbubble handles printing, shipping, customer service
5. You earn a royalty on each sale

**Design tips for POD:**
- Simple, bold designs sell better than complex ones
- Text-based designs ("funny quote + simple graphic") are popular
- Niche down: "EDM festival t-shirts," "gamer stickers," "cat lover mugs"
- Check what's already selling on Redbubble for inspiration

**AI art prompts for POD:**
"Minimalist vector design of [SUBJECT], [STYLE], solid [COLOR] background, t-shirt ready, no text, clean lines, high contrast"

**Realistic expectations:**
- First month: 0-5 sales ($0-$20)
- After 3 months with 50+ designs: 10-30 sales/month ($30-$100)
- After 6 months with 200+ designs: potentially $200-500/month
- It's a LONG game. Don't expect overnight results.

**Cost:** Truly $0. Redbubble is free to join and list on.`,
          },
        ],
        tools: [
          {
            name: "Gumroad",
            cost: "free",
            costNote:
              "Free to list. 10% fee on sales + payment processing. No monthly costs.",
            url: "https://gumroad.com/",
          },
          {
            name: "Redbubble",
            cost: "free",
            costNote:
              "100% free. They print and ship. You earn royalties.",
            url: "https://www.redbubble.com/",
          },
          {
            name: "Amazon KDP",
            cost: "free",
            costNote:
              "Free to publish ebooks. Amazon takes 30-65% depending on pricing.",
            url: "https://kdp.amazon.com/",
          },
          {
            name: "Canva",
            cost: "free",
            costNote: "Free tier for designing product content and templates.",
            url: "https://www.canva.com/",
          },
          {
            name: "Leonardo.ai",
            cost: "free",
            costNote: "150 free tokens/day for POD designs.",
            url: "https://leonardo.ai/",
          },
        ],
        handsOn: [
          {
            title: "Create and List a Digital Product",
            description:
              "Create ONE complete digital product (prompt pack, template pack, or mini-guide) and list it for sale on Gumroad. Complete the full process: creation, formatting, listing, pricing.",
            deliverable:
              "Screenshot of your live Gumroad listing + the product file itself",
          },
          {
            title: "Upload 5 POD Designs",
            description:
              "Create 5 unique designs using Leonardo.ai and upload them to Redbubble across multiple product types.",
            deliverable:
              "Screenshots of your 5 Redbubble product listings",
          },
        ],
        videos: [
          {
            title: "How to Sell A.I. Digital Products in 2026",
            url: "https://www.youtube.com/watch?v=5JUMlFyFfzE",
          },
          {
            title: "I Make $2,989/Day with an AI PDF (Using a Secret Platform)",
            url: "https://www.youtube.com/watch?v=4FU9q1LlFQs",
          },
          {
            title: "How To Sell AI Art For A Profit",
            url: "https://www.youtube.com/watch?v=Csw_GD1Rf74",
          },
        ],
        proTips: [
          "Your first product doesn't need to be perfect. Ship it, get feedback, improve.",
          "Price your first product at $5-7. Low enough to impulse buy, high enough to signal value.",
          "Create a free lead magnet (sample of your product) to build an email list. The list is more valuable than the product.",
          "Study what's selling on Gumroad/Etsy in your niche before creating. Don't guess what people want — look at what they're already buying.",
        ],
      },
      {
        id: "income-4",
        trackId: "income",
        trackName: "AI Side Income — $0 to First Dollar",
        trackIcon: "💰",
        number: 4,
        title: "Content Business on Zero Budget",
        subtitle: "Build an audience with free AI tools",
        xp: 200,
        estimatedHours: "5-8 hours",
        description:
          "Content creation is a long-term play, but it's the most sustainable income source. This module shows you how to start a YouTube/TikTok presence using free AI tools — and sets realistic expectations about when money actually comes.",
        sections: [
          {
            title: "The Realistic Monetization Timeline",
            content: `Let's be brutally honest about timelines:

**YouTube Monetization Requirements:**
- 1,000 subscribers + 4,000 watch hours in the past 12 months
- OR 1,000 subscribers + 10 million Shorts views in 90 days
- Typical time to reach this: 6-18 months of consistent posting
- First ad revenue after monetization: $50-200/month for small channels

**TikTok Monetization:**
- TikTok Creativity Program: 10,000 followers + 100,000 views in last 30 days
- Revenue: $0.50-$1 per 1,000 views (varies wildly)
- Can be faster to grow than YouTube due to algorithm

**Realistic timeline:**
- Month 1-3: Building content library (0-100 subscribers). $0 income.
- Month 3-6: Finding your voice (100-500 subscribers). $0-50/month.
- Month 6-12: Growth phase (500-1000+ subscribers). $50-500/month.
- Year 2+: Established presence. $500-2000+/month is possible.

**The money isn't in ads alone.** The real income comes from:
- Affiliate links (recommend products, earn commission)
- Selling your own digital products (Module 3)
- Sponsorships (once you have an audience)
- Freelance clients who find you through content`,
          },
          {
            title: "Faceless YouTube/TikTok with Free Tools",
            content: `Don't want to show your face? No problem. "Faceless" content works great.

**Faceless content ideas for your niche:**
1. **"AI Tool Reviews"** — Screen recordings testing new AI tools
2. **"How I Made This Beat"** — Screen recordings of Ableton sessions
3. **"AI vs Human"** — Compare AI-generated vs human content
4. **"Free Tool Tutorials"** — Teach people to use free software
5. **"Music Production Tips"** — Quick tips with screen recordings

**The free tool workflow:**
1. **Script:** Use Claude/ChatGPT to help write scripts (you edit heavily)
2. **Recording:** OBS Studio (FREE) for screen recording, your phone for camera
3. **Editing:** CapCut (FREE) or DaVinci Resolve (FREE)
4. **Thumbnails:** Canva (FREE) or Leonardo.ai (FREE)
5. **Music/SFX:** Your own productions! Or use YouTube Audio Library (FREE)

**Content schedule for 5-10 hours/week:**
- 2 YouTube videos/week (3-4 hours total)
- 3-5 TikToks/Reels (1-2 hours, repurpose from YouTube content)
- 1-2 hours community engagement (comments, collabs)`,
          },
          {
            title: "Niche Selection Strategy",
            content: `**The sweet spot:** Something you're interested in + something people search for + not too competitive.

**Niche evaluation checklist:**
- Search on YouTube: Does this topic get views? (Check view counts)
- Are the top channels huge (1M+ subs) or medium (10K-100K subs)?
- Can you add a unique angle?
- Is it a topic you can consistently create content about?

**Niches that work well in 2026:**
- AI tool tutorials (growing fast, not saturated at the tutorial level)
- Music production for beginners (you're learning = you can teach)
- "How to start [X] with no money" (huge audience of beginners)
- Tech reviews for budget setups (you have a mid-tier PC — perfect!)

**Your unique angle as Mason:**
- Cabinet installer by day, EDM producer + AI entrepreneur by night
- Relatable "regular guy" perspective (not another tech bro with a MacBook)
- Teaching from the trenches, not from the top
- Budget-focused (everything free or cheap)

This is more compelling than another channel by someone who already "made it."`,
          },
        ],
        tools: [
          {
            name: "OBS Studio",
            cost: "free",
            costNote:
              "100% free and open source. Industry-standard screen recording/streaming.",
            url: "https://obsproject.com/",
          },
          {
            name: "CapCut",
            cost: "free",
            costNote: "Free for most features. Pro templates cost extra.",
            url: "https://www.capcut.com/",
          },
          {
            name: "DaVinci Resolve",
            cost: "free",
            costNote: "Free version is professional-grade. Runs on your RTX 3050.",
            url: "https://www.blackmagicdesign.com/products/davinciresolve",
          },
          {
            name: "Canva",
            cost: "free",
            costNote: "Free for thumbnails and graphics.",
            url: "https://www.canva.com/",
          },
        ],
        handsOn: [
          {
            title: "Create and Post 3 Pieces of Content",
            description:
              "Create 3 content pieces using free tools: (1) A YouTube Short / TikTok showing an AI tool tip (2) A longer YouTube tutorial (3-5 min) on any topic from this course (3) An Instagram/Twitter post promoting your content. Actually post all three.",
            deliverable:
              "Links to your 3 posted content pieces + the raw video files",
          },
          {
            title: "Design a Content Calendar",
            description:
              "Plan your first month of content: 8 videos (2/week), titles, topics, and which AI tools you'll use for each. Include a niche statement and content pillar strategy.",
            deliverable:
              "Content calendar document (.txt or .pdf) with full month planned",
          },
        ],
        videos: [
          {
            title:
              "Create a VIRAL Faceless AI YouTube Channel for FREE & Automate It",
            url: "https://www.youtube.com/watch?v=1KKN03qwz3M",
          },
          {
            title: "The Best Faceless YouTube Niche EXPOSED",
            url: "https://www.youtube.com/watch?v=4bV0l1dPKb0",
          },
          {
            title: "AI Faceless Channels Getting Demonetized At Scale",
            url: "https://www.youtube.com/watch?v=3cc8pYY1qjk",
          },
        ],
        proTips: [
          "Consistency beats quality at the start. A 'good enough' video every week > a 'perfect' video every month.",
          "Your first 20 videos will probably suck. That's fine. Every creator starts there.",
          "Study your analytics. Double down on what gets views, drop what doesn't.",
          "Reply to EVERY comment in your first year. Community building is free and invaluable.",
        ],
      },
      {
        id: "income-5",
        trackId: "income",
        trackName: "AI Side Income — $0 to First Dollar",
        trackIcon: "💰",
        number: 5,
        title: "Scaling to Tech Business",
        subtitle: "From freelancer to business owner",
        xp: 300,
        estimatedHours: "6-10 hours",
        description:
          "This module looks ahead — once you're earning some money, how do you scale? Micro-SaaS ideas, AI automation services, and building toward sustainable income. Only think about this AFTER completing Modules 1-4.",
        sections: [
          {
            title: "The Scaling Path",
            content: `**Phase 1: $0-$500/month (Modules 1-4)**
- Freelancing on platforms
- Selling digital products
- Building content presence
- Time-for-money, learning the ropes

**Phase 2: $500-$2,000/month (This module)**
- Raise freelance rates (you have reviews now)
- Productize your services (packages, not hourly)
- Add recurring clients (retainers)
- Launch higher-value digital products
- Content revenue starts trickling in

**Phase 3: $2,000-$5,000/month (6-12 months in)**
- Build a micro-SaaS or automation service
- Hire help for repetitive tasks
- Focus on highest-value activities
- Multiple income streams working simultaneously

**When to invest in paid tools:**
- After $100/month: ChatGPT Plus ($20/mo) — improves your main tool
- After $300/month: One more AI tool relevant to your niche
- After $500/month: Domain name + professional email ($10-15/year)
- After $1,000/month: Consider SaaS tools that directly generate revenue`,
          },
          {
            title: "Micro-SaaS Ideas (Build with Free Tools)",
            content: `**What is micro-SaaS?**
Small, focused software products that solve a specific problem for a specific audience. Monthly subscription = recurring revenue.

**Free tools to build micro-SaaS:**
- **Cursor** (free tier): AI-powered code editor. Helps you code even with limited experience.
- **Replit** (free tier): Browser-based coding environment. Build and deploy without any setup.
- **Bolt.new** (free tier): AI builds full apps from descriptions. Limited but powerful for prototypes.
- **Vercel/Netlify** (free tier): Host your app for free.
- **Supabase** (free tier): Free database and authentication.

**Micro-SaaS ideas you could actually build:**
1. **AI Prompt Library Tool** — Searchable database of tested prompts for specific industries. Charge $5-10/month.
2. **Content Calendar Generator** — AI generates a month of social media ideas based on business type. $10/month.
3. **Resume Review Bot** — Upload a resume, get AI-powered feedback. $5 per review.
4. **Local Business Social Post Generator** — Enter business details, get 30 days of posts. $15/month.

**Start with the one that interests you most and aligns with skills you've built in previous modules.**`,
          },
          {
            title: "AI Automation Services for Local Businesses",
            content: `**This is a massive opportunity.** Most local businesses (restaurants, salons, contractors, realtors) don't know AI exists or how to use it.

**Services you can offer:**
1. **Automated email responses** — Set up AI-powered email templates. Charge: $200-500 one-time setup + $50/month management.
2. **Social media automation** — Schedule + AI-generate monthly content. Charge: $200-400/month retainer.
3. **Customer FAQ chatbot** — Simple AI chatbot for their website. Charge: $500-1000 setup + $100/month.
4. **Review response automation** — AI drafts responses to Google/Yelp reviews. Charge: $100-200/month.

**How to find clients:**
- Start with businesses you already know (you install cabinets — talk to contractors, builders, realtors)
- Walk into local businesses with a one-page pitch
- Post on local Facebook groups and Nextdoor
- Cold email/call 10 businesses per week

**Your pitch:**
"I help local businesses save 5-10 hours per week using AI automation. I set up systems that handle [specific task] automatically. My setup fee is [X] and monthly management is [Y]. Would you like to see a demo?"`,
          },
          {
            title: "Building an MVP",
            content: `**MVP = Minimum Viable Product.** The simplest version that someone would pay for.

**The MVP process:**
1. Pick ONE idea from above
2. Spend 1 weekend building the simplest version using free tools
3. Get 3-5 people to test it (friends, Reddit, local businesses)
4. Listen to feedback
5. Iterate and improve
6. Launch properly with a landing page

**Free resources for building:**
- Cursor AI: Describe what you want, AI helps write the code
- YouTube tutorials: Search "[your idea] tutorial build"
- Reddit: r/SideProject, r/startups — share your MVP for feedback
- IndieHackers.com: Community of solo builders (free to join)

**Reality check:** Most first MVPs fail. That's expected. The point is learning. Your second attempt will be better, your third even better. The skills you build (coding, marketing, customer research) compound over time.`,
          },
        ],
        tools: [
          {
            name: "Cursor",
            cost: "freemium",
            costNote:
              "Free tier: 2,000 completions + 50 slow premium requests/month. Pro: $20/month.",
            url: "https://cursor.sh/",
          },
          {
            name: "Replit",
            cost: "freemium",
            costNote:
              "Free tier for basic projects. Hacker plan: $7/month for more resources.",
            url: "https://replit.com/",
          },
          {
            name: "Bolt.new",
            cost: "freemium",
            costNote:
              "Free tier available with limitations. Great for prototyping.",
            url: "https://bolt.new/",
          },
          {
            name: "Supabase",
            cost: "free",
            costNote:
              "Generous free tier: 500MB database, 50K monthly active users, 1GB file storage.",
            url: "https://supabase.com/",
          },
          {
            name: "Vercel",
            cost: "free",
            costNote:
              "Free hosting for personal projects. Hobby plan is free.",
            url: "https://vercel.com/",
          },
        ],
        handsOn: [
          {
            title: "Identify and Validate a Micro-SaaS Idea",
            description:
              "Research 3 micro-SaaS ideas. For each, document: the problem it solves, who would pay for it, how much they'd pay, how you'd build it (which free tools), and your competitive advantage. Pick the strongest one.",
            deliverable:
              "Idea validation document with all 3 ideas analyzed",
          },
          {
            title: "Build an MVP",
            description:
              "Using Cursor, Replit, or Bolt.new (all free tiers), build a minimum viable product for your chosen idea. It doesn't need to be beautiful — it needs to work.",
            deliverable:
              "Link to your deployed MVP (Vercel, Replit, etc.) + brief documentation",
          },
        ],
        videos: [
          {
            title: "How I Built a SaaS Startup (From Idea to Revenue)",
            url: "https://www.youtube.com/watch?v=180KJQryGwc",
          },
          {
            title:
              "I Built 3 SaaS Apps to $200K MRR: Here's My Exact Playbook",
            url: "https://www.youtube.com/watch?v=67zh8_yiPh4",
          },
          {
            title: "ChatGPT Album Cover Design",
            url: "https://www.youtube.com/watch?v=4B0bLF_TniM",
          },
        ],
        proTips: [
          "Don't try to scale before you have income. Master Modules 1-4 first.",
          "The best business ideas come from problems you've personally experienced.",
          "Talk to potential customers BEFORE building. Most failed startups built something nobody wanted.",
          "Recurring revenue (subscriptions) is 10x more valuable than one-time sales.",
        ],
      },
    ],
  },
  {
    id: "poweruser",
    name: "AI Power User",
    icon: "⚡",
    description:
      "Master the skills that will be most valuable in 6-12 months. Prompt engineering, custom AI tools, and automation.",
    color: "from-blue-500 to-indigo-600",
    modules: [
      {
        id: "power-1",
        trackId: "poweruser",
        trackName: "AI Power User",
        trackIcon: "⚡",
        number: 1,
        title: "Prompt Engineering with Logic",
        subtitle: "Your propositional logic background is a superpower here",
        xp: 200,
        estimatedHours: "4-6 hours",
        description:
          "You already understand propositional logic — IF/THEN, AND/OR, structured reasoning. That puts you ahead of 95% of AI users. This module turns that foundation into practical prompt engineering mastery.",
        sections: [
          {
            title: "The Anatomy of a Great Prompt",
            content: `**Most people write prompts like this:**
"Write me a blog post about AI"

**You should write prompts like this:**
"You are an experienced tech journalist writing for a beginner audience. Write a 1000-word blog post about how small businesses can use free AI tools in 2026. Structure: Hook paragraph → 3 specific tools with use cases → common mistakes to avoid → action steps. Tone: conversational but authoritative. Include specific examples, not vague claims."

**The difference:** The first prompt gives AI zero constraints. The second gives it a role, audience, structure, tone, length, and quality criteria.

**The CRAFT framework:**
- **C**ontext: Background info the AI needs
- **R**ole: Who should the AI be?
- **A**ction: What specifically should it do?
- **F**ormat: How should the output look?
- **T**one: What style/voice?`,
          },
          {
            title: "Logic-Based Prompting Techniques",
            content: `**Your logic background lets you use these advanced techniques:**

**Chain-of-thought (IF → THEN reasoning):**
"Think through this step by step:
1. First, analyze [X]
2. Based on that analysis, determine [Y]
3. Given Y, recommend [Z]
Show your reasoning at each step."

**Conditional prompting (propositional logic):**
"If the text contains technical jargon, simplify it. If it contains numbers, fact-check them. If it makes claims without evidence, flag them."

**Constraint satisfaction:**
"Generate a social media post that satisfies ALL of these constraints:
- Under 280 characters
- Contains exactly one call-to-action
- Uses no more than 3 hashtags
- Mentions the product name at least once
- Has a casual tone"

**Negation (what NOT to do):**
"Write a product description. Do NOT:
- Use clichés like 'game-changer' or 'revolutionary'
- Make unverifiable claims
- Use passive voice
- Exceed 150 words"

These techniques leverage your logical thinking to create precise, reproducible prompts.`,
          },
          {
            title: "System Prompts and Persona Setting",
            content: `**System prompts** set the behavior of the AI for an entire conversation. Think of it as programming the AI's personality and rules.

**Basic system prompt template:**
"You are [ROLE] with expertise in [DOMAIN]. Your communication style is [STYLE]. When responding:
- Always [BEHAVIOR 1]
- Never [BEHAVIOR 2]
- Format responses as [FORMAT]
- If asked about topics outside [DOMAIN], redirect politely."

**Example for music production assistant:**
"You are a professional EDM producer and mixing engineer with 10 years of experience. You specialize in dubstep, future bass, and melodic bass. When giving advice:
- Always explain WHY, not just what to do
- Reference specific frequency ranges, dB values, and settings
- Recommend free tools first, paid tools only if no free alternative exists
- If a question is about genres you don't know well, be honest about it
- Use clear, beginner-friendly language"

**Where to use system prompts:**
- ChatGPT: Custom GPTs (free!) or "Custom Instructions"
- Claude: Projects feature (free)
- Any AI that supports system-level instructions`,
          },
          {
            title: "Advanced Techniques",
            content: `**Few-shot prompting (teach by example):**
"Convert these product features into benefits:
Feature: 'Battery lasts 10 hours' → Benefit: 'Work all day without hunting for outlets'
Feature: 'Weighs only 2 pounds' → Benefit: 'Carry it anywhere without feeling the weight'
Feature: 'AI noise cancellation' → Benefit: [Your turn]"

**Iterative refinement:**
Don't expect perfection on the first prompt. Use:
1. "That's good, but make it more [specific]"
2. "Keep the structure but change the tone to [X]"
3. "This section is weak. Rewrite it focusing on [Y]"

**Meta-prompting (prompts about prompts):**
"I want to create a prompt that will generate [DESIRED OUTPUT]. What information should I include in that prompt? What constraints would improve the output quality?"

**Structured output prompting:**
"Respond in this exact JSON format:
{
  'title': string,
  'summary': string (under 100 words),
  'key_points': array of 3-5 strings,
  'action_items': array of 2-3 strings
}"`,
          },
        ],
        tools: [
          {
            name: "ChatGPT",
            cost: "free",
            costNote:
              "Free tier. Custom GPTs available on free plan.",
            url: "https://chat.openai.com/",
          },
          {
            name: "Claude",
            cost: "free",
            costNote: "Free tier. Projects feature for organized work.",
            url: "https://claude.ai/",
          },
          {
            name: "Prompt Engineering Guide",
            cost: "free",
            costNote:
              "Free open-source guide. Comprehensive and current.",
            url: "https://www.promptingguide.ai/",
          },
        ],
        handsOn: [
          {
            title: "10 Prompt Challenges",
            description:
              "Complete 10 increasingly complex prompt engineering challenges: (1) Simple: Get AI to write a haiku about bass music. (2) Structured: Generate a meal plan in table format. (3) Role: Create a conversation between two producers. (4) Logic: Use IF/THEN to create a decision tree. (5) Constraint: Write under 50 words with 3+ specific details. (6) Few-shot: Teach AI to write in your style. (7) Chain-of-thought: Analyze a complex business decision step-by-step. (8) System prompt: Create a complete AI persona. (9) Meta: Create a prompt that generates other prompts. (10) Multi-step: Chain 3+ prompts to produce a final complex output.",
            deliverable:
              "Document with all 10 challenges: your prompts, the outputs, and what you learned",
          },
        ],
        videos: [
          {
            title: "Lesson 1 of Prompt Engineering: The Basics",
            url: "https://www.youtube.com/watch?v=2dSL4HvpzYU",
          },
          {
            title: "How to Get Ahead of 99% of People (with AI)",
            url: "https://www.youtube.com/watch?v=0tLHVyd7WtM",
          },
          {
            title:
              "ChatGPT | Prompt Engineering Full Course | Beginner to Advanced",
            url: "https://www.youtube.com/watch?v=4eFYlFXijO0",
          },
        ],
        proTips: [
          "Save every prompt that works well. Build a personal prompt library.",
          "The more specific your prompt, the better the output. Vague in = vague out.",
          "Use Claude for tasks that need careful reasoning. Use ChatGPT for creative/general tasks.",
          "Always iterate. Your first prompt is a draft, not a final version.",
        ],
      },
      {
        id: "power-2",
        trackId: "poweruser",
        trackName: "AI Power User",
        trackIcon: "⚡",
        number: 2,
        title: "Custom GPTs & AI Assistants",
        subtitle: "Build AI tools tailored to your exact needs",
        xp: 250,
        badge: "power_user",
        badgeLabel: "Power User",
        estimatedHours: "4-6 hours",
        description:
          "Why use a general AI when you can build one that knows your specific needs? Custom GPTs (free on ChatGPT) and Claude Projects let you create specialized AI assistants that are WAY more useful than the default experience.",
        sections: [
          {
            title: "Building Custom GPTs (Free on ChatGPT)",
            content: `**What's a Custom GPT?**
A pre-configured version of ChatGPT with custom instructions, knowledge, and personality. Free to create and use on the free tier of ChatGPT.

**How to create one:**
1. Go to chat.openai.com → Explore GPTs → Create
2. Use the "Configure" tab to set:
   - Name & description
   - Instructions (system prompt)
   - Conversation starters
   - Knowledge files (upload reference documents)

**Your system prompt IS the Custom GPT.** Everything from Module 1 about prompt engineering applies here, but it persists across every conversation.

**Example Custom GPT: "Mason's Mix Engineer"**
Instructions:
"You are Mason's personal mixing and mastering consultant. You know he uses Ableton on Windows with an AMD Ryzen 5 3200 and RTX 3050. He primarily produces dubstep, future bass, and melodic bass. When giving advice:
- Recommend free plugins first (TDR Nova, OTT, Vital)
- Reference specific Ableton features and shortcuts
- Explain audio engineering concepts in beginner-friendly language
- Always include specific settings (frequency ranges, dB values, ratios)
- Format responses with clear steps
- If asked about genres outside EDM, be helpful but note your specialization"`,
          },
          {
            title: "Claude Projects — Organized AI Workspaces",
            content: `**What's a Claude Project?**
Claude lets you create "Projects" — persistent workspaces with custom instructions and uploaded knowledge files. Available on free tier.

**How to use:**
1. Go to claude.ai → Projects → New Project
2. Add a description and instructions
3. Upload relevant files (PDFs, docs, code)
4. Every conversation in the project inherits those instructions and has access to those files

**Why this is powerful:**
- Upload your Ableton manual → Claude becomes an Ableton expert
- Upload your track analysis notes → Claude helps you analyze more tracks
- Upload your freelance templates → Claude customizes them for each client

**Project ideas:**
1. **"Music Production Helper"** — Upload mixing guides, frequency charts, genre reference docs
2. **"Gig Proposal Writer"** — Upload your best proposals, portfolio, and pricing info
3. **"Content Planner"** — Upload your content strategy, niche research, and posting schedule`,
          },
          {
            title: "The 3 Custom GPTs to Build",
            content: `**GPT 1: Music Production Helper**
- Purpose: Answer production questions, suggest mixing/mastering settings, help with sound design
- Knowledge: Upload frequency charts, your track analysis docs, mixing cheat sheets
- System prompt: Include your DAW, gear, genre preferences, skill level

**GPT 2: Gig Finder & Proposal Writer**
- Purpose: Help find freelance gigs, write proposals, price services
- Knowledge: Upload your portfolio, sample proposals, pricing sheet
- System prompt: Include your services, rates, availability, target clients

**GPT 3: Content Planner**
- Purpose: Generate content ideas, write scripts, plan posting schedule
- Knowledge: Upload your content calendar, niche research, analytics data
- System prompt: Include your niche, target audience, posting schedule, brand voice

**Pro tip:** Update these GPTs monthly as your skills and needs evolve. They should grow with you.`,
          },
        ],
        tools: [
          {
            name: "ChatGPT Custom GPTs",
            cost: "free",
            costNote:
              "Free to create and use. Available on ChatGPT free tier.",
            url: "https://chat.openai.com/",
          },
          {
            name: "Claude Projects",
            cost: "free",
            costNote:
              "Available on Claude free tier. Persistent workspaces with custom instructions.",
            url: "https://claude.ai/",
          },
        ],
        handsOn: [
          {
            title: "Build 3 Custom GPTs",
            description:
              "Create all 3 Custom GPTs described above: Music Production Helper, Gig Finder & Proposal Writer, Content Planner. Test each with 5 real questions/tasks.",
            deliverable:
              "Screenshots of all 3 GPTs + test conversations showing they work well",
          },
          {
            title: "Set Up a Claude Project",
            description:
              "Create a Claude Project for one of your main workflows. Upload at least 3 relevant knowledge files. Have a conversation that demonstrates the project's value.",
            deliverable:
              "Screenshot of Claude Project setup + example conversation",
          },
        ],
        videos: [
          {
            title: "How to Make a Custom GPT in the FREE Version of ChatGPT",
            url: "https://www.youtube.com/watch?v=0EvQnVCMWLQ",
          },
          {
            title: "How To Create A Custom GPT | ChatGPT Tutorial",
            url: "https://www.youtube.com/watch?v=7y4EXbCHHDM",
          },
          {
            title: "How to Supercharge Your Work with ChatGPT and Claude PROJECTS",
            url: "https://www.youtube.com/watch?v=3z_PQ-CaNEA",
          },
        ],
        proTips: [
          "A Custom GPT is only as good as its system prompt. Invest time in getting the instructions right.",
          "Upload real examples of your work as knowledge files. The more context the AI has, the better it performs.",
          "Share useful Custom GPTs with others — it builds your reputation in AI communities.",
          "Update your GPTs monthly. As tools and techniques evolve, your GPTs should too.",
        ],
      },
      {
        id: "power-3",
        trackId: "poweruser",
        trackName: "AI Power User",
        trackIcon: "⚡",
        number: 3,
        title: "The AI Tool Landscape",
        subtitle: "Know when to use what — and what to ignore",
        xp: 200,
        estimatedHours: "3-5 hours",
        description:
          "There are hundreds of AI tools. Most are hype. This module gives you a decision framework for evaluating AI tools, comparing the major players, and avoiding shiny object syndrome.",
        sections: [
          {
            title: "The Big Players Compared (2026)",
            content: `**ChatGPT (OpenAI)**
- Best for: General versatility, coding, creative writing, image generation
- Free tier: GPT-4o (limited), GPT-4o-mini (unlimited)
- Paid ($20/mo): More GPT-4o usage, DALL-E, advanced features
- Verdict: The Swiss Army knife. Most popular, widest capabilities.

**Claude (Anthropic)**
- Best for: Long-form writing, nuanced analysis, careful reasoning, coding
- Free tier: Claude 3.5 Sonnet with daily limits
- Paid ($20/mo): More usage, longer conversations
- Verdict: Better writing quality than ChatGPT for many tasks. Best for serious work.

**Gemini (Google)**
- Best for: Google ecosystem integration, research with citations, multimodal
- Free tier: Gemini Pro
- Paid ($20/mo): Gemini Ultra, deeper integration
- Verdict: Best if you're heavy on Google services. Research capabilities are strong.

**Grok (xAI)**
- Best for: Real-time X/Twitter data, less censored responses, humor
- Free with X account
- Verdict: Niche but useful for social media research and trend analysis.

**Open Source (Llama, Mistral, etc.)**
- Best for: Privacy, customization, running locally
- Cost: Free but requires technical setup and decent hardware
- Your PC can run some smaller models (7B-13B parameter)
- Verdict: For later. Focus on hosted options first.`,
          },
          {
            title: "The Decision Framework",
            content: `**When choosing an AI tool for a task, ask:**

1. **What's the primary task type?**
   - Writing → Claude
   - Coding → ChatGPT or Claude
   - Research → Gemini or Perplexity
   - Images → ChatGPT (DALL-E) or Leonardo.ai
   - General → ChatGPT

2. **How much context does it need?**
   - Short tasks → Any tool
   - Long documents → Claude (larger context window)
   - Multi-file projects → Claude Projects or ChatGPT Custom GPTs

3. **Does it need web access?**
   - Yes → Gemini, Perplexity, or ChatGPT (browse mode)
   - No → Claude (often better when web isn't needed)

4. **What's my budget?**
   - $0 → Rotate free tiers (Module income-1 strategy)
   - $20/mo → ChatGPT Plus (most versatile single upgrade)
   - $40/mo → ChatGPT Plus + Claude Pro (power combo)

5. **Am I choosing this because it's actually better, or because it's new and shiny?**
   - Be honest. Stick with what works. New tools are only worth switching to if they demonstrably improve your output.`,
          },
          {
            title: "Avoiding Shiny Object Syndrome",
            content: `**The AI tool landscape changes DAILY.** New tools launch constantly. Most die within months. Here's how to evaluate without getting distracted:

**The 48-hour rule:** When you see a new AI tool, wait 48 hours before trying it. If you still care after 48 hours, try the free tier. If not, you just saved yourself time.

**The 3-question test:**
1. Does this do something my current tools CAN'T do?
2. Does this do something my current tools do, but significantly BETTER?
3. Is the free tier good enough to evaluate properly?

If the answer to all three is "no," skip it.

**Your core stack (what to stick with):**
- ChatGPT (general)
- Claude (writing/reasoning)
- Perplexity (research)
- Canva (design)
- Leonardo.ai (AI images)

Everything else is optional until you have a specific need.`,
          },
        ],
        tools: [
          {
            name: "ChatGPT",
            cost: "free",
            costNote: "Free tier available.",
            url: "https://chat.openai.com/",
          },
          {
            name: "Claude",
            cost: "free",
            costNote: "Free tier available.",
            url: "https://claude.ai/",
          },
          {
            name: "Gemini",
            cost: "free",
            costNote: "Free tier available.",
            url: "https://gemini.google.com/",
          },
          {
            name: "Perplexity",
            cost: "free",
            costNote: "Free tier with daily Pro search limits.",
            url: "https://www.perplexity.ai/",
          },
        ],
        handsOn: [
          {
            title: "The Same Task Across 3 AIs",
            description:
              "Pick one complex task (e.g., 'Create a business plan for a music production tutorial YouTube channel'). Submit the EXACT same prompt to ChatGPT, Claude, and Gemini. Compare outputs on: quality, accuracy, structure, creativity, and usefulness. Document which one 'won' and why.",
            deliverable:
              "Comparison document with all 3 outputs + your analysis and ranking",
          },
          {
            title: "Build Your Personal Decision Framework",
            description:
              "Based on your experience, create a one-page cheat sheet: 'Which AI do I use for what?' Customize the decision framework for YOUR specific use cases (music production, freelancing, content creation).",
            deliverable:
              "Your personalized AI decision framework document",
          },
        ],
        videos: [
          {
            title: "ChatGPT vs Gemini: Which One is Better in 2026?",
            url: "https://www.youtube.com/watch?v=0NPK4-l2uWk",
          },
          {
            title: "The Best Top Ranked AI Tools of 2024",
            url: "https://www.youtube.com/watch?v=1b2ICI8WEgM",
          },
          {
            title: "How to Use Claude Projects Like a Pro",
            url: "https://www.youtube.com/watch?v=9PZr52_VpXM",
          },
        ],
        proTips: [
          "Master 2-3 tools deeply rather than trying 20 tools superficially.",
          "The best AI tool is the one you actually use consistently.",
          "Free tiers change constantly. Check monthly for updates to your tools' pricing and features.",
          "Don't switch tools mid-project. Finish your work, THEN evaluate alternatives.",
        ],
      },
      {
        id: "power-4",
        trackId: "poweruser",
        trackName: "AI Power User",
        trackIcon: "⚡",
        number: 4,
        title: "Automation & Workflows",
        subtitle: "Make the robots work while you sleep",
        xp: 250,
        estimatedHours: "5-7 hours",
        description:
          "Automation is where AI goes from 'helpful tool' to 'force multiplier.' This module teaches you to connect AI tools together into workflows that save hours every week — using free platforms.",
        sections: [
          {
            title: "What Automation Actually Means",
            content: `**Automation = IF this happens, THEN do that.**

Sound familiar? It's propositional logic applied to real-world tasks.

**Examples of automations you can build:**
- IF a new email arrives with "invoice" in the subject → THEN save the attachment to Google Drive and send a Slack/Discord notification
- IF it's Monday morning → THEN generate a weekly content plan using AI and email it to yourself
- IF someone fills out your contact form → THEN send a personalized response using AI
- IF a new YouTube video is uploaded in your niche → THEN summarize it and add to your research document

**The platforms (all have free tiers):**

**Zapier (Free Tier):**
- 100 tasks/month, 5 single-step "Zaps"
- Easiest to learn, most integrations
- Limitation: Free tier is very restrictive (single-step only)
- URL: https://zapier.com/

**Make (formerly Integromat) (Free Tier):**
- 1,000 operations/month, unlimited scenarios
- More powerful than Zapier free tier
- Visual workflow builder
- URL: https://www.make.com/

**n8n (Self-Hosted = FREE):**
- Completely free if you run it yourself
- Most powerful option — no limits
- Requires some technical setup (Docker on your PC or a free cloud instance)
- URL: https://n8n.io/`,
          },
          {
            title: "Your First Automation (Step by Step)",
            content: `**Let's build a simple one on Make (free tier):**

**Automation: Weekly AI Content Ideas**
Trigger: Every Monday at 9 AM
Action 1: Call ChatGPT API (via Make's AI module) with prompt "Generate 5 content ideas for an EDM production YouTube channel, focusing on AI tools and tutorials"
Action 2: Send the result to your email

**Setup:**
1. Create a Make account (free)
2. Create a new Scenario
3. Add a Schedule trigger (set to weekly)
4. Add an OpenAI module (use ChatGPT free tier via Make's built-in integration)
5. Add a Gmail/email module
6. Connect them: Schedule → AI → Email
7. Test and activate

**That's it.** Every Monday, you get fresh content ideas in your inbox. Zero effort after setup.

**Note about AI API costs:** Make's built-in AI integration uses their own credits on the free tier (limited but enough for simple automations). For heavy usage, you'd need your own API key (which costs money per use).`,
          },
          {
            title: "n8n — The Power User's Choice",
            content: `**Why n8n is worth learning:**
- Completely free (self-hosted)
- No operation limits
- Can run complex multi-step workflows
- Integrates with everything
- Visual drag-and-drop builder

**How to run n8n for free:**
Option 1: Docker on your PC (easy if you have Docker Desktop)
\`\`\`
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n
\`\`\`
Then open http://localhost:5678

Option 2: Railway.app free tier (cloud hosting)
- Sign up at railway.app
- Deploy n8n template with one click
- Free tier: 500 hours/month

**n8n workflow ideas:**
1. Monitor Reddit for mentions of your content/niche → alert you
2. Auto-generate social media posts from blog content
3. Scrape freelance platforms for new gigs matching your skills
4. Auto-respond to emails with AI-drafted responses (you review before sending)

**Learning curve:** Higher than Zapier/Make, but the payoff is unlimited free automation. Worth the investment.`,
          },
        ],
        tools: [
          {
            name: "Zapier",
            cost: "freemium",
            costNote:
              "Free: 100 tasks/month, 5 single-step Zaps. Starter: $20/month.",
            url: "https://zapier.com/",
          },
          {
            name: "Make",
            cost: "freemium",
            costNote:
              "Free: 1,000 operations/month. Core: $9/month. Better free tier than Zapier.",
            url: "https://www.make.com/",
          },
          {
            name: "n8n",
            cost: "free",
            costNote:
              "Self-hosted = 100% free, no limits. Cloud version has a free tier too.",
            url: "https://n8n.io/",
          },
        ],
        handsOn: [
          {
            title: "Build One Automation That Saves 2+ Hours/Week",
            description:
              "Using Make (free tier), Zapier (free tier), or n8n (self-hosted), build one automation that saves you at least 2 hours per week. Document: what it does, how long it took to set up, and how much time it saves.",
            deliverable:
              "Screenshot of your working automation + documentation of time saved",
          },
          {
            title: "Map Your Workflow for Automation",
            description:
              "Write down your entire weekly workflow: content creation, freelancing, music production, learning. Identify 5 repetitive tasks that could be automated. For each, describe the trigger, action, and which platform you'd use.",
            deliverable:
              "Workflow map + automation opportunities document",
          },
        ],
        videos: [
          {
            title: "Zapier Tutorial: Beginner Business Automations",
            url: "https://www.youtube.com/watch?v=1b6GRdqZD34",
          },
          {
            title: "How To Make Your First $10K+ Online With Zapier",
            url: "https://www.youtube.com/watch?v=5JLSJRJVEPM",
          },
          {
            title: "Stop Learning n8n in 2026... Learn THIS Instead",
            url: "https://www.youtube.com/watch?v=1d77LRUS-wc",
          },
        ],
        proTips: [
          "Start with ONE automation. Get it working perfectly before building more.",
          "The best automations eliminate tasks you dread. Start there for maximum motivation.",
          "Always include error handling. What happens if the AI is down? If the email fails?",
          "Track time saved. After 3 months, you'll be amazed how much automation gives back.",
        ],
      },
      {
        id: "power-5",
        trackId: "poweruser",
        trackName: "AI Power User",
        trackIcon: "⚡",
        number: 5,
        title: "Staying Cutting Edge",
        subtitle: "A system for lifelong learning in 5-10 hours/week",
        xp: 200,
        badge: "full_stack_producer",
        badgeLabel: "Full Stack Producer",
        estimatedHours: "3-4 hours",
        description:
          "AI changes weekly. New tools, new capabilities, new opportunities. This module sets up a sustainable learning system that keeps you current without burning out — all within your 5-10 hours/week budget.",
        sections: [
          {
            title: "Your Weekly Learning System (5-10 hours)",
            content: `**The 10-Hour Week Template:**

**Monday (2 hours): Skill Building**
- Work through one module section from this platform
- Practice hands-on deliverables
- Watch one tutorial video

**Wednesday (2 hours): Creation**
- Produce music (apply what you've learned)
- Create content for your channel/socials
- Work on digital products or freelance gigs

**Friday (2 hours): Business Development**
- Apply to freelance gigs
- Engage on social media
- Network in communities

**Weekend (2-4 hours): Exploration**
- Test one new AI tool (48-hour rule)
- Read AI news and updates
- Plan next week's focus

**The key:** This schedule is FLEXIBLE. Some weeks you'll be all-in on music. Others on freelancing. The system is about consistent progress, not rigid schedules.`,
          },
          {
            title: "Communities to Join (All Free)",
            content: `**Reddit:**
- r/artificial — General AI news and discussion
- r/ChatGPT — Tips, prompts, use cases
- r/LocalLLaMA — Running AI locally (future reference)
- r/edmproduction — Music production community
- r/freelance — Freelancing advice
- r/sidehustle — Side income ideas and reality checks
- r/Entrepreneur — Business mindset

**Discord Servers:**
- Midjourney Discord (even without a subscription — great community)
- EDM Production servers (search "EDM production" on Discord)
- AI Tool-specific servers (many AI companies have active Discords)

**YouTube Channels to Follow:**
- Matt Wolfe — AI tool reviews and news
- AI Explained — Deep dives into AI developments
- Andrew Huang — Music production (forward-thinking)
- You Suck at Producing — EDM production tutorials (beginner-friendly)
- Ali Abdaal — Productivity and online business

**Newsletters (Free):**
- The Neuron — Daily AI news
- TLDR AI — Quick AI summary
- Ben's Bites — AI tools and business
- Axios AI — Broader AI industry news`,
          },
          {
            title: "How to Evaluate New Tools Without Getting Distracted",
            content: `**The Tool Evaluation Checklist:**

Before investing time in any new AI tool, answer these:

□ Does it solve a problem I ACTUALLY have right now?
□ Is there a free tier I can test?
□ Has it been around for more than 3 months? (new ≠ better)
□ Can I test it in under 30 minutes?
□ Do people I trust recommend it?
□ Does it integrate with my existing workflow?

If 4+ answers are "yes" → try it this weekend.
If 2-3 answers are "yes" → bookmark it, revisit in a month.
If 0-1 answers are "yes" → skip it.

**The anti-hype mindset:**
- New tools get hyped for weeks, then most disappear
- Stick with proven tools that update regularly (ChatGPT, Claude, Canva, etc.)
- The best tool is the one you've mastered, not the newest one
- Time spent learning new tools = time NOT spent creating. Balance is key.`,
          },
        ],
        tools: [
          {
            name: "Reddit",
            cost: "free",
            costNote: "Free. Best community for AI news and honest reviews.",
            url: "https://www.reddit.com/",
          },
          {
            name: "The Neuron Newsletter",
            cost: "free",
            costNote: "Free daily AI news email.",
            url: "https://www.theneurondaily.com/",
          },
          {
            name: "Feedly",
            cost: "free",
            costNote: "Free RSS reader. Follow AI blogs and news sources in one place.",
            url: "https://feedly.com/",
          },
        ],
        handsOn: [
          {
            title: "Set Up Your AI Learning System",
            description:
              "Set up: (1) RSS feed or newsletter subscriptions for AI news (2) Reddit multireddit with AI + production + business subs (3) YouTube subscription list curated for learning (4) A weekly schedule template based on the 10-hour plan (5) A tool evaluation log for tracking new tools you discover",
            deliverable:
              "Screenshots of your setup + weekly schedule + tool evaluation template",
          },
          {
            title: "Community Introduction",
            description:
              "Introduce yourself in at least 2 communities (Reddit, Discord, etc.). Share what you're working on, ask a genuine question, and engage with at least 5 replies.",
            deliverable: "Screenshots/links to your community introductions",
          },
        ],
        videos: [
          {
            title: "Roadmap to Become a Generative AI Expert",
            url: "https://www.youtube.com/watch?v=39zbC_PrNQs",
          },
          {
            title: "How to Get Ahead of 99% of People (with AI)",
            url: "https://www.youtube.com/watch?v=0tLHVyd7WtM",
          },
          {
            title: "The Best Top Ranked AI Tools of 2024",
            url: "https://www.youtube.com/watch?v=1b2ICI8WEgM",
          },
        ],
        proTips: [
          "Schedule your learning like you schedule work. Block it on your calendar.",
          "Teach what you learn. Creating content about AI tools deepens YOUR understanding AND builds your brand.",
          "Quality of learning > quantity. Deeply understanding 3 tools beats superficially knowing 30.",
          "The AI landscape will look completely different in 12 months. Build adaptable skills (prompting, logic, business) — not tool-specific knowledge.",
        ],
      },
    ],
  },
];

export default TRACKS;

export function getAllModules(): Module[] {
  return TRACKS.flatMap((track) => track.modules);
}

export function getModuleById(id: string): Module | undefined {
  return getAllModules().find((m) => m.id === id);
}

export function getTrackById(id: string): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}

export const BADGES: Record<string, { label: string; icon: string; description: string }> = {
  first_upload: {
    label: "First Upload",
    icon: "📤",
    description: "Uploaded your first file",
  },
  mix_master: {
    label: "Mix Master",
    icon: "🎚️",
    description: "Completed the Foundations of Mixing module",
  },
  sound_designer: {
    label: "Sound Designer",
    icon: "🎨",
    description: "Completed the AI Sound Design module",
  },
  first_dollar: {
    label: "First Dollar",
    icon: "💵",
    description: "Completed the first income module",
  },
  power_user: {
    label: "Power User",
    icon: "⚡",
    description: "Completed all Track 3 modules",
  },
  full_stack_producer: {
    label: "Full Stack Producer",
    icon: "🏆",
    description: "Completed all 15 modules",
  },
};