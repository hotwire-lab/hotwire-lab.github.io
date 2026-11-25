export interface ToolSpec {
  label: string;
  value: string;
}

export interface HotWireTool {
  index: string;
  slug: string;
  shortName: string;
  name: string;
  summary: string;
  note: string;
  accent: string;
  appUrl: string;
  repoUrl: string;
  image: string;
  imageAlt: string;
  firmwareMin: string;
  specs: ToolSpec[];
}

export const TOOLS: HotWireTool[] = [
  {
    index: '01',
    slug: 'logic',
    shortName: 'Logic',
    name: 'HotWire Logic Analyzer',
    summary:
      '8-channel digital capture up to 20 MHz with 32,768-sample depth, inline UART / SPI / I²C protocol decoding, CSV/VCD export, and live tri-state pin forcing (Z / 0 / 1 / PU / PD).',
    note: 'Includes 20 ms hardware contention detection when forcing pins against an active external driver.',
    accent: '#58a6ff',
    appUrl: 'https://hotwire-lab.github.io/logic/',
    repoUrl: 'https://github.com/hotwire-lab/logic',
    image: '/images/logic.png',
    imageAlt: 'HotWire Logic Analyzer 8-channel waveform viewer with protocol decoding and Force I/O strip',
    firmwareMin: 'v1.2.0+',
    specs: [
      { label: 'Channels', value: '8 digital (D0–D7, 3.3 V CMOS)' },
      { label: 'Sample rate', value: 'Up to 20 MHz · 32k samples' },
      { label: 'Decoders', value: 'UART, SPI, I²C · CSV / VCD export' },
      { label: 'Firmware', value: 'v1.2.0+ (S3 / C6)' },
    ],
  },
  {
    index: '02',
    slug: 'scope',
    shortName: 'Scope',
    name: 'HotWire Oscilloscope',
    summary:
      '4-channel 12-bit GDMA ADC oscilloscope with eFuse curve-fitting mV calibration, per-channel V/div and draggable offsets, edge trigger, phosphor persistence, Math, X-Y mode, and Radix-2 FFT.',
    note: 'Runs at 83.3 kSPS within ESP-IDF spec; S3 Turbo mode pushes up to 1 MSPS by tuning APB_SARADC directly. Built-in square-wave test generator on D6.',
    accent: '#facc15',
    appUrl: 'https://hotwire-lab.github.io/scope/',
    repoUrl: 'https://github.com/hotwire-lab/scope',
    image: '/images/scope.jpg',
    imageAlt: 'HotWire Oscilloscope capturing multi-channel sine and PWM waveforms with cursors',
    firmwareMin: 'v1.0.0+',
    specs: [
      { label: 'Inputs', value: '4 ch on S3 (D0–D3) · 3 ch on C6 (D0–D2)' },
      { label: 'Sample rate', value: '83.3 kSPS spec · up to 1 MSPS S3 OC' },
      { label: 'Analysis', value: 'Radix-2 FFT, Math, X-Y, Persistence, Cursors' },
      { label: 'Firmware', value: 'v1.0.0+ (S3 / C6)' },
    ],
  },
  {
    index: '03',
    slug: 'sdr',
    shortName: 'SDR',
    name: 'HotWire SDR',
    summary:
      'Direct baseband I/Q RF spectrum analyzer and waterfall covering 1.84–2.79 GHz (DECT EU, 13cm Ham, Wi-Fi, BLE, LTE B7), with a 948 MHz wideband scanner, delta markers, and raw 8-bit I/Q constellation view.',
    note: 'Uses the ESP32 internal Wi-Fi RF front-end via raw I/Q dump — practical for relative spectrum inspection and emitter hunting, not a calibrated lab VNA.',
    accent: '#a855f7',
    appUrl: 'https://hotwire-lab.github.io/sdr/',
    repoUrl: 'https://github.com/hotwire-lab/sdr',
    image: '/images/sdr.jpg',
    imageAlt: 'HotWire SDR live RF spectrum and scrolling waterfall display at 1884 MHz DECT EU',
    firmwareMin: 'v2.0.0+',
    specs: [
      { label: 'Frequency', value: '1.84–2.79 GHz (948 MHz wideband scan)' },
      { label: 'Views', value: 'Spectrum, Waterfall, Peak Hold, Raw I/Q' },
      { label: 'Antenna', value: 'External U.FL antenna connector' },
      { label: 'Firmware', value: 'v2.0.0+ (GPL-3.0, S3 / C6)' },
    ],
  },
  {
    index: '04',
    slug: 'serial',
    shortName: 'Serial',
    name: 'HotWire Serial Terminal',
    summary:
      'Cross-platform Web Serial and Android WebUSB monitor with built-in CDC-ACM, FTDI, CP210x, CH340, and PL2303 drivers, 2 MB ASCII/HEX scrollback, macros, DTR/RTS/RST controls, and optional XIAO 3.3 V UART Bridge mode.',
    note: 'Works directly with any USB-UART adapter on desktop or Android, or turns a XIAO board into a 3.3 V TTL UART bridge on D6/D7 with pin-swap and polarity inversion.',
    accent: '#4ade80',
    appUrl: 'https://hotwire-lab.github.io/serial/',
    repoUrl: 'https://github.com/hotwire-lab/serial',
    image: '/images/serial.jpg',
    imageAlt: 'HotWire Serial Terminal running with ASCII/HEX views, DTR/RTS/RST controls, and macros',
    firmwareMin: 'Direct USB / v1.0.0+',
    specs: [
      { label: 'Drivers', value: 'Web Serial + WebUSB (CDC, FTDI, CP210x, CH340, PL2303)' },
      { label: 'Buffer', value: '2 MB ring buffer · ASCII / HEX / Timestamps' },
      { label: 'Bridge pins', value: 'D6 TX · D7 RX (3.3 V TTL, up to 2 Mbaud)' },
      { label: 'Firmware', value: 'Direct USB (none) · Bridge v1.0.0+ (S3 / C6)' },
    ],
  },
  {
    index: '05',
    slug: 'siggen',
    shortName: 'Gen',
    name: 'HotWire Signal Generator',
    summary:
      'Dual-channel DDS waveform, hardware LEDC Square/PWM (up to 20 MHz), linear/log frequency sweep, and 4-channel programmable digital pattern generator for XIAO ESP32-S3 and ESP32-C6.',
    note: 'Square and PWM modes use native hardware LEDC timers; Sine, Triangle, Sawtooth, DC, and Noise modulate a 312.5 kHz PWM carrier (add a 1 kΩ + 10 nF RC low-pass filter for smooth analog output).',
    accent: '#fb7185',
    appUrl: 'https://hotwire-lab.github.io/siggen/',
    repoUrl: 'https://github.com/hotwire-lab/siggen',
    image: '/images/siggen.svg',
    imageAlt: 'HotWire Signal Generator dual-channel sine/square waveform preview and 4-channel digital pattern grid',
    firmwareMin: 'v1.0.0+',
    specs: [
      { label: 'Outputs', value: 'CH1 (D0) · CH2 (D1) · Pattern (D2–D5)' },
      { label: 'Hardware PWM', value: '1 Hz–20 MHz Square / variable-duty PWM' },
      { label: 'DDS Waveforms', value: 'Sine, Triangle, Saw, DC, Noise + Sweep' },
      { label: 'Firmware', value: 'v1.0.0+ (S3 / C6)' },
    ],
  },
];
