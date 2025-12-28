import { defineComponent as _, useSlots as ee, computed as v, createElementBlock as S, createCommentVNode as C, openBlock as g, normalizeClass as u, unref as i, renderSlot as h, createElementVNode as I, Fragment as te, renderList as re, toDisplayString as X, createBlock as B, resolveDynamicComponent as Y, withCtx as R, normalizeStyle as oe, ref as z, watch as ne, onMounted as ae, onUnmounted as le, provide as $, withModifiers as _e, inject as O, readonly as N, normalizeProps as F, guardReactiveProps as H, createVNode as W, Transition as ke, useId as Ce, createTextVNode as we } from "vue";
import { AccordionRoot as Ie, AccordionItem as ze, AccordionHeader as Te, AccordionTrigger as Re, AccordionContent as Be } from "reka-ui";
function q(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var $e = (e) => typeof e == "object" && e !== null;
function G(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var Oe = (e) => e === "base";
function Ve(e) {
  return e.slice().filter((t) => !Oe(t));
}
function U(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function Ee(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = U(r % 52) + t;
  return U(r % 52) + t;
}
function Me(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function De(e) {
  return Ee(Me(5381, e) >>> 0);
}
var ie = /\s*!(important)?/i;
function Le(e) {
  return typeof e == "string" ? ie.test(e) : !1;
}
function We(e) {
  return typeof e == "string" ? e.replace(ie, "").trim() : e;
}
function se(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var j = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...o) => {
    const n = JSON.stringify(o);
    if (t.has(n))
      return t.get(n);
    const a = e(...o);
    return t.set(n, a), a;
  };
}, je = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function K(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((o) => {
    if (je.has(o)) return;
    const n = t[o], a = r[o];
    q(n) && q(a) ? t[o] = K(n, a) : t[o] = a;
  }), t), {});
}
var Ae = (e) => e != null;
function de(e, t, r = {}) {
  const { stop: o, getKey: n } = r;
  function a(l, s = []) {
    if ($e(l)) {
      const d = {};
      for (const [c, y] of Object.entries(l)) {
        const b = (n == null ? void 0 : n(c, y)) ?? c, m = [...s, b];
        if (o != null && o(l, m))
          return t(l, s);
        const f = a(y, m);
        Ae(f) && (d[b] = f);
      }
      return d;
    }
    return t(l, s);
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
function ce(e, t, r = !0) {
  const { utility: o, conditions: n } = t, { hasShorthand: a, resolveShorthand: l } = o;
  return de(
    e,
    (s) => Array.isArray(s) ? Pe(s, n.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: r ? (s) => a ? l(s) : s : void 0
    }
  );
}
var Fe = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, He = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function Xe(e) {
  const { utility: t, hash: r, conditions: o = Fe } = e, n = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, s) => {
    let d;
    if (r) {
      const c = [...o.finalize(l), s];
      d = n(t.toHash(c, De));
    } else
      d = [...o.finalize(l), n(s)].join(":");
    return d;
  };
  return j(({ base: l, ...s } = {}) => {
    const d = Object.assign(s, l), c = ce(d, e), y = /* @__PURE__ */ new Set();
    return de(c, (b, m) => {
      if (b == null) return;
      const f = Le(b), [w, ...T] = o.shift(m), V = Ve(T), D = t.transform(w, We(He(b)));
      let p = a(V, D.className);
      f && (p = `${p}!`), y.add(p);
    }), Array.from(y).join(" ");
  });
}
function Ne(...e) {
  return e.flat().filter((t) => q(t) && Object.keys(G(t)).length > 0);
}
function qe(e) {
  function t(n) {
    const a = Ne(...n);
    return a.length === 1 ? a : a.map((l) => ce(l, e));
  }
  function r(...n) {
    return K(...t(n));
  }
  function o(...n) {
    return Object.assign({}, ...t(n));
  }
  return { mergeCss: j(r), assignCss: o };
}
var Ye = /([A-Z])/g, Ge = /^ms-/, Ke = j((e) => e.startsWith("--") ? e : e.replace(Ye, "-$1").replace(Ge, "-ms-").toLowerCase()), Ue = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Ue.split(",").join("|")}`;
var Ze = (e = {}) => {
  const t = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Je(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, t(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, s] of Object.entries(a))
      o.forEach(([d, c]) => {
        var y;
        (y = c.variants)[n] ?? (y[n] = {}), c.variants[n][l] = s[d] ?? {};
      });
  return Object.fromEntries(o);
}, Je = (e, t) => e.filter((r) => r.css[t]).map((r) => ({ ...r, css: r.css[t] }));
function ue(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), o = Object.keys(r), n = (l) => {
    const s = {};
    for (let d = 0; d < l.length; d++) {
      const c = l[d];
      r[c] && (Object.defineProperty(s, c, r[c]), delete r[c]);
    }
    return s;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return t.map(a).concat(n(o));
}
var Qe = (...e) => {
  const t = e.reduce((r, o) => (o && o.forEach((n) => r.add(n)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const et = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ge = new Set(et.split(",")), tt = /^@|&|&$/;
function Z(e) {
  return ge.has(e) || tt.test(e);
}
const rt = /^_/, ot = /&|@/;
function nt(e) {
  return e.map((t) => ge.has(t) ? t.replace(rt, "") : ot.test(t) ? `[${se(t.trim())}]` : t);
}
function at(e) {
  return e.sort((t, r) => {
    const o = Z(t), n = Z(r);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const lt = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,animationStyle:animationStyle", me = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map();
lt.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [o, ...n] = r.split("/");
  me.set(t, o), n.length && n.forEach((a) => {
    be.set(a === "1" ? o : a, t);
  });
});
const J = (e) => be.get(e) || e, fe = {
  conditions: {
    shift: at,
    finalize: nt,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = J(e);
      return { className: `${me.get(r) || Ke(r)}_${se(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: J
  }
}, it = Xe(fe), x = (...e) => it(M(...e));
x.raw = (...e) => M(...e);
const { mergeCss: M } = qe(fe);
function L() {
  let e = "", t = 0, r;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const Q = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function A(e) {
  const { base: t, variants: r, defaultVariants: o, compoundVariants: n } = Q(e), a = (m) => ({ ...o, ...G(m) });
  function l(m = {}) {
    var V;
    const f = a(m);
    let w = { ...t };
    for (const [D, p] of Object.entries(f))
      (V = r[D]) != null && V[p] && (w = M(w, r[D][p]));
    const T = st(n, f);
    return M(w, T);
  }
  function s(m) {
    const f = Q(m.config), w = Qe(m.variantKeys, Object.keys(r));
    return A({
      base: M(t, f.base),
      variants: Object.fromEntries(
        w.map((T) => [T, M(r[T], f.variants[T])])
      ),
      defaultVariants: K(o, f.defaultVariants),
      compoundVariants: [...n, ...f.compoundVariants]
    });
  }
  function d(m) {
    return x(l(m));
  }
  const c = Object.keys(r);
  function y(m) {
    return ue(m, c);
  }
  const b = Object.fromEntries(Object.entries(r).map(([m, f]) => [m, Object.keys(f)]));
  return Object.assign(j(d), {
    __cva__: !0,
    variantMap: b,
    variantKeys: c,
    raw: l,
    config: e,
    merge: s,
    splitVariantProps: y,
    getVariantProps: a
  });
}
function st(e, t) {
  let r = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((d) => t[a] === d)) && (r = M(r, o.css));
  }), r;
}
function P(e) {
  const t = Object.entries(Ze(e)).map(([b, m]) => [b, A(m)]), r = e.defaultVariants ?? {}, o = t.reduce((b, [m, f]) => (e.className && (b[m] = f.config.className), b), {});
  function n(b) {
    const m = t.map(([f, w]) => [f, L(w(b), o[f])]);
    return Object.fromEntries(m);
  }
  function a(b) {
    const m = t.map(([f, w]) => [f, w.raw(b)]);
    return Object.fromEntries(m);
  }
  const l = e.variants ?? {}, s = Object.keys(l);
  function d(b) {
    return ue(b, s);
  }
  const c = (b) => ({ ...r, ...G(b) }), y = Object.fromEntries(
    Object.entries(l).map(([b, m]) => [b, Object.keys(m)])
  );
  return Object.assign(j(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: y,
    variantKeys: s,
    classNameMap: o,
    splitVariantProps: d,
    getVariantProps: c
  });
}
const dt = P({
  slots: ["root", "icon", "content", "message", "title", "description", "close"],
  base: {
    root: {
      display: "flex",
      alignItems: "flex-start",
      borderWidth: "1px",
      borderStyle: "solid"
    },
    icon: {},
    content: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      minWidth: 0
    },
    message: {
      display: "flex",
      flexDirection: "column",
      gap: "2xs"
    },
    title: {
      fontWeight: "700",
      lineHeight: "1.25"
    },
    description: {
      fontWeight: "500",
      lineHeight: "1.5"
    },
    close: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: "lg",
      height: "lg",
      padding: 0,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "neutral.light",
      borderRadius: "sm",
      transition: "all 200ms",
      _hover: {
        color: "neutral",
        bg: "lucid.100"
      },
      _active: {
        bg: "lucid.200"
      }
    }
  },
  variants: {
    variant: {
      danger: {
        root: {
          bg: "danger/15",
          borderColor: "danger/20"
        },
        icon: {
          color: "red.300",
          _light: {
            color: "red.700"
          }
        },
        title: {
          color: "red.200",
          _light: {
            color: "red.800"
          }
        },
        description: {
          color: "red.200",
          _light: {
            color: "red.800"
          }
        }
      },
      success: {
        root: {
          bg: "success/15",
          borderColor: "success/20"
        },
        icon: {
          color: "green.300",
          _light: {
            color: "green.700"
          }
        },
        title: {
          color: "green.200",
          _light: {
            color: "green.800"
          }
        },
        description: {
          color: "green.200",
          _light: {
            color: "green.800"
          }
        }
      },
      info: {
        root: {
          bg: "info/15",
          borderColor: "info/20"
        },
        icon: {
          color: "blue.300",
          _light: {
            color: "blue.700"
          }
        },
        title: {
          color: "blue.200",
          _light: {
            color: "blue.800"
          }
        },
        description: {
          color: "blue.200",
          _light: {
            color: "blue.800"
          }
        }
      },
      warning: {
        root: {
          bg: "warning/15",
          borderColor: "warning/20"
        },
        icon: {
          color: "yellow.300",
          _light: {
            color: "yellow.700"
          }
        },
        title: {
          color: "yellow.200",
          _light: {
            color: "yellow.800"
          }
        },
        description: {
          color: "yellow.200",
          _light: {
            color: "yellow.800"
          }
        }
      }
    },
    borderSize: {
      md: {
        root: {
          borderRadius: "md"
        }
      },
      lg: {
        root: {
          borderRadius: "lg"
        }
      },
      xl: {
        root: {
          borderRadius: "2xl"
        }
      }
    },
    iconSize: {
      md: {},
      lg: {
        icon: {
          fontSize: "lg"
        }
      },
      xl: {
        icon: {
          fontSize: "xl"
        }
      }
    },
    textSize: {
      md: {
        title: {
          fontSize: "md"
        },
        description: {
          fontSize: "sm"
        }
      },
      lg: {
        title: {
          fontSize: "lg"
        },
        description: {
          fontSize: "md"
        }
      }
    },
    spacing: {
      md: {
        root: {
          gap: "sm",
          padding: "md"
        },
        content: {
          gap: "sm"
        }
      },
      lg: {
        root: {
          gap: "lg",
          padding: "xl"
        },
        content: {
          gap: "sm"
        }
      }
    }
  },
  defaultVariants: {
    variant: "info",
    textSize: "md",
    borderSize: "md",
    spacing: "md",
    iconSize: "xl"
  }
}), ct = ["role"], ut = /* @__PURE__ */ _({
  __name: "AlertRoot",
  props: {
    variant: { default: "info" },
    spacing: { default: "lg" },
    iconSize: { default: "xl" },
    textSize: { default: "lg" },
    borderSize: { default: "md" },
    messages: { default: () => [] },
    dismissible: { type: Boolean, default: !1 },
    role: { default: void 0 },
    classRoot: { default: null },
    classIcon: { default: null },
    classContent: { default: null },
    classClose: { default: null }
  },
  emits: ["dismiss"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = ee(), a = v(() => ({
      danger: "circle-wavy-warning-bold",
      success: "check-circle-bold",
      info: "info-bold",
      warning: "warning-bold"
    })[r.variant] || "info-circle"), l = v(() => r.role ? r.role : r.variant === "danger" || r.variant === "warning" ? "alert" : "status"), s = v(() => r.messages.length > 0 || !!n.icon), d = v(() => dt({
      variant: r.variant,
      spacing: r.spacing,
      borderSize: r.borderSize,
      iconSize: r.iconSize,
      textSize: r.textSize
    })), c = () => {
      o("dismiss");
    };
    return (y, b) => s.value ? (g(), S("div", {
      key: 0,
      class: u(i(L)(d.value.root, e.classRoot)),
      role: l.value
    }, [
      h(y.$slots, "icon", {}, () => [
        I("span", {
          class: u([
            "icon",
            `icon-${a.value}`,
            i(L)(d.value.icon, e.classIcon)
          ]),
          "aria-hidden": "true"
        }, null, 2)
      ]),
      I("div", {
        class: u(i(L)(d.value.content, e.classContent))
      }, [
        (g(!0), S(te, null, re(e.messages, (m, f) => (g(), S("div", {
          key: `message-${f}`,
          class: u(d.value.message)
        }, [
          m.title ? (g(), S("div", {
            key: 0,
            class: u(d.value.title)
          }, X(m.title), 3)) : C("", !0),
          I("p", {
            class: u(d.value.description)
          }, X(m.description), 3)
        ], 2))), 128))
      ], 2),
      e.dismissible ? (g(), S("button", {
        key: 0,
        type: "button",
        class: u(i(L)(d.value.close, e.classClose)),
        "aria-label": "Dismiss alert",
        onClick: c
      }, [...b[0] || (b[0] = [
        I("span", {
          class: "icon icon-x-bold",
          "aria-hidden": "true"
        }, null, -1)
      ])], 2)) : C("", !0)
    ], 10, ct)) : C("", !0);
  }
}), Kt = {
  Root: ut
}, gt = ["innerHTML"], Ut = /* @__PURE__ */ _({
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
    const t = e, r = v(() => t.to ? "a" : "button"), o = v(() => r.value === "button" && t.type ? t.type : r.value === "button" ? "button" : null), n = v(() => t.external && r.value === "a" ? "_blank" : null), a = v(() => t.external && r.value === "a" ? "noopener noreferrer" : null), l = A({
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
    }), s = v(() => x(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (d, c) => (g(), B(Y(r.value), {
      class: u(["btn", s.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: R(() => [
        t.icon ? (g(), S("span", {
          key: 0,
          class: u([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : C("", !0),
        t.label ? (g(), S("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, gt)) : C("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), mt = ["aria-label"], Zt = /* @__PURE__ */ _({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, r) => (g(), S("div", {
      class: u([
        "loader",
        i(x)({
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
      style: oe({
        "--loader-size": `${e.size}px`
      })
    }, null, 14, mt));
  }
}), bt = P({
  slots: ["root"],
  base: {
    root: {
      display: "block",
      borderWidth: "var(--card-border-size)",
      borderStyle: "solid",
      borderColor: "transparent",
      position: "relative",
      zIndex: "1",
      maxWidth: "100%",
      backdropBlur: "8px",
      backdropFilter: "auto",
      boxShadow: "var(--card-shadow)",
      "--card-bg-overlay": "linear-gradient(transparent)"
    }
  },
  variants: {
    colorStrategy: {
      default: {
        root: {
          background: "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box",
          borderColor: "var(--card-border-color)"
        }
      },
      image: {
        root: {
          background: "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box, var(--card-border-color) border-box"
        }
      }
    },
    color: {
      none: {
        root: {
          "--card-bg": "transparent",
          "--card-border-color": "transparent"
        }
      },
      default: {
        root: {
          "--card-bg": "linear-gradient(token(colors.grey.deep))",
          "--card-border-color": "token(colors.grey.700)",
          _light: {
            "--card-bg": "linear-gradient(token(colors.grey.50))",
            "--card-border-color": "token(colors.grey.100)"
          }
        }
      },
      primary: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-primary-lucid-900))"
        }
      },
      danger: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-danger-lucid-900))"
        }
      },
      success: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-success-lucid-900))"
        }
      },
      warning: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-warning-lucid-900))"
        }
      },
      info: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-info-lucid-900))"
        }
      },
      "lucid-deep": {
        root: {
          "--card-bg": "linear-gradient(rgb(from token(colors.black) r g b / 10%))"
        }
      }
    },
    borderRadius: {
      sm: {
        root: {
          borderRadius: "lg"
        }
      },
      md: {
        root: {
          borderRadius: "xl"
        }
      },
      lg: {
        root: {
          borderRadius: "2xl"
        }
      },
      xl: {
        root: {
          borderRadius: "4xl"
        }
      }
    }
  },
  defaultVariants: {
    borderRadius: "md",
    color: "default",
    colorStrategy: "default"
  }
}), ft = /* @__PURE__ */ _({
  __name: "CardRoot",
  props: {
    as: { default: "div" },
    colorStrategy: { default: "default" },
    color: { default: "default" },
    borderSize: { default: 1 },
    borderRadius: { default: "md" },
    borderColor: {},
    classRoot: {}
  },
  setup(e) {
    const t = e, { root: r } = bt.raw({
      borderRadius: t.borderRadius,
      colorStrategy: t.colorStrategy,
      color: t.color
    }), o = v(() => {
      const n = {
        "--card-border-size": `${t.borderSize}px`
      };
      return typeof t.borderColor == "string" && (n["--card-border-color"] = t.borderColor), n;
    });
    return (n, a) => (g(), B(Y(t.as), {
      class: u(i(x)(i(r), t.classRoot)),
      style: oe(o.value)
    }, {
      default: R(() => [
        h(n.$slots, "before"),
        h(n.$slots, "default"),
        h(n.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), pt = /* @__PURE__ */ _({
  __name: "CardBody",
  setup(e) {
    return (t, r) => (g(), S("div", {
      class: u(i(x)({
        padding: "xl"
      }))
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), Jt = {
  Root: ft,
  Body: pt
};
function vt(e, t, r) {
  const o = z(null), n = z(0), a = z([]), l = z(null), s = z(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, c = v(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), y = v(() => {
    var p;
    return Math.ceil((((p = o.value) == null ? void 0 : p.length) ?? 0) / a.value.length);
  }), b = v(() => {
    var k;
    const p = ((k = o.value) == null ? void 0 : k.length) ?? 0;
    return p > 0 && a.value.length === p;
  });
  ne(c, (p, k) => {
    p && p.classList.add(d.itemActiveClass), k && k.classList.remove(d.itemActiveClass);
  });
  const m = (p) => {
    if (!o.value) return null;
    if (p === "first") {
      const k = a.value[0];
      return k ? Array.from(o.value).indexOf(k) - 1 : null;
    }
    if (p === "last") {
      const k = a.value[a.value.length - 1];
      return k ? Array.from(o.value).indexOf(k) + 1 : null;
    }
    return null;
  }, f = () => {
    const p = l.value === "next" ? "end" : "start", k = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[k] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[k].style.scrollSnapAlign = p, o.value[k].scrollIntoView({ behavior: "smooth" }), n.value = k;
  }, w = () => {
    const p = l.value === "prev" ? m("first") : m("last");
    if (!(!o.value || !o.value.length)) {
      if (p === null || !o.value || o.value[p] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[p].scrollIntoView({ behavior: "smooth" }), n.value = p;
    }
  }, T = () => {
    l.value = "next", e.scrollMode === "item" ? f() : e.scrollMode === "viewport" ? w() : console.warn("No more items to scroll next");
  }, V = () => {
    l.value = "prev", e.scrollMode === "item" ? f() : e.scrollMode === "viewport" ? w() : console.warn("No more items to scroll prev");
  }, D = (p) => {
    p.deltaY > 0 ? T() : V();
  };
  return ae(() => {
    var p;
    o.value = r.default ? ((p = t.value) == null ? void 0 : p.querySelectorAll(":scope > *")) ?? null : null, s.value = new IntersectionObserver((k) => {
      k.forEach((E) => {
        E.isIntersecting ? (E.target.dataset.carouselVisibility = "visible", E.target.classList.add(d.itemVisibleClass)) : (delete E.target.dataset.carouselVisibility, E.target.classList.remove(d.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((E) => E.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && s.value && o.value.forEach((k) => s.value.observe(k));
  }), le(() => {
    t.value = null, o.value = null, n.value = 0, s.value && s.value.disconnect();
  }), {
    handleNext: T,
    handlePrev: V,
    handleWheel: D,
    carouselItems: o,
    carouselItem: c,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: b,
    pages: y
  };
}
const ht = /* @__PURE__ */ _({
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
    const t = e, r = ee(), o = z(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: s,
      carouselItem: d,
      visibleCarouselItems: c,
      currentCarouselItemIndex: y,
      scrollDirection: b,
      allItemsVisible: m
    } = vt(t, o, r);
    return $("carousel", o), $("handleNext", n), $("handlePrev", a), $("carouselItems", s), $("carouselItem", d), $("visibleCarouselItems", c), $("currentCarouselItemIndex", y), $("scrollDirection", b), $("allItemsVisible", m), (f, w) => (g(), S("div", {
      class: u(i(x)(
        i(x).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      h(f.$slots, "carousel-before"),
      I("ul", {
        ref_key: "carousel",
        ref: o,
        class: u(i(x)(
          i(x).raw({
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
        onWheel: w[0] || (w[0] = _e(
          //@ts-ignore
          (...T) => i(l) && i(l)(...T),
          ["prevent"]
        ))
      }, [
        h(f.$slots, "default")
      ], 34),
      h(f.$slots, "carousel-after")
    ], 2));
  }
}), xt = /* @__PURE__ */ _({
  __name: "CarouselItem",
  setup(e) {
    return (t, r) => (g(), S("li", {
      class: u(i(x)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), yt = ["disabled"], St = ["disabled"], _t = /* @__PURE__ */ _({
  __name: "CarouselNavigation",
  setup(e) {
    const t = z(!0), r = z(!0), o = O("handlePrev"), n = O("handleNext"), a = O("allItemsVisible", z(!1)), l = O("carouselItems", z(null)), s = O("currentCarouselItemIndex", z(0));
    return ne(
      [l, s, a],
      ([d, c, y]) => {
        y ? (t.value = !0, r.value = !0) : d !== null && d.length > 0 && (t.value = c === 0, r.value = c === d.length - 1);
      },
      { immediate: !0 }
    ), (d, c) => (g(), S("div", null, [
      h(d.$slots, "action-prev", {
        handlePrev: i(o),
        disabled: t.value
      }, () => [
        I("button", {
          onClick: c[0] || (c[0] = //@ts-ignore
          (...y) => i(o) && i(o)(...y)),
          disabled: t.value
        }, " Prev ", 8, yt)
      ]),
      h(d.$slots, "action-next", {
        handleNext: i(n),
        disabled: r.value
      }, () => [
        I("button", {
          onClick: c[1] || (c[1] = //@ts-ignore
          (...y) => i(n) && i(n)(...y)),
          disabled: r.value
        }, " Next ", 8, St)
      ])
    ]));
  }
}), Qt = {
  Root: ht,
  Item: xt,
  Navigation: _t
};
function kt(e) {
  const t = z(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return ae(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", r), e.el.value.addEventListener("mouseleave", o));
  }), le(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", r), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: N(t),
    toggle: n
  };
}
const pe = /* @__PURE__ */ _({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (r, o) => (g(), S("div", {
      class: u(i(x)(
        i(x).raw({
          position: "absolute",
          zIndex: 50,
          top: "100%",
          left: t.direction === "left" ? "0" : "auto",
          right: t.direction === "right" ? "0" : "auto",
          paddingTop: "sm"
        })
      ))
    }, [
      h(r.$slots, "default")
    ], 2));
  }
}), Ct = ["aria-label", "aria-expanded"], wt = ["innerHTML"], It = /* @__PURE__ */ _({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = z(), r = e, { open: o, toggle: n } = kt({ el: t });
    return (a, l) => (g(), S("div", {
      ref_key: "el",
      ref: t,
      class: u(
        i(x)(
          i(x).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      h(a.$slots, "trigger", F(H({ open: i(o) })), () => [
        I("button", {
          type: "button",
          class: u([
            i(x)(
              i(x).raw({
                cursor: "pointer"
              }),
              r.classTrigger
            ),
            i(o) ? "active" : null
          ]),
          "aria-haspopup": "true",
          "aria-label": e.ariaLabel || e.label,
          "aria-expanded": i(o),
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => i(n) && i(n)(...s))
        }, [
          r.icon ? (g(), S("span", {
            key: 0,
            class: u(r.icon)
          }, null, 2)) : C("", !0),
          h(a.$slots, "trigger-label", {}, () => [
            I("span", { innerHTML: e.label }, null, 8, wt)
          ], !0),
          h(a.$slots, "trigger-icon", F(H({ open: i(o) })), void 0, !0)
        ], 10, Ct)
      ], !0),
      h(a.$slots, "dropdown", F(H({ open: i(o) })), () => [
        W(ke, { name: "flyout" }, {
          default: R(() => [
            i(o) ? (g(), B(pe, { key: 0 }, {
              default: R(() => [
                h(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : C("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), zt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Tt = /* @__PURE__ */ zt(It, [["__scopeId", "data-v-a1ce9f68"]]), er = {
  Root: Tt,
  Dropdown: pe
}, Rt = P({
  slots: ["root", "headline", "description", "actions"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      marginX: "auto"
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
    alignSelf: {
      start: {
        root: {
          alignSelf: "start"
        }
      },
      center: {
        root: {
          alignSelf: "center"
        }
      },
      end: {
        root: {
          alignSelf: "end"
        }
      }
    },
    size: {
      sm: {
        root: {
          gap: "md"
        },
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
        root: {
          gap: "lg"
        },
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
        root: {
          gap: "xl"
        },
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
}), Bt = ["innerHTML"], $t = ["innerHTML"], Ot = /* @__PURE__ */ _({
  __name: "HeroLead",
  props: {
    headline: {},
    headlineTag: { default: "h1" },
    description: {},
    alignItems: { default: "start" },
    alignSelf: { default: "start" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = v(() => Rt({
      alignItems: t.alignItems || "start",
      alignSelf: t.alignSelf || "start",
      size: t.size || "md"
    }));
    return (o, n) => (g(), S("div", {
      class: u(r.value.root)
    }, [
      h(o.$slots, "headline", {}, () => [
        e.headline ? (g(), B(Y(e.headlineTag), {
          key: 0,
          class: u(r.value.headline)
        }, {
          default: R(() => [
            I("span", { innerHTML: e.headline }, null, 8, Bt)
          ]),
          _: 1
        }, 8, ["class"])) : C("", !0)
      ]),
      h(o.$slots, "description", {}, () => [
        e.description ? (g(), S("div", {
          key: 0,
          innerHTML: e.description,
          class: u(r.value.description)
        }, null, 10, $t)) : C("", !0)
      ]),
      h(o.$slots, "actions")
    ], 2));
  }
}), tr = {
  Lead: Ot
}, ve = /* @__PURE__ */ _({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = Ce(), o = v(() => t.id || `field-${r}`), n = v(() => t.error ? `${o.value}-error` : null), a = v(() => t.message ? `${o.value}-message` : null), l = v(() => !!t.error);
    $("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const s = x({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (d, c) => (g(), S("div", {
      class: u([i(s), t.class])
    }, [
      h(d.$slots, "default")
    ], 2));
  }
}), Vt = /* @__PURE__ */ _({
  __name: "FieldRequired",
  setup(e) {
    return (t, r) => (g(), S("span", {
      class: u(i(x)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), Et = ["for", "aria-disabled"], he = /* @__PURE__ */ _({
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
    const t = e, r = O("fieldContext", null), o = v(() => t.for || (r == null ? void 0 : r.fieldId) || void 0), n = A({
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
    return (a, l) => (g(), S("label", {
      for: o.value,
      class: u([
        i(n)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      we(X(t.label) + " ", 1),
      t.required ? (g(), B(Vt, { key: 0 })) : C("", !0)
    ], 10, Et));
  }
}), Mt = ["id", "innerHTML"], xe = /* @__PURE__ */ _({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = O("fieldContext", null), o = v(() => t.message || (r == null ? void 0 : r.message) || null), n = v(() => t.id || (r == null ? void 0 : r.messageId) || void 0), a = x({
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
    return (l, s) => o.value ? (g(), S("span", {
      key: 0,
      id: n.value,
      class: u([i(a), t.class]),
      innerHTML: o.value
    }, null, 10, Mt)) : C("", !0);
  }
}), Dt = ["id", "innerHTML"], ye = /* @__PURE__ */ _({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = O("fieldContext", null), o = v(() => t.message || (r == null ? void 0 : r.errorMessage) || null), n = v(() => t.id || (r == null ? void 0 : r.errorId) || void 0), a = x({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, s) => o.value ? (g(), S("span", {
      key: 0,
      id: n.value,
      class: u([i(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, Dt)) : C("", !0);
  }
}), Lt = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], Se = /* @__PURE__ */ _({
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
    const r = e, o = t, n = O("fieldContext", null), a = v(() => {
      if (!n) return;
      const c = [];
      return n.errorId && c.push(n.errorId), n.helperId && c.push(n.helperId), c.length > 0 ? c.join(" ") : void 0;
    }), l = v(() => r.valid === !0 ? !1 : r.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), s = (c) => {
      const y = c.target;
      o("update:modelValue", y.value);
    }, d = A({
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
    return (c, y) => (g(), S("input", {
      id: e.id,
      name: e.name,
      class: u([i(d)({ size: e.size, valid: r.valid }), r.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: s
    }, null, 42, Lt));
  }
}), Wt = /* @__PURE__ */ _({
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
    const r = e, o = v(() => r.error ? !1 : "none"), n = t, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, s) => (g(), B(ve, null, {
      default: R(() => [
        e.label ? (g(), B(he, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : C("", !0),
        W(Se, {
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
        e.message || e.error ? (g(), S("div", {
          key: 1,
          class: u(i(x)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (g(), B(xe, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : C("", !0),
          e.error ? (g(), B(ye, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : C("", !0)
        ], 2)) : C("", !0)
      ]),
      _: 1
    }));
  }
}), rr = {
  Input: Wt,
  Base: ve,
  Label: he,
  Error: ye,
  Message: xe
}, jt = ["action", "method", "id", "name", "aria-label"], At = ["placeholder"], Pt = /* @__PURE__ */ _({
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
    const r = t, o = z(null), n = (a) => {
      a.preventDefault(), r("submit", o.value);
    };
    return (a, l) => (g(), S("div", {
      class: u(i(x)({
        display: "flex",
        flexDirection: "column",
        gap: "lg"
      }))
    }, [
      h(a.$slots, "alert"),
      I("form", {
        ref_key: "promptForm",
        ref: o,
        action: e.action,
        method: e.method,
        id: e.id,
        name: e.name,
        "aria-label": e.ariaLabel,
        onSubmit: n,
        class: u(i(x)({
          flexGrow: "1",
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
        h(a.$slots, "parameter"),
        h(a.$slots, "textarea", {}, () => [
          I("textarea", {
            name: "message",
            class: u(i(x)({
              flexGrow: "1",
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
          }, null, 10, At)
        ]),
        h(a.$slots, "footer")
      ], 42, jt)
    ], 2));
  }
}), Ft = /* @__PURE__ */ _({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, r) => (g(), S("div", {
      class: u(i(x)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      I("div", {
        class: u(i(x)({
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
        h(t.$slots, "inputs")
      ], 2),
      I("div", {
        class: u(i(x)({
          flex: "0",
          flexBasis: "100%",
          "@container (min-width: 600px)": {
            flexBasis: "auto"
          }
        }))
      }, [
        h(t.$slots, "action")
      ], 2)
    ], 2));
  }
}), or = {
  Input: Se,
  Prompt: Pt,
  PromptFooter: Ft
}, Ht = P({
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
      overflow: "clip",
      _open: {
        // bg: 'grey.night'
      },
      _closed: {
        _hover: {
          borderColor: "grey.400"
        }
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
      userSelect: "none",
      _open: {
        backgroundColor: "grey.night",
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
      lineHeight: "1.75",
      _open: {
        animationStyle: "slideDown",
        '& [data-trigger="icon"]': {
          transform: "rotate(180deg)",
          transition: "transform 0.2s ease-in-out"
        }
      },
      _closed: {
        animationStyle: "slideUp"
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
            base: "md"
            //md: 'lg'
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
            padding: "lg"
          }
        }
      },
      lg: {
        root: {
          gap: "lg"
        },
        item: {
          borderRadius: "xl"
        },
        trigger: {
          paddingY: "lg",
          paddingX: "xl",
          gap: "lg",
          fontSize: {
            base: "lg"
          },
          '& [data-trigger="icon"]': {
            fontSize: {
              base: "md"
            }
          }
        },
        content: {
          "& > div": {
            padding: "xl"
          }
        }
      }
    }
  }
}), Xt = ["innerHTML"], Nt = ["innerHTML"], qt = /* @__PURE__ */ _({
  __name: "AccordionRoot",
  props: {
    type: { default: "multiple" },
    orientation: { default: "vertical" },
    size: { default: "md" },
    items: {},
    classes: { default: {} }
  },
  setup(e) {
    const t = e, r = v(() => Ht({
      orientation: t.orientation,
      size: t.size
    }));
    return (o, n) => (g(), B(i(Ie), {
      type: e.type,
      orientation: e.orientation,
      class: u(r.value.root)
    }, {
      default: R(() => [
        e.items && e.items.length > 0 ? (g(!0), S(te, { key: 0 }, re(e.items, (a) => (g(), B(i(ze), {
          key: a.id,
          value: a.id,
          class: u(r.value.item)
        }, {
          default: R(() => [
            W(i(Te), null, {
              default: R(() => [
                W(i(Re), {
                  class: u(r.value.trigger)
                }, {
                  default: R(() => [
                    h(o.$slots, "icon", { item: a }, () => {
                      var l;
                      return [
                        a.icon ? (g(), S("span", {
                          key: 0,
                          class: u([
                            `icon icon-${a.icon}`,
                            ((l = e.classes) == null ? void 0 : l.icon) || null
                          ])
                        }, null, 2)) : C("", !0)
                      ];
                    }),
                    I("span", {
                      class: u(i(x)({
                        flex: "1 0%",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "start"
                      })),
                      innerHTML: a.title
                    }, null, 10, Xt),
                    n[0] || (n[0] = I("span", {
                      class: "icon icon-caret-down-bold",
                      "data-trigger": "icon"
                    }, null, -1))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1024),
            W(i(Be), {
              class: u(r.value.content)
            }, {
              default: R(() => [
                h(o.$slots, "content", { item: a }, () => [
                  I("div", {
                    innerHTML: a.content
                  }, null, 8, Nt)
                ])
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128)) : C("", !0)
      ]),
      _: 3
    }, 8, ["type", "orientation", "class"]));
  }
}), nr = {
  Root: qt
};
function ar(e) {
  const t = v(() => e ? new FormData(e) : null), r = v(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: N(t),
    jsonData: N(r)
  };
}
export {
  nr as Accordion,
  Kt as Alert,
  Ut as Button,
  Jt as Card,
  Qt as Carousel,
  rr as Field,
  er as Flyout,
  or as Form,
  tr as Hero,
  Zt as Loader,
  vt as useCarousel,
  kt as useFlyout,
  ar as useFormData
};
