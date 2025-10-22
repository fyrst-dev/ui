import { defineComponent as I, computed as f, createBlock as j, openBlock as x, resolveDynamicComponent as ae, normalizeClass as _, withCtx as q, createElementBlock as w, createCommentVNode as E, unref as v, renderSlot as C, createElementVNode as Y, ref as V, watch as le, onMounted as H, onUnmounted as se, useSlots as ie, provide as k, withModifiers as de, inject as W, createTextVNode as ce, toDisplayString as A, createVNode as ue } from "vue";
function P(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var be = (e) => typeof e == "object" && e !== null;
function D(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([r, t]) => t !== void 0));
}
var ge = (e) => e === "base";
function pe(e) {
  return e.slice().filter((r) => !ge(r));
}
function $(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function me(e) {
  let r = "", t;
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = $(t % 52) + r;
  return $(t % 52) + r;
}
function fe(e, r) {
  let t = r.length;
  for (; t; ) e = e * 33 ^ r.charCodeAt(--t);
  return e;
}
function he(e) {
  return me(fe(5381, e) >>> 0);
}
var G = /\s*!(important)?/i;
function ve(e) {
  return typeof e == "string" ? G.test(e) : !1;
}
function xe(e) {
  return typeof e == "string" ? e.replace(G, "").trim() : e;
}
function U(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var z = (e) => {
  const r = /* @__PURE__ */ new Map();
  return (...o) => {
    const n = JSON.stringify(o);
    if (r.has(n))
      return r.get(n);
    const a = e(...o);
    return r.set(n, a), a;
  };
}, ye = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function L(...e) {
  return e.reduce((r, t) => (t && Object.keys(t).forEach((o) => {
    if (ye.has(o)) return;
    const n = r[o], a = t[o];
    P(n) && P(a) ? r[o] = L(n, a) : r[o] = a;
  }), r), {});
}
var _e = (e) => e != null;
function K(e, r, t = {}) {
  const { stop: o, getKey: n } = t;
  function a(l, s = []) {
    if (be(l)) {
      const d = {};
      for (const [i, m] of Object.entries(l)) {
        const g = (n == null ? void 0 : n(i, m)) ?? i, c = [...s, g];
        if (o != null && o(l, c))
          return r(l, s);
        const b = a(m, c);
        _e(b) && (d[g] = b);
      }
      return d;
    }
    return r(l, s);
  }
  return a(e);
}
function Se(e, r) {
  return e.reduce(
    (t, o, n) => {
      const a = r[n];
      return o != null && (t[a] = o), t;
    },
    {}
  );
}
function Z(e, r, t = !0) {
  const { utility: o, conditions: n } = r, { hasShorthand: a, resolveShorthand: l } = o;
  return K(
    e,
    (s) => Array.isArray(s) ? Se(s, n.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: t ? (s) => a ? l(s) : s : void 0
    }
  );
}
var ke = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Ce = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function we(e) {
  const { utility: r, hash: t, conditions: o = ke } = e, n = (l) => [r.prefix, l].filter(Boolean).join("-"), a = (l, s) => {
    let d;
    if (t) {
      const i = [...o.finalize(l), s];
      d = n(r.toHash(i, he));
    } else
      d = [...o.finalize(l), n(s)].join(":");
    return d;
  };
  return z(({ base: l, ...s } = {}) => {
    const d = Object.assign(s, l), i = Z(d, e), m = /* @__PURE__ */ new Set();
    return K(i, (g, c) => {
      if (g == null) return;
      const b = ve(g), [h, ...y] = o.shift(c), T = pe(y), R = r.transform(h, xe(Ce(g)));
      let u = a(T, R.className);
      b && (u = `${u}!`), m.add(u);
    }), Array.from(m).join(" ");
  });
}
function Ie(...e) {
  return e.flat().filter((r) => P(r) && Object.keys(D(r)).length > 0);
}
function Te(e) {
  function r(n) {
    const a = Ie(...n);
    return a.length === 1 ? a : a.map((l) => Z(l, e));
  }
  function t(...n) {
    return L(...r(n));
  }
  function o(...n) {
    return Object.assign({}, ...r(n));
  }
  return { mergeCss: z(t), assignCss: o };
}
var Be = /([A-Z])/g, Oe = /^ms-/, Re = z((e) => e.startsWith("--") ? e : e.replace(Be, "-$1").replace(Oe, "-ms-").toLowerCase()), Ve = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Ve.split(",").join("|")}`;
var Ee = (e = {}) => {
  const r = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? ze(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, r(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, s] of Object.entries(a))
      o.forEach(([d, i]) => {
        var m;
        (m = i.variants)[n] ?? (m[n] = {}), i.variants[n][l] = s[d] ?? {};
      });
  return Object.fromEntries(o);
}, ze = (e, r) => e.filter((t) => t.css[r]).map((t) => ({ ...t, css: t.css[r] }));
function J(e, ...r) {
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
var Me = (...e) => {
  const r = e.reduce((t, o) => (o && o.forEach((n) => t.add(n)), t), /* @__PURE__ */ new Set([]));
  return Array.from(r);
};
const je = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,base", Q = new Set(je.split(",")), We = /^@|&|&$/;
function X(e) {
  return Q.has(e) || We.test(e);
}
const Pe = /^_/, Ae = /&|@/;
function De(e) {
  return e.map((r) => Q.has(r) ? r.replace(Pe, "") : Ae.test(r) ? `[${U(r.trim())}]` : r);
}
function Le(e) {
  return e.sort((r, t) => {
    const o = X(r), n = X(t);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const $e = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", ee = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
$e.split(",").forEach((e) => {
  const [r, t] = e.split(":"), [o, ...n] = t.split("/");
  ee.set(r, o), n.length && n.forEach((a) => {
    re.set(a === "1" ? o : a, r);
  });
});
const F = (e) => re.get(e) || e, te = {
  conditions: {
    shift: Le,
    finalize: De,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, r) => {
      const t = F(e);
      return { className: `${ee.get(t) || Re(t)}_${U(r)}` };
    },
    hasShorthand: !0,
    toHash: (e, r) => r(e.join(":")),
    resolveShorthand: F
  }
}, Xe = we(te), S = (...e) => Xe(O(...e));
S.raw = (...e) => O(...e);
const { mergeCss: O } = Te(te);
function Fe() {
  let e = "", r = 0, t;
  for (; r < arguments.length; )
    (t = arguments[r++]) && typeof t == "string" && (e && (e += " "), e += t);
  return e;
}
const N = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function M(e) {
  const { base: r, variants: t, defaultVariants: o, compoundVariants: n } = N(e), a = (c) => ({ ...o, ...D(c) });
  function l(c = {}) {
    var T;
    const b = a(c);
    let h = { ...r };
    for (const [R, u] of Object.entries(b))
      (T = t[R]) != null && T[u] && (h = O(h, t[R][u]));
    const y = Ne(n, b);
    return O(h, y);
  }
  function s(c) {
    const b = N(c.config), h = Me(c.variantKeys, Object.keys(t));
    return M({
      base: O(r, b.base),
      variants: Object.fromEntries(
        h.map((y) => [y, O(t[y], b.variants[y])])
      ),
      defaultVariants: L(o, b.defaultVariants),
      compoundVariants: [...n, ...b.compoundVariants]
    });
  }
  function d(c) {
    return S(l(c));
  }
  const i = Object.keys(t);
  function m(c) {
    return J(c, i);
  }
  const g = Object.fromEntries(Object.entries(t).map(([c, b]) => [c, Object.keys(b)]));
  return Object.assign(z(d), {
    __cva__: !0,
    variantMap: g,
    variantKeys: i,
    raw: l,
    config: e,
    merge: s,
    splitVariantProps: m,
    getVariantProps: a
  });
}
function Ne(e, r) {
  let t = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((d) => r[a] === d)) && (t = O(t, o.css));
  }), t;
}
function qe(e) {
  const r = Object.entries(Ee(e)).map(([g, c]) => [g, M(c)]), t = e.defaultVariants ?? {}, o = r.reduce((g, [c, b]) => (e.className && (g[c] = b.config.className), g), {});
  function n(g) {
    const c = r.map(([b, h]) => [b, Fe(h(g), o[b])]);
    return Object.fromEntries(c);
  }
  function a(g) {
    const c = r.map(([b, h]) => [b, h.raw(g)]);
    return Object.fromEntries(c);
  }
  const l = e.variants ?? {}, s = Object.keys(l);
  function d(g) {
    return J(g, s);
  }
  const i = (g) => ({ ...t, ...D(g) }), m = Object.fromEntries(
    Object.entries(l).map(([g, c]) => [g, Object.keys(c)])
  );
  return Object.assign(z(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: m,
    variantKeys: s,
    classNameMap: o,
    splitVariantProps: d,
    getVariantProps: i
  });
}
const Ye = ["innerHTML"], nr = /* @__PURE__ */ I({
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
    const r = e, t = f(() => r.to ? "a" : "button"), o = f(() => t.value === "button" && r.type ? r.type : t.value === "button" ? "button" : null), n = f(() => r.external && t.value === "a" ? "_blank" : null), a = f(() => r.external && t.value === "a" ? "noopener noreferrer" : null), l = M({
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
    }), s = f(() => S(
      l.raw({ color: r.color, size: r.size, order: r.order })
    ));
    return (d, i) => (x(), j(ae(t.value), {
      class: _(["btn", s.value]),
      type: o.value,
      href: r.to,
      title: r.label,
      target: n.value,
      rel: a.value,
      disabled: r.disabled === !0 ? !0 : null
    }, {
      default: q(() => [
        r.icon ? (x(), w("span", {
          key: 0,
          class: _([
            "btn-icon",
            "icon",
            `icon-${r.icon}`
          ])
        }, null, 2)) : E("", !0),
        r.label ? (x(), w("span", {
          key: 1,
          innerHTML: r.label,
          class: "btn-label"
        }, null, 8, Ye)) : E("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), ar = /* @__PURE__ */ I({
  __name: "Card",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const r = e, o = qe({
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
    return (n, a) => (x(), w("div", {
      class: _(v(o).root)
    }, [
      C(n.$slots, "wrapper-before"),
      Y("div", {
        class: _(v(o).container)
      }, [
        C(n.$slots, "default", {}, () => [
          C(n.$slots, "header"),
          C(n.$slots, "body"),
          C(n.$slots, "footer")
        ])
      ], 2),
      C(n.$slots, "wrapper-after")
    ], 2));
  }
});
function He(e, r, t) {
  const o = V(null), n = V(0), a = V([]), l = V(null), s = V(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, i = f(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), m = f(() => {
    var u;
    return Math.ceil((((u = o.value) == null ? void 0 : u.length) ?? 0) / a.value.length);
  }), g = f(() => {
    var p;
    const u = ((p = o.value) == null ? void 0 : p.length) ?? 0;
    return u > 0 && a.value.length === u;
  });
  le(i, (u, p) => {
    u && u.classList.add(d.itemActiveClass), p && p.classList.remove(d.itemActiveClass);
  });
  const c = (u) => {
    if (!o.value) return null;
    if (u === "first") {
      const p = a.value[0];
      return p ? Array.from(o.value).indexOf(p) - 1 : null;
    }
    if (u === "last") {
      const p = a.value[a.value.length - 1];
      return p ? Array.from(o.value).indexOf(p) + 1 : null;
    }
    return null;
  }, b = () => {
    const u = l.value === "next" ? "end" : "start", p = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[p] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[p].style.scrollSnapAlign = u, o.value[p].scrollIntoView({ behavior: "smooth" }), n.value = p;
  }, h = () => {
    const u = l.value === "prev" ? c("first") : c("last");
    if (!(!o.value || !o.value.length)) {
      if (u === null || !o.value || o.value[u] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[u].scrollIntoView({ behavior: "smooth" }), n.value = u;
    }
  }, y = () => {
    l.value = "next", e.scrollMode === "item" ? b() : e.scrollMode === "viewport" ? h() : console.warn("No more items to scroll next");
  }, T = () => {
    l.value = "prev", e.scrollMode === "item" ? b() : e.scrollMode === "viewport" ? h() : console.warn("No more items to scroll prev");
  }, R = (u) => {
    u.deltaY > 0 ? y() : T();
  };
  return H(() => {
    var u;
    o.value = t.default ? ((u = r.value) == null ? void 0 : u.querySelectorAll(":scope > *")) ?? null : null, s.value = new IntersectionObserver((p) => {
      p.forEach((B) => {
        B.isIntersecting ? (B.target.dataset.carouselVisibility = "visible", B.target.classList.add(d.itemVisibleClass)) : (delete B.target.dataset.carouselVisibility, B.target.classList.remove(d.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((B) => B.dataset.carouselVisibility === "visible");
    }, {
      root: r.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && s.value && o.value.forEach((p) => s.value.observe(p));
  }), se(() => {
    r.value = null, o.value = null, n.value = 0, s.value && s.value.disconnect();
  }), {
    handleNext: y,
    handlePrev: T,
    handleWheel: R,
    carouselItems: o,
    carouselItem: i,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: g,
    pages: m
  };
}
const lr = /* @__PURE__ */ I({
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
    const r = e, t = ie(), o = V(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: s,
      carouselItem: d,
      visibleCarouselItems: i,
      currentCarouselItemIndex: m,
      scrollDirection: g,
      allItemsVisible: c
    } = He(r, o, t);
    return k("carousel", o), k("handleNext", n), k("handlePrev", a), k("carouselItems", s), k("carouselItem", d), k("visibleCarouselItems", i), k("currentCarouselItemIndex", m), k("scrollDirection", g), k("allItemsVisible", c), (b, h) => (x(), w("div", {
      class: _(v(S)(
        v(S).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        r.classWrapper
      ))
    }, [
      C(b.$slots, "carousel-before"),
      Y("ul", {
        ref_key: "carousel",
        ref: o,
        class: _(v(S)(
          v(S).raw({
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
        onWheel: h[0] || (h[0] = de(
          //@ts-ignore
          (...y) => v(l) && v(l)(...y),
          ["prevent"]
        ))
      }, [
        C(b.$slots, "default")
      ], 34),
      C(b.$slots, "carousel-after")
    ], 2));
  }
}), oe = /* @__PURE__ */ I({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    helper: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = () => typeof crypto < "u" && crypto.randomUUID ? `field-${crypto.randomUUID()}` : `field-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, o = f(() => r.id || t()), n = f(() => r.error ? `${o.value}-error` : null), a = f(() => r.helper ? `${o.value}-helper` : null), l = f(() => !!r.error);
    k("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      helperId: a.value,
      hasError: l.value,
      errorMessage: r.error,
      helperMessage: r.helper
    });
    const s = S({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (d, i) => (x(), w("div", {
      class: _([v(s), r.class])
    }, [
      C(d.$slots, "default")
    ], 2));
  }
}), Ge = /* @__PURE__ */ I({
  __name: "FieldRequired",
  setup(e) {
    return (r, t) => (x(), w("span", {
      class: _(v(S)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), Ue = ["for", "aria-disabled"], ne = /* @__PURE__ */ I({
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
    const r = e, t = W("fieldContext", null), o = f(() => r.for || (t == null ? void 0 : t.fieldId) || void 0), n = M({
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
    return (a, l) => (x(), w("label", {
      for: o.value,
      class: _([
        v(n)({
          size: r.size,
          disabled: r.disabled
        }),
        r.class
      ]),
      "aria-disabled": r.disabled
    }, [
      ce(A(r.label) + " ", 1),
      r.required ? (x(), j(Ge, { key: 0 })) : E("", !0)
    ], 10, Ue));
  }
}), Ke = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], Ze = /* @__PURE__ */ I({
  __name: "InputText",
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
    invalid: { type: Boolean, default: !1 },
    class: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = e, o = r, n = W("fieldContext", null), a = f(() => {
      if (!n) return;
      const i = [];
      return n.errorId && i.push(n.errorId), n.helperId && i.push(n.helperId), i.length > 0 ? i.join(" ") : void 0;
    }), l = f(() => t.invalid || ((n == null ? void 0 : n.hasError) ?? !1)), s = (i) => {
      const m = i.target;
      o("update:modelValue", m.value);
    }, d = M({
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
        invalid: {
          true: {
            borderColor: "danger !important",
            _focus: {
              outlineColor: "danger/30"
            }
          },
          false: {}
        }
      },
      defaultVariants: {
        size: "md",
        invalid: !1
      }
    });
    return (i, m) => (x(), w("input", {
      id: e.id,
      name: e.name,
      class: _([v(d)({ size: e.size, invalid: l.value }), t.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: s
    }, null, 42, Ke));
  }
}), Je = /* @__PURE__ */ I({
  __name: "FieldText",
  props: {
    label: { default: null },
    placeholder: { default: null },
    modelValue: { default: null },
    name: { default: "" },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    autocomplete: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = r;
    H(() => {
    });
    const o = (n) => {
      t("update:modelValue", n);
    };
    return (n, a) => (x(), j(oe, null, {
      default: q(() => [
        e.label ? (x(), j(ne, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : E("", !0),
        ue(Ze, {
          id: e.id,
          name: e.name,
          type: "text",
          placeholder: e.placeholder,
          "model-value": e.modelValue,
          disabled: e.disabled,
          required: e.required,
          autocomplete: e.autocomplete,
          "onUpdate:modelValue": o
        }, null, 8, ["id", "name", "placeholder", "model-value", "disabled", "required", "autocomplete"])
      ]),
      _: 1
    }));
  }
}), Qe = ["id"], er = /* @__PURE__ */ I({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = W("fieldContext", null), o = f(() => r.message || (t == null ? void 0 : t.errorMessage) || null), n = f(() => r.id || (t == null ? void 0 : t.errorId) || void 0), a = S({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      lineHeight: "1.4",
      marginTop: "2xs"
    });
    return (l, s) => o.value ? (x(), w("span", {
      key: 0,
      id: n.value,
      class: _([v(a), r.class]),
      role: "alert",
      "aria-live": "polite"
    }, A(o.value), 11, Qe)) : E("", !0);
  }
}), rr = ["id"], tr = /* @__PURE__ */ I({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const r = e, t = W("fieldContext", null), o = f(() => r.message || (t == null ? void 0 : t.helperMessage) || null), n = f(() => r.id || (t == null ? void 0 : t.helperId) || void 0), a = S({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "400",
      color: "lucid.600",
      lineHeight: "1.4",
      marginTop: "2xs",
      _light: {
        color: "grey.500"
      }
    });
    return (l, s) => o.value ? (x(), w("span", {
      key: 0,
      id: n.value,
      class: _([v(a), r.class])
    }, A(o.value), 11, rr)) : E("", !0);
  }
}), sr = {
  Text: Je,
  // DEPRECATED: Use Input.Text instead
  Base: oe,
  Label: ne,
  Error: er,
  Message: tr
};
export {
  nr as Button,
  ar as Card,
  lr as Carousel,
  sr as Field
};
