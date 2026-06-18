Labeled text input with brand focus ring, optional leading icon, hint, and error state.

```jsx
<Input label="อีเมล" placeholder="you@company.com"
  leftIcon={<i data-lucide="mail"></i>} hint="เราจะติดต่อกลับภายใน 24 ชม." />
<Input label="เบอร์โทร" error="กรุณากรอกเบอร์โทร" />
```

Props: `label`, `hint`, `error`, `leftIcon`, `size="sm"|"md"|"lg"`, plus all native input attributes.
