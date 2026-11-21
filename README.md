# HotWire Lab — Landing Page

[![Deploy HotWire Lab Site to GitHub Pages](https://github.com/hotwire-lab/hotwire-lab.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/hotwire-lab/hotwire-lab.github.io/actions/workflows/deploy.yml)
[![Live Website](https://img.shields.io/badge/Website-hotwire--lab.github.io-0ea5e9)](https://hotwire-lab.github.io/)

Official Astro landing page for **[HotWire Lab](https://hotwire-lab.github.io/)** — a suite of zero-install Rust/WebAssembly browser USB hardware tools for **Seeed Studio XIAO ESP32-S3** and **XIAO ESP32-C6**:

* **[HotWire Logic Analyzer](https://hotwire-lab.github.io/logic/)** ([repo](https://github.com/hotwire-lab/logic))
* **[HotWire Oscilloscope](https://hotwire-lab.github.io/scope/)** ([repo](https://github.com/hotwire-lab/scope))
* **[HotWire SDR](https://hotwire-lab.github.io/sdr/)** ([repo](https://github.com/hotwire-lab/sdr))
* **[HotWire Serial Terminal](https://hotwire-lab.github.io/serial/)** ([repo](https://github.com/hotwire-lab/serial))
* **[`hotwire-core`](https://github.com/hotwire-lab/hotwire-core)** (shared Rust/WASM transport, framing, Web Flasher & UI shell)

> **Important:** Do not create Astro pages matching the sub-app repository slugs (`/logic`, `/scope`, `/sdr`, `/serial`) so GitHub Pages continues routing those paths cleanly to their project sites.

## Development

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # runs astro check && astro build
```

## License

Copyright © 2026 Kari Vierimaa, Kempele — Licensed under the [Apache License 2.0](https://github.com/hotwire-lab/hotwire-core/blob/main/LICENSE).
