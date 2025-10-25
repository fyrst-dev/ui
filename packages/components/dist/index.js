import { defineComponent as w, computed as g, createBlock as j, openBlock as h, resolveDynamicComponent as de, normalizeClass as x, withCtx as Y, createElementBlock as S, createCommentVNode as B, unref as p, renderSlot as k, createElementVNode as z, ref as T, watch as ce, onMounted as H, onUnmounted as G, useSlots as ue, provide as I, withModifiers as be, useId as me, inject as D, createTextVNode as ge, toDisplayString as fe, createVNode as pe, readonly as P } from "vue";
function L(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var ve = (e) => typeof e == "object" && e !== null;
function A(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([r, t]) => t !== void 0));
}
var he = (e) => e === "base";
function xe(e) {
  return e.slice().filter((r) => !he(r));
}
function $(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function ye(e) {
  let r = "", t;
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = $(t % 52) + r;
  return $(t % 52) + r;
}
function _e(e, r) {
  let t = r.length;
  for (; t; ) e = e * 33 ^ r.charCodeAt(--t);
  return e;
}
function ke(e) {
  return ye(_e(5381, e) >>> 0);
}
var K = /\s*!(important)?/i;
function Se(e) {
  return typeof e == "string" ? K.test(e) : !1;
}
function Ce(e) {
  return typeof e == "string" ? e.replace(K, "").trim() : e;
}
function U(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var M = (e) => {
  const r = /* @__PURE__ */ new Map();
  return (...o) => {
    const n = JSON.stringify(o);
    if (r.has(n))
      return r.get(n);
    const a = e(...o);
    return r.set(n, a), a;
  };
}, we = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function F(...e) {
  return e.reduce((r, t) => (t && Object.keys(t).forEach((o) => {
    if (we.has(o)) return;
    const n = r[o], a = t[o];
    L(n) && L(a) ? r[o] = F(n, a) : r[o] = a;
  }), r), {});
}
var Ie = (e) => e != null;
function Z(e, r, t = {}) {
  const { stop: o, getKey: n } = t;
  function a(l, s = []) {
    if (ve(l)) {
      const d = {};
      for (const [i, v] of Object.entries(l)) {
        const m = (n == null ? void 0 : n(i, v)) ?? i, c = [...s, m];
        if (o != null && o(l, c))
          return r(l, s);
        const b = a(v, c);
        Ie(b) && (d[m] = b);
      }
      return d;
    }
    return r(l, s);
  }
  return a(e);
}
function Be(e, r) {
  return e.reduce(
    (t, o, n) => {
      const a = r[n];
      return o != null && (t[a] = o), t;
    },
    {}
  );
}
function J(e, r, t = !0) {
  const { utility: o, conditions: n } = r, { hasShorthand: a, resolveShorthand: l } = o;
  return Z(
    e,
    (s) => Array.isArray(s) ? Be(s, n.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: t ? (s) => a ? l(s) : s : void 0
    }
  );
}
var Te = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Oe = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function Re(e) {
  const { utility: r, hash: t, conditions: o = Te } = e, n = (l) => [r.prefix, l].filter(Boolean).join("-"), a = (l, s) => {
    let d;
    if (t) {
      const i = [...o.finalize(l), s];
      d = n(r.toHash(i, ke));
    } else
      d = [...o.finalize(l), n(s)].join(":");
    return d;
  };
  return M(({ base: l, ...s } = {}) => {
    const d = Object.assign(s, l), i = J(d, e), v = /* @__PURE__ */ new Set();
    return Z(i, (m, c) => {
      if (m == null) return;
      const b = Se(m), [y, ...C] = o.shift(c), O = xe(C), V = r.transform(y, Ce(Oe(m)));
      let u = a(O, V.className);
      b && (u = `${u}!`), v.add(u);
    }), Array.from(v).join(" ");
  });
}
function Ee(...e) {
  return e.flat().filter((r) => L(r) && Object.keys(A(r)).length > 0);
}
function Ve(e) {
  function r(n) {
    const a = Ee(...n);
    return a.length === 1 ? a : a.map((l) => J(l, e));
  }
  function t(...n) {
    return F(...r(n));
  }
  function o(...n) {
    return Object.assign({}, ...r(n));
  }
  return { mergeCss: M(t), assignCss: o };
}
var je = /([A-Z])/g, ze = /^ms-/, Me = M((e) => e.startsWith("--") ? e : e.replace(je, "-$1").replace(ze, "-ms-").toLowerCase()), We = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${We.split(",").join("|")}`;
var De = (e = {}) => {
  const r = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Pe(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, r(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, s] of Object.entries(a))
      o.forEach(([d, i]) => {
        var v;
        (v = i.variants)[n] ?? (v[n] = {}), i.variants[n][l] = s[d] ?? {};
      });
  return Object.fromEntries(o);
}, Pe = (e, r) => e.filter((t) => t.css[r]).map((t) => ({ ...t, css: t.css[r] }));
function Q(e, ...r) {
  const t = Object.getOwnPropertyDescriptors(e), o = Object.keys(t), n = (l) => {
    const s = {};
    for (let d = 0; d < l.length; d++) {
      const i = l[d];
      t[i] && (Object.defineProperty(s, i, t[i]), delete t[i]);
    }
    return s;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return r.map(a).concat(n(o));
}
var Le = (...e) => {
  const r = e.reduce((t, o) => (o && o.forEach((n) => t.add(n)), t), /* @__PURE__ */ new Set([]));
  return Array.from(r);
};
const Ae = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ee = new Set(Ae.split(",")), Fe = /^@|&|&$/;
function X(e) {
  return ee.has(e) || Fe.test(e);
}
const $e = /^_/, Xe = /&|@/;
function Ne(e) {
  return e.map((r) => ee.has(r) ? r.replace($e, "") : Xe.test(r) ? `[${U(r.trim())}]` : r);
}
function qe(e) {
  return e.sort((r, t) => {
    const o = X(r), n = X(t);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const Ye = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", re = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
Ye.split(",").forEach((e) => {
  const [r, t] = e.split(":"), [o, ...n] = t.split("/");
  re.set(r, o), n.length && n.forEach((a) => {
    te.set(a === "1" ? o : a, r);
  });
});
const N = (e) => te.get(e) || e, oe = {
  conditions: {
    shift: qe,
    finalize: Ne,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, r) => {
      const t = N(e);
      return { className: `${re.get(t) || Me(t)}_${U(r)}` };
    },
    hasShorthand: !0,
    toHash: (e, r) => r(e.join(":")),
    resolveShorthand: N
  }
}, He = Re(oe), _ = (...e) => He(E(...e));
_.raw = (...e) => E(...e);
const { mergeCss: E } = Ve(oe);
function Ge() {
  let e = "", r = 0, t;
  for (; r < arguments.length; )
    (t = arguments[r++]) && typeof t == "string" && (e && (e += " "), e += t);
  return e;
}
const q = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function W(e) {
  const { base: r, variants: t, defaultVariants: o, compoundVariants: n } = q(e), a = (c) => ({ ...o, ...A(c) });
  function l(c = {}) {
    var O;
    const b = a(c);
    let y = { ...r };
    for (const [V, u] of Object.entries(b))
      (O = t[V]) != null && O[u] && (y = E(y, t[V][u]));
    const C = Ke(n, b);
    return E(y, C);
  }
  function s(c) {
    const b = q(c.config), y = Le(c.variantKeys, Object.keys(t));
    return W({
      base: E(r, b.base),
      variants: Object.fromEntries(
        y.map((C) => [C, E(t[C], b.variants[C])])
      ),
      defaultVariants: F(o, b.defaultVariants),
      compoundVariants: [...n, ...b.compoundVariants]
    });
  }
  function d(c) {
    return _(l(c));
  }
  const i = Object.keys(t);
  function v(c) {
    return Q(c, i);
  }
  const m = Object.fromEntries(Object.entries(t).map(([c, b]) => [c, Object.keys(b)]));
  return Object.assign(M(d), {
    __cva__: !0,
    variantMap: m,
    variantKeys: i,
    raw: l,
    config: e,
    merge: s,
    splitVariantProps: v,
    getVariantProps: a
  });
}
function Ke(e, r) {
  let t = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((d) => r[a] === d)) && (t = E(t, o.css));
  }), t;
}
function Ue(e) {
  const r = Object.entries(De(e)).map(([m, c]) => [m, W(c)]), t = e.defaultVariants ?? {}, o = r.reduce((m, [c, b]) => (e.className && (m[c] = b.config.className), m), {});
  function n(m) {
    const c = r.map(([b, y]) => [b, Ge(y(m), o[b])]);
    return Object.fromEntries(c);
  }
  function a(m) {
    const c = r.map(([b, y]) => [b, y.raw(m)]);
    return Object.fromEntries(c);
  }
  const l = e.variants ?? {}, s = Object.keys(l);
  function d(m) {
    return Q(m, s);
  }
  const i = (m) => ({ ...t, ...A(m) }), v = Object.fromEntries(
    Object.entries(l).map(([m, c]) => [m, Object.keys(c)])
  );
  return Object.assign(M(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: v,
    variantKeys: s,
    classNameMap: o,
    splitVariantProps: d,
    getVariantProps: i
  });
}
const Ze = ["innerHTML"], cr = /* @__PURE__ */ w({
  __name: "Button",
  props: {
    label: { default: null },
    icon: { default: null },
    to: { default: null },
    type: { default: null },
    color: { default: "secondary" },
    size: { default: "md" },
    order: { default: "regular" },
    external: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, t = g(() => r.to ? "a" : "button"), o = g(() => t.value === "button" && r.type ? r.type : t.value === "button" ? "button" : null), n = g(() => r.external && t.value === "a" ? "_blank" : null), a = g(() => r.external && t.value === "a" ? "noopener noreferrer" : null), l = W({
      base: {
        display: "inline flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        lineHeight: "1.5",
        borderRadius: "lg",
        borderStyle: "solid",
        borderWidth: "1px",
        userSelect: "none",
        transition: "all 300ms",
        cursor: "pointer",
        _disabled: {
          pointerEvents: "none",
          opacity: "0.5"
        }
      },
      variants: {
        color: {
          primary: {
            backgroundColor: "primary",
            color: "grey.night",
            borderColor: "primary",
            _hover: {
              backgroundColor: "#C5F6CB"
              // @todo replace with token
            },
            _active: {
              backgroundColor: "#78E284"
              // @todo replace with token
            },
            _light: {
              color: "white"
            }
          },
          secondary: {
            bg: "grey.night",
            borderColor: "grey.600",
            "& .btn-icon": {
              color: "primary"
            },
            _hover: {
              backgroundColor: "grey.700"
            },
            _active: {
              backgroundColor: "grey.black"
            },
            _light: {
              bg: "brand.pale",
              borderColor: "brand.pale",
              color: "grey.night",
              "& .btn-icon": {
                color: "grey.night"
              },
              _hover: {
                backgroundColor: "#C5F6CB"
                // @todo replace with token
              },
              _active: {
                backgroundColor: "#78E284",
                // @todo replace with token
                borderColor: "#78E284"
                // @todo replace with token
              }
            }
          },
          transparent: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            color: "neutral",
            "& .btn-icon": {
              color: "primary"
            },
            "& .btn-label": {
              textDecoration: "underline",
              textDecorationColor: "lucid.400",
              textDecorationThickness: "1px",
              textUnderlineOffset: "25%"
            },
            _hover: {
              backgroundColor: "grey.night"
            },
            _active: {
              backgroundColor: "black"
            },
            _light: {
              _hover: {
                backgroundColor: "grey.50",
                borderColor: "grey.100"
              },
              _active: {
                backgroundColor: "grey.100"
              }
            }
          }
        },
        size: {
          sm: {
            fontSize: "sm",
            gap: "sm",
            paddingBlock: "xs",
            paddingInline: "lg"
          },
          md: {
            fontSize: "md",
            gap: "sm",
            paddingBlock: "sm",
            paddingInline: "lg",
            "& .btn-icon": {
              fontSize: "lg"
            }
          },
          lg: {
            fontSize: "lg",
            gap: "md",
            paddingBlock: "md",
            paddingInline: "xl"
          }
        },
        order: {
          regular: {
            "& .btn-icon": {
              order: "1"
            },
            "& .btn-label": {
              order: "2"
            }
          },
          inverse: {
            "& .btn-icon": {
              order: "2"
            },
            "& .btn-label": {
              order: "1"
            }
          }
        }
      },
      defaultVariants: {
        color: "secondary",
        size: "md",
        order: "regular"
      }
    }), s = g(() => _(
      l.raw({ color: r.color, size: r.size, order: r.order })
    ));
    return (d, i) => (h(), j(de(t.value), {
      class: x(["btn", s.value]),
      type: o.value,
      href: r.to,
      title: r.label,
      target: n.value,
      rel: a.value,
      disabled: r.disabled === !0 ? !0 : null
    }, {
      default: Y(() => [
        r.icon ? (h(), S("span", {
          key: 0,
          class: x([
            "btn-icon",
            "icon",
            `icon-${r.icon}`
          ])
        }, null, 2)) : B("", !0),
        r.label ? (h(), S("span", {
          key: 1,
          innerHTML: r.label,
          class: "btn-label"
        }, null, 8, Ze)) : B("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), ur = /* @__PURE__ */ w({
  __name: "Card",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const r = e, o = Ue({
      slots: ["root", "container"],
      base: {
        root: {
          display: "flex",
          position: "relative",
          zIndex: "1",
          maxWidth: "100%",
          padding: "3xs"
        },
        container: {
          display: "flex",
          position: "relative",
          zIndex: "5",
          flexDirection: "column",
          flexGrow: "1",
          bg: "grey.black",
          gap: "lg",
          _light: {
            bg: "white"
          }
        }
      },
      variants: {
        borderColor: {
          default: {
            root: {
              bg: "lucid.50"
            }
          },
          primary: {
            root: {
              bg: "primary"
            }
          },
          none: {
            root: {
              bg: "transparent"
            }
          }
        },
        borderRadius: {
          md: {
            root: {
              borderRadius: "xl"
            },
            container: {
              borderRadius: "calc( var(--radii-xl) - 2px )"
            }
          },
          lg: {
            root: {
              borderRadius: "2xl"
            },
            container: {
              borderRadius: "calc( var(--radii-2xl) - 2px )"
            }
          },
          xl: {
            root: {
              borderRadius: "4xl"
            },
            container: {
              borderRadius: "calc( var(--radii-4xl) - 2px )"
            }
          }
        }
      },
      defaultVariants: {
        borderColor: "default",
        borderRadius: "md"
      }
    })({
      borderColor: r.borderColor,
      borderRadius: "xl"
    });
    return (n, a) => (h(), S("div", {
      class: x(p(o).root)
    }, [
      k(n.$slots, "wrapper-before"),
      z("div", {
        class: x(p(o).container)
      }, [
        k(n.$slots, "default", {}, () => [
          k(n.$slots, "header"),
          k(n.$slots, "body"),
          k(n.$slots, "footer")
        ])
      ], 2),
      k(n.$slots, "wrapper-after")
    ], 2));
  }
});
function Je(e, r, t) {
  const o = T(null), n = T(0), a = T([]), l = T(null), s = T(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, i = g(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), v = g(() => {
    var u;
    return Math.ceil((((u = o.value) == null ? void 0 : u.length) ?? 0) / a.value.length);
  }), m = g(() => {
    var f;
    const u = ((f = o.value) == null ? void 0 : f.length) ?? 0;
    return u > 0 && a.value.length === u;
  });
  ce(i, (u, f) => {
    u && u.classList.add(d.itemActiveClass), f && f.classList.remove(d.itemActiveClass);
  });
  const c = (u) => {
    if (!o.value) return null;
    if (u === "first") {
      const f = a.value[0];
      return f ? Array.from(o.value).indexOf(f) - 1 : null;
    }
    if (u === "last") {
      const f = a.value[a.value.length - 1];
      return f ? Array.from(o.value).indexOf(f) + 1 : null;
    }
    return null;
  }, b = () => {
    const u = l.value === "next" ? "end" : "start", f = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[f] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[f].style.scrollSnapAlign = u, o.value[f].scrollIntoView({ behavior: "smooth" }), n.value = f;
  }, y = () => {
    const u = l.value === "prev" ? c("first") : c("last");
    if (!(!o.value || !o.value.length)) {
      if (u === null || !o.value || o.value[u] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[u].scrollIntoView({ behavior: "smooth" }), n.value = u;
    }
  }, C = () => {
    l.value = "next", e.scrollMode === "item" ? b() : e.scrollMode === "viewport" ? y() : console.warn("No more items to scroll next");
  }, O = () => {
    l.value = "prev", e.scrollMode === "item" ? b() : e.scrollMode === "viewport" ? y() : console.warn("No more items to scroll prev");
  }, V = (u) => {
    u.deltaY > 0 ? C() : O();
  };
  return H(() => {
    var u;
    o.value = t.default ? ((u = r.value) == null ? void 0 : u.querySelectorAll(":scope > *")) ?? null : null, s.value = new IntersectionObserver((f) => {
      f.forEach((R) => {
        R.isIntersecting ? (R.target.dataset.carouselVisibility = "visible", R.target.classList.add(d.itemVisibleClass)) : (delete R.target.dataset.carouselVisibility, R.target.classList.remove(d.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((R) => R.dataset.carouselVisibility === "visible");
    }, {
      root: r.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && s.value && o.value.forEach((f) => s.value.observe(f));
  }), G(() => {
    r.value = null, o.value = null, n.value = 0, s.value && s.value.disconnect();
  }), {
    handleNext: C,
    handlePrev: O,
    handleWheel: V,
    carouselItems: o,
    carouselItem: i,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: m,
    pages: v
  };
}
const br = /* @__PURE__ */ w({
  __name: "Carousel",
  props: {
    scrollMode: {
      type: String,
      default: "item",
      validator: (e) => ["item", "viewport"].includes(e)
    },
    classWrapper: {
      type: Object,
      default: null
    },
    classCarousel: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const r = e, t = ue(), o = T(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: s,
      carouselItem: d,
      visibleCarouselItems: i,
      currentCarouselItemIndex: v,
      scrollDirection: m,
      allItemsVisible: c
    } = Je(r, o, t);
    return I("carousel", o), I("handleNext", n), I("handlePrev", a), I("carouselItems", s), I("carouselItem", d), I("visibleCarouselItems", i), I("currentCarouselItemIndex", v), I("scrollDirection", m), I("allItemsVisible", c), (b, y) => (h(), S("div", {
      class: x(p(_)(
        p(_).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        r.classWrapper
      ))
    }, [
      k(b.$slots, "carousel-before"),
      z("ul", {
        ref_key: "carousel",
        ref: o,
        class: x(p(_)(
          p(_).raw({
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            gap: "16px",
            padding: "16px 0px"
          }),
          r.classCarousel
        )),
        onWheel: y[0] || (y[0] = be(
          //@ts-ignore
          (...C) => p(l) && p(l)(...C),
          ["prevent"]
        ))
      }, [
        k(b.$slots, "default")
      ], 34),
      k(b.$slots, "carousel-after")
    ], 2));
  }
}), ne = /* @__PURE__ */ w({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = me(), o = g(() => r.id || `field-${t}`), n = g(() => r.error ? `${o.value}-error` : null), a = g(() => r.message ? `${o.value}-message` : null), l = g(() => !!r.error);
    I("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: r.error,
      message: r.message
    });
    const s = _({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (d, i) => (h(), S("div", {
      class: x([p(s), r.class])
    }, [
      k(d.$slots, "default")
    ], 2));
  }
}), Qe = /* @__PURE__ */ w({
  __name: "FieldRequired",
  setup(e) {
    return (r, t) => (h(), S("span", {
      class: x(p(_)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), er = ["for", "aria-disabled"], ae = /* @__PURE__ */ w({
  __name: "FieldLabel",
  props: {
    label: {},
    for: { default: void 0 },
    size: { default: "md" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = D("fieldContext", null), o = g(() => r.for || (t == null ? void 0 : t.fieldId) || void 0), n = W({
      base: {
        display: "block",
        fontWeight: "500",
        paddingX: "xs",
        color: { base: "neutral" },
        lineHeight: "1",
        userSelect: "none",
        cursor: "pointer",
        transition: "color 0.2s ease-in-out",
        _disabled: {
          color: { base: "grey.600", _light: "grey.400" },
          cursor: "not-allowed"
        }
      },
      variants: {
        size: {
          sm: {
            fontSize: "sm"
          },
          md: {
            fontSize: "md"
          },
          lg: {
            fontSize: "lg"
          }
        },
        disabled: {
          true: {},
          false: {}
        }
      },
      defaultVariants: {
        size: "md",
        disabled: !1
      }
    });
    return (a, l) => (h(), S("label", {
      for: o.value,
      class: x([
        p(n)({
          size: r.size,
          disabled: r.disabled
        }),
        r.class
      ]),
      "aria-disabled": r.disabled
    }, [
      ge(fe(r.label) + " ", 1),
      r.required ? (h(), j(Qe, { key: 0 })) : B("", !0)
    ], 10, er));
  }
}), rr = ["id", "innerHTML"], le = /* @__PURE__ */ w({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = D("fieldContext", null), o = g(() => r.message || (t == null ? void 0 : t.message) || null), n = g(() => r.id || (t == null ? void 0 : t.messageId) || void 0), a = _({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "400",
      color: "grey.300",
      wordBreak: "break-word",
      _light: {
        color: "grey.500"
      }
    });
    return (l, s) => o.value ? (h(), S("span", {
      key: 0,
      id: n.value,
      class: x([p(a), r.class]),
      innerHTML: o.value
    }, null, 10, rr)) : B("", !0);
  }
}), tr = ["id", "innerHTML"], se = /* @__PURE__ */ w({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = D("fieldContext", null), o = g(() => r.message || (t == null ? void 0 : t.errorMessage) || null), n = g(() => r.id || (t == null ? void 0 : t.errorId) || void 0), a = _({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, s) => o.value ? (h(), S("span", {
      key: 0,
      id: n.value,
      class: x([p(a), r.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, tr)) : B("", !0);
  }
}), or = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], ie = /* @__PURE__ */ w({
  __name: "FormInput",
  props: {
    type: { default: "text" },
    modelValue: { default: null },
    id: { default: "" },
    name: { default: "" },
    placeholder: { default: null },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    autocomplete: { default: null },
    size: { default: "md" },
    valid: { type: [Boolean, String], default: "none" },
    class: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = e, o = r, n = D("fieldContext", null), a = g(() => {
      if (!n) return;
      const i = [];
      return n.errorId && i.push(n.errorId), n.helperId && i.push(n.helperId), i.length > 0 ? i.join(" ") : void 0;
    }), l = g(() => t.valid === !0 ? !1 : t.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), s = (i) => {
      const v = i.target;
      o("update:modelValue", v.value);
    }, d = W({
      base: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        minWidth: "200px",
        backgroundColor: "grey.black",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.dusk",
        borderRadius: "lg",
        outlineWidth: "3px",
        outlineColor: "transparent",
        outlineOffset: "0px",
        outlineStyle: "solid",
        fontWeight: "450",
        lineHeight: "1.5",
        color: "neutral",
        transition: "all 300ms",
        _placeholder: {
          color: "lucid.600"
        },
        _hover: {
          borderColor: "grey.400"
        },
        _focus: {
          outlineColor: "primary/50",
          borderColor: "primary !important"
        },
        _disabled: {
          opacity: "0.5",
          cursor: "not-allowed"
        },
        _light: {
          backgroundColor: "white",
          borderColor: "grey.200",
          color: "grey.night",
          _hover: {
            borderColor: "grey.300"
          }
        }
      },
      variants: {
        size: {
          sm: {
            paddingX: "md",
            paddingY: "xs",
            fontSize: "sm"
          },
          md: {
            paddingX: "lg",
            paddingY: "sm",
            fontSize: "md"
          },
          lg: {
            paddingX: "xl",
            paddingY: "md",
            fontSize: "lg"
          }
        },
        valid: {
          true: {
            borderColor: "success !important",
            _focus: {
              borderColor: "success !important",
              outlineColor: "success/50 !important"
            }
          },
          false: {
            borderColor: "danger !important",
            _focus: {
              borderColor: "danger !important",
              outlineColor: "danger/50 !important"
            }
          },
          none: {}
        }
      },
      defaultVariants: {
        size: "md",
        valid: "none"
      }
    });
    return (i, v) => (h(), S("input", {
      id: e.id,
      name: e.name,
      class: x([p(d)({ size: e.size, valid: t.valid }), t.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: s
    }, null, 42, or));
  }
}), nr = /* @__PURE__ */ w({
  __name: "FieldInput",
  props: {
    name: { default: void 0 },
    type: { default: "text" },
    label: { default: null },
    placeholder: { default: null },
    modelValue: { default: null },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    autocomplete: { default: null },
    message: { default: null },
    error: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = e, o = g(() => t.error ? !1 : "none"), n = r, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, s) => (h(), j(ne, null, {
      default: Y(() => [
        e.label ? (h(), j(ae, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : B("", !0),
        pe(ie, {
          id: e.id,
          name: e.name,
          type: e.type,
          placeholder: e.placeholder,
          "model-value": e.modelValue,
          disabled: e.disabled,
          required: e.required,
          autocomplete: e.autocomplete,
          valid: o.value,
          "onUpdate:modelValue": a
        }, null, 8, ["id", "name", "type", "placeholder", "model-value", "disabled", "required", "autocomplete", "valid"]),
        e.message || e.error ? (h(), S("div", {
          key: 1,
          class: x(p(_)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (h(), j(le, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : B("", !0),
          e.error ? (h(), j(se, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : B("", !0)
        ], 2)) : B("", !0)
      ]),
      _: 1
    }));
  }
}), mr = {
  Input: nr,
  Base: ne,
  Label: ae,
  Error: se,
  Message: le
}, ar = ["action", "method", "id", "name", "aria-label"], lr = ["placeholder"], sr = /* @__PURE__ */ w({
  __name: "FormPrompt",
  props: {
    action: {},
    method: { default: "post" },
    id: {},
    name: {},
    ariaLabel: { default: void 0 },
    placeholder: { default: void 0 }
  },
  emits: ["submit"],
  setup(e, { emit: r }) {
    const t = r, o = T(null), n = (a) => {
      a.preventDefault(), t("submit", o.value);
    };
    return (a, l) => (h(), S("form", {
      ref_key: "promptForm",
      ref: o,
      action: e.action,
      method: e.method,
      id: e.id,
      name: e.name,
      "aria-label": e.ariaLabel,
      onSubmit: n,
      class: x(p(_)({
        containerType: "inline-size",
        display: "flex",
        flexDirection: "column",
        gap: "xl",
        width: "100%",
        bgColor: "grey.night",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey.600",
        borderRadius: "2xl",
        padding: "xl",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineOffset: "0px",
        outlineColor: "transparent",
        transition: "all 200ms",
        _light: {
          bgColor: "white",
          borderColor: "grey.200"
        }
      }))
    }, [
      k(a.$slots, "parameter"),
      k(a.$slots, "textarea", {}, () => [
        z("textarea", {
          name: "message",
          class: x(p(_)({
            color: "neutral",
            padding: "xs",
            resize: "none",
            fieldSizing: "content",
            _focus: {
              outline: "none"
            }
          })),
          style: {
            minHeight: "var(--textarea-min-h, 120px)",
            maxHeight: "var(--textarea-max-h, 300px)"
          },
          placeholder: e.placeholder
        }, null, 10, lr)
      ]),
      k(a.$slots, "footer")
    ], 42, ar));
  }
}), ir = /* @__PURE__ */ w({
  __name: "FormPromptFooter",
  setup(e) {
    return (r, t) => (h(), S("div", {
      class: x(p(_)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      z("div", {
        class: x(p(_)({
          flex: "1",
          flexBasis: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "md",
          "@container (min-width: 600px)": {
            flexBasis: "0%"
          }
        }))
      }, [
        k(r.$slots, "inputs")
      ], 2),
      z("div", {
        class: x(p(_)({
          flex: "0",
          flexBasis: "100%",
          "@container (min-width: 600px)": {
            flexBasis: "auto"
          }
        }))
      }, [
        k(r.$slots, "action")
      ], 2)
    ], 2));
  }
}), gr = {
  Input: ie,
  Prompt: sr,
  PromptFooter: ir
};
function fr(e) {
  const r = T(!1), t = (a) => {
    a.preventDefault(), r.value = !0;
  }, o = (a) => {
    a.preventDefault(), r.value = !1;
  }, n = () => {
    r.value ? r.value = !1 : r.value = !0;
  };
  return H(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", t), e.el.value.addEventListener("mouseleave", o));
  }), G(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", t), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: P(r),
    toggle: n
  };
}
function pr(e) {
  const r = g(() => e ? new FormData(e) : null), t = g(() => r.value ? Object.fromEntries(r.value.entries()) : null);
  return {
    formData: P(r),
    jsonData: P(t)
  };
}
export {
  cr as Button,
  ur as Card,
  br as Carousel,
  mr as Field,
  gr as Form,
  Je as useCarousel,
  fr as useFlyout,
  pr as useFormData
};
