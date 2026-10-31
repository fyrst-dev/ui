---
name: fyrst-ui-0.5-migration
description: >-
  Migrate a consumer project from @fyrst/ui 0.3.x / 0.4.x to 0.5.x. Use when the
  app bumps @fyrst/ui to 0.5, or still uses any of: classRoot / classIcon /
  classContent / classClose (AlertRoot, CardRoot), :classes on AccordionRoot,
  classWrapper / classCarousel (CarouselRoot), classTrigger (FlyoutRoot),
  CardRoot borderColor, HTML inside label / title / headline / description /
  message / error / list or accordion item strings, useFormData(...).jsonData /
  .formData, useCarousel(props, el, slots), inject('handleNext') or other
  carousel string keys, Flyout #trigger / #dropdown slots, the flyout-enter /
  flyout-leave transition classes, or SwitchCssMap / ProgressCssMap /
  SwitchStyles / ProgressStyles / ListStyles / PricingCardStyles types.
---

# Migrate a @fyrst/ui consumer from 0.4.x to 0.5.x

You are migrating a **consuming** project (app, storefront, or library) that renders `@fyrst/ui` Vue components, directly or through `@fyrst/ui/nuxt`.

0.5.0 is a breaking **minor** (0.x semver). The Panda contract from 0.3.x stays: `designSystem: '@fyrst/ui'`, Panda `^2.4`. If the app is on 0.2.x or Panda 1, run [`../panda-v2-migration/SKILL.md`](../panda-v2-migration/SKILL.md) first, then this skill.

Work through the sections in order. Each one says how to find affected code, what to change, and how to check it. Skip a section only after its search comes back empty.

## Sources

