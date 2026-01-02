import { defineComponent as _, useSlots as ne, computed as h, createElementBlock as f, createCommentVNode as k, openBlock as c, normalizeClass as d, unref as i, renderSlot as m, createElementVNode as C, Fragment as Y, renderList as G, toDisplayString as X, createBlock as T, resolveDynamicComponent as K, withCtx as L, normalizeStyle as ae, inject as R, provide as $, normalizeProps as H, mergeProps as le, ref as I, watch as ie, onMounted as se, onUnmounted as de, withModifiers as Be, readonly as N, guardReactiveProps as F, createVNode as E, Transition as $e, useId as Re, createTextVNode as Le } from "vue";
import { AccordionRoot as Oe, AccordionItem as Me, AccordionHeader as We, AccordionTrigger as Ve, AccordionContent as De } from "reka-ui";
function q(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var Ee = (e) => typeof e == "object" && e !== null;
function U(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var je = (e) => e === "base";
function Pe(e) {
  return e.slice().filter((t) => !je(t));
}
function ee(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function Ae(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = ee(r % 52) + t;
  return ee(r % 52) + t;
}
function He(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function Fe(e) {
  return Ae(He(5381, e) >>> 0);
}
var ce = /\s*!(important)?/i;
function Xe(e) {
  return typeof e == "string" ? ce.test(e) : !1;
}
function Ne(e) {
  return typeof e == "string" ? e.replace(ce, "").trim() : e;
}
function ue(e) {
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
}, qe = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Z(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((o) => {
    if (qe.has(o)) return;
    const n = t[o], a = r[o];
    q(n) && q(a) ? t[o] = Z(n, a) : t[o] = a;
  }), t), {});
}
var Ye = (e) => e != null;
function ge(e, t, r = {}) {
  const { stop: o, getKey: n } = r;
  function a(l, s = []) {
    if (Ee(l)) {
      const u = {};
      for (const [g, S] of Object.entries(l)) {
        const v = (n == null ? void 0 : n(g, S)) ?? g, b = [...s, v];
        if (o != null && o(l, b))
          return t(l, s);
        const x = a(S, b);
        Ye(x) && (u[v] = x);
      }
      return u;
    }
    return t(l, s);
  }
  return a(e);
}
function Ge(e, t) {
  return e.reduce(
    (r, o, n) => {
      const a = t[n];
      return o != null && (r[a] = o), r;
    },
    {}
  );
}
function me(e, t, r = !0) {
  const { utility: o, conditions: n } = t, { hasShorthand: a, resolveShorthand: l } = o;
  return ge(
    e,
    (s) => Array.isArray(s) ? Ge(s, n.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: r ? (s) => a ? l(s) : s : void 0
    }
  );
}
var Ke = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Ue = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function Ze(e) {
  const { utility: t, hash: r, conditions: o = Ke } = e, n = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, s) => {
    let u;
    if (r) {
      const g = [...o.finalize(l), s];
      u = n(t.toHash(g, Fe));
    } else
      u = [...o.finalize(l), n(s)].join(":");
    return u;
  };
  return j(({ base: l, ...s } = {}) => {
    const u = Object.assign(s, l), g = me(u, e), S = /* @__PURE__ */ new Set();
    return ge(g, (v, b) => {
      if (v == null) return;
      const x = Xe(v), [z, ...B] = o.shift(b), O = Pe(B), V = t.transform(z, Ne(Ue(v)));
      let y = a(O, V.className);
      x && (y = `${y}!`), S.add(y);
    }), Array.from(S).join(" ");
  });
}
function Je(...e) {
  return e.flat().filter((t) => q(t) && Object.keys(U(t)).length > 0);
}
function Qe(e) {
  function t(n) {
    const a = Je(...n);
    return a.length === 1 ? a : a.map((l) => me(l, e));
  }
  function r(...n) {
    return Z(...t(n));
  }
  function o(...n) {
    return Object.assign({}, ...t(n));
  }
  return { mergeCss: j(r), assignCss: o };
}
var et = /([A-Z])/g, tt = /^ms-/, rt = j((e) => e.startsWith("--") ? e : e.replace(et, "-$1").replace(tt, "-ms-").toLowerCase()), ot = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${ot.split(",").join("|")}`;
var nt = (e = {}) => {
  const t = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? at(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, t(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, s] of Object.entries(a))
      o.forEach(([u, g]) => {
        var S;
        (S = g.variants)[n] ?? (S[n] = {}), g.variants[n][l] = s[u] ?? {};
      });
  return Object.fromEntries(o);
}, at = (e, t) => e.filter((r) => r.css[t]).map((r) => ({ ...r, css: r.css[t] }));
function be(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), o = Object.keys(r), n = (l) => {
    const s = {};
    for (let u = 0; u < l.length; u++) {
      const g = l[u];
      r[g] && (Object.defineProperty(s, g, r[g]), delete r[g]);
    }
    return s;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return t.map(a).concat(n(o));
}
var lt = (...e) => {
  const t = e.reduce((r, o) => (o && o.forEach((n) => r.add(n)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const it = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", fe = new Set(it.split(",")), st = /^@|&|&$/;
function te(e) {
  return fe.has(e) || st.test(e);
}
const dt = /^_/, ct = /&|@/;
function ut(e) {
  return e.map((t) => fe.has(t) ? t.replace(dt, "") : ct.test(t) ? `[${ue(t.trim())}]` : t);
}
function gt(e) {
  return e.sort((t, r) => {
    const o = te(t), n = te(r);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const mt = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,animationStyle:animationStyle", pe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
mt.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [o, ...n] = r.split("/");
  pe.set(t, o), n.length && n.forEach((a) => {
    he.set(a === "1" ? o : a, t);
  });
});
const re = (e) => he.get(e) || e, ve = {
  conditions: {
    shift: gt,
    finalize: ut,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = re(e);
      return { className: `${pe.get(r) || rt(r)}_${ue(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: re
  }
}, bt = Ze(ve), p = (...e) => bt(W(...e));
p.raw = (...e) => W(...e);
const { mergeCss: W } = Qe(ve);
function D() {
  let e = "", t = 0, r;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const oe = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function P(e) {
  const { base: t, variants: r, defaultVariants: o, compoundVariants: n } = oe(e), a = (b) => ({ ...o, ...U(b) });
  function l(b = {}) {
    var O;
    const x = a(b);
    let z = { ...t };
    for (const [V, y] of Object.entries(x))
      (O = r[V]) != null && O[y] && (z = W(z, r[V][y]));
    const B = ft(n, x);
    return W(z, B);
  }
  function s(b) {
    const x = oe(b.config), z = lt(b.variantKeys, Object.keys(r));
    return P({
      base: W(t, x.base),
      variants: Object.fromEntries(
        z.map((B) => [B, W(r[B], x.variants[B])])
      ),
      defaultVariants: Z(o, x.defaultVariants),
      compoundVariants: [...n, ...x.compoundVariants]
    });
  }
  function u(b) {
    return p(l(b));
  }
  const g = Object.keys(r);
  function S(b) {
    return be(b, g);
  }
  const v = Object.fromEntries(Object.entries(r).map(([b, x]) => [b, Object.keys(x)]));
  return Object.assign(j(u), {
    __cva__: !0,
    variantMap: v,
    variantKeys: g,
    raw: l,
    config: e,
    merge: s,
    splitVariantProps: S,
    getVariantProps: a
  });
}
function ft(e, t) {
  let r = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((u) => t[a] === u)) && (r = W(r, o.css));
  }), r;
}
function A(e) {
  const t = Object.entries(nt(e)).map(([v, b]) => [v, P(b)]), r = e.defaultVariants ?? {}, o = t.reduce((v, [b, x]) => (e.className && (v[b] = x.config.className), v), {});
  function n(v) {
    const b = t.map(([x, z]) => [x, D(z(v), o[x])]);
    return Object.fromEntries(b);
  }
  function a(v) {
    const b = t.map(([x, z]) => [x, z.raw(v)]);
    return Object.fromEntries(b);
  }
  const l = e.variants ?? {}, s = Object.keys(l);
  function u(v) {
    return be(v, s);
  }
  const g = (v) => ({ ...r, ...U(v) }), S = Object.fromEntries(
    Object.entries(l).map(([v, b]) => [v, Object.keys(b)])
  );
  return Object.assign(j(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: S,
    variantKeys: s,
    classNameMap: o,
    splitVariantProps: u,
    getVariantProps: g
  });
}
const pt = A({
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
}), ht = ["role"], vt = /* @__PURE__ */ _({
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
    const r = e, o = t, n = ne(), a = h(() => ({
      danger: "circle-wavy-warning-bold",
      success: "check-circle-bold",
      info: "info-bold",
      warning: "warning-bold"
    })[r.variant] || "info-circle"), l = h(() => r.role ? r.role : r.variant === "danger" || r.variant === "warning" ? "alert" : "status"), s = h(() => r.messages.length > 0 || !!n.icon), u = h(() => pt({
      variant: r.variant,
      spacing: r.spacing,
      borderSize: r.borderSize,
      iconSize: r.iconSize,
      textSize: r.textSize
    })), g = () => {
      o("dismiss");
    };
    return (S, v) => s.value ? (c(), f("div", {
      key: 0,
      class: d(i(D)(u.value.root, e.classRoot)),
      role: l.value
    }, [
      m(S.$slots, "icon", {}, () => [
        C("span", {
          class: d([
            "icon",
            `icon-${a.value}`,
            i(D)(u.value.icon, e.classIcon)
          ]),
          "aria-hidden": "true"
        }, null, 2)
      ]),
      C("div", {
        class: d(i(D)(u.value.content, e.classContent))
      }, [
        (c(!0), f(Y, null, G(e.messages, (b, x) => (c(), f("div", {
          key: `message-${x}`,
          class: d(u.value.message)
        }, [
          b.title ? (c(), f("div", {
            key: 0,
            class: d(u.value.title)
          }, X(b.title), 3)) : k("", !0),
          C("p", {
            class: d(u.value.description)
          }, X(b.description), 3)
        ], 2))), 128))
      ], 2),
      e.dismissible ? (c(), f("button", {
        key: 0,
        type: "button",
        class: d(i(D)(u.value.close, e.classClose)),
        "aria-label": "Dismiss alert",
        onClick: g
      }, [...v[0] || (v[0] = [
        C("span", {
          class: "icon icon-x-bold",
          "aria-hidden": "true"
        }, null, -1)
      ])], 2)) : k("", !0)
    ], 10, ht)) : k("", !0);
  }
}), ar = {
  Root: vt
}, xt = ["innerHTML"], lr = /* @__PURE__ */ _({
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
    const t = e, r = h(() => t.to ? "a" : "button"), o = h(() => r.value === "button" && t.type ? t.type : r.value === "button" ? "button" : null), n = h(() => t.external && r.value === "a" ? "_blank" : null), a = h(() => t.external && r.value === "a" ? "noopener noreferrer" : null), l = P({
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
    }), s = h(() => p(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (u, g) => (c(), T(K(r.value), {
      class: d(["btn", s.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: L(() => [
        t.icon ? (c(), f("span", {
          key: 0,
          class: d([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : k("", !0),
        t.label ? (c(), f("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, xt)) : k("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), yt = ["aria-label"], ir = /* @__PURE__ */ _({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, r) => (c(), f("div", {
      class: d([
        "loader",
        i(p)({
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
    }, null, 14, yt));
  }
}), J = Symbol("CardStyles"), Q = A({
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
      alignItems: "center",
      borderBottomWidth: "var(--card-border-size)",
      borderStyle: "solid",
      borderColor: "var(--card-border-color)"
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
            "--card-bg": "linear-gradient(token(colors.white))",
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
}), St = ["innerHTML"], _t = ["innerHTML"], xe = /* @__PURE__ */ _({
  __name: "CardHeader",
  props: {
    title: {},
    subtitle: {}
  },
  setup(e) {
    const t = R(
      J,
      h(() => Q.raw({}))
    );
    return (r, o) => (c(), f("header", {
      class: d(i(p)(i(t).header))
    }, [
      m(r.$slots, "icon"),
      m(r.$slots, "default", {}, () => [
        C("div", {
          class: d(i(p)(i(t).headerBody))
        }, [
          m(r.$slots, "title", {}, () => [
            e.title ? (c(), f("div", {
              key: 0,
              class: d(i(p)(i(t).headerTitle)),
              innerHTML: e.title
            }, null, 10, St)) : k("", !0)
          ]),
          m(r.$slots, "subtitle", {}, () => [
            e.subtitle ? (c(), f("div", {
              key: 0,
              class: d(i(p)(i(t).headerSubtitle)),
              innerHTML: e.subtitle
            }, null, 10, _t)) : k("", !0)
          ])
        ], 2)
      ])
    ], 2));
  }
}), kt = /* @__PURE__ */ _({
  __name: "CardRoot",
  props: {
    as: { default: "div" },
    colorStrategy: { default: "default" },
    color: { default: "default" },
    borderSize: { default: 1 },
    borderRadius: { default: "md" },
    borderColor: {},
    classRoot: {},
    header: { default: void 0 }
  },
  setup(e) {
    const t = e, r = h(() => Q.raw({
      borderRadius: t.borderRadius,
      colorStrategy: t.colorStrategy,
      color: t.color
    })), o = h(() => {
      const n = {
        "--card-border-size": `${t.borderSize}px`
      };
      return typeof t.borderColor == "string" && (n["--card-border-color"] = t.borderColor), n;
    });
    return $(J, r), (n, a) => (c(), T(K(t.as), {
      class: d(i(p)(r.value.root, t.classRoot)),
      style: ae(o.value)
    }, {
      default: L(() => [
        m(n.$slots, "before"),
        m(n.$slots, "header", {}, () => [
          t.header ? (c(), T(xe, H(le({ key: 0 }, t.header)), null, 16)) : k("", !0)
        ]),
        m(n.$slots, "default"),
        m(n.$slots, "footer"),
        m(n.$slots, "after")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), wt = /* @__PURE__ */ _({
  __name: "CardBody",
  setup(e) {
    const t = R(
      J,
      h(() => Q.raw({}))
    );
    return (r, o) => (c(), f("div", {
      class: d(i(p)(i(t).body))
    }, [
      m(r.$slots, "default")
    ], 2));
  }
}), sr = {
  Root: kt,
  Body: wt,
  Header: xe
};
function Ct(e, t, r) {
  const o = I(null), n = I(0), a = I([]), l = I(null), s = I(null), u = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, g = h(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), S = h(() => {
    var y;
    return Math.ceil((((y = o.value) == null ? void 0 : y.length) ?? 0) / a.value.length);
  }), v = h(() => {
    var w;
    const y = ((w = o.value) == null ? void 0 : w.length) ?? 0;
    return y > 0 && a.value.length === y;
  });
  ie(g, (y, w) => {
    y && y.classList.add(u.itemActiveClass), w && w.classList.remove(u.itemActiveClass);
  });
  const b = (y) => {
    if (!o.value) return null;
    if (y === "first") {
      const w = a.value[0];
      return w ? Array.from(o.value).indexOf(w) - 1 : null;
    }
    if (y === "last") {
      const w = a.value[a.value.length - 1];
      return w ? Array.from(o.value).indexOf(w) + 1 : null;
    }
    return null;
  }, x = () => {
    const y = l.value === "next" ? "end" : "start", w = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[w] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[w].style.scrollSnapAlign = y, o.value[w].scrollIntoView({ behavior: "smooth" }), n.value = w;
  }, z = () => {
    const y = l.value === "prev" ? b("first") : b("last");
    if (!(!o.value || !o.value.length)) {
      if (y === null || !o.value || o.value[y] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[y].scrollIntoView({ behavior: "smooth" }), n.value = y;
    }
  }, B = () => {
    l.value = "next", e.scrollMode === "item" ? x() : e.scrollMode === "viewport" ? z() : console.warn("No more items to scroll next");
  }, O = () => {
    l.value = "prev", e.scrollMode === "item" ? x() : e.scrollMode === "viewport" ? z() : console.warn("No more items to scroll prev");
  }, V = (y) => {
    y.deltaY > 0 ? B() : O();
  };
  return se(() => {
    var y;
    o.value = r.default ? ((y = t.value) == null ? void 0 : y.querySelectorAll(":scope > *")) ?? null : null, s.value = new IntersectionObserver((w) => {
      w.forEach((M) => {
        M.isIntersecting ? (M.target.dataset.carouselVisibility = "visible", M.target.classList.add(u.itemVisibleClass)) : (delete M.target.dataset.carouselVisibility, M.target.classList.remove(u.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((M) => M.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && s.value && o.value.forEach((w) => s.value.observe(w));
  }), de(() => {
    t.value = null, o.value = null, n.value = 0, s.value && s.value.disconnect();
  }), {
    handleNext: B,
    handlePrev: O,
    handleWheel: V,
    carouselItems: o,
    carouselItem: g,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: v,
    pages: S
  };
}
const zt = /* @__PURE__ */ _({
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
    const t = e, r = ne(), o = I(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: s,
      carouselItem: u,
      visibleCarouselItems: g,
      currentCarouselItemIndex: S,
      scrollDirection: v,
      allItemsVisible: b
    } = Ct(t, o, r);
    return $("carousel", o), $("handleNext", n), $("handlePrev", a), $("carouselItems", s), $("carouselItem", u), $("visibleCarouselItems", g), $("currentCarouselItemIndex", S), $("scrollDirection", v), $("allItemsVisible", b), (x, z) => (c(), f("div", {
      class: d(i(p)(
        i(p).raw({
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
        class: d(i(p)(
          i(p).raw({
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
        onWheel: z[0] || (z[0] = Be(
          //@ts-ignore
          (...B) => i(l) && i(l)(...B),
          ["prevent"]
        ))
      }, [
        m(x.$slots, "default")
      ], 34),
      m(x.$slots, "carousel-after")
    ], 2));
  }
}), It = /* @__PURE__ */ _({
  __name: "CarouselItem",
  setup(e) {
    return (t, r) => (c(), f("li", {
      class: d(i(p)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      m(t.$slots, "default")
    ], 2));
  }
}), Tt = ["disabled"], Bt = ["disabled"], $t = /* @__PURE__ */ _({
  __name: "CarouselNavigation",
  setup(e) {
    const t = I(!0), r = I(!0), o = R("handlePrev"), n = R("handleNext"), a = R("allItemsVisible", I(!1)), l = R("carouselItems", I(null)), s = R("currentCarouselItemIndex", I(0));
    return ie(
      [l, s, a],
      ([u, g, S]) => {
        S ? (t.value = !0, r.value = !0) : u !== null && u.length > 0 && (t.value = g === 0, r.value = g === u.length - 1);
      },
      { immediate: !0 }
    ), (u, g) => (c(), f("div", null, [
      m(u.$slots, "action-prev", {
        handlePrev: i(o),
        disabled: t.value
      }, () => [
        C("button", {
          onClick: g[0] || (g[0] = //@ts-ignore
          (...S) => i(o) && i(o)(...S)),
          disabled: t.value
        }, " Prev ", 8, Tt)
      ]),
      m(u.$slots, "action-next", {
        handleNext: i(n),
        disabled: r.value
      }, () => [
        C("button", {
          onClick: g[1] || (g[1] = //@ts-ignore
          (...S) => i(n) && i(n)(...S)),
          disabled: r.value
        }, " Next ", 8, Bt)
      ])
    ]));
  }
}), dr = {
  Root: zt,
  Item: It,
  Navigation: $t
};
function Rt(e) {
  const t = I(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return se(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", r), e.el.value.addEventListener("mouseleave", o));
  }), de(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", r), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: N(t),
    toggle: n
  };
}
const ye = /* @__PURE__ */ _({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (r, o) => (c(), f("div", {
      class: d(i(p)(
        i(p).raw({
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
}), Lt = ["aria-label", "aria-expanded"], Ot = ["innerHTML"], Mt = /* @__PURE__ */ _({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = I(), r = e, { open: o, toggle: n } = Rt({ el: t });
    return (a, l) => (c(), f("div", {
      ref_key: "el",
      ref: t,
      class: d(
        i(p)(
          i(p).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      m(a.$slots, "trigger", H(F({ open: i(o) })), () => [
        C("button", {
          type: "button",
          class: d([
            i(p)(
              i(p).raw({
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
          r.icon ? (c(), f("span", {
            key: 0,
            class: d(r.icon)
          }, null, 2)) : k("", !0),
          m(a.$slots, "trigger-label", {}, () => [
            C("span", { innerHTML: e.label }, null, 8, Ot)
          ], !0),
          m(a.$slots, "trigger-icon", H(F({ open: i(o) })), void 0, !0)
        ], 10, Lt)
      ], !0),
      m(a.$slots, "dropdown", H(F({ open: i(o) })), () => [
        E($e, { name: "flyout" }, {
          default: L(() => [
            i(o) ? (c(), T(ye, { key: 0 }, {
              default: L(() => [
                m(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : k("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), Wt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Vt = /* @__PURE__ */ Wt(Mt, [["__scopeId", "data-v-a1ce9f68"]]), cr = {
  Root: Vt,
  Dropdown: ye
}, Dt = A({
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
}), Et = ["innerHTML"], jt = ["innerHTML"], Pt = /* @__PURE__ */ _({
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
    const t = e, r = h(() => Dt({
      alignItems: t.alignItems || "start",
      alignSelf: t.alignSelf || "start",
      size: t.size || "md"
    }));
    return (o, n) => (c(), f("div", {
      class: d(r.value.root)
    }, [
      m(o.$slots, "headline", {}, () => [
        e.headline ? (c(), T(K(e.headlineTag), {
          key: 0,
          class: d(r.value.headline)
        }, {
          default: L(() => [
            C("span", { innerHTML: e.headline }, null, 8, Et)
          ]),
          _: 1
        }, 8, ["class"])) : k("", !0)
      ]),
      m(o.$slots, "description", {}, () => [
        e.description ? (c(), f("div", {
          key: 0,
          innerHTML: e.description,
          class: d(r.value.description)
        }, null, 10, jt)) : k("", !0)
      ]),
      m(o.$slots, "actions")
    ], 2));
  }
}), ur = {
  Lead: Pt
}, Se = /* @__PURE__ */ _({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = Re(), o = h(() => t.id || `field-${r}`), n = h(() => t.error ? `${o.value}-error` : null), a = h(() => t.message ? `${o.value}-message` : null), l = h(() => !!t.error);
    $("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const s = p({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (u, g) => (c(), f("div", {
      class: d([i(s), t.class])
    }, [
      m(u.$slots, "default")
    ], 2));
  }
}), At = /* @__PURE__ */ _({
  __name: "FieldRequired",
  setup(e) {
    return (t, r) => (c(), f("span", {
      class: d(i(p)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), Ht = ["for", "aria-disabled"], _e = /* @__PURE__ */ _({
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
    const t = e, r = R("fieldContext", null), o = h(() => t.for || (r == null ? void 0 : r.fieldId) || void 0), n = P({
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
    return (a, l) => (c(), f("label", {
      for: o.value,
      class: d([
        i(n)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      Le(X(t.label) + " ", 1),
      t.required ? (c(), T(At, { key: 0 })) : k("", !0)
    ], 10, Ht));
  }
}), Ft = ["id", "innerHTML"], ke = /* @__PURE__ */ _({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = R("fieldContext", null), o = h(() => t.message || (r == null ? void 0 : r.message) || null), n = h(() => t.id || (r == null ? void 0 : r.messageId) || void 0), a = p({
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
    return (l, s) => o.value ? (c(), f("span", {
      key: 0,
      id: n.value,
      class: d([i(a), t.class]),
      innerHTML: o.value
    }, null, 10, Ft)) : k("", !0);
  }
}), Xt = ["id", "innerHTML"], we = /* @__PURE__ */ _({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = R("fieldContext", null), o = h(() => t.message || (r == null ? void 0 : r.errorMessage) || null), n = h(() => t.id || (r == null ? void 0 : r.errorId) || void 0), a = p({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, s) => o.value ? (c(), f("span", {
      key: 0,
      id: n.value,
      class: d([i(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, Xt)) : k("", !0);
  }
}), Nt = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], Ce = /* @__PURE__ */ _({
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
    const r = e, o = t, n = R("fieldContext", null), a = h(() => {
      if (!n) return;
      const g = [];
      return n.errorId && g.push(n.errorId), n.helperId && g.push(n.helperId), g.length > 0 ? g.join(" ") : void 0;
    }), l = h(() => r.valid === !0 ? !1 : r.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), s = (g) => {
      const S = g.target;
      o("update:modelValue", S.value);
    }, u = P({
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
    return (g, S) => (c(), f("input", {
      id: e.id,
      name: e.name,
      class: d([i(u)({ size: e.size, valid: r.valid }), r.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: s
    }, null, 42, Nt));
  }
}), qt = /* @__PURE__ */ _({
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
    const r = e, o = h(() => r.error ? !1 : "none"), n = t, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, s) => (c(), T(Se, null, {
      default: L(() => [
        e.label ? (c(), T(_e, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : k("", !0),
        E(Ce, {
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
        e.message || e.error ? (c(), f("div", {
          key: 1,
          class: d(i(p)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (c(), T(ke, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : k("", !0),
          e.error ? (c(), T(we, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : k("", !0)
        ], 2)) : k("", !0)
      ]),
      _: 1
    }));
  }
}), gr = {
  Input: qt,
  Base: Se,
  Label: _e,
  Error: we,
  Message: ke
}, Yt = ["action", "method", "id", "name", "aria-label"], Gt = ["placeholder"], Kt = /* @__PURE__ */ _({
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
    return (a, l) => (c(), f("div", {
      class: d(i(p)({
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
        class: d(i(p)({
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
            class: d(i(p)({
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
          }, null, 10, Gt)
        ]),
        m(a.$slots, "footer")
      ], 42, Yt)
    ], 2));
  }
}), Ut = /* @__PURE__ */ _({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, r) => (c(), f("div", {
      class: d(i(p)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      C("div", {
        class: d(i(p)({
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
        class: d(i(p)({
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
}), mr = {
  Input: Ce,
  Prompt: Kt,
  PromptFooter: Ut
}, ze = Symbol("ListStyles"), Ie = A({
  slots: ["list", "item", "marker"],
  base: {
    list: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap"
    },
    item: {
      display: "inline-flex"
    },
    marker: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5xl",
      flexBasis: "auto",
      flexGrow: "0"
    }
  },
  variants: {
    size: {
      sm: {
        list: {
          gap: "xs"
        },
        item: {
          fontSize: "sm",
          gap: "sm"
        },
        marker: {
          width: "16px",
          height: "16px",
          minWidth: "16px",
          marginTop: "2px",
          "& .icon": {
            fontSize: "10px"
          }
        }
      },
      md: {
        list: {
          gap: "xs"
        },
        item: {
          fontSize: "md",
          gap: "sm"
        },
        marker: {
          width: "20px",
          height: "20px",
          minWidth: "20px",
          marginTop: "2px",
          "& .icon": {
            fontSize: "12px"
          }
        }
      },
      lg: {
        list: {
          gap: "xs"
        },
        item: {
          fontSize: "lg",
          gap: "sm"
        },
        marker: {
          width: "20px",
          height: "20px",
          minWidth: "20px",
          marginTop: "6px",
          "& .icon": {
            fontSize: "12px"
          }
        }
      }
    },
    state: {
      default: {
        marker: {
          color: "grey.dawn",
          backgroundColor: "grey.night"
        }
      },
      primary: {
        marker: {
          color: "primary",
          backgroundColor: "primary.lucid.900"
        }
      },
      success: {
        marker: {
          color: "success",
          backgroundColor: "success.lucid.900"
        }
      },
      danger: {
        marker: {
          color: "danger",
          backgroundColor: "danger.lucid.900"
        }
      },
      info: {
        marker: {
          color: "info",
          backgroundColor: "info.lucid.900"
        }
      }
    }
  },
  defaultVariants: {
    size: "sm",
    state: "default"
  }
}), Zt = ["innerHTML"], Te = /* @__PURE__ */ _({
  __name: "ListItem",
  props: {
    content: {},
    size: {},
    state: {},
    icon: { type: [String, Boolean] }
  },
  setup(e) {
    const t = e, r = R(
      ze,
      h(() => Ie.raw({}))
    ), o = {
      default: "caret-right-bold",
      primary: "caret-right-bold",
      success: "check-bold",
      danger: "x-bold",
      info: "info-bold"
    }, n = h(() => {
      if (t.icon === !1)
        return null;
      if (typeof t.icon == "string")
        return t.icon;
      if (t.state)
        return o[t.state || "default"];
    });
    return (a, l) => (c(), f("li", {
      class: d(i(p)(i(r).item))
    }, [
      m(a.$slots, "marker", {}, () => [
        C("span", {
          class: d(i(p)(i(r).marker))
        }, [
          typeof n.value == "string" ? (c(), f("span", {
            key: 0,
            class: d(`icon icon-${n.value}`)
          }, null, 2)) : k("", !0)
        ], 2)
      ]),
      m(a.$slots, "default", {}, () => [
        t.content ? (c(), f("div", {
          key: 0,
          innerHTML: t.content
        }, null, 8, Zt)) : k("", !0)
      ])
    ], 2));
  }
}), Jt = /* @__PURE__ */ _({
  __name: "ListRoot",
  props: {
    items: {},
    size: { default: "sm" },
    state: { default: "default" },
    icon: { type: [String, Boolean], default: !0 },
    css: {}
  },
  setup(e) {
    const t = e, r = h(() => Ie.raw({
      size: t.size,
      state: t.state
    }));
    return $(ze, r), (o, n) => (c(), f("ul", {
      class: d(i(p)(r.value.list, t.css))
    }, [
      m(o.$slots, "default", {}, () => [
        (c(!0), f(Y, null, G(e.items, (a, l) => (c(), T(Te, le({ key: l }, { ref_for: !0 }, a, {
          size: t.size,
          state: t.state,
          icon: t.icon
        }), null, 16, ["size", "state", "icon"]))), 128))
      ])
    ], 2));
  }
}), br = {
  Root: Jt,
  Item: Te
}, Qt = A({
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
}), er = ["innerHTML"], tr = ["innerHTML"], rr = /* @__PURE__ */ _({
  __name: "AccordionRoot",
  props: {
    type: { default: "multiple" },
    orientation: { default: "vertical" },
    size: { default: "md" },
    items: {},
    classes: { default: {} }
  },
  setup(e) {
    const t = e, r = h(() => Qt({
      orientation: t.orientation,
      size: t.size
    }));
    return (o, n) => (c(), T(i(Oe), {
      type: e.type,
      orientation: e.orientation,
      class: d(r.value.root)
    }, {
      default: L(() => [
        e.items && e.items.length > 0 ? (c(!0), f(Y, { key: 0 }, G(e.items, (a) => (c(), T(i(Me), {
          key: a.id,
          value: a.id,
          class: d(r.value.item)
        }, {
          default: L(() => [
            E(i(We), null, {
              default: L(() => [
                E(i(Ve), {
                  class: d(r.value.trigger)
                }, {
                  default: L(() => [
                    m(o.$slots, "icon", { item: a }, () => {
                      var l;
                      return [
                        a.icon ? (c(), f("span", {
                          key: 0,
                          class: d([
                            `icon icon-${a.icon}`,
                            ((l = e.classes) == null ? void 0 : l.icon) || null
                          ])
                        }, null, 2)) : k("", !0)
                      ];
                    }),
                    C("span", {
                      class: d(i(p)({
                        flex: "1 0%",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textAlign: "start"
                      })),
                      innerHTML: a.title
                    }, null, 10, er),
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
            E(i(De), {
              class: d(r.value.content)
            }, {
              default: L(() => [
                m(o.$slots, "content", { item: a }, () => [
                  C("div", {
                    innerHTML: a.content
                  }, null, 8, tr)
                ])
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128)) : k("", !0)
      ]),
      _: 3
    }, 8, ["type", "orientation", "class"]));
  }
}), fr = {
  Root: rr
};
function pr(e) {
  const t = h(() => e ? new FormData(e) : null), r = h(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: N(t),
    jsonData: N(r)
  };
}
export {
  fr as Accordion,
  ar as Alert,
  lr as Button,
  sr as Card,
  dr as Carousel,
  gr as Field,
  cr as Flyout,
  mr as Form,
  ur as Hero,
  br as List,
  ir as Loader,
  Ct as useCarousel,
  Rt as useFlyout,
  pr as useFormData
};
