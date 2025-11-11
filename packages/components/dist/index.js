import { defineComponent as C, computed as y, createBlock as $, openBlock as v, resolveDynamicComponent as it, normalizeClass as k, withCtx as R, createElementBlock as O, createCommentVNode as j, normalizeStyle as Kt, unref as u, renderSlot as h, createElementVNode as L, ref as B, watch as _e, onMounted as Ae, onUnmounted as Be, useSlots as Zt, provide as D, withModifiers as Jt, inject as G, readonly as Oe, normalizeProps as te, guardReactiveProps as ne, createVNode as ce, Transition as Qt, useId as Ve, createTextVNode as lt, toDisplayString as en, toValue as U, onBeforeUnmount as tn, nextTick as nn, shallowRef as Xe, cloneVNode as on, Fragment as ct, h as Ye, getCurrentInstance as rn, mergeProps as F, mergeDefaults as dt, renderList as an } from "vue";
function Re(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
var sn = (e) => typeof e == "object" && e !== null;
function ze(e) {
  return Object.fromEntries(Object.entries(e ?? {}).filter(([t, n]) => n !== void 0));
}
var $e = (e) => e === "base";
function Oe(e) {
  return e.slice().filter((t) => !$e(t));
}
function Ue(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
}
function dn(e) {
  let t = "", n;
  for (n = Math.abs(e); n > 52; n = n / 52 | 0) t = Ue(n % 52) + t;
  return Ue(n % 52) + t;
}
function Ve(e, t) {
  let r = t.length;
  for (; r; ) e = e * 33 ^ t.charCodeAt(--r);
  return e;
}
function Me(e) {
  return Ee(Ve(5381, e) >>> 0);
}
var ut = /\s*!(important)?/i;
function pn(e) {
  return typeof e == "string" ? ut.test(e) : !1;
}
function gn(e) {
  return typeof e == "string" ? e.replace(ut, "").trim() : e;
}
function ft(e) {
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
}, mn = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function Me(...e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((o) => {
    if (mn.has(o)) return;
    const r = t[o], a = n[o];
    Re(r) && Re(a) ? t[o] = Me(r, a) : t[o] = a;
  }), t), {});
}
var bn = (e) => e != null;
function pt(e, t, n = {}) {
  const { stop: o, getKey: r } = n;
  function a(s, i = []) {
    if (sn(s)) {
      const l = {};
      for (const [c, p] of Object.entries(s)) {
        const b = (r == null ? void 0 : r(c, p)) ?? c, f = [...i, b];
        if (o != null && o(s, f))
          return t(s, i);
        const d = a(p, f);
        bn(d) && (l[b] = d);
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
function gt(e, t, n = !0) {
  const { utility: o, conditions: r } = t, { hasShorthand: a, resolveShorthand: s } = o;
  return pt(
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
  return de(({ base: s, ...i } = {}) => {
    const l = Object.assign(i, s), c = gt(l, e), p = /* @__PURE__ */ new Set();
    return pt(c, (b, f) => {
      if (b == null) return;
      const d = pn(b), [x, ...w] = o.shift(f), P = cn(w), z = t.transform(x, gn(yn(b)));
      let _ = a(P, z.className);
      d && (_ = `${_}!`), p.add(_);
    }), Array.from(p).join(" ");
  });
}
function _n(...e) {
  return e.flat().filter((t) => Re(t) && Object.keys(ze(t)).length > 0);
}
function Cn(e) {
  function t(r) {
    const a = _n(...r);
    return a.length === 1 ? a : a.map((s) => gt(s, e));
  }
  function n(...r) {
    return Me(...t(r));
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
}, En = (e, t) => e.filter((n) => n.css[t]).map((n) => ({ ...n, css: n.css[t] }));
function mt(e, ...t) {
  const n = Object.getOwnPropertyDescriptors(e), o = Object.keys(n), r = (s) => {
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
const Rn = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,3xs,3xsOnly,3xsDown,2xs,2xsOnly,2xsDown,xs,xsOnly,xsDown,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,3xl,3xlOnly,3xlDown,4xl,4xlOnly,4xlDown,3xsTo2xs,3xsToXs,3xsToSm,3xsToMd,3xsToLg,3xsToXl,3xsTo2xl,3xsTo3xl,3xsTo4xl,2xsToXs,2xsToSm,2xsToMd,2xsToLg,2xsToXl,2xsTo2xl,2xsTo3xl,2xsTo4xl,xsToSm,xsToMd,xsToLg,xsToXl,xsTo2xl,xsTo3xl,xsTo4xl,smToMd,smToLg,smToXl,smTo2xl,smTo3xl,smTo4xl,mdToLg,mdToXl,mdTo2xl,mdTo3xl,mdTo4xl,lgToXl,lgTo2xl,lgTo3xl,lgTo4xl,xlTo2xl,xlTo3xl,xlTo4xl,2xlTo3xl,2xlTo4xl,3xlTo4xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base", bt = new Set(Rn.split(",")), $n = /^@|&|&$/;
function Ke(e) {
  return bt.has(e) || $n.test(e);
}
const Pn = /^_/, An = /&|@/;
function Bn(e) {
  return e.map((t) => bt.has(t) ? t.replace(Pn, "") : An.test(t) ? `[${ft(t.trim())}]` : t);
}
function Vn(e) {
  return e.sort((t, n) => {
    const o = Ke(t), r = Ke(n);
    return o && !r ? 1 : !o && r ? -1 : 0;
  });
}
const zn = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor", vt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
zn.split(",").forEach((e) => {
  const [t, n] = e.split(":"), [o, ...r] = n.split("/");
  vt.set(t, o), r.length && r.forEach((a) => {
    ht.set(a === "1" ? o : a, t);
  });
});
const Ze = (e) => ht.get(e) || e, yt = {
  conditions: {
    shift: nt,
    finalize: ot,
    breakpoints: { keys: ["base", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] }
  },
  utility: {
    transform: (e, t) => {
      const n = Ze(e);
      return { className: `${vt.get(n) || kn(n)}_${ft(t)}` };
    },
    hasShorthand: !0,
    toHash: (e, t) => t(e.join(":")),
    resolveShorthand: Ze
  }
}, Mn = xn(yt), E = (...e) => Mn(K(...e));
E.raw = (...e) => K(...e);
const { mergeCss: K } = Cn(yt);
function jn() {
  let e = "", t = 0, n;
  for (; t < arguments.length; )
    (r = arguments[t++]) && typeof r == "string" && (e && (e += " "), e += r);
  return e;
}
const Je = (e) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...e
});
function ue(e) {
  const { base: t, variants: n, defaultVariants: o, compoundVariants: r } = Je(e), a = (f) => ({ ...o, ...ze(f) });
  function s(f = {}) {
    var P;
    const d = a(f);
    let x = { ...t };
    for (const [z, _] of Object.entries(d))
      (P = n[z]) != null && P[_] && (x = K(x, n[z][_]));
    const w = Nn(r, d);
    return K(x, w);
  }
  function i(f) {
    const d = Je(f.config), x = On(f.variantKeys, Object.keys(n));
    return ue({
      base: K(t, d.base),
      variants: Object.fromEntries(
        x.map((w) => [w, K(n[w], d.variants[w])])
      ),
      defaultVariants: Me(o, d.defaultVariants),
      compoundVariants: [...r, ...d.compoundVariants]
    });
  }
  function l(f) {
    return E(s(f));
  }
  const c = Object.keys(n);
  function p(f) {
    return mt(f, c);
  }
  const b = Object.fromEntries(Object.entries(n).map(([f, d]) => [f, Object.keys(d)]));
  return Object.assign(de(l), {
    __cva__: !0,
    variantMap: b,
    variantKeys: c,
    raw: s,
    config: e,
    merge: i,
    splitVariantProps: x,
    getVariantProps: a
  });
}
function Nn(e, t) {
  let n = {};
  return e.forEach((o) => {
    Object.entries(o).every(([a, l]) => a === "css" ? !0 : (Array.isArray(l) ? l : [l]).some((c) => t[a] === c)) && (r = M(r, o.css));
  }), r;
}
function xt(e) {
  const t = Object.entries(Tn(e)).map(([b, f]) => [b, ue(f)]), n = e.defaultVariants ?? {}, o = t.reduce((b, [f, d]) => (e.className && (b[f] = d.config.className), b), {});
  function r(b) {
    const f = t.map(([d, x]) => [d, jn(x(b), o[d])]);
    return Object.fromEntries(f);
  }
  function a(b) {
    const f = t.map(([d, x]) => [d, x.raw(b)]);
    return Object.fromEntries(f);
  }
  const s = e.variants ?? {}, i = Object.keys(s);
  function l(b) {
    return mt(b, i);
  }
  const c = (b) => ({ ...n, ...ze(b) }), p = Object.fromEntries(
    Object.entries(s).map(([b, f]) => [b, Object.keys(f)])
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
const Ln = ["innerHTML"], wa = /* @__PURE__ */ C({
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
    }), i = y(() => E(
      s.raw({ color: t.color, size: t.size, order: t.order })
    ));
    return (l, c) => (v(), $(it(n.value), {
      class: k(["btn", i.value]),
      type: o.value,
      href: t.to,
      title: t.label,
      target: n.value,
      rel: a.value,
      disabled: t.disabled === !0 ? !0 : null
    }, {
      default: R(() => [
        t.icon ? (v(), O("span", {
          key: 0,
          class: k([
            "btn-icon",
            "icon",
            `icon-${t.icon}`
          ])
        }, null, 2)) : j("", !0),
        t.label ? (v(), O("span", {
          key: 1,
          innerHTML: t.label,
          class: "btn-label"
        }, null, 8, Ln)) : j("", !0)
      ]),
      _: 1
    }, 8, ["class", "type", "href", "title", "target", "rel", "disabled"]));
  }
}), Dn = ["aria-label"], Sa = /* @__PURE__ */ C({
  __name: "Loader",
  props: {
    size: { default: 40 },
    label: { default: "Loading" }
  },
  setup(e) {
    return (t, n) => (v(), O("div", {
      class: k([
        "loader",
        u(E)({
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
      style: Kt({
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
    const t = e, o = xt({
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
    return (r, a) => (v(), O("div", {
      class: k(u(o).root)
    }, [
      h(r.$slots, "wrapper-before"),
      L("div", {
        class: k(u(o).container)
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
    return (t, n) => (v(), O("div", {
      class: k(u(E)({
        padding: "xl"
      }))
    }, [
      p(t.$slots, "default")
    ], 2));
  }
}), ka = {
  Root: Fn,
  Body: Wn
};
function gt(e, t, r) {
  const o = I(null), n = I(0), a = I([]), l = I(null), i = I(null), c = {
    itemActiveClass: "active",
    itemVisibleClass: "visible"
  }, c = y(() => (o.value ?? []).length > 0 ? o.value[r.value] : null), p = y(() => {
    var _;
    return Math.ceil((((_ = o.value) == null ? void 0 : _.length) ?? 0) / a.value.length);
  }), b = y(() => {
    var S;
    const _ = ((S = o.value) == null ? void 0 : S.length) ?? 0;
    return _ > 0 && a.value.length === _;
  });
  _e(c, (_, S) => {
    _ && _.classList.add(l.itemActiveClass), S && S.classList.remove(l.itemActiveClass);
  });
  const g = (b) => {
    if (!o.value) return null;
    if (_ === "first") {
      const S = a.value[0];
      return S ? Array.from(o.value).indexOf(S) - 1 : null;
    }
    if (_ === "last") {
      const S = a.value[a.value.length - 1];
      return S ? Array.from(o.value).indexOf(S) + 1 : null;
    }
    return null;
  }, d = () => {
    const _ = s.value === "next" ? "end" : "start", S = s.value === "next" ? r.value + 1 : r.value - 1;
    if (!o.value || o.value[S] === void 0) {
      console.warn("No more items to scroll", s.value);
      return;
    }
    o.value[S].style.scrollSnapAlign = _, o.value[S].scrollIntoView({ behavior: "smooth" }), r.value = S;
  }, x = () => {
    const _ = s.value === "prev" ? f("first") : f("last");
    if (!(!o.value || !o.value.length)) {
      if (b === null || !o.value || o.value[b] === void 0) {
        console.warn("No more items to scroll", l.value);
        return;
      }
      o.value[b].scrollIntoView({ behavior: "smooth" }), n.value = b;
    }
  }, w = () => {
    s.value = "next", e.scrollMode === "item" ? d() : e.scrollMode === "viewport" ? x() : console.warn("No more items to scroll next");
  }, P = () => {
    s.value = "prev", e.scrollMode === "item" ? d() : e.scrollMode === "viewport" ? x() : console.warn("No more items to scroll prev");
  }, z = (_) => {
    _.deltaY > 0 ? w() : P();
  };
  return Ae(() => {
    var _;
    o.value = n.default ? ((_ = t.value) == null ? void 0 : _.querySelectorAll(":scope > *")) ?? null : null, i.value = new IntersectionObserver((S) => {
      S.forEach((N) => {
        N.isIntersecting ? (N.target.dataset.carouselVisibility = "visible", N.target.classList.add(l.itemVisibleClass)) : (delete N.target.dataset.carouselVisibility, N.target.classList.remove(l.itemVisibleClass));
      }), a.value = Array.from(o.value ?? []).filter((N) => N.dataset.carouselVisibility === "visible");
    }, {
      root: t.value,
      rootMargin: "0px",
      threshold: 1
    }), o.value && i.value && o.value.forEach((S) => i.value.observe(S));
  }), Be(() => {
    t.value = null, o.value = null, r.value = 0, i.value && i.value.disconnect();
  }), {
    handleNext: B,
    handlePrev: E,
    handleWheel: L,
    carouselItems: o,
    carouselItem: d,
    currentCarouselItemIndex: n,
    visibleCarouselItems: a,
    scrollDirection: s,
    allItemsVisible: b,
    pages: p
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
    const t = e, n = Zt(), o = B(null), {
      handleNext: r,
      handlePrev: a,
      handleWheel: l,
      carouselItems: i,
      carouselItem: l,
      visibleCarouselItems: c,
      currentCarouselItemIndex: p,
      scrollDirection: b,
      allItemsVisible: f
    } = Hn(t, o, n);
    return D("carousel", o), D("handleNext", r), D("handlePrev", a), D("carouselItems", i), D("carouselItem", l), D("visibleCarouselItems", c), D("currentCarouselItemIndex", p), D("scrollDirection", b), D("allItemsVisible", f), (d, x) => (v(), O("div", {
      class: k(u(E)(
        u(E).raw({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%"
        }),
        t.classWrapper
      ))
    }, [
      h(d.$slots, "carousel-before"),
      L("ul", {
        ref_key: "carousel",
        ref: o,
        class: k(u(E)(
          u(E).raw({
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
        onWheel: x[0] || (x[0] = Jt(
          //@ts-ignore
          (...w) => u(s) && u(s)(...w),
          ["prevent"]
        ))
      }, [
        h(d.$slots, "default")
      ], 34),
      h(d.$slots, "carousel-after")
    ], 2));
  }
}), pt = /* @__PURE__ */ S({
  __name: "CarouselItem",
  setup(e) {
    return (t, n) => (v(), O("li", {
      class: k(u(E)({
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
    ), (l, c) => (v(), O("div", null, [
      h(l.$slots, "action-prev", {
        handlePrev: u(o),
        disabled: t.value
      }, () => [
        L("button", {
          onClick: c[0] || (c[0] = //@ts-ignore
          (...p) => u(o) && u(o)(...p)),
          disabled: t.value
        }, " Prev ", 8, ft)
      ]),
      h(l.$slots, "action-next", {
        handleNext: u(r),
        disabled: n.value
      }, () => [
        L("button", {
          onClick: c[1] || (c[1] = //@ts-ignore
          (...p) => u(r) && u(r)(...p)),
          disabled: n.value
        }, " Next ", 8, Yn)
      ])
    ]));
  }
}), Ia = {
  Root: Gn,
  Item: qn,
  Navigation: Un
};
function xt(e) {
  const t = I(!1), r = (a) => {
    a.preventDefault(), t.value = !0;
  }, o = (a) => {
    a.preventDefault(), t.value = !1;
  }, n = () => {
    t.value ? t.value = !1 : t.value = !0;
  };
  return Ae(() => {
    e.el.value && (e.el.value.addEventListener("mouseenter", n), e.el.value.addEventListener("mouseleave", o));
  }), Be(() => {
    e.el.value && (e.el.value.removeEventListener("mouseenter", n), e.el.value.removeEventListener("mouseleave", o));
  }), {
    open: Oe(t),
    toggle: r
  };
}
const _t = /* @__PURE__ */ C({
  __name: "FlyoutDropdown",
  props: {
    direction: { default: "left" }
  },
  setup(e) {
    const t = e;
    return (n, o) => (v(), O("div", {
      class: k(u(E)(
        u(E).raw({
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
    const t = B(), n = e, { open: o, toggle: r } = Kn({ el: t });
    return (a, s) => (v(), O("div", {
      ref_key: "el",
      ref: t,
      class: k(
        u(E)(
          u(E).raw({
            position: "relative",
            zIndex: 20
          })
        )
      )
    }, [
      h(a.$slots, "trigger", te(ne({ open: u(o) })), () => [
        L("button", {
          type: "button",
          class: k([
            u(E)(
              u(E).raw({
                cursor: "pointer"
              }),
              r.classTrigger
            ),
            u(o) ? "active" : null
          ]),
          "aria-haspopup": "true",
          "aria-label": e.ariaLabel || e.label,
          "aria-expanded": u(o),
          onClick: s[0] || (s[0] = //@ts-ignore
          (...i) => u(r) && u(r)(...i))
        }, [
          n.icon ? (v(), O("span", {
            key: 0,
            class: k(n.icon)
          }, null, 2)) : j("", !0),
          h(a.$slots, "trigger-label", {}, () => [
            L("span", { innerHTML: e.label }, null, 8, Jn)
          ], !0),
          h(a.$slots, "trigger-icon", te(ne({ open: u(o) })), void 0, !0)
        ], 10, Zn)
      ], !0),
      h(a.$slots, "dropdown", te(ne({ open: u(o) })), () => [
        ce(Qt, { name: "flyout" }, {
          default: R(() => [
            u(o) ? (v(), $(_t, { key: 0 }, {
              default: R(() => [
                p(a.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })) : j("", !0)
          ]),
          _: 3
        })
      ], !0)
    ], 2));
  }
}), eo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, to = /* @__PURE__ */ eo(Qn, [["__scopeId", "data-v-a1ce9f68"]]), Ta = {
  Root: to,
  Dropdown: _t
}, no = ["innerHTML"], oo = ["innerHTML"], ro = /* @__PURE__ */ C({
  __name: "HeroLead",
  props: {
    headline: {},
    headlineTag: { default: "h1" },
    description: {},
    alignItems: { default: "start" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, n = xt({
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
    return (r, a) => (v(), O("div", {
      class: k(o.value.root)
    }, [
      h(r.$slots, "headline", {}, () => [
        e.headline ? (v(), $(it(e.headlineTag), {
          key: 0,
          class: k(o.value.headline)
        }, {
          default: R(() => [
            L("span", { innerHTML: e.headline }, null, 8, no)
          ]),
          _: 1
        }, 8, ["class"])) : j("", !0)
      ]),
      h(r.$slots, "description", {}, () => [
        e.description ? (v(), O("div", {
          key: 0,
          innerHTML: e.description,
          class: k(o.value.description)
        }, null, 10, oo)) : j("", !0)
      ]),
      p(n.$slots, "actions")
    ], 2));
  }
}), Ea = {
  Lead: ro
}, Ct = /* @__PURE__ */ C({
  __name: "FieldBase",
  props: {
    id: { default: void 0 },
    error: { default: null },
    message: { default: null },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = Ve(), o = y(() => t.id || `field-${n}`), r = y(() => t.error ? `${o.value}-error` : null), a = y(() => t.message ? `${o.value}-message` : null), s = y(() => !!t.error);
    D("fieldContext", {
      fieldId: o.value,
      errorId: n.value,
      messageId: a.value,
      hasError: l.value,
      errorMessage: t.error,
      message: t.message
    });
    const i = E({
      display: "flex",
      flexDirection: "column",
      gap: "xs"
    });
    return (l, c) => (v(), O("div", {
      class: k([u(i), t.class])
    }, [
      p(c.$slots, "default")
    ], 2));
  }
}), Bt = /* @__PURE__ */ S({
  __name: "FieldRequired",
  setup(e) {
    return (t, n) => (v(), O("span", {
      class: k(u(E)({
        color: "danger",
        fontWeight: "800"
      }))
    }, " * ", 2));
  }
}), so = ["for", "aria-disabled"], wt = /* @__PURE__ */ C({
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
    return (a, s) => (v(), O("label", {
      for: o.value,
      class: k([
        u(r)({
          size: t.size,
          disabled: t.disabled
        }),
        t.class
      ]),
      "aria-disabled": t.disabled
    }, [
      lt(en(t.label) + " ", 1),
      t.required ? (v(), $(ao, { key: 0 })) : j("", !0)
    ], 10, so));
  }
}), io = ["id", "innerHTML"], St = /* @__PURE__ */ C({
  __name: "FieldMessage",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = G("fieldContext", null), o = y(() => t.message || (n == null ? void 0 : n.message) || null), r = y(() => t.id || (n == null ? void 0 : n.messageId) || void 0), a = E({
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
    return (s, i) => o.value ? (v(), O("span", {
      key: 0,
      id: r.value,
      class: k([u(a), t.class]),
      innerHTML: o.value
    }, null, 10, io)) : j("", !0);
  }
}), lo = ["id", "innerHTML"], kt = /* @__PURE__ */ C({
  __name: "FieldError",
  props: {
    message: { default: null },
    id: { default: void 0 },
    class: { default: void 0 }
  },
  setup(e) {
    const t = e, n = G("fieldContext", null), o = y(() => t.message || (n == null ? void 0 : n.errorMessage) || null), r = y(() => t.id || (n == null ? void 0 : n.errorId) || void 0), a = E({
      display: "block",
      paddingX: "xs",
      fontSize: "sm",
      fontWeight: "500",
      color: "danger",
      wordBreak: "break-word"
    });
    return (s, i) => o.value ? (v(), O("span", {
      key: 0,
      id: r.value,
      class: k([u(a), t.class]),
      role: "alert",
      "aria-live": "polite",
      innerHTML: o.value
    }, null, 10, lo)) : j("", !0);
  }
}), co = ["id", "name", "type", "placeholder", "value", "disabled", "required", "autocomplete", "aria-invalid", "aria-describedby"], It = /* @__PURE__ */ C({
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
    return (c, p) => (v(), O("input", {
      id: e.id,
      name: e.name,
      class: k([u(l)({ size: e.size, valid: n.valid }), n.class]),
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
    return (s, i) => (v(), $(Ct, null, {
      default: R(() => [
        e.label ? (v(), $(wt, {
          key: 0,
          label: e.label,
          for: e.id,
          required: e.required,
          size: "sm"
        }, null, 8, ["label", "for", "required"])) : j("", !0),
        ce(It, {
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
        e.message || e.error ? (v(), O("div", {
          key: 1,
          class: k(u(E)({
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: "md"
          }))
        }, [
          e.message ? (v(), $(St, {
            key: 0,
            message: e.message
          }, null, 8, ["message"])) : j("", !0),
          e.error ? (v(), $(kt, {
            key: 1,
            message: e.error
          }, null, 8, ["message"])) : j("", !0)
        ], 2)) : j("", !0)
      ]),
      _: 1
    }));
  }
}), Oa = {
  Input: uo,
  Base: Ct,
  Label: wt,
  Error: kt,
  Message: St
}, fo = ["action", "method", "id", "name", "aria-label"], po = ["placeholder"], go = /* @__PURE__ */ C({
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
    return (a, s) => (v(), O("form", {
      ref_key: "promptForm",
      ref: o,
      action: e.action,
      method: e.method,
      id: e.id,
      name: e.name,
      "aria-label": e.ariaLabel,
      onSubmit: r,
      class: k(u(E)({
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
        L("textarea", {
          name: "message",
          class: k(u(E)({
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
    return (t, n) => (v(), O("div", {
      class: k(u(E)({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "xl",
        alignItems: "end"
      }))
    }, [
      L("div", {
        class: k(u(E)({
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
      L("div", {
        class: k(u(E)({
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
}), Ra = {
  Input: It,
  Prompt: go,
  PromptFooter: mo
}, Z = (e) => {
  const t = Symbol(e);
  return [(r) => D(t, r), (r) => G(t, r), t];
}, [Tt, fe] = Z("AccordionContext"), bo = /* @__PURE__ */ C({
  __name: "accordion-context",
  setup(e) {
    const t = fe();
    return (n, o) => h(n.$slots, "default", te(ne(u(t))));
  }
});
function vo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
var ho = (e) => e[0], yo = (e) => e[e.length - 1], xo = (e, ...t) => e.concat(t), _o = (e, ...t) => e.filter((n) => !t.includes(n)), Qe = (e) => (e == null ? void 0 : e.constructor.name) === "Array", Co = (e, t) => {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (!je(e[n], t[n])) return !1;
  return !0;
}, je = (e, t) => {
  if (Object.is(e, t)) return !0;
  if (e == null && t != null || e != null && t == null) return !1;
  if (typeof (e == null ? void 0 : e.isEqual) == "function" && typeof (t == null ? void 0 : t.isEqual) == "function")
    return e.isEqual(t);
  if (typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  if (Qe(e) && Qe(t))
    return Co(Array.from(e), Array.from(t));
  if (typeof e != "object" || typeof t != "object") return !1;
  const n = Object.keys(t ?? /* @__PURE__ */ Object.create(null)), o = n.length;
  for (let r = 0; r < o; r++)
    if (!Reflect.has(e, n[r])) return !1;
  for (let r = 0; r < o; r++) {
    const a = n[r];
    if (!je(e[a], t[a])) return !1;
  }
  return !0;
}, wo = (e) => e != null && typeof e == "object", be = (e) => typeof e == "string", le = (e) => typeof e == "function", So = (e, t) => Object.prototype.hasOwnProperty.call(e, t), ko = (e) => Object.prototype.toString.call(e), Et = Function.prototype.toString, Io = Et.call(Object), To = (e) => {
  if (!wo(e) || ko(e) != "[object Object]" || Ro(e)) return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  const n = So(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Et.call(n) == Io;
}, Eo = (e) => typeof e == "object" && e !== null && "$$typeof" in e && "props" in e, Oo = (e) => typeof e == "object" && e !== null && "__v_isVNode" in e, Ro = (e) => Eo(e) || Oo(e), $o = (...e) => (...t) => {
  e.forEach(function(n) {
    n == null || n(...t);
  });
}, Y = (e) => typeof e == "number" ? `${e}px` : e;
function Ot(e) {
  if (!To(e) || e === void 0) return e;
  const t = Reflect.ownKeys(e).filter((o) => typeof o == "string"), n = {};
  for (const o of t) {
    const r = e[o];
    r !== void 0 && (n[o] = Ot(r));
  }
  return n;
}
function $e(...e) {
  const t = e.length === 1 ? e[0] : e[1];
  (e.length === 2 ? e[0] : !0) && process.env.NODE_ENV !== "production" && console.warn(t);
}
function Po(e, t) {
  if (e == null) throw new Error(t());
}
var Ao = Object.defineProperty, Bo = (e, t, n) => t in e ? Ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Se = (e, t, n) => Bo(e, typeof t != "symbol" ? t + "" : t, n), Vo = () => {
}, Ce = (e) => typeof e == "object" && e !== null, H = (e) => e ? "" : void 0, zo = 1, Mo = 9, jo = 11, pe = (e) => Ce(e) && e.nodeType === zo && typeof e.nodeName == "string", Rt = (e) => Ce(e) && e.nodeType === Mo, No = (e) => Ce(e) && e === e.window, Lo = (e) => Ce(e) && e.nodeType !== void 0, Do = (e) => Lo(e) && e.nodeType === jo && "host" in e, Fo = (e) => pe(e) ? e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0 : !1;
function Wo(e) {
  if (!e) return !1;
  const t = e.getRootNode();
  return Pt(t) === e;
}
function Ho(e) {
  return Rt(e) ? e : No(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document;
}
function $t(e) {
  var t;
  return Do(e) ? $t(e.host) : Rt(e) ? e.defaultView ?? window : pe(e) ? ((t = e.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window;
}
function Pt(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot; ) {
    const n = t.shadowRoot.activeElement;
    if (!n || n === t) break;
    t = n;
  }
  return t;
}
var ke = /* @__PURE__ */ new WeakMap();
function et(e) {
  return ke.has(e) || ke.set(e, $t(e).getComputedStyle(e)), ke.get(e);
}
var At = () => typeof document < "u";
function Go() {
  const e = navigator.userAgentData;
  return (e == null ? void 0 : e.platform) ?? navigator.platform;
}
var Ne = (e) => At() && e.test(Go()), qo = (e) => At() && e.test(navigator.vendor), Xo = () => Ne(/^iPhone/i), Yo = () => Ne(/^iPad/i) || Bt() && navigator.maxTouchPoints > 1, Uo = () => Xo() || Yo(), Ko = () => Bt() || Uo(), Bt = () => Ne(/^Mac/i), Zo = () => Ko() && qo(/apple/i);
function Jo(e) {
  var t, n, o;
  return ((t = e.composedPath) == null ? void 0 : t.call(e)) ?? ((o = (n = e.nativeEvent) == null ? void 0 : n.composedPath) == null ? void 0 : o.call(n));
}
function tt(e) {
  const t = Jo(e);
  return (t == null ? void 0 : t[0]) ?? e.target;
}
var Qo = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
}, nt = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
function er(e, t = {}) {
  const { dir: n = "ltr", orientation: o = "horizontal" } = t;
  let r = e.key;
  return r = Qo[r] ?? r, n === "rtl" && o === "horizontal" && r in nt && (r = nt[r]), r;
}
var tr = (e) => pe(e) && e.tagName === "IFRAME";
function nr(e) {
  const t = e.getAttribute("tabindex");
  return t ? parseInt(t, 10) : NaN;
}
var or = (e) => nr(e) < 0;
function rr(e, t) {
  if (!t) return null;
  if (t === !0)
    return e.shadowRoot || null;
  const n = t(e);
  return (n === !0 ? e.shadowRoot : n) || null;
}
function ar(e, t, n) {
  const o = [...e], r = [...e], a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  e.forEach((l, c) => s.set(l, c));
  let i = 0;
  for (; i < r.length; ) {
    const l = r[i++];
    if (!l || a.has(l)) continue;
    a.add(l);
    const c = rr(l, t);
    if (c) {
      const p = Array.from(c.querySelectorAll(Le)).filter(n), b = s.get(l);
      if (b !== void 0) {
        const f = b + 1;
        o.splice(f, 0, ...p), p.forEach((d, x) => {
          s.set(d, f + x);
        });
        for (let d = f + p.length; d < o.length; d++)
          s.set(o[d], d);
      } else {
        const f = o.length;
        o.push(...p), p.forEach((d, x) => {
          s.set(d, f + x);
        });
      }
      r.push(...p);
    }
  }
  return o;
}
var Le = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
function sr(e) {
  return !pe(e) || e.closest("[inert]") ? !1 : e.matches(Le) && Fo(e);
}
function Vt(e, t = {}) {
  if (!e) return [];
  const { includeContainer: n, getShadowRoot: o } = t, r = Array.from(e.querySelectorAll(Le));
  n && Ie(e) && r.unshift(e);
  const a = [];
  for (const s of r)
    if (Ie(s)) {
      if (tr(s) && s.contentDocument) {
        const i = s.contentDocument.body;
        a.push(...Vt(i, { getShadowRoot: o }));
        continue;
      }
      a.push(s);
    }
  if (o) {
    const s = ar(a, o, Ie);
    return !s.length && n ? r : s;
  }
  return !a.length && n ? r : a;
}
function Ie(e) {
  return pe(e) && e.tabIndex > 0 ? !0 : sr(e) && !or(e);
}
var ir = class zt {
  constructor() {
    Se(this, "id", null), Se(this, "fn_cleanup"), Se(this, "cleanup", () => {
      this.cancel();
    });
  }
  static create() {
    return new zt();
  }
  request(t) {
    this.cancel(), this.id = globalThis.requestAnimationFrame(() => {
      this.id = null, this.fn_cleanup = t == null ? void 0 : t();
    });
  }
  cancel() {
    var t;
    this.id !== null && (globalThis.cancelAnimationFrame(this.id), this.id = null), (t = this.fn_cleanup) == null || t.call(this), this.fn_cleanup = void 0;
  }
  isActive() {
    return this.id !== null;
  }
};
function ve(e) {
  const t = ir.create();
  return t.request(e), t.cleanup;
}
function lr(e) {
  const t = /* @__PURE__ */ new Set();
  function n(o) {
    const r = globalThis.requestAnimationFrame(o);
    t.add(() => globalThis.cancelAnimationFrame(r));
  }
  return n(() => n(e)), function() {
    t.forEach((r) => r());
  };
}
function cr(e, t) {
  const { callback: n } = t;
  if (!e) return;
  const o = e.ownerDocument.defaultView || window, r = new o.MutationObserver(n);
  return r.observe(e, { childList: !0, subtree: !0 }), () => r.disconnect();
}
function dr(e, t) {
  const { defer: n } = t, o = n ? ve : (a) => a(), r = [];
  return r.push(
    o(() => {
      const a = typeof e == "function" ? e() : e;
      r.push(cr(a, t));
    })
  ), () => {
    r.forEach((a) => a == null ? void 0 : a());
  };
}
function ur(e, t) {
  return Array.from((e == null ? void 0 : e.querySelectorAll(t)) ?? []);
}
var Mt = (e) => e.id;
function fr(e, t, n = Mt) {
  return e.find((o) => n(o) === t);
}
function jt(e, t, n = Mt) {
  const o = fr(e, t, n);
  return o ? e.indexOf(o) : -1;
}
function pr(e, t, n = !0) {
  let o = jt(e, t);
  return o = n ? (o + 1) % e.length : Math.min(o + 1, e.length - 1), e[o];
}
function gr(e, t, n = !0) {
  let o = jt(e, t);
  return o === -1 ? n ? e[e.length - 1] : null : (o = n ? (o - 1 + e.length) % e.length : Math.max(0, o - 1), e[o]);
}
function mr(e, t, n) {
  const o = e.getAttribute(t), r = o != null;
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, o) : e.removeAttribute(t);
  };
}
function br(e, t) {
  if (!e) return Vo;
  const n = Object.keys(t).reduce((o, r) => (o[r] = e.style.getPropertyValue(r), o), {});
  return Object.assign(e.style, t), () => {
    Object.assign(e.style, n), e.style.length === 0 && e.removeAttribute("style");
  };
}
var vr = (...e) => e.map((t) => {
  var n;
  return (n = t == null ? void 0 : t.trim) == null ? void 0 : n.call(t);
}).filter(Boolean).join(" "), hr = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g, ot = (e) => {
  const t = {};
  let n;
  for (; n = hr.exec(e); )
    t[n[1]] = n[2];
  return t;
}, yr = (e, t) => {
  if (be(e)) {
    if (be(t)) return `${e};${t}`;
    e = ot(e);
  } else be(t) && (t = ot(t));
  return Object.assign({}, e ?? {}, t ?? {});
};
function xr(...e) {
  let t = {};
  for (let n of e) {
    if (!n) continue;
    for (let r in t) {
      if (r.startsWith("on") && typeof t[r] == "function" && typeof n[r] == "function") {
        t[r] = $o(n[r], t[r]);
        continue;
      }
      if (r === "className" || r === "class") {
        t[r] = vr(t[r], n[r]);
        continue;
      }
      if (r === "style") {
        t[r] = yr(t[r], n[r]);
        continue;
      }
      t[r] = n[r] !== void 0 ? n[r] : t[r];
    }
    for (let r in n)
      t[r] === void 0 && (t[r] = n[r]);
    const o = Object.getOwnPropertySymbols(n);
    for (let r of o)
      t[r] = n[r];
  }
  return t;
}
function _r() {
  return {
    and: (...e) => function(n) {
      return e.every((o) => n.guard(o));
    },
    or: (...e) => function(n) {
      return e.some((o) => n.guard(o));
    },
    not: (e) => function(n) {
      return !n.guard(e);
    }
  };
}
var Q = /* @__PURE__ */ ((e) => (e.NotStarted = "Not Started", e.Started = "Started", e.Stopped = "Stopped", e))(Q || {}), Te = "__init__";
function Cr(e) {
  const t = () => {
    var s;
    return ((s = e.getRootNode) == null ? void 0 : s.call(e)) ?? document;
  }, n = () => Ho(t());
  return {
    ...e,
    getRootNode: t,
    getDoc: n,
    getWin: () => n().defaultView ?? window,
    getActiveElement: () => Pt(t()),
    isActiveElement: Wo,
    getById: (s) => t().getElementById(s)
  };
}
function wr(e) {
  return new Proxy({}, {
    get(t, n) {
      return n === "style" ? (o) => e({ style: o }).style : e;
    }
  });
}
var De = () => (e) => Array.from(new Set(e));
function Sr(e) {
  return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
}
var rt = {
  htmlFor: "for",
  className: "class",
  onDoubleClick: "onDblclick",
  onChange: "onInput",
  onFocus: "onFocusin",
  onBlur: "onFocusout",
  defaultValue: "value",
  defaultChecked: "checked"
}, kr = "viewBox,className,preserveAspectRatio,fillRule,clipPath,clipRule,strokeWidth,strokeLinecap,strokeLinejoin,strokeDasharray,strokeDashoffset,strokeMiterlimit".split(
  ","
);
function Ir(e) {
  return e in rt ? rt[e] : e.startsWith("on") ? `on${Sr(e.substr(2))}` : kr.includes(e) ? e : e.toLowerCase();
}
var Nt = wr((e) => {
  const t = {};
  for (const n in e) {
    const o = e[n];
    n === "children" ? typeof o == "string" ? t.innerHTML = o : process.env.NODE_ENV !== "production" && o != null && console.warn("[Vue Normalize Prop] : avoid passing non-primitive value as `children`") : t[Ir(n)] = e[n];
  }
  return t;
});
function he(e) {
  const t = e().defaultValue ?? e().value, n = e().isEqual ?? Object.is, o = Xe(t), r = y(() => e().value !== void 0), a = Xe(r.value ? e().value : o.value);
  return {
    initial: t,
    ref: a,
    get() {
      return r.value ? e().value : o.value;
    },
    set(s) {
      var c, p;
      const i = r.value ? e().value : o.value, l = le(s) ? s(i) : s;
      e().debug && console.log(`[bindable > ${e().debug}] setValue`, { next: l, prev: i }), r.value || (o.value = l), n(l, i) || (p = (c = e()).onChange) == null || p.call(c, l, i);
    },
    invoke(s, i) {
      var l, c;
      (c = (l = e()).onChange) == null || c.call(l, s, i);
    },
    hash(s) {
      var i, l;
      return ((l = (i = e()).hash) == null ? void 0 : l.call(i, s)) ?? String(s);
    }
  };
}
he.cleanup = (e) => {
  Be(() => e());
};
he.ref = (e) => {
  let t = e;
  return {
    get: () => t,
    set: (n) => {
      t = n;
    }
  };
};
function Tr(e) {
  const t = { current: e };
  return {
    get(n) {
      return t.current[n];
    },
    set(n, o) {
      t.current[n] = o;
    }
  };
}
var Er = (e, t) => {
  _e(
    () => [...e.map((n) => n())],
    (n, o) => {
      let r = !1;
      for (let a = 0; a < n.length; a++)
        if (!je(o[a], U(n[a]))) {
          r = !0;
          break;
        }
      r && t();
    }
  );
};
function Lt(e, t = {}) {
  var He, Ge, qe;
  const n = y(() => {
    const { id: m, ids: g, getRootNode: I } = U(t);
    return Cr({ id: m, ids: g, getRootNode: I });
  }), o = (...m) => {
    e.debug && console.log(...m);
  }, r = y(
    () => {
      var m;
      return ((m = e.props) == null ? void 0 : m.call(e, {
        props: Ot(U(t)),
        get scope() {
          return n.value;
        }
      })) ?? U(t);
    }
  ), a = Or(r), s = (He = e.context) == null ? void 0 : He.call(e, {
    prop: a,
    bindable: he,
    get scope() {
      return n.value;
    },
    flush: at,
    getContext() {
      return i;
    },
    getComputed() {
      return N;
    },
    getRefs() {
      return x;
    },
    getEvent() {
      return f();
    }
  }), i = {
    get(m) {
      var g;
      return (g = s[m]) == null ? void 0 : g.get();
    },
    set(m, g) {
      var I;
      (I = s[m]) == null || I.set(g);
    },
    initial(m) {
      var g;
      return (g = s[m]) == null ? void 0 : g.initial;
    },
    hash(m) {
      var I, T;
      const g = (I = s[m]) == null ? void 0 : I.get();
      return (T = s[m]) == null ? void 0 : T.hash(g);
    }
  };
  let l = /* @__PURE__ */ new Map(), c = null, p = { current: null }, b = { current: { type: "" } };
  const f = () => ({
    ...b.current,
    current() {
      return b.current;
    },
    previous() {
      return p.current;
    }
  }), d = () => ({
    ...X,
    matches(...m) {
      const g = X.get();
      return m.includes(g);
    },
    hasTag(m) {
      var I, T;
      const g = X.get();
      return !!((T = (I = e.states[g]) == null ? void 0 : I.tags) != null && T.includes(m));
    }
  }), x = Tr(((Ge = e.refs) == null ? void 0 : Ge.call(e, { prop: a, context: i })) ?? {}), w = () => ({
    state: d(),
    context: i,
    event: f(),
    prop: a,
    send: We,
    action: P,
    guard: z,
    track: Er,
    refs: x,
    computed: N,
    flush: at,
    get scope() {
      return n.value;
    },
    choose: S
  }), P = (m) => {
    const g = le(m) ? m(w()) : m;
    if (!g) return;
    const I = g.map((T) => {
      var M, V;
      const A = (V = (M = e.implementations) == null ? void 0 : M.actions) == null ? void 0 : V[T];
      return A || $e(`[zag-js] No implementation found for action "${JSON.stringify(T)}"`), A;
    });
    for (const T of I)
      T == null || T(w());
  }, z = (m) => {
    var g, I;
    return le(m) ? m(w()) : (I = (g = e.implementations) == null ? void 0 : g.guards) == null ? void 0 : I[m](w());
  }, _ = (m) => {
    const g = le(m) ? m(w()) : m;
    if (!g) return;
    const I = g.map((A) => {
      var V, re;
      const M = (re = (V = e.implementations) == null ? void 0 : V.effects) == null ? void 0 : re[A];
      return M || $e(`[zag-js] No implementation found for effect "${JSON.stringify(A)}"`), M;
    }), T = [];
    for (const A of I) {
      const M = A == null ? void 0 : A(w());
      M && T.push(M);
    }
    return () => T.forEach((A) => A == null ? void 0 : A());
  }, S = (m) => vo(m).find((g) => {
    let I = !g.guard;
    return be(g.guard) ? I = !!z(g.guard) : le(g.guard) && (I = g.guard(w())), I;
  }), N = (m) => {
    Po(e.computed, () => "[zag-js] No computed object found on machine");
    const g = e.computed[m];
    return g({
      context: i,
      event: f(),
      prop: a,
      refs: x,
      get scope() {
        return n.value;
      },
      computed: N
    });
  }, X = he(() => ({
    defaultValue: e.initialState({ prop: a }),
    onChange(m, g) {
      var T, A, M;
      if (g) {
        const V = l.get(g);
        V == null || V(), l.delete(g);
      }
      g && P((T = e.states[g]) == null ? void 0 : T.exit), P(c == null ? void 0 : c.actions);
      const I = _((A = e.states[m]) == null ? void 0 : A.effects);
      if (I && l.set(m, I), g === Te) {
        P(e.entry);
        const V = _(e.effects);
        V && l.set(Te, V);
      }
      P((M = e.states[m]) == null ? void 0 : M.entry);
    }
  }));
  let oe = Q.NotStarted;
  Ae(() => {
    const m = oe === Q.Started;
    oe = Q.Started, o(m ? "rehydrating..." : "initializing..."), X.invoke(X.initial, Te);
  }), tn(() => {
    oe = Q.Stopped, o("unmounting...");
    const m = l.values();
    for (const g of m) g == null || g();
    l = /* @__PURE__ */ new Map(), P(e.exit);
  });
  const We = (m) => {
    var V, re;
    if (oe !== Q.Started) return;
    p.current = b.current, b.current = m;
    let g = X.get();
    const I = (
      //@ts-expect-error
      ((V = e.states[g].on) == null ? void 0 : V[m.type]) ?? ((re = e.on) == null ? void 0 : re[m.type])
    ), T = S(I);
    if (!T) return;
    c = T;
    const A = T.target ?? g;
    o("transition", m.type, T.target || g, `(${T.actions})`);
    const M = A !== g;
    M ? X.set(A) : T.reenter && !M ? X.invoke(g, g) : P(T.actions);
  };
  return (qe = e.watch) == null || qe.call(e, w()), {
    state: d(),
    send: We,
    context: i,
    prop: a,
    get scope() {
      return n.value;
    },
    refs: x,
    computed: N,
    event: f(),
    getStatus: () => oe
  };
}
function Or(e) {
  return function(n) {
    return e.value[n];
  };
}
var at = (e) => {
  nn().then(() => {
    e();
  });
};
const Rr = C({
  name: "Dynamic",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var s;
      if (!n.default) return null;
      const o = Dt(n.default()), [r, ...a] = o;
      if (Object.keys(t).length > 0) {
        (s = r.props) == null || delete s.ref;
        const i = xr(t, r.props ?? {}), l = on(r, i);
        for (const c in i)
          c.startsWith("on") && (l.props || (l.props = {}), l.props[c] = i[c]);
        return o.length === 1 ? l : [l, ...a];
      }
      return o;
    };
  }
});
function Dt(e) {
  return e ? e.flatMap((t) => t.type === ct ? Dt(t.children) : [t]) : [];
}
const $r = "br, hr, img, input, area, textarea".split(", "), Pr = (e) => typeof e == "string" && $r.includes(e), Ee = (e) => C({
  name: "Polymorphic",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, { attrs: n, slots: o }) {
    return t.asChild ? () => Ye(Rr, n, o) : () => {
      var r;
      return Ye(e, n, Pr(e) || (r = o.default) == null ? void 0 : r.call(o));
    };
  }
});
function Ar() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ee, {
    apply(n, o, r) {
      return Ee(r[0]);
    },
    get(n, o) {
      return e.has(o) || e.set(o, Ee(o)), e.get(o);
    }
  });
}
const q = Ar(), [Ft, ge] = Z("CollapsibleContext");
function Br(e) {
  const t = U(e);
  return (t == null ? void 0 : t.$el) ?? t;
}
const Vr = (e) => (
  // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
  Object.prototype.hasOwnProperty.call(e, "nodeName") && typeof e.nodeName == "string"
);
function W() {
  const e = rn(), t = B(), n = y(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (
      // @ts-expect-error ignore ts error
      (i = t.value) == null ? void 0 : i.$el.nextElementSibling
    ) : (
      // @ts-expect-error ignore ts error
      Br(t)
    );
  }), o = Object.assign({}, e.exposed), r = {};
  for (const s in e.props)
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(o).length > 0)
    for (const s in o)
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        // biome-ignore lint/style/noNonNullAssertion: intentional
        get: () => o[s]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function a(s) {
    t.value = s, !(Vr(s) || !s) && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s.$el
    }), e.exposed = r);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
const zr = /* @__PURE__ */ C({
  __name: "collapsible-content",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = ge();
    return W(), (n, o) => u(t).unmounted ? j("", !0) : (v(), $(u(q).div, F({ key: 0 }, u(t).getContentProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), Mr = /* @__PURE__ */ C({
  __name: "collapsible-context",
  setup(e) {
    const t = ge();
    return (n, o) => h(n.$slots, "default", te(ne(u(t))));
  }
}), jr = /* @__PURE__ */ C({
  __name: "collapsible-root-provider",
  props: {
    type: { default: "multiple" },
    orientation: { default: "vertical" },
    size: { default: "md" },
    items: {},
    classes: { default: {} }
  },
  setup(e) {
    const t = e, n = y(() => t.value);
    return Ft(n), W(), (o, r) => (v(), $(u(q).div, F(n.value.getRootProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
});
var ee = (e, t = []) => ({
  parts: (...n) => {
    if (Nr(t))
      return ee(e, n);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...n) => ee(e, [...t, ...n]),
  omit: (...n) => ee(e, t.filter((o) => !n.includes(o))),
  rename: (n) => ee(n, t),
  keys: () => t,
  build: () => [...new Set(t)].reduce(
    (n, o) => Object.assign(n, {
      [o]: {
        selector: [
          `&[data-scope="${J(e)}"][data-part="${J(o)}"]`,
          `& [data-scope="${J(e)}"][data-part="${J(o)}"]`
        ].join(", "),
        attrs: { "data-scope": J(e), "data-part": J(o) }
      }
    }),
    {}
  )
}), J = (e) => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Nr = (e) => e.length === 0, Lr = ee("collapsible").parts("root", "trigger", "content", "indicator"), me = Lr.build(), Dr = (e) => {
  var t;
  return ((t = e.ids) == null ? void 0 : t.root) ?? `collapsible:${e.id}`;
}, Pe = (e) => {
  var t;
  return ((t = e.ids) == null ? void 0 : t.content) ?? `collapsible:${e.id}:content`;
}, Fr = (e) => {
  var t;
  return ((t = e.ids) == null ? void 0 : t.trigger) ?? `collapsible:${e.id}:trigger`;
}, ae = (e) => e.getById(Pe(e));
function Wr(e, t) {
  const { state: n, send: o, context: r, scope: a, prop: s } = e, i = n.matches("open") || n.matches("closing"), l = n.matches("open"), c = n.matches("closed"), { width: p, height: b } = r.get("size"), f = !!s("disabled"), d = s("collapsedHeight"), x = s("collapsedWidth"), w = d != null, P = x != null, z = w || P, _ = !r.get("initial") && l;
  return {
    disabled: f,
    visible: i,
    open: l,
    measureSize() {
      o({ type: "size.measure" });
    },
    setOpen(S) {
      n.matches("open") !== S && o({ type: S ? "open" : "close" });
    },
    getRootProps() {
      return t.element({
        ...me.root.attrs,
        "data-state": l ? "open" : "closed",
        dir: s("dir"),
        id: Dr(a)
      });
    },
    getContentProps() {
      return t.element({
        ...me.content.attrs,
        id: Pe(a),
        "data-collapsible": "",
        "data-state": _ ? void 0 : l ? "open" : "closed",
        "data-disabled": H(f),
        "data-has-collapsed-size": H(z),
        hidden: !i && !z,
        dir: s("dir"),
        style: {
          "--height": Y(b),
          "--width": Y(p),
          "--collapsed-height": Y(d),
          "--collapsed-width": Y(x),
          ...c && w && {
            overflow: "hidden",
            minHeight: Y(d),
            maxHeight: Y(d)
          },
          ...c && P && {
            overflow: "hidden",
            minWidth: Y(x),
            maxWidth: Y(x)
          }
        }
      });
    },
    getTriggerProps() {
      return t.element({
        ...me.trigger.attrs,
        id: Fr(a),
        dir: s("dir"),
        type: "button",
        "data-state": l ? "open" : "closed",
        "data-disabled": H(f),
        "aria-controls": Pe(a),
        "aria-expanded": i || !1,
        onClick(S) {
          S.defaultPrevented || f || o({ type: l ? "close" : "open" });
        }
      });
    },
    getIndicatorProps() {
      return t.element({
        ...me.indicator.attrs,
        dir: s("dir"),
        "data-state": l ? "open" : "closed",
        "data-disabled": H(f)
      });
    }
  };
}
var Hr = {
  initialState({ prop: e }) {
    return e("open") || e("defaultOpen") ? "open" : "closed";
  },
  context({ bindable: e }) {
    return {
      size: e(() => ({
        defaultValue: { height: 0, width: 0 },
        sync: !0
      })),
      initial: e(() => ({
        defaultValue: !1
      }))
    };
  },
  refs() {
    return {
      cleanup: void 0,
      stylesRef: void 0
    };
  },
  watch({ track: e, prop: t, action: n }) {
    e([() => t("open")], () => {
      n(["setInitial", "computeSize", "toggleVisibility"]);
    });
  },
  exit: ["clearInitial", "cleanupNode"],
  states: {
    closed: {
      effects: ["trackTabbableElements"],
      on: {
        "controlled.open": {
          target: "open"
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
      }
    }
  },
  implementations: {
    guards: {
      isOpenControlled: ({ prop: e }) => e("open") != null
    },
    effects: {
      trackEnterAnimation: ({ send: e, scope: t }) => {
        let n;
        const o = ve(() => {
          const r = ae(t);
          if (!r) return;
          const a = et(r).animationName;
          if (!a || a === "none") {
            e({ type: "animation.end" });
            return;
          }
          const i = (l) => {
            tt(l) === r && e({ type: "animation.end" });
          };
          r.addEventListener("animationend", i), n = () => {
            r.removeEventListener("animationend", i);
          };
        });
        return () => {
          o(), n == null || n();
        };
      },
      trackExitAnimation: ({ send: e, scope: t }) => {
        let n;
        const o = ve(() => {
          const r = ae(t);
          if (!r) return;
          const a = et(r).animationName;
          if (!a || a === "none") {
            e({ type: "animation.end" });
            return;
          }
          const i = (c) => {
            tt(c) === r && e({ type: "animation.end" });
          };
          r.addEventListener("animationend", i);
          const l = br(r, {
            animationFillMode: "forwards"
          });
          n = () => {
            r.removeEventListener("animationend", i), lr(() => l());
          };
        });
        return () => {
          o(), n == null || n();
        };
      },
      trackTabbableElements: ({ scope: e, prop: t }) => {
        if (!t("collapsedHeight") && !t("collapsedWidth")) return;
        const n = ae(e);
        if (!n) return;
        const o = () => {
          const i = Vt(n).map((l) => mr(l, "inert", ""));
          return () => {
            i.forEach((l) => l());
          };
        };
        let r = o();
        const a = dr(n, {
          callback() {
            r(), r = o();
          }
        });
        return () => {
          r(), a();
        };
      }
    },
    actions: {
      setInitial: ({ context: e, flush: t }) => {
        t(() => {
          e.set("initial", !0);
        });
      },
      clearInitial: ({ context: e }) => {
        e.set("initial", !1);
      },
      cleanupNode: ({ refs: e }) => {
        e.set("stylesRef", null);
      },
      measureSize: ({ context: e, scope: t }) => {
        const n = ae(t);
        if (!n) return;
        const { height: o, width: r } = n.getBoundingClientRect();
        e.set("size", { height: o, width: r });
      },
      computeSize: ({ refs: e, scope: t, context: n }) => {
        var r;
        (r = e.get("cleanup")) == null || r();
        const o = ve(() => {
          const a = ae(t);
          if (!a) return;
          const s = a.hidden;
          a.style.animationName = "none", a.style.animationDuration = "0s", a.hidden = !1;
          const i = a.getBoundingClientRect();
          n.set("size", { height: i.height, width: i.width }), n.get("initial") && (a.style.animationName = "", a.style.animationDuration = ""), a.hidden = s;
        });
        e.set("cleanup", o);
      },
      invokeOnOpen: ({ prop: e }) => {
        var t;
        (t = e("onOpenChange")) == null || t({ open: !0 });
      },
      invokeOnClose: ({ prop: e }) => {
        var t;
        (t = e("onOpenChange")) == null || t({ open: !1 });
      },
      invokeOnExitComplete: ({ prop: e }) => {
        var t;
        (t = e("onExitComplete")) == null || t();
      },
      toggleVisibility: ({ prop: e, send: t }) => {
        t({ type: e("open") ? "controlled.open" : "controlled.close" });
      }
    }
  }
};
De()([
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "collapsedHeight",
  "collapsedWidth",
  "onExitComplete",
  "onOpenChange",
  "defaultOpen",
  "open"
]);
const [$a, Wt] = Z("EnvironmentContext"), Ht = y(() => ({
  getRootNode: () => document,
  getDocument: () => document,
  getWindow: () => window
})), Gt = y(() => ({
  dir: "ltr",
  locale: "en-US"
})), [Pa, qt] = Z("LocaleContext"), Xt = (e) => {
  const t = {};
  for (const [n, o] of Object.entries(e))
    o !== void 0 && (t[n] = o);
  return t;
}, Gr = (e = {}, t) => {
  const n = Ve(), o = Wt(Ht), r = qt(Gt), a = y(() => {
    const c = U(e);
    return {
      id: n,
      dir: r.value.dir,
      getRootNode: o == null ? void 0 : o.value.getRootNode,
      ...Xt(c),
      onExitComplete: () => {
        var p;
        t == null || t("exitComplete"), (p = c.onExitComplete) == null || p.call(c);
      },
      onOpenChange: (p) => {
        var b;
        t == null || t("openChange", p), t == null || t("update:open", p.open), (b = c.onOpenChange) == null || b.call(c, p);
      }
    };
  }), s = Lt(Hr, a), i = y(() => Wr(s, Nt)), l = B(!1);
  return _e(
    () => i.value.visible,
    () => {
      i.value.visible && (l.value = !0);
    }
  ), y(() => {
    const c = U(e);
    return {
      ...i.value,
      unmounted: !i.value.visible && !l.value && c.lazyMount || c.unmountOnExit && !i.value.visible && l.value
    };
  });
}, qr = /* @__PURE__ */ C({
  __name: "collapsible-root",
  props: /* @__PURE__ */ dt({
    collapsedHeight: {},
    collapsedWidth: {},
    defaultOpen: { type: Boolean },
    disabled: { type: Boolean },
    id: {},
    ids: {},
    lazyMount: { type: Boolean },
    open: { type: Boolean },
    unmountOnExit: { type: Boolean },
    asChild: { type: Boolean }
  }, {
    defaultOpen: void 0,
    disabled: void 0,
    lazyMount: void 0,
    open: void 0,
    unmountOnExit: void 0
  }),
  emits: ["exitComplete", "openChange", "update:open"],
  setup(e, { emit: t }) {
    const r = Gr(e, t);
    return Ft(r), W(), (a, s) => (v(), $(u(q).div, F(u(r).getRootProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), Xr = /* @__PURE__ */ C({
  __name: "collapsible-trigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = ge();
    return W(), (n, o) => (v(), $(u(q).button, F(u(t).getTriggerProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), Yr = /* @__PURE__ */ C({
  __name: "collapsible-indicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = ge();
    return W(), (n, o) => (v(), $(u(q).div, F(u(t).getIndicatorProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Content: zr,
  Context: Mr,
  Indicator: Yr,
  Root: qr,
  RootProvider: jr,
  Trigger: Xr
}, Symbol.toStringTag, { value: "Module" })), Ur = () => (e, t) => t.reduce(
  (n, o) => {
    const [r, a] = n, s = o;
    return a[s] !== void 0 && (r[s] = a[s]), delete a[s], [r, a];
  },
  [{}, { ...e }]
), [Kr, Fe] = Z("AccordionItemPropsContext"), Zr = /* @__PURE__ */ C({
  __name: "accordion-item-content",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = Ur(), n = fe(), o = Fe(), r = y(() => {
      const a = n.value.getItemContentProps(o), [, s] = t(a, ["hidden", "data-state"]);
      return s;
    });
    return W(), (a, s) => (v(), $(u(Yt).Content, F(r.value, { "as-child": e.asChild }), {
      default: R(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), [Jr, Qr] = Z("AccordionItemContext"), ea = /* @__PURE__ */ C({
  __name: "accordion-item-context",
  setup(e) {
    const t = Qr();
    return (n, o) => h(n.$slots, "default", te(ne(u(t))));
  }
}), ta = /* @__PURE__ */ C({
  __name: "accordion-item-indicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = fe(), n = Fe();
    return W(), (o, r) => (v(), $(u(q).div, F(u(t).getItemIndicatorProps(u(n)), { "as-child": e.asChild }), {
      default: R(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), na = /* @__PURE__ */ C({
  __name: "accordion-item-trigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = fe(), n = Fe(), o = ge(), r = y(() => {
      const { "aria-controls": a, ...s } = t.value.getItemTriggerProps(n);
      return {
        ...s,
        ...o.value.unmounted ? {} : { "aria-controls": a }
      };
    });
    return W(), (a, s) => (v(), $(u(q).button, F(r.value, { "as-child": e.asChild }), {
      default: R(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), [Ut, oa] = Z("RenderStrategyProps"), ra = /* @__PURE__ */ C({
  __name: "accordion-item",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = fe(), n = e, o = y(() => t.value.getItemState(n)), r = oa(), a = y(() => t.value.getItemContentProps(n));
    return Jr(o), Kr(n), W(), (s, i) => (v(), $(u(Yt).Root, F(u(t).getItemProps(n), {
      open: o.value.expanded,
      "lazy-mount": u(r).lazyMount,
      "unmount-on-exit": u(r).unmountOnExit,
      ids: { content: a.value.id }
    }), {
      default: R(() => [
        h(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["open", "lazy-mount", "unmount-on-exit", "ids"]));
  }
}), aa = /* @__PURE__ */ C({
  __name: "accordion-root-provider",
  props: {
    value: {},
    lazyMount: { type: Boolean },
    unmountOnExit: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(e) {
    const t = e, n = y(() => t.value);
    return Tt(n), Ut(y(() => ({ lazyMount: t.lazyMount, unmountOnExit: t.unmountOnExit }))), W(), (o, r) => (v(), $(u(q).div, F(n.value.getRootProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
});
var sa = ee("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator"), se = sa.build(), ye = (e) => {
  var t;
  return ((t = e.ids) == null ? void 0 : t.root) ?? `accordion:${e.id}`;
}, ia = (e, t) => {
  var n, o;
  return ((o = (n = e.ids) == null ? void 0 : n.item) == null ? void 0 : o.call(n, t)) ?? `accordion:${e.id}:item:${t}`;
}, st = (e, t) => {
  var n, o;
  return ((o = (n = e.ids) == null ? void 0 : n.itemContent) == null ? void 0 : o.call(n, t)) ?? `accordion:${e.id}:content:${t}`;
}, xe = (e, t) => {
  var n, o;
  return ((o = (n = e.ids) == null ? void 0 : n.itemTrigger) == null ? void 0 : o.call(n, t)) ?? `accordion:${e.id}:trigger:${t}`;
}, la = (e) => e.getById(ye(e)), we = (e) => {
  const n = `[aria-controls][data-ownedby='${CSS.escape(ye(e))}']:not([disabled])`;
  return ur(la(e), n);
}, ca = (e) => ho(we(e)), da = (e) => yo(we(e)), ua = (e, t) => pr(we(e), xe(e, t)), fa = (e, t) => gr(we(e), xe(e, t));
function pa(e, t) {
  const { send: n, context: o, prop: r, scope: a, computed: s } = e, i = o.get("focusedValue"), l = o.get("value"), c = r("multiple");
  function p(f) {
    let d = f;
    !c && d.length > 1 && (d = [d[0]]), n({ type: "VALUE.SET", value: d });
  }
  function b(f) {
    return {
      expanded: l.includes(f.value),
      focused: i === f.value,
      disabled: !!(f.disabled ?? r("disabled"))
    };
  }
  return {
    focusedValue: i,
    value: l,
    setValue: p,
    getItemState: b,
    getRootProps() {
      return t.element({
        ...se.root.attrs,
        dir: r("dir"),
        id: ye(a),
        "data-orientation": r("orientation")
      });
    },
    getItemProps(f) {
      const d = b(f);
      return t.element({
        ...se.item.attrs,
        dir: r("dir"),
        id: ia(a, f.value),
        "data-state": d.expanded ? "open" : "closed",
        "data-focus": H(d.focused),
        "data-disabled": H(d.disabled),
        "data-orientation": r("orientation")
      });
    },
    getItemContentProps(f) {
      const d = b(f);
      return t.element({
        ...se.itemContent.attrs,
        dir: r("dir"),
        role: "region",
        id: st(a, f.value),
        "aria-labelledby": xe(a, f.value),
        hidden: !d.expanded,
        "data-state": d.expanded ? "open" : "closed",
        "data-disabled": H(d.disabled),
        "data-focus": H(d.focused),
        "data-orientation": r("orientation")
      });
    },
    getItemIndicatorProps(f) {
      const d = b(f);
      return t.element({
        ...se.itemIndicator.attrs,
        dir: r("dir"),
        "aria-hidden": !0,
        "data-state": d.expanded ? "open" : "closed",
        "data-disabled": H(d.disabled),
        "data-focus": H(d.focused),
        "data-orientation": r("orientation")
      });
    },
    getItemTriggerProps(f) {
      const { value: d } = f, x = b(f);
      return t.button({
        ...se.itemTrigger.attrs,
        type: "button",
        dir: r("dir"),
        id: xe(a, d),
        "aria-controls": st(a, d),
        "aria-expanded": x.expanded,
        disabled: x.disabled,
        "data-orientation": r("orientation"),
        "aria-disabled": x.disabled,
        "data-state": x.expanded ? "open" : "closed",
        "data-ownedby": ye(a),
        onFocus() {
          x.disabled || n({ type: "TRIGGER.FOCUS", value: d });
        },
        onBlur() {
          x.disabled || n({ type: "TRIGGER.BLUR" });
        },
        onClick(w) {
          x.disabled || (Zo() && w.currentTarget.focus(), n({ type: "TRIGGER.CLICK", value: d }));
        },
        onKeyDown(w) {
          if (w.defaultPrevented || x.disabled) return;
          const P = {
            ArrowDown() {
              s("isHorizontal") || n({ type: "GOTO.NEXT", value: d });
            },
            ArrowUp() {
              s("isHorizontal") || n({ type: "GOTO.PREV", value: d });
            },
            ArrowRight() {
              s("isHorizontal") && n({ type: "GOTO.NEXT", value: d });
            },
            ArrowLeft() {
              s("isHorizontal") && n({ type: "GOTO.PREV", value: d });
            },
            Home() {
              n({ type: "GOTO.FIRST", value: d });
            },
            End() {
              n({ type: "GOTO.LAST", value: d });
            }
          }
        }
      }
    }
  },
  implementations: {
    guards: {
      canToggle: ({ prop: e }) => !!e("collapsible") || !!e("multiple"),
      isExpanded: ({ context: e, event: t }) => e.get("value").includes(t.value)
    },
    actions: {
      collapse({ context: e, prop: t, event: n }) {
        const o = t("multiple") ? _o(e.get("value"), n.value) : [];
        e.set("value", o);
      },
      expand({ context: e, prop: t, event: n }) {
        const o = t("multiple") ? xo(e.get("value"), n.value) : [n.value];
        e.set("value", o);
      },
      focusFirstTrigger({ scope: e }) {
        var t;
        (t = ca(e)) == null || t.focus();
      },
      focusLastTrigger({ scope: e }) {
        var t;
        (t = da(e)) == null || t.focus();
      },
      focusNextTrigger({ context: e, scope: t }) {
        const n = e.get("focusedValue");
        if (!n) return;
        const o = ua(t, n);
        o == null || o.focus();
      },
      focusPrevTrigger({ context: e, scope: t }) {
        const n = e.get("focusedValue");
        if (!n) return;
        const o = fa(t, n);
        o == null || o.focus();
      },
      setFocusedValue({ context: e, event: t }) {
        e.set("focusedValue", t.value);
      },
      clearFocusedValue({ context: e }) {
        e.set("focusedValue", null);
      },
      setValue({ context: e, event: t }) {
        e.set("value", t.value);
      },
      coarseValue({ context: e, prop: t }) {
        !t("multiple") && e.get("value").length > 1 && ($e("The value of accordion should be a single value when multiple is false."), e.set("value", [e.get("value")[0]]));
      }
    }
  }
};
De()([
  "collapsible",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "multiple",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "value",
  "defaultValue"
]);
De()(["value", "disabled"]);
const va = (e = {}, t) => {
  const n = Ve(), o = Wt(Ht), r = qt(Gt), a = y(() => {
    const i = U(e);
    return {
      id: n,
      dir: r.value.dir,
      getRootNode: o == null ? void 0 : o.value.getRootNode,
      onFocusChange: (l) => t == null ? void 0 : t("focusChange", l),
      value: i.modelValue,
      ...Xt(i),
      onValueChange: (l) => {
        var c;
        t == null || t("valueChange", l), t == null || t("update:modelValue", l.value), (c = i == null ? void 0 : i.onValueChange) == null || c.call(i, l);
      }
    };
  }), s = Lt(ba, a);
  return y(() => pa(s, Nt));
}, ha = /* @__PURE__ */ C({
  __name: "accordion-root",
  props: /* @__PURE__ */ dt({
    collapsible: { type: Boolean },
    defaultValue: {},
    disabled: { type: Boolean },
    id: {},
    ids: {},
    modelValue: {},
    multiple: { type: Boolean },
    orientation: {},
    lazyMount: { type: Boolean },
    unmountOnExit: { type: Boolean },
    asChild: { type: Boolean }
  }, {
    collapsible: void 0,
    disabled: void 0,
    multiple: void 0
  }),
  emits: ["focusChange", "valueChange", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = va(n, t);
    return Tt(r), Ut(y(() => ({ lazyMount: n.lazyMount, unmountOnExit: n.unmountOnExit }))), W(), (a, s) => (v(), $(u(q).div, F(u(r).getRootProps(), { "as-child": e.asChild }), {
      default: R(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child"]));
  }
}), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Context: bo,
  Item: ra,
  ItemContent: Zr,
  ItemContext: ea,
  ItemIndicator: ta,
  ItemTrigger: na,
  Root: ha,
  RootProvider: aa
}, Symbol.toStringTag, { value: "Module" })), ya = ["innerHTML"], xa = ["innerHTML"], _a = /* @__PURE__ */ C({
  __name: "AccordionRoot",
  props: {
    items: {}
  },
  setup(e) {
    return (t, n) => (v(), $(u(ie).Root, {
      collapsible: !0,
      multiple: !0
    }, {
      default: R(() => [
        (v(!0), O(ct, null, an(e.items, (o) => (v(), $(u(ie).Item, {
          key: o.id,
          value: o.id
        }, {
          default: R(() => [
            ce(u(ie).ItemTrigger, null, {
              default: R(() => [
                L("div", {
                  innerHTML: o.title
                }, null, 8, ya),
                ce(u(ie).ItemIndicator, null, {
                  default: R(() => [...n[0] || (n[0] = [
                    lt(" > ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 2
            }, 1024),
            ce(u(ie).ItemContent, null, {
              default: R(() => [
                L("div", {
                  innerHTML: o.content
                }, null, 8, xa)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 2
        }, 1032, ["value", "class"]))), 128)) : w("", !0)
      ]),
      _: 1
    }));
  }
}), Aa = {
  Root: _a
};
function Ba(e) {
  const t = y(() => e ? new FormData(e) : null), n = y(() => t.value ? Object.fromEntries(t.value.entries()) : null);
  return {
    formData: Oe(t),
    jsonData: Oe(n)
  };
}
export {
  Aa as Accordion,
  wa as Button,
  ka as Card,
  Ia as Carousel,
  Oa as Field,
  Ta as Flyout,
  Ra as Form,
  Ea as Hero,
  Sa as Loader,
  Hn as useCarousel,
  Kn as useFlyout,
  Ba as useFormData
};
