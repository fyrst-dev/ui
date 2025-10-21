import { defineComponent as V, computed as _, createBlock as J, openBlock as B, resolveDynamicComponent as Q, normalizeClass as I, withCtx as rr, createElementBlock as R, createCommentVNode as W, unref as y, renderSlot as x, createElementVNode as N, ref as O, watch as er, onMounted as tr, onUnmounted as or, useSlots as nr, provide as v, withModifiers as sr } from "vue";
function j(r) {
  return typeof r == "object" && r != null && !Array.isArray(r);
}
var ar = (r) => typeof r == "object" && r !== null;
function M(r) {
  return Object.fromEntries(Object.entries(r ?? {}).filter(([e, o]) => o !== void 0));
}
var ir = (r) => r === "base";
function lr(r) {
  return r.slice().filter((e) => !ir(e));
}
function z(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
}
function cr(r) {
  let e = "", o;
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) e = z(o % 52) + e;
  return z(o % 52) + e;
}
function dr(r, e) {
  let o = e.length;
  for (; o; ) r = r * 33 ^ e.charCodeAt(--o);
  return r;
}
function ur(r) {
  return cr(dr(5381, r) >>> 0);
}
var F = /\s*!(important)?/i;
function br(r) {
  return typeof r == "string" ? F.test(r) : !1;
}
function gr(r) {
  return typeof r == "string" ? r.replace(F, "").trim() : r;
}
function Y(r) {
  return typeof r == "string" ? r.replaceAll(" ", "_") : r;
}
var E = (r) => {
  const e = /* @__PURE__ */ new Map();
  return (...t) => {
    const n = JSON.stringify(t);
    if (e.has(n))
      return e.get(n);
    const s = r(...t);
    return e.set(n, s), s;
  };
}, pr = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function P(...r) {
  return r.reduce((e, o) => (o && Object.keys(o).forEach((t) => {
    if (pr.has(t)) return;
    const n = e[t], s = o[t];
    j(n) && j(s) ? e[t] = P(n, s) : e[t] = s;
  }), e), {});
}
var mr = (r) => r != null;
function $(r, e, o = {}) {
  const { stop: t, getKey: n } = o;
  function s(a, i = []) {
    if (ar(a)) {
      const d = {};
      for (const [g, f] of Object.entries(a)) {
        const b = (n == null ? void 0 : n(g, f)) ?? g, l = [...i, b];
        if (t != null && t(a, l))
          return e(a, i);
        const u = s(f, l);
        mr(u) && (d[b] = u);
      }
      return d;
    }
    return e(a, i);
  }
  return s(r);
}
function fr(r, e) {
  return r.reduce(
    (o, t, n) => {
      const s = e[n];
      return t != null && (o[s] = t), o;
    },
    {}
  );
}
function H(r, e, o = !0) {
  const { utility: t, conditions: n } = e, { hasShorthand: s, resolveShorthand: a } = t;
  return $(
    r,
    (i) => Array.isArray(i) ? fr(i, n.breakpoints.keys) : i,
    {
      stop: (i) => Array.isArray(i),
      getKey: o ? (i) => s ? a(i) : i : void 0
    }
  );
}
var hr = {
  shift: (r) => r,
  finalize: (r) => r,
  breakpoints: { keys: [] }
}, vr = (r) => typeof r == "string" ? r.replaceAll(/[\n\s]+/g, " ") : r;
function xr(r) {
  const { utility: e, hash: o, conditions: t = hr } = r, n = (a) => [e.prefix, a].filter(Boolean).join("-"), s = (a, i) => {
    let d;
    if (o) {
      const g = [...t.finalize(a), i];
      d = n(e.toHash(g, ur));
    } else
      d = [...t.finalize(a), n(i)].join(":");
    return d;
  };
  return E(({ base: a, ...i } = {}) => {
    const d = Object.assign(i, a), g = H(d, r), f = /* @__PURE__ */ new Set();
    return $(g, (b, l) => {
      if (b == null) return;
      const u = br(b), [m, ...h] = t.shift(l), k = lr(h), T = e.transform(m, gr(vr(b)));
      let c = s(k, T.className);
      u && (c = `${c}!`), f.add(c);
    }), Array.from(f).join(" ");
  });
}
function yr(...r) {
  return r.flat().filter((e) => j(e) && Object.keys(M(e)).length > 0);
}
function _r(r) {
  function e(n) {
    const s = yr(...n);
    return s.length === 1 ? s : s.map((a) => H(a, r));
  }
  function o(...n) {
    return P(...e(n));
  }
  function t(...n) {
    return Object.assign({}, ...e(n));
  }
  return { mergeCss: E(o), assignCss: t };
}
var kr = /([A-Z])/g, Cr = /^ms-/, Sr = E((r) => r.startsWith("--") ? r : r.replace(kr, "-$1").replace(Cr, "-ms-").toLowerCase()), wr = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${wr.split(",").join("|")}`;
var Tr = (r = {}) => {
  const e = (n) => {
    var s;
    return {
      className: [r.className, n].filter(Boolean).join("__"),
      base: ((s = r.base) == null ? void 0 : s[n]) ?? {},
      variants: {},
      defaultVariants: r.defaultVariants ?? {},
      compoundVariants: r.compoundVariants ? Or(r.compoundVariants, n) : []
    };
  }, t = (r.slots ?? []).map((n) => [n, e(n)]);
  for (const [n, s] of Object.entries(r.variants ?? {}))
    for (const [a, i] of Object.entries(s))
      t.forEach(([d, g]) => {
        var f;
        (f = g.variants)[n] ?? (f[n] = {}), g.variants[n][a] = i[d] ?? {};
      });
  return Object.fromEntries(t);
}, Or = (r, e) => r.filter((o) => o.css[e]).map((o) => ({ ...o, css: o.css[e] }));
function G(r, ...e) {
  const o = Object.getOwnPropertyDescriptors(r), t = Object.keys(o), n = (a) => {
    const i = {};
    for (let d = 0; d < a.length; d++) {
      const g = a[d];
      o[g] && (Object.defineProperty(i, g, o[g]), delete o[g]);
    }
    return i;
  }, s = (a) => n(Array.isArray(a) ? a : t.filter(a));
  return e.map(s).concat(n(t));
}
var Br = (...r) => {
  const e = r.reduce((o, t) => (t && t.forEach((n) => o.add(n)), o), /* @__PURE__ */ new Set([]));
  return Array.from(e);
};
const Ir = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,base", q = new Set(Ir.split(",")), Rr = /^@|&|&$/;
function D(r) {
  return q.has(r) || Rr.test(r);
}
const Er = /^_/, jr = /&|@/;
function Vr(r) {
  return r.map((e) => q.has(e) ? e.replace(Er, "") : jr.test(e) ? `[${Y(e.trim())}]` : e);
}
function Mr(r) {
  return r.sort((e, o) => {
    const t = D(e), n = D(o);
    return t && !n ? 1 : !t && n ? -1 : 0;
  });
}
const Pr = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", K = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
Pr.split(",").forEach((r) => {
  const [e, o] = r.split(":"), [t, ...n] = o.split("/");
  K.set(e, t), n.length && n.forEach((s) => {
    U.set(s === "1" ? t : s, e);
  });
});
const L = (r) => U.get(r) || r, Z = {
  conditions: {
    shift: Mr,
    finalize: Vr,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (r, e) => {
      const o = L(r);
      return { className: `${K.get(o) || Sr(o)}_${Y(e)}` };
    },
    hasShorthand: !0,
    toHash: (r, e) => e(r.join(":")),
    resolveShorthand: L
  }
}, Ar = xr(Z), S = (...r) => Ar(w(...r));
S.raw = (...r) => w(...r);
const { mergeCss: w } = _r(Z);
function Wr() {
  let r = "", e = 0, o;
  for (; e < arguments.length; )
    (o = arguments[e++]) && typeof o == "string" && (r && (r += " "), r += o);
  return r;
}
const X = (r) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...r
});
function A(r) {
  const { base: e, variants: o, defaultVariants: t, compoundVariants: n } = X(r), s = (l) => ({ ...t, ...M(l) });
  function a(l = {}) {
    var k;
    const u = s(l);
    let m = { ...e };
    for (const [T, c] of Object.entries(u))
      (k = o[T]) != null && k[c] && (m = w(m, o[T][c]));
    const h = zr(n, u);
    return w(m, h);
  }
  function i(l) {
    const u = X(l.config), m = Br(l.variantKeys, Object.keys(o));
    return A({
      base: w(e, u.base),
      variants: Object.fromEntries(
        m.map((h) => [h, w(o[h], u.variants[h])])
      ),
      defaultVariants: P(t, u.defaultVariants),
      compoundVariants: [...n, ...u.compoundVariants]
    });
  }
  function d(l) {
    return S(a(l));
  }
  const g = Object.keys(o);
  function f(l) {
    return G(l, g);
  }
  const b = Object.fromEntries(Object.entries(o).map(([l, u]) => [l, Object.keys(u)]));
  return Object.assign(E(d), {
    __cva__: !0,
    variantMap: b,
    variantKeys: g,
    raw: a,
    config: r,
    merge: i,
    splitVariantProps: f,
    getVariantProps: s
  });
}
function zr(r, e) {
  let o = {};
  return r.forEach((t) => {
    Object.entries(t).every(([s, a]) => s === "css" ? !0 : (Array.isArray(a) ? a : [a]).some((d) => e[s] === d)) && (o = w(o, t.css));
  }), o;
}
function Dr(r) {
  const e = Object.entries(Tr(r)).map(([b, l]) => [b, A(l)]), o = r.defaultVariants ?? {}, t = e.reduce((b, [l, u]) => (r.className && (b[l] = u.config.className), b), {});
  function n(b) {
    const l = e.map(([u, m]) => [u, Wr(m(b), t[u])]);
    return Object.fromEntries(l);
  }
  function s(b) {
    const l = e.map(([u, m]) => [u, m.raw(b)]);
    return Object.fromEntries(l);
  }
  const a = r.variants ?? {}, i = Object.keys(a);
  function d(b) {
    return G(b, i);
  }
  const g = (b) => ({ ...o, ...M(b) }), f = Object.fromEntries(
    Object.entries(a).map(([b, l]) => [b, Object.keys(l)])
  );
  return Object.assign(E(n), {
    __cva__: !1,
    raw: s,
    config: r,
    variantMap: f,
    variantKeys: i,
    classNameMap: t,
    splitVariantProps: d,
    getVariantProps: g
  });
}
const Lr = ["innerHTML"], qr = /* @__PURE__ */ V({
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
  setup(r) {
    const e = r, o = _(() => e.to ? "a" : "button"), t = _(() => o.value === "button" && e.type ? e.type : o.value === "button" ? "button" : null), n = _(() => e.external && o.value === "a" ? "_blank" : null), s = _(() => e.external && o.value === "a" ? "noopener noreferrer" : null), a = A({
      base: {
        display: "inline flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "600",
        lineHeight: "1.5",
        borderRadius: "md",
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
              bg: "green.pale",
              borderColor: "green.pale",
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
    }), i = _(() => S(
      a.raw({ color: e.color, size: e.size, order: e.order })
    ));
    return (d, g) => (B(), J(Q(o.value), {
      class: I(["btn", i.value]),
      type: t.value,
      href: e.to,
      title: e.label,
      target: n.value,
      rel: s.value,
      disabled: e.disabled === !0 ? !0 : null
    }, {
      default: rr(() => [
        e.icon ? (B(), R("span", {
          key: 0,
          class: I([
            "btn-icon",
            "icon",
            `icon-${e.icon}`
          ])
        }, null, 2)) : W("", !0),
        e.label ? (B(), R("span", {
          key: 1,
          innerHTML: e.label,
          class: "btn-label"
        }, null, 8, Lr)) : W("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), Kr = /* @__PURE__ */ V({
  __name: "Card",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(r) {
    const e = r, t = Dr({
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
      borderColor: e.borderColor,
      borderRadius: "xl"
    });
    return (n, s) => (B(), R("div", {
      class: I(y(t).root)
    }, [
      x(n.$slots, "wrapper-before"),
      N("div", {
        class: I(y(t).container)
      }, [
        x(n.$slots, "default", {}, () => [
          x(n.$slots, "header"),
          x(n.$slots, "body"),
          x(n.$slots, "footer")
        ])
      ], 2),
      x(n.$slots, "wrapper-after")
    ], 2));
  }
});
function Xr(r, e, o) {
  const t = O(null), n = O(0), s = O([]), a = O(null), i = O(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, g = _(() => (t.value ?? []).length > 0 ? t.value[n.value] : null), f = _(() => {
    var c;
    return Math.ceil((((c = t.value) == null ? void 0 : c.length) ?? 0) / s.value.length);
  }), b = _(() => {
    var p;
    const c = ((p = t.value) == null ? void 0 : p.length) ?? 0;
    return c > 0 && s.value.length === c;
  });
  er(g, (c, p) => {
    c && c.classList.add(d.itemActiveClass), p && p.classList.remove(d.itemActiveClass);
  });
  const l = (c) => {
    if (!t.value) return null;
    if (c === "first") {
      const p = s.value[0];
      return p ? Array.from(t.value).indexOf(p) - 1 : null;
    }
    if (c === "last") {
      const p = s.value[s.value.length - 1];
      return p ? Array.from(t.value).indexOf(p) + 1 : null;
    }
    return null;
  }, u = () => {
    const c = a.value === "next" ? "end" : "start", p = a.value === "next" ? n.value + 1 : n.value - 1;
    if (!t.value || t.value[p] === void 0) {
      console.warn("No more items to scroll", a.value);
      return;
    }
    t.value[p].style.scrollSnapAlign = c, t.value[p].scrollIntoView({ behavior: "smooth" }), n.value = p;
  }, m = () => {
    const c = a.value === "prev" ? l("first") : l("last");
    if (!(!t.value || !t.value.length)) {
      if (c === null || !t.value || t.value[c] === void 0) {
        console.warn("No more items to scroll", a.value);
        return;
      }
      t.value[c].scrollIntoView({ behavior: "smooth" }), n.value = c;
    }
  }, h = () => {
    a.value = "next", r.scrollMode === "item" ? u() : r.scrollMode === "viewport" ? m() : console.warn("No more items to scroll next");
  }, k = () => {
    a.value = "prev", r.scrollMode === "item" ? u() : r.scrollMode === "viewport" ? m() : console.warn("No more items to scroll prev");
  }, T = (c) => {
    c.deltaY > 0 ? h() : k();
  };
  return tr(() => {
    var c;
    t.value = o.default ? ((c = e.value) == null ? void 0 : c.querySelectorAll(":scope > *")) ?? null : null, i.value = new IntersectionObserver((p) => {
      p.forEach((C) => {
        C.isIntersecting ? (C.target.dataset.carouselVisibility = "visible", C.target.classList.add(d.itemVisibleClass)) : (delete C.target.dataset.carouselVisibility, C.target.classList.remove(d.itemVisibleClass));
      }), s.value = Array.from(t.value ?? []).filter((C) => C.dataset.carouselVisibility === "visible");
    }, {
      root: e.value,
      rootMargin: "0px",
      threshold: 1
    }), t.value && i.value && t.value.forEach((p) => i.value.observe(p));
  }), or(() => {
    e.value = null, t.value = null, n.value = 0, i.value && i.value.disconnect();
  }), {
    handleNext: h,
    handlePrev: k,
    handleWheel: T,
    carouselItems: t,
    carouselItem: g,
    currentCarouselItemIndex: n,
    visibleCarouselItems: s,
    scrollDirection: a,
    allItemsVisible: b,
    pages: f
  };
}
const Ur = /* @__PURE__ */ V({
  __name: "Carousel",
  props: {
    scrollMode: {
      type: String,
      default: "item",
      validator: (r) => ["item", "viewport"].includes(r)
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
  setup(r) {
    const e = r, o = nr(), t = O(null), {
      handleNext: n,
      handlePrev: s,
      handleWheel: a,
      carouselItems: i,
      carouselItem: d,
      visibleCarouselItems: g,
      currentCarouselItemIndex: f,
      scrollDirection: b,
      allItemsVisible: l
    } = Xr(e, t, o);
    return v("carousel", t), v("handleNext", n), v("handlePrev", s), v("carouselItems", i), v("carouselItem", d), v("visibleCarouselItems", g), v("currentCarouselItemIndex", f), v("scrollDirection", b), v("allItemsVisible", l), (u, m) => (B(), R("div", {
      class: I(y(S)(
        y(S).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        e.classWrapper
      ))
    }, [
      x(u.$slots, "carousel-before"),
      N("ul", {
        ref_key: "carousel",
        ref: t,
        class: I(y(S)(
          y(S).raw({
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
          e.classCarousel
        )),
        onWheel: m[0] || (m[0] = sr(
          //@ts-ignore
          (...h) => y(a) && y(a)(...h),
          ["prevent"]
        ))
      }, [
        x(u.$slots, "default")
      ], 34),
      x(u.$slots, "carousel-after")
    ], 2));
  }
}), Nr = (r, e) => {
  const o = r.__vccOpts || r;
  for (const [t, n] of e)
    o[t] = n;
  return o;
}, Fr = {}, Yr = {
  type: "text",
  value: "meddl"
};
function $r(r, e) {
  return B(), R("input", Yr);
}
const Hr = /* @__PURE__ */ Nr(Fr, [["render", $r]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Text: Hr
}, Symbol.toStringTag, { value: "Module" }));
export {
  qr as Button,
  Kr as Card,
  Ur as Carousel,
  Zr as Field
};
