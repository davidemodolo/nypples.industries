# Nypples Industries

Fictional startup website — Europe's first Huawei Ascend GPU partner. Self-hosted, GDPR-compliant open-weight LLM inference running on Huawei hardware in Trento, Italy.

**This is fiction. No real services are offered.**

## Tech

Plain HTML, CSS, and vanilla JS. No frameworks, no build step. Deploy anywhere — just serve the files.

## Run locally

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Or with any static server:

```bash
npx serve .
```

## Deploy

GitHub Pages ready. Point your Pages config at the root of the repo — `index.html` is the entry point.

## Structure

```
├── index.html              # Home
├── infrastructure.html     # Architecture, GPU specs, budget, ROI
├── models.html             # Model catalog (tabs: flagship / efficiency / quantized / embeddings)
├── pricing.html            # Batch + real-time tiers, calculator, SLA
├── roadmap.html            # Q3 2026 → Q3 2027 timeline
├── gdpr.html               # EU data sovereignty, compliance comparison
├── image-prompts.md        # AI image generation prompts
├── css/                    # variables, layout, components, animations
├── js/                     # nav injection, pricing calculator, scroll animations
└── images/                 # logo, hero visual, hardware close-up, topology viz
```

## License

This is a fictional project created for entertainment. All branding, company names, and services are entirely made up.
