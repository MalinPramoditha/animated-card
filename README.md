# Next Animated Cards

A React component library for creating beautiful animated gradient cards with mouse interaction effects.

## Installation

```bash
npm install next-animated-cards
```

## Usage

```jsx
import { AnimatedCard, AnimatedCardContent } from 'next-animated-cards';

function MyComponent() {
  return (
    <AnimatedCard
      colors="#4B4D4D 0%, #4B4D4D 20%, #a21caf 40%, #f59e0b 60%, #4B4D4D 80%, #4B4D4D 100%"
      speed="10"
      initialAngle="0deg"
      followMouse={true}
    >
      <AnimatedCardContent>
        Your content here
      </AnimatedCardContent>
    </AnimatedCard>
  );
}
```

## Props

### AnimatedCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colors | string | "#4B4D4D 0%, #4B4D4D 20%, #a21caf 40%, #f59e0b 60%, #4B4D4D 80%, #4B4D4D 100%" | Gradient colors with positions |
| speed | string | "10" | Animation speed in seconds |
| initialAngle | string | "0deg" | Initial gradient angle |
| followMouse | boolean | false | Enable mouse-following gradient effect |
| className | string | "" | Additional CSS classes |
| style | string | "" | Additional CSS classes |

### AnimatedCardContent

| Prop | Type | Description |
|------|------|-------------|
| className | string | Additional CSS classes |
| style | string | "" | Additional CSS classes |

## Tailwind CSS Setup

This component uses Tailwind CSS for styling. To use it in your project:

1. Make sure Tailwind CSS is installed in your project:
```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Add the following to your `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your project files
    "./node_modules/next-animated-cards/**/*.{js,jsx,ts,tsx}" // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. You can override default styles using className prop:
```jsx
<AnimatedCard
  className="p-4 rounded-xl bg-blue-500" // This will override default padding and border radius
>
  <AnimatedCardContent>
    Your content here
  </AnimatedCardContent>
</AnimatedCard>
```

## License

MIT
