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

## License

MIT
