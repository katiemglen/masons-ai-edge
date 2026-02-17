export interface VideoLink {
  title: string;
  url: string;
  channel?: string;
  description?: string;
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

// ═══════════════════════════════════════════════════════════════
// TRACK 1A: MANUAL MUSIC PRODUCTION (NO AI TOOLS)
// ═══════════════════════════════════════════════════════════════

const TRACK_1A_MODULES: Module[] = [
  {
    id: "manual-1",
    trackId: "manual-production",
    trackName: "Manual Music Production",
    trackIcon: "🎚️",
    number: 1,
    title: "Mixing Foundations",
    subtitle: "EQ, compression, gain staging, and signal flow — the fundamentals",
    xp: 200,
    badge: "mix_foundations",
    badgeLabel: "Mix Foundations",
    estimatedHours: "5-7 hours",
    description:
      "Before any AI tool can help you, you need to understand WHAT mixing actually does and WHY. This module breaks down EQ, compression, gain staging, signal flow, and panning — the building blocks every professional mix is built on. EDM-focused examples throughout.",
    sections: [
      {
        title: "What EQ Actually Does",
        content: `EQ (Equalization) is a precise volume control for specific frequency ranges. Instead of turning the whole sound up or down, you target specific parts of the sound spectrum.

**Cutting vs Boosting:**
- **Cutting** (subtractive EQ): Removing frequencies. This is your primary tool. It's cleaner, more natural, and harder to overdo.
- **Boosting** (additive EQ): Adding frequencies. Use sparingly — it's easy to create harshness or mud.

**The golden rule:** Cut to fix problems, boost to enhance character. Most beginners boost too much and cut too little.

**High-Pass Filters (HPF) — Your #1 mixing tool:**
A high-pass filter removes everything below a cutoff frequency. Apply one to EVERY track that doesn't need low end:
- Vocals: HPF at 80-120 Hz
- Guitars/synth leads: HPF at 80-100 Hz
- Hi-hats/cymbals: HPF at 200-300 Hz
- Snares: HPF at 80-100 Hz
- Only your kick and bass should have full low end

**Surgical vs Broad EQ:**
- **Surgical:** Narrow Q (bandwidth), large cuts. Used to remove specific problem frequencies (resonances, room modes).
- **Broad:** Wide Q, gentle moves. Used for tonal shaping (warming up, adding air).

**The frequency ranges for EDM:**
- **Sub Bass (20-60 Hz):** The physical rumble. Essential for dubstep. Keep mono, keep clean.
- **Bass (60-250 Hz):** Body and warmth. Kick and bass live here. This is where mud happens.
- **Low Mids (250-500 Hz):** The "boxy" zone. Almost always needs cutting. This is where most beginners' mixes sound muddy.
- **Mids (500 Hz-2 kHz):** Clarity zone. Most instruments compete here.
- **Upper Mids (2-4 kHz):** Presence and bite. Snares crack here. Can get harsh.
- **Highs (4-8 kHz):** Brightness and detail. Hi-hats, vocal clarity.
- **Air (8-20 kHz):** Shimmer and sparkle. Future bass supersaws shine here.`,
      },
      {
        title: "Compression Explained Simply",
        content: `**What compression does:** Reduces the difference between the loudest and quietest parts of a signal. It makes things sound more consistent, punchy, and "glued together."

**The four key parameters:**

**1. Threshold:** The volume level where compression starts. Anything above the threshold gets compressed. Set it so compression only kicks in on the loud peaks.

**2. Ratio:** How much compression is applied.
- 2:1 = gentle (for every 2 dB above threshold, only 1 dB gets through)
- 4:1 = moderate (the sweet spot for most mixing)
- 8:1+ = heavy (limiting territory)
- ∞:1 = brick wall limiter (nothing gets past the threshold)

**3. Attack:** How fast the compressor reacts after the signal crosses the threshold.
- Fast attack (0.1-5 ms): Catches transients immediately. Makes things sound smoother but can kill punch.
- Slow attack (10-30 ms): Lets the initial transient through, THEN compresses. Preserves punch.
- **For drums:** Slow attack = punchy. Fast attack = controlled.
- **For bass:** Medium attack = consistent but still dynamic.

**4. Release:** How fast the compressor lets go after the signal drops below threshold.
- Fast release: Compressor recovers quickly. Can sound choppy.
- Slow release: Smoother compression. Can reduce dynamics too much.
- **EDM trick:** Time the release to the track tempo for a pumping effect.

**What it sounds like:**
- Too much compression: Flat, lifeless, "squashed"
- Right amount: Punchy, consistent, professional
- Too little: Uncontrolled dynamics, some parts too loud, others disappearing

**Sidechain compression — the EDM essential:**
Route your kick drum to the sidechain input of a compressor on your bass/pads. When the kick hits, the compressor ducks the bass, creating that classic pumping effect. This is used in virtually every EDM subgenre.`,
      },
      {
        title: "Gain Staging — Why Levels Matter",
        content: `**What is gain staging?** Setting the volume of every track at every point in the signal chain so nothing clips (distorts) and everything has enough headroom for processing.

**Why it matters:**
- Plugins are designed to work at certain input levels. Feed them too hot or too cold and they don't sound right.
- Your mix bus needs headroom. If every track is slamming 0 dB, you have nowhere to go.
- Proper gain staging prevents distortion and makes mixing decisions easier.

**The practical workflow:**
1. Before you mix, pull ALL faders down to -∞
2. Bring up each track one at a time
3. Set each track so it peaks around -18 to -12 dBFS
4. This gives you headroom and keeps plugins in their sweet spot
5. Your mix bus should sit around -6 to -3 dBFS before mastering

**In Ableton specifically:**
- Use the Utility plugin to set gain before any other effects
- The fader should be at 0 dB (unity) as a starting point — adjust level with Utility
- Monitor your master bus — if it's clipping, don't just turn down the master fader. Turn down individual tracks.

**The VU meter approach:**
Classic analog gear was calibrated to 0 VU = -18 dBFS. Many producers still use this as a target because plugins modeled after analog gear sound best at this level.

**Common mistakes:**
- Making everything "loud" at the track level. Loud ≠ good. Headroom = good.
- Ignoring gain staging and trying to "fix" levels at the master bus
- Not checking levels after adding effects (some plugins add gain)`,
      },
      {
        title: "Signal Flow in Ableton",
        content: `**Signal flow** is the path audio takes from source to speaker. Understanding it in Ableton means understanding WHERE your sound goes and what happens to it along the way.

**The Ableton signal flow:**
1. **Track input** (audio or MIDI → instrument)
2. **Device chain** (effects process in order: left to right)
3. **Track fader** (volume)
4. **Sends** (to return tracks for shared effects)
5. **Group track** (if the track is in a group)
6. **Master track** (final output)

**Understanding the mixer:**
- **Track faders:** Control volume of individual tracks
- **Pan knobs:** Control stereo position (left/right)
- **Send knobs:** Control how much signal goes to return tracks
- **Solo/Mute:** Isolate or silence tracks
- **Group tracks:** Process multiple tracks together (drums, synths, etc.)

**Return tracks (sends) — essential for mixing:**
Instead of putting reverb/delay on every track separately, create return tracks:
- Return A: Reverb (all tracks can share one reverb)
- Return B: Delay
- Return C: Any other shared effect

This saves CPU, creates cohesion (everything shares the same space), and gives you independent control over effect levels.

**Panning and creating space:**
- Keep kick, bass, sub, and lead vocal CENTER
- Pan hi-hats slightly left/right (10-20%)
- Pan rhythmic elements wider (synth layers, pads: 30-50%)
- Use hard panning (100% L or R) for ear candy and effects
- Check your mix in mono — if elements disappear, your panning is too wide without proper mid content`,
      },
      {
        title: "Putting It All Together — Your First Mix Workflow",
        content: `**Step 1: Organize your session**
- Color-code tracks by type (drums, bass, synths, FX, vocals)
- Group related tracks (all drums into a "Drums" group)
- Name everything clearly

**Step 2: Gain stage**
- Pull all faders down
- Bring each track up to around -18 to -12 dBFS peaks
- Make sure nothing is clipping

**Step 3: Static mix (no EQ, no compression yet)**
- Set rough volume balance with faders only
- Start with the most important element (kick + bass in EDM)
- Add elements one at a time
- This rough balance should already sound decent

**Step 4: High-pass filter everything**
- Apply HPF to every track that doesn't need low end
- This single step clears up 50% of muddy mixes

**Step 5: Surgical EQ**
- Listen for problem frequencies (mud, harshness, resonance)
- Use narrow cuts to remove problems
- Use SPAN or Ableton's Spectrum to visualize

**Step 6: Compression**
- Compress drums for punch
- Compress bass for consistency
- Light compression on synths if needed
- Group/bus compression for glue

**Step 7: Panning and space**
- Pan elements to create width
- Set up send effects (reverb, delay)
- Check in mono

**Step 8: Reference and refine**
- A/B against a reference track in your genre
- Make small adjustments
- Take breaks for fresh ears`,
      },
    ],
    tools: [
      {
        name: "Ableton Live (Stock EQ Eight)",
        cost: "free",
        costNote: "Built into Ableton. Your main EQ tool.",
        url: "https://www.ableton.com/",
      },
      {
        name: "Ableton Live (Stock Compressor)",
        cost: "free",
        costNote: "Built into Ableton. Full-featured compressor.",
        url: "https://www.ableton.com/",
      },
      {
        name: "Ableton Live (Utility)",
        cost: "free",
        costNote: "Built into Ableton. Essential for gain staging and mono checks.",
        url: "https://www.ableton.com/",
      },
      {
        name: "SPAN by Voxengo",
        cost: "free",
        costNote: "100% free. Better spectrum analyzer than Ableton's default.",
        url: "https://www.voxengo.com/product/span/",
      },
      {
        name: "Youlean Loudness Meter",
        cost: "free",
        costNote: "Free version has all essential LUFS metering features.",
        url: "https://youlean.co/youlean-loudness-meter/",
      },
    ],
    handsOn: [
      {
        title: "Build a Balanced Mix from Scratch",
        description:
          "Take a multi-track Ableton project (your own or a free multistem from Splice/Cambridge MT). Following the workflow in this module: organize, gain stage, static mix, HPF everything, surgical EQ, compress drums and bass, set up sends for reverb and delay, and pan for width.",
        deliverable: "Before and after audio bounces (.wav) plus a text file describing your mixing decisions",
      },
      {
        title: "EQ Surgery Practice",
        description:
          "Take a muddy mix and identify at least 5 frequency problems using SPAN. Fix each one with surgical EQ cuts. Document what frequency you cut, how much, and why.",
        deliverable: "Audio comparison (before/after) + EQ decision log",
      },
      {
        title: "Compression A/B Test",
        description:
          "Apply compression to your drum bus with 3 different settings: fast attack, slow attack, and parallel compression. Bounce all three versions and describe how each one sounds different.",
        deliverable: "Three compressed drum bus bounces + written comparison",
      },
    ],
    videos: [
      {
        title: "Your First Mix: EQ, Compression & Gain Staging (Made Simple)",
        url: "https://www.youtube.com/watch?v=AOQEXvDcI0U",
        channel: "George Tsurkan",
        description: "Clear walkthrough of the core mixing fundamentals in one video.",
      },
      {
        title: "The 6 Steps To An Industry Standard EDM Drum Mix",
        url: "https://www.youtube.com/watch?v=Gm-MzS2r7Kc",
        channel: "Bedroom Producer",
        description: "EDM-specific drum mixing tutorial with practical techniques.",
      },
      {
        title: "How to Mix If You're Not a Mix Engineer",
        url: "https://www.youtube.com/watch?v=Bfh2E6qNF2o",
        channel: "iZotope, Inc.",
        description: "Approachable mixing guide from a trusted pro audio brand.",
      },
    ],
    proTips: [
      "Always mix at low volume. If it sounds good quiet, it'll sound GREAT loud.",
      "Reference your mix against a commercial track in the same genre. A/B constantly.",
      "High-pass everything that doesn't need low end. This single move cleans up most beginner mixes.",
      "Take breaks every 30-45 minutes. Ear fatigue is real and will destroy your judgment.",
      "Cut before you boost. Subtractive EQ is almost always better than additive.",
    ],
  },
  {
    id: "manual-2",
    trackId: "manual-production",
    trackName: "Manual Music Production",
    trackIcon: "🎚️",
    number: 2,
    title: "Mastering Fundamentals",
    subtitle: "Limiting, stereo imaging, LUFS, and reference tracks",
    xp: 200,
    estimatedHours: "4-6 hours",
    description:
      "Mastering is the final polish that makes your tracks sound professional on every speaker system. This module covers what mastering IS (vs mixing), the mastering signal chain, LUFS targets for streaming, stereo imaging, and how to A/B compare your masters against professional releases.",
    sections: [
      {
        title: "What Mastering IS vs Mixing",
        content: `**Mixing** is blending individual tracks (drums, bass, synths, vocals) into a stereo file. **Mastering** is processing that stereo file to be ready for distribution.

**The difference matters because:**
- Mixing fixes individual elements. Mastering polishes the whole.
- If your mix has problems, mastering can't fix them. Mastering enhances a good mix.
- Mixing uses surgical tools. Mastering uses subtle, broad strokes.

**What mastering does:**
1. **Tonal balance:** Ensuring no frequency range is too loud or quiet across the whole track
2. **Loudness:** Getting the track to competitive volume without distortion
3. **Consistency:** If releasing an EP/album, all tracks should match in loudness and tone
4. **Stereo refinement:** Final width adjustments
5. **Format optimization:** Preparing for streaming, CD, vinyl

**The mastering signal chain (in order):**
1. Corrective EQ (fix any tonal issues from the mix)
2. Stereo imaging (width adjustments)
3. Glue compression (bind elements together)
4. Limiter (final loudness push)
5. Metering (verify LUFS, true peak, stereo balance)

**The most important rule:** If you're pushing the mastering chain hard to make things sound "better," go back and fix the mix first.`,
      },
      {
        title: "Limiting and Loudness (LUFS)",
        content: `**What a limiter does:** Acts as a brick wall ceiling for your audio. Nothing goes above the set threshold, allowing you to push overall volume up without clipping.

**LUFS — the standard for loudness:**
LUFS (Loudness Units Full Scale) is the standard measurement for perceived loudness. Streaming platforms normalize to specific targets:

**Target levels for streaming:**
- **Spotify:** -14 LUFS integrated
- **Apple Music:** -16 LUFS integrated
- **YouTube:** -14 LUFS integrated
- **SoundCloud:** No normalization (your choice)

**What happens if you go louder?**
If your track is mastered to -8 LUFS and Spotify targets -14, they'll turn your track DOWN by 6 dB. The result: your heavily limited track sounds quieter AND less dynamic than a well-mastered -14 LUFS track.

**Practical limiting approach:**
1. Set your limiter ceiling at -1.0 dB True Peak (safety margin)
2. Push the input gain until you hit your target LUFS
3. Use Youlean Loudness Meter to monitor in real-time
4. Listen for distortion artifacts — if you hear them, back off

**For EDM specifically:**
- Club/DJ play: -8 to -10 LUFS (louder, for non-normalized playback)
- Streaming release: -14 LUFS
- Dubstep: -8 to -10 LUFS is common for raw power, but consider -12 for streaming
- Future bass: -12 to -14 LUFS works well

**Free limiters:**
- Limiter No6 by Vladg (FREE): Full mastering limiter with multiple stages
- Ableton's stock Limiter: Decent for basic work`,
      },
      {
        title: "Stereo Imaging — Mono Compatibility and Width",
        content: `**Why stereo imaging matters in mastering:**
Your master needs to sound good on everything from club systems (often mono) to AirPods (stereo) to phone speakers (tiny mono).

**The mono rule:** Keep everything below 200 Hz in MONO. This applies to your mix AND your master.

**Why?**
- Bass frequencies in stereo cause phase cancellation on mono systems (clubs, phones)
- Your sub bass literally disappears if it has stereo information
- Mono bass = consistent power across all playback systems

**Stereo imaging in mastering:**
1. Use a mid/side EQ to ensure lows are mono
2. Gentle stereo widening on the highs (above 4 kHz) if needed
3. Check the entire master in mono — nothing should disappear

**Tools in Ableton:**
- **Utility plugin:** Width knob (100% = normal stereo, 0% = mono). Use Mid/Side mode for precise control.
- **EQ Eight in M/S mode:** Apply EQ separately to mid and side channels

**Free standalone tools:**
- **Ozone Imager (FREE):** Visual stereo field display + width control
- **Wider by Polyverse (FREE):** Simple but effective stereo widener

**EDM-specific considerations:**
- Dubstep: Sub bass DEAD CENTER. Mid-range growls can have moderate width. Snare slightly wide.
- Future bass: Supersaws should be WIDE. But always mono-check — if the chords disappear in mono, reduce width or fix the mix.
- All genres: Keep your kick mono. Always.`,
      },
      {
        title: "Reference Track Workflow",
        content: `**A/B comparison is THE most important mastering skill.**

**The problem:** Your ears lie. After listening to your track for hours, you lose perspective. A reference track resets your ears to "what professional sounds like."

**How to set up reference comparison:**
1. Import a professional reference track into your mastering session
2. Place it on a separate track, AFTER the master bus (so your mastering chain doesn't affect it)
3. Level-match it to your master using a loudness meter (LUFS must match!)
4. Solo back and forth rapidly

**Why level matching is critical:**
Our brains perceive "louder" as "better." If your reference is 3 dB louder, you'll always think it sounds better — even if your master is actually well done. Match the LUFS exactly.

**What to compare:**
- Low end weight and tightness
- Mid clarity and presence
- High frequency sparkle vs harshness
- Stereo width and depth
- Overall punch and energy
- Transient quality (are your drums as snappy?)

**Choosing reference tracks:**
- Pick 2-3 tracks in your EXACT subgenre
- Choose well-known, professionally mastered tracks
- Use tracks released in the last 2-3 years (mastering standards evolve)
- Keep a dedicated "reference" playlist updated monthly`,
      },
      {
        title: "DIY Mastering Chain with Free Plugins",
        content: `You don't need expensive tools. Here's a complete free mastering chain:

**1. EQ (Ableton's EQ Eight or TDR Nova FREE)**
- Gentle corrections only. Subtle moves of 1-2 dB.
- Cut any buildup around 200-400 Hz if muddy
- Slight boost at 40 Hz for sub weight (if needed)
- Air boost at 12 kHz+ for sparkle (shelf, +1-2 dB max)

**2. Stereo Imaging (Ozone Imager FREE or Ableton Utility)**
- Narrow the lows (below 200 Hz) toward mono
- Widen the highs slightly if they sound narrow
- Don't overdo it — subtle moves only

**3. Glue Compression (Ableton's Glue Compressor or TDR Kotelnikov FREE)**
- Ratio: 2:1 to 4:1
- Very gentle: 1-2 dB of gain reduction maximum
- Slow attack (30ms+), auto release
- This "glues" the mix together without squashing dynamics

**4. Limiter (Limiter No6 FREE or Ableton Limiter)**
- Ceiling: -1.0 dB True Peak
- Push input until you reach target LUFS
- Listen for artifacts — any distortion means you've gone too far

**5. Metering (Youlean Loudness Meter FREE)**
- Monitor integrated LUFS (your target)
- Check true peak (should stay below -1.0 dB)
- Watch loudness range (LRA) — 6-10 LU is healthy for EDM

This chain gets you 80-90% of the way to professional mastering. The last 10-20% is experience and expensive analog gear that most listeners can't hear anyway.`,
      },
    ],
    tools: [
      {
        name: "Ableton's Glue Compressor",
        cost: "free",
        costNote: "Built into Ableton. SSL-modeled bus compressor.",
        url: "https://www.ableton.com/",
      },
      {
        name: "TDR Kotelnikov",
        cost: "free",
        costNote: "100% free. Mastering-grade transparent compressor.",
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
        costNote: "Free version has all essential LUFS metering features.",
        url: "https://youlean.co/youlean-loudness-meter/",
      },
      {
        name: "Limiter No6",
        cost: "free",
        costNote: "100% free. Full mastering limiter with multiple stages.",
        url: "https://vladgsound.wordpress.com/plugins/limiter6/",
      },
    ],
    handsOn: [
      {
        title: "Master a Track to Streaming-Ready Loudness",
        description:
          "Take your best mix (or use the mix from Module 1). Apply the full free mastering chain: EQ → Stereo Imaging → Glue Compression → Limiter → Metering. Target -14 LUFS for Spotify.",
        deliverable: "Original mix .wav + mastered .wav + LUFS screenshot from Youlean",
      },
      {
        title: "A/B Compare Against a Reference",
        description:
          "Pick a professional track in your genre. Level-match it against your master in Ableton. Document at least 5 specific differences between your master and the reference.",
        deliverable: "Written A/B comparison document with specific frequency and dynamic observations",
      },
      {
        title: "Mono Compatibility Check",
        description:
          "Put your master through a mono check using Utility (width=0%). Listen for any elements that disappear or sound weird. Fix the issues and document what you changed.",
        deliverable: "Before/after audio + notes on mono compatibility fixes",
      },
    ],
    videos: [
      {
        title: "Stereo Imaging in Mastering: Width and Mid/Side | Are You Listening?",
        url: "https://www.youtube.com/watch?v=0tqlHNuacik",
        channel: "iZotope, Inc.",
        description: "Professional mastering series covering stereo imaging fundamentals.",
      },
      {
        title: "LUFS LEVEL I MASTER TO",
        url: "https://www.youtube.com/watch?v=2WsunkYQC_4",
        channel: "Streaky",
        description: "Practical LUFS targeting advice from a professional mastering engineer.",
      },
      {
        title: "Are You Listening? Ep. 5 | Limiting in Mastering",
        url: "https://www.youtube.com/watch?v=2f8WruCvNnE",
        channel: "iZotope, Inc.",
        description: "Deep dive into limiting and loudness in mastering context.",
      },
    ],
    proTips: [
      "Master with fresh ears. Don't master the same day you mixed.",
      "Listen to your master on multiple systems: headphones, car, phone speaker, laptop.",
      "If your master sounds worse than the mix, you're pushing too hard. Back off.",
      "Keep a reference track loaded in EVERY mastering session. A/B constantly.",
      "-14 LUFS is not a rule — it's a guideline. Some tracks benefit from being slightly louder or quieter.",
    ],
  },
  {
    id: "manual-3",
    trackId: "manual-production",
    trackName: "Manual Music Production",
    trackIcon: "🎚️",
    number: 3,
    title: "Sound Design Fundamentals",
    subtitle: "Synthesis, dubstep basses, future bass supersaws — from scratch",
    xp: 250,
    badge: "sound_designer",
    badgeLabel: "Sound Designer",
    estimatedHours: "6-8 hours",
    description:
      "Sound design is what separates a generic track from YOUR track. This module teaches subtractive, wavetable, and FM synthesis from the ground up, then applies those concepts to creating dubstep growl basses, future bass supersaws, and original textures — all using Vital (100% FREE) and Ableton stock tools.",
    sections: [
      {
        title: "Subtractive Synthesis — The Foundation",
        content: `**The core concept:** Start with a harmonically rich waveform, then filter (subtract) frequencies to shape the sound.

**The building blocks:**
- **Oscillators** generate raw waveforms (saw, square, triangle, sine)
- **Filters** remove frequencies (low-pass, high-pass, band-pass)
- **Envelopes** shape how parameters change over time (ADSR: Attack, Decay, Sustain, Release)
- **LFOs** create repeating modulation (wobble, vibrato, tremolo)

**Waveform types:**
- **Saw wave:** Bright, buzzy, harmonically rich. The foundation of EDM leads, supersaws, and bass. Contains ALL harmonics.
- **Square wave:** Hollow, reedy. Contains only odd harmonics. Great for sub bass layers and retro sounds.
- **Triangle wave:** Soft, flute-like. Similar to square but gentler.
- **Sine wave:** Pure tone. No harmonics. The cleanest sub bass possible.

**The subtractive workflow:**
1. Choose an oscillator waveform (usually saw for EDM)
2. Apply a low-pass filter to remove harsh high frequencies
3. Use an envelope on the filter to create movement (e.g., filter opens on each note)
4. Add an LFO for modulation (wobble, pulsing)

**In Vital (free synth):**
1. OSC 1 → Load a saw wave
2. Filter → Low-pass, set cutoff to taste
3. ENV 2 → Drag to filter cutoff (creates a "pluck" when the filter opens and closes)
4. LFO 1 → Drag to filter cutoff (adds wobble)

This is literally how 90% of EDM synthesis starts.`,
      },
      {
        title: "Wavetable Synthesis — Infinite Possibilities",
        content: `**What it is:** Instead of simple waveforms (saw, square), wavetable synths can morph between complex shapes stored in a "wavetable."

**Why it matters for EDM:** Wavetable synthesis gives you:
- Evolving, moving textures
- Complex timbres impossible with basic waveforms
- The foundation for modern dubstep and future bass sounds

**Vital is a wavetable synth.** This is why it's so powerful — it combines wavetable synthesis with subtractive filtering.

**Key concepts:**
- **Wavetable position:** A knob that moves through different wave shapes. Automate this for evolving sounds.
- **Morphing:** Smooth transitions between wave shapes as you turn the position knob.
- **Custom wavetables:** You can import or create your own shapes in Vital.

**Practical wavetable design in Vital:**
1. Load a complex wavetable (try "Formant" or "Analog" categories)
2. Map LFO 1 to the wavetable position
3. Set LFO rate slow (0.5-2 Hz) for evolving textures
4. Set LFO rate fast (4-8 Hz) for dubstep wobble
5. Add the filter and effects for final shaping

**The wavetable + filter combo:**
- Wavetable position controls the TIMBRE (the character of the sound)
- Filter cutoff controls the BRIGHTNESS
- Modulating both simultaneously creates rich, complex sounds

**Serum concepts apply to Vital:** Most Serum tutorials translate directly to Vital. Same synthesis engine concept, similar interface.`,
      },
      {
        title: "FM Synthesis Basics",
        content: `**What FM synthesis does:** One oscillator (the modulator) modulates the frequency of another (the carrier), creating complex harmonics that are impossible with subtractive synthesis alone.

**Think of it this way:** If subtractive synthesis is sculpting clay by removing material, FM synthesis is creating new materials entirely.

**FM produces:**
- Metallic, bell-like tones
- Electric piano sounds
- Aggressive, complex bass textures
- Alien-sounding leads

**In Vital:**
Vital has a built-in FM matrix. Route one oscillator to modulate another:
1. Set OSC 1 as carrier (sine or saw)
2. Set OSC 2 as modulator (sine)
3. Enable FM routing (OSC 2 → OSC 1)
4. Adjust FM amount — subtle = metallic shimmer, extreme = total chaos
5. Map an envelope to the FM amount for dynamic textures

**FM in Ableton:**
Ableton's Operator is a full FM synth. It has 4 operators (oscillators) that can modulate each other in various configurations (algorithms).

**FM for dubstep:** Aggressive FM modulation + distortion = screaming metallic bass sounds. Many Virtual Riot and Excision bass sounds use FM as a starting point.`,
      },
      {
        title: "Designing Dubstep Basses",
        content: `**The Classic Growl/Wobble Bass:**
1. Open Vital. Load a complex wavetable on OSC 1 (try "Analog Growl" or "Formant")
2. LFO 1 → mapped to wavetable position at 2-4 Hz for wobble
3. Enable the Formant filter. Map LFO 2 to the vowel parameter
4. Add built-in Distortion (Soft Clip or Hard Clip)
5. Light reverb (short, just for space)
6. Bounce to audio and reprocess in Ableton (more distortion, EQ, multiband compression)

**The Riddim Bass:**
1. Simple square or saw wavetable
2. Short pitch envelope (sharp downward pitch at note start — creates the "thud")
3. Aggressive high-pass + band-pass filter automation
4. Heavy OTT compression (Xfer OTT is FREE)
5. Layer with a clean sub sine wave underneath

**Bass layering — the secret to massive bass:**
- **Sub layer (20-80 Hz):** Clean sine wave. Always mono. Always present.
- **Mid layer (80-500 Hz):** Your growl/design. Where the character lives.
- **Top layer (500 Hz+):** Distorted harmonic content for cut and aggression.
- Process each independently, then sum them together.

**Resampling — the pro move:**
1. Design a bass sound
2. Bounce it to audio
3. Chop, reverse, pitch-shift, add effects
4. Bounce AGAIN
5. Repeat until it's completely unique
This is how producers like Virtual Riot create sounds nobody has heard before.`,
      },
      {
        title: "Future Bass Supersaws and Lush Pads",
        content: `**The Supersaw — the signature future bass sound:**
1. In Vital: OSC 1 → Saw wave
2. Increase unison voices to 7-16 (this is what creates the "super" in supersaw)
3. Detune the unison voices (50-80% detune amount)
4. Add a second oscillator (OSC 2) → also saw, detuned from OSC 1 by a few cents
5. Apply low-pass filter with envelope modulation (opens on each note for a "pluck")
6. Add chorus effect for extra width
7. Reverb (medium tail)

**Width techniques for supersaws:**
- Stereo spread on the unison voices (Vital has a built-in spread control)
- Pan OSC 1 slightly left, OSC 2 slightly right
- Apply the Wider plugin (FREE from Polyverse)
- BUT: always check in mono. If the sound disappears, reduce width.

**Lush pads:**
1. Soft, evolving wavetable (try "Dream" or "Soft" categories in Vital)
2. Long attack (200-500ms), long release (1-3 seconds) on the amp envelope
3. LFO modulating wavetable position very slowly (0.1-0.5 Hz)
4. Chorus + reverb (long tail, 3-5 seconds)
5. Low-pass filter at around 8-12 kHz to keep it smooth
6. Stereo width — pads should be WIDE

**Vital — the free powerhouse:**
Download from https://vital.audio — the free version has the full synthesis engine. Paid versions ($25/$80) only add more wavetables and presets. The free version is all you need.

**Xfer OTT — the EDM secret weapon (FREE):**
OTT is a multiband upward/downward compressor that makes everything louder and more present.
- On basses: 50-70% depth
- On supersaws: 30-50% depth
- On drums: 20-40% depth
Download: https://xferrecords.com/freeware`,
      },
    ],
    tools: [
      {
        name: "Vital Synth",
        cost: "free",
        costNote: "Free tier has full synthesis engine. The best free synth available.",
        url: "https://vital.audio/",
      },
      {
        name: "Xfer OTT",
        cost: "free",
        costNote: "100% free. The most-used compressor in EDM production.",
        url: "https://xferrecords.com/freeware",
      },
      {
        name: "Ableton Operator",
        cost: "free",
        costNote: "Built into Ableton Suite. Powerful FM synth.",
        url: "https://www.ableton.com/",
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
        title: "Create 5 Original Sounds in Vital",
        description:
          "Start from an initialized patch (no presets!) and create: (1) A dubstep growl bass, (2) A riddim bass, (3) A future bass supersaw, (4) A lush pad, (5) A pluck lead. Document the settings for each.",
        deliverable: "5 audio files (.wav) + Vital preset files (.vital) + settings documentation",
      },
      {
        title: "Bass Layer Stack",
        description:
          "Create a 3-layer bass stack: sub sine, mid growl, top distortion. Process each layer separately, then combine them. Show the before (individual layers) and after (combined).",
        deliverable: "Individual layer bounces + combined bass bounce + processing notes",
      },
      {
        title: "Resample a Sound 3 Times",
        description:
          "Start with a basic Vital sound. Bounce to audio. Process it (reverse, pitch, effects). Bounce again. Process again. Bounce a third time. Show all 3 generations.",
        deliverable: "3 generation audio files showing the resampling evolution",
      },
    ],
    videos: [
      {
        title: "Sound Design Pt1: Synth Types",
        url: "https://www.youtube.com/watch?v=3jvsNGYzx74",
        channel: "Bthelick",
        description: "Comprehensive overview of different synthesis types for beginners.",
      },
      {
        title: "Intro to Subtractive Synthesis",
        url: "https://www.youtube.com/watch?v=63wRx-KsbQ0",
        channel: "Underdog Electronic Music School",
        description: "Focused deep-dive into subtractive synthesis fundamentals.",
      },
      {
        title: "Synth 101: How oscillators & waveforms work",
        url: "https://www.youtube.com/watch?v=G3ZhIqic5to",
        channel: "Soundfly",
        description: "Visual explanation of oscillators and waveform fundamentals.",
      },
    ],
    proTips: [
      "Save EVERYTHING. Made a cool sound by accident? Save the preset immediately.",
      "Resampling is your friend: bounce, chop, reverse, pitch. Your sounds become 100% unique.",
      "Layer bass sounds: sub sine for the lows, growl for mids, distorted layer for highs = massive.",
      "OTT at 100% is a meme. Use 30-60% for musicality.",
      "Learn Vital deeply before buying Serum. They're extremely similar and Vital is free.",
    ],
  },
  {
    id: "manual-4",
    trackId: "manual-production",
    trackName: "Manual Music Production",
    trackIcon: "🎚️",
    number: 4,
    title: "Arrangement & Song Structure",
    subtitle: "EDM structure, energy curves, builds, drops, and transitions",
    xp: 200,
    estimatedHours: "4-6 hours",
    description:
      "A great drop with bad arrangement falls flat. A good drop with great arrangement becomes a banger. This module teaches standard EDM arrangements, how energy curves work, transition techniques, and how different subgenres (dubstep, house, future bass) structure their tracks differently.",
    sections: [
      {
        title: "Standard EDM Arrangement",
        content: `**The basic EDM structure:**
Intro → Buildup → Drop → Breakdown → Buildup 2 → Drop 2 → Outro

**Typical dubstep arrangement (3-4 min):**
- 0:00-0:30 — Intro (atmospheric, minimal, sets the mood)
- 0:30-1:00 — Buildup (rising tension, snare rolls, risers, filter sweeps)
- 1:00-1:30 — DROP 1 (full energy, main bass + drums)
- 1:30-2:00 — Breakdown (half-time feel or atmospheric break)
- 2:00-2:15 — Buildup 2 (shorter, more intense)
- 2:15-2:45 — DROP 2 (variation on drop 1, maybe heavier or different rhythm)
- 2:45-3:15 — Bridge or Breakdown
- 3:15-3:45 — DROP 3 or final section
- 3:45-4:00 — Outro

**Typical future bass arrangement (3 min):**
- 0:00-0:15 — Intro (ambient or melodic hook)
- 0:15-0:45 — Verse (vocal or melodic theme, minimal production)
- 0:45-1:00 — Pre-drop buildup
- 1:00-1:30 — DROP 1 (big sidechained chords, emotional)
- 1:30-2:00 — Verse 2 / Breakdown
- 2:00-2:15 — Buildup 2
- 2:15-2:45 — DROP 2 (variation — stripped then full, or different chord voicing)
- 2:45-3:00 — Outro

**These are starting points, not rules.** Knowing the formula lets you intentionally break it. Study tracks you love to find YOUR preferred structures.`,
      },
      {
        title: "Energy Curves — Tension and Release",
        content: `Every great EDM track follows an energy curve. Think of it as storytelling with sound.

**The energy scale (1-10):**
- Intro: 3-4 (setting the scene)
- Verse: 5-6 (building interest)
- Buildup: 7 → 9 (rising tension, increasingly urgent)
- Drop: 10 (maximum energy, payoff)
- Breakdown: 4-5 (dramatic contrast)
- Buildup 2: 8 → 10 (faster rise, shorter)
- Drop 2: 10+ (somehow even bigger)
- Outro: 4 → 2 (winding down)

**The KEY insight:** The drop doesn't feel powerful because of what's IN it — it feels powerful because of what was REMOVED before it.

**The contrast principle:**
The bigger the gap between the quiet section and the drop, the harder the drop hits. A mediocre drop after total silence hits harder than an amazing drop after a busy buildup.

**How to create contrast:**
- Filter sweep (low-pass everything, then remove the filter at the drop)
- Remove drums in the breakdown
- Drop the volume dramatically
- Use silence (even 0.5 seconds of silence before the drop is powerful)
- Strip to just a vocal or single melodic element
- Rising white noise and risers create anticipation

**Energy management mistakes:**
- Starting too energetic (nowhere to go up)
- No contrast between sections (everything at the same energy level = boring)
- Too many drops without breathing room
- Buildup too long (listener loses anticipation)`,
      },
      {
        title: "Transition Techniques",
        content: `**Risers:** Upward-sweeping sounds that build anticipation.
- White noise sweeps (filter opening gradually)
- Pitch-rising synth notes
- Reversed cymbals/crashes
- Layer multiple risers for bigger builds

**Sweeps:** Frequency sweeps that move through the spectrum.
- Low-pass filter slowly opening (most common)
- High-pass filter slowly closing
- Band-pass filter sweeping through frequencies

**Fills:** Rhythmic elements that signal a transition.
- Snare rolls (increasing in speed toward the drop)
- Tom fills (descending or ascending)
- Hi-hat rolls (16th → 32nd → 64th notes)
- Vocal chops timed to the rhythm

**Silence and space:**
- A moment of silence before the drop (0.25-1 second)
- Removing the kick before a transition
- Cutting all elements except one (vocal, pad, etc.)

**Impact sounds:**
- Big kick/boom at the drop
- Crash cymbal
- Sub bass hit
- Layered impacts (combine kick + crash + sub boom)

**The 8-bar rule:**
Most EDM transitions happen on 8-bar boundaries. Sections are typically 8, 16, or 32 bars. Build your arrangements on these boundaries for natural-feeling transitions.`,
      },
      {
        title: "Analyzing Reference Tracks",
        content: `**The 10-listen method for studying arrangement:**
- Listen 1: Just enjoy it. Note your emotional response.
- Listen 2: Map the arrangement (sections with timestamps)
- Listen 3: Focus ONLY on energy — rate each section 1-10
- Listen 4: Focus on transitions — how does each section flow to the next?
- Listen 5: Focus on the low end — when does bass appear/disappear?
- Listen 6: Focus on the stereo field — what's wide vs narrow?
- Listens 7-10: Study specific elements (drums, synths, vocals, effects)

**How to map arrangement in Ableton:**
1. Import a reference track
2. Use Ableton's Locators to mark each section (Intro, Build, Drop, etc.)
3. Note the bar count of each section
4. Color-code sections by energy level
5. Keep this as a template for your own tracks

**What to look for:**
- How long is each section?
- How many elements change between sections?
- What specifically triggers the energy increase?
- How does the producer create contrast?
- When do new elements appear and disappear?

**Building a reference library:**
Keep a folder of analyzed tracks with your notes. Over time, you'll develop an intuition for arrangement that makes your own tracks flow naturally.`,
      },
      {
        title: "Genre-Specific Arrangement Differences",
        content: `**Dubstep:**
- Drops are aggressive and rhythmically complex
- Multiple drops with different bass designs
- Breakdowns can be atmospheric or melodic
- Tempo: 140-150 BPM (half-time feel)
- Drops often switch between half-time and double-time patterns

**Future Bass:**
- Emotional, chord-driven drops
- Strong vocal presence (even if just chops)
- Drops feel "big" rather than "aggressive"
- Tempo: 140-170 BPM
- Sidechained chords are the main drop element

**House:**
- Long, gradual energy builds
- DJ-friendly intros and outros (16-32 bars)
- Less dramatic drops — more of a "groove switch"
- Tempo: 120-130 BPM
- 4-on-the-floor kick runs through most of the track

**Melodic Bass / Melodic Dubstep:**
- Blend of dubstep power and future bass emotion
- Longer breakdowns with melodic development
- Drops combine heavy bass with melodic elements
- Strong emotional arc
- Think Illenium, Seven Lions, Said The Sky

**The takeaway:** Study YOUR subgenre deeply. The arrangement expectations differ significantly between genres. What works in dubstep sounds wrong in house.`,
      },
    ],
    tools: [
      {
        name: "Ableton Live (Locators & Arrangement View)",
        cost: "free",
        costNote: "Built-in arrangement tools. Use locators to mark sections.",
        url: "https://www.ableton.com/",
      },
      {
        name: "SPAN by Voxengo",
        cost: "free",
        costNote: "Free spectrum analyzer — useful for studying reference tracks.",
        url: "https://www.voxengo.com/product/span/",
      },
    ],
    handsOn: [
      {
        title: "Analyze 3 Reference Tracks",
        description:
          "Choose 3 tracks: 1 dubstep, 1 future bass, 1 of your choice. For each, document: full arrangement map with timestamps, energy curve (rate each section 1-10), transition techniques used, and 3 specific production techniques you noticed.",
        deliverable: "Analysis document with all 3 tracks fully mapped and annotated",
      },
      {
        title: "Arrange a Full Track",
        description:
          "Using your analysis as a guide, arrange a complete track in Ableton. It doesn't need to be mixed or mastered — focus entirely on structure, energy curve, transitions, and contrast between sections.",
        deliverable: "Ableton project file + audio bounce of the full arrangement",
      },
    ],
    videos: [
      {
        title: "Best SONG STRUCTURE Advice I Ever Learned",
        url: "https://www.youtube.com/watch?v=62oV1qEFjmI",
        channel: "Official AHEE",
        description: "Practical arrangement advice from a respected EDM producer.",
      },
      {
        title: "This Approach to Music Arrangement will Change your Music Forever!",
        url: "https://www.youtube.com/watch?v=BmSKebGw4h0",
        channel: "EDM Tips",
        description: "EDM-specific arrangement strategies that make production easier.",
      },
      {
        title: "3 Most Common Arrangement Structures Industry Producers Use",
        url: "https://www.youtube.com/watch?v=2COf2jOEdmw",
        channel: "Alice Efe - Mercurial Tones Academy",
        description: "Industry-standard arrangement patterns broken down simply.",
      },
    ],
    proTips: [
      "The arrangement is just as important as the sounds. A mediocre drop with great arrangement > great drop with confusing arrangement.",
      "Use silence as a tool. A half-second of nothing before a drop is incredibly powerful.",
      "Build your tracks in 8-bar blocks. It makes arrangement feel natural.",
      "Create an arrangement template in Ableton with markers for each section. Start every new track from this template.",
      "If a section feels boring, it's probably too long. Cut it in half.",
    ],
  },
  {
    id: "manual-5",
    trackId: "manual-production",
    trackName: "Manual Music Production",
    trackIcon: "🎚️",
    number: 5,
    title: "Ableton Workflow & Shortcuts",
    subtitle: "Session vs arrangement, warping, sampling, and automation",
    xp: 200,
    estimatedHours: "4-5 hours",
    description:
      "Ableton is your instrument — the faster you can operate it, the more creative you can be. This module covers Session vs Arrangement view, essential keyboard shortcuts, warping, sampling, automation, and workflow tips that will save you hours on every project.",
    sections: [
      {
        title: "Session View vs Arrangement View",
        content: `**Session View (the grid of clips):**
- Non-linear. Clips can be triggered in any order.
- Perfect for: brainstorming, jamming, testing ideas, live performance
- Each row is a "scene" — launch a scene to trigger all clips in that row
- Great for: building up loops, experimenting with combinations

**Arrangement View (the timeline):**
- Linear. Audio flows left to right, like a traditional DAW.
- Perfect for: final arrangement, automation, mixing
- This is where your finished track lives

**The ideal workflow:**
1. Start in Session View — build your loops, experiment with sounds, create variations
2. Record a "performance" from Session → Arrangement (use the record button in Arrangement View while triggering clips)
3. Refine in Arrangement View — edit transitions, add automation, fine-tune structure

**Pro tip:** Press Tab to switch between views instantly.

**When to use each:**
- Stuck on ideas? → Session View. Just make loops and trigger them.
- Know what you want? → Arrangement View. Build linearly.
- Most producers use both in every project.`,
      },
      {
        title: "Essential Keyboard Shortcuts",
        content: `These shortcuts will save you HOURS. Learn 2-3 per week until they're muscle memory.

**Navigation:**
- Tab: Switch Session ↔ Arrangement View
- Ctrl+Shift+M: Create new MIDI track
- Ctrl+Shift+T: Create new audio track
- Space: Play/Stop
- Shift+Space: Play from start of selection

**Editing:**
- Ctrl+D: Duplicate selection (clips, notes, anything)
- Ctrl+E: Split clip at playhead
- Ctrl+J: Consolidate selection into one clip
- Ctrl+Shift+D: Duplicate track with all devices
- Ctrl+Z: Undo (unlimited)
- Delete: Delete selection

**Mixing:**
- Ctrl+Shift+I: Create return track
- Ctrl+G: Group selected tracks
- 0 (zero): Toggle device on/off
- S: Solo selected track
- Ctrl+0: Toggle selected track active/inactive

**Zooming:**
- Ctrl+Plus/Minus: Zoom in/out horizontally
- Alt+Plus/Minus: Zoom in/out vertically
- Z: Zoom to fit selection
- Ctrl+Shift+Z: Zoom to fit all

**MIDI Piano Roll:**
- B: Toggle draw mode
- Ctrl+A: Select all notes
- Shift+↑/↓: Transpose selection up/down octave
- ↑/↓: Transpose selection up/down semitone
- Ctrl+1/2/3/4: Set grid to 1/4, 1/8, 1/16, 1/32

**The meta-shortcut:** Press Ctrl+, (comma) to open Preferences. You can customize any shortcut.`,
      },
      {
        title: "Warping — Time-Stretching and Beat Matching",
        content: `**What warping does:** Stretches or compresses audio to match your project's tempo WITHOUT changing the pitch. Essential for sampling and working with audio.

**Warp modes:**
- **Beats:** Best for rhythmic material (drums, loops). Preserves transients.
- **Tones:** Best for melodic material with clear pitch (vocals, bass). Preserves pitch quality.
- **Texture:** Best for atmospheric content (pads, ambient). Preserves overall character.
- **Re-Pitch:** Changes speed AND pitch together (like vinyl). Good for creative effects.
- **Complex/Complex Pro:** Best quality for full mixes and complex audio. CPU-heavy.

**Setting warp markers:**
1. Double-click a clip to see the waveform
2. Look for the yellow triangles (warp markers)
3. Click on a transient to create a new warp marker
4. Drag warp markers to align transients with the grid

**Practical warping uses:**
- Import a sample and match it to your project tempo
- Time-stretch vocals to fit your track
- Fix timing issues in recorded audio
- Creative effects: extreme stretching for ambient textures

**Tips:**
- Always set the correct start point for your audio
- Use "Beats" mode for drums — it preserves the snap
- Use "Complex Pro" for full tracks or complex audio
- Right-click warp markers to "Warp From Here" for quick alignment`,
      },
      {
        title: "Sampling Techniques",
        content: `**Sampling is taking existing audio and making it your own.** It's one of the most creative tools in electronic music.

**Chopping:**
1. Import audio into Ableton
2. Use Ctrl+E to split at the playhead
3. Slice interesting parts into separate clips
4. Rearrange, pitch-shift, and process them
5. Ableton's Simpler/Sampler instruments can auto-slice

**Using Simpler (Ableton's built-in sampler):**
1. Drag audio onto a MIDI track
2. Ableton loads it in Simpler
3. Set start/end points, loop points
4. Play it chromatically with your MIDI controller/keyboard
5. "Slice" mode auto-chops at transients — play slices with MIDI notes

**Resampling (sampling yourself):**
1. Create a new audio track
2. Set its input to "Resampling" (captures whatever the master bus outputs)
3. Record your playing/performance
4. Now you have audio of your output to further process
5. This is the key technique for creating unique sounds

**Layering:**
- Combine multiple samples for richer textures
- Layer a drum hit with a synth transient
- Blend two vocal chops for a unique texture
- Always EQ each layer to avoid frequency buildup

**Where to find samples (free):**
- Splice (limited free credits)
- Freesound.org (100% free, Creative Commons)
- Ableton's built-in library (huge and excellent)
- Record your own (phone, laptop mic — real-world sounds are goldmines)`,
      },
      {
        title: "Automation — Adding Life to Your Tracks",
        content: `**Automation controls how parameters change over time.** It's what turns a static loop into a living, breathing track.

**What to automate:**
- Filter cutoff (gradual filter sweeps create motion)
- Volume (fade ins/outs, swell effects)
- Send amounts (reverb/delay increasing into breakdowns)
- Pan (movement in the stereo field)
- Any plugin parameter (Ableton can automate anything)
- Mix/Dry wet of effects

**How to add automation in Ableton:**
1. Click the Automation toggle (A key) or the small "A" button
2. Click a parameter on any device (it becomes the automation target)
3. Draw automation curves in the arrangement
4. Use breakpoints for precise control

**Automation shapes:**
- **Linear ramps:** Smooth, predictable changes (volume fades)
- **S-curves:** More natural feeling (filter sweeps)
- **Steps:** Sudden changes (on/off effects, rhythmic gating)
- **Hand-drawn:** Organic, unpredictable movement

**EDM automation essentials:**
- Filter sweep into the drop (automate low-pass filter opening over 8 bars)
- Reverb increase in breakdowns (automate send amount up)
- Volume automation on risers (gradually louder)
- Pan automation for ear candy (sounds moving left to right)
- Delay feedback automation for build effects (increase feedback during builds, cut at drop)

**The automation mindset:** Every section of your track should have SOMETHING moving. Static = boring. Even subtle automation (tiny filter movement, slight volume changes) keeps the listener engaged.

**Hands-on shortcut:** Press A to toggle automation view. Right-click any knob and select "Show Automation in New Lane" to quickly add automation.`,
      },
    ],
    tools: [
      {
        name: "Ableton Live",
        cost: "free",
        costNote: "Your DAW is the tool. Everything in this module is built-in.",
        url: "https://www.ableton.com/",
      },
      {
        name: "Freesound.org",
        cost: "free",
        costNote: "100% free Creative Commons samples. Huge library.",
        url: "https://freesound.org/",
      },
    ],
    handsOn: [
      {
        title: "Recreate a 30-Second Section Using Only Ableton Stock Tools",
        description:
          "Choose a 30-second section of a favorite EDM track. Recreate it using only Ableton's stock instruments (Operator, Analog, Simpler, Drum Rack) and effects. Focus on arrangement, automation, and transitions.",
        deliverable: "Ableton project file + audio bounce of your recreation + original track comparison notes",
      },
      {
        title: "Shortcut Speed Challenge",
        description:
          "Time yourself creating a basic 8-bar loop using keyboard shortcuts. Then learn 5 new shortcuts from this module and time yourself again. Document the time saved.",
        deliverable: "Before/after timing log + list of shortcuts you added to your workflow",
      },
      {
        title: "Sample Flip",
        description:
          "Find a sample from Freesound.org or Ableton's library. Warp it, chop it, reverse parts, pitch-shift, and create something completely new from it. Use resampling at least once.",
        deliverable: "Original sample + your flipped version + processing chain notes",
      },
    ],
    videos: [
      {
        title: "30 Essential Ableton Shortcuts to Work Faster!",
        url: "https://www.youtube.com/watch?v=-cVmiFfpj9k",
        channel: "Ableton Tips by PML",
        description: "Comprehensive shortcut guide that will immediately speed up your workflow.",
      },
      {
        title: "My Top 10 Tips After 10 Years In Ableton",
        url: "https://www.youtube.com/watch?v=AQ-0MHT-lAU",
        channel: "Ethan Davis",
        description: "Hard-won workflow wisdom from a decade of Ableton experience.",
      },
      {
        title: "Learn Live: Basic keyboard shortcuts",
        url: "https://www.youtube.com/watch?v=1hSPWWRIIbg",
        channel: "Ableton",
        description: "Official Ableton tutorial covering essential keyboard shortcuts.",
      },
    ],
    proTips: [
      "Learn 2 new shortcuts per week. In 3 months you'll be flying.",
      "Use Session View for brainstorming, Arrangement View for finalizing. Tab switches instantly.",
      "Automate SOMETHING in every section. Static = boring.",
      "Resampling is the most underused technique. Sample yourself to create unique sounds.",
      "Save your project as a template once you have your preferred tracks, routing, and effects set up.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// TRACK 1B: AI-POWERED MUSIC PRODUCTION
// ═══════════════════════════════════════════════════════════════

const TRACK_1B_MODULES: Module[] = [
  {
    id: "ai-prod-1",
    trackId: "ai-production",
    trackName: "AI-Powered Music Production",
    trackIcon: "🤖",
    number: 1,
    title: "AI-Assisted Mixing",
    subtitle: "iZotope Neutron, Sonible smart:EQ, and free AI mixing tools",
    xp: 200,
    estimatedHours: "4-6 hours",
    description:
      "Now that you understand mixing fundamentals (Track 1A), layer in AI tools that accelerate your workflow. This module covers iZotope Neutron, Sonible smart:EQ, TDR Nova (FREE), and how to use AI suggestions as a learning tool rather than a crutch.",
    sections: [
      {
        title: "TDR Nova — Free Dynamic EQ (Your Starting Point)",
        content: `**TDR Nova is 100% free** and it's a dynamic parametric EQ — meaning it responds to your audio in real-time.

**What makes it "AI-like":** The dynamic bands only activate when a frequency crosses a threshold. It's like having a mixing engineer who adjusts EQ moment-by-moment.

**Practical use:**
1. Place TDR Nova on a problematic track (or the mix bus)
2. Set up a band around a problem frequency (e.g., 300 Hz mud)
3. Set the dynamic threshold so it only cuts when that frequency gets too loud
4. The result: intelligent EQ that fixes problems without dulling the sound when there's no problem

**This is where to start.** It's free, it's powerful, and the skills transfer to any AI mixing tool.

**Download:** https://www.tokyodawn.net/tdr-nova/`,
      },
      {
        title: "iZotope Neutron — AI Mix Assistant",
        content: `⚠️ **Cost reality check:** Neutron is NOT free.
- Elements: Sometimes free during promotions, ~$30-50 on sale
- Standard: $250+
- Check Plugin Boutique and iZotope's site for deals

**What it does:** Neutron's "Assistant View" analyzes your audio and suggests EQ, compression, and other processing settings. It listens to your track and proposes a starting point.

**How to use it wisely:**
1. Insert Neutron on a track
2. Run the Assistant
3. LISTEN to what it suggests — don't blindly accept
4. Take notes: what frequencies did it cut? What did it boost? Why might it have made those choices?
5. Try replicating those moves with free tools (TDR Nova, Ableton stock EQ)

**The learning approach:** Even on a trial, Neutron teaches you what a trained ear would do. That knowledge is permanent even after the trial ends.

**Better free alternative for learning:** Use TDR Nova + Youlean Loudness Meter + your ears. The AI suggestion is just a starting point — your judgment should always override it.`,
      },
      {
        title: "Sonible smart:EQ — AI That Learns Your Mix",
        content: `⚠️ **Cost reality check:** smart:EQ is €129. However, Sonible offers a 30-day free trial.

**What makes it special:** smart:EQ analyzes your audio profile and creates a target EQ curve based on genre norms. It shows you WHERE your audio differs from "good" and lets you decide how much correction to apply.

**Using the trial wisely:**
1. Download the 30-day trial
2. Run it on your current project's mix bus
3. Study what it suggests — what frequencies is it cutting/boosting?
4. Take detailed notes
5. After the trial, replicate those moves manually with TDR Nova (free)

**Key insight:** The AI isn't "fixing" your mix. It's showing you how your frequency balance compares to professionally mixed tracks. That comparison is the real value.`,
      },
      {
        title: "AI Mixing Workflow — Combining Human Ears + AI Tools",
        content: `**The ideal workflow is NOT "let AI do everything."** It's:

1. **Mix first with your ears** (using techniques from Track 1A modules)
2. **Run an AI analysis** (Neutron, smart:EQ, or even just SPAN against a reference)
3. **Compare AI suggestions to your choices** — where do they agree? Where do they differ?
4. **Make final decisions yourself** — you know your genre, your artistic intent, and your target

**Why this matters:** AI mixing tools are trained on "average good mixes." But EDM — especially dubstep — isn't average. A dubstep mix SHOULD have more bass than a pop mix. The AI might try to "fix" that.

**Your genre knowledge + AI analysis = better results than either alone.**

**Free AI mixing stack:**
1. TDR Nova (dynamic EQ) — your main surgical tool
2. TDR Kotelnikov (compressor) — transparent dynamics control
3. SPAN by Voxengo (analyzer) — compare against references visually
4. Youlean Loudness Meter — monitor levels
5. Ozone Imager (stereo) — check and adjust width

Total cost: $0. Seriously.`,
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
        name: "Sonible smart:EQ",
        cost: "free-trial",
        costNote: "30-day free trial, then €129. Use the trial to learn.",
        url: "https://www.sonible.com/smarteq/",
      },
      {
        name: "iZotope Neutron",
        cost: "paid",
        costNote: "Elements ~$30-50 on sale. NOT free. Check for deals.",
        url: "https://www.izotope.com/en/products/neutron.html",
      },
    ],
    handsOn: [
      {
        title: "AI-Assisted EQ Comparison",
        description:
          "Mix a track using only your ears and free tools (TDR Nova). Then, if you have a trial of Neutron or smart:EQ, run the AI and compare its suggestions to your choices. Document the differences.",
        deliverable: "Before/after audio + comparison notes on human vs AI decisions",
      },
      {
        title: "Build Your Free AI Mixing Chain",
        description:
          "Set up the complete free mixing chain (TDR Nova → TDR Kotelnikov → Ozone Imager → Youlean Meter) on a mix bus and process a full track through it.",
        deliverable: "Processed audio bounce + chain screenshots",
      },
    ],
    videos: [
      {
        title: "What's New in Neutron 4 | iZotope Mixing Software",
        url: "https://www.youtube.com/watch?v=2YMrhYcVNjM",
        channel: "iZotope, Inc.",
        description: "Official overview of Neutron's AI mixing capabilities.",
      },
      {
        title: "Everyone can mix now! || iZotope Neutron 4",
        url: "https://www.youtube.com/watch?v=4wqkUEvsNNI",
        channel: "White Sea Studio",
        description: "Honest review of AI mixing from an independent producer.",
      },
      {
        title: "How to Use Assistant View in Neutron 4",
        url: "https://www.youtube.com/watch?v=7xNbCIWe2lo",
        channel: "iZotope, Inc.",
        description: "Step-by-step tutorial of Neutron's AI assistant feature.",
      },
    ],
    proTips: [
      "AI mixing tools are training wheels, not autopilot. Learn why they make each suggestion.",
      "TDR Nova (free) does 90% of what paid AI EQ tools do. Start there.",
      "Always A/B your AI-processed mix against the unprocessed version. Better is not always louder.",
      "The best mix engineers use AI tools for speed, not for decision-making.",
    ],
  },
  {
    id: "ai-prod-2",
    trackId: "ai-production",
    trackName: "AI-Powered Music Production",
    trackIcon: "🤖",
    number: 2,
    title: "AI Mastering",
    subtitle: "LANDR, BandLab (FREE), iZotope Ozone, and CloudBounce",
    xp: 200,
    estimatedHours: "3-5 hours",
    description:
      "AI mastering services can get you 80% of the way to professional results for free or cheap. This module honestly reviews every major AI mastering option, shows you how to use free services effectively, and teaches A/B comparison techniques.",
    sections: [
      {
        title: "AI Mastering Services — Honest Breakdown",
        content: `**BandLab Mastering — FREE ✅**
- Built into BandLab's free DAW and available online
- Upload a WAV, get a mastered version back
- Quality: Decent for demos and learning. Can sound generic.
- Best for: Quick masters, learning what mastering sounds like
- **Verdict: Start here. It's free and teaches you what mastering does.**

**LANDR — FREEMIUM ⚠️**
- Free tier: Preview masters only. Downloading requires subscription.
- Basic plan: ~$6/month for MP3 downloads
- Creator plan: ~$12/month for WAV
- Quality: Better than BandLab. Has genre detection.
- **Verdict: Free preview useful for A/B. Only pay when releasing.**

**iZotope Ozone — PAID ⚠️**
- Elements ~$50 on sale (sometimes given away free in promos)
- Plugin for your DAW — full control
- AI "Master Assistant" analyzes and sets up a starting chain
- **Verdict: Best AI mastering if you catch a sale.**

**CloudBounce — FREEMIUM ⚠️**
- Free tier: Limited previews
- Plans from ~$9/month
- No significant advantage over LANDR

**Honest recommendation for $0 budget:** BandLab (free) + DIY mastering with free plugins (from Track 1A Module 2) is the move. Use LANDR's free preview for comparison only.`,
      },
      {
        title: "A/B Comparison Techniques",
        content: `**Level matching is CRITICAL.** When comparing masters, they MUST be the same loudness. Our brains perceive "louder" as "better."

**The workflow:**
1. Master your track with BandLab (free)
2. Master the same track yourself (DIY chain from Track 1A Module 2)
3. Import both into Ableton
4. Use Youlean Loudness Meter to match LUFS exactly
5. Solo back and forth rapidly — listen for:
   - Low end weight and tightness
   - Mid clarity and harshness
   - High frequency sparkle
   - Stereo width
   - Dynamic range (does one sound more "alive"?)

**What you'll learn:** AI mastering is good at loudness and basic tonal balance but often misses genre-specific nuances. Your DIY master might have better bass weight for dubstep because YOU know what dubstep should sound like.`,
      },
      {
        title: "When to Use AI Mastering vs DIY",
        content: `**Use AI mastering when:**
- You need a quick master for a demo or social media clip
- You're releasing and don't trust your mastering skills yet
- You want a second opinion to compare against your DIY master

**Use DIY mastering when:**
- You want maximum control over the final sound
- Your genre has specific requirements AI might miss (heavy bass, extreme loudness)
- You're learning and want to develop your ears
- Budget is $0 and you need WAV output

**The hybrid approach:** Master it yourself using your free chain, THEN run it through BandLab to compare. If the AI master sounds better, study what's different and apply those lessons to your DIY approach. If yours sounds better, you've just leveled up.`,
      },
    ],
    tools: [
      {
        name: "BandLab Mastering",
        cost: "free",
        costNote: "Completely free. Upload and master online.",
        url: "https://www.bandlab.com/mastering",
      },
      {
        name: "LANDR",
        cost: "freemium",
        costNote: "Free previews. Downloads require Basic ($6/mo) or Creator ($12/mo).",
        url: "https://www.landr.com/",
      },
      {
        name: "iZotope Ozone Elements",
        cost: "paid",
        costNote: "~$50 on sale. Check for free giveaways during promotions.",
        url: "https://www.izotope.com/en/products/ozone.html",
      },
    ],
    handsOn: [
      {
        title: "Master a Track Three Ways",
        description:
          "Take your best mix and master it 3 ways: (1) BandLab free AI mastering, (2) Your DIY free plugin chain, (3) LANDR preview. Level-match all three and rank them.",
        deliverable: "Three master bounces + written ranking with specific observations",
      },
      {
        title: "Learn from AI — Document the Differences",
        description:
          "Compare your DIY master to the BandLab AI master. For each frequency range (sub, bass, mids, highs), document what's different and what you'd change in your approach.",
        deliverable: "Detailed comparison document with frequency-by-frequency analysis",
      },
    ],
    videos: [
      {
        title: "Getting Started with LANDR Mastering Plugin",
        url: "https://www.youtube.com/watch?v=4cx-m6lCCxc",
        channel: "LANDR",
        description: "Official LANDR walkthrough of their AI mastering plugin.",
      },
      {
        title: "The Best Mastering Plugin for Beginners? | Landr Mastering Plugin Pro",
        url: "https://www.youtube.com/watch?v=77k92u_ZjjM",
        channel: "Bolo Da Producer",
        description: "Honest beginner-focused review of AI mastering tools.",
      },
      {
        title: "AI MASTERING and Why LANDR Is a Game-Changer for Indie Musicians",
        url: "https://www.youtube.com/watch?v=9Lzi30Io3Vs",
        channel: "AI Creatives Connect",
        description: "Practical look at how AI mastering fits into an indie workflow.",
      },
    ],
    proTips: [
      "Don't pay for AI mastering until you're releasing on streaming platforms.",
      "BandLab is free and teaches you what mastering sounds like. Start there.",
      "Level-match EVERYTHING when comparing masters. Louder ≠ better.",
      "AI mastering is a tool, not a replacement for understanding mastering concepts.",
    ],
  },
  {
    id: "ai-prod-3",
    trackId: "ai-production",
    trackName: "AI-Powered Music Production",
    trackIcon: "🤖",
    number: 3,
    title: "AI Sound Design",
    subtitle: "AI sample generators, AI synth tools, and creative AI applications",
    xp: 250,
    estimatedHours: "5-7 hours",
    description:
      "AI is opening up new frontiers in sound design — generating samples from text descriptions, creating hybrid instruments, and inspiring sounds you'd never think of. This module explores the best AI sound design tools and how to integrate them with your Vital + Ableton workflow.",
    sections: [
      {
        title: "AI Sound Design Tools Overview",
        content: `**Google Magenta — FREE ✅**
- Open-source AI tools for music creation
- NSynth: Creates new sounds by blending existing instruments
- Works in browser or downloadable
- Great for unusual textures and ambient layers
- Limitation: Not real-time. Generate, then import.
- URL: https://magenta.tensorflow.org/

**Splice AI Search — FREEMIUM ⚠️**
- AI finds samples based on text descriptions ("dark dubstep bass hit")
- Free tier: Very limited credits
- Starter: ~$8/month for 100 credits
- Good for inspiration, not a primary tool on $0

**AIVA — FREEMIUM ⚠️**
- AI composition tool — generates melodies and progressions
- Free: 3 downloads/month, non-commercial
- Useful for writer's block and melody ideas

**The honest truth:** Vital (free) + your creativity + experimentation beats any AI tool for sound design. AI is supplementary — good for inspiration and unusual textures, but YOUR hands-on design skills (from Track 1A Module 3) are the foundation.`,
      },
      {
        title: "Integrating AI-Generated Audio Into Your Workflow",
        content: `**The workflow for using AI-generated sounds:**
1. Generate audio using an AI tool (Magenta, AI sample generator, etc.)
2. Import the raw audio into Ableton
3. Process it through YOUR effects chain (EQ, distortion, reverb, granular)
4. Resample and further manipulate
5. The final sound is 10% AI, 90% YOUR processing

**Why processing matters:** Raw AI output often sounds generic or "uncanny." Your processing makes it musical, unique, and genre-appropriate.

**Creative applications:**
- Use AI textures as background layers (pad underneath your synths)
- AI-generated drum one-shots as starting points (then layer and process)
- AI melodic suggestions as inspiration (change the notes, keep the rhythm)
- Granular processing on AI audio for ambient soundscapes

**The key principle:** Use AI as a starting point, never as the final product.`,
      },
      {
        title: "AI for Inspiration and Writer's Block",
        content: `**When you're stuck, AI can help you break through:**

**ChatGPT/Claude for sound design ideas:**
- "Describe 5 unique bass sound design techniques I haven't tried"
- "How would I create a bass that sounds like a broken robot?"
- "Give me a synthesis chain for an eerie ambient pad"

**AI for chord progressions:**
- Ask ChatGPT for chord progressions in a specific key and genre
- Use AIVA to generate a melodic seed, then modify it
- Feed your chord progression into an AI and ask for variations

**AI for arrangement ideas:**
- "I have a 140 BPM dubstep track with a growl bass drop. Suggest 3 different breakdown ideas."
- "How can I transition from a melodic section to an aggressive drop?"

**The balance:** AI suggestions are starting points. Your ears and taste are the final arbiters. The best producers use AI for speed and inspiration, then apply their own judgment.`,
      },
    ],
    tools: [
      {
        name: "Google Magenta",
        cost: "free",
        costNote: "100% free and open source. Browser-based AI music tools.",
        url: "https://magenta.tensorflow.org/",
      },
      {
        name: "AIVA",
        cost: "freemium",
        costNote: "Free: 3 downloads/month, non-commercial.",
        url: "https://www.aiva.ai/",
      },
      {
        name: "Vital Synth",
        cost: "free",
        costNote: "Free tier has full synthesis engine.",
        url: "https://vital.audio/",
      },
    ],
    handsOn: [
      {
        title: "Generate and Process an AI Texture",
        description:
          "Use Google Magenta or another free AI tool to generate a sound. Import it into Ableton, process it through at least 4 effects, and create something musical with it.",
        deliverable: "Raw AI audio + processed version + processing chain notes",
      },
      {
        title: "AI-Inspired Sound Design Session",
        description:
          "Ask ChatGPT or Claude to describe 3 unique sounds. Attempt to create each one in Vital. Document how close you got and what you learned.",
        deliverable: "3 audio files + the AI descriptions + your design notes",
      },
    ],
    videos: [
      {
        title: "7 Best AI Music Production Tools You NEED to Try!",
        url: "https://www.youtube.com/watch?v=0mNdl72mkXM",
        channel: "LANDR",
        description: "Curated overview of the most useful AI production tools.",
      },
      {
        title: "I tried 100 AI Music Tools… These are the ONLY ones worth using",
        url: "https://www.youtube.com/watch?v=1oj0Usyy_ds",
        channel: "Music By Mattie",
        description: "Honest review filtering signal from noise in AI music tools.",
      },
      {
        title: "The Best A.I. Production Tools For Music Makers! (2024)",
        url: "https://www.youtube.com/watch?v=3-jnFnrOWjg",
        channel: "Will Hatton",
        description: "Practical guide to AI tools that actually help in production.",
      },
    ],
    proTips: [
      "AI-generated sounds need heavy processing to be musical. Raw AI output is just a starting point.",
      "Use AI for textures and layers, not for your main sounds. Your designed sounds should be the star.",
      "ChatGPT/Claude are underrated sound design tools — describe what you want and they'll suggest synthesis approaches.",
      "The best producers already use AI without calling it that — Splice's recommendation engine, auto-tune, etc.",
    ],
  },
  {
    id: "ai-prod-4",
    trackId: "ai-production",
    trackName: "AI-Powered Music Production",
    trackIcon: "🤖",
    number: 4,
    title: "AI Music Analysis & Trend Research",
    subtitle: "Spotify data, AI reference track analysis, and trend research",
    xp: 200,
    estimatedHours: "4-5 hours",
    description:
      "The best producers don't just make music — they study it. This module teaches you how to use AI tools and data to systematically analyze what's working in your genre, understand trends, and make smarter creative decisions.",
    sections: [
      {
        title: "AI-Powered Reference Track Analysis",
        content: `**Using AI assistants to study tracks:**

Ask ChatGPT or Claude:
- "I'm analyzing a dubstep track. The drop has heavy sub bass, distorted mid-range growls, and snappy drums. What frequency ranges should I focus on for each element?"
- "Help me create an arrangement template for a 3-minute future bass track with 2 drops"
- "What makes Excision's bass design different from Virtual Riot's? Describe the sound design approach."

**SPAN + AI = smart analysis:**
1. Import a reference track into Ableton
2. Use SPAN to capture the frequency spectrum
3. Screenshot the spectrum
4. Ask an AI: "This is the frequency spectrum of a professional dubstep track. What can I learn from the balance?"

**AI for trend identification:**
- "What are the 5 biggest production trends in dubstep in 2025-2026?"
- "How has future bass evolved from 2020 to 2025?"
- "What production techniques are trending on SoundCloud right now?"

**The combination:** Your ears + visual analysis tools (SPAN) + AI interpretation = deep understanding that would take years to develop otherwise.`,
      },
      {
        title: "Spotify Data and Platform Insights",
        content: `**What you can learn from Spotify (without releases):**
- **"Fans Also Like":** Understand your niche neighborhood
- **Playlist placements:** Which genres/subgenres are growing?
- **Release frequency:** How often do top artists in your genre release?
- **Track lengths:** What's the optimal track length for your genre?

**Spotify for Artists (when you have releases):**
- Demographics of your listeners
- Which playlists are driving streams
- Real-time stream counts
- Listener geography

**AI for music market research:**
- Ask AI to analyze trends: "What subgenres of EDM are growing fastest on Spotify in 2026?"
- Ask for release strategy advice: "When is the best time to release a dubstep track on Spotify?"
- Get playlist research help: "List 20 independent Spotify playlists that feature dubstep/bass music"

**YouTube analytics for research:**
- Study view counts on music videos vs tutorials
- Read comments to understand what listeners love
- Check upload frequency of successful channels
- Use YouTube's search suggestions to identify popular topics`,
      },
      {
        title: "Building Your Research System",
        content: `**Create a monthly research routine:**

**Week 1:** Analyze 2-3 new tracks in your genre using the 10-listen method (from Track 1A Module 4)
**Week 2:** Check what's trending on SoundCloud, Spotify editorial playlists, and YouTube
**Week 3:** Study one specific production technique in depth (from a reference track)
**Week 4:** Apply findings to your own production

**Tools for your research workflow:**
1. SPAN — visual frequency analysis
2. ChatGPT/Claude — interpretation and trend research
3. Spotify/SoundCloud — market data and trend tracking
4. A notes file — document everything you learn

**AI prompt templates for research:**
- "Analyze the production elements of [artist name]'s latest release. What techniques are they using?"
- "Compare the arrangement structure of [track A] vs [track B]. What differences would affect listener engagement?"
- "Based on current EDM trends, what sound design techniques should a beginner dubstep producer focus on?"`,
      },
    ],
    tools: [
      {
        name: "SPAN by Voxengo",
        cost: "free",
        costNote: "100% free spectrum analyzer.",
        url: "https://www.voxengo.com/product/span/",
      },
      {
        name: "ChatGPT / Claude",
        cost: "free",
        costNote: "Free tiers available for both. Your AI research assistants.",
        url: "https://chat.openai.com/",
      },
    ],
    handsOn: [
      {
        title: "AI-Assisted Deep Analysis of 3 Tracks",
        description:
          "Analyze 3 reference tracks using a combination of SPAN (visual) and AI (interpretation). For each track, document the arrangement, frequency balance, and production techniques. Use AI to help interpret what you're seeing/hearing.",
        deliverable: "Analysis document with SPAN screenshots + AI-assisted observations",
      },
      {
        title: "Trend Research Report",
        description:
          "Use AI tools to research current trends in your genre. Document: 5 trending production techniques, 3 growing subgenres, and 10 playlists to target.",
        deliverable: "Trend research report with actionable insights",
      },
    ],
    videos: [
      {
        title: "Spotify Uses AI To Revolutionize The Music Industry",
        url: "https://www.youtube.com/watch?v=1l27Gj3mD8o",
        channel: "Bernard Marr",
        description: "How AI is changing music discovery and what it means for producers.",
      },
      {
        title: "Spotify Finally Addresses AI Music",
        url: "https://www.youtube.com/watch?v=2WRsNPUsTf0",
        channel: "Bubble Brian",
        description: "Latest Spotify policy on AI-generated music and what producers need to know.",
      },
      {
        title: "So It Begins...Is This A Real Band Or AI?",
        url: "https://www.youtube.com/watch?v=3Nlb-m_vKYM",
        channel: "Rick Beato",
        description: "Rick Beato's analysis of AI in the music industry landscape.",
      },
    ],
    proTips: [
      "Create a Spotify playlist of 20 reference tracks. Update it monthly.",
      "Use AI to explain WHAT you're hearing in reference tracks. It accelerates ear development.",
      "Track your research in a document. Over time, you'll see patterns and trends emerge.",
      "The producers who study music AND make music improve 5x faster than those who only make.",
    ],
  },
  {
    id: "ai-prod-5",
    trackId: "ai-production",
    trackName: "AI-Powered Music Production",
    trackIcon: "🤖",
    number: 5,
    title: "AI Visuals & Branding",
    subtitle: "Leonardo.ai, Canva AI (FREE), CapCut AI, and producer branding",
    xp: 200,
    estimatedHours: "4-6 hours",
    description:
      "Your music is only half the game. Visual branding, AI-generated artwork, and video content determine whether anyone actually FINDS your tracks. This module covers free AI tools for album art, building a visual brand, and planning releases.",
    sections: [
      {
        title: "AI Album Art & Visual Tools (Free)",
        content: `**Leonardo.ai — FREE TIER ✅**
- 150 free tokens/day (~10-15 images)
- High quality AI image generation
- Style options: cyberpunk, abstract, dark fantasy — perfect for EDM
- Prompt example: "Dark cyberpunk album cover art, neon purple and cyan, abstract bass waves, dubstep aesthetic, no text, 1:1 ratio"
- URL: https://leonardo.ai/

**Canva AI — FREE TIER ✅**
- Free plan includes AI image generation (limited), templates, design tools
- Best for: Social media posts, YouTube thumbnails, story templates
- Music-specific templates available
- URL: https://www.canva.com/

**Microsoft Designer — FREE ✅**
- Free with Microsoft account
- AI image generation + templates
- Decent quality, not as artistic as Leonardo
- URL: https://designer.microsoft.com/

**CapCut — FREE ✅**
- Free video editor with AI features
- Auto-captions, background removal, audio visualizers
- Template-based music videos in minutes
- URL: https://www.capcut.com/`,
      },
      {
        title: "Building a Producer Brand from Zero",
        content: `**Your brand is:**
- Producer name (memorable, unique, searchable)
- Visual aesthetic (colors, style, vibe)
- Genre identity (what listeners expect from you)
- Consistency across all platforms

**Brand consistency checklist:**
- Same profile pic across ALL platforms
- Same color scheme on all artwork
- Consistent bio/description
- Regular release schedule

**AI-powered brand building:**
1. Use Leonardo.ai to generate visual concepts (try 10+ variations)
2. Pick a color palette from your favorite result
3. Use Canva to create matching social media templates
4. Apply the same style to all future artwork

**The truth:** Nobody has a brand when they start. You build it by consistently releasing music and content. Start ugly and iterate.`,
      },
      {
        title: "Music Videos and Visual Content on $0",
        content: `**CapCut — your free video editor:**
- Audio visualizer templates for quick "lyric" videos
- AI auto-captions for behind-the-scenes content
- Screen recording of Ableton sessions = authentic content

**DaVinci Resolve — FREE professional editor:**
- Full professional editor, same level as Premiere Pro
- Free version has 95% of features
- Steeper learning curve but way more powerful

**Content strategy for producers:**
1. Audio visualizer with album art (30 min to create in CapCut)
2. Behind-the-scenes production clips (screen record Ableton)
3. Short-form clips for TikTok/Reels (15-30 seconds of your best moments)
4. "How I made this" breakdowns (educational + promotional)

**Release strategy basics:**
- 4 weeks out: Finalize track + create artwork
- 3 weeks: Upload to distributor (Amuse free tier, or DistroKid ~$23/year)
- 2 weeks: Start teasing on socials
- 1 week: Pre-save campaign
- Release day: Post everywhere, engage with every comment`,
      },
    ],
    tools: [
      {
        name: "Leonardo.ai",
        cost: "free",
        costNote: "150 free tokens/day. Excellent for album art.",
        url: "https://leonardo.ai/",
      },
      {
        name: "Canva",
        cost: "free",
        costNote: "Free plan has tons of templates.",
        url: "https://www.canva.com/",
      },
      {
        name: "CapCut",
        cost: "free",
        costNote: "Free for most features.",
        url: "https://www.capcut.com/",
      },
      {
        name: "DaVinci Resolve",
        cost: "free",
        costNote: "Free version is professional-grade.",
        url: "https://www.blackmagicdesign.com/products/davinciresolve",
      },
    ],
    handsOn: [
      {
        title: "Create Album Art with AI",
        description:
          "Use Leonardo.ai to generate 5+ variations of album art. Pick the best, refine the prompt, create a final 3000x3000 image.",
        deliverable: "Final album art image + the prompts you used",
      },
      {
        title: "Build Your Visual Brand Kit",
        description:
          "Using Canva, create: (1) Profile picture/logo, (2) Banner image, (3) Instagram post template, (4) Color palette document.",
        deliverable: "Brand kit images + brand identity document",
      },
    ],
    videos: [
      {
        title: "Create Your Own AI Album Cover (The Easiest Way)",
        url: "https://www.youtube.com/watch?v=2e44v4w3w0A",
        channel: "Meta Mind Music",
        description: "Step-by-step guide to creating album art with AI tools.",
      },
      {
        title: "How to make album covers and music videos with AI",
        url: "https://www.youtube.com/watch?v=48F-JvAMjyQ",
        channel: "Together",
        description: "Comprehensive tutorial covering AI visuals for musicians.",
      },
      {
        title: "How To Start an AI Music YouTube Channel (WITH Monetization)",
        url: "https://www.youtube.com/watch?v=1D4FAvqy8aQ",
        channel: "Paul J Lipsky",
        description: "How to build a music presence on YouTube using AI tools.",
      },
    ],
    proTips: [
      "Album art is the first thing people see. Bad art = people scroll past.",
      "Consistent visual branding makes you look 10x more professional.",
      "Don't wait for perfection. Release early, release often.",
      "Engage with comments — networking > marketing at this stage.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// TRACK 2: AI SIDE INCOME
// ═══════════════════════════════════════════════════════════════

const TRACK_2_MODULES: Module[] = [
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
- Best for: General writing, brainstorming, coding help
- URL: https://chat.openai.com/

**Claude (Free Tier) ✅**
- What you get: Claude 3.5 Sonnet access with daily limits
- Best for: Long-form writing, nuanced analysis, coding
- URL: https://claude.ai/

**Gemini (Free) ✅**
- What you get: Gemini Pro, Google integration
- Best for: Research, Google Workspace, image analysis
- URL: https://gemini.google.com/

**Perplexity (Free) ✅**
- What you get: 5 Pro searches/day, unlimited basic searches
- Best for: Research, fact-checking, finding sources
- URL: https://www.perplexity.ai/`,
      },
      {
        title: "Free Creative & Design Tools",
        content: `**Canva AI (Free) ✅** — Templates, AI generation, Magic Write
**Leonardo.ai (Free) ✅** — 150 tokens/day, best free AI image generator
**Microsoft Designer (Free) ✅** — AI image generation + templates
**Grammarly (Free) ✅** — Spelling, grammar, basic tone detection`,
      },
      {
        title: "The Strategic Free Tier Rotation",
        content: `**The daily workflow:**
1. Morning: Claude for deep writing/analysis (30 messages)
2. Midday: ChatGPT for quick tasks, brainstorming, images
3. Afternoon: Gemini for research with web access
4. Perplexity for fact-checking
5. End of day: Grok for social media insights

Each tool has a daily limit, but they reset independently. Cycle through them.

**When to upgrade (NOT NOW):**
- Only after earning $100+/month
- First upgrade: ChatGPT Plus ($20/mo) — most versatile
- Second upgrade: Claude Pro ($20/mo) — best for writing`,
      },
    ],
    tools: [
      { name: "ChatGPT", cost: "free", costNote: "Free tier with GPT-4o (limited).", url: "https://chat.openai.com/" },
      { name: "Claude", cost: "free", costNote: "Free tier with Claude 3.5 Sonnet.", url: "https://claude.ai/" },
      { name: "Gemini", cost: "free", costNote: "Free with Google account.", url: "https://gemini.google.com/" },
      { name: "Perplexity", cost: "free", costNote: "Free: unlimited basic, 5 Pro/day.", url: "https://www.perplexity.ai/" },
      { name: "Leonardo.ai", cost: "free", costNote: "150 free tokens/day.", url: "https://leonardo.ai/" },
      { name: "Canva", cost: "free", costNote: "Free tier very usable.", url: "https://www.canva.com/" },
    ],
    handsOn: [
      {
        title: "Set Up All Free AI Accounts",
        description: "Create accounts on ALL free tools listed. Test each with the same prompt and compare outputs.",
        deliverable: "Screenshot of all accounts + comparison document",
      },
      {
        title: "One-Day Free Tier Rotation",
        description: "Spend one full day using ONLY free AI tools. Log which tool for each task and limitations hit.",
        deliverable: "Day log with tools used, tasks completed, and limitations",
      },
    ],
    videos: [
      {
        title: "Top Free AI Tools 2025 | 26,000+ AI Tools Directory",
        url: "https://www.youtube.com/watch?v=-pkUIFqXlCE",
        channel: "DolphyAI",
        description: "Comprehensive directory of free AI tools across categories.",
      },
      {
        title: "120 mind blowing AI tools",
        url: "https://www.youtube.com/watch?v=0MQEf_7qk4s",
        channel: "SetupsAI",
        description: "Quick-fire overview of the most useful AI tools available.",
      },
      {
        title: "ChatGPT | Best AI Tools | Prompt Engineering Full Course",
        url: "https://www.youtube.com/watch?v=4eFYlFXijO0",
        channel: "Learnopedia Academy",
        description: "Full course covering ChatGPT, AI tools, and prompt engineering basics.",
      },
    ],
    proTips: [
      "Don't pay for ANY AI tool until earning at least $100/month.",
      "Claude is better at writing. ChatGPT is more versatile. Gemini is best for research.",
      "Save your best prompts in a text file. Your prompt library is your most valuable asset.",
      "Free tiers change monthly. Check what's included regularly.",
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
      "Income methods ranked by how fast you can realistically get paid, starting from zero. No hype — real timelines and real strategies.",
    sections: [
      {
        title: "Income Methods Ranked by Speed",
        content: `**🥇 #1: AI-Assisted Freelance Writing (1-2 weeks)**
- Platforms: Fiverr, Upwork (free to join)
- What: Blog posts, articles, social media copy
- First gig: $15-50 for a blog post, 1-2 hours with AI

**🥈 #2: Resume & Cover Letter Services (1-3 weeks)**
- Platform: Fiverr
- Charge: $25-75 per resume
- AI does 70%, your value is formatting and human touch

**🥉 #3: AI-Powered Virtual Assistance (2-4 weeks)**
- Platforms: Upwork, local businesses
- Rate: $15-25/hour
- Email, scheduling, data entry — all faster with AI

**#4: Social Media Content Creation (2-4 weeks)**
- Target: Local businesses
- Package: "30 posts for $200"`,
      },
      {
        title: "Setting Up on Freelance Platforms",
        content: `**Fiverr Setup (Free):**
1. Professional photo, clear bio mentioning AI skills
2. Create 2-3 gigs: blog posts ($25-50), resumes ($30-75), social media ($100-200/month)

**THE KEY RULE:** Never deliver raw AI output. Always edit, personalize, and add genuine value.`,
      },
      {
        title: "Scam Awareness",
        content: `🚩 "$997 course to learn the secret" — scam
🚩 "$10K/month passively with no work" — doesn't exist
🚩 "Guaranteed income promises" — run

**What actually works:** Building real skills, providing genuine value, consistent effort over months.`,
      },
    ],
    tools: [
      { name: "Fiverr", cost: "free", costNote: "Free to join. 20% fee on sales.", url: "https://www.fiverr.com/" },
      { name: "Upwork", cost: "free", costNote: "Free to join. Limited free proposals.", url: "https://www.upwork.com/" },
    ],
    handsOn: [
      {
        title: "Create Profiles on 2 Freelance Platforms",
        description: "Set up complete profiles on Fiverr AND Upwork with professional bios and gig listings.",
        deliverable: "Screenshots of both completed profiles",
      },
      {
        title: "Complete a Sample Project",
        description: "Complete one full sample deliverable as a portfolio piece.",
        deliverable: "Your completed sample (blog post, resume, or social media pack)",
      },
    ],
    videos: [
      {
        title: "how to make your first $1,000 online with AI (No-BS Guide)",
        url: "https://www.youtube.com/watch?v=4gGWba-6nOk",
        channel: "Nick Saraev",
        description: "Practical, no-hype guide to earning your first income with AI.",
      },
      {
        title: "How to Find Freelance Data & AI Projects",
        url: "https://www.youtube.com/watch?v=66Y02L2OhEs",
        channel: "Dave Ebbelaar",
        description: "Where to find real AI freelance gigs and how to land them.",
      },
      {
        title: "How To MAKE MONEY WITH AI In 2026 | 5 AI Side Hustles",
        url: "https://www.youtube.com/watch?v=5cKnQL2LVEE",
        channel: "Career Pilot",
        description: "Current AI side hustle opportunities with realistic expectations.",
      },
    ],
    proTips: [
      "First 5 gigs: price LOW to get reviews. Reviews are currency on platforms.",
      "Never deliver raw AI output. Always edit and personalize.",
      "Respond to messages within 1 hour. Speed wins gigs.",
      "Track your time. If under $10/hour, raise prices or work faster.",
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
      "Digital products are the holy grail: create once, sell infinitely. This module shows you how to create and sell digital products using 100% free tools.",
    sections: [
      {
        title: "What to Sell",
        content: `**1. Prompt/Template Packs — Easiest**
- Collections of tested AI prompts. Sell for $5-15 on Gumroad (free to list, 10% fee).

**2. Social Media Content Packs**
- Canva templates. "60 Instagram Templates for Fitness Coaches" — $10-25.

**3. AI-Assisted Ebooks**
- Short guides (30-50 pages). Sell on Gumroad or Amazon KDP (free).

**4. Print-on-Demand Designs**
- AI art on Redbubble (FREE). $2-8 profit per sale.`,
      },
      {
        title: "Creating Your First Digital Product",
        content: `**Step-by-step prompt pack creation:**
1. Choose a niche you know
2. Create 25-50 tested prompts (2-3 hours)
3. Format in Canva or Google Docs (1 hour)
4. List on Gumroad (30 minutes)
5. Promote: Twitter/X, Reddit, TikTok

**Free sample strategy:** Give away 5 prompts free → drives traffic to paid version.`,
      },
    ],
    tools: [
      { name: "Gumroad", cost: "free", costNote: "Free to list. 10% fee on sales.", url: "https://gumroad.com/" },
      { name: "Redbubble", cost: "free", costNote: "100% free. They print and ship.", url: "https://www.redbubble.com/" },
      { name: "Amazon KDP", cost: "free", costNote: "Free to publish ebooks.", url: "https://kdp.amazon.com/" },
    ],
    handsOn: [
      {
        title: "Create and List a Digital Product",
        description: "Create ONE complete digital product and list it for sale on Gumroad.",
        deliverable: "Screenshot of live Gumroad listing + the product file",
      },
    ],
    videos: [
      {
        title: "GUMROAD TUTORIAL - How To Sell Digital Products Online",
        url: "https://www.youtube.com/watch?v=1O0DGCxJ3jI",
        channel: "Aurelius Tjin",
        description: "Complete Gumroad walkthrough for selling digital products.",
      },
      {
        title: "6 Realistic Etsy Digital Products to Sell Online using AI",
        url: "https://www.youtube.com/watch?v=5LY-1Az6fKM",
        channel: "Kate Hayes",
        description: "Practical AI digital product ideas with realistic expectations.",
      },
      {
        title: "I Tried Selling Digital Products for 90 Days",
        url: "https://www.youtube.com/watch?v=6NE2Shwr9gk",
        channel: "Tim Koa",
        description: "Honest account of the digital products journey with real numbers.",
      },
    ],
    proTips: [
      "First product doesn't need to be perfect. Ship it, get feedback, improve.",
      "Price first product at $5-7. Low enough to impulse buy.",
      "Study what's selling on Gumroad/Etsy before creating.",
      "Create a free lead magnet to build an email list.",
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
      "Content creation is a long-term play but the most sustainable income source. YouTube/TikTok presence using free AI tools.",
    sections: [
      {
        title: "Realistic Monetization Timeline",
        content: `**YouTube:** 1,000 subs + 4,000 watch hours = 6-18 months. First ad revenue: $50-200/month.
**TikTok:** 10,000 followers + 100K views/30 days. Can grow faster than YouTube.

**Real money comes from:** Affiliate links, digital products, sponsorships, freelance clients from content — not just ads.`,
      },
      {
        title: "Faceless Content with Free Tools",
        content: `**Content ideas:** AI tool reviews, "how I made this beat," AI vs Human comparisons, free tool tutorials.

**Free tool workflow:**
1. Script: Claude/ChatGPT
2. Recording: OBS Studio (FREE)
3. Editing: CapCut (FREE) or DaVinci Resolve (FREE)
4. Thumbnails: Canva (FREE)

**Schedule for 5-10 hours/week:** 2 YouTube videos + 3-5 TikToks + community engagement.`,
      },
    ],
    tools: [
      { name: "OBS Studio", cost: "free", costNote: "100% free. Screen recording/streaming.", url: "https://obsproject.com/" },
      { name: "CapCut", cost: "free", costNote: "Free for most features.", url: "https://www.capcut.com/" },
      { name: "DaVinci Resolve", cost: "free", costNote: "Free professional-grade editor.", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
    ],
    handsOn: [
      {
        title: "Create and Post 3 Pieces of Content",
        description: "Create and actually post: 1 YouTube Short, 1 longer tutorial, 1 social media post.",
        deliverable: "Links to posted content + raw video files",
      },
    ],
    videos: [
      {
        title: "Create a VIRAL Faceless AI YouTube Channel for FREE & Automate It",
        url: "https://www.youtube.com/watch?v=1KKN03qwz3M",
        channel: "AI4Next",
        description: "Full tutorial on building an automated faceless YouTube channel.",
      },
      {
        title: "The best Faceless YouTube niche EXPOSED",
        url: "https://www.youtube.com/watch?v=4bV0l1dPKb0",
        channel: "AI Century",
        description: "Data-driven analysis of the most profitable faceless niches.",
      },
      {
        title: "How I Created a $10,000/month Faceless YouTube Channel",
        url: "https://www.youtube.com/watch?v=6sGGj7e2kqU",
        channel: "Divine Kennedy",
        description: "Case study of building a successful faceless channel with AI tools.",
      },
    ],
    proTips: [
      "Consistency beats quality at the start. Post regularly.",
      "Your first 20 videos will probably suck. That's fine.",
      "Study analytics. Double down on what gets views.",
      "Reply to EVERY comment in your first year.",
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
      "Once you're earning, how do you scale? Micro-SaaS ideas, AI automation services, and building toward sustainable income.",
    sections: [
      {
        title: "The Scaling Path",
        content: `**Phase 1: $0-$500/month** — Freelancing + digital products
**Phase 2: $500-$2K/month** — Raise rates, productize services, recurring clients
**Phase 3: $2K-$5K/month** — Micro-SaaS, hire help, multiple streams`,
      },
      {
        title: "Micro-SaaS Ideas",
        content: `Build with free tools: Cursor (free tier), Replit (free), Bolt.new (free), Vercel (free), Supabase (free).

**Ideas:**
1. AI Prompt Library Tool ($5-10/month)
2. Content Calendar Generator ($10/month)
3. Local Business Social Post Generator ($15/month)

**Start with the one that interests you most and aligns with your skills.**`,
      },
      {
        title: "AI Automation for Local Businesses",
        content: `**Services to offer:**
- Automated email responses: $200-500 setup + $50/month
- Social media automation: $200-400/month retainer
- Customer FAQ chatbot: $500-1000 setup + $100/month
- Review response automation: $100-200/month

**Find clients:** Businesses you know, local Facebook groups, cold outreach.`,
      },
    ],
    tools: [
      { name: "Cursor", cost: "freemium", costNote: "Free tier: 2000 completions/month.", url: "https://cursor.sh/" },
      { name: "Vercel", cost: "free", costNote: "Free hosting for personal projects.", url: "https://vercel.com/" },
      { name: "Supabase", cost: "free", costNote: "Generous free tier.", url: "https://supabase.com/" },
    ],
    handsOn: [
      {
        title: "Validate a Micro-SaaS Idea",
        description: "Research 3 ideas. Document: problem, audience, pricing, tools, competitive advantage.",
        deliverable: "Idea validation document with all 3 analyzed",
      },
    ],
    videos: [
      {
        title: "How I Built a SaaS Startup (From Idea to Revenue)",
        url: "https://www.youtube.com/watch?v=180KJQryGwc",
        channel: "Kevin Park",
        description: "Real story of building a SaaS from zero to paying customers.",
      },
      {
        title: "I Built 3 SaaS Apps to $200K MRR: Here's My Exact Playbook",
        url: "https://www.youtube.com/watch?v=67zh8_yiPh4",
        channel: "Starter Story",
        description: "Detailed playbook for building multiple successful SaaS products.",
      },
      {
        title: "11 AI Micro-SaaS Ideas to Start in 7 Days in 2026",
        url: "https://www.youtube.com/watch?v=EXAbBDUqwAc",
        channel: "Riley Ghiles Ikni",
        description: "Current micro-SaaS opportunities with quick build timelines.",
      },
    ],
    proTips: [
      "Don't try to scale before you have income. Master Modules 1-4 first.",
      "Best business ideas come from problems you've personally experienced.",
      "Talk to potential customers BEFORE building.",
      "Recurring revenue (subscriptions) is 10x more valuable than one-time sales.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// TRACK 3: AI POWER USER
// ═══════════════════════════════════════════════════════════════

const TRACK_3_MODULES: Module[] = [
  {
    id: "power-1",
    trackId: "poweruser",
    trackName: "AI Power User",
    trackIcon: "⚡",
    number: 1,
    title: "Prompt Engineering with Logic",
    subtitle: "Your propositional logic background is a superpower here",
    xp: 200,
    estimatedHours: "5-7 hours",
    description:
      "You already understand propositional logic — IF/THEN, AND/OR, structured reasoning. That puts you ahead of 95% of AI users. This module turns that foundation into practical prompt engineering mastery, including the Anthropic 10-part framework used by professional AI builders.",
    sections: [
      {
        title: "The Anatomy of a Great Prompt",
        content: `**Most people write prompts like this:**
"Write me a blog post about AI"

**You should write prompts like this:**
"You are an experienced tech journalist writing for a beginner audience. Write a 1000-word blog post about how small businesses can use free AI tools in 2026. Structure: Hook paragraph → 3 specific tools with use cases → common mistakes to avoid → action steps. Tone: conversational but authoritative. Include specific examples, not vague claims."

**The 5-Part CRAFT Framework:**
- **C**ontext: Background info the AI needs
- **R**ole: Who should the AI be?
- **A**ction: What specifically should it do?
- **F**ormat: How should the output look?
- **T**one: What style/voice?`,
      },
      {
        title: "The Anthropic 10-Part Prompt Framework",
        content: `This framework is used by Anthropic (the company behind Claude) and professional AI engineers. It's the most comprehensive prompt structure available.

**The 10 Components:**

**1. Task Context — Who is the AI?**
Define the AI's role, expertise, and identity. "You are a senior mixing engineer with 15 years of EDM production experience."

**2. Tone Context — How should it communicate?**
Set the communication style. "Speak casually but accurately. Use analogies a beginner would understand. Avoid jargon unless you explain it immediately."

**3. Background Data — Documents and references**
Provide relevant information the AI needs. Paste in documents, reference material, or data. Use XML tags to structure it:
\`<reference_tracks>Track 1: Excision - Virus, Track 2: Illenium - Takeaway</reference_tracks>\`

**4. Detailed Rules — Dos and don'ts**
Explicit constraints. "Always recommend free tools before paid ones. Never suggest piracy. If you're unsure, say so. Don't use clichés like 'game-changer.'"

**5. Examples — Show good output**
Provide examples of what you want:
\`<example>Input: "Explain compression" → Output: "Compression is like an automatic volume knob that turns down loud parts and turns up quiet parts. Imagine someone riding a fader..."</example>\`

**6. Conversation History — Prior context**
In multi-turn conversations, reference what's been discussed. "Building on our earlier discussion of EQ fundamentals..."

**7. Immediate Request — The actual question**
The specific thing you want right now. "Given all of the above, write a 500-word guide on sidechain compression for dubstep producers."

**8. Think Step by Step — Reason before answering**
Ask the AI to reason through its answer. "Think through this step by step before providing your final answer."

**9. Output Formatting — Structure the response**
Specify exactly how you want the output structured. "Format as: Overview paragraph, then numbered steps, then a 'Common Mistakes' section with bullet points."

**10. Prefilled Response — Start the answer**
Give the AI the beginning of the response to guide its direction. "Start your response with: 'Sidechain compression is the heartbeat of EDM...'"

**You don't need all 10 every time.** Use what's relevant. But knowing all 10 gives you the full toolkit.`,
      },
      {
        title: "XML Tags and Advanced Techniques",
        content: `**XML tags structure your prompts for clarity:**

\`<guide>You are Mason's production assistant. Focus on dubstep and future bass.</guide>\`

\`<rules>
- Recommend free tools first
- Include specific frequency ranges
- Explain WHY, not just what
</rules>\`

\`<example>
Good output: "Set your high-pass filter at 80 Hz on the vocals. This removes low-frequency rumble without affecting the vocal clarity."
Bad output: "Use EQ on the vocals to make them sound better."
</example>\`

\`<request>Write a mixing checklist for a dubstep track.</request>\`

**Why XML tags work:** They create clear boundaries between different parts of your prompt. The AI knows exactly what's a rule vs an example vs the actual request.

**Comparing the 5-Part and 10-Part frameworks:**
The CRAFT framework (5-part) is great for quick, everyday prompts. The Anthropic 10-part framework is for when you need precision — building Custom GPTs, writing system prompts, or creating repeatable workflows.

Think of CRAFT as your pocket knife and the 10-part framework as your full toolbox.`,
      },
      {
        title: "Logic-Based Prompting Techniques",
        content: `**Your logic background lets you use these advanced techniques:**

**Chain-of-thought (IF → THEN reasoning):**
"Think through this step by step:
1. First, analyze the frequency balance
2. Based on that analysis, identify problem areas
3. Given those problems, recommend specific EQ moves
Show your reasoning at each step."

**Conditional prompting:**
"If the text contains technical jargon, simplify it. If it makes claims without evidence, flag them. If the user asks about a genre you don't specialize in, be honest."

**Constraint satisfaction:**
"Generate a social media post that satisfies ALL of these:
- Under 280 characters
- Contains exactly one call-to-action
- Uses no more than 3 hashtags
- Casual tone"

**Negation (what NOT to do):**
"Do NOT use clichés like 'game-changer' or 'revolutionary.' Do NOT make unverifiable claims. Do NOT exceed 150 words."`,
      },
      {
        title: "Case Study: Mason and Atlas Building the Video Prompt",
        content: `**Real story — how this platform was built:**

When building Mason's AI Edge, we (Atlas the AI + Katie as the human partner) needed to find 60 verified YouTube videos for 20 modules. Here's what happened:

**Attempt 1 — The naive approach:**
Prompt: "Give me 3 YouTube videos about mixing EQ compression for EDM."
Result: The AI generated plausible-looking URLs with realistic titles. Problem? The video IDs were INVENTED. None of them existed. The URLs returned 404 errors.

**Lesson: AI generates plausible text, not verified facts.** This is called "hallucination" — the AI produces text that LOOKS correct but isn't grounded in reality.

**Attempt 2 — The verification approach:**
Instead of asking AI to generate URLs, we:
1. Searched YouTube directly (fetched real search results)
2. Extracted actual video IDs from the HTML
3. Verified EVERY video via YouTube's oembed API
4. Only used videos that returned valid titles

**The prompt engineering lesson:**
- Don't ask AI for factual data it can't verify (URLs, statistics, quotes)
- DO use AI for reasoning, analysis, and creative work
- Build verification into your workflow
- "Trust but verify" — especially with links and numbers

**This applies to your freelance work too:** When writing content with AI, always fact-check claims, verify links, and confirm statistics. Raw AI output needs human verification.

**The 10-part framework in action:**
The prompt that finally worked for video research used:
1. Task context (you're finding verified YouTube videos)
2. Detailed rules (DO NOT invent IDs, verify via oembed)
3. Examples (here's what a verified video looks like)
4. Think step by step (search first, then verify, then select)
5. Output formatting (title, channel, URL, year, description)

Five of the ten components, applied precisely. That's the framework in practice.`,
      },
    ],
    tools: [
      { name: "ChatGPT", cost: "free", costNote: "Free tier. Custom GPTs available.", url: "https://chat.openai.com/" },
      { name: "Claude", cost: "free", costNote: "Free tier. Projects feature for organized work.", url: "https://claude.ai/" },
      { name: "Prompt Engineering Guide", cost: "free", costNote: "Free open-source guide.", url: "https://www.promptingguide.ai/" },
    ],
    handsOn: [
      {
        title: "10 Prompt Engineering Challenges",
        description:
          "Complete 10 challenges: (1) Simple haiku (2) Structured table (3) Role-play conversation (4) IF/THEN decision tree (5) Constrained writing under 50 words (6) Few-shot style matching (7) Chain-of-thought analysis (8) System prompt creation (9) Meta-prompt that generates prompts (10) Multi-step chained output using the 10-part framework.",
        deliverable: "Document with all 10 challenges, prompts, outputs, and lessons learned",
      },
      {
        title: "Build a 10-Part Framework Prompt",
        description:
          "Create a complete prompt using all 10 components of the Anthropic framework. Apply it to a real task (mixing advice, content creation, or business research).",
        deliverable: "Your complete 10-part prompt + the AI's output + your analysis of the result",
      },
    ],
    videos: [
      {
        title: "Lesson 1 of Prompt Engineering: The Basics",
        url: "https://www.youtube.com/watch?v=2dSL4HvpzYU",
        channel: "Aleksandar Popovic",
        description: "Clear introduction to prompt engineering fundamentals.",
      },
      {
        title: "Prompt Engineering 2025 Full Course",
        url: "https://www.youtube.com/watch?v=5i2Hn8OG94o",
        channel: "Great Learning",
        description: "Comprehensive prompt engineering course covering basic to advanced.",
      },
      {
        title: "23 Ways to Use ChatGPT So Well it Feels Like Cheating",
        url: "https://www.youtube.com/watch?v=7zPQV1BSH_k",
        channel: "Dan Martell",
        description: "Practical, high-impact ChatGPT techniques for everyday use.",
      },
    ],
    proTips: [
      "Save every prompt that works well. Build a personal prompt library.",
      "The more specific your prompt, the better the output. Vague in = vague out.",
      "Use the 5-part framework for quick tasks, 10-part for complex/repeatable work.",
      "Always iterate. Your first prompt is a draft, not a final version.",
      "Never trust AI-generated links, statistics, or quotes without verification.",
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
      "Why use a general AI when you can build one that knows YOUR specific needs? Custom GPTs and Claude Projects let you create specialized assistants.",
    sections: [
      {
        title: "Building Custom GPTs (Free on ChatGPT)",
        content: `Custom GPTs are pre-configured ChatGPT versions with custom instructions, knowledge, and personality. Free to create and use.

**How to create one:**
1. chat.openai.com → Explore GPTs → Create
2. Configure: Name, instructions, conversation starters, knowledge files

**Example: "Mason's Mix Engineer"**
"You are Mason's mixing consultant. He uses Ableton, AMD Ryzen 5 3200, RTX 3050. He produces dubstep, future bass, melodic bass. Always: explain WHY, reference specific frequencies/settings, recommend free tools first, use beginner-friendly language."`,
      },
      {
        title: "Claude Projects — Organized AI Workspaces",
        content: `Claude Projects: persistent workspaces with custom instructions + uploaded knowledge files.

**How to use:**
1. claude.ai → Projects → New Project
2. Add description, instructions, upload relevant files
3. Every conversation inherits those instructions

**Power move:** Upload your Ableton manual, mixing cheat sheets, or genre reference docs. Claude becomes a domain expert.`,
      },
      {
        title: "The 3 Custom GPTs to Build",
        content: `**1. Music Production Helper** — production questions, settings, sound design ideas
**2. Gig Finder & Proposal Writer** — find gigs, write proposals, price services
**3. Content Planner** — content ideas, scripts, posting schedule

Update monthly as your skills evolve.`,
      },
    ],
    tools: [
      { name: "ChatGPT Custom GPTs", cost: "free", costNote: "Free to create and use.", url: "https://chat.openai.com/" },
      { name: "Claude Projects", cost: "free", costNote: "Available on free tier.", url: "https://claude.ai/" },
    ],
    handsOn: [
      {
        title: "Build 3 Custom GPTs",
        description: "Create all 3 GPTs described. Test each with 5 real tasks.",
        deliverable: "Screenshots + test conversations",
      },
    ],
    videos: [
      {
        title: "How to Create Custom GPT | OpenAI Tutorial",
        url: "https://www.youtube.com/watch?v=0Q1AQAxpdGg",
        channel: "Kevin Stratvert",
        description: "Step-by-step Custom GPT creation tutorial from a trusted tech educator.",
      },
      {
        title: "How To Create Custom GPTs For Beginners",
        url: "https://www.youtube.com/watch?v=ABVwhZWg1Uk",
        channel: "The AI Advantage",
        description: "Beginner-friendly Custom GPT guide with practical examples.",
      },
      {
        title: "How To Create Custom GPTs - Build your own ChatGPT",
        url: "https://www.youtube.com/watch?v=5--JexprHuk",
        channel: "Skill Leap AI",
        description: "Comprehensive tutorial covering all aspects of Custom GPT building.",
      },
    ],
    proTips: [
      "A Custom GPT is only as good as its system prompt. Invest time in instructions.",
      "Upload real examples of your work as knowledge files.",
      "Share useful Custom GPTs to build reputation.",
      "Update monthly as tools and techniques evolve.",
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
      "Hundreds of AI tools exist. Most are hype. This module gives you a decision framework for evaluating tools and comparing the major players.",
    sections: [
      {
        title: "The Big Players Compared (2026)",
        content: `**ChatGPT:** Swiss Army knife. Best for general versatility, coding, creative writing, images.
**Claude:** Best writing quality for many tasks. Strong reasoning, nuanced analysis.
**Gemini:** Best for Google ecosystem, research with citations.
**Perplexity:** Best for cited research and fact-checking.
**Grok:** Real-time X/Twitter data. Niche but useful.`,
      },
      {
        title: "The Decision Framework",
        content: `**When choosing a tool, ask:**
1. What's the primary task? (Writing→Claude, Coding→ChatGPT/Claude, Research→Perplexity)
2. How much context? (Long docs→Claude, Short→Any)
3. Need web access? (Yes→Gemini/Perplexity)
4. Budget? ($0→rotate free tiers, $20/mo→ChatGPT Plus)
5. Am I choosing because it's better, or because it's new and shiny?`,
      },
      {
        title: "Avoiding Shiny Object Syndrome",
        content: `**The 48-hour rule:** See a new AI tool → wait 48 hours. Still care? Try the free tier.

**The 3-question test:**
1. Does it do something my current tools CAN'T?
2. Does it do something significantly BETTER?
3. Is the free tier good enough to test?

4+ yes → try it. 0-1 yes → skip it.

**Your core stack:** ChatGPT + Claude + Perplexity + Canva + Leonardo.ai. Everything else is optional.`,
      },
    ],
    tools: [
      { name: "ChatGPT", cost: "free", costNote: "Free tier available.", url: "https://chat.openai.com/" },
      { name: "Claude", cost: "free", costNote: "Free tier available.", url: "https://claude.ai/" },
      { name: "Perplexity", cost: "free", costNote: "Free with Pro search limits.", url: "https://www.perplexity.ai/" },
    ],
    handsOn: [
      {
        title: "Same Task Across 3 AIs",
        description: "Submit the EXACT same complex prompt to ChatGPT, Claude, and Gemini. Compare and rank.",
        deliverable: "All 3 outputs + your analysis and ranking",
      },
    ],
    videos: [
      {
        title: "I Tested ChatGPT vs Claude vs Gemini — The Winner Surprised Me",
        url: "https://www.youtube.com/watch?v=-RsVCj5Z3ik",
        channel: "Unlock AI",
        description: "Head-to-head comparison of the three major AI assistants.",
      },
      {
        title: "The Ultimate AI Battle! ChatGPT vs Gemini vs Claude vs Copilot",
        url: "https://www.youtube.com/watch?v=4qv5_rO1epg",
        channel: "TechVerse Reviews",
        description: "Comprehensive multi-round comparison of major AI tools.",
      },
      {
        title: "I Spent a Year Testing ChatGPT Plus vs Claude Pro",
        url: "https://www.youtube.com/watch?v=5iGJGe_pwZU",
        channel: "The AI Productivity Coach",
        description: "Long-term experience report comparing the two top AI assistants.",
      },
    ],
    proTips: [
      "Master 2-3 tools deeply rather than 20 superficially.",
      "The best AI tool is the one you actually use consistently.",
      "Free tiers change constantly. Check monthly.",
      "Don't switch tools mid-project.",
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
      "Automation is where AI goes from 'helpful tool' to 'force multiplier.' Connect AI tools together into workflows that save hours every week.",
    sections: [
      {
        title: "Automation Platforms (All Have Free Tiers)",
        content: `**Zapier:** 100 tasks/month, 5 single-step Zaps. Easiest to learn.
**Make (Integromat):** 1,000 operations/month, unlimited scenarios. Better free tier.
**n8n (Self-Hosted):** Completely free, no limits. Requires Docker setup.

**Automation = IF this happens, THEN do that.** It's propositional logic applied to real-world tasks.`,
      },
      {
        title: "Your First Automation",
        content: `**Build on Make (free): Weekly AI Content Ideas**
Trigger: Every Monday at 9 AM
Action 1: Call ChatGPT via Make's AI module
Action 2: Email the result to yourself

**Setup:**
1. Create Make account (free)
2. New Scenario → Schedule trigger → AI module → Email module
3. Test and activate

Every Monday: fresh content ideas in your inbox. Zero effort after setup.`,
      },
    ],
    tools: [
      { name: "Zapier", cost: "freemium", costNote: "Free: 100 tasks/month.", url: "https://zapier.com/" },
      { name: "Make", cost: "freemium", costNote: "Free: 1,000 operations/month.", url: "https://www.make.com/" },
      { name: "n8n", cost: "free", costNote: "Self-hosted = free, no limits.", url: "https://n8n.io/" },
    ],
    handsOn: [
      {
        title: "Build One Automation That Saves 2+ Hours/Week",
        description: "Using any free platform, build one automation. Document what it does and time saved.",
        deliverable: "Screenshot of working automation + documentation",
      },
    ],
    videos: [
      {
        title: "How to Use Zapier in 2026: Complete Setup & Strategy",
        url: "https://www.youtube.com/watch?v=AqVB9ZU9cGg",
        channel: "Nuno Tavares",
        description: "Up-to-date Zapier walkthrough covering setup and strategy.",
      },
      {
        title: "How to Build & Sell AI Automations: Ultimate Beginner's Guide",
        url: "https://www.youtube.com/watch?v=5TxSqvPbnWw",
        channel: "Liam Ottley",
        description: "Complete guide to building AI automations, from beginner to monetization.",
      },
      {
        title: "Dify vs n8n: Which Automation Platform Wins in 2026?",
        url: "https://www.youtube.com/watch?v=GbWgBH8D9zs",
        channel: "Savage Reviews",
        description: "Current comparison of the top automation platforms.",
      },
    ],
    proTips: [
      "Start with ONE automation. Get it perfect before building more.",
      "Automate tasks you dread first — maximum motivation.",
      "Always include error handling.",
      "Track time saved. You'll be amazed after 3 months.",
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
      "AI changes weekly. This module sets up a sustainable learning system that keeps you current without burning out.",
    sections: [
      {
        title: "The 10-Hour Week Template",
        content: `**Monday (2h):** Skill building — work through modules, tutorials
**Wednesday (2h):** Creation — produce music, create content, freelance work
**Friday (2h):** Business — apply to gigs, engage socially, network
**Weekend (2-4h):** Exploration — test new tools, read AI news, plan next week`,
      },
      {
        title: "Communities and Resources (All Free)",
        content: `**Reddit:** r/artificial, r/ChatGPT, r/edmproduction, r/freelance
**YouTube:** Matt Wolfe, AI Explained, Andrew Huang, You Suck at Producing
**Newsletters:** The Neuron, TLDR AI, Ben's Bites

**The Tool Evaluation Checklist:**
□ Does it solve a problem I ACTUALLY have?
□ Free tier available?
□ Existed more than 3 months?
□ Testable in under 30 minutes?
4+ yes → try it this weekend. Otherwise skip.`,
      },
    ],
    tools: [
      { name: "Reddit", cost: "free", costNote: "Best community for AI news.", url: "https://www.reddit.com/" },
      { name: "The Neuron", cost: "free", costNote: "Free daily AI news email.", url: "https://www.theneurondaily.com/" },
      { name: "Feedly", cost: "free", costNote: "Free RSS reader.", url: "https://feedly.com/" },
    ],
    handsOn: [
      {
        title: "Set Up Your AI Learning System",
        description: "Set up: RSS feeds, Reddit multireddit, YouTube subscriptions, weekly schedule template, tool evaluation log.",
        deliverable: "Screenshots + weekly schedule + tool evaluation template",
      },
    ],
    videos: [
      {
        title: "You're Not Behind (Yet): How to Learn AI in 29 Minutes",
        url: "https://www.youtube.com/watch?v=9c7zh2MkslY",
        channel: "Futurepedia",
        description: "Accessible overview for getting started with AI learning efficiently.",
      },
      {
        title: "Stop Wasting Hours! 3 AI Tools That Will Change Your Workflow",
        url: "https://www.youtube.com/watch?v=7eJiIn-7qkw",
        channel: "Unlocked AI",
        description: "Focused guide on the AI tools that make the biggest difference.",
      },
      {
        title: "Want to learn how to use A.I. the right way",
        url: "https://www.youtube.com/watch?v=B5dQ4-Tf0dw",
        channel: "Alex Cattoni",
        description: "Strategic approach to learning AI tools effectively.",
      },
    ],
    proTips: [
      "Schedule learning like work. Block it on your calendar.",
      "Teach what you learn. Creating content deepens YOUR understanding.",
      "Quality > quantity. Deep knowledge of 3 tools beats surface knowledge of 30.",
      "Build adaptable skills (prompting, logic, business) — not tool-specific knowledge.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// TRACK DEFINITIONS
// ═══════════════════════════════════════════════════════════════

const TRACKS: Track[] = [
  {
    id: "manual-production",
    name: "Manual Music Production",
    icon: "🎚️",
    description:
      "Master mixing, mastering, sound design, arrangement, and Ableton workflow — no AI required. Build the fundamentals that make everything else work.",
    color: "from-purple-600 to-violet-500",
    modules: TRACK_1A_MODULES,
  },
  {
    id: "ai-production",
    name: "AI-Powered Music Production",
    icon: "🤖",
    description:
      "Layer AI tools on top of your fundamentals. AI mixing, mastering, sound design, analysis, and visual branding — accelerate your workflow.",
    color: "from-cyan-500 to-teal-500",
    modules: TRACK_1B_MODULES,
  },
  {
    id: "income",
    name: "AI Side Income — $0 to First Dollar",
    icon: "💰",
    description:
      "Start from absolute zero and build real income with AI tools. Every recommendation is $0-$10 to start. No BS.",
    color: "from-emerald-500 to-green-500",
    modules: TRACK_2_MODULES,
  },
  {
    id: "poweruser",
    name: "AI Power User",
    icon: "⚡",
    description:
      "Master prompt engineering, custom AI tools, automation, and staying cutting edge. The skills that compound over time.",
    color: "from-blue-500 to-indigo-600",
    modules: TRACK_3_MODULES,
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
  mix_foundations: {
    label: "Mix Foundations",
    icon: "🎚️",
    description: "Completed the Mixing Foundations module",
  },
  sound_designer: {
    label: "Sound Designer",
    icon: "🎨",
    description: "Completed the Sound Design Fundamentals module",
  },
  first_dollar: {
    label: "First Dollar",
    icon: "💵",
    description: "Completed the first income module",
  },
  power_user: {
    label: "Power User",
    icon: "⚡",
    description: "Built your first Custom GPT",
  },
  full_stack_producer: {
    label: "Full Stack Producer",
    icon: "🏆",
    description: "Completed all 20 modules",
  },
};