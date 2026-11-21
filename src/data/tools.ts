export interface HotWireTool {
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  appUrl: string;
  repoUrl: string;
  image: string;
  imageAlt: string;
  firmwareMin: string;
  highlights: string[];
}

export const TOOLS: HotWireTool[] = [
  {
    slug: 'logic',
    shortName: 'Logic',
    name: 'HotWire Logic Analyzer',
    tagline: '8-Channel 20 MHz Pocket Lab & Tri-State Force I/O',
    description:
      'Capture 8 digital channels up to 20 MHz / 32,768 samples, force pins (Z / 0 / 1 / PU / PD) with 20 ms short-circuit protection, decode UART, SPI & I²C inline, and export CSV or VCD.',
    accent: '#58a6ff',
    appUrl: 'https://hotwire-lab.github.io/logic/',
    repoUrl: 'https://github.com/hotwire-lab/logic',
    image: '/images/logic.png',
    imageAlt: 'HotWire Logic Analyzer 8-channel waveform viewer with protocol decoding and Force I/O strip',
    firmwareMin: 'v1.2.0+',
    highlights: ['20 MHz · 8 ch (D0–D7)', 'UART / SPI / I²C', 'Force I/O + Short Guard', 'CSV & VCD Export'],
  },
  {
    slug: 'scope',
    shortName: 'Scope',
    name: 'HotWire Oscilloscope',
    tagline: '4-Channel 12-bit GDMA ADC Scope & Live FFT',
    description:
      'Real-time digital storage oscilloscope with eFuse-calibrated 12-bit GDMA streaming, draggable channel offsets, 1-2-5 V/div, AUTO-Set, phosphor persistence, Math, X-Y Lissajous, and Radix-2 FFT.',
    accent: '#facc15',
    appUrl: 'https://hotwire-lab.github.io/scope/',
    repoUrl: 'https://github.com/hotwire-lab/scope',
    image: '/images/scope.jpg',
    imageAlt: 'HotWire Oscilloscope capturing multi-channel sine and PWM waveforms with cursors',
    firmwareMin: 'v1.0.0+',
    highlights: ['Up to 1 MSPS (S3 OC)', '4-ch 12-bit GDMA', 'FFT · Math · X-Y Mode', 'Built-in D6 Test Gen'],
  },
  {
    slug: 'sdr',
    shortName: 'SDR',
    name: 'HotWire SDR',
    tagline: '1.84–2.79 GHz RF Spectrum Analyzer & Waterfall',
    description:
      'Direct baseband I/Q RF receiver covering DECT EU, 13cm Ham, Wi-Fi, BLE, and LTE B7 with a 948 MHz wideband scanner, scrolling heatmap waterfall, delta markers, and Raw I/Q constellation.',
    accent: '#a855f7',
    appUrl: 'https://hotwire-lab.github.io/sdr/',
    repoUrl: 'https://github.com/hotwire-lab/sdr',
    image: '/images/sdr.jpg',
    imageAlt: 'HotWire SDR live RF spectrum and scrolling waterfall display at 1884 MHz DECT EU',
    firmwareMin: 'v2.0.0+',
    highlights: ['1.84–2.79 GHz Tuning', '948 MHz Wideband Scan', 'Waterfall + M1/M2', 'Raw 8-bit I/Q Viewer'],
  },
  {
    slug: 'serial',
    shortName: 'Serial',
    name: 'HotWire Serial Terminal',
    tagline: 'Cross-Platform Web Serial & WebUSB Monitor + UART Bridge',
    description:
      'Desktop Web Serial & Android WebUSB terminal with built-in CDC-ACM, FTDI, CP210x, CH340, and PL2303 drivers, 2 MB ASCII/HEX ring buffer, macros, DTR/RTS/RST, plus optional XIAO 3.3 V UART Bridge.',
    accent: '#4ade80',
    appUrl: 'https://hotwire-lab.github.io/serial/',
    repoUrl: 'https://github.com/hotwire-lab/serial',
    image: '/images/serial.jpg',
    imageAlt: 'HotWire Serial Terminal running with ASCII/HEX views, DTR/RTS/RST controls, and macros',
    firmwareMin: 'Direct USB / v1.0.0+',
    highlights: ['Desktop + Android WebUSB', 'FTDI / CP210x / CH340', '2 MB ASCII & HEX View', 'XIAO D6/D7 Bridge'],
  },
];
