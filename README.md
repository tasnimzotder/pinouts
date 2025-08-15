# Pinouts

**Interactive pinout diagrams and educational resources for microcontrollers and development boards**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com/)

> **Note**: This project has been modernized with Next.js 15, React 19, and a complete UI redesign using shadcn/ui for enhanced user experience and accessibility.

## Features

- **Interactive Pinout Diagrams**: Hover and click to explore pin functions and categories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS for a polished experience
- **Educational Content**: Detailed pin descriptions, protocol explanations, and technical specifications
- **Fast Performance**: Optimized with Next.js 15 and efficient data loading strategies
- **Dark Mode Support**: Automatic theme switching for comfortable viewing
- **Rich Visualizations**: Color-coded pins, interactive tooltips, and visual feedback
- **Developer Friendly**: TypeScript throughout with comprehensive type definitions

## Supported Devices

Currently supporting **4 popular development boards**:

### Arduino Boards
- **[Arduino Uno (ATmega328P)](https://pinouts.vercel.app/board/arduino-uno)** - The classic beginner-friendly board
- **[Arduino Nano (ATmega328P)](https://pinouts.vercel.app/board/arduino-nano-new)** - Compact breadboard-friendly design

### WiFi-Enabled Boards  
- **[NodeMCU v2 (ESP8266)](https://pinouts.vercel.app/board/nodemcu-v2)** - WiFi development board for IoT projects

### Single Board Computers
- **[Raspberry Pi Zero 2 W (ARM Cortex-A53)](https://pinouts.vercel.app/board/raspberry-pi-zero-2-w)** - Ultra-small computer with GPIO

## Tech Stack

### Frontend Framework
- **Next.js 15.1.1** - React framework with App Router and Server Components
- **React 19.0.0** - Latest React with improved performance and features
- **TypeScript 5.6.0** - Type-safe development with comprehensive interfaces

### UI & Styling
- **shadcn/ui** - Modern, accessible component library built on Radix UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **SCSS** - Enhanced styling capabilities
- **CSS Variables** - Dynamic theming support

### Components & Interactions
- **Radix UI Primitives** - Accessible, unstyled UI components
- **Class Variance Authority** - Type-safe component variants
- **Tailwind Merge** - Efficient class merging utilities
- **React Tooltips** - Interactive hover information

## Project Structure

```
pinouts/
├── components/             # React components
│   ├── ui/                # shadcn/ui components (buttons, cards, etc.)
│   ├── board/             # Board-specific components
│   │   ├── details/       # Board information panels
│   │   ├── pinCol/        # Pin column visualization
│   │   └── pinsInteractive/ # Main interactive pinout
│   ├── common/            # Shared components
│   └── headers/           # Navigation and headers
├── data/                  # Data definitions
│   ├── boards/            # Individual board configurations
│   ├── pinFunc/           # Pin function definitions
│   ├── protocols/         # Communication protocol specs
│   ├── boards.ts          # Board index
│   └── chips.ts           # Chip catalog
├── lib/                   # Utilities and interfaces
│   ├── interfaces/        # TypeScript type definitions
│   ├── services/          # Data fetching services
│   ├── contexts/          # React context providers
│   └── utils/             # Helper functions
├── pages/                 # Next.js pages
│   ├── board/             # Board listing and individual pages
│   └── chip/              # Chip pages (coming soon)
└── styles/                # Global styles and theme
```

## Getting Started

### Prerequisites
- **Node.js 18+** (recommended: latest LTS)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tasnimzotder/pinouts.git
   cd pinouts
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build optimized production bundle
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint code quality checks

## Data Architecture

The project uses a **modular, type-safe data architecture**:

### Board Definitions
- **Lightweight index** (`data/boards.ts`) for fast loading
- **Detailed definitions** (`data/boards/*.ts`) with full pin configurations
- **Rich metadata** including specifications, manufacturer info, and documentation links

### Type Safety
- **Comprehensive TypeScript interfaces** for all data structures
- **Compile-time validation** prevents data inconsistencies
- **IDE support** with autocompletion and error detection

### Educational Content
- **Pin function definitions** explaining GPIO, ADC, PWM, and more
- **Protocol specifications** for I2C, SPI, UART communication
- **Technical specifications** with voltage ranges, memory details, and connectivity

## Coming Soon

- **Individual Chip Pages** - Detailed microcontroller specifications and pinouts
- **Learning Modules** - Interactive tutorials for electronics basics
- **Visual Pin Mapping** - Enhanced graphics and animations
- **Advanced Search** - Filter boards by specifications and features
- **Mobile App** - Native mobile application for on-the-go reference

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **[shadcn](https://ui.shadcn.com/)** for the beautiful component library
- **[Lucide](https://lucide.dev/)** for the comprehensive icon set
- **[Radix UI](https://www.radix-ui.com/)** for accessible UI primitives
- **[Vercel](https://vercel.com/)** for hosting and deployment platform

---

<p align="center">
  <strong>Built with love for the maker community</strong><br>
  <a href="https://pinouts.vercel.app">Visit Live Site</a> · 
  <a href="CONTRIBUTING.md">Contributing Guide</a> · 
  <a href="https://github.com/tasnimzotder/pinouts/issues">Report Bug</a>
</p>
