# Google reCAPTCHA v3 Badge Control Guide

## Overview

The reCAPTCHA v3 badge is the small floating icon that appears on your page. You can control its position, visibility, and styling.

---

## 1. Badge Position Options

In `page.tsx`, you can set the badge position using the `container.parameters.badge` prop:

```tsx
<GoogleReCaptchaProvider
  reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
  container={{
    parameters: {
      badge: "bottomright", // Choose one: 'bottomright', 'bottomleft', 'inline'
      theme: "dark",         // Choose one: 'dark', 'light'
    },
  }}
>
```

### Position Options:

- **`bottomright`** - Badge appears in bottom-right corner (default)
- **`bottomleft`** - Badge appears in bottom-left corner
- **`inline`** - Badge appears inline where the reCAPTCHA div is placed

---

## 2. Hide the Badge (With Required Disclosure)

### Method 1: CSS Hide (Must include text disclosure)

Add to your global CSS (`globals.css`):

```css
/* Hide reCAPTCHA badge */
.grecaptcha-badge {
  visibility: hidden;
}
```

**⚠️ IMPORTANT**: If you hide the badge, Google's terms require you to include this text on your form:

```tsx
<p className="text-xs text-gray-500 text-center">
  This site is protected by reCAPTCHA and the Google{" "}
  <a
    href="https://policies.google.com/privacy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline"
  >
    Privacy Policy
  </a>{" "}
  and{" "}
  <a
    href="https://policies.google.com/terms"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline"
  >
    Terms of Service
  </a>{" "}
  apply.
</p>
```

This is already included in your `ContactForm.tsx` at the bottom.

### Method 2: Control Badge Visibility Programmatically

```tsx
// Show badge only when form is focused
useEffect(() => {
  const badge = document.querySelector(".grecaptcha-badge") as HTMLElement;
  if (badge) {
    badge.style.visibility = "hidden";
    // Show on form focus
    const form = document.querySelector("form");
    form?.addEventListener("focusin", () => {
      badge.style.visibility = "visible";
    });
    form?.addEventListener("focusout", () => {
      badge.style.visibility = "hidden";
    });
  }
}, []);
```

---

## 3. Custom Styling

Add custom CSS to style the badge:

```css
/* Custom badge styling */
.grecaptcha-badge {
  /* Position */
  bottom: 20px !important;
  right: 20px !important;

  /* Size */
  transform: scale(0.9);

  /* Opacity */
  opacity: 0.8;
  transition: opacity 0.3s;
}

.grecaptcha-badge:hover {
  opacity: 1;
}

/* Hide on mobile */
@media (max-width: 768px) {
  .grecaptcha-badge {
    transform: scale(0.7);
  }
}
```

---

## 4. Move Badge to Specific Element

Use `inline` mode and place it in a specific container:

```tsx
<GoogleReCaptchaProvider
  reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
  container={{
    parameters: {
      badge: "inline",
    },
  }}
>
  {/* Your form */}

  {/* Badge will appear here */}
  <div id="recaptcha-badge-container" className="flex justify-center mt-4">
    {/* Badge renders here automatically */}
  </div>
</GoogleReCaptchaProvider>
```

---

## 5. Best Practices

### ✅ Do:

- Include the required Google Privacy/Terms disclosure if hiding the badge
- Use `bottomright` or `bottomleft` for best UX (doesn't interfere with content)
- Set `theme: "dark"` to match your dark theme
- Test on mobile devices to ensure badge doesn't cover important elements

### ❌ Don't:

- Hide the badge without including the required text disclosure (violates Google ToS)
- Place badge over important UI elements
- Remove badge entirely without user knowledge

---

## 6. Current Setup

Your current configuration in `page.tsx`:

```tsx
<GoogleReCaptchaProvider
  reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
  scriptProps={{
    async: true,
    defer: true,
    appendTo: "body",
  }}
  container={{
    parameters: {
      badge: "bottomright", // Badge in bottom-right corner
      theme: "dark",        // Dark theme to match your site
    },
  }}
>
```

And you have the required disclosure text in `ContactForm.tsx` at the bottom of the form.

---

## 7. Troubleshooting

### Badge not appearing?

- Check if reCAPTCHA script loaded: `console.log(window.grecaptcha)`
- Verify `NEXT_PUBLIC_RECAPTCHA_KEY` is set in `.env.local`
- Check browser console for errors

### Badge in wrong position?

- Change `badge` parameter in `container.parameters`
- Use CSS to override position if needed

### Want to hide completely?

1. Add CSS: `.grecaptcha-badge { visibility: hidden; }`
2. Ensure disclosure text is visible in form (already added)

---

## Summary

- **Badge position**: Set via `container.parameters.badge` prop
- **Theme**: Set via `container.parameters.theme` prop
- **Hide badge**: Use CSS but MUST include text disclosure
- **Custom styling**: Use `.grecaptcha-badge` CSS class
- **Required disclosure**: Already included at bottom of ContactForm

Your reCAPTCHA is configured correctly with dark theme and bottom-right positioning! 🎉
