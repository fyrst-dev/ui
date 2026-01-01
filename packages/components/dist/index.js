import { defineComponent as _, useSlots as re, computed as p, createElementBlock as v, createCommentVNode as w, openBlock as g, normalizeClass as c, unref as s, renderSlot as m, createElementVNode as C, Fragment as oe, renderList as ne, toDisplayString as X, createBlock as O, resolveDynamicComponent as Y, withCtx as R, normalizeStyle as ae, provide as B, inject as $, ref as z, watch as le, onMounted as se, onUnmounted as ie, withModifiers as Ie, readonly as N, normalizeProps as F, guardReactiveProps as H, createVNode as W, Transition as ze, useId as Te, createTextVNode as Be } from "vue";
import { AccordionRoot as $e, AccordionItem as Re, AccordionHeader as Oe, AccordionTrigger as Le, AccordionContent as Me } from "reka-ui";
function q(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var Ve = (e) => typeof e == "object" && e !== null;
function G(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var De = (e) => e === "base";
function Ee(e) {
  return e.slice().filter((t) => !De(t));
}
function J(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function We(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = J(r % 52) + t;
  return J(r % 52) + t;
}
function je(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function Ae(e) {
  return We(je(5381, e) >>> 0);
}
var de = /\s*!(important)?/i;
function Pe(e) {
  return typeof e == "string" ? de.test(e) : !1;
}
function Fe(e) {
  return typeof e == "string" ? e.replace(de, "").trim() : e;
}
function ce(e) {
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
}, He = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function K(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((o) => {
    if (He.has(o)) return;
    const n = t[o], a = r[o];
    q(n) && q(a) ? t[o] = K(n, a) : t[o] = a;
  }), t), {});
}
var Xe = (e) => e != null;
function ue(e, t, r = {}) {
  const { stop: o, getKey: n } = r;
  function a(l, i = []) {
    if (Ve(l)) {
      const d = {};
      for (const [u, S] of Object.entries(l)) {
        const h = (n == null ? void 0 : n(u, S)) ?? u, b = [...i, h];
        if (o != null && o(l, b))
          return t(l, i);
        const x = a(S, b);
        Xe(x) && (d[h] = x);
      }
      return d;
    }
    return t(l, i);
  }
  return a(e);
}
function Ne(e, t) {
  return e.reduce(
    (r, o, n) => {
      const a = t[n];
      return o != null && (r[a] = o), r;
    },
    {}
  );
}
function ge(e, t, r = !0) {
  const { utility: o, conditions: n } = t, { hasShorthand: a, resolveShorthand: l } = o;
  return ue(
    e,
    (i) => Array.isArray(i) ? Ne(i, n.breakpoints.keys) : i,
    {
      stop: (i) => Array.isArray(i),
      getKey: r ? (i) => a ? l(i) : i : void 0
    }
  );
}
var qe = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Ye = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function Ge(e) {
  const { utility: t, hash: r, conditions: o = qe } = e, n = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, i) => {
    let d;
    if (r) {
      const u = [...o.finalize(l), i];
      d = n(t.toHash(u, Ae));
    } else
      d = [...o.finalize(l), n(i)].join(":");
    return d;
  };
  return j(({ base: l, ...i } = {}) => {
    const d = Object.assign(i, l), u = ge(d, e), S = /* @__PURE__ */ new Set();
    return ue(u, (h, b) => {
      if (h == null) return;
      const x = Pe(h), [I, ...T] = o.shift(b), L = Ee(T), D = t.transform(I, Fe(Ye(h)));
      let y = a(L, D.className);
      x && (y = `${y}!`), S.add(y);
    }), Array.from(S).join(" ");
  });
}
function Ke(...e) {
  return e.flat().filter((t) => q(t) && Object.keys(G(t)).length > 0);
}
function Ue(e) {
  function t(n) {
    const a = Ke(...n);
    return a.length === 1 ? a : a.map((l) => ge(l, e));
  }
  function r(...n) {
    return K(...t(n));
  }
  function o(...n) {
    return Object.assign({}, ...t(n));
  }
  return { mergeCss: j(r), assignCss: o };
}
var Ze = /([A-Z])/g, Je = /^ms-/, Qe = j((e) => e.startsWith("--") ? e : e.replace(Ze, "-$1").replace(Je, "-ms-").toLowerCase()), et = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${et.split(",").join("|")}`;
var tt = (e = {}) => {
  const t = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? rt(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, t(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, i] of Object.entries(a))
      o.forEach(([d, u]) => {
        var S;
        (S = u.variants)[n] ?? (S[n] = {}), u.variants[n][l] = i[d] ?? {};
      });
  return Object.fromEntries(o);
}, rt = (e, t) => e.filter((r) => r.css[t]).map((r) => ({ ...r, css: r.css[t] }));
function me(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), o = Object.keys(r), n = (l) => {
    const i = {};
    for (let d = 0; d < l.length; d++) {
      const u = l[d];
      r[u] && (Object.defineProperty(i, u, r[u]), delete r[u]);
    }
    return i;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return t.map(a).concat(n(o));
}
var ot = (...e) => {
  const t = e.reduce((r, o) => (o && o.forEach((n) => r.add(n)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const nt = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", be = new Set(nt.split(",")), at = /^@|&|&$/;
function Q(e) {
  return be.has(e) || at.test(e);
}
const lt = /^_/, st = /&|@/;
function it(e) {
  return e.map((t) => be.has(t) ? t.replace(lt, "") : st.test(t) ? `[${ce(t.trim())}]` : t);
}
function dt(e) {
  return e.sort((t, r) => {
    const o = Q(t), n = Q(r);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const ct = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,animationStyle:animationStyle", fe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map();
ct.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [o, ...n] = r.split("/");
  fe.set(t, o), n.length && n.forEach((a) => {
    pe.set(a === "1" ? o : a, t);
  });
});
const ee = (e) => pe.get(e) || e, ve = {
  conditions: {
    shift: dt,
    finalize: it,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = ee(e);
      return { className: `${fe.get(r) || Qe(r)}_${ce(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: ee
  }
}, ut = Ge(ve), f = (...e) => ut(V(...e));
f.raw = (...e) => V(...e);
const { mergeCss: V } = Ue(ve);
function E() {
  let e = "", t = 0, r;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const te = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function A(e) {
  const { base: t, variants: r, defaultVariants: o, compoundVariants: n } = te(e), a = (b) => ({ ...o, ...G(b) });
  function l(b = {}) {
    var L;
    const x = a(b);
    let I = { ...t };
    for (const [D, y] of Object.entries(x))
      (L = r[D]) != null && L[y] && (I = V(I, r[D][y]));
    const T = gt(n, x);
    return V(I, T);
  }
  function i(b) {
    const x = te(b.config), I = ot(b.variantKeys, Object.keys(r));
    return A({
      base: V(t, x.base),
      variants: Object.fromEntries(
        I.map((T) => [T, V(r[T], x.variants[T])])
      ),
      defaultVariants: K(o, x.defaultVariants),
      compoundVariants: [...n, ...x.compoundVariants]
    });
  }
  function d(b) {
    return f(l(b));
  }
  const u = Object.keys(r);
  function S(b) {
    return me(b, u);
  }
  const h = Object.fromEntries(Object.entries(r).map(([b, x]) => [b, Object.keys(x)]));
  return Object.assign(j(d), {
    __cva__: !0,
    variantMap: h,
    variantKeys: u,
    raw: l,
    config: e,
    merge: i,
    splitVariantProps: S,
    getVariantProps: a
  });
}
function gt(e, t) {
  let r = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((d) => t[a] === d)) && (r = V(r, o.css));
  }), r;
}
function P(e) {
  const t = Object.entries(tt(e)).map(([h, b]) => [h, A(b)]), r = e.defaultVariants ?? {}, o = t.reduce((h, [b, x]) => (e.className && (h[b] = x.config.className), h), {});
  function n(h) {
    const b = t.map(([x, I]) => [x, E(I(h), o[x])]);
    return Object.fromEntries(b);
  }
  function a(h) {
    const b = t.map(([x, I]) => [x, I.raw(h)]);
    return Object.fromEntries(b);
  }
  const l = e.variants ?? {}, i = Object.keys(l);
  function d(h) {
    return me(h, i);
  }
  const u = (h) => ({ ...r, ...G(h) }), S = Object.fromEntries(
    Object.entries(l).map(([h, b]) => [h, Object.keys(b)])
  );
  return Object.assign(j(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: S,
    variantKeys: i,
    classNameMap: o,
    splitVariantProps: d,
    getVariantProps: u
  });
}
const mt = P({
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
}), bt = ["role"], ft = /* @__PURE__ */ _({
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
    const r = e, o = t, n = re(), a = p(() => ({
      danger: "circle-wavy-warning-bold",
      success: "check-circle-bold",
      info: "info-bold",
      warning: "warning-bold"
    })[r.variant] || "info-circle"), l = p(() => r.role ? r.role : r.variant === "danger" || r.variant === "warning" ? "alert" : "status"), i = p(() => r.messages.length > 0 || !!n.icon), d = p(() => mt({
      variant: r.variant,
      spacing: r.spacing,
      borderSize: r.borderSize,
      iconSize: r.iconSize,
      textSize: r.textSize
    })), u = () => {
      o("dismiss");
    };
    return (S, h) => i.value ? (g(), v("div", {
      key: 0,
      class: c(s(E)(d.value.root, e.classRoot)),
      role: l.value
    }, [
      m(S.$slots, "icon", {}, () => [
        C("span", {
          class: c([
            "icon",
            `icon-${a.value}`,
            s(E)(d.value.icon, e.classIcon)
          ]),
          "aria-hidden": "true"
        }, null, 2)
      ]),
      C("div", {
        class: c(s(E)(d.value.content, e.classContent))
      }, [
        (g(!0), v(oe, null, ne(e.messages, (b, x) => (g(), v("div", {
          key: `message-${x}`,
          class: c(d.value.message)
        }, [
          b.title ? (g(), v("div", {
            key: 0,
            class: c(d.value.title)
          }, X(b.title), 3)) : w("", !0),
          C("p", {
            class: c(d.value.description)
          }, X(b.description), 3)
        ], 2))), 128))
      ], 2),
      e.dismissible ? (g(), v("button", {
        key: 0,
        type: "button",
        class: c(s(E)(d.value.close, e.classClose)),
        "aria-label": "Dismiss alert",
        onClick: u
      }, [...h[0] || (h[0] = [
        C("span", {
          class: "icon icon-x-bold",
          "aria-hidden": "true"
        }, null, -1)
      ])], 2)) : w("", !0)
    ], 10, bt)) : w("", !0);
  }
}), nr = {
  Root: ft
}, pt = ["innerHTML"], ar = /* @__PURE__ */ _({
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
    const t = e, r = p(() => t.to ? "a" : "button"), o = p(() => r.value === "button" && t.type ? t.type : r.value === "button" ? "button" : null), n = p(() => t.external && r.value === "a" ? "_blank" : null), a = p(() => t.external && r.value === "a" ? "noopener noreferrer" : null), l = A({
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
    }), i = p(() => f(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (d, u) => (g(), O(Y(r.value), {
      class: c(["btn", i.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: R(() => [
        t.icon ? (g(), v("span", {
          key: 0,
          class: c([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : w("", !0),
        t.label ? (g(), v("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, pt)) : w("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), vt = ["aria-label"], lr = /* @__PURE__ */ _({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, r) => (g(), v("div", {
      class: c([
        "loader",
        s(f)({
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
      style: ae({
        "--loader-size": `${e.size}px`
      })
    }, null, 14, vt));
  }
}), U = Symbol("CardStyles"), Z = P({
  slots: ["root", "header", "headerBody", "headerTitle", "headerSubtitle", "body", "footer"],
  base: {
    root: {
      color: "neutral",
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
    },
    header: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      borderBottomWidth: "var(--card-border-size)",
      borderStyle: "solid",
      borderColor: "grey.700"
    },
    headerBody: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    },
    headerTitle: {
      fontWeight: "700",
      fontSize: "lg",
      lineHeight: "1.25"
    },
    headerSubtitle: {
      color: "grey.dawn",
      fontSize: "md"
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
    padding: {
      md: {
        header: {
          padding: "xl",
          gap: "md"
        },
        body: {
          padding: "xl"
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
    padding: "md",
    colorStrategy: "default"
  }
}), ht = /* @__PURE__ */ _({
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
    const t = e, r = p(() => Z.raw({
      borderRadius: t.borderRadius,
      colorStrategy: t.colorStrategy,
      color: t.color
    })), o = p(() => {
      const n = {
        "--card-border-size": `${t.borderSize}px`
      };
      return typeof t.borderColor == "string" && (n["--card-border-color"] = t.borderColor), n;
    });
    return B(U, r), (n, a) => (g(), O(Y(t.as), {
      class: c(s(f)(r.value.root, t.classRoot)),
      style: ae(o.value)
    }, {
      default: R(() => [
        m(n.$slots, "before"),
        m(n.$slots, "default", {}, () => [
          m(n.$slots, "header"),
          m(n.$slots, "body"),
          m(n.$slots, "footer")
        ]),
        m(n.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), xt = /* @__PURE__ */ _({
  __name: "CardBody",
  setup(e) {
    const t = $(
      U,
      p(() => Z.raw({}))
    );
    return (r, o) => (g(), v("div", {
      class: c(s(f)(s(t).body))
    }, [
      m(r.$slots, "default")
    ], 2));
  }
}), yt = ["innerHTML"], St = ["innerHTML"], _t = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    title: {},
    subtitle: {}
  },
  setup(e) {
    const t = $(
      U,
      p(() => Z.raw({}))
    );
    return (r, o) => (g(), v("header", {
      class: c(s(f)(s(t).header))
    }, [
      m(r.$slots, "icon"),
      m(r.$slots, "default", {}, () => [
        C("div", {
          class: c(s(f)(s(t).headerBody))
        }, [
          m(r.$slots, "title", {}, () => [
            e.title ? (g(), v("div", {
              key: 0,
              class: c(s(f)(s(t).headerTitle)),
              innerHTML: e.title
            }, null, 10, yt)) : w("", !0)
          ]),
          m(r.$slots, "subtitle", {}, () => [
            e.subtitle ? (g(), v("div", {
              key: 0,
              class: c(s(f)(s(t).headerSubtitle)),
              innerHTML: e.subtitle
            }, null, 10, St)) : w("", !0)
          ])
        ], 2)
      ])
    ], 2));
  }
}), sr = {
  Root: ht,
  Body: xt,
  Header: _t
};
function kt(e, t, r) {
  const o = z(null), n = z(0), a = z([]), l = z(null), i = z(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, u = p(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), S = p(() => {
    var y;
    return Math.ceil((((y = o.value) == null ? void 0 : y.length) ?? 0) / a.value.length);
  }), h = p(() => {
    var k;
    const y = ((k = o.value) == null ? void 0 : k.length) ?? 0;
    return y > 0 && a.value.length === y;
  });
  le(u, (y, k) => {
    y && y.classList.add(d.itemActiveClass), k && k.classList.remove(d.itemActiveClass);
  });
  const b = (y) => {
    if (!o.value) return null;
    if (y === "first") {
      const k = a.value[0];
      return k ? Array.from(o.value).indexOf(k) - 1 : null;
    }
    if (y === "last") {
      const k = a.value[a.value.length - 1];
      return k ? Array.from(o.value).indexOf(k) + 1 : null;
    }
    return null;
  }, x = () => {
    const y = l.value === "next" ? "end" : "start", k = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[k] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[k].style.scrollSnapAlign = y, o.value[k].scrollIntoView({ behavior: "smooth" }), n.value = k;
  }, I = () => {
    const y = l.value === "prev" ? b("first") : b("last");
    if (!(!o.value || !o.value.length)) {
      if (y === null || !o.value || o.value[y] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[y].scrollIntoView({ behavior: "smooth" }), n.value = y;
    }
  }, T = () => {
    l.value = "next", e.scrollMode === "item" ? x() : e.scrollMode === "viewport" ? I() : console.warn("No more items to scroll next");
  }, L = () => {
    l.value = "prev", e.scrollMode === "item" ? x() : e.scrollMode === "viewport" ? I() : console.warn("No more items to scroll prev");
  }, D = (y) => {
    y.deltaY > 0 ? T() : L();
  };
  return se(() => {
    var y;
    o.value = r.default ? ((y = t.value) == null ? void 0 : y.querySelectorAll(":scope > *")) ?? null : null, i.value = new IntersectionObserver((k) => {
      k.forEach((M) => {
        M.isIntersecting ? (M.target.dataset.carouselVisibility = "visible", M.target.classList.add(d.itemVisibleClass)) : (delete M.target.dataset.carouselVisibility, M.target.classList.remove(d.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((M) => M.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && i.value && o.value.forEach((k) => i.value.observe(k));
  }), ie(() => {
    t.value = null, o.value = null, n.value = 0, i.value && i.value.disconnect();
  }), {
    handleNext: T,
    handlePrev: L,
    handleWheel: D,
    carouselItems: o,
    carouselItem: u,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: h,
    pages: S
  };
}
const wt = /* @__PURE__ */ _({
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
    const t = e, r = re(), o = z(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: i,
      carouselItem: d,
      visibleCarouselItems: u,
      currentCarouselItemIndex: S,
      scrollDirection: h,
      allItemsVisible: b
    } = kt(t, o, r);
    return B("carousel", o), B("handleNext", n), B("handlePrev", a), B("carouselItems", i), B("carouselItem", d), B("visibleCarouselItems", u), B("currentCarouselItemIndex", S), B("scrollDirection", h), B("allItemsVisible", b), (x, I) => (g(), v("div", {
      class: c(s(f)(
        s(f).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      m(x.$slots, "carousel-before"),
      C("ul", {
        ref_key: "carousel",
        ref: o,
        class: c(s(f)(
          s(f).raw({
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
        onWheel: I[0] || (I[0] = Ie(
          //@ts-ignore
          (...T) => s(l) && s(l)(...T),
          ["prevent"]
        ))
      }, [
        m(x.$slots, "default")
      ], 34),
      m(x.$slots, "carousel-after")
    ], 2));
  }
}), Ct = /* @__PURE__ */ _({
  __name: "CarouselItem",
  setup(e) {
    return (t, r) => (g(), v("li", {
      class: c(s(f)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      m(t.$slots, "default")
    ], 2));
  }
}), It = ["disabled"], zt = ["disabled"], Tt = /* @__PURE__ */ _({
  __name: "CarouselNavigation",
  setup(e) {
    const t = z(!0), r = z(!0), o = $("handlePrev"), n = $("handleNext"), a = $("allItemsVisible", z(!1)), l = $("carouselItems", z(null)), i = $("currentCarouselItemIndex", z(0));
    return le(
      [l, i, a],
      ([d, u, S]) => {
        S ? (t.value = !0, r.value = !0) : d !== null && d.length > 0 && (t.value = u === 0, r.value = u === d.length - 1);
      },
      { immediate: !0 }
    ), (d, u) => (g(), v("div", null, [
      m(d.$slots, "action-prev", {
        handlePrev: s(o),
        disabled: t.value
      }, () => [
        C("button", {
          onClick: u[0] || (u[0] = //@ts-ignore
          (...S) => s(o) && s(o)(...S)),
          disabled: t.value
        }, " Prev ", 8, It)
      ]),
      m(d.$slots, "action-next", {
        handleNext: s(n),
        disabled: r.value
      }, () => [
        C("button", {
          onClick: u[1] || (u[1] = //@ts-ignore
          (...S) => s(n) && s(n)(...S)),
          disabled: r.value
        }, " Next ", 8, zt)
      ])
    ]));
  }
}), ir = {
  Root: wt,
  Item: Ct,
  Navigation: Tt
};
function Bt(e) {
  const t = z(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return se(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", r), e.el.value.addEventListener("mouseleave", o));
  }), ie(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", r), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: N(t),
    toggle: n
  };
}
const he = /* @__PURE__ */ _({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (r, o) => (g(), v("div", {
      class: c(s(f)(
        s(f).raw({
          position: "absolute",
          zIndex: 50,
          top: "100%",
          left: t.direction === "left" ? "0" : "auto",
          right: t.direction === "right" ? "0" : "auto",
          paddingTop: "sm"
        })
      ))
    }, [
      m(r.$slots, "default")
    ], 2));
  }
}), $t = ["aria-label", "aria-expanded"], Rt = ["innerHTML"], Ot = /* @__PURE__ */ _({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = z(), r = e, { open: o, toggle: n } = Bt({ el: t });
    return (a, l) => (g(), v("div", {
      ref_key: "el",
      ref: t,
      class: c(
        s(f)(
          s(f).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      m(a.$slots, "trigger", F(H({ open: s(o) })), () => [
        C("button", {
          type: "button",
          class: c([
            s(f)(
              s(f).raw({
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
          r.icon ? (g(), v("span", {
            key: 0,
            class: c(r.icon)
          }, null, 2)) : w("", !0),
          m(a.$slots, "trigger-label", {}, () => [
            C("span", { innerHTML: e.label }, null, 8, Rt)
          ], !0),
          m(a.$slots, "trigger-icon", F(H({ open: s(o) })), void 0, !0)
        ], 10, $t)
      ], !0),
      m(a.$slots, "dropdown", F(H({ open: s(o) })), () => [
        W(ze, { name: "flyout" }, {
          default: R(() => [
            s(o) ? (g(), O(he, { key: 0 }, {
              default: R(() => [
                m(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : w("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), Lt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Mt = /* @__PURE__ */ Lt(Ot, [["__scopeId", "data-v-a1ce9f68"]]), dr = {
  Root: Mt,
  Dropdown: he
}, Vt = P({
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
}), Dt = ["innerHTML"], Et = ["innerHTML"], Wt = /* @__PURE__ */ _({
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
    const t = e, r = p(() => Vt({
      alignItems: t.alignItems || "start",
      alignSelf: t.alignSelf || "start",
      size: t.size || "md"
    }));
    return (o, n) => (g(), v("div", {
      class: c(r.value.root)
    }, [
      m(o.$slots, "headline", {}, () => [
        e.headline ? (g(), O(Y(e.headlineTag), {
          key: 0,
          class: c(r.value.headline)
        }, {
          default: R(() => [
            C("span", { innerHTML: e.headline }, null, 8, Dt)
          ]),
          _: 1
        }, 8, ["class"])) : w("", !0)
      ]),
      m(o.$slots, "description", {}, () => [
        e.description ? (g(), v("div", {
          key: 0,
          innerHTML: e.description,
          class: c(r.value.description)
        }, null, 10, Et)) : w("", !0)
      ]),
      m(o.$slots, "actions")
    ], 2));
  }
}), cr = {
  Lead: Wt
}, xe = /* @__PURE__ */ _({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = Te(), o = p(() => t.id || `field-${r}`), n = p(() => t.error ? `${o.value}-error` : null), a = p(() => t.message ? `${o.value}-message` : null), l = p(() => !!t.error);
    B("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const i = f({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (d, u) => (g(), v("div", {
      class: c([s(i), t.class])
    }, [
      m(d.$slots, "default")
    ], 2));
  }
}), jt = /* @__PURE__ */ _({
  __name: "FieldRequired",
  setup(e) {
    return (t, r) => (g(), v("span", {
      class: c(s(f)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), At = ["for", "aria-disabled"], ye = /* @__PURE__ */ _({
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
    const t = e, r = $("fieldContext", null), o = p(() => t.for || (r == null ? void 0 : r.fieldId) || void 0), n = A({
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
    return (a, l) => (g(), v("label", {
      for: o.value,
      class: c([
        s(n)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      Be(X(t.label) + " ", 1),
      t.required ? (g(), O(jt, { key: 0 })) : w("", !0)
    ], 10, At));
  }
}), Pt = ["id", "innerHTML"], Se = /* @__PURE__ */ _({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = $("fieldContext", null), o = p(() => t.message || (r == null ? void 0 : r.message) || null), n = p(() => t.id || (r == null ? void 0 : r.messageId) || void 0), a = f({
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
    return (l, i) => o.value ? (g(), v("span", {
      key: 0,
      id: n.value,
      class: c([s(a), t.class]),
      innerHTML: o.value
    }, null, 10, Pt)) : w("", !0);
  }
}), Ft = ["id", "innerHTML"], _e = /* @__PURE__ */ _({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = $("fieldContext", null), o = p(() => t.message || (r == null ? void 0 : r.errorMessage) || null), n = p(() => t.id || (r == null ? void 0 : r.errorId) || void 0), a = f({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, i) => o.value ? (g(), v("span", {
      key: 0,
      id: n.value,
      class: c([s(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, Ft)) : w("", !0);
  }
}), Ht = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], ke = /* @__PURE__ */ _({
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
    const r = e, o = t, n = $("fieldContext", null), a = p(() => {
      if (!n) return;
      const u = [];
      return n.errorId && u.push(n.errorId), n.helperId && u.push(n.helperId), u.length > 0 ? u.join(" ") : void 0;
    }), l = p(() => r.valid === !0 ? !1 : r.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), i = (u) => {
      const S = u.target;
      o("update:modelValue", S.value);
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
    return (u, S) => (g(), v("input", {
      id: e.id,
      name: e.name,
      class: c([s(d)({ size: e.size, valid: r.valid }), r.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: i
    }, null, 42, Ht));
  }
}), Xt = /* @__PURE__ */ _({
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
    const r = e, o = p(() => r.error ? !1 : "none"), n = t, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, i) => (g(), O(xe, null, {
      default: R(() => [
        e.label ? (g(), O(ye, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : w("", !0),
        W(ke, {
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
        e.message || e.error ? (g(), v("div", {
          key: 1,
          class: c(s(f)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (g(), O(Se, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : w("", !0),
          e.error ? (g(), O(_e, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : w("", !0)
        ], 2)) : w("", !0)
      ]),
      _: 1
    }));
  }
}), ur = {
  Input: Xt,
  Base: xe,
  Label: ye,
  Error: _e,
  Message: Se
}, Nt = ["action", "method", "id", "name", "aria-label"], qt = ["placeholder"], Yt = /* @__PURE__ */ _({
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
    return (a, l) => (g(), v("div", {
      class: c(s(f)({
        display: "flex",
        flexDirection: "column",
        gap: "lg"
      }))
    }, [
      m(a.$slots, "alert"),
      C("form", {
        ref_key: "promptForm",
        ref: o,
        action: e.action,
        method: e.method,
        id: e.id,
        name: e.name,
        "aria-label": e.ariaLabel,
        onSubmit: n,
        class: c(s(f)({
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
        m(a.$slots, "parameter"),
        m(a.$slots, "textarea", {}, () => [
          C("textarea", {
            name: "message",
            class: c(s(f)({
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
          }, null, 10, qt)
        ]),
        m(a.$slots, "footer")
      ], 42, Nt)
    ], 2));
  }
}), Gt = /* @__PURE__ */ _({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, r) => (g(), v("div", {
      class: c(s(f)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      C("div", {
        class: c(s(f)({
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
        m(t.$slots, "inputs")
      ], 2),
      C("div", {
        class: c(s(f)({
          flex: "0",
          flexBasis: "100%",
          "@container (min-width: 600px)": {
            flexBasis: "auto"
          }
        }))
      }, [
        m(t.$slots, "action")
      ], 2)
    ], 2));
  }
}), gr = {
  Input: ke,
  Prompt: Yt,
  PromptFooter: Gt
}, we = Symbol("ListStyles"), Ce = P({
  slots: ["list", "item"],
  base: {
    list: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "center"
    },
    item: {
      _before: {
        content: '"',
        display: "block",
        borderRadius: "5xl",
        flexBasis: "auto",
        flexGrow: "0"
      },
      "& [data-list-item]": {
        flexGrow: 1,
        flexBasis: "0%"
      }
    }
  }
}), Kt = /* @__PURE__ */ _({
  __name: "ListRoot",
  setup(e) {
    const t = p(() => Ce.raw());
    return B(we, t), (r, o) => (g(), v("ul", {
      class: c(s(f)(t.value.list))
    }, [
      m(r.$slots, "default")
    ], 2));
  }
}), Ut = { "data-list-item": "" }, Zt = /* @__PURE__ */ _({
  __name: "ListItem",
  setup(e) {
    const t = $(
      we,
      p(() => Ce.raw({}))
    );
    return (r, o) => (g(), v("li", {
      class: c(s(f)(s(t).item))
    }, [
      C("div", Ut, [
        m(r.$slots, "default")
      ])
    ], 2));
  }
}), mr = {
  Root: Kt,
  Item: Zt
}, Jt = P({
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
}), Qt = ["innerHTML"], er = ["innerHTML"], tr = /* @__PURE__ */ _({
  __name: "AccordionRoot",
  props: {
    type: { default: "multiple" },
    orientation: { default: "vertical" },
    size: { default: "md" },
    items: {},
    classes: { default: {} }
  },
  setup(e) {
    const t = e, r = p(() => Jt({
      orientation: t.orientation,
      size: t.size
    }));
    return (o, n) => (g(), O(s($e), {
      type: e.type,
      orientation: e.orientation,
      class: c(r.value.root)
    }, {
      default: R(() => [
        e.items && e.items.length > 0 ? (g(!0), v(oe, { key: 0 }, ne(e.items, (a) => (g(), O(s(Re), {
          key: a.id,
          value: a.id,
          class: c(r.value.item)
        }, {
          default: R(() => [
            W(s(Oe), null, {
              default: R(() => [
                W(s(Le), {
                  class: c(r.value.trigger)
                }, {
                  default: R(() => [
                    m(o.$slots, "icon", { item: a }, () => {
                      var l;
                      return [
                        a.icon ? (g(), v("span", {
                          key: 0,
                          class: c([
                            `icon icon-${a.icon}`,
                            ((l = e.classes) == null ? void 0 : l.icon) || null
                          ])
                        }, null, 2)) : w("", !0)
                      ];
                    }),
                    C("span", {
                      class: c(s(f)({
                        flex: "1 0%",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "start"
                      })),
                      innerHTML: a.title
                    }, null, 10, Qt),
                    n[0] || (n[0] = C("span", {
                      class: "icon icon-caret-down-bold",
                      "data-trigger": "icon"
                    }, null, -1))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1024),
            W(s(Me), {
              class: c(r.value.content)
            }, {
              default: R(() => [
                m(o.$slots, "content", { item: a }, () => [
                  C("div", {
                    innerHTML: a.content
                  }, null, 8, er)
                ])
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
}), br = {
  Root: tr
};
function fr(e) {
  const t = p(() => e ? new FormData(e) : null), r = p(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: N(t),
    jsonData: N(r)
  };
}
export {
  br as Accordion,
  nr as Alert,
  ar as Button,
  sr as Card,
  ir as Carousel,
  ur as Field,
  dr as Flyout,
  gr as Form,
  cr as Hero,
  mr as List,
  lr as Loader,
  kt as useCarousel,
  Bt as useFlyout,
  fr as useFormData
};
