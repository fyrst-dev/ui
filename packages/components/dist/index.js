import { defineComponent as S, computed as y, createBlock as O, openBlock as b, resolveDynamicComponent as K, normalizeClass as f, withCtx as j, createElementBlock as _, createCommentVNode as I, normalizeStyle as fe, unref as d, renderSlot as p, createElementVNode as z, ref as w, watch as U, onMounted as Z, onUnmounted as J, useSlots as ve, provide as B, withModifiers as he, inject as R, readonly as A, normalizeProps as W, guardReactiveProps as P, createVNode as Q, Transition as xe, useId as ye, createTextVNode as _e, toDisplayString as ke } from "vue";
function F(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var Se = (e) => typeof e == "object" && e !== null;
function N(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, r]) => r !== void 0));
}
var Ce = (e) => e === "base";
function we(e) {
  return e.slice().filter((t) => !Ce(t));
}
function H(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function Ie(e) {
  let t = "", r;
  for (r = Math.abs(e); r > 52; r = r / 52 | 0) t = H(r % 52) + t;
  return H(r % 52) + t;
}
function Te(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function Be(e) {
  return Ie(Te(5381, e) >>> 0);
}
var ee = /\s*!(important)?/i;
function ze(e) {
  return typeof e == "string" ? ee.test(e) : !1;
}
function Re(e) {
  return typeof e == "string" ? e.replace(ee, "").trim() : e;
}
function te(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var L = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...o) => {
    const n = JSON.stringify(o);
    if (t.has(n))
      return t.get(n);
    const a = e(...o);
    return t.set(n, a), a;
  };
}, Oe = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function X(...e) {
  return e.reduce((t, r) => (r && Object.keys(r).forEach((o) => {
    if (Oe.has(o)) return;
    const n = t[o], a = r[o];
    F(n) && F(a) ? t[o] = X(n, a) : t[o] = a;
  }), t), {});
}
var $e = (e) => e != null;
function re(e, t, r = {}) {
  const { stop: o, getKey: n } = r;
  function a(l, s = []) {
    if (Se(l)) {
      const c = {};
      for (const [i, x] of Object.entries(l)) {
        const v = (n == null ? void 0 : n(i, x)) ?? i, u = [...s, v];
        if (o != null && o(l, u))
          return t(l, s);
        const g = a(x, u);
        $e(g) && (c[v] = g);
      }
      return c;
    }
    return t(l, s);
  }
  return a(e);
}
function Ee(e, t) {
  return e.reduce(
    (r, o, n) => {
      const a = t[n];
      return o != null && (r[a] = o), r;
    },
    {}
  );
}
function oe(e, t, r = !0) {
  const { utility: o, conditions: n } = t, { hasShorthand: a, resolveShorthand: l } = o;
  return re(
    e,
    (s) => Array.isArray(s) ? Ee(s, n.breakpoints.keys) : s,
    {
      stop: (s) => Array.isArray(s),
      getKey: r ? (s) => a ? l(s) : s : void 0
    }
  );
}
var Ve = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, Me = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function je(e) {
  const { utility: t, hash: r, conditions: o = Ve } = e, n = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, s) => {
    let c;
    if (r) {
      const i = [...o.finalize(l), s];
      c = n(t.toHash(i, Be));
    } else
      c = [...o.finalize(l), n(s)].join(":");
    return c;
  };
  return L(({ base: l, ...s } = {}) => {
    const c = Object.assign(s, l), i = oe(c, e), x = /* @__PURE__ */ new Set();
    return re(i, (v, u) => {
      if (v == null) return;
      const g = ze(v), [C, ...T] = o.shift(u), $ = we(T), M = t.transform(C, Re(Me(v)));
      let m = a($, M.className);
      g && (m = `${m}!`), x.add(m);
    }), Array.from(x).join(" ");
  });
}
function Le(...e) {
  return e.flat().filter((t) => F(t) && Object.keys(N(t)).length > 0);
}
function De(e) {
  function t(n) {
    const a = Le(...n);
    return a.length === 1 ? a : a.map((l) => oe(l, e));
  }
  function r(...n) {
    return X(...t(n));
  }
  function o(...n) {
    return Object.assign({}, ...t(n));
  }
  return { mergeCss: L(r), assignCss: o };
}
var We = /([A-Z])/g, Pe = /^ms-/, Ae = L((e) => e.startsWith("--") ? e : e.replace(We, "-$1").replace(Pe, "-ms-").toLowerCase()), Fe = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${Fe.split(",").join("|")}`;
var Ne = (e = {}) => {
  const t = (n) => {
    var a;
    return {
      className: [e.className, n].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[n]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Xe(e.compoundVariants, n) : []
    };
  }, o = (e.slots ?? []).map((n) => [n, t(n)]);
  for (const [n, a] of Object.entries(e.variants ?? {}))
    for (const [l, s] of Object.entries(a))
      o.forEach(([c, i]) => {
        var x;
        (x = i.variants)[n] ?? (x[n] = {}), i.variants[n][l] = s[c] ?? {};
      });
  return Object.fromEntries(o);
}, Xe = (e, t) => e.filter((r) => r.css[t]).map((r) => ({ ...r, css: r.css[t] }));
function ne(e, ...t) {
  const r = Object.getOwnPropertyDescriptors(e), o = Object.keys(r), n = (l) => {
    const s = {};
    for (let c = 0; c < l.length; c++) {
      const i = l[c];
      r[i] && (Object.defineProperty(s, i, r[i]), delete r[i]);
    }
    return s;
  }, a = (l) => n(Array.isArray(l) ? l : o.filter(l));
  return t.map(a).concat(n(o));
}
var He = (...e) => {
  const t = e.reduce((r, o) => (o && o.forEach((n) => r.add(n)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const qe = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", ae = new Set(qe.split(",")), Ye = /^@|&|&$/;
function q(e) {
  return ae.has(e) || Ye.test(e);
}
const Ge = /^_/, Ke = /&|@/;
function Ue(e) {
  return e.map((t) => ae.has(t) ? t.replace(Ge, "") : Ke.test(t) ? `[${te(t.trim())}]` : t);
}
function Ze(e) {
  return e.sort((t, r) => {
    const o = q(t), n = q(r);
    return o && !n ? 1 : !o && n ? -1 : 0;
  });
}
const Je = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", le = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
Je.split(",").forEach((e) => {
  const [t, r] = e.split(":"), [o, ...n] = r.split("/");
  le.set(t, o), n.length && n.forEach((a) => {
    se.set(a === "1" ? o : a, t);
  });
});
const Y = (e) => se.get(e) || e, ie = {
  conditions: {
    shift: Ze,
    finalize: Ue,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const r = Y(e);
      return { className: `${le.get(r) || Ae(r)}_${te(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Y
  }
}, Qe = je(ie), h = (...e) => Qe(V(...e));
h.raw = (...e) => V(...e);
const { mergeCss: V } = De(ie);
function et() {
  let e = "", t = 0, r;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const G = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function D(e) {
  const { base: t, variants: r, defaultVariants: o, compoundVariants: n } = G(e), a = (u) => ({ ...o, ...N(u) });
  function l(u = {}) {
    var $;
    const g = a(u);
    let C = { ...t };
    for (const [M, m] of Object.entries(g))
      ($ = r[M]) != null && $[m] && (C = V(C, r[M][m]));
    const T = tt(n, g);
    return V(C, T);
  }
  function s(u) {
    const g = G(u.config), C = He(u.variantKeys, Object.keys(r));
    return D({
      base: V(t, g.base),
      variants: Object.fromEntries(
        C.map((T) => [T, V(r[T], g.variants[T])])
      ),
      defaultVariants: X(o, g.defaultVariants),
      compoundVariants: [...n, ...g.compoundVariants]
    });
  }
  function c(u) {
    return h(l(u));
  }
  const i = Object.keys(r);
  function x(u) {
    return ne(u, i);
  }
  const v = Object.fromEntries(Object.entries(r).map(([u, g]) => [u, Object.keys(g)]));
  return Object.assign(L(c), {
    __cva__: !0,
    variantMap: v,
    variantKeys: i,
    raw: l,
    config: e,
    merge: s,
    splitVariantProps: x,
    getVariantProps: a
  });
}
function tt(e, t) {
  let r = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((c) => t[a] === c)) && (r = V(r, o.css));
  }), r;
}
function de(e) {
  const t = Object.entries(Ne(e)).map(([v, u]) => [v, D(u)]), r = e.defaultVariants ?? {}, o = t.reduce((v, [u, g]) => (e.className && (v[u] = g.config.className), v), {});
  function n(v) {
    const u = t.map(([g, C]) => [g, et(C(v), o[g])]);
    return Object.fromEntries(u);
  }
  function a(v) {
    const u = t.map(([g, C]) => [g, C.raw(v)]);
    return Object.fromEntries(u);
  }
  const l = e.variants ?? {}, s = Object.keys(l);
  function c(v) {
    return ne(v, s);
  }
  const i = (v) => ({ ...r, ...N(v) }), x = Object.fromEntries(
    Object.entries(l).map(([v, u]) => [v, Object.keys(u)])
  );
  return Object.assign(L(n), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: x,
    variantKeys: s,
    classNameMap: o,
    splitVariantProps: c,
    getVariantProps: i
  });
}
const rt = ["innerHTML"], $t = /* @__PURE__ */ S({
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
    const t = e, r = y(() => t.to ? "a" : "button"), o = y(() => r.value === "button" && t.type ? t.type : r.value === "button" ? "button" : null), n = y(() => t.external && r.value === "a" ? "_blank" : null), a = y(() => t.external && r.value === "a" ? "noopener noreferrer" : null), l = D({
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
    }), s = y(() => h(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (c, i) => (b(), O(K(r.value), {
      class: f(["btn", s.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: j(() => [
        t.icon ? (b(), _("span", {
          key: 0,
          class: f([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : I("", !0),
        t.label ? (b(), _("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, rt)) : I("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), ot = ["aria-label"], Et = /* @__PURE__ */ S({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, r) => (b(), _("div", {
      class: f([
        "loader",
        d(h)({
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
    }, null, 14, ot));
  }
}), nt = /* @__PURE__ */ S({
  __name: "CardRoot",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const t = e, o = de({
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
    return (n, a) => (b(), _("div", {
      class: f(d(o).root)
    }, [
      p(n.$slots, "wrapper-before"),
      z("div", {
        class: f(d(o).container)
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
}), at = /* @__PURE__ */ S({
  __name: "CardBody",
  setup(e) {
    return (t, r) => (b(), _("div", {
      class: f(d(h)({
        padding: "xl"
      }))
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), Vt = {
  Root: nt,
  Body: at
};
function lt(e, t, r) {
  const o = w(null), n = w(0), a = w([]), l = w(null), s = w(null), c = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, i = y(() => (o.value ?? []).length > 0 ? o.value[n.value] : null), x = y(() => {
    var m;
    return Math.ceil((((m = o.value) == null ? void 0 : m.length) ?? 0) / a.value.length);
  }), v = y(() => {
    var k;
    const m = ((k = o.value) == null ? void 0 : k.length) ?? 0;
    return m > 0 && a.value.length === m;
  });
  U(i, (m, k) => {
    m && m.classList.add(c.itemActiveClass), k && k.classList.remove(c.itemActiveClass);
  });
  const u = (m) => {
    if (!o.value) return null;
    if (m === "first") {
      const k = a.value[0];
      return k ? Array.from(o.value).indexOf(k) - 1 : null;
    }
    if (m === "last") {
      const k = a.value[a.value.length - 1];
      return k ? Array.from(o.value).indexOf(k) + 1 : null;
    }
    return null;
  }, g = () => {
    const m = l.value === "next" ? "end" : "start", k = l.value === "next" ? n.value + 1 : n.value - 1;
    if (!o.value || o.value[k] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    o.value[k].style.scrollSnapAlign = m, o.value[k].scrollIntoView({ behavior: "smooth" }), n.value = k;
  }, C = () => {
    const m = l.value === "prev" ? u("first") : u("last");
    if (!(!o.value || !o.value.length)) {
      if (m === null || !o.value || o.value[m] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[m].scrollIntoView({ behavior: "smooth" }), n.value = m;
    }
  }, T = () => {
    l.value = "next", e.scrollMode === "item" ? g() : e.scrollMode === "viewport" ? C() : console.warn("No more items to scroll next");
  }, $ = () => {
    l.value = "prev", e.scrollMode === "item" ? g() : e.scrollMode === "viewport" ? C() : console.warn("No more items to scroll prev");
  }, M = (m) => {
    m.deltaY > 0 ? T() : $();
  };
  return Z(() => {
    var m;
    o.value = r.default ? ((m = t.value) == null ? void 0 : m.querySelectorAll(":scope > *")) ?? null : null, s.value = new IntersectionObserver((k) => {
      k.forEach((E) => {
        E.isIntersecting ? (E.target.dataset.carouselVisibility = "visible", E.target.classList.add(c.itemVisibleClass)) : (delete E.target.dataset.carouselVisibility, E.target.classList.remove(c.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((E) => E.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && s.value && o.value.forEach((k) => s.value.observe(k));
  }), J(() => {
    t.value = null, o.value = null, n.value = 0, s.value && s.value.disconnect();
  }), {
    handleNext: T,
    handlePrev: $,
    handleWheel: M,
    carouselItems: o,
    carouselItem: i,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: v,
    pages: x
  };
}
const st = /* @__PURE__ */ S({
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
    const t = e, r = ve(), o = w(null), {
      handleNext: n,
      handlePrev: a,
      handleWheel: l,
      carouselItems: s,
      carouselItem: c,
      visibleCarouselItems: i,
      currentCarouselItemIndex: x,
      scrollDirection: v,
      allItemsVisible: u
    } = lt(t, o, r);
    return B("carousel", o), B("handleNext", n), B("handlePrev", a), B("carouselItems", s), B("carouselItem", c), B("visibleCarouselItems", i), B("currentCarouselItemIndex", x), B("scrollDirection", v), B("allItemsVisible", u), (g, C) => (b(), _("div", {
      class: f(d(h)(
        d(h).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      p(g.$slots, "carousel-before"),
      z("ul", {
        ref_key: "carousel",
        ref: o,
        class: f(d(h)(
          d(h).raw({
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
          (...T) => d(l) && d(l)(...T),
          ["prevent"]
        ))
      }, [
        p(g.$slots, "default")
      ], 34),
      p(g.$slots, "carousel-after")
    ], 2));
  }
}), it = /* @__PURE__ */ S({
  __name: "CarouselItem",
  setup(e) {
    return (t, r) => (b(), _("li", {
      class: f(d(h)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), dt = ["disabled"], ct = ["disabled"], ut = /* @__PURE__ */ S({
  __name: "CarouselNavigation",
  setup(e) {
    const t = w(!0), r = w(!0), o = R("handlePrev"), n = R("handleNext"), a = R("allItemsVisible", w(!1)), l = R("carouselItems", w(null)), s = R("currentCarouselItemIndex", w(0));
    return U(
      [l, s, a],
      ([c, i, x]) => {
        x ? (t.value = !0, r.value = !0) : c !== null && c.length > 0 && (t.value = i === 0, r.value = i === c.length - 1);
      },
      { immediate: !0 }
    ), (c, i) => (b(), _("div", null, [
      p(c.$slots, "action-prev", {
        handlePrev: d(o),
        disabled: t.value
      }, () => [
        z("button", {
          onClick: i[0] || (i[0] = //@ts-ignore
          (...x) => d(o) && d(o)(...x)),
          disabled: t.value
        }, " Prev ", 8, dt)
      ]),
      p(c.$slots, "action-next", {
        handleNext: d(n),
        disabled: r.value
      }, () => [
        z("button", {
          onClick: i[1] || (i[1] = //@ts-ignore
          (...x) => d(n) && d(n)(...x)),
          disabled: r.value
        }, " Next ", 8, ct)
      ])
    ]));
  }
}), Mt = {
  Root: st,
  Item: it,
  Navigation: ut
};
function mt(e) {
  const t = w(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return Z(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", r), e.el.value.addEventListener("mouseleave", o));
  }), J(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", r), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: A(t),
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
    return (r, o) => (b(), _("div", {
      class: f(d(h)(
        d(h).raw({
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
}), bt = ["aria-label", "aria-expanded"], gt = ["innerHTML"], pt = /* @__PURE__ */ S({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = w(), r = e, { open: o, toggle: n } = mt({ el: t });
    return (a, l) => (b(), _("div", {
      ref_key: "el",
      ref: t,
      class: f(
        d(h)(
          d(h).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      p(a.$slots, "trigger", W(P({ open: d(o) })), () => [
        z("button", {
          type: "button",
          class: f([
            d(h)(
              d(h).raw({
                cursor: "pointer"
              }),
              r.classTrigger
            ),
            d(o) ? "active" : null
          ]),
          "aria-haspopup": "true",
          "aria-label": e.ariaLabel || e.label,
          "aria-expanded": d(o),
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => d(n) && d(n)(...s))
        }, [
          r.icon ? (b(), _("span", {
            key: 0,
            class: f(r.icon)
          }, null, 2)) : I("", !0),
          p(a.$slots, "trigger-label", {}, () => [
            z("span", { innerHTML: e.label }, null, 8, gt)
          ], !0),
          p(a.$slots, "trigger-icon", W(P({ open: d(o) })), void 0, !0)
        ], 10, bt)
      ], !0),
      p(a.$slots, "dropdown", W(P({ open: d(o) })), () => [
        Q(xe, { name: "flyout" }, {
          default: j(() => [
            d(o) ? (b(), O(ce, { key: 0 }, {
              default: j(() => [
                p(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : I("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), ft = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, vt = /* @__PURE__ */ ft(pt, [["__scopeId", "data-v-909bf7be"]]), jt = {
  Root: vt,
  Dropdown: ce
}, ht = ["innerHTML"], xt = ["innerHTML"], yt = /* @__PURE__ */ S({
  __name: "HeroLead",
  props: {
    headline: {},
    headlineTag: { default: "h1" },
    description: {},
    alignItems: { default: "start" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = de({
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
    }), o = y(() => r({
      alignItems: t.alignItems || "start",
      size: t.size || "md"
    }));
    return (n, a) => (b(), _("div", {
      class: f(o.value.root)
    }, [
      p(n.$slots, "headline", {}, () => [
        e.headline ? (b(), O(K(e.headlineTag), {
          key: 0,
          class: f(o.value.headline)
        }, {
          default: j(() => [
            z("span", { innerHTML: e.headline }, null, 8, ht)
          ]),
          _: 1
        }, 8, ["class"])) : I("", !0)
      ]),
      p(n.$slots, "description", {}, () => [
        e.description ? (b(), _("div", {
          key: 0,
          innerHTML: e.description,
          class: f(o.value.description)
        }, null, 10, xt)) : I("", !0)
      ]),
      p(n.$slots, "actions")
    ], 2));
  }
}), Lt = {
  Lead: yt
}, ue = /* @__PURE__ */ S({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = ye(), o = y(() => t.id || `field-${r}`), n = y(() => t.error ? `${o.value}-error` : null), a = y(() => t.message ? `${o.value}-message` : null), l = y(() => !!t.error);
    B("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const s = h({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (c, i) => (b(), _("div", {
      class: f([d(s), t.class])
    }, [
      p(c.$slots, "default")
    ], 2));
  }
}), _t = /* @__PURE__ */ S({
  __name: "FieldRequired",
  setup(e) {
    return (t, r) => (b(), _("span", {
      class: f(d(h)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), kt = ["for", "aria-disabled"], me = /* @__PURE__ */ S({
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
    const t = e, r = R("fieldContext", null), o = y(() => t.for || (r == null ? void 0 : r.fieldId) || void 0), n = D({
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
    return (a, l) => (b(), _("label", {
      for: o.value,
      class: f([
        d(n)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      _e(ke(t.label) + " ", 1),
      t.required ? (b(), O(_t, { key: 0 })) : I("", !0)
    ], 10, kt));
  }
}), St = ["id", "innerHTML"], be = /* @__PURE__ */ S({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = R("fieldContext", null), o = y(() => t.message || (r == null ? void 0 : r.message) || null), n = y(() => t.id || (r == null ? void 0 : r.messageId) || void 0), a = h({
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
    return (l, s) => o.value ? (b(), _("span", {
      key: 0,
      id: n.value,
      class: f([d(a), t.class]),
      innerHTML: o.value
    }, null, 10, St)) : I("", !0);
  }
}), Ct = ["id", "innerHTML"], ge = /* @__PURE__ */ S({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, r = R("fieldContext", null), o = y(() => t.message || (r == null ? void 0 : r.errorMessage) || null), n = y(() => t.id || (r == null ? void 0 : r.errorId) || void 0), a = h({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, s) => o.value ? (b(), _("span", {
      key: 0,
      id: n.value,
      class: f([d(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, Ct)) : I("", !0);
  }
}), wt = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], pe = /* @__PURE__ */ S({
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
    const r = e, o = t, n = R("fieldContext", null), a = y(() => {
      if (!n) return;
      const i = [];
      return n.errorId && i.push(n.errorId), n.helperId && i.push(n.helperId), i.length > 0 ? i.join(" ") : void 0;
    }), l = y(() => r.valid === !0 ? !1 : r.valid === !1 ? !0 : (n == null ? void 0 : n.hasError) ?? !1), s = (i) => {
      const x = i.target;
      o("update:modelValue", x.value);
    }, c = D({
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
    return (i, x) => (b(), _("input", {
      id: e.id,
      name: e.name,
      class: f([d(c)({ size: e.size, valid: r.valid }), r.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: s
    }, null, 42, wt));
  }
}), It = /* @__PURE__ */ S({
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
    const r = e, o = y(() => r.error ? !1 : "none"), n = t, a = (l) => {
      n("update:modelValue", l);
    };
    return (l, s) => (b(), O(ue, null, {
      default: j(() => [
        e.label ? (b(), O(me, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : I("", !0),
        Q(pe, {
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
        e.message || e.error ? (b(), _("div", {
          key: 1,
          class: f(d(h)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (b(), O(be, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : I("", !0),
          e.error ? (b(), O(ge, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : I("", !0)
        ], 2)) : I("", !0)
      ]),
      _: 1
    }));
  }
}), Dt = {
  Input: It,
  Base: ue,
  Label: me,
  Error: ge,
  Message: be
}, Tt = ["action", "method", "id", "name", "aria-label"], Bt = ["placeholder"], zt = /* @__PURE__ */ S({
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
    const r = t, o = w(null), n = (a) => {
      a.preventDefault(), r("submit", o.value);
    };
    return (a, l) => (b(), _("form", {
      ref_key: "promptForm",
      ref: o,
      action: e.action,
      method: e.method,
      id: e.id,
      name: e.name,
      "aria-label": e.ariaLabel,
      onSubmit: n,
      class: f(d(h)({
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
        z("textarea", {
          name: "message",
          class: f(d(h)({
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
        }, null, 10, Bt)
      ]),
      p(a.$slots, "footer")
    ], 42, Tt));
  }
}), Rt = /* @__PURE__ */ S({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, r) => (b(), _("div", {
      class: f(d(h)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      z("div", {
        class: f(d(h)({
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
      z("div", {
        class: f(d(h)({
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
}), Wt = {
  Input: pe,
  Prompt: zt,
  PromptFooter: Rt
};
function Pt(e) {
  const t = y(() => e ? new FormData(e) : null), r = y(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: A(t),
    jsonData: A(r)
  };
}
export {
  $t as Button,
  Vt as Card,
  Mt as Carousel,
  Dt as Field,
  jt as Flyout,
  Wt as Form,
  Lt as Hero,
  Et as Loader,
  lt as useCarousel,
  mt as useFlyout,
  Pt as useFormData
};
