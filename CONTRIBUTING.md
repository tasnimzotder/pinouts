# Contributing to Pinouts

Thank you for your interest in contributing to the Pinouts project! This guide will help you get started with contributing new boards, improving documentation, or enhancing the codebase.

## Table of Contents

- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Adding New Boards](#adding-new-boards)
- [Code Contributions](#code-contributions)
- [Style Guide](#style-guide)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

## Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **Git** for version control
- **Code editor** (VS Code recommended)
- Basic knowledge of **TypeScript/React** (for code contributions)

### Setting Up Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/pinouts.git
   cd pinouts
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```
5. **Open http://localhost:3000** to view the application

### Development Workflow

```bash
# Create a new branch for your feature
git checkout -b feature/add-arduino-mega

# Make your changes
# ... edit files ...

# Test your changes
npm run build
npm run lint

# Commit your changes
git add .
git commit -m "Add Arduino Mega board definition"

# Push to your fork
git push origin feature/add-arduino-mega

# Create a Pull Request on GitHub
```

## Types of Contributions

We welcome various types of contributions:

### Board Definitions
- Add new development boards
- Update existing board information
- Fix pin mapping errors
- Add missing specifications

### Code Improvements
- UI/UX enhancements
- Performance optimizations
- Bug fixes
- New features

### Documentation
- Improve existing documentation
- Add tutorials and guides
- Fix typos and grammar
- Translate content

### Design & Accessibility
- Visual improvements
- Accessibility enhancements
- Mobile responsiveness
- Icon and graphic contributions

## Adding New Boards

Adding a new board is the most common contribution. Follow these steps:

### Step 1: Prepare Board Information

Gather the following information about your board:

- **Basic Info**: Name, manufacturer, chip/microcontroller
- **Pin Layout**: All pins with their functions and types
- **Specifications**: Voltage ranges, memory, clock speed
- **Special Features**: WiFi, Bluetooth, built-in LEDs, etc.
- **Documentation**: Links to official datasheets/documentation

### Step 2: Create Board File

1. **Create a new file** in `data/boards/` directory:
   ```
   data/boards/your-board-name.ts
   ```

2. **File naming rules**:
   - Use lowercase letters only
   - Replace spaces with hyphens (`-`)
   - Remove special characters
   - Example: "Arduino Mega 2560" → `arduino-mega-2560.ts`

3. **Use the board template**:
   ```typescript
   import BoardType, { PinType } from '@interfaces/board.interface';

   const leftPins: PinType[] = [
     {
       id: 'l1',
       board_pin: 'D13',
       names: ['LED_BUILTIN'],
       type: 'digital',
       // Optional: directions, voltage, notes
     },
     // ... more pins
   ];

   const rightPins: PinType[] = [
     {
       id: 'r1',
       board_pin: 'VIN',
       names: ['VIN'],
       type: 'power',
       voltage: 7-12,
     },
     // ... more pins
   ];

   const YourBoardName: BoardType = {
     id: 'your-board-name',
     name: 'Your Board Name',
     description: 'Brief description of the board and its use cases',
     chip: {
       name: 'Microcontroller Name',
       id: 'microcontroller-id',
     },
     manufacturer: {
       name: 'Manufacturer Name',
       url: 'https://manufacturer-website.com',
     },
     pins: {
       left: leftPins,
       right: rightPins,
     },
     specifications: {
       clock_speed: '16 MHz',
       flash_memory: '32 KB',
       sram: '2 KB',
       eeprom: '1 KB',
       operation_voltage: 5,
       input_voltage: { min: 7, max: 12 },
     },
     pins_counts: {
       Digital: 14,
       Analog: 6,
       PWM: 6,
     },
     special_pins: [
       {
         id: 'spi',
         name: 'SPI',
         type: 'protocol',
         pins: ['10', '11', '12', '13'],
         notes: 'Serial Peripheral Interface pins'
       },
       // ... more special pin groups
     ],
     documents: {
       datasheet: 'https://link-to-official-datasheet.pdf',
     },
   };

   export default YourBoardName;
   ```

### Step 3: Add to Board Index

Add your board to `data/boards.ts`:

```typescript
import BoardsType from '../lib/interfaces/boards.interface';

const boards: BoardsType = [
  // ... existing boards
  {
    id: 'your-board-name',
    name: 'Your Board Name',
    chip: {
      name: 'Microcontroller Name',
      id: 'microcontroller-id',
    },
    manufacturer: {
      name: 'Manufacturer Name',
      url: 'https://manufacturer-website.com',
    },
  },
];
```

### Step 4: Add Chip (if new)

If your board uses a new microcontroller, add it to `data/chips.ts`:

```typescript
const Chips: ChipsType = [
  // ... existing chips
  {
    id: 'your-microcontroller-id',
    name: 'Your Microcontroller Name',
  },
];
```

### Step 5: Test Your Board

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Check for TypeScript errors**:
   ```bash
   npm run lint
   ```

3. **Test in browser**:
   - Visit `http://localhost:3000/board/your-board-name`
   - Verify all pins are displayed correctly
   - Test interactive features
   - Check responsive design

## Code Contributions

### Component Structure

The project follows a modular component architecture:

```
components/
├── ui/                    # shadcn/ui components
├── board/                 # Board-specific components
│   ├── details/           # Information panels
│   ├── pinCol/            # Pin visualization
│   └── pinsInteractive/   # Main interactive component
├── common/                # Shared components
└── headers/               # Navigation components
```

### Adding New Components

1. **Create component files**:
   ```typescript
   // components/your-component/YourComponent.tsx
   import { Card } from '@components/ui/card';

   interface YourComponentProps {
     data: SomeType;
   }

   const YourComponent = ({ data }: YourComponentProps) => {
     return (
       <Card>
         {/* Your component JSX */}
       </Card>
     );
   };

   export default YourComponent;
   ```

2. **Follow naming conventions**:
   - Use PascalCase for component names
   - Use descriptive, specific names
   - Group related components in folders

3. **Use TypeScript interfaces**:
   - Define props interfaces
   - Use existing types from `lib/interfaces/`
   - Add new interfaces when needed

### State Management

- Use **React Context** for global state (see `lib/contexts/`)
- Use **local state** with `useState` for component-specific data
- Follow **unidirectional data flow** principles

## Style Guide

### TypeScript

- **Use strict TypeScript** - no `any` types
- **Define interfaces** for all data structures
- **Use optional properties** (`?`) when appropriate
- **Export types** from interface files

### React Components

- **Use functional components** with hooks
- **Destructure props** in function parameters
- **Use descriptive prop names**
- **Add JSDoc comments** for complex components

### Styling

- **Use Tailwind CSS** classes for styling
- **Follow shadcn/ui patterns** for component design
- **Use CSS variables** for theme-aware styling
- **Maintain responsive design** with mobile-first approach

### Code Formatting

- **Use consistent indentation** (2 spaces)
- **Add trailing commas** in objects and arrays
- **Use single quotes** for strings
- **End statements with semicolons**

### Example Code Style

```typescript
interface BoardCardProps {
  board: BoardType;
  onSelect?: (boardId: string) => void;
}

/**
 * Displays a board card with interactive hover effects
 */
const BoardCard = ({ board, onSelect }: BoardCardProps) => {
  const handleClick = () => {
    onSelect?.(board.id);
  };

  return (
    <Card 
      className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
      onClick={handleClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-base group-hover:text-primary">
          {board.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Card content */}
      </CardContent>
    </Card>
  );
};

export default BoardCard;
```

## Testing

### Manual Testing

Before submitting a PR, test the following:

1. **Board Rendering**:
   - All pins display correctly
   - Pin categories work as expected
   - Hover interactions function properly

2. **Responsive Design**:
   - Test on mobile (≤768px)
   - Test on tablet (768px-1024px)  
   - Test on desktop (≥1024px)

3. **Accessibility**:
   - Keyboard navigation works
   - Screen reader compatibility
   - Color contrast meets standards

4. **Performance**:
   - Page loads quickly
   - Smooth interactions
   - No console errors

### Build Testing

Always run these commands before submitting:

```bash
# Check TypeScript compilation
npm run build

# Check code quality
npm run lint

# Test development server
npm run dev
```

## Pull Request Process

### Before Creating a PR

1. **Sync with upstream**:
   ```bash
   git remote add upstream https://github.com/tasnimzotder/pinouts.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Test your changes thoroughly**
3. **Update documentation if needed**
4. **Follow commit message conventions**

### PR Guidelines

1. **Use descriptive titles**:
   - Good: "Add Arduino Mega 2560 board definition"
   - Bad: "Add board"

2. **Provide detailed description**:
   ```markdown
   ## Changes Made
   - Added Arduino Mega 2560 board definition
   - Updated board index with new entry
   - Added comprehensive pin mapping

   ## Testing
   - [x] Manual testing on localhost
   - [x] Build passes without errors
   - [x] Responsive design verified

   ## Screenshots
   (Include screenshots of your board in action)
   ```

3. **Reference related issues**:
   - "Closes #123"
   - "Relates to #456"

### Review Process

1. **Automated checks** will run on your PR
2. **Maintainer review** for code quality and accuracy
3. **Community feedback** from other contributors
4. **Approval and merge** once everything looks good

## Community Guidelines

### Be Respectful
- Use inclusive and welcoming language
- Respect different perspectives and experiences
- Focus on constructive feedback

### Be Helpful
- Assist newcomers with questions
- Share knowledge and best practices
- Provide clear, actionable feedback

### Be Collaborative
- Work together to solve problems
- Build on each other's ideas
- Credit others for their contributions

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **Pull Requests**: Code reviews and discussions
- **GitHub Discussions**: General questions and ideas

## Recognition

Contributors are recognized in several ways:

- **Contributors page** on the website
- **GitHub contributors graph** 
- **Release notes** mention significant contributions
- **Special badges** for major contributors

## Getting Help

If you need help at any point:

1. **Check existing documentation** and examples
2. **Search GitHub issues** for similar questions
3. **Create a new issue** with detailed information
4. **Start a GitHub discussion** for general questions

---

**Thank you for contributing to Pinouts!** Every contribution, no matter how small, helps make this resource better for the entire maker community.

<p align="center">
  <strong>Happy Contributing!</strong>
</p>