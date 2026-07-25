# Image Generation Prompts — Nypples Industries

Use these prompts with a local image generation model (Stable Diffusion, Flux, etc.)
to generate realistic, institutional-style images for the website.

---

## 1. `hero-visual.png`
**Location:** Home page hero background or beside hero text.
**Prompt:**
> A photorealistic 3D render of a small server rack in a clean, modern colocation room.
> The rack contains approximately 8-10 server nodes with subtle cyan-blue status LEDs glowing.
> White plaster walls, polished concrete floor. No windows. No people.
> Industrial ceiling with cable trays, indirect LED strip lighting with a slight purple tint.
> Shallow depth of field — the rack is sharp, the background is softly blurred.
> Cinematic lighting, 35mm lens equivalent. The overall mood is clean, professional, and futuristic
> but not sci-fi — this should look like a real small-scale datacenter, not a sci-fi movie set.
> The rack should occupy about 60% of the frame, positioned slightly off-center.

**Expected output:** A clean, realistic server rack photo — no oversized "cloud" imagery.
Should convey: "This is a real, physical, small-scale deployment."

---

## 2. `rack-diagram.png`
**Location:** Infrastructure page, GPU specifications section.
**Prompt:**
> Close-up macro shot of two Huawei Ascend compute modules partially inserted into a
> server chassis. The GPU modules are matte black with fine metal heat sink fins.
> Small fiber optic transceivers with faint blue glow are visible.
> The background is dark with a subtle gradient from deep navy to charcoal.
> Industrial aesthetic — clean, sharp focus on the hardware.
> The lighting comes from a soft overhead source with a subtle cyan edge light
> that traces the outline of the heat sinks. No text, no logos visible.
> Aspect ratio 16:9, product-photography quality.

**Expected output:** A hardware close-up that looks like a professional product shot.
Should convey: "Serious infrastructure, real hardware."

---

## 3. `team-hero.png`
**Location:** Can be used on the Home page or a future About section as a decorative visual.
**Prompt:**
> An abstract digital visualization representing distributed computing nodes in a dark
> three-dimensional space. The nodes are small glowing spheres connected by thin luminous
> lines forming a mesh topology. Color palette: deep navy/charcoal background with
> cyan (#06b6d4) and purple (#8b5cf6) accents for the nodes and connections.
> The visualization resembles a hybrid between a neural network topology map and a
> server architecture diagram — it should feel technical and architectural, not organic.
> No faces, no people. Clean, minimal, suitable as a hero image for a tech infrastructure
> company website. The composition should leave the center or upper portion relatively
> clear for overlaid text. 16:9 aspect ratio.

**Expected output:** An abstract, tech-focused visualization.
Should convey: "Distributed systems, connectivity, European infrastructure."

---

## 4. `nypples-logo.png`
**Location:** Site header, favicon (replace the CSS-generated "NI" box).
**Prompt:**
> A clean, minimal logo design for a fictional European AI infrastructure company called
> "Nypples Industries". The logo should consist of a geometric symbol and the company name.
> The symbol should be an abstract geometric mark — perhaps a stylized letter "N" formed
> from two parallel vertical bars connected by a diagonal, suggesting both a server rack
> and a neural network node. Alternatively, a hexagonal node shape with a subtle gradient
> from cyan (#06b6d4) to purple (#8b5cf6). The mark should be simple enough to work at
> 32x32px and at larger sizes. The company name "Nypples Industries" should appear in a
> clean, modern sans-serif font beside or below the mark. Colors: white/light text on
> transparent or dark background, with the geometric mark using the cyan-to-purple
> gradient. No rounded corners — sharp, architectural, institutional. Horizontal layout:
> icon on the left, "Nypples Industries" text on the right. The word "Industries" should
> be smaller or lighter weight. SVG or high-res PNG with transparent background.
> Professional, tech-forward, but not playful — this is infrastructure, not a consumer app.

**Expected output:** A corporate logo suitable for the header nav bar. Should work on
dark backgrounds. The symbol should be recognizable at small sizes (32px) for favicon use.
Replace the CSS-generated `<span class="logo-icon">NI</span>` in the header with this image.

---

## Notes
- All images should match the website's color palette: `--bg-deep: #0a0a0f`, `--neon-cyan: #06b6d4`, `--neon-purple: #8b5cf6`
- Keep everything institutional and minimal — no faces, no exaggerated sci-fi elements
- Realistic proportions: our deployment is 20 nodes, not a hyperscale datacenter
- Generated images should be placed in `images/` directory and referenced in the respective HTML pages
