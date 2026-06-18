Pill-shaped call-to-action button — brand royal-blue primary, with secondary/ghost/danger variants and three sizes. Use for any primary or secondary action.

```jsx
<Button variant="primary" size="lg" rightIcon={<i data-lucide="arrow-right"></i>}>
  ดูบริการของเรา
</Button>
<Button variant="secondary">ติดต่อเรา</Button>
<Button variant="ghost" size="sm">เพิ่มเติม</Button>
```

Variants: `primary` (blue, glow), `secondary` (outline), `ghost` (transparent), `danger` (signal red). Sizes: `sm` 36 / `md` 44 / `lg` 52. Props: `fullWidth`, `disabled`, `leftIcon`, `rightIcon`, `as="a"` for links.
