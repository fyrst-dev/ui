import { defineComponent as V, computed as S, createBlock as N, openBlock as _, resolveDynamicComponent as te, normalizeClass as k, withCtx as oe, createElementBlock as O, createCommentVNode as j, unref as v, renderSlot as y, createElementVNode as P, ref as R, watch as ne, onMounted as ae, onUnmounted as se, useSlots as le, provide as x, withModifiers as ie, createTextVNode as de, toDisplayString as ce } from "vue";
function M(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var ue = (e) => typeof e == "object" && e !== null;
function W(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([r, o]) => o !== void 0));
}
var be = (e) => e === "base";
function ge(e) {
  return e.slice().filter((r) => !be(r));
}
function D(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function pe(e) {
  let r = "", o;
  for (o = Math.abs(e); o > 52; o = o / 52 | 0) r = D(o % 52) + r;
  return D(o % 52) + r;
}
function me(e, r) {
  let o = r.length;
  for (; o; ) e = e * 33 ^ r.charCodeAt(--o);
  return e;
}
function fe(e) {
  return pe(me(5381, e) >>> 0);
}
var $ = /\s*!(important)?/i;
function he(e) {
  return typeof e == "string" ? $.test(e) : !1;
}
function ve(e) {
  return typeof e == "string" ? e.replace($, "").trim() : e;
}
function Y(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var E = (e) => {
  const r = /* @__PURE__ */ new Map();
  return (...t) => {
    const n = JSON.stringify(t);
    if (r.has(n))
      return r.get(n);
    const a = e(...t);
    return r.set(n, a), a;
  };
}, xe = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function A(...e) {
  return e.reduce((r, o) => (o && Object.keys(o).forEach((t) => {
    if (xe.has(t)) return;
    const n = r[t], a = o[t];
    M(n) && M(a) ? r[t] = A(n, a) : r[t] = a;
  }), r), {});
}
var ye = (e) => e != null;
function q(e, r, o = {}) {
  const { stop: t, getKey: n } = o;
  function a(s, l = []) {
    if (ue(s)) {
      const c = {};
      for (const [g, f] of Object.entries(s)) {
        const b = (n == null ? void 0 : n(g, f)) ?? g, i = [...l, b];
        if (t != null && t(s, i))
          return r(s, l);
        const u = a(f, i);
        ye(u) && (c[b] = u);
      }
      return c;
    }
    return r(s, l);
  }
  return a(e);
}
function _e(e, r) {
  return e.reduce(
    (o, t, n) => {
      const a = r[n];
      return t != null && (o[a] = t), o;
    },
    {}
  );
}
function H(e, r, o = !0) {
  const { utility: t, conditions: n } = r, { hasShorthand: a, resolveShorthand: s } = t;
  return q(
    e,
    (l) => Array.isArray(l) ? _e(l, n.breakpoints.keys) : l,
    {
      stop: (l) => Array.isArray(l),
      getKey: o ? (l) => a ? s(l) : l : void 0
    }
  );
}
var ke = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Se = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function Ce(e) {
  const { utility: r, hash: o, conditions: t = ke } = e, n = (s) => [r.prefix, s].filter(Boolean).join("-"), a = (s, l) => {
    let c;
    if (o) {
      const g = [...t.finalize(s), l];
      c = n(r.toHash(g, fe));
    } else
      c = [...t.finalize(s), n(l)].join(":");
    return c;
  };
  return E(({ base: s, ...l } = {}) => {
    const c = Object.assign(l, s), g = H(c, e), f = /* @__PURE__ */ new Set();
    return q(g, (b, i) => {
      if (b == null) return;
      const u = he(b), [m, ...h] = t.shift(i), C = ge(h), I = r.transform(m, ve(Se(b)));
      let d = a(C, I.className);
      u && (d = `${d}!`), f.add(d);
    }), Array.from(f).join(" ");
  });
}
function we(...e) {
  return e.flat().filter((r) => M(r) && Object.keys(W(r)).length > 0);
}
function Te(e) {
  function r(n) {
    const a = we(...n);
    return a.length === 1 ? a : a.map((s) => H(s, e));
  }
  function o(...n) {
    return A(...r(n));
  }
  function t(...n) {
    return Object.assign({}, ...r(n));
  }
  return { mergeCss: E(o), assignCss: t };
}
var Be = /([A-Z])/g, Oe = /^ms-/, Ie = E((e) => e.startsWith("--") ? e : e.replace(Be, "-$1").replace(Oe, "-ms-").toLowerCase()), Re = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Re.split(",").join("|")}`;
var Ve = (e = {}) => {
  const r = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Ee(e.compoundVariants, n) : []
    };
  }, t = (e.slots ?? []).map((n) => [n, r(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [s, l] of Object.entries(a))
      t.forEach(([c, g]) => {
        var f;
        (f = g.variants)[n] ?? (f[n] = {}), g.variants[n][s] = l[c] ?? {};
      });
  return Object.fromEntries(t);
}, Ee = (e, r) => e.filter((o) => o.css[r]).map((o) => ({ ...o, css: o.css[r] }));
function G(e, ...r) {
  const o = Object.getOwnPropertyDescriptors(e), t = Object.keys(o), n = (s) => {
    const l = {};
    for (let c = 0; c < s.length; c++) {
      const g = s[c];
      o[g] && (Object.defineProperty(l, g, o[g]), delete o[g]);
    }
    return l;
  }, a = (s) => n(Array.isArray(s) ? s : t.filter(s));
  return r.map(a).concat(n(t));
}
var je = (...e) => {
  const r = e.reduce((o, t) => (t && t.forEach((n) => o.add(n)), o), /* @__PURE__ */ new Set([]));
  return Array.from(r);
};
const ze = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,base", K = new Set(ze.split(",")), Me = /^@|&|&$/;
function L(e) {
  return K.has(e) || Me.test(e);
}
const Pe = /^_/, We = /&|@/;
function Ae(e) {
  return e.map((r) => K.has(r) ? r.replace(Pe, "") : We.test(r) ? `[${Y(r.trim())}]` : r);
}
function De(e) {
  return e.sort((r, o) => {
    const t = L(r), n = L(o);
    return t && !n ? 1 : !t && n ? -1 : 0;
  });
}
const Le = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", U = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
Le.split(",").forEach((e) => {
  const [r, o] = e.split(":"), [t, ...n] = o.split("/");
  U.set(r, t), n.length && n.forEach((a) => {
    Z.set(a === "1" ? t : a, r);
  });
});
const X = (e) => Z.get(e) || e, J = {
  conditions: {
    shift: De,
    finalize: Ae,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, r) => {
      const o = X(e);
      return { className: `${U.get(o) || Ie(o)}_${Y(r)}` };
    },
    hasShorthand: !0,
    toHash: (e, r) => r(e.join(":")),
    resolveShorthand: X
  }
}, Xe = Ce(J), T = (...e) => Xe(B(...e));
T.raw = (...e) => B(...e);
const { mergeCss: B } = Te(J);
function Fe() {
  let e = "", r = 0, o;
  for (; r < arguments.length; )
    (o = arguments[r++]) && typeof o == "string" && (e && (e += " "), e += o);
  return e;
}
const F = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function z(e) {
  const { base: r, variants: o, defaultVariants: t, compoundVariants: n } = F(e), a = (i) => ({ ...t, ...W(i) });
  function s(i = {}) {
    var C;
    const u = a(i);
    let m = { ...r };
    for (const [I, d] of Object.entries(u))
      (C = o[I]) != null && C[d] && (m = B(m, o[I][d]));
    const h = Ne(n, u);
    return B(m, h);
  }
  function l(i) {
    const u = F(i.config), m = je(i.variantKeys, Object.keys(o));
    return z({
      base: B(r, u.base),
      variants: Object.fromEntries(
        m.map((h) => [h, B(o[h], u.variants[h])])
      ),
      defaultVariants: A(t, u.defaultVariants),
      compoundVariants: [...n, ...u.compoundVariants]
    });
  }
  function c(i) {
    return T(s(i));
  }
  const g = Object.keys(o);
  function f(i) {
    return G(i, g);
  }
  const b = Object.fromEntries(Object.entries(o).map(([i, u]) => [i, Object.keys(u)]));
  return Object.assign(E(c), {
    __cva__: !0,
    variantMap: b,
    variantKeys: g,
    raw: s,
    config: e,
    merge: l,
    splitVariantProps: f,
    getVariantProps: a
  });
}
function Ne(e, r) {
  let o = {};
  return e.forEach((t) => {
    Object.entries(t).every(([a, s]) => a === "css" ? !0 : (Array.isArray(s) ? s : [s]).some((c) => r[a] === c)) && (o = B(o, t.css));
  }), o;
}
function Q(e) {
  const r = Object.entries(Ve(e)).map(([b, i]) => [b, z(i)]), o = e.defaultVariants ?? {}, t = r.reduce((b, [i, u]) => (e.className && (b[i] = u.config.className), b), {});
  function n(b) {
    const i = r.map(([u, m]) => [u, Fe(m(b), t[u])]);
    return Object.fromEntries(i);
  }
  function a(b) {
    const i = r.map(([u, m]) => [u, m.raw(b)]);
    return Object.fromEntries(i);
  }
  const s = e.variants ?? {}, l = Object.keys(s);
  function c(b) {
    return G(b, l);
  }
  const g = (b) => ({ ...o, ...W(b) }), f = Object.fromEntries(
    Object.entries(s).map(([b, i]) => [b, Object.keys(i)])
  );
  return Object.assign(E(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: f,
    variantKeys: l,
    classNameMap: t,
    splitVariantProps: c,
    getVariantProps: g
  });
}
const $e = ["innerHTML"], rr = /* @__PURE__ */ V({
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
    const r = e, o = S(() => r.to ? "a" : "button"), t = S(() => o.value === "button" && r.type ? r.type : o.value === "button" ? "button" : null), n = S(() => r.external && o.value === "a" ? "_blank" : null), a = S(() => r.external && o.value === "a" ? "noopener noreferrer" : null), s = z({
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
    }), l = S(() => T(
      s.raw({ color: r.color, size: r.size, order: r.order })
    ));
    return (c, g) => (_(), N(te(o.value), {
      class: k(["btn", l.value]),
      type: t.value,
      href: r.to,
      title: r.label,
      target: n.value,
      rel: a.value,
      disabled: r.disabled === !0 ? !0 : null
    }, {
      default: oe(() => [
        r.icon ? (_(), O("span", {
          key: 0,
          class: k([
            "btn-icon",
            "icon",
            `icon-${r.icon}`
          ])
        }, null, 2)) : j("", !0),
        r.label ? (_(), O("span", {
          key: 1,
          innerHTML: r.label,
          class: "btn-label"
        }, null, 8, $e)) : j("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), tr = /* @__PURE__ */ V({
  __name: "Card",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const r = e, t = Q({
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
    return (n, a) => (_(), O("div", {
      class: k(v(t).root)
    }, [
      y(n.$slots, "wrapper-before"),
      P("div", {
        class: k(v(t).container)
      }, [
        y(n.$slots, "default", {}, () => [
          y(n.$slots, "header"),
          y(n.$slots, "body"),
          y(n.$slots, "footer")
        ])
      ], 2),
      y(n.$slots, "wrapper-after")
    ], 2));
  }
});
function Ye(e, r, o) {
  const t = R(null), n = R(0), a = R([]), s = R(null), l = R(null), c = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, g = S(() => (t.value ?? []).length > 0 ? t.value[n.value] : null), f = S(() => {
    var d;
    return Math.ceil((((d = t.value) == null ? void 0 : d.length) ?? 0) / a.value.length);
  }), b = S(() => {
    var p;
    const d = ((p = t.value) == null ? void 0 : p.length) ?? 0;
    return d > 0 && a.value.length === d;
  });
  ne(g, (d, p) => {
    d && d.classList.add(c.itemActiveClass), p && p.classList.remove(c.itemActiveClass);
  });
  const i = (d) => {
    if (!t.value) return null;
    if (d === "first") {
      const p = a.value[0];
      return p ? Array.from(t.value).indexOf(p) - 1 : null;
    }
    if (d === "last") {
      const p = a.value[a.value.length - 1];
      return p ? Array.from(t.value).indexOf(p) + 1 : null;
    }
    return null;
  }, u = () => {
    const d = s.value === "next" ? "end" : "start", p = s.value === "next" ? n.value + 1 : n.value - 1;
    if (!t.value || t.value[p] === void 0) {
      console.warn("No more items to scroll", s.value);
      return;
    }
    t.value[p].style.scrollSnapAlign = d, t.value[p].scrollIntoView({ behavior: "smooth" }), n.value = p;
  }, m = () => {
    const d = s.value === "prev" ? i("first") : i("last");
    if (!(!t.value || !t.value.length)) {
      if (d === null || !t.value || t.value[d] === void 0) {
        console.warn("No more items to scroll", s.value);
        return;
      }
      t.value[d].scrollIntoView({ behavior: "smooth" }), n.value = d;
    }
  }, h = () => {
    s.value = "next", e.scrollMode === "item" ? u() : e.scrollMode === "viewport" ? m() : console.warn("No more items to scroll next");
  }, C = () => {
    s.value = "prev", e.scrollMode === "item" ? u() : e.scrollMode === "viewport" ? m() : console.warn("No more items to scroll prev");
  }, I = (d) => {
    d.deltaY > 0 ? h() : C();
  };
  return ae(() => {
    var d;
    t.value = o.default ? ((d = r.value) == null ? void 0 : d.querySelectorAll(":scope > *")) ?? null : null, l.value = new IntersectionObserver((p) => {
      p.forEach((w) => {
        w.isIntersecting ? (w.target.dataset.carouselVisibility = "visible", w.target.classList.add(c.itemVisibleClass)) : (delete w.target.dataset.carouselVisibility, w.target.classList.remove(c.itemVisibleClass));
      }), a.value = Array.from(t.value ?? []).filter((w) => w.dataset.carouselVisibility === "visible");
    }, {
      root: r.value,
      rootMargin: "0px",
      threshold: 1
    }), t.value && l.value && t.value.forEach((p) => l.value.observe(p));
  }), se(() => {
    r.value = null, t.value = null, n.value = 0, l.value && l.value.disconnect();
  }), {
    handleNext: h,
    handlePrev: C,
    handleWheel: I,
    carouselItems: t,
    carouselItem: g,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: s,
    allItemsVisible: b,
    pages: f
  };
}
const or = /* @__PURE__ */ V({
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
    const r = e, o = le(), t = R(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: s,
      carouselItems: l,
      carouselItem: c,
      visibleCarouselItems: g,
      currentCarouselItemIndex: f,
      scrollDirection: b,
      allItemsVisible: i
    } = Ye(r, t, o);
    return x("carousel", t), x("handleNext", n), x("handlePrev", a), x("carouselItems", l), x("carouselItem", c), x("visibleCarouselItems", g), x("currentCarouselItemIndex", f), x("scrollDirection", b), x("allItemsVisible", i), (u, m) => (_(), O("div", {
      class: k(v(T)(
        v(T).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        r.classWrapper
      ))
    }, [
      y(u.$slots, "carousel-before"),
      P("ul", {
        ref_key: "carousel",
        ref: t,
        class: k(v(T)(
          v(T).raw({
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
        onWheel: m[0] || (m[0] = ie(
          //@ts-ignore
          (...h) => v(s) && v(s)(...h),
          ["prevent"]
        ))
      }, [
        y(u.$slots, "default")
      ], 34),
      y(u.$slots, "carousel-after")
    ], 2));
  }
}), qe = ["for", "aria-disabled"], He = {
  key: 0,
  class: "required-indicator",
  "aria-label": "required"
}, Ge = /* @__PURE__ */ V({
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
    const r = e, o = z({
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
    return (t, n) => (_(), O("label", {
      for: r.for,
      class: k([
        v(o)({
          size: r.size,
          disabled: r.disabled
        }),
        r.class
      ]),
      "aria-disabled": r.disabled
    }, [
      de(ce(r.label) + " ", 1),
      r.required ? (_(), O("span", He, " * ")) : j("", !0)
    ], 10, qe));
  }
}), ee = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [t, n] of r)
    o[t] = n;
  return o;
}, re = /* @__PURE__ */ ee(Ge, [["__scopeId", "data-v-e9b7f9d1"]]), Ke = ["id", "name", "placeholder", "value", "disabled", "required", "autocomplete"], Ue = /* @__PURE__ */ V({
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
    const o = r, t = (s) => {
      const l = s.target;
      o("update:modelValue", l.value);
    }, a = Q({
      slots: ["root", "label", "input"],
      base: {
        root: {
          display: "flex",
          flexDirection: "column",
          gap: "xs"
        },
        input: {
          display: "flex",
          alignItems: "start",
          minWidth: "200px",
          paddingX: "lg",
          paddingY: "sm",
          backgroundColor: "grey.black",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "grey.dusk",
          borderRadius: "lg",
          outlineWidth: "3px",
          outlineColor: "transparent",
          outlineOffset: "0px",
          outlineStyle: "solid",
          fontSize: "md",
          fontWeight: "450",
          lineHeight: "1.5",
          color: "neutral",
          transition: "all 300ms",
          _placeholder: {
            color: "lucid.600"
          },
          _focus: {
            outlineColor: "primary/50",
            borderColor: "primary"
          },
          _disabled: {
            opacity: "0.5",
            cursor: "not-allowed"
          },
          _light: {
            backgroundColor: "white",
            borderColor: "grey.200",
            color: "grey.night"
          }
        }
      }
    })();
    return (s, l) => (_(), O("div", {
      class: k(v(a).root)
    }, [
      e.label ? (_(), N(re, {
        key: 0,
        label: e.label,
        for: e.id,
        size: "sm"
      }, null, 8, ["label", "for"])) : j("", !0),
      P("input", {
        id: e.id,
        name: e.name,
        class: k(v(a).input),
        type: "text",
        placeholder: e.placeholder || void 0,
        value: e.modelValue || "",
        disabled: e.disabled,
        required: e.required,
        autocomplete: e.autocomplete || void 0,
        onInput: t
      }, null, 42, Ke)
    ], 2));
  }
}), Ze = {};
function Je(e, r) {
  return " Field base ";
}
const Qe = /* @__PURE__ */ ee(Ze, [["render", Je]]), nr = {
  Text: Ue,
  Base: Qe,
  Label: re
};
export {
  rr as Button,
  tr as Card,
  or as Carousel,
  nr as Field
};
