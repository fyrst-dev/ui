import { defineComponent as S, computed as _, createBlock as $, openBlock as m, resolveDynamicComponent as Z, normalizeClass as u, withCtx as R, createElementBlock as y, createCommentVNode as w, normalizeStyle as fe, unref as s, renderSlot as p, createElementVNode as T, ref as I, watch as J, onMounted as Q, onUnmounted as ee, useSlots as ve, provide as z, withModifiers as he, inject as O, readonly as F, normalizeProps as P, guardReactiveProps as A, createVNode as j, Transition as xe, useId as ye, createTextVNode as _e, toDisplayString as ke, Fragment as Se, renderList as Ce } from "vue";
import { AccordionRoot as we, AccordionItem as Ie, AccordionHeader as Te, AccordionTrigger as Be, AccordionContent as ze } from "reka-ui";
function H(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var Re = (e) => typeof e == "object" && e !== null;
function X(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var $e = (e) => e === "base";
function Oe(e) {
  return e.slice().filter((t) => !$e(t));
}
function Y(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function Ee(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = Y(r % 52) + t;
  return Y(r % 52) + t;
}
function Ve(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function Me(e) {
  return Ee(Ve(5381, e) >>> 0);
}
var te = /\s*!(important)?/i;
function Le(e) {
  return typeof e == "string" ? te.test(e) : !1;
}
function je(e) {
  return typeof e == "string" ? e.replace(te, "").trim() : e;
}
function re(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var D = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...o) => {
    const n = JSON.stringify(o);
    if (t.has(n))
      return t.get(n);
    const a = e(...o);
    return t.set(n, a), a;
  };
}, De = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function N(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((o) => {
    if (De.has(o)) return;
    const n = t[o], a = r[o];
    H(n) && H(a) ? t[o] = N(n, a) : t[o] = a;
  }), t), {});
}
var We = (e) => e != null;
function oe(e, t, r = {}) {
  const { stop: o, getKey: n } = r;
  function a(l, i = []) {
    if (Re(l)) {
      const c = {};
      for (const [d, x] of Object.entries(l)) {
        const v = (n == null ? void 0 : n(d, x)) ?? d, g = [...i, v];
        if (o != null && o(l, g))
          return t(l, i);
        const f = a(x, g);
        We(f) && (c[v] = f);
      }
      return c;
    }
    return t(l, i);
  }
  return a(e);
}
function Pe(e, t) {
  return e.reduce(
    (r, o, n) => {
      const a = t[n];
      return o != null && (r[a] = o), r;
    },
    {}
  );
}
function ne(e, t, r = !0) {
  const { utility: o, conditions: n } = t, { hasShorthand: a, resolveShorthand: l } = o;
  return oe(
    e,
    (i) => Array.isArray(i) ? Pe(i, n.breakpoints.keys) : i,
    {
      stop: (i) => Array.isArray(i),
      getKey: r ? (i) => a ? l(i) : i : void 0
    }
  );
}
var Ae = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Fe = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function He(e) {
  const { utility: t, hash: r, conditions: o = Ae } = e, n = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, i) => {
    let c;
    if (r) {
      const d = [...o.finalize(l), i];
      c = n(t.toHash(d, Me));
    } else
      c = [...o.finalize(l), n(i)].join(":");
    return c;
  };
  return D(({ base: l, ...i } = {}) => {
    const c = Object.assign(i, l), d = ne(c, e), x = /* @__PURE__ */ new Set();
    return oe(d, (v, g) => {
      if (v == null) return;
      const f = Le(v), [C, ...B] = o.shift(g), E = Oe(B), L = t.transform(C, je(Fe(v)));
      let b = a(E, L.className);
      f && (b = `${b}!`), x.add(b);
    }), Array.from(x).join(" ");
  });
}
function Xe(...e) {
  return e.flat().filter((t) => H(t) && Object.keys(X(t)).length > 0);
}
function Ne(e) {
  function t(n) {
    const a = Xe(...n);
    return a.length === 1 ? a : a.map((l) => ne(l, e));
  }
  function r(...n) {
    return N(...t(n));
  }
  function o(...n) {
    return Object.assign({}, ...t(n));
  }
  return { mergeCss: D(r), assignCss: o };
}
var qe = /([A-Z])/g, Ye = /^ms-/, Ge = D((e) => e.startsWith("--") ? e : e.replace(qe, "-$1").replace(Ye, "-ms-").toLowerCase()), Ke = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Ke.split(",").join("|")}`;
var Ue = (e = {}) => {
  const t = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Ze(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, t(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, i] of Object.entries(a))
      o.forEach(([c, d]) => {
        var x;
        (x = d.variants)[n] ?? (x[n] = {}), d.variants[n][l] = i[c] ?? {};
      });
  return Object.fromEntries(o);
}, Ze = (e, t) => e.filter((r) => r.css[t]).map((r) => ({ ...r, css: r.css[t] }));
function ae(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), o = Object.keys(r), n = (l) => {
    const i = {};
    for (let c = 0; c < l.length; c++) {
      const d = l[c];
      r[d] && (Object.defineProperty(i, d, r[d]), delete r[d]);
    }
    return i;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return t.map(a).concat(n(o));
}
var Je = (...e) => {
  const t = e.reduce((r, o) => (o && o.forEach((n) => r.add(n)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const Qe = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", le = new Set(Qe.split(",")), et = /^@|&|&$/;
function G(e) {
  return le.has(e) || et.test(e);
}
const tt = /^_/, rt = /&|@/;
function ot(e) {
  return e.map((t) => le.has(t) ? t.replace(tt, "") : rt.test(t) ? `[${re(t.trim())}]` : t);
}
function nt(e) {
  return e.sort((t, r) => {
    const o = G(t), n = G(r);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const at = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,animationStyle:animationStyle", se = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
at.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [o, ...n] = r.split("/");
  se.set(t, o), n.length && n.forEach((a) => {
    ie.set(a === "1" ? o : a, t);
  });
});
const K = (e) => ie.get(e) || e, de = {
  conditions: {
    shift: nt,
    finalize: ot,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = K(e);
      return { className: `${se.get(r) || Ge(r)}_${re(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: K
  }
}, lt = He(de), h = (...e) => lt(M(...e));
h.raw = (...e) => M(...e);
const { mergeCss: M } = Ne(de);
function st() {
  let e = "", t = 0, r;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const U = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function W(e) {
  const { base: t, variants: r, defaultVariants: o, compoundVariants: n } = U(e), a = (g) => ({ ...o, ...X(g) });
  function l(g = {}) {
    var E;
    const f = a(g);
    let C = { ...t };
    for (const [L, b] of Object.entries(f))
      (E = r[L]) != null && E[b] && (C = M(C, r[L][b]));
    const B = it(n, f);
    return M(C, B);
  }
  function i(g) {
    const f = U(g.config), C = Je(g.variantKeys, Object.keys(r));
    return W({
      base: M(t, f.base),
      variants: Object.fromEntries(
        C.map((B) => [B, M(r[B], f.variants[B])])
      ),
      defaultVariants: N(o, f.defaultVariants),
      compoundVariants: [...n, ...f.compoundVariants]
    });
  }
  function c(g) {
    return h(l(g));
  }
  const d = Object.keys(r);
  function x(g) {
    return ae(g, d);
  }
  const v = Object.fromEntries(Object.entries(r).map(([g, f]) => [g, Object.keys(f)]));
  return Object.assign(D(c), {
    __cva__: !0,
    variantMap: v,
    variantKeys: d,
    raw: l,
    config: e,
    merge: i,
    splitVariantProps: x,
    getVariantProps: a
  });
}
function it(e, t) {
  let r = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((c) => t[a] === c)) && (r = M(r, o.css));
  }), r;
}
function q(e) {
  const t = Object.entries(Ue(e)).map(([v, g]) => [v, W(g)]), r = e.defaultVariants ?? {}, o = t.reduce((v, [g, f]) => (e.className && (v[g] = f.config.className), v), {});
  function n(v) {
    const g = t.map(([f, C]) => [f, st(C(v), o[f])]);
    return Object.fromEntries(g);
  }
  function a(v) {
    const g = t.map(([f, C]) => [f, C.raw(v)]);
    return Object.fromEntries(g);
  }
  const l = e.variants ?? {}, i = Object.keys(l);
  function c(v) {
    return ae(v, i);
  }
  const d = (v) => ({ ...r, ...X(v) }), x = Object.fromEntries(
    Object.entries(l).map(([v, g]) => [v, Object.keys(g)])
  );
  return Object.assign(D(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: x,
    variantKeys: i,
    classNameMap: o,
    splitVariantProps: c,
    getVariantProps: d
  });
}
const dt = ["innerHTML"], Ht = /* @__PURE__ */ S({
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
    const t = e, r = _(() => t.to ? "a" : "button"), o = _(() => r.value === "button" && t.type ? t.type : r.value === "button" ? "button" : null), n = _(() => t.external && r.value === "a" ? "_blank" : null), a = _(() => t.external && r.value === "a" ? "noopener noreferrer" : null), l = W({
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
            color: "neutral",
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
                backgroundColor: "brand.pale/25"
              },
              _active: {
                backgroundColor: "brand.pale/40"
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
    }), i = _(() => h(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (c, d) => (m(), $(Z(r.value), {
      class: u(["btn", i.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: R(() => [
        t.icon ? (m(), y("span", {
          key: 0,
          class: u([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : w("", !0),
        t.label ? (m(), y("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, dt)) : w("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), ct = ["aria-label"], Xt = /* @__PURE__ */ S({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, r) => (m(), y("div", {
      class: u([
        "loader",
        s(h)({
          width: "var(--loader-size)",
          height: "var(--loader-size)",
          borderWidth: "calc((min(var(--loader-size), var(--loader-size)) / 10))",
          boxSizing: "border-box",
          borderRadius: "50%",
          borderStyle: "solid",
          borderColor: "lucid.100",
          borderTopColor: "primary",
          animationDuration: "1000ms",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationName: "spin"
        })
      ]),
      role: "status",
      "aria-live": "polite",
      "aria-label": e.label,
      style: fe({
        "--loader-size": `${e.size}px`
      })
    }, null, 14, ct));
  }
}), ut = /* @__PURE__ */ S({
  __name: "CardRoot",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const t = e, o = q({
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
      borderColor: t.borderColor,
      borderRadius: "xl"
    });
    return (n, a) => (m(), y("div", {
      class: u(s(o).root)
    }, [
      p(n.$slots, "wrapper-before"),
      T("div", {
        class: u(s(o).container)
      }, [
        p(n.$slots, "default", {}, () => [
          p(n.$slots, "header"),
          p(n.$slots, "body"),
          p(n.$slots, "footer")
        ])
      ], 2),
      p(n.$slots, "wrapper-after")
    ], 2));
  }
}), mt = /* @__PURE__ */ S({
  __name: "CardBody",
  setup(e) {
    return (t, r) => (m(), y("div", {
      class: u(s(h)({
        padding: "xl"
      }))
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), Nt = {
  Root: ut,
  Body: mt
};
function gt(e, t, r) {
  const o = I(null), n = I(0), a = I([]), l = I(null), i = I(null), c = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, d = _(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), x = _(() => {
    var b;
    return Math.ceil((((b = o.value) == null ? void 0 : b.length) ?? 0) / a.value.length);
  }), v = _(() => {
    var k;
    const b = ((k = o.value) == null ? void 0 : k.length) ?? 0;
    return b > 0 && a.value.length === b;
  });
  J(d, (b, k) => {
    b && b.classList.add(c.itemActiveClass), k && k.classList.remove(c.itemActiveClass);
  });
  const g = (b) => {
    if (!o.value) return null;
    if (b === "first") {
      const k = a.value[0];
      return k ? Array.from(o.value).indexOf(k) - 1 : null;
    }
    if (b === "last") {
      const k = a.value[a.value.length - 1];
      return k ? Array.from(o.value).indexOf(k) + 1 : null;
    }
    return null;
  }, f = () => {
    const b = l.value === "next" ? "end" : "start", k = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[k] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[k].style.scrollSnapAlign = b, o.value[k].scrollIntoView({ behavior: "smooth" }), n.value = k;
  }, C = () => {
    const b = l.value === "prev" ? g("first") : g("last");
    if (!(!o.value || !o.value.length)) {
      if (b === null || !o.value || o.value[b] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[b].scrollIntoView({ behavior: "smooth" }), n.value = b;
    }
  }, B = () => {
    l.value = "next", e.scrollMode === "item" ? f() : e.scrollMode === "viewport" ? C() : console.warn("No more items to scroll next");
  }, E = () => {
    l.value = "prev", e.scrollMode === "item" ? f() : e.scrollMode === "viewport" ? C() : console.warn("No more items to scroll prev");
  }, L = (b) => {
    b.deltaY > 0 ? B() : E();
  };
  return Q(() => {
    var b;
    o.value = r.default ? ((b = t.value) == null ? void 0 : b.querySelectorAll(":scope > *")) ?? null : null, i.value = new IntersectionObserver((k) => {
      k.forEach((V) => {
        V.isIntersecting ? (V.target.dataset.carouselVisibility = "visible", V.target.classList.add(c.itemVisibleClass)) : (delete V.target.dataset.carouselVisibility, V.target.classList.remove(c.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((V) => V.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && i.value && o.value.forEach((k) => i.value.observe(k));
  }), ee(() => {
    t.value = null, o.value = null, n.value = 0, i.value && i.value.disconnect();
  }), {
    handleNext: B,
    handlePrev: E,
    handleWheel: L,
    carouselItems: o,
    carouselItem: d,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: v,
    pages: x
  };
}
const bt = /* @__PURE__ */ S({
  __name: "CarouselRoot",
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
    const t = e, r = ve(), o = I(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: i,
      carouselItem: c,
      visibleCarouselItems: d,
      currentCarouselItemIndex: x,
      scrollDirection: v,
      allItemsVisible: g
    } = gt(t, o, r);
    return z("carousel", o), z("handleNext", n), z("handlePrev", a), z("carouselItems", i), z("carouselItem", c), z("visibleCarouselItems", d), z("currentCarouselItemIndex", x), z("scrollDirection", v), z("allItemsVisible", g), (f, C) => (m(), y("div", {
      class: u(s(h)(
        s(h).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      p(f.$slots, "carousel-before"),
      T("ul", {
        ref_key: "carousel",
        ref: o,
        class: u(s(h)(
          s(h).raw({
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
          t.classCarousel
        )),
        onWheel: C[0] || (C[0] = he(
          //@ts-ignore
          (...B) => s(l) && s(l)(...B),
          ["prevent"]
        ))
      }, [
        p(f.$slots, "default")
      ], 34),
      p(f.$slots, "carousel-after")
    ], 2));
  }
}), pt = /* @__PURE__ */ S({
  __name: "CarouselItem",
  setup(e) {
    return (t, r) => (m(), y("li", {
      class: u(s(h)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), ft = ["disabled"], vt = ["disabled"], ht = /* @__PURE__ */ S({
  __name: "CarouselNavigation",
  setup(e) {
    const t = I(!0), r = I(!0), o = O("handlePrev"), n = O("handleNext"), a = O("allItemsVisible", I(!1)), l = O("carouselItems", I(null)), i = O("currentCarouselItemIndex", I(0));
    return J(
      [l, i, a],
      ([c, d, x]) => {
        x ? (t.value = !0, r.value = !0) : c !== null && c.length > 0 && (t.value = d === 0, r.value = d === c.length - 1);
      },
      { immediate: !0 }
    ), (c, d) => (m(), y("div", null, [
      p(c.$slots, "action-prev", {
        handlePrev: s(o),
        disabled: t.value
      }, () => [
        T("button", {
          onClick: d[0] || (d[0] = //@ts-ignore
          (...x) => s(o) && s(o)(...x)),
          disabled: t.value
        }, " Prev ", 8, ft)
      ]),
      p(c.$slots, "action-next", {
        handleNext: s(n),
        disabled: r.value
      }, () => [
        T("button", {
          onClick: d[1] || (d[1] = //@ts-ignore
          (...x) => s(n) && s(n)(...x)),
          disabled: r.value
        }, " Next ", 8, vt)
      ])
    ]));
  }
}), qt = {
  Root: bt,
  Item: pt,
  Navigation: ht
};
function xt(e) {
  const t = I(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return Q(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", r), e.el.value.addEventListener("mouseleave", o));
  }), ee(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", r), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: F(t),
    toggle: n
  };
}
const ce = /* @__PURE__ */ S({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (r, o) => (m(), y("div", {
      class: u(s(h)(
        s(h).raw({
          position: "absolute",
          zIndex: 50,
          top: "100%",
          left: t.direction === "left" ? "0" : "auto",
          right: t.direction === "right" ? "0" : "auto",
          paddingTop: "sm"
        })
      ))
    }, [
      p(r.$slots, "default")
    ], 2));
  }
}), yt = ["aria-label", "aria-expanded"], _t = ["innerHTML"], kt = /* @__PURE__ */ S({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = I(), r = e, { open: o, toggle: n } = xt({ el: t });
    return (a, l) => (m(), y("div", {
      ref_key: "el",
      ref: t,
      class: u(
        s(h)(
          s(h).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      p(a.$slots, "trigger", P(A({ open: s(o) })), () => [
        T("button", {
          type: "button",
          class: u([
            s(h)(
              s(h).raw({
                cursor: "pointer"
              }),
              r.classTrigger
            ),
            s(o) ? "active" : null
          ]),
          "aria-haspopup": "true",
          "aria-label": e.ariaLabel || e.label,
          "aria-expanded": s(o),
          onClick: l[0] || (l[0] = //@ts-ignore
          (...i) => s(n) && s(n)(...i))
        }, [
          r.icon ? (m(), y("span", {
            key: 0,
            class: u(r.icon)
          }, null, 2)) : w("", !0),
          p(a.$slots, "trigger-label", {}, () => [
            T("span", { innerHTML: e.label }, null, 8, _t)
          ], !0),
          p(a.$slots, "trigger-icon", P(A({ open: s(o) })), void 0, !0)
        ], 10, yt)
      ], !0),
      p(a.$slots, "dropdown", P(A({ open: s(o) })), () => [
        j(xe, { name: "flyout" }, {
          default: R(() => [
            s(o) ? (m(), $(ce, { key: 0 }, {
              default: R(() => [
                p(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : w("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), St = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Ct = /* @__PURE__ */ St(kt, [["__scopeId", "data-v-a1ce9f68"]]), Yt = {
  Root: Ct,
  Dropdown: ce
}, wt = ["innerHTML"], It = ["innerHTML"], Tt = /* @__PURE__ */ S({
  __name: "HeroLead",
  props: {
    headline: {},
    headlineTag: { default: "h1" },
    description: {},
    alignItems: { default: "start" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = q({
      slots: ["root", "headline", "description", "actions"],
      base: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "xl"
        },
        headline: {
          textWrap: "balance",
          fontWeight: "750",
          transition: "all 200ms",
          "& mark, & strong": {
            color: "primary"
          }
        },
        description: {
          color: "grey.dawn",
          textWrap: "balance",
          transition: "all 200ms",
          "& mark, & strong, & a": {
            color: "neutral"
          },
          _light: {
            color: "grey.400"
          }
        }
      },
      variants: {
        alignItems: {
          start: {
            root: {
              alignItems: "start",
              textAlign: "start"
            }
          },
          center: {
            root: {
              alignItems: "center",
              textAlign: "center"
            }
          },
          end: {
            root: {
              alignItems: "end",
              textAlign: "end"
            }
          }
        },
        size: {
          sm: {
            root: {},
            headline: {
              fontSize: {
                base: "xl",
                xl: "2xl"
              },
              lineHeight: "1.25"
            },
            description: {
              fontSize: {
                base: "sm",
                md: "md"
              }
            }
          },
          md: {
            root: {},
            headline: {
              fontSize: {
                base: "2xl",
                xl: "3xl"
              },
              lineHeight: "1.25"
            },
            description: {
              fontSize: {
                base: "md",
                md: "lg"
              }
            }
          },
          lg: {
            root: {},
            headline: {
              fontSize: {
                base: "2xl",
                md: "4xl",
                "2xl": "5xl"
              },
              lineHeight: "1.1"
            },
            description: {
              fontSize: {
                base: "md",
                md: "lg",
                "2xl": "xl"
              },
              lineHeight: "1.75"
            }
          }
        }
      }
    }), o = _(() => r({
      alignItems: t.alignItems || "start",
      size: t.size || "md"
    }));
    return (n, a) => (m(), y("div", {
      class: u(o.value.root)
    }, [
      p(n.$slots, "headline", {}, () => [
        e.headline ? (m(), $(Z(e.headlineTag), {
          key: 0,
          class: u(o.value.headline)
        }, {
          default: R(() => [
            T("span", { innerHTML: e.headline }, null, 8, wt)
          ]),
          _: 1
        }, 8, ["class"])) : w("", !0)
      ]),
      p(n.$slots, "description", {}, () => [
        e.description ? (m(), y("div", {
          key: 0,
          innerHTML: e.description,
          class: u(o.value.description)
        }, null, 10, It)) : w("", !0)
      ]),
      p(n.$slots, "actions")
    ], 2));
  }
}), Gt = {
  Lead: Tt
}, ue = /* @__PURE__ */ S({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = ye(), o = _(() => t.id || `field-${r}`), n = _(() => t.error ? `${o.value}-error` : null), a = _(() => t.message ? `${o.value}-message` : null), l = _(() => !!t.error);
    z("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const i = h({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (c, d) => (m(), y("div", {
      class: u([s(i), t.class])
    }, [
      p(c.$slots, "default")
    ], 2));
  }
}), Bt = /* @__PURE__ */ S({
  __name: "FieldRequired",
  setup(e) {
    return (t, r) => (m(), y("span", {
      class: u(s(h)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), zt = ["for", "aria-disabled"], me = /* @__PURE__ */ S({
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
    const t = e, r = O("fieldContext", null), o = _(() => t.for || (r == null ? void 0 : r.fieldId) || void 0), n = W({
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
    return (a, l) => (m(), y("label", {
      for: o.value,
      class: u([
        s(n)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      _e(ke(t.label) + " ", 1),
      t.required ? (m(), $(Bt, { key: 0 })) : w("", !0)
    ], 10, zt));
  }
}), Rt = ["id", "innerHTML"], ge = /* @__PURE__ */ S({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = O("fieldContext", null), o = _(() => t.message || (r == null ? void 0 : r.message) || null), n = _(() => t.id || (r == null ? void 0 : r.messageId) || void 0), a = h({
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
    return (l, i) => o.value ? (m(), y("span", {
      key: 0,
      id: n.value,
      class: u([s(a), t.class]),
      innerHTML: o.value
    }, null, 10, Rt)) : w("", !0);
  }
}), $t = ["id", "innerHTML"], be = /* @__PURE__ */ S({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = O("fieldContext", null), o = _(() => t.message || (r == null ? void 0 : r.errorMessage) || null), n = _(() => t.id || (r == null ? void 0 : r.errorId) || void 0), a = h({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, i) => o.value ? (m(), y("span", {
      key: 0,
      id: n.value,
      class: u([s(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, $t)) : w("", !0);
  }
}), Ot = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], pe = /* @__PURE__ */ S({
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
  setup(e, { emit: t }) {
    const r = e, o = t, n = O("fieldContext", null), a = _(() => {
      if (!n) return;
      const d = [];
      return n.errorId && d.push(n.errorId), n.helperId && d.push(n.helperId), d.length > 0 ? d.join(" ") : void 0;
    }), l = _(() => r.valid === !0 ? !1 : r.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), i = (d) => {
      const x = d.target;
      o("update:modelValue", x.value);
    }, c = W({
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
    return (d, x) => (m(), y("input", {
      id: e.id,
      name: e.name,
      class: u([s(c)({ size: e.size, valid: r.valid }), r.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: i
    }, null, 42, Ot));
  }
}), Et = /* @__PURE__ */ S({
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
  setup(e, { emit: t }) {
    const r = e, o = _(() => r.error ? !1 : "none"), n = t, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, i) => (m(), $(ue, null, {
      default: R(() => [
        e.label ? (m(), $(me, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : w("", !0),
        j(pe, {
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
        e.message || e.error ? (m(), y("div", {
          key: 1,
          class: u(s(h)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (m(), $(ge, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : w("", !0),
          e.error ? (m(), $(be, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : w("", !0)
        ], 2)) : w("", !0)
      ]),
      _: 1
    }));
  }
}), Kt = {
  Input: Et,
  Base: ue,
  Label: me,
  Error: be,
  Message: ge
}, Vt = ["action", "method", "id", "name", "aria-label"], Mt = ["placeholder"], Lt = /* @__PURE__ */ S({
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
  setup(e, { emit: t }) {
    const r = t, o = I(null), n = (a) => {
      a.preventDefault(), r("submit", o.value);
    };
    return (a, l) => (m(), y("form", {
      ref_key: "promptForm",
      ref: o,
      action: e.action,
      method: e.method,
      id: e.id,
      name: e.name,
      "aria-label": e.ariaLabel,
      onSubmit: n,
      class: u(s(h)({
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
      p(a.$slots, "parameter"),
      p(a.$slots, "textarea", {}, () => [
        T("textarea", {
          name: "message",
          class: u(s(h)({
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
        }, null, 10, Mt)
      ]),
      p(a.$slots, "footer")
    ], 42, Vt));
  }
}), jt = /* @__PURE__ */ S({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, r) => (m(), y("div", {
      class: u(s(h)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      T("div", {
        class: u(s(h)({
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
        p(t.$slots, "inputs")
      ], 2),
      T("div", {
        class: u(s(h)({
          flex: "0",
          flexBasis: "100%",
          "@container (min-width: 600px)": {
            flexBasis: "auto"
          }
        }))
      }, [
        p(t.$slots, "action")
      ], 2)
    ], 2));
  }
}), Ut = {
  Input: pe,
  Prompt: Lt,
  PromptFooter: jt
}, Dt = ["innerHTML"], Wt = ["innerHTML"], Pt = /* @__PURE__ */ S({
  __name: "AccordionRoot",
  props: {
    type: { default: "multiple" },
    orientation: { default: "vertical" },
    size: { default: "md" },
    items: {},
    classes: { default: {} }
  },
  setup(e) {
    const t = e, o = q({
      slots: ["root", "item", "trigger", "content"],
      base: {
        root: {
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          overflow: "clip",
          color: "neutral"
        },
        item: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "grey.dusk",
          transition: "all 300ms",
          _open: {
            bg: "grey.night"
          }
        },
        trigger: {
          width: "100%",
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row",
          cursor: "pointer",
          fontWeight: "semibold",
          lineHeight: "normal",
          alignItems: "center",
          _open: {
            '& [data-trigger="icon"]': {
              transform: "rotate(180deg)"
            }
          },
          '& [data-trigger="icon"]': {
            marginLeft: "auto",
            transition: "transform 0.2s ease-in-out"
          }
        },
        content: {
          display: "block !important",
          interpolateSize: "allow-keywords",
          overflow: "clip",
          _open: {
            animationStyle: "slideDown",
            '& [data-trigger="icon"]': {
              transform: "rotate(180deg)",
              transition: "transform 0.2s ease-in-out"
            }
          },
          _closed: {
            animationStyle: "slideUp"
          },
          "& > div": {
            paddingTop: "0"
          }
        }
      },
      variants: {
        orientation: {
          horizontal: {
            root: {
              flexDirection: "row"
            }
          },
          vertical: {
            root: {
              flexDirection: "column"
            }
          }
        },
        size: {
          md: {
            root: {
              gap: "md"
            },
            item: {
              borderRadius: "lg"
            },
            trigger: {
              paddingY: "md",
              paddingX: "lg",
              gap: "md",
              fontSize: {
                base: "md",
                md: "lg"
              },
              '& [data-trigger="icon"]': {
                fontSize: {
                  base: "sm",
                  md: "md"
                }
              }
            },
            content: {
              "& > div": {
                paddingBottom: "lg",
                paddingX: "lg"
              }
            }
          }
        }
      }
    })({
      orientation: t.orientation,
      size: t.size
    });
    return (n, a) => (m(), $(s(we), {
      type: e.type,
      orientation: e.orientation,
      class: u(s(o).root)
    }, {
      default: R(() => [
        e.items && e.items.length > 0 ? (m(!0), y(Se, { key: 0 }, Ce(e.items, (l) => (m(), $(s(Ie), {
          key: l.id,
          value: l.id,
          class: u(s(o).item)
        }, {
          default: R(() => [
            j(s(Te), null, {
              default: R(() => [
                j(s(Be), {
                  class: u(s(o).trigger)
                }, {
                  default: R(() => [
                    p(n.$slots, "icon", { item: l }, () => {
                      var i;
                      return [
                        l.icon ? (m(), y("span", {
                          key: 0,
                          class: u([
                            `icon icon-${l.icon}`,
                            ((i = e.classes) == null ? void 0 : i.icon) || null
                          ])
                        }, null, 2)) : w("", !0)
                      ];
                    }),
                    T("span", {
                      class: u(s(h)({
                        flex: "1 0%",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "start"
                      })),
                      innerHTML: l.title
                    }, null, 10, Dt),
                    a[0] || (a[0] = T("span", {
                      class: "icon icon-caret-down-bold",
                      "data-trigger": "icon"
                    }, null, -1))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1024),
            j(s(ze), {
              class: u(s(o).content)
            }, {
              default: R(() => [
                T("div", {
                  innerHTML: l.content
                }, null, 8, Wt)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128)) : w("", !0)
      ]),
      _: 3
    }, 8, ["type", "orientation", "class"]));
  }
}), Zt = {
  Root: Pt
};
function Jt(e) {
  const t = _(() => e ? new FormData(e) : null), r = _(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: F(t),
    jsonData: F(r)
  };
}
export {
  Zt as Accordion,
  Ht as Button,
  Nt as Card,
  qt as Carousel,
  Kt as Field,
  Yt as Flyout,
  Ut as Form,
  Gt as Hero,
  Xt as Loader,
  gt as useCarousel,
  xt as useFlyout,
  Jt as useFormData
};