- Repo `CHANGELOG.md`, section `[0.5.0]`, and `changelog/2026-10-31-0.5.0-safe-content-and-overrides.md`.
- Root `README.md`: "Styling components" and "Text and HTML content".
- Panda: [Consume with Panda](https://panda-css.com/docs/design-systems/consume-with-panda), [`cva` / `sva`](https://panda-css.com/docs/concepts/recipes).

Do not invent `@fyrst/ui` props. If this skill and the installed package's `.d.ts` disagree, the `.d.ts` wins. Read them under `node_modules/@fyrst/ui/dist/`.

## Hard rules

- Keep `designSystem: '@fyrst/ui'` in every `panda.config.*`. Do not add a fyrst preset to `presets`, do not `include` the package, and do not add `@pandacss/preset-base`.
- Do **not** add `html` to silence a diff. Add it only where the string is authored by the app team and is meant to contain markup. Never for user input, API or server error text, CMS fields you do not sanitize, or translations from an external service.
- Every value in a component `css` prop goes through `css.raw()` from the app's own `styled-system/css`. A bare object compiles and type-checks but produces **no CSS**.
- Do not re-declare `@fyrst/ui` component styles (`cva`, `sva`, copied style objects) in the app. Use the `css` prop (section 3).
- Public-repo hygiene: no customer names, client domains, or screenshots of customer UIs in commits or PRs.

## What changed (summary)

| Area | 0.4.x | 0.5.x |
| --- | --- | --- |
| Content props | Rendered with `v-html` | Rendered as **text**. `html` prop opts into HTML |
| Style overrides | `classRoot`, `classIcon`, `classContent`, `classClose`, `classes`, `classWrapper`, `classCarousel`, `classTrigger`, plus `css` on some components | One `css` prop on every component, keyed by slot (`root` = outermost element) |
| Component CSS | Atomic classes from `cva` / `sva` | Still atomic `cva` / `sva`. Some color classes change where a semantic token replaced a `_light` override (section 4) |
| Override precedence | `css` merged into the style object; `class*` props appended as extra classes and could lose | Every `css` slot is merged into the style object: one class per property, the override wins |
| `CardRoot` `borderColor` | Deprecated no-op | Removed |
| `useFormData` | `{ formData, jsonData }` readonly refs, cached at first read | `{ getFormData(), getJson() }`, read on each call; accepts element, ref, or getter |
| `useCarousel` | `(props, carouselRef, slots)` | `(options, carouselRef)`; `carouselItems` is `HTMLElement[]` |
| Carousel children | `inject('handleNext')` and other string keys | `inject(CarouselContextKey)` |
| Carousel wheel | Always hijacked vertical wheel | Off. `wheel-navigation` turns it on |
| Flyout | Hover div plus `v-if` panel, `flyout-*` Transition | Reka Popover: Escape, outside click, focus handling. `#trigger` must render one element |
| Removed types | `SwitchCssMap`, `ProgressCssMap`, `SwitchStyles`, `ProgressStyles`, `ListStyles`, `PricingCardStyles` | `CssMap<K>` and per-component `*Css` types |
| Component `name` | `FyButton`, `FyLoader` | `FyrstButton`, `FyrstLoader` |
| `@fyrst/ui/vue/*` `require` | Resolved the ESM `.js` | Resolves the `.cjs` build |
| Peers | `vue ^3.5.44`, `reka-ui ^2.11`, `nuxt ^4.6.3` | `vue ^3.5.0`, `reka-ui ^2.6.0`, `nuxt ^4.0.0` (widened) |

Additive, no action needed: semantic colors `surface`, `surface.raised`, `border`, `border.hover`, `border.subtle`, `text.muted`; base `brand.50`, `brand.200`; `CssMap` and `*Css` type exports; `CarouselContextKey`; `FieldSharedProps`; `FlyoutRoot` `direction` and `openOnHover`; `CarouselNavigation` `prevLabel` / `nextLabel`; plain Node can now import the package.

# Step-by-step

## 0. Preconditions

1. Clean git tree. Note the current `@fyrst/ui` version.
2. Run the app's build and test once and keep the output as the "before" baseline.
3. If the app has visual regression tests, record a baseline now.

## 1. Upgrade

```bash
bun add @fyrst/ui@^0.5.0      # or npm / pnpm / yarn equivalent
panda codegen --clean
```

If the app pins `reka-ui` below `2.6.0`, raise it. `vue`, `nuxt`, and `@pandacss/dev` ranges from 0.4.x still satisfy the peers.

## 2. Content props: text by default, `html` to opt in

**Find.** Every place a content prop may carry markup. Search templates and the data that feeds them:

```bash
rg -n --type-add 'vue:*.vue' -t vue -t ts -t js \
  -e '<(Fyrst)?(Button|HeroLead|CardHeader|CardRoot|ListRoot|ListItem|AccordionRoot|TabRoot|TabItem|FlyoutRoot|Field[A-Z]\w*|PricingCard\w*)\b' \
  -e '(Button|Hero\.Lead|Card\.(Root|Header)|List\.(Root|Item)|Accordion\.Root|Tab\.(Root|Item)|Flyout\.Root|Field\.\w+|PricingCard\.\w+)\b'
rg -n "<(b|strong|em|i|mark|code|br|a|span|small|sup|sub)\b|&[a-z]+;|&#" -g '*.vue' -g '*.ts' -g '*.js' -g '*.json' -g '*.yml' -g '*.yaml'
```

Props that changed:

| Component | Props |
| --- | --- |
| `Button` | `label` |
| `CardHeader` (and `CardRoot` `header` object) | `title`, `subtitle` |
| `HeroLead` | `headline`, `description` |
| `ListRoot` / `ListItem` | item `content` |
| `PricingCardRoot` / `PricingCardBody` | `features` |
| `AccordionRoot` | item `title`, `content` |
| `TabRoot` / `TabItem` | item `label` |
| `FlyoutRoot` | `label` |
| `FieldBase`, every `Field*`, `FieldMessage`, `FieldError` | `message`, `error` |

**Decide per string.**

- Plain text that happened to go through `v-html` (most labels): no change. If the string contained entities such as `&amp;` or `&nbsp;`, replace them with the literal characters, or they now show as typed.
- App-authored markup (`'Build <mark>faster</mark>'`): add `html`:

  ```vue
  <!-- before -->
  <FyrstHeroLead headline="Build <mark>faster</mark>" />
  <!-- after -->
  <FyrstHeroLead html headline="Build <mark>faster</mark>" />
  ```

  `html` sits on the component that owns the copy: `AccordionRoot`, `ListRoot`, `TabRoot` (all items), `ListItem` / `TabItem` (one item; an item's own `html` wins), `CardHeader`, `HeroLead`, `Button`, `FlyoutRoot`, `PricingCardRoot` or `PricingCardBody`, and `Field*` / `FieldBase` (message and error). A `TabRoot` / `ListRoot` item object can carry `html: true` / `false` itself.
- Markup built from data you do not control (server validation messages, user names, CMS text): **keep it as text**. If the design needs formatting, use the component's slot (`#title`, `#content`, `#label`, `#description`, …) and render Vue nodes.
- Field `error` / `message` from a backend: leave `html` off. That was an XSS path in 0.4.x.

**Check.** Pages with markup render it; no visible `<mark>` / `&amp;` text appears; `rg -n ' html\b' -g '*.vue'` lists only app-authored strings.

## 3. Style overrides: one `css` prop, values through `css.raw()`

**Find.**

```bash
rg -n -e 'class-(root|icon|content|close|wrapper|carousel|trigger)\b' \
       -e '\bclass(Root|Icon|Content|Close|Wrapper|Carousel|Trigger)\b' \
       -e ':classes=' -g '*.vue' -g '*.ts' -g '*.tsx'
rg -n ':css="' -g '*.vue'
rg -n '\bcss:\s*\{' -g '*.ts' -g '*.vue'
```

**Rename.**

| Component | 0.4.x | 0.5.x |
| --- | --- | --- |
| `AlertRoot` | `classRoot`, `classIcon`, `classContent`, `classClose` | `css.root`, `css.icon`, `css.content`, `css.close` (also `message`, `title`, `description`) |
| `CardRoot` | `classRoot` | `css.root` |
| `AccordionRoot` | `classes.icon` (a **class string**, applied to the item icon) | `css.icon` (a style object). The caret is `css.indicator`. Other slots: `root`, `item`, `trigger`, `title`, `content` |
| `CarouselRoot` | `classWrapper`, `classCarousel` | `css.root`, `css.viewport` |
| `FlyoutRoot` | `classTrigger` | `css.trigger` (also `root`, `content`) |

```vue
<!-- before -->
<FyrstAlertRoot :class-root="css.raw({ maxWidth: 'md' })" :class-close="css.raw({ color: 'danger' })" />
<FyrstCarouselRoot :class-wrapper="css.raw({ p: 'xl' })" :class-carousel="css.raw({ gap: 'xl' })" />
<FyrstAccordionRoot :items="items" :classes="{ icon: css({ color: 'primary' }) }" />

<!-- after -->
<FyrstAlertRoot :css="{ root: css.raw({ maxWidth: 'md' }), close: css.raw({ color: 'danger' }) }" />
<FyrstCarouselRoot :css="{ root: css.raw({ p: 'xl' }), viewport: css.raw({ gap: 'xl' }) }" />
<FyrstAccordionRoot :items="items" :css="{ icon: css.raw({ color: 'primary' }) }" />
```

`AccordionRoot` `classes.icon` took a class name. If the app passed a non-Panda class (global CSS), move that rule to the `#icon` slot instead:

```vue
<FyrstAccordionRoot :items="items">
  <template #icon="{ item }">
    <span v-if="item.icon" :class="['icon', `icon-${item.icon}`, 'my-global-icon']" />
  </template>
</FyrstAccordionRoot>
```

**Wrap every existing `css` value in `css.raw()`.** 0.4.x already had `css` on `PricingCard*`, `ListRoot`, `ListItem`, `ProgressRoot`, `SwitchRoot`, `FieldUrl`, and `FieldSwitch`. A bare object there never generated CSS (unless the same atomic class happened to exist). This is the likeliest silent styling bug in the app:

```vue
<!-- before: compiles, no CSS -->
<FyrstPricingCardBadge :css="{ root: { bg: 'success' } }" />
<!-- after -->
<FyrstPricingCardBadge :css="{ root: css.raw({ bg: 'success' }) }" />
```

`css` comes from the app's own codegen: `import { css } from 'styled-system/css'` (or the app's `importMap` path), not from `@fyrst/ui`.

**Types.** Use the exported per-component types (`AlertCss`, `CarouselRootCss`, `FlyoutRootCss`, …) or `CssMap<'root' | …>` from `@fyrst/ui`.

**Check.** `rg` from "Find" returns nothing for the old names. Overridden elements look as intended in light and dark.

## 4. Component class names (mostly unchanged)

Component styles are still atomic Panda classes (`d_inline_flex`, `bg-c_primary`, …). Two kinds of class names change:

- Colors that now use a semantic token: fields, select menus, checkboxes, radios, the dialog, and the prompt form use `surface`, `border`, `border.hover`, `border.subtle`, and `text.muted` (for example `bg-c_surface` instead of `bg-c_grey.black` plus `light:bg-c_white`). The rendered colors are the same, apart from the notes in section 9.
- Styles that were inline `css()` calls in controls, the carousel, and the flyout are now `cva` / `sva` definitions. Values are unchanged, but class order and a few class names differ (for example a disabled checkbox uses a `_disabled` condition instead of a runtime `opacity` class).

**Find code that depends on exact class names.**

```bash
rg -n -e '\b(bg|bg-c|bd-c|c|d|op|cursor)_[A-Za-z0-9.%\\-]+' \
  -g '*.spec.*' -g '*.test.*' -g '*.css' -g '*.scss' -g '__snapshots__/**' -g '*.snap'
```

- Snapshots or selectors that match `@fyrst/ui` classes: review the diff, then update. Prefer selecting by role, label, or `data-*` over atomic classes.
- Global CSS that targeted library classes: replace it with a `css` override (section 3).

**Precedence.** `AlertRoot` `classRoot` and the other `class*` props were appended as separate classes, so overriding a property the component also set could lose, depending on stylesheet order. The `css` prop is merged into the component's style object first, so the override always replaces that property. Re-check places that worked around the old behavior with `!important`.

## 5. Composables

### `useFormData`

```bash
rg -n 'useFormData' -g '*.vue' -g '*.ts'
```

```ts
// before
const { jsonData, formData } = useFormData(formEl)
send(jsonData.value)
// after
const { getJson, getFormData } = useFormData(formEl)   // element, ref, or getter
send(getJson())
```

0.4.x cached the first read and returned `null` when called in `setup` before mount. Calls that worked around this (calling it inside the submit handler) still work after the rename. Calls in `setup` with a template ref now work as written.

### `useCarousel`

```bash
rg -n 'useCarousel' -g '*.vue' -g '*.ts'
```

```ts
// before
const carousel = useCarousel(props, carouselEl, useSlots())
carousel.carouselItems.value?.length          // NodeListOf<HTMLElement> | null
// after
const carousel = useCarousel({ scrollMode: () => props.scrollMode }, carouselEl)
carousel.carouselItems.value.length            // HTMLElement[]
```

Return names are unchanged. `handleWheel` now follows the dominant axis, calls `preventDefault()` itself, and moves at most one step per gesture. It no longer logs `console.warn` at the ends.

### `useFlyout`

`useFlyout({ el })` still returns `{ open, toggle }` and still opens on hover. It now listens to `pointerenter` / `pointerleave` and ignores touch and pen. New: `openOnHover`, `closeDelay`, `setOpen`, `pin`, `openedBy`, `onPointerEnter`, `onPointerLeave`. No change needed unless the app relied on `mouseenter` firing for touch.

## 6. Carousel

```bash
rg -n -e "inject\((['\"])(carousel|handleNext|handlePrev|carouselItems|carouselItem|visibleCarouselItems|currentCarouselItemIndex|scrollDirection|allItemsVisible)\1" \
  -e 'CarouselRoot|Carousel\.Root' -g '*.vue' -g '*.ts'
```

**Custom children** that injected string keys:

```ts
// before
const handleNext = inject<() => void>('handleNext')
const index = inject<Ref<number>>('currentCarouselItemIndex')
// after
import { CarouselContextKey } from '@fyrst/ui'
const carousel = inject(CarouselContextKey)
carousel?.handleNext()
carousel?.currentCarouselItemIndex.value
```

The context has every `useCarousel` return plus `carousel` (the scroller ref).

**Wheel.** The carousel no longer scrolls on the mouse wheel, and the page scrolls normally over it. Keep the old behavior only where product asks for it:

```vue
<FyrstCarouselRoot wheel-navigation>…</FyrstCarouselRoot>
```

**Navigation buttons** now have `type="button"`, so they no longer submit an enclosing form. Labels: `prev-label` / `next-label`.

## 7. Flyout

```bash
rg -n -e 'FlyoutRoot|FlyoutDropdown|Flyout\.(Root|Dropdown)' -e 'flyout-(enter|leave)' -g '*.vue' -g '*.ts' -g '*.css' -g '*.scss'
```

The flyout is a Reka Popover now. Behavior: mouse hover opens and leaving closes after 150 ms; click toggles; click while hover-open pins it open; Escape and an outside click close it. The trigger gets `aria-expanded`, `aria-controls`, and `aria-haspopup="dialog"` (was `"true"`).

- **`#trigger` slot:** render exactly **one** element (component or tag). It becomes the Popover trigger, so it toggles on click without extra code. Slot props are `{ open, toggle }`. Remove any `@click="toggle"` you added on it, or it toggles twice.

  ```vue
  <FyrstFlyoutRoot aria-label="User menu">
    <template #trigger="{ open }">
      <FyrstButton :label="open ? 'Close menu' : 'Menu'" />
    </template>
    …
  </FyrstFlyoutRoot>
  ```

- **`#dropdown` slot:** keep the panel inside `<FyrstFlyoutDropdown>` and drop `v-if="open"` and the wrapping `<Transition>`; the dropdown handles presence and animation. `FlyoutDropdown` only works inside `FlyoutRoot`.

  ```vue
  <!-- before -->
  <template #dropdown="{ open }">
    <Transition name="flyout">
      <FyrstFlyoutDropdown v-if="open" direction="right">…</FyrstFlyoutDropdown>
    </Transition>
  </template>
  <!-- after (or set direction="right" on FlyoutRoot and use the default slot) -->
  <template #dropdown>
    <FyrstFlyoutDropdown direction="right">…</FyrstFlyoutDropdown>
  </template>
  ```

- **Transition CSS:** delete app CSS for `.flyout-enter-*` / `.flyout-leave-*`. Restyle the animation with `css.content`.
- **Positioning:** the panel is positioned by Reka (floating-ui) and stays in the flyout's DOM, below the trigger, aligned `start` (`direction="left"`, default) or `end` (`"right"`). The positioning wrapper gets inline styles on the client while open. SSR HTML has none.
- Hover-only menus that should only open on click: `:open-on-hover="false"`.

## 8. Removed props, types, and names

```bash
rg -n -e 'SwitchCssMap|ProgressCssMap|SwitchStyles|ProgressStyles|ListStyles|PricingCardStyles' \
       -e 'FyButton|FyLoader' -g '*.vue' -g '*.ts'
rg -n -B2 -A2 'border-color=|borderColor' -g '*.vue' | rg -i 'card'
```

| Removed | Use |
| --- | --- |
| `CardRoot` `borderColor` (no-op since 0.3.0) | delete it; use `color` or `css.root` |
| `SwitchCssMap<K>`, `ProgressCssMap<K>` | `CssMap<K>` |
| `SwitchStyles`, `ProgressStyles`, `ListStyles`, `PricingCardStyles` | none. Style objects are no longer exposed. Use `css` |
| Component name `FyButton` / `FyLoader` (KeepAlive `include`, devtools filters, `findComponent({ name })`) | `FyrstButton` / `FyrstLoader` |

## 9. Behavior and visual notes (check, usually no code change)

- `Button` with `to` and `disabled` renders `<a role="link" aria-disabled="true">` **without `href`**. It no longer navigates. Tests that expected an `href` on a disabled link need updating.
- `Button` `title`: with `html`, tags are stripped.
- `ListItem` `size` / `state` / `icon` now win over `ListRoot` (0.4.x ignored them inside a root).
- `FieldError` dropped `aria-live` (it keeps `role="alert"`). `FieldRequired` is `aria-hidden`; `required` on the control already announces it.
- `Loader` dropped `aria-live` (it keeps `role="status"`).
- Field helper text (`message`) in light mode is `grey.600` (was `grey.500`). Checkbox and radio hover borders in light mode are `grey.300` (was `grey.400`).
- Radio options dim individually when `disabled` is set on the option.
- `@fyrst/ui/style.css` is icons only (the flyout transition CSS moved into its `sva` styles).
- CommonJS `require('@fyrst/ui/vue/<Name>')` now loads the `.cjs` build.

# Verification (required)

```bash
# no old APIs left
rg -n -e 'class-(root|icon|content|close|wrapper|carousel|trigger)\b' -e '\bclass(Root|Icon|Content|Close|Wrapper|Carousel|Trigger)\b' -e ':classes=' -g '*.vue' -g '*.ts'
rg -n -e "inject\((['\"])(handleNext|handlePrev|carouselItems|currentCarouselItemIndex|allItemsVisible)\1" -e '\.jsonData\b|\.formData\.value' -e 'SwitchCssMap|ProgressCssMap|SwitchStyles|ProgressStyles|ListStyles|PricingCardStyles' -g '*.vue' -g '*.ts'

panda codegen --clean
panda cssgen --outfile /tmp/fyrst-check.css
rg -c 'd_inline_flex' /tmp/fyrst-check.css   # > 0: component styles reach the app

<app lint> && <app typecheck> && <app build> && <app test>
```

Then check by hand, in light and dark:

1. Pages that used `html` content: markup renders; nothing shows literal tags or entities.
2. Every element with a `css` override: the override applies. If it does not, the value is missing `css.raw()`.
3. Flyouts: hover, click, click-while-hovered (stays open), Escape, outside click, keyboard (Tab to trigger, Enter, Escape returns focus).
4. Carousels: page scroll over the carousel works; buttons move; `wheel-navigation` only where intended.
5. Forms: errors render as text, inputs get `aria-invalid="true"`, helper text is linked through `aria-describedby`.
6. CSP / SSR: server HTML from `@fyrst/ui` components has no `style=""` attributes.

# Common errors and fixes

| Symptom | Cause | Fix |
| --- | --- | --- |
| Literal `<mark>` / `<b>` / `&amp;` shows in a heading, button, list, or tab | Content is text by default | Add `html` for app-authored markup, or use the slot. Replace entities with characters |
| Override has no effect | Bare object in `css`, or old `class*` prop name | `css.raw()`, new slot key (section 3) |
| TS error: `Property 'classRoot' does not exist` / `'classes'` / `'classWrapper'` / `'classTrigger'` / `'borderColor'` | Removed props | Section 3 / 8 |
| TS error: `Expected 2 arguments, but got 3` on `useCarousel` | `slots` argument removed | Section 5 |
| TS error: `Property 'jsonData' does not exist` | `useFormData` API | `getJson()` / `getFormData()` |
| Custom carousel buttons do nothing | String-key `inject` returns `undefined` | `inject(CarouselContextKey)` |
| Flyout opens and closes in one click | Extra `@click="toggle"` on the `#trigger` slot element | Remove it; the slot element is the trigger |
| Flyout trigger slot warns about multiple root nodes / does nothing | Slot renders a fragment or text | Render exactly one element |
| `FlyoutDropdown` throws ``Injection `Symbol(PopoverRootContext)` not found. Component must be used within `PopoverRoot` `` | Used outside `FlyoutRoot` | Keep it inside `FlyoutRoot` (`#dropdown` or default slot) |
| Snapshot tests fail on class names | Token-based colors and moved inline styles (section 4) | Review the diff and update; select by role / label |
| Token conflict warning for `surface`, `border`, or `text` | App already defines a semantic color with that name | Keep the app's if it is used app-wide; otherwise rename the app token. Library components use the library's values only through `designSystem` |
| Page no longer scrolls into a carousel on wheel | That is the fix | Add `wheel-navigation` only if product requires it |

# Do not

- Do not add `html` to every component "to keep the old behavior". Decide per string.
- Do not pass server or user-controlled strings with `html`.
- Do not pass bare objects to `css`.
- Do not copy `@fyrst/ui` `cva` / `sva` definitions into the app; use the `css` prop.
- Do not pin `@fyrst/ui` to 0.4.x "for now" while other packages in the same app use 0.5.x; the design-system manifest is per install.
