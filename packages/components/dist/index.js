var ge = (e) => {
  throw TypeError(e);
};
var Ye = (e, t, n) => t.has(e) || ge("Cannot " + n);
var F = (e, t, n) => (Ye(e, t, "read from private field"), n ? n.call(e) : t.get(e)), be = (e, t, n) => t.has(e) ? ge("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as X from "vue";
import { defineComponent as C, computed as y, createBlock as O, openBlock as h, resolveDynamicComponent as Ce, normalizeClass as k, withCtx as B, createElementBlock as $, createCommentVNode as E, normalizeStyle as Ge, unref as s, renderSlot as _, createElementVNode as M, ref as w, watch as D, onMounted as ae, onUnmounted as le, useSlots as Ke, provide as z, withModifiers as Je, inject as j, readonly as re, normalizeProps as Q, guardReactiveProps as ee, createVNode as N, Transition as Ze, useId as Qe, createTextVNode as et, toDisplayString as tt, Fragment as Se, getCurrentScope as rt, onScopeDispose as nt, getCurrentInstance as ie, nextTick as se, toValue as Y, toRefs as de, h as G, Comment as ot, mergeProps as ke, cloneVNode as at, withKeys as lt, renderList as it } from "vue";
function ne(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var st = (e) => typeof e == "object" && e !== null;
function ue(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, n]) => n !== void 0));
}
var dt = (e) => e === "base";
function ut(e) {
  return e.slice().filter((t) => !dt(t));
}
function ve(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function ct(e) {
  let t = "", n;
  for (n = Math.abs(e); n > 52; n = n / 52 | 0) t = ve(n % 52) + t;
  return ve(n % 52) + t;
}
function ft(e, t) {
  let n = t.length;
  for (; n; ) e = e * 33 ^ t.charCodeAt(--n);
  return e;
}
function pt(e) {
  return ct(ft(5381, e) >>> 0);
}
var we = /\s*!(important)?/i;
function mt(e) {
  return typeof e == "string" ? we.test(e) : !1;
}
function gt(e) {
  return typeof e == "string" ? e.replace(we, "").trim() : e;
}
function Ie(e) {
  return typeof e == "string" ? e.replaceAll(" ", "_") : e;
}
var q = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (...r) => {
    const o = JSON.stringify(r);
    if (t.has(o))
      return t.get(o);
    const a = e(...r);
    return t.set(o, a), a;
  };
}, bt = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function ce(...e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    if (bt.has(r)) return;
    const o = t[r], a = n[r];
    ne(o) && ne(a) ? t[r] = ce(o, a) : t[r] = a;
  }), t), {});
}
var vt = (e) => e != null;
function Ae(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function a(l, i = []) {
    if (st(l)) {
      const d = {};
      for (const [u, f] of Object.entries(l)) {
        const c = (o == null ? void 0 : o(u, f)) ?? u, m = [...i, c];
        if (r != null && r(l, m))
          return t(l, i);
        const g = a(f, m);
        vt(g) && (d[c] = g);
      }
      return d;
    }
    return t(l, i);
  }
  return a(e);
}
function ht(e, t) {
  return e.reduce(
    (n, r, o) => {
      const a = t[o];
      return r != null && (n[a] = r), n;
    },
    {}
  );
}
function $e(e, t, n = !0) {
  const { utility: r, conditions: o } = t, { hasShorthand: a, resolveShorthand: l } = r;
  return Ae(
    e,
    (i) => Array.isArray(i) ? ht(i, o.breakpoints.keys) : i,
    {
      stop: (i) => Array.isArray(i),
      getKey: n ? (i) => a ? l(i) : i : void 0
    }
  );
}
var yt = {
  shift: (e) => e,
  finalize: (e) => e,
  breakpoints: { keys: [] }
}, xt = (e) => typeof e == "string" ? e.replaceAll(/[\n\s]+/g, " ") : e;
function _t(e) {
  const { utility: t, hash: n, conditions: r = yt } = e, o = (l) => [t.prefix, l].filter(Boolean).join("-"), a = (l, i) => {
    let d;
    if (n) {
      const u = [...r.finalize(l), i];
      d = o(t.toHash(u, pt));
    } else
      d = [...r.finalize(l), o(i)].join(":");
    return d;
  };
  return q(({ base: l, ...i } = {}) => {
    const d = Object.assign(i, l), u = $e(d, e), f = /* @__PURE__ */ new Set();
    return Ae(u, (c, m) => {
      if (c == null) return;
      const g = mt(c), [b, ...S] = r.shift(m), T = ut(S), x = t.transform(b, gt(xt(c)));
      let p = a(T, x.className);
      g && (p = `${p}!`), f.add(p);
    }), Array.from(f).join(" ");
  });
}
function Ct(...e) {
  return e.flat().filter((t) => ne(t) && Object.keys(ue(t)).length > 0);
}
function St(e) {
  function t(o) {
    const a = Ct(...o);
    return a.length === 1 ? a : a.map((l) => $e(l, e));
  }
  function n(...o) {
    return ce(...t(o));
  }
  function r(...o) {
    return Object.assign({}, ...t(o));
  }
  return { mergeCss: q(n), assignCss: r };
}
var kt = /([A-Z])/g, wt = /^ms-/, It = q((e) => e.startsWith("--") ? e : e.replace(kt, "-$1").replace(wt, "-ms-").toLowerCase()), At = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
`${At.split(",").join("|")}`;
var $t = (e = {}) => {
  const t = (o) => {
    var a;
    return {
      className: [e.className, o].filter(Boolean).join("__"),
      base: ((a = e.base) == null ? void 0 : a[o]) ?? {},
      variants: {},
      defaultVariants: e.defaultVariants ?? {},
      compoundVariants: e.compoundVariants ? Tt(e.compoundVariants, o) : []
    };
  }, r = (e.slots ?? []).map((o) => [o, t(o)]);
  for (const [o, a] of Object.entries(e.variants ?? {}))
    for (const [l, i] of Object.entries(a))
      r.forEach(([d, u]) => {
        var f;
        (f = u.variants)[o] ?? (f[o] = {}), u.variants[o][l] = i[d] ?? {};
      });
  return Object.fromEntries(r);
}, Tt = (e, t) => e.filter((n) => n.css[t]).map((n) => ({ ...n, css: n.css[t] }));
function Te(e, ...t) {
  const n = Object.getOwnPropertyDescriptors(e), r = Object.keys(n), o = (l) => {
    const i = {};
    for (let d = 0; d < l.length; d++) {
      const u = l[d];
      n[u] && (Object.defineProperty(i, u, n[u]), delete n[u]);
    }
    return i;
  }, a = (l) => o(Array.isArray(l) ? l : r.filter(l));
  return t.map(a).concat(o(r));
}
var Ot = (...e) => {
  const t = e.reduce((n, r) => (r && r.forEach((o) => n.add(o)), n), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
const Bt = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", Oe = new Set(Bt.split(",")), Et = /^@|&|&$/;
function he(e) {
  return Oe.has(e) || Et.test(e);
}
const Rt = /^_/, zt = /&|@/;
function jt(e) {
  return e.map((t) => Oe.has(t) ? t.replace(Rt, "") : zt.test(t) ? `[${Ie(t.trim())}]` : t);
}
function Mt(e) {
  return e.sort((t, n) => {
    const r = he(t), o = he(n);
    return r && !o ? 1 : !r && o ? -1 : 0;
  });
}
const Vt = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", Be = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
Vt.split(",").forEach((e) => {
  const [t, n] = e.split(":"), [r, ...o] = n.split("/");
  Be.set(t, r), o.length && o.forEach((a) => {
    Ee.set(a === "1" ? r : a, t);
  });
});
const ye = (e) => Ee.get(e) || e, Re = {
  conditions: {
    shift: Mt,
    finalize: jt,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const n = ye(e);
      return { className: `${Be.get(n) || It(n)}_${Ie(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: ye
  }
}, Dt = _t(Re), I = (...e) => Dt(P(...e));
I.raw = (...e) => P(...e);
const { mergeCss: P } = St(Re);
function Pt() {
  let e = "", t = 0, n;
  for (; t < arguments.length; )
    (n = arguments[t++]) && typeof n == "string" && (e && (e += " "), e += n);
  return e;
}
const xe = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function W(e) {
  const { base: t, variants: n, defaultVariants: r, compoundVariants: o } = xe(e), a = (m) => ({ ...r, ...ue(m) });
  function l(m = {}) {
    var T;
    const g = a(m);
    let b = { ...t };
    for (const [x, p] of Object.entries(g))
      (T = n[x]) != null && T[p] && (b = P(b, n[x][p]));
    const S = Lt(o, g);
    return P(b, S);
  }
  function i(m) {
    const g = xe(m.config), b = Ot(m.variantKeys, Object.keys(n));
    return W({
      base: P(t, g.base),
      variants: Object.fromEntries(
        b.map((S) => [S, P(n[S], g.variants[S])])
      ),
      defaultVariants: ce(r, g.defaultVariants),
      compoundVariants: [...o, ...g.compoundVariants]
    });
  }
  function d(m) {
    return I(l(m));
  }
  const u = Object.keys(n);
  function f(m) {
    return Te(m, u);
  }
  const c = Object.fromEntries(Object.entries(n).map(([m, g]) => [m, Object.keys(g)]));
  return Object.assign(q(d), {
    __cva__: !0,
    variantMap: c,
    variantKeys: u,
    raw: l,
    config: e,
    merge: i,
    splitVariantProps: f,
    getVariantProps: a
  });
}
function Lt(e, t) {
  let n = {};
  return e.forEach((r) => {
    Object.entries(r).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((d) => t[a] === d)) && (n = P(n, r.css));
  }), n;
}
function ze(e) {
  const t = Object.entries($t(e)).map(([c, m]) => [c, W(m)]), n = e.defaultVariants ?? {}, r = t.reduce((c, [m, g]) => (e.className && (c[m] = g.config.className), c), {});
  function o(c) {
    const m = t.map(([g, b]) => [g, Pt(b(c), r[g])]);
    return Object.fromEntries(m);
  }
  function a(c) {
    const m = t.map(([g, b]) => [g, b.raw(c)]);
    return Object.fromEntries(m);
  }
  const l = e.variants ?? {}, i = Object.keys(l);
  function d(c) {
    return Te(c, i);
  }
  const u = (c) => ({ ...n, ...ue(c) }), f = Object.fromEntries(
    Object.entries(l).map(([c, m]) => [c, Object.keys(m)])
  );
  return Object.assign(q(o), {
    __cva__: !1,
    raw: a,
    config: e,
    variantMap: f,
    variantKeys: i,
    classNameMap: r,
    splitVariantProps: d,
    getVariantProps: u
  });
}
const Nt = ["innerHTML"], dn = /* @__PURE__ */ C({
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
    const t = e, n = y(() => t.to ? "a" : "button"), r = y(() => n.value === "button" && t.type ? t.type : n.value === "button" ? "button" : null), o = y(() => t.external && n.value === "a" ? "_blank" : null), a = y(() => t.external && n.value === "a" ? "noopener noreferrer" : null), l = W({
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
    }), i = y(() => I(
      l.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (d, u) => (h(), O(Ce(n.value), {
      class: k(["btn", i.value]),
      type: r.value,
      href: t.to,
      title: t.label,
      target: o.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: B(() => [
        t.icon ? (h(), $("span", {
          key: 0,
          class: k([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : E("", !0),
        t.label ? (h(), $("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, Nt)) : E("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), Ft = ["aria-label"], un = /* @__PURE__ */ C({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, n) => (h(), $("div", {
      class: k([
        "loader",
        s(I)({
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
      style: Ge({
        "--loader-size": `${e.size}px`
      })
    }, null, 14, Ft));
  }
}), qt = /* @__PURE__ */ C({
  __name: "CardRoot",
  props: {
    borderColor: { default: "default" },
    classWrapper: { default: null },
    classContainer: { default: null }
  },
  setup(e) {
    const t = e, r = ze({
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
    return (o, a) => (h(), $("div", {
      class: k(s(r).root)
    }, [
      _(o.$slots, "wrapper-before"),
      M("div", {
        class: k(s(r).container)
      }, [
        _(o.$slots, "default", {}, () => [
          _(o.$slots, "header"),
          _(o.$slots, "body"),
          _(o.$slots, "footer")
        ])
      ], 2),
      _(o.$slots, "wrapper-after")
    ], 2));
  }
}), Wt = /* @__PURE__ */ C({
  __name: "CardBody",
  setup(e) {
    return (t, n) => (h(), $("div", {
      class: k(s(I)({
        padding: "xl"
      }))
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), cn = {
  Root: qt,
  Body: Wt
};
function Ht(e, t, n) {
  const r = w(null), o = w(0), a = w([]), l = w(null), i = w(null), d = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, u = y(() => (r.value ?? []).length > 0 ? r.value[o.value] : null), f = y(() => {
    var p;
    return Math.ceil((((p = r.value) == null ? void 0 : p.length) ?? 0) / a.value.length);
  }), c = y(() => {
    var v;
    const p = ((v = r.value) == null ? void 0 : v.length) ?? 0;
    return p > 0 && a.value.length === p;
  });
  D(u, (p, v) => {
    p && p.classList.add(d.itemActiveClass), v && v.classList.remove(d.itemActiveClass);
  });
  const m = (p) => {
    if (!r.value) return null;
    if (p === "first") {
      const v = a.value[0];
      return v ? Array.from(r.value).indexOf(v) - 1 : null;
    }
    if (p === "last") {
      const v = a.value[a.value.length - 1];
      return v ? Array.from(r.value).indexOf(v) + 1 : null;
    }
    return null;
  }, g = () => {
    const p = l.value === "next" ? "end" : "start", v = l.value === "next" ? o.value + 1 : o.value - 1;
    if (!r.value || r.value[v] === void 0) {
      console.warn("No more items to scroll", l.value);
      return;
    }
    r.value[v].style.scrollSnapAlign = p, r.value[v].scrollIntoView({ behavior: "smooth" }), o.value = v;
  }, b = () => {
    const p = l.value === "prev" ? m("first") : m("last");
    if (!(!r.value || !r.value.length)) {
      if (p === null || !r.value || r.value[p] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      r.value[p].scrollIntoView({ behavior: "smooth" }), o.value = p;
    }
  }, S = () => {
    l.value = "next", e.scrollMode === "item" ? g() : e.scrollMode === "viewport" ? b() : console.warn("No more items to scroll next");
  }, T = () => {
    l.value = "prev", e.scrollMode === "item" ? g() : e.scrollMode === "viewport" ? b() : console.warn("No more items to scroll prev");
  }, x = (p) => {
    p.deltaY > 0 ? S() : T();
  };
  return ae(() => {
    var p;
    r.value = n.default ? ((p = t.value) == null ? void 0 : p.querySelectorAll(":scope > *")) ?? null : null, i.value = new IntersectionObserver((v) => {
      v.forEach((A) => {
        A.isIntersecting ? (A.target.dataset.carouselVisibility = "visible", A.target.classList.add(d.itemVisibleClass)) : (delete A.target.dataset.carouselVisibility, A.target.classList.remove(d.itemVisibleClass));
      }), a.value = Array.from(r.value ?? []).filter((A) => A.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), r.value && i.value && r.value.forEach((v) => i.value.observe(v));
  }), le(() => {
    t.value = null, r.value = null, o.value = 0, i.value && i.value.disconnect();
  }), {
    handleNext: S,
    handlePrev: T,
    handleWheel: x,
    carouselItems: r,
    carouselItem: u,
    currentCarouselItemIndex: o,
    visibleCarouselItems: a,
    scrollDirection: l,
    allItemsVisible: c,
    pages: f
  };
}
const Xt = /* @__PURE__ */ C({
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
    const t = e, n = Ke(), r = w(null), {
      handleNext: o,
      handlePrev: a,
      handleWheel: l,
      carouselItems: i,
      carouselItem: d,
      visibleCarouselItems: u,
      currentCarouselItemIndex: f,
      scrollDirection: c,
      allItemsVisible: m
    } = Ht(t, r, n);
    return z("carousel", r), z("handleNext", o), z("handlePrev", a), z("carouselItems", i), z("carouselItem", d), z("visibleCarouselItems", u), z("currentCarouselItemIndex", f), z("scrollDirection", c), z("allItemsVisible", m), (g, b) => (h(), $("div", {
      class: k(s(I)(
        s(I).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      _(g.$slots, "carousel-before"),
      M("ul", {
        ref_key: "carousel",
        ref: r,
        class: k(s(I)(
          s(I).raw({
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
        onWheel: b[0] || (b[0] = Je(
          //@ts-ignore
          (...S) => s(l) && s(l)(...S),
          ["prevent"]
        ))
      }, [
        _(g.$slots, "default")
      ], 34),
      _(g.$slots, "carousel-after")
    ], 2));
  }
}), Ut = /* @__PURE__ */ C({
  __name: "CarouselItem",
  setup(e) {
    return (t, n) => (h(), $("li", {
      class: k(s(I)({
        scrollSnapAlign: "start",
        display: "flex"
      }))
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Yt = ["disabled"], Gt = ["disabled"], Kt = /* @__PURE__ */ C({
  __name: "CarouselNavigation",
  setup(e) {
    const t = w(!0), n = w(!0), r = j("handlePrev"), o = j("handleNext"), a = j("allItemsVisible", w(!1)), l = j("carouselItems", w(null)), i = j("currentCarouselItemIndex", w(0));
    return D(
      [l, i, a],
      ([d, u, f]) => {
        f ? (t.value = !0, n.value = !0) : d !== null && d.length > 0 && (t.value = u === 0, n.value = u === d.length - 1);
      },
      { immediate: !0 }
    ), (d, u) => (h(), $("div", null, [
      _(d.$slots, "action-prev", {
        handlePrev: s(r),
        disabled: t.value
      }, () => [
        M("button", {
          onClick: u[0] || (u[0] = //@ts-ignore
          (...f) => s(r) && s(r)(...f)),
          disabled: t.value
        }, " Prev ", 8, Yt)
      ]),
      _(d.$slots, "action-next", {
        handleNext: s(o),
        disabled: n.value
      }, () => [
        M("button", {
          onClick: u[1] || (u[1] = //@ts-ignore
          (...f) => s(o) && s(o)(...f)),
          disabled: n.value
        }, " Next ", 8, Gt)
      ])
    ]));
  }
}), fn = {
  Root: Xt,
  Item: Ut,
  Navigation: Kt
};
function Jt(e) {
  const t = w(!1), n = (a) => {
    a.preventDefault(), t.value = !0;
  }, r = (a) => {
    a.preventDefault(), t.value = !1;
  }, o = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return ae(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", n), e.el.value.addEventListener("mouseleave", r));
  }), le(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", n), e.el.value.removeEventListener("mouseleave", r));
  }), {
    open: re(t),
    toggle: o
  };
}
const je = /* @__PURE__ */ C({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (n, r) => (h(), $("div", {
      class: k(s(I)(
        s(I).raw({
          position: "absolute",
          zIndex: 50,
          top: "100%",
          left: t.direction === "left" ? "0" : "auto",
          right: t.direction === "right" ? "0" : "auto",
          paddingTop: "sm"
        })
      ))
    }, [
      _(n.$slots, "default")
    ], 2));
  }
}), Zt = ["aria-label", "aria-expanded"], Qt = ["innerHTML"], er = /* @__PURE__ */ C({
  __name: "FlyoutRoot",
  props: {
    icon: {},
    label: {},
    ariaLabel: {},
    classTrigger: {}
  },
  setup(e) {
    const t = w(), n = e, { open: r, toggle: o } = Jt({ el: t });
    return (a, l) => (h(), $("div", {
      ref_key: "el",
      ref: t,
      class: k(
        s(I)(
          s(I).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      _(a.$slots, "trigger", Q(ee({ open: s(r) })), () => [
        M("button", {
          type: "button",
          class: k([
            s(I)(
              s(I).raw({
                cursor: "pointer"
              }),
              n.classTrigger
            ),
            s(r) ? "active" : null
          ]),
          "aria-haspopup": "true",
          "aria-label": e.ariaLabel || e.label,
          "aria-expanded": s(r),
          onClick: l[0] || (l[0] = //@ts-ignore
          (...i) => s(o) && s(o)(...i))
        }, [
          n.icon ? (h(), $("span", {
            key: 0,
            class: k(n.icon)
          }, null, 2)) : E("", !0),
          _(a.$slots, "trigger-label", {}, () => [
            M("span", { innerHTML: e.label }, null, 8, Qt)
          ], !0),
          _(a.$slots, "trigger-icon", Q(ee({ open: s(r) })), void 0, !0)
        ], 10, Zt)
      ], !0),
      _(a.$slots, "dropdown", Q(ee({ open: s(r) })), () => [
        N(Ze, { name: "flyout" }, {
          default: B(() => [
            s(r) ? (h(), O(je, { key: 0 }, {
              default: B(() => [
                _(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : E("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), tr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, rr = /* @__PURE__ */ tr(er, [["__scopeId", "data-v-a1ce9f68"]]), pn = {
  Root: rr,
  Dropdown: je
}, nr = ["innerHTML"], or = ["innerHTML"], ar = /* @__PURE__ */ C({
  __name: "HeroLead",
  props: {
    headline: {},
    headlineTag: { default: "h1" },
    description: {},
    alignItems: { default: "start" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, n = ze({
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
    }), r = y(() => n({
      alignItems: t.alignItems || "start",
      size: t.size || "md"
    }));
    return (o, a) => (h(), $("div", {
      class: k(r.value.root)
    }, [
      _(o.$slots, "headline", {}, () => [
        e.headline ? (h(), O(Ce(e.headlineTag), {
          key: 0,
          class: k(r.value.headline)
        }, {
          default: B(() => [
            M("span", { innerHTML: e.headline }, null, 8, nr)
          ]),
          _: 1
        }, 8, ["class"])) : E("", !0)
      ]),
      _(o.$slots, "description", {}, () => [
        e.description ? (h(), $("div", {
          key: 0,
          innerHTML: e.description,
          class: k(r.value.description)
        }, null, 10, or)) : E("", !0)
      ]),
      _(o.$slots, "actions")
    ], 2));
  }
}), mn = {
  Lead: ar
}, Me = /* @__PURE__ */ C({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = Qe(), r = y(() => t.id || `field-${n}`), o = y(() => t.error ? `${r.value}-error` : null), a = y(() => t.message ? `${r.value}-message` : null), l = y(() => !!t.error);
    z("fieldContext", {
      fieldId: r.value,
      errorId: o.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const i = I({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (d, u) => (h(), $("div", {
      class: k([s(i), t.class])
    }, [
      _(d.$slots, "default")
    ], 2));
  }
}), lr = /* @__PURE__ */ C({
  __name: "FieldRequired",
  setup(e) {
    return (t, n) => (h(), $("span", {
      class: k(s(I)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), ir = ["for", "aria-disabled"], Ve = /* @__PURE__ */ C({
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
    const t = e, n = j("fieldContext", null), r = y(() => t.for || (n == null ? void 0 : n.fieldId) || void 0), o = W({
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
    return (a, l) => (h(), $("label", {
      for: r.value,
      class: k([
        s(o)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      et(tt(t.label) + " ", 1),
      t.required ? (h(), O(lr, { key: 0 })) : E("", !0)
    ], 10, ir));
  }
}), sr = ["id", "innerHTML"], De = /* @__PURE__ */ C({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = j("fieldContext", null), r = y(() => t.message || (n == null ? void 0 : n.message) || null), o = y(() => t.id || (n == null ? void 0 : n.messageId) || void 0), a = I({
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
    return (l, i) => r.value ? (h(), $("span", {
      key: 0,
      id: o.value,
      class: k([s(a), t.class]),
      innerHTML: r.value
    }, null, 10, sr)) : E("", !0);
  }
}), dr = ["id", "innerHTML"], Pe = /* @__PURE__ */ C({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = j("fieldContext", null), r = y(() => t.message || (n == null ? void 0 : n.errorMessage) || null), o = y(() => t.id || (n == null ? void 0 : n.errorId) || void 0), a = I({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (l, i) => r.value ? (h(), $("span", {
      key: 0,
      id: o.value,
      class: k([s(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: r.value
    }, null, 10, dr)) : E("", !0);
  }
}), ur = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], Le = /* @__PURE__ */ C({
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
    const n = e, r = t, o = j("fieldContext", null), a = y(() => {
      if (!o) return;
      const u = [];
      return o.errorId && u.push(o.errorId), o.helperId && u.push(o.helperId), u.length > 0 ? u.join(" ") : void 0;
    }), l = y(() => n.valid === !0 ? !1 : n.valid === !1 ? !0 : (o == null ? void 0 : o.hasError) ?? !1), i = (u) => {
      const f = u.target;
      r("update:modelValue", f.value);
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
    return (u, f) => (h(), $("input", {
      id: e.id,
      name: e.name,
      class: k([s(d)({ size: e.size, valid: n.valid }), n.class]),
      type: e.type,
      placeholder: e.placeholder || void 0,
      value: e.modelValue || "",
      disabled: e.disabled,
      required: e.required,
      autocomplete: e.autocomplete || void 0,
      "aria-invalid": l.value,
      "aria-describedby": a.value,
      onInput: i
    }, null, 42, ur));
  }
}), cr = /* @__PURE__ */ C({
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
    const n = e, r = y(() => n.error ? !1 : "none"), o = t, a = (l) => {
      o("update:modelValue", l);
    };
    return (l, i) => (h(), O(Me, null, {
      default: B(() => [
        e.label ? (h(), O(Ve, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : E("", !0),
        N(Le, {
          id: e.id,
          name: e.name,
          type: e.type,
          placeholder: e.placeholder,
          "model-value": e.modelValue,
          disabled: e.disabled,
          required: e.required,
          autocomplete: e.autocomplete,
          valid: r.value,
          "onUpdate:modelValue": a
        }, null, 8, ["id", "name", "type", "placeholder", "model-value", "disabled", "required", "autocomplete", "valid"]),
        e.message || e.error ? (h(), $("div", {
          key: 1,
          class: k(s(I)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (h(), O(De, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : E("", !0),
          e.error ? (h(), O(Pe, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : E("", !0)
        ], 2)) : E("", !0)
      ]),
      _: 1
    }));
  }
}), gn = {
  Input: cr,
  Base: Me,
  Label: Ve,
  Error: Pe,
  Message: De
}, fr = ["action", "method", "id", "name", "aria-label"], pr = ["placeholder"], mr = /* @__PURE__ */ C({
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
    const n = t, r = w(null), o = (a) => {
      a.preventDefault(), n("submit", r.value);
    };
    return (a, l) => (h(), $("form", {
      ref_key: "promptForm",
      ref: r,
      action: e.action,
      method: e.method,
      id: e.id,
      name: e.name,
      "aria-label": e.ariaLabel,
      onSubmit: o,
      class: k(s(I)({
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
      _(a.$slots, "parameter"),
      _(a.$slots, "textarea", {}, () => [
        M("textarea", {
          name: "message",
          class: k(s(I)({
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
        }, null, 10, pr)
      ]),
      _(a.$slots, "footer")
    ], 42, fr));
  }
}), gr = /* @__PURE__ */ C({
  __name: "FormPromptFooter",
  setup(e) {
    return (t, n) => (h(), $("div", {
      class: k(s(I)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      M("div", {
        class: k(s(I)({
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
        _(t.$slots, "inputs")
      ], 2),
      M("div", {
        class: k(s(I)({
          flex: "0",
          flexBasis: "100%",
          "@container (min-width: 600px)": {
            flexBasis: "auto"
          }
        }))
      }, [
        _(t.$slots, "action")
      ], 2)
    ], 2));
  }
}), bn = {
  Input: Le,
  Prompt: mr,
  PromptFooter: gr
};
function _e(e) {
  return typeof e == "string" ? `'${e}'` : new br().serialize(e);
}
const br = /* @__PURE__ */ (function() {
  var t;
  class e {
    constructor() {
      be(this, t, /* @__PURE__ */ new Map());
    }
    compare(r, o) {
      const a = typeof r, l = typeof o;
      return a === "string" && l === "string" ? r.localeCompare(o) : a === "number" && l === "number" ? r - o : String.prototype.localeCompare.call(this.serialize(r, !0), this.serialize(o, !0));
    }
    serialize(r, o) {
      if (r === null) return "null";
      switch (typeof r) {
        case "string":
          return o ? r : `'${r}'`;
        case "bigint":
          return `${r}n`;
        case "object":
          return this.$object(r);
        case "function":
          return this.$function(r);
      }
      return String(r);
    }
    serializeObject(r) {
      const o = Object.prototype.toString.call(r);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), r);
      const a = r.constructor, l = a === Object || a === void 0 ? "" : a.name;
      if (l !== "" && globalThis[l] === a) return this.serializeBuiltInType(l, r);
      if (typeof r.toJSON == "function") {
        const i = r.toJSON();
        return l + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(r));
    }
    serializeBuiltInType(r, o) {
      const a = this["$" + r];
      if (a) return a.call(this, o);
      if (typeof (o == null ? void 0 : o.entries) == "function") return this.serializeObjectEntries(r, o.entries());
      throw new Error(`Cannot serialize ${r}`);
    }
    serializeObjectEntries(r, o) {
      const a = Array.from(o).sort((i, d) => this.compare(i[0], d[0]));
      let l = `${r}{`;
      for (let i = 0; i < a.length; i++) {
        const [d, u] = a[i];
        l += `${this.serialize(d, !0)}:${this.serialize(u)}`, i < a.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(r) {
      let o = F(this, t).get(r);
      return o === void 0 && (F(this, t).set(r, `#${F(this, t).size}`), o = this.serializeObject(r), F(this, t).set(r, o)), o;
    }
    $function(r) {
      const o = Function.prototype.toString.call(r);
      return o.slice(-15) === "[native code] }" ? `${r.name || ""}()[native]` : `${r.name}(${r.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(r) {
      let o = "[";
      for (let a = 0; a < r.length; a++) o += this.serialize(r[a]), a < r.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(r) {
      try {
        return `Date(${r.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(r) {
      return `ArrayBuffer[${new Uint8Array(r).join(",")}]`;
    }
    $Set(r) {
      return `Set${this.$Array(Array.from(r).sort((o, a) => this.compare(o, a)))}`;
    }
    $Map(r) {
      return this.serializeObjectEntries("Map", r.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(r) {
    return `${n}(${r})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(r) {
    return `${n}[${r.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(r) {
    return `${n}[${r.join("n,")}${r.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function K(e, t) {
  return e === t || _e(e) === _e(t);
}
function J(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(l) => {
    const i = j(r, l);
    if (i || i === null) return i;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (l) => (z(r, l), l)];
}
function vr(e) {
  return e == null;
}
function hr(e, t) {
  return vr(e) ? !1 : Array.isArray(e) ? e.some((n) => K(n, t)) : K(e, t);
}
function fe(e) {
  return e ? e.flatMap((t) => t.type === Se ? fe(t.children) : [t]) : [];
}
const yr = ["INPUT", "TEXTAREA"];
function xr(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && yr.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: a = "[data-reka-collection-item]", itemsArray: l = [], loop: i = !0, dir: d = "ltr", preventScroll: u = !0, focus: f = !1 } = r, [c, m, g, b, S, T] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = g || b, p = c || m;
  if (!S && !T && (!x && !p || o === "vertical" && p || o === "horizontal" && x)) return null;
  const v = n ? Array.from(n.querySelectorAll(a)) : l;
  if (!v.length) return null;
  u && e.preventDefault();
  let A = null;
  return p || x ? A = Ne(v, t, {
    goForward: x ? b : d === "ltr" ? c : m,
    loop: i
  }) : S ? A = v.at(0) || null : T && (A = v.at(-1) || null), f && (A == null || A.focus()), A;
}
function Ne(e, t, n, r = e.length) {
  if (--r === 0) return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length)) return null;
  const l = (a + e.length) % e.length, i = e[l];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Ne(e, i, n, r) : i : null;
}
const [Fe] = J("ConfigProvider");
function _r(e) {
  return rt() ? (nt(e), !0) : !1;
}
const qe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Cr = (e) => typeof e < "u", Sr = Object.prototype.toString, kr = (e) => Sr.call(e) === "[object Object]";
function te(e) {
  return Array.isArray(e) ? e : [e];
}
function wr(e, t, n) {
  return D(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const We = qe ? window : void 0;
function pe(e) {
  var t;
  const n = Y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ir(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, d, u, f) => (i.addEventListener(d, u, f), () => i.removeEventListener(d, u, f)), o = y(() => {
    const i = te(Y(e[0])).filter((d) => d != null);
    return i.every((d) => typeof d != "string") ? i : void 0;
  }), a = wr(
    () => {
      var i, d;
      return [
        (d = (i = o.value) == null ? void 0 : i.map((u) => pe(u))) != null ? d : [We].filter((u) => u != null),
        te(Y(o.value ? e[1] : e[0])),
        te(s(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Y(o.value ? e[3] : e[2])
      ];
    },
    ([i, d, u, f]) => {
      if (n(), !(i != null && i.length) || !(d != null && d.length) || !(u != null && u.length))
        return;
      const c = kr(f) ? { ...f } : f;
      t.push(
        ...i.flatMap(
          (m) => d.flatMap(
            (g) => u.map((b) => r(m, g, b, c))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    a(), n();
  };
  return _r(n), l;
}
function Ar(e) {
  return JSON.parse(JSON.stringify(e));
}
function He(e, t, n, r = {}) {
  var o, a, l;
  const {
    clone: i = !1,
    passive: d = !1,
    eventName: u,
    deep: f = !1,
    defaultValue: c,
    shouldEmit: m
  } = r, g = ie(), b = n || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((l = (a = g == null ? void 0 : g.proxy) == null ? void 0 : a.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let S = u;
  t || (t = "modelValue"), S = S || `update:${t.toString()}`;
  const T = (v) => i ? typeof i == "function" ? i(v) : Ar(v) : v, x = () => Cr(e[t]) ? T(e[t]) : c, p = (v) => {
    m ? m(v) && b(S, v) : b(S, v);
  };
  if (d) {
    const v = x(), A = w(v);
    let V = !1;
    return D(
      () => e[t],
      (R) => {
        V || (V = !0, A.value = T(R), se(() => V = !1));
      }
    ), D(
      A,
      (R) => {
        !V && (R !== e[t] || f) && p(R);
      },
      { deep: f }
    ), A;
  } else
    return y({
      get() {
        return x();
      },
      set(v) {
        p(v);
      }
    });
}
function $r(e) {
  const t = Fe({ dir: w("ltr") });
  return y(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function L() {
  const e = ie(), t = w(), n = y(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : pe(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const l in e.props) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[l]
  });
  if (Object.keys(r).length > 0) for (const l in r) Object.defineProperty(o, l, {
    enumerable: !0,
    configurable: !0,
    get: () => r[l]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function a(l) {
    t.value = l, l && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), e.exposed = o);
  }
  return {
    forwardRef: a,
    currentRef: t,
    currentElement: n
  };
}
let Tr = 0;
function Xe(e, t = "reka") {
  var r;
  if ("useId" in X) return `${t}-${(r = X.useId) == null ? void 0 : r.call(X)}`;
  const n = Fe({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Tr}`;
}
function Or(e, t) {
  const n = w(e);
  function r(a) {
    return t[n.value][a] ?? n.value;
  }
  return {
    state: n,
    dispatch: (a) => {
      n.value = r(a);
    }
  };
}
function Br(e, t) {
  var T;
  const n = w({}), r = w("none"), o = w(e), a = e.value ? "mounted" : "unmounted";
  let l;
  const i = ((T = t.value) == null ? void 0 : T.ownerDocument.defaultView) ?? We, { state: d, dispatch: u } = Or(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), f = (x) => {
    var p;
    if (qe) {
      const v = new CustomEvent(x, {
        bubbles: !1,
        cancelable: !1
      });
      (p = t.value) == null || p.dispatchEvent(v);
    }
  };
  D(e, async (x, p) => {
    var A;
    const v = p !== x;
    if (await se(), v) {
      const V = r.value, R = U(t.value);
      x ? (u("MOUNT"), f("enter"), R === "none" && f("after-enter")) : R === "none" || R === "undefined" || ((A = n.value) == null ? void 0 : A.display) === "none" ? (u("UNMOUNT"), f("leave"), f("after-leave")) : p && V !== R ? (u("ANIMATION_OUT"), f("leave")) : (u("UNMOUNT"), f("after-leave"));
    }
  }, { immediate: !0 });
  const c = (x) => {
    const p = U(t.value), v = p.includes(CSS.escape(x.animationName)), A = d.value === "mounted" ? "enter" : "leave";
    if (x.target === t.value && v && (f(`after-${A}`), u("ANIMATION_END"), !o.value)) {
      const V = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = i == null ? void 0 : i.setTimeout(() => {
        var R;
        ((R = t.value) == null ? void 0 : R.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = V);
      });
    }
    x.target === t.value && p === "none" && u("ANIMATION_END");
  }, m = (x) => {
    x.target === t.value && (r.value = U(t.value));
  }, g = D(t, (x, p) => {
    x ? (n.value = getComputedStyle(x), x.addEventListener("animationstart", m), x.addEventListener("animationcancel", c), x.addEventListener("animationend", c)) : (u("ANIMATION_END"), l !== void 0 && (i == null || i.clearTimeout(l)), p == null || p.removeEventListener("animationstart", m), p == null || p.removeEventListener("animationcancel", c), p == null || p.removeEventListener("animationend", c));
  }, { immediate: !0 }), b = D(d, () => {
    const x = U(t.value);
    r.value = d.value === "mounted" ? x : "none";
  });
  return le(() => {
    g(), b();
  }), { isPresent: y(() => ["mounted", "unmountSuspended"].includes(d.value)) };
}
function U(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Er = C({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var u;
    const { present: r, forceMount: o } = de(e), a = w(), { isPresent: l } = Br(r, a);
    n({ present: l });
    let i = t.default({ present: l.value });
    i = fe(i || []);
    const d = ie();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const f = (u = d == null ? void 0 : d.parent) != null && u.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${f}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((c) => `  - ${c}`).join(`
`)
      ].join(`
`));
    }
    return () => o.value || r.value || l.value ? G(t.default({ present: l.value })[0], { ref: (f) => {
      const c = pe(f);
      return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-reka-popper-content-wrapper") ? a.value = c.firstElementChild : a.value = c), c;
    } }) : null;
  }
});
const Rr = C({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var d;
      if (!n.default) return null;
      const r = fe(n.default()), o = r.findIndex((u) => u.type !== ot);
      if (o === -1) return r;
      const a = r[o];
      (d = a.props) == null || delete d.ref;
      const l = a.props ? ke(t, a.props) : t, i = at({
        ...a,
        props: {}
      }, l);
      return r.length === 1 ? i : (r[o] = i, r);
    };
  }
}), zr = [
  "area",
  "img",
  "input"
], H = C({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && zr.includes(r) ? () => G(r, t) : r !== "template" ? () => G(e.as, t, { default: n.default }) : () => G(Rr, t, { default: n.default });
  }
}), [Ue, jr] = J("CollapsibleRoot");
var Mr = /* @__PURE__ */ C({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = He(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: l, unmountOnHide: i } = de(r);
    return jr({
      contentId: "",
      disabled: l,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        l.value || (a.value = !a.value);
      }
    }), t({ open: a }), L(), (d, u) => (h(), O(s(H), {
      as: d.as,
      "as-child": r.asChild,
      "data-state": s(a) ? "open" : "closed",
      "data-disabled": s(l) ? "" : void 0
    }, {
      default: B(() => [_(d.$slots, "default", { open: s(a) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), Vr = Mr, Dr = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Ue();
    o.contentId || (o.contentId = Xe(void 0, "reka-collapsible-content"));
    const a = w(), { forwardRef: l, currentElement: i } = L(), d = w(0), u = w(0), f = y(() => o.open.value), c = w(f.value), m = w();
    D(() => {
      var b;
      return [f.value, (b = a.value) == null ? void 0 : b.present];
    }, async () => {
      await se();
      const b = i.value;
      if (!b) return;
      m.value = m.value || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const S = b.getBoundingClientRect();
      u.value = S.height, d.value = S.width, c.value || (b.style.transitionDuration = m.value.transitionDuration, b.style.animationName = m.value.animationName);
    }, { immediate: !0 });
    const g = y(() => c.value && o.open.value);
    return ae(() => {
      requestAnimationFrame(() => {
        c.value = !1;
      });
    }), Ir(i, "beforematch", (b) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (b, S) => (h(), O(s(Er), {
      ref_key: "presentRef",
      ref: a,
      present: b.forceMount || s(o).open.value,
      "force-mount": !0
    }, {
      default: B(({ present: T }) => {
        var x;
        return [N(s(H), ke(b.$attrs, {
          id: s(o).contentId,
          ref: s(l),
          "as-child": n.asChild,
          as: b.as,
          hidden: T ? void 0 : s(o).unmountOnHide.value ? "" : "until-found",
          "data-state": g.value ? void 0 : s(o).open.value ? "open" : "closed",
          "data-disabled": (x = s(o).disabled) != null && x.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${u.value}px`,
            "--reka-collapsible-content-width": `${d.value}px`
          }
        }), {
          default: B(() => [!s(o).unmountOnHide.value || T ? _(b.$slots, "default", { key: 0 }) : E("v-if", !0)]),
          _: 2
        }, 1040, [
          "id",
          "as-child",
          "as",
          "hidden",
          "data-state",
          "data-disabled",
          "style"
        ])];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Pr = Dr, Lr = /* @__PURE__ */ C({
  __name: "CollapsibleTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    L();
    const n = Ue();
    return (r, o) => {
      var a, l;
      return h(), O(s(H), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": s(n).contentId,
        "aria-expanded": s(n).open.value,
        "data-state": s(n).open.value ? "open" : "closed",
        "data-disabled": (a = s(n).disabled) != null && a.value ? "" : void 0,
        disabled: (l = s(n).disabled) == null ? void 0 : l.value,
        onClick: s(n).onOpenToggle
      }, {
        default: B(() => [_(r.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child",
        "aria-controls",
        "aria-expanded",
        "data-state",
        "data-disabled",
        "disabled",
        "onClick"
      ]);
    };
  }
}), Nr = Lr;
function Fr({ type: e, defaultValue: t, modelValue: n }) {
  const r = n || t;
  return n !== void 0 || t !== void 0 ? Array.isArray(r) ? "multiple" : "single" : e ?? "single";
}
function qr({ type: e, defaultValue: t, modelValue: n }) {
  return e || Fr({
    type: e,
    defaultValue: t,
    modelValue: n
  });
}
function Wr({ type: e, defaultValue: t }) {
  return t !== void 0 ? t : e === "single" ? void 0 : [];
}
function Hr(e, t) {
  const n = y(() => qr(e)), r = He(e, "modelValue", t, {
    defaultValue: Wr(e),
    passive: e.modelValue === void 0,
    deep: !0
  });
  function o(l) {
    if (n.value === "single") r.value = K(l, r.value) ? void 0 : l;
    else {
      const i = Array.isArray(r.value) ? [...r.value || []] : [r.value].filter(Boolean);
      if (hr(i, l)) {
        const d = i.findIndex((u) => K(u, l));
        i.splice(d, 1);
      } else i.push(l);
      r.value = i;
    }
  }
  const a = y(() => n.value === "single");
  return {
    modelValue: r,
    changeModelValue: o,
    isSingle: a
  };
}
const [Z, Xr] = J("AccordionRoot");
var Ur = /* @__PURE__ */ C({
  __name: "AccordionRoot",
  props: {
    collapsible: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    type: {
      type: String,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, { dir: o, disabled: a, unmountOnHide: l } = de(n), i = $r(o), { modelValue: d, changeModelValue: u, isSingle: f } = Hr(n, r), { forwardRef: c, currentElement: m } = L();
    return Xr({
      disabled: a,
      direction: i,
      orientation: n.orientation,
      parentElement: m,
      isSingle: f,
      collapsible: n.collapsible,
      modelValue: d,
      changeModelValue: u,
      unmountOnHide: l
    }), (g, b) => (h(), O(s(H), {
      ref: s(c),
      "as-child": g.asChild,
      as: g.as
    }, {
      default: B(() => [_(g.$slots, "default", { modelValue: s(d) })]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Yr = Ur, oe = /* @__PURE__ */ (function(e) {
  return e.Open = "open", e.Closed = "closed", e;
})(oe || {});
const [me, Gr] = J("AccordionItem");
var Kr = /* @__PURE__ */ C({
  __name: "AccordionItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: String,
      required: !0
    },
    unmountOnHide: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, r = Z(), o = y(() => r.isSingle.value ? n.value === r.modelValue.value : Array.isArray(r.modelValue.value) && r.modelValue.value.includes(n.value)), a = y(() => r.disabled.value || n.disabled), l = y(() => a.value ? "" : void 0), i = y(() => o.value ? oe.Open : oe.Closed);
    t({
      open: o,
      dataDisabled: l
    });
    const { currentRef: d, currentElement: u } = L();
    Gr({
      open: o,
      dataState: i,
      disabled: a,
      dataDisabled: l,
      triggerId: "",
      currentRef: d,
      currentElement: u,
      value: y(() => n.value)
    });
    function f(c) {
      var S;
      const m = c.target;
      if (Array.from(((S = r.parentElement.value) == null ? void 0 : S.querySelectorAll("[data-reka-collection-item]")) ?? []).findIndex((T) => T === m) === -1) return null;
      xr(c, m, r.parentElement.value, {
        arrowKeyOptions: r.orientation,
        dir: r.direction.value,
        focus: !0
      });
    }
    return (c, m) => (h(), O(s(Vr), {
      "data-orientation": s(r).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: a.value,
      open: o.value,
      as: n.as,
      "as-child": n.asChild,
      "unmount-on-hide": s(r).unmountOnHide.value,
      onKeydown: lt(f, [
        "up",
        "down",
        "left",
        "right",
        "home",
        "end"
      ])
    }, {
      default: B(() => [_(c.$slots, "default", { open: o.value })]),
      _: 3
    }, 8, [
      "data-orientation",
      "data-disabled",
      "data-state",
      "disabled",
      "open",
      "as",
      "as-child",
      "unmount-on-hide"
    ]));
  }
}), Jr = Kr, Zr = /* @__PURE__ */ C({
  __name: "AccordionContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Z(), r = me();
    return L(), (o, a) => (h(), O(s(Pr), {
      role: "region",
      "as-child": t.asChild,
      as: o.as,
      "force-mount": t.forceMount,
      "aria-labelledby": s(r).triggerId,
      "data-state": s(r).dataState.value,
      "data-disabled": s(r).dataDisabled.value,
      "data-orientation": s(n).orientation,
      style: {
        "--reka-accordion-content-width": "var(--reka-collapsible-content-width)",
        "--reka-accordion-content-height": "var(--reka-collapsible-content-height)"
      },
      onContentFound: a[0] || (a[0] = (l) => s(n).changeModelValue(s(r).value.value))
    }, {
      default: B(() => [_(o.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "force-mount",
      "aria-labelledby",
      "data-state",
      "data-disabled",
      "data-orientation"
    ]));
  }
}), Qr = Zr, en = /* @__PURE__ */ C({
  __name: "AccordionHeader",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h3"
    }
  },
  setup(e) {
    const t = e, n = Z(), r = me();
    return L(), (o, a) => (h(), O(s(H), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": s(n).orientation,
      "data-state": s(r).dataState.value,
      "data-disabled": s(r).dataDisabled.value
    }, {
      default: B(() => [_(o.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-orientation",
      "data-state",
      "data-disabled"
    ]));
  }
}), tn = en, rn = /* @__PURE__ */ C({
  __name: "AccordionTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = Z(), r = me();
    r.triggerId || (r.triggerId = Xe(void 0, "reka-accordion-trigger"));
    function o() {
      const a = n.isSingle.value && r.open.value && !n.collapsible;
      r.disabled.value || a || n.changeModelValue(r.value.value);
    }
    return (a, l) => (h(), O(s(Nr), {
      id: s(r).triggerId,
      ref: s(r).currentRef,
      "data-reka-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": s(r).disabled.value || void 0,
      "aria-expanded": s(r).open.value || !1,
      "data-disabled": s(r).dataDisabled.value,
      "data-orientation": s(n).orientation,
      "data-state": s(r).dataState.value,
      disabled: s(r).disabled.value,
      onClick: o
    }, {
      default: B(() => [_(a.$slots, "default")]),
      _: 3
    }, 8, [
      "id",
      "as",
      "as-child",
      "aria-disabled",
      "aria-expanded",
      "data-disabled",
      "data-orientation",
      "data-state",
      "disabled"
    ]));
  }
}), nn = rn;
const on = /* @__PURE__ */ C({
  __name: "AccordionRoot",
  props: {
    items: {}
  },
  setup(e) {
    return (t, n) => (h(), O(s(Yr), null, {
      default: B(() => [
        (h(!0), $(Se, null, it(e.items, (r) => (h(), O(s(Jr), {
          key: r.id,
          value: r.id
        }, {
          default: B(() => [
            N(s(tn), null, {
              default: B(() => [
                N(s(nn))
              ]),
              _: 1
            }),
            N(s(Qr))
          ]),
          _: 1
        }, 8, ["value"]))), 128))
      ]),
      _: 1
    }));
  }
}), vn = {
  Root: on
};
function hn(e) {
  const t = y(() => e ? new FormData(e) : null), n = y(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: re(t),
    jsonData: re(n)
  };
}
export {
  vn as Accordion,
  dn as Button,
  cn as Card,
  fn as Carousel,
  gn as Field,
  pn as Flyout,
  bn as Form,
  mn as Hero,
  un as Loader,
  Ht as useCarousel,
  Jt as useFlyout,
  hn as useFormData
};
