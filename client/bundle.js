(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var ir = Object.defineProperty;
  var Hi = Object.defineProperties;
  var zi = Object.getOwnPropertyDescriptors;
  var rr = Object.getOwnPropertySymbols;
  var Ji = Object.prototype.hasOwnProperty;
  var Qi = Object.prototype.propertyIsEnumerable;
  var Nt = (i2, t, l) => t in i2 ? ir(i2, t, { enumerable: true, configurable: true, writable: true, value: l }) : i2[t] = l;
  var P = (i2, t) => {
    for (var l in t || (t = {}))
      Ji.call(t, l) && Nt(i2, l, t[l]);
    if (rr)
      for (var l of rr(t))
        Qi.call(t, l) && Nt(i2, l, t[l]);
    return i2;
  };
  var D = (i2, t) => Hi(i2, zi(t));
  var a = (i2, t) => ir(i2, "name", { value: t, configurable: true });
  var b = (i2, t, l) => (Nt(i2, typeof t != "symbol" ? t + "" : t, l), l);
  var sr = (i2, t, l) => new Promise((w, U) => {
    var p = (q) => {
      try {
        A(l.next(q));
      } catch (V) {
        U(V);
      }
    }, S = (q) => {
      try {
        A(l.throw(q));
      } catch (V) {
        U(V);
      }
    }, A = (q) => q.done ? w(q.value) : Promise.resolve(q.value).then(p, S);
    A((l = l.apply(i2, t)).next());
  });
  var or = (() => {
    for (var i2 = new Uint8Array(128), t = 0; t < 64; t++)
      i2[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (l) => {
      for (var w = l.length, U = new Uint8Array((w - (l[w - 1] == "=") - (l[w - 2] == "=")) * 3 / 4 | 0), p = 0, S = 0; p < w; ) {
        var A = i2[l.charCodeAt(p++)], q = i2[l.charCodeAt(p++)], V = i2[l.charCodeAt(p++)], j = i2[l.charCodeAt(p++)];
        U[S++] = A << 2 | q >> 4, U[S++] = q << 4 | V >> 2, U[S++] = V << 6 | j;
      }
      return U;
    };
  })();
  var $ = class extends Map {
    constructor(...t) {
      super(...t);
      b(this, "_lastID");
      this._lastID = 0;
    }
    push(t) {
      let l = this._lastID;
      return this.set(l, t), this._lastID++, l;
    }
    pushd(t) {
      let l = this.push(t);
      return () => this.delete(l);
    }
  };
  a($, "IDList");
  function jt(i2, t) {
    let l = typeof i2, w = typeof t;
    if (l !== w)
      return false;
    if (l === "object" && w === "object") {
      let U = Object.keys(i2), p = Object.keys(t);
      if (U.length !== p.length)
        return false;
      for (let S of U) {
        let A = i2[S], q = t[S];
        if (!(typeof A == "function" && typeof q == "function") && !jt(A, q))
          return false;
      }
      return true;
    }
    return i2 === t;
  }
  a(jt, "deepEq");
  function Yt(i2, t) {
    let l = document.createElement("a");
    document.body.appendChild(l), l.setAttribute("style", "display: none"), l.href = i2, l.download = t, l.click(), document.body.removeChild(l);
  }
  a(Yt, "downloadURL");
  function ur(i2, t) {
    let l = URL.createObjectURL(i2);
    Yt(l, t), URL.revokeObjectURL(l);
  }
  a(ur, "downloadBlob");
  function cr(i2) {
    return i2.match(/^data:\w+\/\w+;base64,.+/);
  }
  a(cr, "isDataURL");
  var lr = (() => {
    let i2 = 0;
    return () => i2++;
  })();
  var ar = /* @__PURE__ */ new Set();
  function B(i2, t) {
    ar.has(i2) || (ar.add(i2), console.warn(`${i2} is deprecated. Use ${t} instead.`));
  }
  a(B, "deprecateMsg");
  var T = a((i2, t, l) => (...w) => (B(i2, t), l(...w)), "deprecate");
  function he(i2) {
    return i2 * Math.PI / 180;
  }
  a(he, "deg2rad");
  function Xt(i2) {
    return i2 * 180 / Math.PI;
  }
  a(Xt, "rad2deg");
  function z2(i2, t, l) {
    return t > l ? z2(i2, l, t) : Math.min(Math.max(i2, t), l);
  }
  a(z2, "clamp");
  function Ve(i2, t, l) {
    return i2 + (t - i2) * l;
  }
  a(Ve, "lerp");
  function dt(i2, t, l, w, U) {
    return w + (i2 - t) / (l - t) * (U - w);
  }
  a(dt, "map");
  function dr(i2, t, l, w, U) {
    return z2(dt(i2, t, l, w, U), w, U);
  }
  a(dr, "mapc");
  var N = class {
    constructor(t = 0, l = t) {
      b(this, "x", 0);
      b(this, "y", 0);
      this.x = t, this.y = l;
    }
    static fromAngle(t) {
      let l = he(t);
      return new N(Math.cos(l), Math.sin(l));
    }
    clone() {
      return new N(this.x, this.y);
    }
    add(...t) {
      let l = f(...t);
      return new N(this.x + l.x, this.y + l.y);
    }
    sub(...t) {
      let l = f(...t);
      return new N(this.x - l.x, this.y - l.y);
    }
    scale(...t) {
      let l = f(...t);
      return new N(this.x * l.x, this.y * l.y);
    }
    dist(...t) {
      let l = f(...t);
      return Math.sqrt((this.x - l.x) * (this.x - l.x) + (this.y - l.y) * (this.y - l.y));
    }
    len() {
      return this.dist(new N(0, 0));
    }
    unit() {
      return this.scale(1 / this.len());
    }
    normal() {
      return new N(this.y, -this.x);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    angle(...t) {
      let l = f(...t);
      return Xt(Math.atan2(this.y - l.y, this.x - l.x));
    }
    lerp(t, l) {
      return new N(Ve(this.x, t.x, l), Ve(this.y, t.y, l));
    }
    toFixed(t) {
      return new N(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    toString() {
      return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
    str() {
      return this.toString();
    }
  };
  var L = N;
  a(L, "Vec2"), b(L, "LEFT", new N(-1, 0)), b(L, "RIGHT", new N(1, 0)), b(L, "UP", new N(0, -1)), b(L, "DOWN", new N(0, 1));
  function f(...i2) {
    if (i2.length === 1) {
      if (i2[0] instanceof L)
        return f(i2[0].x, i2[0].y);
      if (Array.isArray(i2[0]) && i2[0].length === 2)
        return f.apply(null, i2[0]);
    }
    return new L(...i2);
  }
  a(f, "vec2");
  var Fe = class {
    constructor(t, l, w) {
      b(this, "x", 0);
      b(this, "y", 0);
      b(this, "z", 0);
      this.x = t, this.y = l, this.z = w;
    }
    xy() {
      return f(this.x, this.y);
    }
  };
  a(Fe, "Vec3");
  var de = a((i2, t, l) => new Fe(i2, t, l), "vec3");
  var ue = class {
    constructor(t, l, w) {
      b(this, "r", 255);
      b(this, "g", 255);
      b(this, "b", 255);
      this.r = z2(t, 0, 255), this.g = z2(l, 0, 255), this.b = z2(w, 0, 255);
    }
    static fromArray(t) {
      return new ue(t[0], t[1], t[2]);
    }
    clone() {
      return new ue(this.r, this.g, this.b);
    }
    lighten(t) {
      return new ue(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new ue(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new ue(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    str() {
      return B("str()", "toString()"), `(${this.r}, ${this.g}, ${this.b})`;
    }
    toString() {
      return `(${this.r}, ${this.g}, ${this.b})`;
    }
    static fromHSL(t, l, w) {
      if (l == 0)
        return E(255 * w, 255 * w, 255 * w);
      let U = a((j, X, Y) => (Y < 0 && (Y += 1), Y > 1 && (Y -= 1), Y < 1 / 6 ? j + (X - j) * 6 * Y : Y < 1 / 2 ? X : Y < 2 / 3 ? j + (X - j) * (2 / 3 - Y) * 6 : j), "hue2rgb"), p = w < 0.5 ? w * (1 + l) : w + l - w * l, S = 2 * w - p, A = U(S, p, t + 1 / 3), q = U(S, p, t), V = U(S, p, t - 1 / 3);
      return new ue(Math.round(A * 255), Math.round(q * 255), Math.round(V * 255));
    }
  };
  var v = ue;
  a(v, "Color"), b(v, "RED", E(255, 0, 0)), b(v, "GREEN", E(0, 255, 0)), b(v, "BLUE", E(0, 0, 255)), b(v, "YELLOW", E(255, 255, 0)), b(v, "MAGENTA", E(255, 0, 255)), b(v, "CYAN", E(0, 255, 255)), b(v, "WHITE", E(255, 255, 255)), b(v, "BLACK", E(0, 0, 0));
  function E(...i2) {
    if (i2.length === 0)
      return new v(255, 255, 255);
    if (i2.length === 1) {
      if (i2[0] instanceof v)
        return i2[0].clone();
      if (Array.isArray(i2[0]) && i2[0].length === 3)
        return v.fromArray(i2[0]);
    }
    return new v(...i2);
  }
  a(E, "rgb");
  var fr = a((i2, t, l) => v.fromHSL(i2, t, l), "hsl2rgb");
  var k = class {
    constructor(t, l, w, U) {
      b(this, "x", 0);
      b(this, "y", 0);
      b(this, "w", 1);
      b(this, "h", 1);
      this.x = t, this.y = l, this.w = w, this.h = U;
    }
    scale(t) {
      return new k(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    clone() {
      return new k(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  };
  a(k, "Quad");
  function pr(i2, t, l, w) {
    return new k(i2, t, l, w);
  }
  a(pr, "quad");
  var R = class {
    constructor(t) {
      b(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      t && (this.m = t);
    }
    clone() {
      return new R(this.m);
    }
    mult(t) {
      let l = [];
      for (let w = 0; w < 4; w++)
        for (let U = 0; U < 4; U++)
          l[w * 4 + U] = this.m[0 * 4 + U] * t.m[w * 4 + 0] + this.m[1 * 4 + U] * t.m[w * 4 + 1] + this.m[2 * 4 + U] * t.m[w * 4 + 2] + this.m[3 * 4 + U] * t.m[w * 4 + 3];
      return new R(l);
    }
    multVec4(t) {
      return { x: t.x * this.m[0] + t.y * this.m[4] + t.z * this.m[8] + t.w * this.m[12], y: t.x * this.m[1] + t.y * this.m[5] + t.z * this.m[9] + t.w * this.m[13], z: t.x * this.m[2] + t.y * this.m[6] + t.z * this.m[10] + t.w * this.m[14], w: t.x * this.m[3] + t.y * this.m[7] + t.z * this.m[11] + t.w * this.m[15] };
    }
    multVec3(t) {
      let l = this.multVec4({ x: t.x, y: t.y, z: t.z, w: 1 });
      return de(l.x, l.y, l.z);
    }
    multVec2(t) {
      return f(t.x * this.m[0] + t.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], t.x * this.m[1] + t.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }
    static translate(t) {
      return new R([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new R([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      return t = he(-t), new R([1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      return t = he(-t), new R([Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      return t = he(-t), new R([Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.mult(R.translate(t));
    }
    scale(t) {
      return this.mult(R.scale(t));
    }
    rotateX(t) {
      return this.mult(R.rotateX(t));
    }
    rotateY(t) {
      return this.mult(R.rotateY(t));
    }
    rotateZ(t) {
      return this.mult(R.rotateZ(t));
    }
    invert() {
      let t = [], l = this.m[10] * this.m[15] - this.m[14] * this.m[11], w = this.m[9] * this.m[15] - this.m[13] * this.m[11], U = this.m[9] * this.m[14] - this.m[13] * this.m[10], p = this.m[8] * this.m[15] - this.m[12] * this.m[11], S = this.m[8] * this.m[14] - this.m[12] * this.m[10], A = this.m[8] * this.m[13] - this.m[12] * this.m[9], q = this.m[6] * this.m[15] - this.m[14] * this.m[7], V = this.m[5] * this.m[15] - this.m[13] * this.m[7], j = this.m[5] * this.m[14] - this.m[13] * this.m[6], X = this.m[4] * this.m[15] - this.m[12] * this.m[7], Y = this.m[4] * this.m[14] - this.m[12] * this.m[6], an2 = this.m[5] * this.m[15] - this.m[13] * this.m[7], xt = this.m[4] * this.m[13] - this.m[12] * this.m[5], vt = this.m[6] * this.m[11] - this.m[10] * this.m[7], ve = this.m[5] * this.m[11] - this.m[9] * this.m[7], Ee = this.m[5] * this.m[10] - this.m[9] * this.m[6], Te = this.m[4] * this.m[11] - this.m[8] * this.m[7], J = this.m[4] * this.m[10] - this.m[8] * this.m[6], $e = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * l - this.m[6] * w + this.m[7] * U, t[4] = -(this.m[4] * l - this.m[6] * p + this.m[7] * S), t[8] = this.m[4] * w - this.m[5] * p + this.m[7] * A, t[12] = -(this.m[4] * U - this.m[5] * S + this.m[6] * A), t[1] = -(this.m[1] * l - this.m[2] * w + this.m[3] * U), t[5] = this.m[0] * l - this.m[2] * p + this.m[3] * S, t[9] = -(this.m[0] * w - this.m[1] * p + this.m[3] * A), t[13] = this.m[0] * U - this.m[1] * S + this.m[2] * A, t[2] = this.m[1] * q - this.m[2] * V + this.m[3] * j, t[6] = -(this.m[0] * q - this.m[2] * X + this.m[3] * Y), t[10] = this.m[0] * an2 - this.m[1] * X + this.m[3] * xt, t[14] = -(this.m[0] * j - this.m[1] * Y + this.m[2] * xt), t[3] = -(this.m[1] * vt - this.m[2] * ve + this.m[3] * Ee), t[7] = this.m[0] * vt - this.m[2] * Te + this.m[3] * J, t[11] = -(this.m[0] * ve - this.m[1] * Te + this.m[3] * $e), t[15] = this.m[0] * Ee - this.m[1] * J + this.m[2] * $e;
      let Et = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let Se = 0; Se < 4; Se++)
        for (let Ce = 0; Ce < 4; Ce++)
          t[Se * 4 + Ce] *= 1 / Et;
      return new R(t);
    }
    toString() {
      return this.m.toString();
    }
  };
  a(R, "Mat4");
  function Kt(i2, t, l, w = Math.sin) {
    return i2 + (w(l) + 1) / 2 * (t - i2);
  }
  a(Kt, "wave");
  var Zi = 1103515245;
  var es = 12345;
  var hr = 2147483648;
  var be = class {
    constructor(t) {
      b(this, "seed");
      this.seed = t;
    }
    gen(...t) {
      if (t.length === 0)
        return this.seed = (Zi * this.seed + es) % hr, this.seed / hr;
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.gen(0, t[0]);
        if (t[0] instanceof L)
          return this.gen(f(0, 0), t[0]);
        if (t[0] instanceof v)
          return this.gen(E(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.gen() * (t[1] - t[0]) + t[0];
        if (t[0] instanceof L && t[1] instanceof L)
          return f(this.gen(t[0].x, t[1].x), this.gen(t[0].y, t[1].y));
        if (t[0] instanceof v && t[1] instanceof v)
          return E(this.gen(t[0].r, t[1].r), this.gen(t[0].g, t[1].g), this.gen(t[0].b, t[1].b));
      }
    }
  };
  a(be, "RNG");
  var $t = new be(Date.now());
  function mr(i2) {
    return B("rng()", "new RNG()"), new be(i2);
  }
  a(mr, "rng");
  function wr(i2) {
    return i2 != null && ($t.seed = i2), $t.seed;
  }
  a(wr, "randSeed");
  function Ge(...i2) {
    return $t.gen(...i2);
  }
  a(Ge, "rand");
  function Ht(...i2) {
    return Math.floor(Ge(...i2));
  }
  a(Ht, "randi");
  function gr(i2) {
    return Ge() <= i2;
  }
  a(gr, "chance");
  function Ur(i2) {
    return i2[Ht(i2.length)];
  }
  a(Ur, "choose");
  function yr(i2, t) {
    return i2.p2.x >= t.p1.x && i2.p1.x <= t.p2.x && i2.p2.y >= t.p1.y && i2.p1.y <= t.p2.y;
  }
  a(yr, "testRectRect2");
  function zt(i2, t) {
    return i2.p2.x > t.p1.x && i2.p1.x < t.p2.x && i2.p2.y > t.p1.y && i2.p1.y < t.p2.y;
  }
  a(zt, "testRectRect");
  function Jt(i2, t) {
    if (i2.p1.x === i2.p2.x && i2.p1.y === i2.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let l = (t.p2.y - t.p1.y) * (i2.p2.x - i2.p1.x) - (t.p2.x - t.p1.x) * (i2.p2.y - i2.p1.y);
    if (l === 0)
      return null;
    let w = ((t.p2.x - t.p1.x) * (i2.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (i2.p1.x - t.p1.x)) / l, U = ((i2.p2.x - i2.p1.x) * (i2.p1.y - t.p1.y) - (i2.p2.y - i2.p1.y) * (i2.p1.x - t.p1.x)) / l;
    return w < 0 || w > 1 || U < 0 || U > 1 ? null : w;
  }
  a(Jt, "testLineLineT");
  function ce(i2, t) {
    let l = Jt(i2, t);
    return l ? f(i2.p1.x + l * (i2.p2.x - i2.p1.x), i2.p1.y + l * (i2.p2.y - i2.p1.y)) : null;
  }
  a(ce, "testLineLine");
  function ft(i2, t) {
    return ae(i2, t.p1) || ae(i2, t.p2) ? true : !!ce(t, new le(i2.p1, f(i2.p2.x, i2.p1.y))) || !!ce(t, new le(f(i2.p2.x, i2.p1.y), i2.p2)) || !!ce(t, new le(i2.p2, f(i2.p1.x, i2.p2.y))) || !!ce(t, new le(f(i2.p1.x, i2.p2.y), i2.p1));
  }
  a(ft, "testRectLine");
  function ae(i2, t) {
    return t.x > i2.p1.x && t.x < i2.p2.x && t.y > i2.p1.y && t.y < i2.p2.y;
  }
  a(ae, "testRectPoint");
  function br(i2, t) {
    let l = Math.max(i2.p1.x, Math.min(t.center.x, i2.p2.x)), w = Math.max(i2.p1.y, Math.min(t.center.y, i2.p2.y));
    return f(l, w).dist(t.center) <= t.radius;
  }
  a(br, "testRectCircle");
  function pt(i2, t) {
    return wt(t, [i2.p1, f(i2.p2.x, i2.p1.y), i2.p2, f(i2.p1.x, i2.p2.y)]);
  }
  a(pt, "testRectPolygon");
  function xr(i2, t) {
    return false;
  }
  a(xr, "testLinePoint");
  function vr(i2, t) {
    return false;
  }
  a(vr, "testLineCircle");
  function _e(i2, t) {
    if (xe(t, i2.p1) || xe(t, i2.p2))
      return true;
    for (let l = 0; l < t.length; l++) {
      let w = t[l], U = t[(l + 1) % t.length];
      if (ce(i2, { p1: w, p2: U }))
        return true;
    }
    return false;
  }
  a(_e, "testLinePolygon");
  function mt(i2, t) {
    return i2.center.dist(t) < i2.radius;
  }
  a(mt, "testCirclePoint");
  function Qt(i2, t) {
    return i2.center.dist(t.center) < i2.radius + t.radius;
  }
  a(Qt, "testCircleCircle");
  function Er(i2, t) {
    return false;
  }
  a(Er, "testCirclePolygon");
  function wt(i2, t) {
    for (let l = 0; l < i2.length; l++) {
      let w = { p1: i2[l], p2: i2[(l + 1) % i2.length] };
      if (_e(w, t))
        return true;
    }
    return false;
  }
  a(wt, "testPolygonPolygon");
  function xe(i2, t) {
    let l = false;
    for (let w = 0, U = i2.length - 1; w < i2.length; U = w++)
      i2[w].y > t.y != i2[U].y > t.y && t.x < (i2[U].x - i2[w].x) * (t.y - i2[w].y) / (i2[U].y - i2[w].y) + i2[w].x && (l = !l);
    return l;
  }
  a(xe, "testPolygonPoint");
  function ts(i2, t) {
    return i2.eq(t);
  }
  a(ts, "testPointPoint");
  function gt(i2, t) {
    switch (i2.shape) {
      case "rect":
        return zt(t, i2);
      case "line":
        return ft(t, i2);
      case "circle":
        return br(t, i2);
      case "polygon":
        return pt(t, i2.pts);
      case "point":
        return ae(t, i2.pt);
    }
    throw new Error(`Unknown area shape: ${i2.shape}`);
  }
  a(gt, "testAreaRect");
  function Zt(i2, t) {
    switch (i2.shape) {
      case "rect":
        return ft(i2, t);
      case "line":
        return Boolean(ce(i2, t));
      case "circle":
        return vr(t, i2);
      case "polygon":
        return _e(t, i2.pts);
      case "point":
        return xr(t, i2.pt);
    }
    throw new Error(`Unknown area shape: ${i2.shape}`);
  }
  a(Zt, "testAreaLine");
  function en(i2, t) {
    switch (i2.shape) {
      case "rect":
        return br(i2, t);
      case "line":
        return vr(i2, t);
      case "circle":
        return Qt(i2, t);
      case "polygon":
        return Er(t, i2.pts);
      case "point":
        return mt(t, i2.pt);
    }
    throw new Error(`Unknown area shape: ${i2.shape}`);
  }
  a(en, "testAreaCircle");
  function tn(i2, t) {
    switch (i2.shape) {
      case "rect":
        return pt(i2, t);
      case "line":
        return _e(i2, t);
      case "circle":
        return Er(i2, t);
      case "polygon":
        return wt(t, i2.pts);
      case "point":
        return xe(t, i2.pt);
    }
    throw new Error(`Unknown area shape: ${i2.shape}`);
  }
  a(tn, "testAreaPolygon");
  function Ut(i2, t) {
    switch (i2.shape) {
      case "rect":
        return ae(i2, t);
      case "line":
        return xr(i2, t);
      case "circle":
        return mt(i2, t);
      case "polygon":
        return xe(i2.pts, t);
      case "point":
        return ts(i2.pt, t);
    }
    throw new Error(`Unknown area shape: ${i2.shape}`);
  }
  a(Ut, "testAreaPoint");
  function nn(i2, t) {
    switch (t.shape) {
      case "rect":
        return gt(i2, t);
      case "line":
        return Zt(i2, t);
      case "circle":
        return en(i2, t);
      case "polygon":
        return tn(i2, t.pts);
      case "point":
        return Ut(i2, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  a(nn, "testAreaArea");
  function yt(i2, t) {
    return { p1: f(i2.p1.x - t.p2.x, i2.p1.y - t.p2.y), p2: f(i2.p2.x - t.p1.x, i2.p2.y - t.p1.y) };
  }
  a(yt, "minkDiff");
  var le = class {
    constructor(t, l) {
      b(this, "p1");
      b(this, "p2");
      this.p1 = t, this.p2 = l;
    }
  };
  a(le, "Line");
  var ke = class {
    constructor(t, l) {
      b(this, "p1");
      b(this, "p2");
      this.p1 = t, this.p2 = l;
    }
  };
  a(ke, "Rect");
  var ht = class {
    constructor(t, l) {
      b(this, "center");
      b(this, "radius");
      this.center = t, this.radius = l;
    }
  };
  a(ht, "Circle");
  var Be = class {
    constructor() {
      b(this, "buf", []);
      b(this, "timer", 0);
      b(this, "fps", 0);
    }
    tick(t) {
      this.buf.push(1 / t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(this.buf.reduce((l, w) => l + w) / this.buf.length), this.buf = []);
    }
  };
  a(Be, "FPSCounter");
  var fe = class {
    constructor(t, l) {
      b(this, "time");
      b(this, "action");
      b(this, "finished", false);
      b(this, "paused", false);
      this.time = t, this.action = l;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  };
  a(fe, "Timer");
  var Tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1cAAAFyCAMAAAAu4tBuAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////kJcbLQAAABl0Uk5TABAgLzBAUF9gb3B/gI+Qn6CvsL/Az9Df77brr10AAEaZSURBVHja7V3ZgqQosxaO2JRJuSS/Dbz/i54LN9QICEytrJwmrma6LAshvtiIpSgyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKYE4y3uQKdPFqDLOfedtyJTpUtLOOSffvgyhlOTv341SiETtXRJWXWaL4J8j45xz7dth5ZxzJsZ+rJJyx/fXcqx2zpkkeD+cFbFnvhPf+W/ZSzzj6mZcuTJ8Ato555xruW/EmvLCM3apyvvhnNOEb8vAgunLOtfzfxpXZbV8PxfsFlyJ2BGMZKv53zrnnGXvw9XDOedM5CHpMrBCW+OafxlXD+dsufwngU0eZlgf+jKaxXHFYyw80wSsKoZGJptW61ZV/BZc0diitCQj9591QiLcx8s095SxT8IVc4vFw0ky5ts59/RBUb+Eq8qHlbN8XTuuLoRef0PL63HFrXPO/SXCr88wgjcmIBhZrUeh1ArqO7+se5AspGYw1hrdVOyduOIrriTlN7jP8tw551RIpH8755xTdYXJJuOcc1bxUtoF1jIIA/a9gSJFxSbiSlMNvMa5mGD5h9VVQDCa9fiIXtgj7qcXRVFI7832m/8KXCnKb3TOOTf4cqkOCCWf/4dWIvpsZGFunXM2qq74X7cjW16LKxn3CTcItNkSBNWVJJn+zv657EyYTha5P4CrhvIbg/MiZUPoYyuzB4Az1f4h5R2AmkTSuIeYGjzAarEeL8IVM3Sfe7QY2wwlSF0xEqxICn88kxiuuEkXuT+Aq47wG8z36Mf/YSRrbfpOBqk/7ukuMR8LD8pC51opFn2or8TVI0XS1XTd9s/Q5DJjnPR1ZAtBOpPoc2dE7i/BlfAFjMDtNfbXgcTjuJLBU5lEkhEbnciuw9UoGmXSNusMpr1xjApGPl2r2EZKNT1qSOcXw9UDYjj9Gbiq/Xte5fzYILS3E6lWDzBaas/k+x5fHVRXfGc4T6dUXYcrSbm62gua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";
  var Sr = "data:image/png;base64,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";
  var Cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACAAQMAAADOEv75AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAA////pdmf3QAAAAF0Uk5TAEDm2GYAAASQSURBVDjLVZVNTBtHFMffrk0YHLc21JVQuwrrdQOOFdVwa0NktlYl3FRVCRLnUvWSICJhuKStIoa1CYs5uAdOyELWlqTWumoFB4RItXJIJCMqxe2x4mIKjRGH2imHGkzsvlljKHPY3Z//M+9rnp7hBBrrKYXXWZd7w4THBlR1I5y1dzuM0iMKtaJx/PNiaFNTH6Jy3agUEfTfo6iMJMYUezfR0tMGGiDuLIDD2H6Dwrlpu/n8urDIXg4VaAd90XtPpCbk7y+ubt8bU0g4l4Cj1yurN3fKkfZYlwC145WH2w88RSP2gwBHZWO19yv3M1QCkJ/8pVariXhmIwDU2TDNBwCi82KnvSeGtnkG33xilfsJgBXBSIaI/LlqAnWNRUHuD1jyKNLANRuVb6HiRCuuVy0gy6SbAXVJnbSHgpMXz7IB9hmeCVwuBMIZIFYBVFVpI1JMxG0SqDTqyfExiXh2eEhN2UPe6LgIMkRBVXjVG53Ng8gRUKPSsVdVpfa3/gSYKCZasiScIcRKztywWGAsLhwWE3O7muJNwGxIixFJpVpkVIN1bzJGRJUuKT8i+MW53Ptluqb4NIjsJ9k2dUm5poHiNc+oGoNxv3C4L8wV0HUCLqxXOeHYq8f8axEFIObVJAQxKU8zSCIMukVZpfCPX5Cu+txBkV2e4lUQBqKik0FIkySfqpowlUq4N1xqfO0yDVz0002AWCilyTwrJIIVKIisoq2/CndzC8uRx55PBYDr2sJ7nZt0TcLkuP3k3B6mvSSlNOBHtQXrFawBAy4t3H3Oz+1r7zTyEaD5gj/BQ93sLZsVFadbYTl9xcz0OzHWBlujyaCZHMg2zFQIXvVJklOkdti6wyPc3kNwwXLq5oeYjz/hoW1AzVbgMvhwQ8vQCDYa+4WWAGz6pTpMlSH4aKSlDpETpjiVvnzVEvm3imdkMUhExSrPVFGhsoRAxHgNz8i0rQGoAN8ADnwAJjhqwCv6JThTmnwOMK3VlY547qRqoWh6qMnXlzH7qbkKuqJP5k3AcFCplUzgyqDTBmAKb3+ROS+eLfm/Sp4qjsy5YqllefxwOQ46cBDUMiIMAwFfB+0zoWQq8dopMKUO6HRoADqmSrsYHosgaUKWsAhOlU2Vy5QaSk7dzQ+DfHsA3uze3aKWYYCkmGKwSVkEp0qOsls5VTLAyXUFr4MNB8lUcNA5jMoBZcq7EbqT02JdhCmpj+lhwTXom2cR/Kaplb+EiQJhEXyJHb+vl3GmoLLiveHMGWVFYgrrt8ZKEb5eE7w5bsBmAci4BvHejiAV7BK4lzd0hLGpAbnLsBTXY0zZ4nFUnkJlrwniRmsuwc5UDninEvhghkgI4edNTl64r2CfcWcTSOAdT9FZO5fxi83COPkIRl78NJGH8gxh8OT7dj3Zi9NRR6i8tFd2YKyujOSMcL//j1vzEgK6h0tUbZIGGTQL4HgCTTDITGPBzDtmTnsiQrogcM/sDL7NGse6PrG3GGQpFH1p/GtITa4jlP8OhD/T0vsPWKaVoqHatKPQJNsWzvrQ+mxo8jyF7TuTWKr/ABVF/mebwsnnAAAAAElFTkSuQmCC";
  var Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA8AgMAAADTWFpWAAAAAXNSR0IArs4c6QAAAAlQTFRFAAAAAAAA////g93P0gAAAAF0Uk5TAEDm2GYAAANeSURBVDjLjVVLruQoEMQLfAMsuU7DEVgklux1YulxGi84AgftiAS/eeqZUTcl47IJ8hMZpJ1zPgYJyUcnIfrkU4hZ3Dv4b4277s8mWa+0PtvzSbcCbmPRCTjb1Usrj3/2FJ6rrS+gTUDtt+SnpDXtbnlqP2CajvxjgCCw0LZ0io8EXK1253htyQB8OHSPNzwScOshPtHCTlcM6Gy1nVLgkTFkWeP6cOV008L+HKnoBQvMgkv0vsbipgXyIBIYFniwbQb7h5B/jZcJ7A0xMCDJwjue08thwKq72icyrQVcXGDgQsIvhztWXNEtFs3qW5GCQPlDiNG3LBueneoaubxJRaoZy3yzxi3VDtAA+La2U7m4wMGwsKOmCzYaYEtcFOz1D9joEADfCTYmxHAIOESI9L7Ca8CWD6zWvlElzICxQw2NZUZWzcctLpplRyyOuTN7ZwzAuPGAIhkP33T9PsKPv9iVsStPS4LZC4bjZEwiY3ivMxZFuGtHQo5BG5NnG/yBSSFNEAvpcl/9C3d3W3okAUQnQhC5loYV/aIhAmojo/Wpzw03axStiS5u8ySk6NsCyYpqFjB3AmYFGQN3MYb5BABiuB4Yn1ngybIYs44sLPPJg4ynycbk4Y9j7GZFON45Q885WiWGf9YU8Vli9F9xImq0g/fmcMgAMA/IB2fqiGczgFpSlj0AJN6DBWqhqLkYaRJwtltxxlE+xbkGozxYg6hs/O0PLQASFZ1hNhGw19QIxglJ9/gnJS7tiNZEwB6iGGpcERZVzixw0qxvQHrBGKMaeQm6DHlwvFyWPzPp02iGnLzwxo5JHieArUZHtG7rvFFR6uo3AHUouIIGdLmAE45+C3Ue0DprhHw/7QZRl7Iel97oF2svEN6XvXcL9lK9VA/OKJS8Ra8V1N/2Hk4u0ySP7+6GJqlqAlgnkt2nBdkBpiaFMLmtjLSgM4Znd8HUwJ3eZutXwTTJb0Zwn0Y9XZiX/9bkePEXUrUzH/+vI2B8oIYazRL8Mwb0qZ+q3qEnaJKfE2TALPqr6mJ5nKjImm5aAAfkARZe0ULVrdgHwaIYB/Vqu3tFS+kNCxYOLajLuoPsIdqrnzMGAzAGVL9t3T5rjY209pGFAVB/hX6Sl1eTn5blBw8yFfc7m+/4BR+d4KDrSif0AAAAAElFTkSuQmCC";
  var Wr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAMAAABAzG8wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPCw4ICA4dFw4eFg4eFxAQEBUsIhUtIhwPDxwQEBw8LR07LR08LSAgICNKOCNLOCRKOCRLOCoXFypZQypaQytZQytaQzAwMDFoTjFoTzFpTzgfHzh3WTh3Wjh4Wjl3WTl3Wjl4Wj+GZUBAQECGZECGZUCHZUYnJ0aVcEeVcE2ke06ke06kfFBQUFQuLlSzhlUuLlWzhlvCkVzCkVzCkmBgYGM2NmPRnWrgqHA+PnBwcHHvs35FRYCAgIxNTY1NTZCQkJtUVJtVVZ+fn6CgoKlcXKldXbdkZL+/v8Vra8VsbNDQ0NNzc9/f3+F7e////ysmAfQAAAAVdFJOUwAQIDBAUGBvcH+AkJ+gr7C/z9Df74JQjt0AAAO5SURBVEjHnVfrQtowFKaADC1qu9I6YSBecIKoOHAD2bhssMpc6zqn010c0/H+r7CcJG2TFAru/LCYnu/kO9ekkUiIxBJyStXSOhJNVeRkPPIIiS8qGMlJWklE50PLQbArKzN5SIuaHiraQjjc3/zZ7lHHtGwHiTXs1XYz7ovUdEc8uLHfsRxRhq1MOIn4U4reMZ0pYpaIyuIk/BMKP7GdELEyUyxIK/PAQU4mWogS+ocz4RALTCLJ749zZ5ghMLteMHQ9VzapG2kuF5h/Dgfe7lbQe6NQ5dJgFbz0rlvOEJnSFTZ9GI/p1w1Ps+ybeGOwtVR3Tnknoh5+mNF5TSJVoRrLzgtwQnINaIQY2kisW2KhzKwcUHIGQyEBSx2k+JpVbNK96P7ZLFk/v9uGh/mKiQIQKAl4/WB8SzTJ8vYDNZAdP8DjnQ1/o34EkQNd/P7WtTAe32EDFsGPvfVror/l+QAEXiICEL/sH19xfA6hcdrwT/Nh7DLAVBBh8CHlRgAiiHfSL8dN14VLEhobZ3D7+j1Zb4JjBiWssgQwJ6RJwqx//4yLxm8fVk4dsqGG8As0AkgOWR0cQQO/sLYEPN7PgV/IwDJNAUhH2MvoTXxB8NSARFLlVnyJVVwf+q1QMgJWiYEEdTSoKUwGu7P7HOZky12lMVhFjyO+b3tHm5ub+61Zk8EkpZhmPXiUtHAdxIDrf+GdIoImcAh2/guPeyEWkdHfWrimdWa2G7VKpVDkRlSbxFCBxgpiLLPdrlUrhVyGnUQ5VgeKS45EVPT46K8OKkUew9eVkAPoZkiCny8r/FgtCQRWUSHDOu9XQDY2jvv9Pb9jfM14wECXxVx8ufr26/f9X5BRnieAGxQPA94AdoFiOPngTl0qZW+eaTwziN+PIP7KnQFU8JRcwuNM5dMIzdgP4EdrfMcNdDpL6DRoCMkZifi8N1qIowZzMibR7wKTHQjOMY+/3+MdIBNugT3UmMbt6aITBH/on+2GHwAQqOWqUCD62xHPnylicvj5eHKsDZkmwwTzX+n2F2v+uQ1vqyKeHqx24A6U79/8vPm0pnP4YS6Ij8Q5lUnHQMl2ryjkwpsQbkeyLpQZvUW5LXjK3zG0WOB6pmK9BjeaM8Jotut0RZYmXG9Vcgq0bWE0o6suWRpU6YzQJl+1JZluV+4GZ7k9qLp00kvStDtywruh54q1rnvDPus2Kjn/a2E6HCpyOXwYzYBjE0vTvxPSSnzOLxV10geGHJfm/1aS4klZUQgXTVtJJWeA/wFPmR833RRQSAAAAABJRU5ErkJggg==";
  var Mr = or("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Lr = "data:image/png;base64,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";
  var qr = "data:image/png;base64,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";
  var Pr = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var Dr = ["left", "middle", "right", "back", "forward"];
  var ls = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
  var Ar = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var hs = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";
  var Or = 0;
  var Ir = 3;
  var ds = 0;
  var fs = 3;
  var ps = -1200;
  var ms = 1200;
  var Ne = "topleft";
  var Vr = 1600;
  var bt = 65536;
  var Fr = 64;
  var ws = "apl386o";
  var rn = "sink";
  var je = 9;
  var gs = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Us = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var sn = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var on2 = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var ys = /* @__PURE__ */ new Set(["id", "require"]);
  var bs = /* @__PURE__ */ new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
  function kr(i2) {
    return i2 === "pressed" || i2 === "rpressed" ? "down" : i2 === "released" ? "up" : i2;
  }
  a(kr, "processButtonState");
  function xs(i2) {
    i2.requestFullscreen ? i2.requestFullscreen() : i2.webkitRequestFullscreen && i2.webkitRequestFullscreen();
  }
  a(xs, "enterFullscreen");
  function vs() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  a(vs, "exitFullscreen");
  function Es() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  a(Es, "getFullscreenElement");
  function Ye(i2) {
    switch (i2) {
      case "topleft":
        return f(-1, -1);
      case "top":
        return f(0, -1);
      case "topright":
        return f(1, -1);
      case "left":
        return f(-1, 0);
      case "center":
        return f(0, 0);
      case "right":
        return f(1, 0);
      case "botleft":
        return f(-1, 1);
      case "bot":
        return f(0, 1);
      case "botright":
        return f(1, 1);
      default:
        return i2;
    }
  }
  a(Ye, "originPt");
  function Gr() {
    return new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 });
  }
  a(Gr, "createEmptyAudioBuffer");
  var no = a((i2 = {}) => {
    let t = (() => {
      var s, o, d;
      let e = (s = i2.root) != null ? s : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let n = (o = i2.canvas) != null ? o : (() => {
        let h = document.createElement("canvas");
        return e.appendChild(h), h;
      })(), r = (d = i2.scale) != null ? d : 1;
      i2.width && i2.height && !i2.stretch && !i2.letterbox ? (n.width = i2.width * r, n.height = i2.height * r) : (n.width = n.parentElement.offsetWidth, n.height = n.parentElement.offsetHeight);
      let u = ["outline: none", "cursor: default"];
      i2.crisp && (u.push("image-rendering: pixelated"), u.push("image-rendering: crisp-edges")), n.style = u.join(";"), n.setAttribute("tabindex", "0");
      let c = n.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
      return { canvas: n, scale: r, gl: c, keyStates: {}, mouseStates: {}, charInputted: [], isMouseMoved: false, isKeyPressed: false, isKeyPressedRepeat: false, isKeyReleased: false, mousePos: f(0, 0), mouseDeltaPos: f(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new Be(), loaded: false };
    })(), l = (() => {
      var d, h;
      let e = t.gl, n = cn(sn, on2), r = Ke(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), u = (d = i2.background) != null ? d : E(0, 0, 0);
      if (i2.background) {
        let m = v.fromArray(i2.background);
        e.clearColor(m.r / 255, m.g / 255, m.b / 255, (h = i2.background[3]) != null ? h : 1);
      }
      e.enable(e.BLEND), e.enable(e.SCISSOR_TEST), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
      let c = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, c), e.vertexAttribPointer(0, 3, e.FLOAT, false, je * 4, 0), e.enableVertexAttribArray(0), e.vertexAttribPointer(1, 2, e.FLOAT, false, je * 4, 12), e.enableVertexAttribArray(1), e.vertexAttribPointer(2, 4, e.FLOAT, false, je * 4, 20), e.enableVertexAttribArray(2), e.bufferData(e.ARRAY_BUFFER, bt * 4, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null);
      let s = e.createBuffer();
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, s), e.bufferData(e.ELEMENT_ARRAY_BUFFER, bt * 2, e.DYNAMIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
      let o = Ke(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: n, curShader: n, defTex: r, curTex: r, curUniform: {}, vbuf: c, ibuf: s, vqueue: [], iqueue: [], transform: new R(), transformStack: [], bgTex: o, width: i2.width, height: i2.height, viewport: { x: 0, y: 0, width: e.drawingBufferWidth, height: e.drawingBufferHeight } };
    })();
    Un();
    let w = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), n = e.createGain();
      n.connect(e.destination);
      let r = { buf: Gr() };
      return e.decodeAudioData(Mr.buffer.slice(0), (u) => {
        r.buf = u;
      }, () => {
        throw new Error("Failed to load burp.");
      }), { ctx: e, masterNode: n, burpSnd: r };
    })(), U = { numLoading: 0, numLoaded: 0, urlPrefix: "", sprites: {}, sounds: {}, shaders: {}, fonts: {} }, p = { events: {}, objEvents: {}, root: En([]), timers: new $(), layers: {}, defLayer: null, gravity: Vr, on(e, n) {
      return this.events[e] || (this.events[e] = new $()), this.events[e].pushd(n);
    }, trigger(e, ...n) {
      this.events[e] && this.events[e].forEach((r) => r(...n));
    }, scenes: {}, logs: [], cam: { pos: ot(), scale: f(1), angle: 0, shake: 0, transform: new R() } };
    function S(e) {
      return U.numLoading++, new Promise((n, r) => {
        e.then(n).catch((u) => {
          C.error(u), r(u);
        }).finally(() => {
          U.numLoading--, U.numLoaded++;
        });
      });
    }
    a(S, "load");
    function A() {
      return U.numLoaded / (U.numLoading + U.numLoaded);
    }
    a(A, "loadProgress");
    function q(e) {
      return e !== void 0 && (U.urlPrefix = e), U.urlPrefix;
    }
    a(q, "loadRoot");
    function V(e) {
      let n = U.urlPrefix + e;
      return fetch(n).then((r) => {
        if (!r.ok)
          throw new Error(`Failed to fetch ${n}`);
        return r;
      });
    }
    a(V, "fetchURL");
    function j(e) {
      let n = new Image();
      return n.src = cr(e) ? e : U.urlPrefix + e, n.crossOrigin = "anonymous", new Promise((r, u) => {
        n.onload = () => r(n), n.onerror = () => u(`Failed to load image from "${e}"`);
      });
    }
    a(j, "loadImg");
    function X(e, n, r, u, c = {}) {
      return S(j(n).then((s) => {
        var d;
        let o = Nr(Ke(s, c), r, u, (d = c.chars) != null ? d : Ar);
        return e && (U.fonts[e] = o), o;
      }));
    }
    a(X, "loadFont");
    function Y(e) {
      var n;
      return (n = U.sprites[e]) != null ? n : null;
    }
    a(Y, "getSprite");
    function an2(e) {
      var n;
      return (n = U.sounds[e]) != null ? n : null;
    }
    a(an2, "getSound");
    function xt(e) {
      var n;
      return (n = U.fonts[e]) != null ? n : null;
    }
    a(xt, "getFont");
    function vt(e) {
      var n;
      return (n = U.shaders[e]) != null ? n : null;
    }
    a(vt, "getShader");
    function ve(e = 1, n = 1, r = 0, u = 0, c = 1, s = 1) {
      let o = [], d = c / e, h = s / n;
      for (let m = 0; m < n; m++)
        for (let g = 0; g < e; g++)
          o.push(new k(r + g * d, u + m * h, d, h));
      return o;
    }
    a(ve, "slice");
    function Ee(e, n) {
      return S(typeof n == "string" ? V(n).then((r) => r.json()).then((r) => Ee(e, r)) : J(null, e).then((r) => {
        let u = {}, c = r.tex.width, s = r.tex.height;
        for (let o in n) {
          let d = n[o], h = { tex: r.tex, frames: ve(d.sliceX, d.sliceY, d.x / c, d.y / s, d.width / c, d.height / s), anims: d.anims };
          U.sprites[o] = h, u[o] = h;
        }
        return u;
      }));
    }
    a(Ee, "loadSpriteAtlas");
    function Te(e, n, r = {}) {
      let u = Ke(n, r), c = ve(r.sliceX || 1, r.sliceY || 1), s = { tex: u, frames: c, anims: r.anims || {} };
      return e && (U.sprites[e] = s), s;
    }
    a(Te, "loadRawSprite");
    function J(e, n, r = { sliceX: 1, sliceY: 1, anims: {} }) {
      return S(new Promise((u, c) => {
        if (!n)
          return c(`Expected sprite src for "${e}"`);
        typeof n == "string" ? j(n).then((s) => u(Te(e, s, r))).catch(c) : u(Te(e, n, r));
      }));
    }
    a(J, "loadSprite");
    function $e(e, n) {
      return S(new Promise((r, u) => {
        V(n).then((c) => c.json()).then((c) => sr(this, null, function* () {
          let s = yield Promise.all(c.frames.map(j)), o = document.createElement("canvas");
          o.width = c.width, o.height = c.height * c.frames.length;
          let d = o.getContext("2d");
          return s.forEach((h, m) => {
            d.drawImage(h, 0, m * c.height);
          }), J(e, o, { sliceY: c.frames.length, anims: c.anims });
        })).then(r).catch(u);
      }));
    }
    a($e, "loadPedit");
    function Et(e, n, r) {
      return S(new Promise((u, c) => {
        J(e, n).then((s) => {
          V(r).then((o) => o.json()).then((o) => {
            let d = o.meta.size;
            s.frames = o.frames.map((h) => new k(h.frame.x / d.w, h.frame.y / d.h, h.frame.w / d.w, h.frame.h / d.h));
            for (let h of o.meta.frameTags)
              h.from === h.to ? s.anims[h.name] = h.from : s.anims[h.name] = { from: h.from, to: h.to, speed: 10, loop: true };
            u(s);
          }).catch(c);
        }).catch(c);
      }));
    }
    a(Et, "loadAseprite");
    function Se(e, n, r, u = false) {
      function c(s, o, d) {
        let h = cn(o, d);
        return s && (U.shaders[s] = h), h;
      }
      return a(c, "loadRawShader"), S(new Promise((s, o) => {
        if (!n && !r)
          return o("no shader");
        function d(h) {
          return h ? V(h).then((m) => m.text()).catch(o) : new Promise((m) => m(null));
        }
        if (a(d, "resolveUrl"), u)
          Promise.all([d(n), d(r)]).then(([h, m]) => {
            s(c(e, h, m));
          }).catch(o);
        else
          try {
            s(c(e, n, r));
          } catch (h) {
            o(h);
          }
      }));
    }
    a(Se, "loadShader");
    function Ce(e, n) {
      return S(new Promise((r, u) => {
        if (!n)
          return u(`expected sound src for "${e}"`);
        typeof n == "string" && V(n).then((c) => c.arrayBuffer()).then((c) => new Promise((s, o) => w.ctx.decodeAudioData(c, s, o))).then((c) => {
          let s = { buf: c };
          e && (U.sounds[e] = s), r(s);
        }).catch(u);
      }));
    }
    a(Ce, "loadSound");
    function _r(e = "bean") {
      return J(e, Wr);
    }
    a(_r, "loadBean");
    function Br(e) {
      return e !== void 0 && (w.masterNode.gain.value = z2(e, Or, Ir)), w.masterNode.gain.value;
    }
    a(Br, "volume");
    function Xe(e, n = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var g;
      if (typeof e == "string") {
        let y = Xe({ buf: Gr() });
        return Ue(() => {
          let x = U.sounds[e];
          if (!x)
            throw new Error(`Sound not found: "${e}"`);
          let W = Xe(x, n);
          for (let O in W)
            y[O] = W[O];
        }), y;
      }
      let r = w.ctx, u = false, c = r.createBufferSource();
      c.buffer = e.buf, c.loop = !!n.loop;
      let s = r.createGain();
      c.connect(s), s.connect(w.masterNode);
      let o = (g = n.seek) != null ? g : 0;
      c.start(0, o);
      let d = r.currentTime - o, h = null, m = { stop() {
        u || (this.pause(), d = r.currentTime);
      }, play(y) {
        if (!u)
          return;
        let x = c;
        c = r.createBufferSource(), c.buffer = x.buffer, c.loop = x.loop, c.playbackRate.value = x.playbackRate.value, c.detune && (c.detune.value = x.detune.value), c.connect(s);
        let W = y != null ? y : this.time();
        c.start(0, W), d = r.currentTime - W, u = false, h = null;
      }, pause() {
        u || (c.stop(), u = true, h = r.currentTime);
      }, isPaused() {
        return u;
      }, paused() {
        return B("paused()", "isPaused()"), this.isPaused();
      }, isStopped() {
        return u;
      }, stopped() {
        return B("stopped()", "isStopped()"), this.isStopped();
      }, speed(y) {
        return y !== void 0 && (c.playbackRate.value = z2(y, ds, fs)), c.playbackRate.value;
      }, detune(y) {
        return c.detune ? (y !== void 0 && (c.detune.value = z2(y, ps, ms)), c.detune.value) : 0;
      }, volume(y) {
        return y !== void 0 && (s.gain.value = z2(y, Or, Ir)), s.gain.value;
      }, loop() {
        c.loop = true;
      }, unloop() {
        c.loop = false;
      }, duration() {
        return e.buf.duration;
      }, time() {
        return u ? h - d : r.currentTime - d;
      } };
      return m.speed(n.speed), m.detune(n.detune), m.volume(n.volume), m;
    }
    a(Xe, "play");
    function un(e) {
      return Xe(w.burpSnd, e);
    }
    a(un, "burp");
    function Ke(e, n = {}) {
      let r = t.gl, u = r.createTexture();
      r.bindTexture(r.TEXTURE_2D, u), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e);
      let c = (() => {
        var o;
        switch ((o = n.filter) != null ? o : i2.texFilter) {
          case "linear":
            return r.LINEAR;
          case "nearest":
            return r.NEAREST;
          default:
            return r.NEAREST;
        }
      })(), s = (() => {
        switch (n.wrap) {
          case "repeat":
            return r.REPEAT;
          case "clampToEdge":
            return r.CLAMP_TO_EDGE;
          default:
            return r.CLAMP_TO_EDGE;
        }
      })();
      return r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, c), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, c), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, s), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, s), r.bindTexture(r.TEXTURE_2D, null), { width: e.width, height: e.height, bind() {
        r.bindTexture(r.TEXTURE_2D, u);
      }, unbind() {
        r.bindTexture(r.TEXTURE_2D, null);
      } };
    }
    a(Ke, "makeTex");
    function cn(e = sn, n = on2) {
      let r = t.gl, u, c = gs.replace("{{user}}", e != null ? e : sn), s = Us.replace("{{user}}", n != null ? n : on2), o = r.createShader(r.VERTEX_SHADER), d = r.createShader(r.FRAGMENT_SHADER);
      if (r.shaderSource(o, c), r.shaderSource(d, s), r.compileShader(o), r.compileShader(d), u = r.getShaderInfoLog(o))
        throw new Error(u);
      if (u = r.getShaderInfoLog(d))
        throw new Error(u);
      let h = r.createProgram();
      if (r.attachShader(h, o), r.attachShader(h, d), r.bindAttribLocation(h, 0, "a_pos"), r.bindAttribLocation(h, 1, "a_uv"), r.bindAttribLocation(h, 2, "a_color"), r.linkProgram(h), (u = r.getProgramInfoLog(h)) && u !== `
`)
        throw new Error(u);
      return { bind() {
        r.useProgram(h);
      }, unbind() {
        r.useProgram(null);
      }, send(m) {
        this.bind();
        for (let g in m) {
          let y = m[g], x = r.getUniformLocation(h, g);
          typeof y == "number" ? r.uniform1f(x, y) : y instanceof R ? r.uniformMatrix4fv(x, false, new Float32Array(y.m)) : y instanceof v ? r.uniform4f(x, y.r, y.g, y.b, y.a) : y instanceof Fe ? r.uniform3f(x, y.x, y.y, y.z) : y instanceof L && r.uniform2f(x, y.x, y.y);
        }
        this.unbind();
      } };
    }
    a(cn, "makeShader");
    function Nr(e, n, r, u) {
      let c = e.width / n, s = e.height / r, o = 1 / c, d = 1 / s, h = {}, m = u.split("").entries();
      for (let [g, y] of m)
        h[y] = f(g % c * o, Math.floor(g / c) * d);
      return { tex: e, map: h, qw: o, qh: d };
    }
    a(Nr, "makeFont");
    function Tt(e, n, r, u = l.defTex, c = l.defShader, s = {}) {
      u = u != null ? u : l.defTex, c = c != null ? c : l.defShader, (u !== l.curTex || c !== l.curShader || !jt(l.curUniform, s) || l.vqueue.length + e.length * je > bt || l.iqueue.length + n.length > bt) && ln();
      for (let o of e) {
        let d = r ? l.transform : p.cam.transform.mult(l.transform), h = jr(d.multVec2(o.pos.xy()));
        l.vqueue.push(h.x, h.y, o.pos.z, o.uv.x, o.uv.y, o.color.r / 255, o.color.g / 255, o.color.b / 255, o.opacity);
      }
      for (let o of n)
        l.iqueue.push(o + l.vqueue.length / je - e.length);
      l.curTex = u, l.curShader = c, l.curUniform = s;
    }
    a(Tt, "drawRaw");
    function ln() {
      if (!l.curTex || !l.curShader || l.vqueue.length === 0 || l.iqueue.length === 0)
        return;
      let e = t.gl;
      l.curShader.send(l.curUniform), e.bindBuffer(e.ARRAY_BUFFER, l.vbuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(l.vqueue)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, l.ibuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(l.iqueue)), l.curShader.bind(), l.curTex.bind(), e.drawElements(e.TRIANGLES, l.iqueue.length, e.UNSIGNED_SHORT, 0), l.curTex.unbind(), l.curShader.unbind(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), l.iqueue = [], l.vqueue = [], l.drawCalls++;
    }
    a(ln, "flush");
    function He() {
      t.gl.clear(t.gl.COLOR_BUFFER_BIT), i2.background || pe({ width: F(), height: G(), quad: new k(0, 0, F() * t.scale / Fr, G() * t.scale / Fr), tex: l.bgTex, fixed: true }), l.drawCalls = 0, l.transformStack = [], l.transform = new R();
    }
    a(He, "frameStart");
    function ze() {
      ln(), l.lastDrawCalls = l.drawCalls;
    }
    a(ze, "frameEnd");
    function Ts() {
      return l.lastDrawCalls;
    }
    a(Ts, "drawCalls");
    function jr(e) {
      return f(e.x / F() * 2 - 1, -e.y / G() * 2 + 1);
    }
    a(jr, "screen2ndc");
    function Ss(e) {
      return f((e.x + 1) / 2 * F(), -(e.y - 1) / 2 * G());
    }
    a(Ss, "ndc2screen");
    function Cs(e) {
      l.transform = e.clone();
    }
    a(Cs, "applyMatrix");
    function I(...e) {
      if (e[0] === void 0)
        return;
      let n = f(...e);
      n.x === 0 && n.y === 0 || (l.transform = l.transform.translate(n));
    }
    a(I, "pushTranslate");
    function ne(...e) {
      if (e[0] === void 0)
        return;
      let n = f(...e);
      n.x === 1 && n.y === 1 || (l.transform = l.transform.scale(n));
    }
    a(ne, "pushScale");
    function Rs(e) {
      !e || (l.transform = l.transform.rotateX(e));
    }
    a(Rs, "pushRotateX");
    function Ws(e) {
      !e || (l.transform = l.transform.rotateY(e));
    }
    a(Ws, "pushRotateY");
    function Je(e) {
      !e || (l.transform = l.transform.rotateZ(e));
    }
    a(Je, "pushRotateZ");
    function re2() {
      l.transformStack.push(l.transform.clone());
    }
    a(re2, "pushTransform");
    function ie() {
      l.transformStack.length > 0 && (l.transform = l.transformStack.pop());
    }
    a(ie, "popTransform");
    function pe(e) {
      var h;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, r = e.height, c = Ye(e.origin || Ne).scale(f(n, r).scale(-0.5)), s = e.quad || new k(0, 0, 1, 1), o = e.color || E(255, 255, 255), d = (h = e.opacity) != null ? h : 1;
      re2(), I(e.pos), Je(e.angle), ne(e.scale), I(c), Tt([{ pos: de(-n / 2, r / 2, 0), uv: f(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y : s.y + s.h), color: o, opacity: d }, { pos: de(-n / 2, -r / 2, 0), uv: f(e.flipX ? s.x + s.w : s.x, e.flipY ? s.y + s.h : s.y), color: o, opacity: d }, { pos: de(n / 2, -r / 2, 0), uv: f(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y + s.h : s.y), color: o, opacity: d }, { pos: de(n / 2, r / 2, 0), uv: f(e.flipX ? s.x : s.x + s.w, e.flipY ? s.y : s.y + s.h), color: o, opacity: d }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), ie();
    }
    a(pe, "drawUVQuad");
    function Yr(e) {
      var s;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let n = (s = e.quad) != null ? s : new k(0, 0, 1, 1), r = e.tex.width * n.w, u = e.tex.height * n.h, c = f(1);
      if (e.tiled) {
        let o = Math.ceil((e.width || r) / r), d = Math.ceil((e.height || u) / u), m = Ye(e.origin || Ne).add(f(1, 1)).scale(0.5).scale(o * r, d * u);
        for (let g = 0; g < o; g++)
          for (let y = 0; y < d; y++)
            pe(D(P({}, e), { pos: (e.pos || f(0)).add(f(r * g, u * y)).sub(m), scale: c.scale(e.scale || f(1)), tex: e.tex, quad: n, width: r, height: u, origin: "topleft" }));
      } else
        e.width && e.height ? (c.x = e.width / r, c.y = e.height / u) : e.width ? (c.x = e.width / r, c.y = c.x) : e.height && (c.y = e.height / u, c.x = c.y), pe(D(P({}, e), { scale: c.scale(e.scale || f(1)), tex: e.tex, quad: n, width: r, height: u }));
    }
    a(Yr, "drawTexture");
    let St = /* @__PURE__ */ new Set();
    function hn(e) {
      var u, c;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let n = gn(e.sprite, U.sprites);
      if (!n)
        if (typeof e.sprite == "string") {
          St.has(e.sprite) || (St.add(e.sprite), J(e.sprite, e.sprite).then((s) => St.delete(e.sprite)));
          return;
        } else
          throw new Error(`sprite not found: "${e.sprite}"`);
      let r = n.frames[(u = e.frame) != null ? u : 0];
      if (!r)
        throw new Error(`frame not found: ${(c = e.frame) != null ? c : 0}`);
      Yr(D(P({}, e), { tex: n.tex, quad: r.scale(e.quad || new k(0, 0, 1, 1)), uniform: e.uniform }));
    }
    a(hn, "drawSprite");
    function Re(e, n, r, u, c, s = 1) {
      u = he(u % 360), c = he(c % 360), c <= u && (c += Math.PI * 2);
      let o = Math.ceil(Math.max(Math.sqrt(n + r) * 3 * (s || 1), 16)), d = (c - u) / o, h = [];
      for (let m = u; m < c; m += d)
        h.push(e.add(n * Math.cos(m), r * Math.sin(m)));
      return h.push(e.add(n * Math.cos(c), r * Math.sin(c))), h;
    }
    a(Re, "getArcPts");
    function Q(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, r = e.height, c = Ye(e.origin || Ne).add(1, 1).scale(f(n, r).scale(-0.5)), s = [f(0, 0), f(n, 0), f(n, r), f(0, r)];
      if (e.radius) {
        let o = Math.min(Math.min(n, r) / 2, e.radius);
        s = [f(o, 0), f(n - o, 0), ...Re(f(n - o, o), o, o, 270, 360), f(n, o), f(n, r - o), ...Re(f(n - o, r - o), o, o, 0, 90), f(n - o, r), f(o, r), ...Re(f(o, r - o), o, o, 90, 180), f(0, r - o), f(0, o), ...Re(f(o, o), o, o, 180, 270)];
      }
      Qe(D(P({}, e), { offset: c, pts: s }));
    }
    a(Q, "drawRect");
    function We(e) {
      let { p1: n, p2: r } = e;
      if (!n || !r)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let u = e.width || 1, c = r.sub(n).unit().normal().scale(u * 0.5), s = [n.sub(c), n.add(c), r.add(c), r.sub(c)].map((o) => {
        var d, h;
        return { pos: de(o.x, o.y, 0), uv: f(0), color: (d = e.color) != null ? d : v.WHITE, opacity: (h = e.opacity) != null ? h : 1 };
      });
      Tt(s, [0, 1, 3, 1, 2, 3], e.fixed, l.defTex, e.shader, e.uniform);
    }
    a(We, "drawLine");
    function dn(e) {
      let n = e.pts;
      if (!n)
        throw new Error('drawLines() requires property "pts".');
      if (!(n.length < 2))
        if (e.radius && n.length >= 3) {
          let r = n[0].dist(n[1]);
          for (let c = 1; c < n.length - 1; c++)
            r = Math.min(n[c].dist(n[c + 1]), r);
          let u = Math.min(e.radius, r / 2);
          We(D(P({}, e), { p1: n[0], p2: n[1] }));
          for (let c = 1; c < n.length - 2; c++) {
            let s = n[c], o = n[c + 1];
            We(D(P({}, e), { p1: s, p2: o }));
          }
          We(D(P({}, e), { p1: n[n.length - 2], p2: n[n.length - 1] }));
        } else
          for (let r = 0; r < n.length - 1; r++)
            We(D(P({}, e), { p1: n[r], p2: n[r + 1] }));
    }
    a(dn, "drawLines");
    function fn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return Qe(D(P({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    a(fn, "drawTriangle");
    function Ct(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && pn(D(P({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    a(Ct, "drawCircle");
    function pn(e) {
      var n, r;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      e.radiusX === 0 || e.radiusY === 0 || Qe(D(P({}, e), { pts: Re(f(0), e.radiusX, e.radiusY, (n = e.start) != null ? n : 0, (r = e.end) != null ? r : 360, e.resolution), radius: 0 }));
    }
    a(pn, "drawEllipse");
    function Qe(e) {
      var r, u;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let n = e.pts.length;
      if (!(n < 3)) {
        if (re2(), I(e.pos), ne(e.scale), Je(e.angle), I(e.offset), e.fill !== false) {
          let c = (r = e.color) != null ? r : v.WHITE, s = e.pts.map((d) => {
            var h;
            return { pos: de(d.x, d.y, 0), uv: f(0, 0), color: c, opacity: (h = e.opacity) != null ? h : 1 };
          }), o = [...Array(n - 2).keys()].map((d) => [0, d + 1, d + 2]).flat();
          Tt(s, (u = e.indices) != null ? u : o, e.fixed, l.defTex, e.shader, e.uniform);
        }
        e.outline && dn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, uniform: e.uniform, fixed: e.fixed }), ie();
      }
    }
    a(Qe, "drawPolygon");
    function mn(e, n) {
      n.pos && (e.pos = e.pos.add(n.pos)), n.scale && (e.scale = e.scale.scale(f(n.scale))), n.angle && (e.angle += n.angle), n.color && (e.color = e.color.mult(n.color)), n.opacity && (e.opacity *= n.opacity);
    }
    a(mn, "applyCharTransform");
    let wn = /\[(?<text>[^\]]*)\]\.(?<style>[\w\.]+)+/g;
    function $r(e) {
      let n = {}, r = e.replace(wn, "$1"), u = 0;
      for (let c of e.matchAll(wn)) {
        let s = c.groups.style.split("."), o = c.index - u;
        for (let d = o; d < c.index + c.groups.text.length; d++)
          n[d] = { localIdx: d - o, styles: s };
        u += 3 + c.groups.style.length;
      }
      return { charStyleMap: n, text: r };
    }
    a($r, "compileStyledText");
    function gn(e, n, r) {
      if (e)
        return typeof e == "string" ? n[e] : e;
      if (r)
        return n[r];
    }
    a(gn, "findAsset");
    function me(e) {
      var Qn, Zn, er;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let n = gn((Qn = e.font) != null ? Qn : i2.font, U.fonts, ws);
      if (!n)
        throw new Error(`Font not found: ${e.font}`);
      let { charStyleMap: r, text: u } = $r(e.text + ""), c = u.split(""), s = n.qw * n.tex.width, o = n.qh * n.tex.height, d = e.size || o, h = f(d / o).scale(f(e.scale || 1)), m = h.x * s + ((Zn = e.letterSpacing) != null ? Zn : 0), g = h.y * o + ((er = e.lineSpacing) != null ? er : 0), y = 0, x = g, W = 0, O = [], M = [], ee = null, te = 0;
      for (; te < c.length; ) {
        let oe = c[te];
        oe === `
` ? (x += g, y = 0, ee = null, M.push(oe), O.push(M), M = []) : (e.width ? y + m > e.width : false) && (x += g, y = 0, ee != null && (te -= M.length - ee, oe = c[te], M = M.slice(0, ee)), ee = null, O.push(M), M = []), oe !== `
` && (M.push(oe), y += m, oe === " " && (ee = M.length)), W = Math.max(W, y), te++;
      }
      O.push(M), e.width && (W = e.width);
      let Ae = [], Oe = f(e.pos || 0), _ = Ye(e.origin || Ne).scale(0.5), se = -_.x * m - (_.x + 0.5) * (W - m), Ie = -_.y * g - (_.y + 0.5) * (x - g), ut = 0;
      return O.forEach((oe, Bi) => {
        let Ni = (W - oe.length * m) * (_.x + 0.5);
        oe.forEach((ct, ji) => {
          var tr;
          let Gt = n.map[ct], Yi = ji * m, $i = Bi * g;
          if (Gt) {
            let _t = { tex: n.tex, quad: new k(Gt.x, Gt.y, n.qw, n.qh), ch: ct, pos: f(Oe.x + Yi + se + Ni, Oe.y + $i + Ie), opacity: e.opacity, color: (tr = e.color) != null ? tr : E(255, 255, 255), scale: h, angle: 0, uniform: e.uniform, fixed: e.fixed };
            if (e.transform) {
              let lt = typeof e.transform == "function" ? e.transform(ut, ct) : e.transform;
              lt && mn(_t, lt);
            }
            if (r[ut]) {
              let { styles: lt, localIdx: Xi } = r[ut];
              for (let Ki of lt) {
                let Bt = e.styles[Ki], nr = typeof Bt == "function" ? Bt(Xi, ct) : Bt;
                nr && mn(_t, nr);
              }
            }
            Ae.push(_t);
          }
          ut += 1;
        });
      }), { width: W, height: x, chars: Ae };
    }
    a(me, "formatText");
    function Xr(e) {
      we(me(e));
    }
    a(Xr, "drawText");
    function we(e) {
      for (let n of e.chars)
        pe({ tex: n.tex, width: n.tex.width * n.quad.w, height: n.tex.height * n.quad.h, pos: n.pos, scale: n.scale, angle: n.angle, color: n.color, opacity: n.opacity, quad: n.quad, origin: "center", uniform: n.uniform, fixed: n.fixed });
    }
    a(we, "drawFormattedText");
    function Un() {
      let e = t.gl, n = e.drawingBufferWidth, r = e.drawingBufferHeight, u = F(), c = G();
      if (vn()) {
        let s = window.innerWidth, o = window.innerHeight, d = s / o, h = n / r;
        if (d > h) {
          let m = window.innerHeight * h;
          l.viewport = { x: (s - m) / 2, y: 0, width: m, height: o };
        } else {
          let m = window.innerWidth / h;
          l.viewport = { x: 0, y: (o - m) / 2, width: s, height: m };
        }
        return;
      }
      if (i2.letterbox) {
        if (!i2.width || !i2.height)
          throw new Error("Letterboxing requires width and height defined.");
        let s = n / r, o = i2.width / i2.height;
        if (s > o) {
          i2.stretch || (l.width = r * o, l.height = r);
          let d = r * o, h = r, m = (n - d) / 2;
          e.scissor(m, 0, d, h), e.viewport(m, 0, d, r), l.viewport = { x: m, y: 0, width: d, height: r };
        } else {
          i2.stretch || (l.width = n, l.height = n / o);
          let d = n, h = n / o, m = (r - h) / 2;
          e.scissor(0, m, d, h), e.viewport(0, m, n, h), l.viewport = { x: 0, y: m, width: n, height: h };
        }
        return;
      }
      if (i2.stretch) {
        if (!i2.width || !i2.height)
          throw new Error("Stretching requires width and height defined.");
        e.viewport(0, 0, n, r), l.viewport = { x: 0, y: 0, width: n, height: r };
        return;
      }
      l.width = n / t.scale, l.height = r / t.scale, e.viewport(0, 0, n, r), l.viewport = { x: 0, y: 0, width: n, height: r };
    }
    a(Un, "updateViewport");
    function F() {
      return l.width;
    }
    a(F, "width");
    function G() {
      return l.height;
    }
    a(G, "height"), t.canvas.addEventListener("mousemove", (e) => {
      t.mousePos = f((e.offsetX - l.viewport.x) * F() / l.viewport.width, (e.offsetY - l.viewport.y) * G() / l.viewport.height), t.mouseDeltaPos = f(e.movementX, e.movementY).scale(1 / t.scale), t.isMouseMoved = true;
    }), t.canvas.addEventListener("mousedown", (e) => {
      let n = Dr[e.button];
      n && (t.mouseStates[n] = "pressed");
    }), t.canvas.addEventListener("mouseup", (e) => {
      let n = Dr[e.button];
      n && (t.mouseStates[n] = "released");
    }), t.canvas.addEventListener("keydown", (e) => {
      let n = Pr[e.key] || e.key.toLowerCase();
      ls.includes(n) && e.preventDefault(), n.length === 1 && t.charInputted.push(e.key), n === "space" && t.charInputted.push(" "), e.repeat ? (t.isKeyPressedRepeat = true, t.keyStates[n] = "rpressed") : (t.isKeyPressed = true, t.keyStates[n] = "pressed");
    }), t.canvas.addEventListener("keyup", (e) => {
      let n = Pr[e.key] || e.key.toLowerCase();
      t.keyStates[n] = "released", t.isKeyReleased = true;
    }), t.canvas.addEventListener("touchstart", (e) => {
      if (!i2.touchToMouse)
        return;
      e.preventDefault();
      let n = e.touches[0];
      t.mousePos = f(n.clientX, n.clientY).scale(1 / t.scale), t.mouseStates.left = "pressed";
    }), t.canvas.addEventListener("touchmove", (e) => {
      if (!i2.touchToMouse)
        return;
      e.preventDefault();
      let n = e.touches[0];
      t.mousePos = f(n.clientX, n.clientY).scale(1 / t.scale), t.isMouseMoved = true;
    }), t.canvas.addEventListener("touchend", (e) => {
      !i2.touchToMouse || (t.mouseStates.left = "released");
    }), t.canvas.addEventListener("touchcancel", (e) => {
      !i2.touchToMouse || (t.mouseStates.left = "released");
    }), t.canvas.addEventListener("touchstart", (e) => {
      [...e.changedTouches].forEach((n) => {
        p.trigger("onTouchStart", n.identifier, f(n.clientX, n.clientY).scale(1 / t.scale));
      });
    }), t.canvas.addEventListener("touchmove", (e) => {
      [...e.changedTouches].forEach((n) => {
        p.trigger("onTouchMove", n.identifier, f(n.clientX, n.clientY).scale(1 / t.scale));
      });
    }), t.canvas.addEventListener("touchend", (e) => {
      [...e.changedTouches].forEach((n) => {
        p.trigger("onTouchEnd", n.identifier, f(n.clientX, n.clientY).scale(1 / t.scale));
      });
    }), t.canvas.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }), document.addEventListener("visibilitychange", () => {
      switch (document.visibilityState) {
        case "visible":
          t.skipTime = true, w.ctx.resume();
          break;
        case "hidden":
          w.ctx.suspend();
          break;
      }
    });
    function K() {
      return t.mousePos.clone();
    }
    a(K, "mousePos");
    function yn() {
      return t.mouseDeltaPos.clone();
    }
    a(yn, "mouseDeltaPos");
    function Me(e = "left") {
      return t.mouseStates[e] === "pressed";
    }
    a(Me, "isMousePressed");
    function Ze(e = "left") {
      return t.mouseStates[e] === "pressed" || t.mouseStates[e] === "down";
    }
    a(Ze, "isMouseDown");
    function et(e = "left") {
      return t.mouseStates[e] === "released";
    }
    a(et, "isMouseReleased");
    function Rt() {
      return t.isMouseMoved;
    }
    a(Rt, "isMouseMoved");
    function Le(e) {
      return e === void 0 ? t.isKeyPressed : t.keyStates[e] === "pressed";
    }
    a(Le, "isKeyPressed");
    function Wt(e) {
      return e === void 0 ? t.isKeyPressedRepeat : t.keyStates[e] === "pressed" || t.keyStates[e] === "rpressed";
    }
    a(Wt, "isKeyPressedRepeat");
    function Mt(e) {
      return t.keyStates[e] === "pressed" || t.keyStates[e] === "rpressed" || t.keyStates[e] === "down";
    }
    a(Mt, "isKeyDown");
    function tt(e) {
      return e === void 0 ? t.isKeyReleased : t.keyStates[e] === "released";
    }
    a(tt, "isKeyReleased");
    function Kr() {
      return [...t.charInputted];
    }
    a(Kr, "charInputted");
    function nt() {
      return t.time;
    }
    a(nt, "time");
    function bn() {
      return t.canvas.toDataURL();
    }
    a(bn, "screenshot");
    function xn(e) {
      return e && (t.canvas.style.cursor = e), t.canvas.style.cursor;
    }
    a(xn, "cursor");
    function Hr(e = true) {
      e ? xs(t.canvas) : vs();
    }
    a(Hr, "fullscreen");
    function vn() {
      return Boolean(Es());
    }
    a(vn, "isFullscreen");
    function zr() {
      cancelAnimationFrame(t.loopID), t.stopped = true;
    }
    a(zr, "quit");
    let C = { inspect: false, timeScale: 1, showLog: true, fps: () => t.fpsCounter.fps, objCount() {
      return p.root.children.length;
    }, stepFrame: Kn, drawCalls: () => l.drawCalls, clearLog: () => p.logs = [], log: (e) => p.logs.unshift(`[${nt().toFixed(2)}].time [${e}].info`), error: (e) => p.logs.unshift(`[${nt().toFixed(2)}].time [${e}].error`), curRecording: null, get paused() {
      return t.paused;
    }, set paused(e) {
      t.paused = e, e ? w.ctx.suspend() : w.ctx.resume();
    } };
    function Z() {
      return t.dt * C.timeScale;
    }
    a(Z, "dt");
    function Jr() {
      return B("mouseWorldPos()", "toWorld(mousePos())"), Lt(K());
    }
    a(Jr, "mouseWorldPos");
    function Qr(e, n) {
      e.forEach((r, u) => {
        p.layers[r] = u + 1;
      }), n && (p.defLayer = n);
    }
    a(Qr, "layers");
    function Zr(...e) {
      return e.length > 0 && (p.cam.pos = f(...e)), p.cam.pos.clone();
    }
    a(Zr, "camPos");
    function ei(...e) {
      return e.length > 0 && (p.cam.scale = f(...e)), p.cam.scale.clone();
    }
    a(ei, "camScale");
    function ti(e) {
      return e !== void 0 && (p.cam.angle = e), p.cam.angle;
    }
    a(ti, "camRot");
    function ni(e = 12) {
      p.cam.shake = e;
    }
    a(ni, "shake");
    function rt(e) {
      return p.cam.transform.multVec2(e);
    }
    a(rt, "toScreen");
    function Lt(e) {
      return p.cam.transform.invert().multVec2(e);
    }
    a(Lt, "toWorld");
    function En(e) {
      let n = /* @__PURE__ */ new Map(), r = {}, u = {}, c = { _id: lr(), hidden: false, paused: false, children: [], parent: null, add(s) {
        if (this !== p.root)
          throw new Error("Children game object not supported yet");
        let o = En(s);
        return o.parent = this, o.trigger("add"), Ue(() => o.trigger("load")), this.children.push(o), o;
      }, readd(s) {
        return this.remove(s), this.children.push(s), s;
      }, remove(s) {
        let o = this.children.indexOf(s);
        o !== -1 && (s.parent = null, s.trigger("destroy"), this.children.splice(o, 1));
      }, removeAll(s) {
        this.every(s, (o) => this.remove(o));
      }, update() {
        this.paused || (this.revery((s) => s.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (re2(), I(this.pos), ne(this.scale), Je(this.angle), this.every((s) => s.draw()), this.trigger("draw"), ie());
      }, use(s) {
        if (!s)
          return;
        if (typeof s == "string")
          return this.use({ id: s });
        s.id && (this.unuse(s.id), n.set(s.id, {}));
        let o = s.id ? n.get(s.id) : r;
        o.cleanups = [];
        for (let h in s)
          if (!ys.has(h)) {
            if (typeof s[h] == "function") {
              let m = s[h].bind(this);
              if (bs.has(h)) {
                o.cleanups.push(this.on(h, m)), o[h] = m;
                continue;
              } else
                o[h] = m;
            } else
              o[h] = s[h];
            this[h] === void 0 && Object.defineProperty(this, h, { get: () => o[h], set: (m) => o[h] = m, configurable: true, enumerable: true });
          }
        let d = a(() => {
          if (!!s.require) {
            for (let h of s.require)
              if (!this.c(h))
                throw new Error(`comp '${s.id}' requires comp '${h}'`);
          }
        }, "checkDeps");
        this.exists() ? (s.add && s.add.call(this), s.load && Ue(() => s.load.call(this)), d()) : s.require && o.cleanups.push(this.on("add", d));
      }, unuse(s) {
        if (n.has(s)) {
          let o = n.get(s);
          o.cleanups.forEach((d) => d());
          for (let d in o)
            delete o[d];
        }
        n.delete(s);
      }, c(s) {
        return n.get(s);
      }, get(s) {
        return this.children.filter((o) => s ? o.is(s) : true).sort((o, d) => {
          var g, y, x, W, O, M;
          let h = (y = p.layers[(g = o.layer) != null ? g : p.defLayer]) != null ? y : 0, m = (W = p.layers[(x = d.layer) != null ? x : p.defLayer]) != null ? W : 0;
          return h == m ? ((O = o.z) != null ? O : 0) - ((M = d.z) != null ? M : 0) : h - m;
        });
      }, every(s, o) {
        if (typeof s == "function" && o === void 0)
          return this.get().forEach((d) => s(d));
        if (typeof s == "string" || Array.isArray(s))
          return this.get(s).forEach((d) => o(d));
      }, revery(s, o) {
        if (typeof s == "function" && o === void 0)
          return this.get().reverse().forEach((d) => s(d));
        if (typeof s == "string" || Array.isArray(s))
          return this.get(s).reverse().forEach((d) => o(d));
      }, exists() {
        var s;
        return this.parent === p.root ? true : (s = this.parent) == null ? void 0 : s.exists();
      }, is(s) {
        if (s === "*")
          return true;
        if (Array.isArray(s)) {
          for (let o of s)
            if (!this.c(o))
              return false;
          return true;
        } else
          return this.c(s) != null;
      }, on(s, o) {
        return u[s] || (u[s] = new $()), u[s].pushd(o);
      }, action(...s) {
        return console.warn("action() is deprecated. Use onUpdate() instead"), this.onUpdate(...s);
      }, trigger(s, ...o) {
        u[s] && u[s].forEach((h) => h.call(this, ...o));
        let d = p.objEvents[s];
        d && d.forEach((h) => {
          this.is(h.tag) && h.cb(this, ...o);
        });
      }, destroy() {
        var s;
        (s = this.parent) == null || s.remove(this);
      }, inspect() {
        let s = {};
        for (let [o, d] of n)
          s[o] = d.inspect ? d.inspect() : null;
        return s;
      }, onUpdate(s) {
        return this.on("update", s);
      }, onDraw(s) {
        return this.on("draw", s);
      }, onDestroy(s) {
        return this.on("destroy", s);
      }, clearEvents() {
        u = {};
      } };
      for (let s of e)
        c.use(s);
      return c;
    }
    a(En, "make");
    function qe(e, n, r) {
      return p.objEvents[e] || (p.objEvents[e] = new $()), p.objEvents[e].pushd({ tag: n, cb: r });
    }
    a(qe, "on");
    function Pe(e, n) {
      if (typeof e == "function" && n === void 0)
        return p.root.onUpdate(e);
      if (typeof e == "string")
        return qe("update", e, n);
    }
    a(Pe, "onUpdate");
    function Tn(e, n) {
      if (typeof e == "function" && n === void 0)
        return p.root.onDraw(e);
      if (typeof e == "string")
        return qe("draw", e, n);
    }
    a(Tn, "onDraw");
    function Sn(e, n, r) {
      let u = qe("collide", e, (o, d, h) => d.is(n) && r(o, d, h)), c = qe("collide", n, (o, d, h) => d.is(e) && r(d, o, h)), s = Pe(e, (o) => {
        if (!o.area)
          throw new Error("onCollide() requires the object to have area() component");
        o._checkCollisions(n, (d) => {
          r(o, d);
        });
      });
      return () => [u, c, s].forEach((o) => o());
    }
    a(Sn, "onCollide");
    function Cn(e, n) {
      return typeof e == "function" ? At(e) : Pe(e, (r) => {
        if (!r.area)
          throw new Error("onClick() requires the object to have area() component");
        r.isClicked() && n(r);
      });
    }
    a(Cn, "onClick");
    function Rn(e, n, r) {
      return Pe(e, (u) => {
        if (!u.area)
          throw new Error("onHover() requires the object to have area() component");
        u.isHovering() ? n(u) : r && r(u);
      });
    }
    a(Rn, "onHover");
    function Wn(e, n) {
      return new Promise((r) => {
        p.timers.push(new fe(e, () => {
          n && n(), r();
        }));
      });
    }
    a(Wn, "wait");
    function ri(e, n) {
      let r = false, u = a(() => {
        r || (n(), Wn(e, u));
      }, "newF");
      return u(), () => r = true;
    }
    a(ri, "loop");
    function qt(e, n) {
      if (Array.isArray(e)) {
        let r = e.map((u) => qt(u, n));
        return () => r.forEach((u) => u());
      }
      return p.on("input", () => Mt(e) && n());
    }
    a(qt, "onKeyDown");
    function H(e, n) {
      if (Array.isArray(e)) {
        let r = e.map((u) => H(u, n));
        return () => r.forEach((u) => u());
      } else
        return typeof e == "function" ? p.on("input", () => Le() && e()) : p.on("input", () => Le(e) && n());
    }
    a(H, "onKeyPress");
    function Pt(e, n) {
      if (Array.isArray(e)) {
        let r = e.map((u) => Pt(u, n));
        return () => r.forEach((u) => u());
      } else
        return typeof e == "function" ? p.on("input", () => Le() && e()) : p.on("input", () => Wt(e) && n());
    }
    a(Pt, "onKeyPressRepeat");
    function Dt(e, n) {
      if (Array.isArray(e)) {
        let r = e.map((u) => Dt(u, n));
        return () => r.forEach((u) => u());
      } else
        return typeof e == "function" ? p.on("input", () => tt() && e()) : p.on("input", () => tt(e) && n());
    }
    a(Dt, "onKeyRelease");
    function Mn(e, n) {
      return typeof e == "function" ? p.on("input", () => Ze() && e(K())) : p.on("input", () => Ze(e) && n(K()));
    }
    a(Mn, "onMouseDown");
    function At(e, n) {
      return typeof e == "function" ? p.on("input", () => Me() && e(K())) : p.on("input", () => Me(e) && n(K()));
    }
    a(At, "onMousePress");
    function Ln(e, n) {
      return typeof e == "function" ? p.on("input", () => et() && e(K())) : p.on("input", () => et(e) && n(K()));
    }
    a(Ln, "onMouseRelease");
    function qn(e) {
      return p.on("input", () => Rt() && e(K(), yn()));
    }
    a(qn, "onMouseMove");
    function Pn(e) {
      return p.on("input", () => Kr().forEach((n) => e(n)));
    }
    a(Pn, "onCharInput");
    function Dn(e) {
      return p.on("onTouchStart", e);
    }
    a(Dn, "onTouchStart");
    function An(e) {
      return p.on("onTouchMove", e);
    }
    a(An, "onTouchMove");
    function On(e) {
      return p.on("onTouchEnd", e);
    }
    a(On, "onTouchEnd");
    function In() {
      H("f1", () => {
        C.inspect = !C.inspect;
      }), H("f2", () => {
        C.clearLog();
      }), H("f8", () => {
        C.paused = !C.paused;
      }), H("f7", () => {
        C.timeScale = ge(z2(C.timeScale - 0.2, 0, 2), 1);
      }), H("f9", () => {
        C.timeScale = ge(z2(C.timeScale + 0.2, 0, 2), 1);
      }), H("f10", () => {
        C.stepFrame();
      }), H("f5", () => {
        Yt(bn(), "kaboom.png");
      }), H("f6", () => {
        C.curRecording ? (C.curRecording.download(), C.curRecording = null) : C.curRecording = Nn();
      });
    }
    a(In, "enterDebugMode");
    function Vn() {
      H("b", un);
    }
    a(Vn, "enterBurpMode");
    function Fn(e) {
      return e !== void 0 && (p.gravity = e), p.gravity;
    }
    a(Fn, "gravity");
    function ii(e, n) {
    }
    a(ii, "regCursor");
    function kn(e, n) {
      return { target: e, displacement: n, isTop: () => n.y > 0, isBottom: () => n.y < 0, isLeft: () => n.x > 0, isRight: () => n.x < 0 };
    }
    a(kn, "makeCollision");
    function it(...e) {
      return { id: "pos", pos: f(...e), moveBy(...n) {
        var o;
        let r = f(...n), u = r.x, c = r.y, s = null;
        if (this.solid && ((o = this.area) == null ? void 0 : o.shape) === "rect") {
          let d = this.worldArea();
          p.root.every((h) => {
            var Oe;
            if (!this.exists() || h === this || !h.solid || ((Oe = h.area) == null ? void 0 : Oe.shape) !== "rect")
              return;
            let m = h.worldArea(), g = yt(m, d);
            if (ae(g, f(0))) {
              let _ = Math.min(Math.abs(g.p1.x), Math.abs(g.p2.x), Math.abs(g.p1.y), Math.abs(g.p2.y)), se = (() => {
                switch (_) {
                  case Math.abs(g.p1.x):
                    return f(_, 0);
                  case Math.abs(g.p2.x):
                    return f(-_, 0);
                  case Math.abs(g.p1.y):
                    return f(0, _);
                  case Math.abs(g.p2.y):
                    return f(0, -_);
                }
              })();
              this.pos = this.pos.sub(se), d = this.worldArea(), g = yt(m, d);
            }
            let y = { p1: f(0), p2: f(u, c) }, x = 1, W = g.p1, O = f(g.p1.x, g.p2.y), M = g.p2, ee = f(g.p2.x, g.p1.y), te = 0, Ae = { right: { p1: W, p2: O }, top: { p1: O, p2: M }, left: { p1: M, p2: ee }, bottom: { p1: ee, p2: W } };
            for (let _ in Ae) {
              let se = Ae[_];
              if (u === 0 && se.p1.x === 0 && se.p2.x === 0 || c === 0 && se.p1.y === 0 && se.p2.y === 0) {
                x = 1;
                break;
              }
              let Ie = Jt(y, se);
              Ie != null && (te++, Ie < x && (x = Ie));
            }
            if (x < 1 && !(x === 0 && te == 1 && !ae(g, f(u, c)))) {
              let _ = f(-u * (1 - x), -c * (1 - x));
              u *= x, c *= x, s = kn(h, _);
            }
          });
        }
        return this.pos.x += u, this.pos.y += c, s && (this.trigger("collide", s.target, s), s.target.trigger("collide", this, kn(this, s.displacement.scale(-1)))), s;
      }, move(...n) {
        return this.moveBy(f(...n).scale(Z()));
      }, moveTo(...n) {
        if (typeof n[0] == "number" && typeof n[1] == "number")
          return this.moveTo(f(n[0], n[1]), n[2]);
        let r = n[0], u = n[1];
        if (u === void 0) {
          this.pos = f(r);
          return;
        }
        let c = r.sub(this.pos);
        if (c.len() <= u * Z()) {
          this.pos = f(r);
          return;
        }
        this.move(c.unit().scale(u));
      }, screenPos() {
        return this.fixed ? this.pos : rt(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      } };
    }
    a(it, "pos");
    function st(...e) {
      return e.length === 0 ? st(1) : { id: "scale", scale: f(...e), scaleTo(...n) {
        this.scale = f(...n);
      }, inspect() {
        return typeof this.scale == "number" ? `${ge(this.scale, 2)}` : `(${ge(this.scale.x, 2)}, ${ge(this.scale.y, 2)})`;
      } };
    }
    a(st, "scale");
    function si(e) {
      return { id: "rotate", angle: e != null ? e : 0, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    a(si, "rotate");
    function oi(...e) {
      return { id: "color", color: E(...e), inspect() {
        return this.color.str();
      } };
    }
    a(oi, "color");
    function ge(e, n) {
      return Number(e.toFixed(n));
    }
    a(ge, "toFixed");
    function ai(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${ge(this.opacity, 2)}`;
      } };
    }
    a(ai, "opacity");
    function Ot(e) {
      if (!e)
        throw new Error("please define an origin");
      return { id: "origin", origin: e, inspect() {
        return typeof this.origin == "string" ? this.origin : this.origin.str();
      } };
    }
    a(Ot, "origin");
    function ui(e) {
      return { id: "layer", layer: e, inspect() {
        var n;
        return (n = this.layer) != null ? n : p.defLayer;
      } };
    }
    a(ui, "layer");
    function ci(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    a(ci, "z");
    function li(e, n) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: n != null ? n : f(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    a(li, "follow");
    function hi(e, n) {
      let r = typeof e == "number" ? L.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(r.scale(n));
      } };
    }
    a(hi, "move");
    function It(e = {}) {
      let n = 0, r = false;
      return { id: "outview", require: ["pos", "area"], isOutOfView() {
        var s;
        let u = f((s = e.offset) != null ? s : 0), c = new ke(f(0, 0).sub(u), f(F(), G()).add(u));
        return !gt(this.screenArea(), c);
      }, onExitView(u) {
        return this.on("exitView", u);
      }, onEnterView(u) {
        return this.on("enterView", u);
      }, update() {
        if (this.isOutOfView()) {
          if (r || (this.trigger("exitView"), r = true), e.delay && (n += Z(), n < e.delay))
            return;
          e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy();
        } else
          r && (this.trigger("enterView"), r = false), n = 0, e.hide && (this.hidden = false), e.pause && (this.paused = false);
      }, inspect() {
        return this.isOutOfView();
      } };
    }
    a(It, "outview");
    function di(e = {}) {
      return typeof e == "number" ? (B("clean(time)", "cleanup({ delay: time })"), D(P({}, It({ destroy: true, delay: e })), { id: "cleanup" })) : D(P({}, It({ destroy: true, onExitView: e.onCleanup, offset: e.offset, delay: e.delay })), { id: "cleanup" });
    }
    a(di, "cleanup");
    function fi(e = {}) {
      var r, u;
      let n = {};
      return { id: "area", add() {
        this.area.cursor && this.onHover(() => xn(this.area.cursor));
      }, area: { shape: "rect", offset: (r = e.offset) != null ? r : f(0), width: e.width, height: e.height, scale: (u = e.scale) != null ? u : f(1), cursor: e.cursor }, isClicked() {
        return Me() && this.isHovering();
      }, isHovering() {
        let c = this.fixed ? K() : Lt(K());
        return this.hasPoint(c);
      }, isColliding(c) {
        if (!c.area || !c.exists())
          return false;
        let s = this.worldArea(), o = c.worldArea();
        return nn(s, o);
      }, isTouching(c) {
        if (!c.area || !c.exists())
          return false;
        let s = this.worldArea(), o = c.worldArea();
        return yr(s, o);
      }, onClick(c) {
        return this.onUpdate(() => {
          this.isClicked() && c();
        });
      }, onHover(c, s) {
        return this.onUpdate(() => {
          this.isHovering() ? c() : s && s();
        });
      }, onCollide(c, s) {
        let o = this.onUpdate(() => this._checkCollisions(c, s)), d = this.on("collide", (h, m) => h.is(c) && s(h, m));
        return () => [o, d].forEach((h) => h());
      }, clicks(...c) {
        return B("clicks()", "onClick()"), this.onClick(...c);
      }, hovers(...c) {
        return B("hovers()", "onHover()"), this.onHover(...c);
      }, collides(...c) {
        return B("collides()", "onCollide()"), this.onCollide(...c);
      }, hasPoint(c) {
        return Ut(this.worldArea(), c);
      }, pushOut(c) {
        var g;
        if (c === this || ((g = c.area) == null ? void 0 : g.shape) !== "rect")
          return null;
        let s = this.worldArea(), o = c.worldArea(), d = yt(s, o);
        if (!ae(d, f(0)))
          return null;
        let h = Math.min(Math.abs(d.p1.x), Math.abs(d.p2.x), Math.abs(d.p1.y), Math.abs(d.p2.y)), m = (() => {
          switch (h) {
            case Math.abs(d.p1.x):
              return f(h, 0);
            case Math.abs(d.p2.x):
              return f(-h, 0);
            case Math.abs(d.p1.y):
              return f(0, h);
            case Math.abs(d.p2.y):
              return f(0, -h);
          }
        })();
        this.pos = this.pos.add(m);
      }, pushOutAll() {
        p.root.every(this.pushOut);
      }, _checkCollisions(c) {
        p.root.every(c, (s) => {
          this === s || !this.exists() || n[s._id] || this.isColliding(s) && (this.trigger("collide", s, null), n[s._id] = s);
        });
        for (let s in n) {
          let o = n[s];
          this.isColliding(o) || delete n[s];
        }
      }, worldArea() {
        var m, g, y, x;
        let c = (m = this.area.width) != null ? m : this.width, s = (g = this.area.height) != null ? g : this.height;
        if (c == null || s == null)
          throw new Error("failed to get area dimension");
        let o = f((y = this.scale) != null ? y : 1).scale(this.area.scale);
        c *= o.x, s *= o.y;
        let d = Ye(this.origin || Ne), h = ((x = this.pos) != null ? x : f(0)).add(this.area.offset).sub(d.add(1, 1).scale(0.5).scale(c, s));
        return { shape: "rect", p1: h, p2: f(h.x + c, h.y + s) };
      }, screenArea() {
        let c = this.worldArea();
        return this.fixed ? c : { shape: "rect", p1: rt(c.p1), p2: rt(c.p2) };
      } };
    }
    a(fi, "area");
    function De(e) {
      return { color: e.color, opacity: e.opacity, origin: e.origin, outline: e.outline, fixed: e.fixed, shader: U.shaders[e.shader], uniform: e.uniform };
    }
    a(De, "getRenderProps");
    function Vt(e, n = {}) {
      var s;
      let r = null, u = null;
      function c(o, d, h, m) {
        let g = f(1, 1);
        return h && m ? (g.x = h / (o.width * d.w), g.y = m / (o.height * d.h)) : h ? (g.x = h / (o.width * d.w), g.y = g.x) : m && (g.y = m / (o.height * d.h), g.x = g.y), g;
      }
      return a(c, "calcTexScale"), { id: "sprite", width: 0, height: 0, frame: n.frame || 0, quad: n.quad || new k(0, 0, 1, 1), animSpeed: (s = n.animSpeed) != null ? s : 1, load() {
        if (typeof e == "string" ? r = U.sprites[e] : r = e, !r)
          throw new Error(`sprite not found: "${e}"`);
        let o = r.frames[0].clone();
        n.quad && (o = o.scale(n.quad));
        let d = c(r.tex, o, n.width, n.height);
        this.width = r.tex.width * o.w * d.x, this.height = r.tex.height * o.h * d.y, n.anim && this.play(n.anim);
      }, draw() {
        hn(D(P({}, De(this)), { sprite: r, frame: this.frame, quad: this.quad, flipX: n.flipX, flipY: n.flipY, tiled: n.tiled, width: n.width, height: n.height }));
      }, update() {
        if (!u)
          return;
        let o = r.anims[u.name];
        if (typeof o == "number") {
          this.frame = o;
          return;
        }
        if (o.speed === 0)
          throw new Error("sprite anim speed cannot be 0");
        u.timer += Z() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, o.from > o.to ? (this.frame--, this.frame < o.to && (u.loop ? this.frame = o.from : (this.frame++, u.onEnd(), this.stop()))) : (this.frame++, this.frame > o.to && (u.loop ? this.frame = o.from : (this.frame--, u.onEnd(), this.stop()))));
      }, play(o, d = {}) {
        var m, g, y, x, W, O, M;
        if (!r) {
          Ue(() => {
            this.play(o);
          });
          return;
        }
        let h = r.anims[o];
        if (h == null)
          throw new Error(`anim not found: ${o}`);
        u && this.stop(), u = { name: o, timer: 0, loop: (g = (m = d.loop) != null ? m : h.loop) != null ? g : false, pingpong: (x = (y = d.pingpong) != null ? y : h.pingpong) != null ? x : false, speed: (O = (W = d.speed) != null ? W : h.speed) != null ? O : 10, onEnd: (M = d.onEnd) != null ? M : () => {
        } }, typeof h == "number" ? this.frame = h : this.frame = h.from, this.trigger("animPlay", o), this.trigger("animStart", o);
      }, stop() {
        if (!u)
          return;
        let o = u.name;
        u = null, this.trigger("animEnd", o);
      }, numFrames() {
        return r ? r.frames.length : 0;
      }, curAnim() {
        return u == null ? void 0 : u.name;
      }, flipX(o) {
        n.flipX = o;
      }, flipY(o) {
        n.flipY = o;
      }, onAnimEnd(o, d) {
        return this.on("animEnd", (h) => {
          h === o && d();
        });
      }, onAnimStart(o, d) {
        return this.on("animStart", (h) => {
          h === o && d();
        });
      }, inspect() {
        let o = "";
        return typeof e == "string" ? o += JSON.stringify(e) : o += "[blob]", o;
      } };
    }
    a(Vt, "sprite");
    function pi(e, n = {}) {
      function r(u) {
        var s, o;
        let c = me(D(P({}, De(u)), { text: u.text + "", size: u.textSize, font: u.font, width: n.width && u.width, letterSpacing: u.letterSpacing, lineSpacing: u.lineSpacing, transform: u.transform, styles: u.styles }));
        return u.width = c.width / (((s = u.scale) == null ? void 0 : s.x) || 1), u.height = c.height / (((o = u.scale) == null ? void 0 : o.y) || 1), c;
      }
      return a(r, "update"), { id: "text", text: e, textSize: n.size, font: n.font, width: n.width, height: 0, lineSpacing: n.lineSpacing, letterSpacing: n.letterSpacing, transform: n.transform, styles: n.styles, load() {
        r(this);
      }, draw() {
        we(r(this));
      } };
    }
    a(pi, "text");
    function mi(e, n, r = {}) {
      return { id: "rect", width: e, height: n, radius: r.radius || 0, draw() {
        Q(D(P({}, De(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    a(mi, "rect");
    function wi(e, n) {
      return { id: "rect", width: e, height: n, draw() {
        pe(D(P({}, De(this)), { width: this.width, height: this.height }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    a(wi, "uvquad");
    function gi(e) {
      return { id: "circle", radius: e, draw() {
        Ct(D(P({}, De(this)), { radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    a(gi, "circle");
    function Ui(e = 1, n = E(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: n } };
    }
    a(Ui, "outline");
    function Gn(e, n) {
      let r = new $();
      return e && n && r.pushd(new fe(e, n)), { id: "timer", wait(u, c) {
        return r.pushd(new fe(u, c));
      }, update() {
        r.forEach((u, c) => {
          u.tick(Z()) && r.delete(c);
        });
      } };
    }
    a(Gn, "timer");
    let yi = 640, bi = 65536;
    function xi(e = {}) {
      var s, o, d;
      let n = 0, r = null, u = null, c = true;
      return { id: "body", require: ["pos", "area"], jumpForce: (s = e.jumpForce) != null ? s : yi, weight: (o = e.weight) != null ? o : 1, solid: (d = e.solid) != null ? d : true, update() {
        var m;
        let h = false;
        if (r) {
          let g = this.worldArea(), y = r.worldArea(), x = g.p2.y, W = y.p1.y, O = g.p1.x, M = g.p2.x, ee = y.p1.x, te = y.p2.x;
          !r.exists() || x !== W || M < ee || O > te ? (this.trigger("fall", r), r = null, u = null, h = true) : u && r.pos && (this.pos = this.pos.add(r.pos.sub(u)), u = r.pos.clone());
        }
        if (!r) {
          let g = this.move(0, n);
          if (g)
            if (g.isBottom()) {
              r = g.target;
              let y = n;
              n = 0, r.pos && (u = r.pos.clone()), h || (this.trigger("ground", r), c = true);
            } else
              g.isTop() && (n = 0, this.trigger("headbutt", g.target));
          n += Fn() * this.weight * Z(), n = Math.min(n, (m = e.maxVel) != null ? m : bi);
        }
      }, curPlatform() {
        return r;
      }, isGrounded() {
        return r !== null;
      }, grounded() {
        return B("grounded()", "isGrounded()"), this.isGrounded();
      }, isFalling() {
        return n > 0;
      }, falling() {
        return B("falling()", "isFalling()"), this.isFalling();
      }, jump(h) {
        r = null, u = null, n = -h || -this.jumpForce;
      }, doubleJump(h) {
        this.isGrounded() ? this.jump(h) : c && (c = false, this.jump(h), this.trigger("doubleJump"));
      }, onGround(h) {
        return this.on("ground", h);
      }, onFall(h) {
        return this.on("fall", h);
      }, onHeadbutt(h) {
        return this.on("headbutt", h);
      }, onDoubleJump(h) {
        return this.on("doubleJump", h);
      } };
    }
    a(xi, "body");
    function vi(e, n = {}) {
      let r = U.shaders[e];
      return { id: "shader", shader: e, uniform: n };
    }
    a(vi, "shader");
    function Ei() {
      return { id: "solid", require: ["area"], solid: true };
    }
    a(Ei, "solid");
    function Ti() {
      return { id: "fixed", fixed: true };
    }
    a(Ti, "fixed");
    function Ft() {
      return { id: "stay", stay: true };
    }
    a(Ft, "stay");
    function Si(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(n = 1) {
        this.setHP(e - n), this.trigger("hurt");
      }, heal(n = 1) {
        this.setHP(e + n), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(n) {
        e = n, e <= 0 && this.trigger("death");
      }, onHurt(n) {
        return this.on("hurt", n);
      }, onHeal(n) {
        return this.on("heal", n);
      }, onDeath(n) {
        return this.on("death", n);
      }, inspect() {
        return `${e}`;
      } };
    }
    a(Si, "health");
    function Ci(e, n = {}) {
      var s;
      if (e == null)
        throw new Error("lifespan() requires time");
      let r = 0, u = (s = n.fade) != null ? s : 0, c = Math.max(e - u, 0);
      return { id: "lifespan", update() {
        r += Z(), r >= c && (this.opacity = dt(r, c, e, 1, 0)), r >= e && this.destroy();
      } };
    }
    a(Ci, "lifespan");
    function Ri(e, n, r) {
      if (!e)
        throw new Error("state() requires an initial state");
      let u = {};
      function c(d) {
        u[d] || (u[d] = { enter: [], leave: [], update: [], draw: [] });
      }
      a(c, "initStateHook");
      function s(d, h, m) {
        c(h), u[h][d].push(m);
      }
      a(s, "on");
      function o(d, h, ...m) {
        c(h), u[h][d].forEach((g) => g(...m));
      }
      return a(o, "trigger"), { id: "state", state: e, enterState(d, ...h) {
        if (n && !n.includes(d))
          throw new Error(`State not found: ${d}`);
        let m = this.state;
        if (r) {
          if (!(r == null ? void 0 : r[m]))
            return;
          let g = typeof r[m] == "string" ? [r[m]] : r[m];
          if (!g.includes(d))
            throw new Error(`Cannot transition state from "${m}" to "${d}". Available transitions: ${g.map((y) => `"${y}"`).join(", ")}`);
        }
        o("leave", m, ...h), this.state = d, o("enter", d, ...h), o("enter", `${m} -> ${d}`, ...h);
      }, onStateTransition(d, h, m) {
        s("enter", `${d} -> ${h}`, m);
      }, onStateEnter(d, h) {
        s("enter", d, h);
      }, onStateUpdate(d, h) {
        s("update", d, h);
      }, onStateDraw(d, h) {
        s("draw", d, h);
      }, onStateLeave(d, h) {
        s("leave", d, h);
      }, update() {
        o("update", this.state);
      }, draw() {
        o("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    a(Ri, "state");
    function Ue(e) {
      t.loaded ? e() : p.on("load", e);
    }
    a(Ue, "onLoad");
    function Wi(e, n) {
      p.scenes[e] = n;
    }
    a(Wi, "scene");
    function Mi(e, ...n) {
      if (!p.scenes[e])
        throw new Error(`scene not found: ${e}`);
      let r = p.on("updateStart", () => {
        p.events = {}, p.objEvents = { add: new $(), update: new $(), draw: new $(), destroy: new $() }, p.root.every((u) => {
          u.is("stay") || p.root.remove(u);
        }), p.root.clearEvents(), p.timers = new $(), p.cam = { pos: ot(), scale: f(1), angle: 0, shake: 0, transform: new R() }, p.layers = {}, p.defLayer = null, p.gravity = Vr, p.scenes[e](...n), i2.debug !== false && In(), i2.burp && Vn(), r();
      });
    }
    a(Mi, "go");
    function Li(e, n) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (r) {
        return n ? (_n(e, n), n) : null;
      }
    }
    a(Li, "getData");
    function _n(e, n) {
      window.localStorage[e] = JSON.stringify(n);
    }
    a(_n, "setData");
    function Bn(e) {
      let n = e(ye);
      for (let r in n)
        ye[r] = n[r], i2.global !== false && (window[r] = n[r]);
      return ye;
    }
    a(Bn, "plug");
    function ot() {
      return f(F() / 2, G() / 2);
    }
    a(ot, "center");
    function qi(e, n) {
      return { id: "grid", gridPos: n.clone(), setGridPos(...r) {
        let u = f(...r);
        this.gridPos = u.clone(), this.pos = f(e.offset().x + this.gridPos.x * e.gridWidth(), e.offset().y + this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(f(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(f(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(f(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(f(0, 1)));
      } };
    }
    a(qi, "grid");
    function Pi(e, n) {
      if (!n.width || !n.height)
        throw new Error("Must provide level grid width & height.");
      let r = [], u = f(n.pos || f(0)), c = 0, s = { offset() {
        return u.clone();
      }, gridWidth() {
        return n.width;
      }, gridHeight() {
        return n.height;
      }, getPos(...o) {
        let d = f(...o);
        return f(u.x + d.x * n.width, u.y + d.y * n.height);
      }, spawn(o, ...d) {
        let h = f(...d), m = (() => {
          if (n[o]) {
            if (typeof n[o] != "function")
              throw new Error("level symbol def must be a function returning a component list");
            return n[o](h);
          } else if (n.any)
            return n.any(o, h);
        })();
        if (!m)
          return;
        let g = f(u.x + h.x * n.width, u.y + h.y * n.height);
        for (let x of m)
          if (x.id === "pos") {
            g.x += x.pos.x, g.y += x.pos.y;
            break;
          }
        m.push(it(g)), m.push(qi(this, h));
        let y = p.root.add(m);
        return r.push(y), y;
      }, width() {
        return c * n.width;
      }, height() {
        return e.length * n.height;
      }, destroy() {
        for (let o of r)
          o.destroy();
      } };
      return e.forEach((o, d) => {
        let h = o.split("");
        c = Math.max(h.length, c), h.forEach((m, g) => {
          s.spawn(m, f(g, d));
        });
      }), s;
    }
    a(Pi, "addLevel");
    function Nn(e) {
      let n = t.canvas.captureStream(e), r = w.ctx.createMediaStreamDestination();
      w.masterNode.connect(r);
      let u = r.stream, [c] = u.getAudioTracks(), s = new MediaRecorder(n), o = [];
      return s.ondataavailable = (d) => {
        d.data.size > 0 && o.push(d.data);
      }, s.onerror = (d) => {
        w.masterNode.disconnect(r), n.getTracks().forEach((h) => h.stop());
      }, s.start(), { resume() {
        s.resume();
      }, pause() {
        s.pause();
      }, download(d = "kaboom.mp4") {
        s.onstop = () => {
          ur(new Blob(o, { type: "video/mp4" }), d);
        }, s.stop(), w.masterNode.disconnect(r), n.getTracks().forEach((h) => h.stop());
      } };
    }
    a(Nn, "record");
    function Di() {
      B("focus()", "canvas.focus()"), t.canvas.focus();
    }
    a(Di, "focus");
    function jn() {
      return document.activeElement === t.canvas;
    }
    a(jn, "isFocused");
    function kt(e) {
      return p.root.add(e);
    }
    a(kt, "add");
    function Ai(e) {
      return p.root.readd(e);
    }
    a(Ai, "readd");
    function at(e) {
      return p.root.remove(e);
    }
    a(at, "destroy");
    function Oi(e) {
      return p.root.removeAll(e);
    }
    a(Oi, "destroyAll");
    function Ii(...e) {
      return p.root.get(...e);
    }
    a(Ii, "get");
    function Vi(...e) {
      return p.root.every(...e);
    }
    a(Vi, "every");
    function Fi(...e) {
      return p.root.revery(...e);
    }
    a(Fi, "revery");
    function Yn(e = 2, n = 1) {
      let r = 0;
      return { id: "explode", require: ["scale"], update() {
        let u = Math.sin(r * e) * n;
        u < 0 && at(this), this.scale = f(u), r += Z();
      } };
    }
    a(Yn, "explode");
    let $n = null, Xn = null;
    J(null, Lr).then((e) => $n = e), J(null, qr).then((e) => Xn = e);
    function ki(e, n = {}) {
      var o, d;
      let r = (n.speed || 1) * 5, u = n.scale || 1, c = kt([it(e), Vt(Xn), st(0), Ft(), Ot("center"), Yn(r, u), ...((o = n.boomComps) != null ? o : () => [])()]), s = kt([it(e), Vt($n), st(0), Ft(), Ot("center"), Gn(0.4 / r, () => s.use(Yn(r, u))), ...((d = n.kaComps) != null ? d : () => [])()]);
      return { destroy() {
        at(s), at(c);
      } };
    }
    a(ki, "addKaboom");
    function Ms() {
      return t.numFrames;
    }
    a(Ms, "frames");
    function Kn() {
      p.trigger("updateStart"), p.timers.forEach((e, n) => {
        e.time -= Z(), e.time <= 0 && (e.action(), p.timers.delete(n));
      }), p.root.update();
    }
    a(Kn, "updateFrame");
    function Gi() {
      let e = p.cam, n = L.fromAngle(Ge(0, 360)).scale(e.shake);
      e.shake = Ve(e.shake, 0, 5 * Z()), e.transform = new R().translate(ot()).scale(e.scale).rotateZ(e.angle).translate(e.pos.scale(-1).add(n)), p.root.draw();
    }
    a(Gi, "drawFrame");
    function _i() {
      let e = A();
      if (e === 1)
        t.loaded = true, p.trigger("load");
      else {
        let n = F() / 2, r = 24 / t.scale, u = f(F() / 2, G() / 2).sub(f(n / 2, r / 2));
        Q({ pos: f(0), width: F(), height: G(), color: E(0, 0, 0) }), Q({ pos: u, width: n, height: r, fill: false, outline: { width: 4 / t.scale } }), Q({ pos: u, width: n * e, height: r });
      }
    }
    a(_i, "drawLoadScreen");
    function Hn(e, n) {
      let r = f(8);
      re2(), I(e), ne(1 / t.scale);
      let u = me({ text: n, font: U.fonts[rn], size: 16, pos: r, color: E(255, 255, 255), fixed: true }), c = u.width + r.x * 2, s = u.height + r.x * 2;
      e.x + c / t.scale >= F() && I(f(-c, 0)), e.y + s / t.scale >= G() && I(f(0, -s)), Q({ width: c, height: s, color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), we(u), ie();
    }
    a(Hn, "drawInspectText");
    function zn() {
      var e, n;
      if (C.inspect) {
        let r = null, u = v.fromArray((e = i2.inspectColor) != null ? e : [0, 0, 255]);
        if (p.root.every((c) => {
          if (!c.area || c.hidden)
            return;
          r || c.isHovering() && (r = c);
          let s = r === c ? 8 : 4, o = c.worldArea(), d = o.p2.x - o.p1.x, h = o.p2.y - o.p1.y;
          Q({ pos: o.p1, width: d, height: h, outline: { width: s, color: u }, fill: false, fixed: c.fixed });
        }), r) {
          let c = [], s = r.inspect();
          for (let o in s)
            s[o] ? c.push(`${o}: ${s[o]}`) : c.push(`${o}`);
          Hn(K(), c.join(`
`));
        }
        Hn(f(8 / t.scale), `FPS: ${C.fps()}`);
      }
      if (C.paused) {
        re2(), I(F(), 0), ne(1 / t.scale), I(-8, 8);
        let r = 32;
        Q({ width: r, height: r, origin: "topright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let u = 1; u <= 2; u++)
          Q({ width: 4, height: r * 0.6, origin: "center", pos: f(-r / 3 * u, r * 0.5), color: E(255, 255, 255), radius: 2, fixed: true });
        ie();
      }
      if (C.timeScale !== 1) {
        re2(), I(F(), G()), ne(1 / t.scale), I(-8, -8);
        let r = 8, u = me({ text: C.timeScale.toFixed(1), font: U.fonts[rn], size: 16, color: E(255, 255, 255), pos: f(-r), origin: "botright", fixed: true });
        Q({ width: u.width + r * 2 + r * 4, height: u.height + r * 2, origin: "botright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let c = 0; c < 2; c++) {
          let s = C.timeScale < 1;
          fn({ p1: f(-u.width - r * (s ? 2 : 3.5), -r), p2: f(-u.width - r * (s ? 2 : 3.5), -r - u.height), p3: f(-u.width - r * (s ? 3.5 : 2), -r - u.height / 2), pos: f(-c * r * 1 + (s ? -r * 0.5 : 0), 0), color: E(255, 255, 255), fixed: true });
        }
        we(u), ie();
      }
      if (C.curRecording && (re2(), I(0, G()), ne(1 / t.scale), I(24, -24), Ct({ radius: 12, color: E(255, 0, 0), opacity: Kt(0, 1, nt() * 4), fixed: true }), ie()), C.showLog && p.logs.length > 0) {
        re2(), I(0, G()), ne(1 / t.scale), I(8, -8);
        let r = 8, u = (n = i2.logMax) != null ? n : 1;
        p.logs.length > u && (p.logs = p.logs.slice(0, u));
        let c = me({ text: p.logs.join(`
`), font: U.fonts[rn], pos: f(r, -r), origin: "botleft", size: 16, width: F() * t.scale * 0.6, lineSpacing: r / 2, fixed: true, styles: { time: { color: E(127, 127, 127) }, info: { color: E(255, 255, 255) }, error: { color: E(255, 0, 127) } } });
        Q({ width: c.width + r * 2, height: c.height + r * 2, origin: "botleft", color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), we(c), ie();
      }
    }
    a(zn, "drawDebug"), i2.debug !== false && In(), i2.burp && Vn(), window.addEventListener("error", (e) => {
      C.error(`Error: ${e.error.message}`), zr(), Jn(() => {
        A() === 1 && (He(), zn(), ze());
      });
    });
    function Jn(e) {
      let n = a((r) => {
        if (document.visibilityState !== "visible") {
          t.loopID = requestAnimationFrame(n);
          return;
        }
        let u = r / 1e3, c = u - t.realTime;
        t.realTime = u, t.skipTime || (t.dt = c, t.time += t.dt, t.fpsCounter.tick(t.dt)), t.skipTime = false, t.numFrames++, e();
        for (let s in t.keyStates)
          t.keyStates[s] = kr(t.keyStates[s]);
        for (let s in t.mouseStates)
          t.mouseStates[s] = kr(t.mouseStates[s]);
        t.charInputted = [], t.isMouseMoved = false, t.isKeyPressed = false, t.isKeyPressedRepeat = false, t.isKeyReleased = false, t.loopID = requestAnimationFrame(n);
      }, "frame");
      t.stopped = false, t.loopID = requestAnimationFrame(n);
    }
    a(Jn, "run"), Jn(() => {
      Un(), t.loaded ? (p.trigger("input"), C.paused || Kn(), He(), Gi(), i2.debug !== false && zn(), ze()) : (He(), _i(), ze());
    }), X("apl386", Tr, 45, 74), X("apl386o", Sr, 45, 74), X("sink", Cr, 6, 8, { chars: "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C" }), X("sinko", Rr, 8, 10), He(), ze();
    let ye = { loadRoot: q, loadSprite: J, loadSpriteAtlas: Ee, loadSound: Ce, loadFont: X, loadShader: Se, loadAseprite: Et, loadPedit: $e, loadBean: _r, load: S, width: F, height: G, center: ot, dt: Z, time: nt, screenshot: bn, record: Nn, isFocused: jn, focus: Di, cursor: xn, regCursor: ii, fullscreen: Hr, isFullscreen: vn, onLoad: Ue, isTouch: () => t.isTouch, layers: Qr, camPos: Zr, camScale: ei, camRot: ti, shake: ni, toScreen: rt, toWorld: Lt, gravity: Fn, add: kt, readd: Ai, destroy: at, destroyAll: Oi, get: Ii, every: Vi, revery: Fi, pos: it, scale: st, rotate: si, color: oi, opacity: ai, origin: Ot, layer: ui, area: fi, sprite: Vt, text: pi, rect: mi, circle: gi, uvquad: wi, outline: Ui, body: xi, shader: vi, timer: Gn, solid: Ei, fixed: Ti, stay: Ft, health: Si, lifespan: Ci, z: ci, move: hi, outview: It, cleanup: di, follow: li, state: Ri, on: qe, onUpdate: Pe, onDraw: Tn, onCollide: Sn, onClick: Cn, onHover: Rn, onKeyDown: qt, onKeyPress: H, onKeyPressRepeat: Pt, onKeyRelease: Dt, onMouseDown: Mn, onMousePress: At, onMouseRelease: Ln, onMouseMove: qn, onCharInput: Pn, onTouchStart: Dn, onTouchMove: An, onTouchEnd: On, mousePos: K, mouseWorldPos: Jr, mouseDeltaPos: yn, isKeyDown: Mt, isKeyPressed: Le, isKeyPressedRepeat: Wt, isKeyReleased: tt, isMouseDown: Ze, isMousePressed: Me, isMouseReleased: et, isMouseMoved: Rt, loop: ri, wait: Wn, play: Xe, volume: Br, burp: un, audioCtx: w.ctx, Timer: fe, Line: le, Rect: ke, Circle: ht, Vec2: L, Color: v, Mat4: R, Quad: k, RNG: be, rng: mr, rand: Ge, randi: Ht, randSeed: wr, vec2: f, rgb: E, hsl2rgb: fr, quad: pr, choose: Ur, chance: gr, lerp: Ve, map: dt, mapc: dr, wave: Kt, deg2rad: he, rad2deg: Xt, testAreaRect: gt, testAreaLine: Zt, testAreaCircle: en, testAreaPolygon: tn, testAreaPoint: Ut, testAreaArea: nn, testLineLine: ce, testRectRect: zt, testRectLine: ft, testRectPoint: ae, testPolygonPoint: xe, testLinePolygon: _e, testPolygonPolygon: wt, testCircleCircle: Qt, testCirclePoint: mt, testRectPolygon: pt, drawSprite: hn, drawText: Xr, formatText: me, drawRect: Q, drawLine: We, drawLines: dn, drawTriangle: fn, drawCircle: Ct, drawEllipse: pn, drawUVQuad: pe, drawPolygon: Qe, drawFormattedText: we, pushTransform: re2, popTransform: ie, pushTranslate: I, pushRotate: Je, pushScale: ne, debug: C, scene: Wi, go: Mi, addLevel: Pi, getData: Li, setData: _n, plug: Bn, ASCII_CHARS: Ar, CP437_CHARS: hs, canvas: t.canvas, addKaboom: ki, LEFT: L.LEFT, RIGHT: L.RIGHT, UP: L.UP, DOWN: L.DOWN, RED: v.RED, GREEN: v.GREEN, BLUE: v.BLUE, YELLOW: v.YELLOW, MAGENTA: v.MAGENTA, CYAN: v.CYAN, WHITE: v.WHITE, BLACK: v.BLACK, keyIsDown: T("keyIsDown()", "isKeyDown()", Mt), keyIsPressed: T("keyIsPressed()", "isKeyPressed()", Le), keyIsPressedRep: T("keyIsPressedRep()", "isKeyPressedRepeat()", Wt), keyIsReleased: T("keyIsReleased()", "isKeyReleased()", tt), mouseIsDown: T("mouseIsDown()", "isMouseDown()", Ze), mouseIsClicked: T("mouseIsClicked()", "isMousePressed()", Me), mouseIsReleased: T("mouseIsReleased()", "isMouseReleased()", et), mouseIsMoved: T("mouseIsMoved()", "isMouseMoved()", Rt), dir: T("dir()", "Vec2.fromAngle()", L.fromAngle), action: T("action()", "onUpdate()", Pe), render: T("render()", "onDraw()", Tn), collides: T("collides()", "onCollide()", Sn), clicks: T("clicks()", "onClick()", Cn), hovers: T("hovers()", "onHover()", Rn), keyDown: T("keyDown()", "onKeyDown()", qt), keyPress: T("keyPress()", "onKeyPress()", H), keyPressRep: T("keyPressRep()", "onKeyPressRepeat()", Pt), keyRelease: T("keyRelease()", "onKeyRelease()", Dt), mouseDown: T("mouseDown()", "onMouseDown()", Mn), mouseClick: T("mouseClick()", "onMousePress()", At), mouseRelease: T("mouseRelease()", "onMouseRelease()", Ln), mouseMove: T("mouseMove()", "onMouseMove()", qn), charInput: T("charInput()", "onCharInput()", Pn), touchStart: T("touchStart()", "onTouchStart()", Dn), touchMove: T("touchMove()", "onTouchMove()", An), touchEnd: T("touchEnd()", "onTouchEnd()", On), focused: T("focused()", "isFocused()", jn), ready: T("ready()", "onLoad()", Ue) };
    if (i2.plugins && i2.plugins.forEach(Bn), i2.global !== false)
      for (let e in ye)
        window[e] = ye[e];
    return ye;
  }, "default");

  // node_modules/engine.io-parser/build/esm/commons.js
  var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
  Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  var ERROR_PACKET = { type: "error", data: "parser error" };

  // node_modules/engine.io-parser/build/esm/encodePacket.browser.js
  var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  var isView = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  var encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  var encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      const content = fileReader.result.split(",")[1];
      callback("b" + content);
    };
    return fileReader.readAsDataURL(data);
  };
  var encodePacket_browser_default = encodePacket;

  // node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (let i2 = 0; i2 < chars.length; i2++) {
    lookup[chars.charCodeAt(i2)] = i2;
  }
  var decode = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i2 = 0; i2 < len; i2 += 4) {
      encoded1 = lookup[base64.charCodeAt(i2)];
      encoded2 = lookup[base64.charCodeAt(i2 + 1)];
      encoded3 = lookup[base64.charCodeAt(i2 + 2)];
      encoded4 = lookup[base64.charCodeAt(i2 + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };

  // node_modules/engine.io-parser/build/esm/decodePacket.browser.js
  var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
  var decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  var decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer2) {
      const decoded = decode(data);
      return mapBinary(decoded, binaryType);
    } else {
      return { base64: true, data };
    }
  };
  var mapBinary = (data, binaryType) => {
    switch (binaryType) {
      case "blob":
        return data instanceof ArrayBuffer ? new Blob([data]) : data;
      case "arraybuffer":
      default:
        return data;
    }
  };
  var decodePacket_browser_default = decodePacket;

  // node_modules/engine.io-parser/build/esm/index.js
  var SEPARATOR = String.fromCharCode(30);
  var encodePayload = (packets, callback) => {
    const length2 = packets.length;
    const encodedPackets = new Array(length2);
    let count = 0;
    packets.forEach((packet, i2) => {
      encodePacket_browser_default(packet, false, (encodedPacket) => {
        encodedPackets[i2] = encodedPacket;
        if (++count === length2) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  var decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      const decodedPacket = decodePacket_browser_default(encodedPackets[i2], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  var protocol = 4;

  // node_modules/@socket.io/component-emitter/index.mjs
  function Emitter(obj) {
    if (obj)
      return mixin(obj);
  }
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
  };
  Emitter.prototype.once = function(event, fn) {
    function on4() {
      this.off(event, on4);
      fn.apply(this, arguments);
    }
    on4.fn = fn;
    this.on(event, on4);
    return this;
  };
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (arguments.length == 0) {
      this._callbacks = {};
      return this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks)
      return this;
    if (arguments.length == 1) {
      delete this._callbacks["$" + event];
      return this;
    }
    var cb;
    for (var i2 = 0; i2 < callbacks.length; i2++) {
      cb = callbacks[i2];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i2, 1);
        break;
      }
    }
    if (callbacks.length === 0) {
      delete this._callbacks["$" + event];
    }
    return this;
  };
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
        callbacks[i2].apply(this, args);
      }
    }
    return this;
  };
  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
  };
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };

  // node_modules/engine.io-client/build/esm/globalThis.browser.js
  var globalThisShim = (() => {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();

  // node_modules/engine.io-client/build/esm/util.js
  function pick(obj, ...attr) {
    return attr.reduce((acc, k2) => {
      if (obj.hasOwnProperty(k2)) {
        acc[k2] = obj[k2];
      }
      return acc;
    }, {});
  }
  var NATIVE_SET_TIMEOUT = setTimeout;
  var NATIVE_CLEAR_TIMEOUT = clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
    }
  }
  var BASE64_OVERHEAD = 1.33;
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    let c = 0, length2 = 0;
    for (let i2 = 0, l = str.length; i2 < l; i2++) {
      c = str.charCodeAt(i2);
      if (c < 128) {
        length2 += 1;
      } else if (c < 2048) {
        length2 += 2;
      } else if (c < 55296 || c >= 57344) {
        length2 += 3;
      } else {
        i2++;
        length2 += 4;
      }
    }
    return length2;
  }

  // node_modules/engine.io-client/build/esm/transport.js
  var TransportError = class extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  };
  var Transport = class extends Emitter {
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.readyState = "";
      this.socket = opts.socket;
    }
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    open() {
      if (this.readyState === "closed" || this.readyState === "") {
        this.readyState = "opening";
        this.doOpen();
      }
      return this;
    }
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      } else {
      }
    }
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    onData(data) {
      const packet = decodePacket_browser_default(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
  };

  // node_modules/engine.io-client/build/esm/contrib/yeast.js
  var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var length = 64;
  var map = {};
  var seed = 0;
  var i = 0;
  var prev;
  function encode(num) {
    let encoded = "";
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
  }
  function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
      return seed = 0, prev = now;
    return now + "." + encode(seed++);
  }
  for (; i < length; i++)
    map[alphabet[i]] = i;

  // node_modules/engine.io-client/build/esm/contrib/parseqs.js
  function encode2(obj) {
    let str = "";
    for (let i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        if (str.length)
          str += "&";
        str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
      }
    }
    return str;
  }
  function decode2(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
      let pair = pairs[i2].split("=");
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }

  // node_modules/engine.io-client/build/esm/contrib/has-cors.js
  var value = false;
  try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
  } catch (err) {
  }
  var hasCORS = value;

  // node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
  function XHR(opts) {
    const xdomain = opts.xdomain;
    try {
      if (typeof XMLHttpRequest !== "undefined" && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {
    }
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
  }

  // node_modules/engine.io-client/build/esm/transports/polling.js
  function empty() {
  }
  var hasXHR2 = function() {
    const xhr = new XHR({
      xdomain: false
    });
    return xhr.responseType != null;
  }();
  var Polling = class extends Transport {
    constructor(opts) {
      super(opts);
      this.polling = false;
      if (typeof location !== "undefined") {
        const isSSL = location.protocol === "https:";
        let port = location.port;
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        this.xs = opts.secure !== isSSL;
      }
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(onPause) {
      this.readyState = "pausing";
      const pause = () => {
        this.readyState = "paused";
        onPause();
      };
      if (this.polling || !this.writable) {
        let total = 0;
        if (this.polling) {
          total++;
          this.once("pollComplete", function() {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function() {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    poll() {
      this.polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    onData(data) {
      const callback = (packet) => {
        if (this.readyState === "opening" && packet.type === "open") {
          this.onOpen();
        }
        if (packet.type === "close") {
          this.onClose({ description: "transport closed by the server" });
          return false;
        }
        this.onPacket(packet);
      };
      decodePayload(data, this.socket.binaryType).forEach(callback);
      if (this.readyState !== "closed") {
        this.polling = false;
        this.emitReserved("pollComplete");
        if (this.readyState === "open") {
          this.poll();
        } else {
        }
      }
    }
    doClose() {
      const close = () => {
        this.write([{ type: "close" }]);
      };
      if (this.readyState === "open") {
        close();
      } else {
        this.once("open", close);
      }
    }
    write(packets) {
      this.writable = false;
      encodePayload(packets, (data) => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "https" : "http";
      let port = "";
      if (this.opts.timestampRequests !== false) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      const encodedQuery = encode2(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    request(opts = {}) {
      Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
      return new Request(this.uri(), opts);
    }
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  };
  var Request = class extends Emitter {
    constructor(uri, opts) {
      super();
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.method = opts.method || "GET";
      this.uri = uri;
      this.async = opts.async !== false;
      this.data = opts.data !== void 0 ? opts.data : null;
      this.create();
    }
    create() {
      const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      opts.xscheme = !!this.opts.xs;
      const xhr = this.xhr = new XHR(opts);
      try {
        xhr.open(this.method, this.uri, this.async);
        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i2 in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i2)) {
                xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
              }
            }
          }
        } catch (e) {
        }
        if (this.method === "POST") {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {
        }
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }
        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== 4)
            return;
          if (xhr.status === 200 || xhr.status === 1223) {
            this.onLoad();
          } else {
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this.data);
      } catch (e) {
        this.setTimeoutFn(() => {
          this.onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    onError(err) {
      this.emitReserved("error", err, this.xhr);
      this.cleanup(true);
    }
    cleanup(fromError) {
      if (typeof this.xhr === "undefined" || this.xhr === null) {
        return;
      }
      this.xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e) {
        }
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }
      this.xhr = null;
    }
    onLoad() {
      const data = this.xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this.cleanup();
      }
    }
    abort() {
      this.cleanup();
    }
  };
  Request.requestsCount = 0;
  Request.requests = {};
  if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i2 in Request.requests) {
      if (Request.requests.hasOwnProperty(i2)) {
        Request.requests[i2].abort();
      }
    }
  }

  // node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
  var nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return (cb) => Promise.resolve().then(cb);
    } else {
      return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
  })();
  var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  var usingBrowserWebSocket = true;
  var defaultBinaryType = "arraybuffer";

  // node_modules/engine.io-client/build/esm/transports/websocket.js
  var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  var WS = class extends Transport {
    constructor(opts) {
      super(opts);
      this.supportsBinary = !opts.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) {
        return;
      }
      const uri = this.uri();
      const protocols = this.opts.protocols;
      const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
      this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = (closeEvent) => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = (ev) => this.onData(ev.data);
      this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        encodePacket_browser_default(packet, this.supportsBinary, (data) => {
          const opts = {};
          if (!usingBrowserWebSocket) {
            if (packet.options) {
              opts.compress = packet.options.compress;
            }
            if (this.opts.perMessageDeflate) {
              const len = typeof data === "string" ? Buffer.byteLength(data) : data.length;
              if (len < this.opts.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }
          try {
            if (usingBrowserWebSocket) {
              this.ws.send(data);
            } else {
              this.ws.send(data, opts);
            }
          } catch (e) {
          }
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    uri() {
      let query = this.query || {};
      const schema = this.opts.secure ? "wss" : "ws";
      let port = "";
      if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      }
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      const encodedQuery = encode2(query);
      const ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
    }
    check() {
      return !!WebSocket;
    }
  };

  // node_modules/engine.io-client/build/esm/transports/index.js
  var transports = {
    websocket: WS,
    polling: Polling
  };

  // node_modules/engine.io-client/build/esm/contrib/parseuri.js
  var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ];
  function parse(str) {
    const src = str, b2 = str.indexOf("["), e = str.indexOf("]");
    if (b2 != -1 && e != -1) {
      str = str.substring(0, b2) + str.substring(b2, e).replace(/:/g, ";") + str.substring(e, str.length);
    }
    let m = re.exec(str || ""), uri = {}, i2 = 14;
    while (i2--) {
      uri[parts[i2]] = m[i2] || "";
    }
    if (b2 != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
      uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
  }
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.substr(0, 1) == "/" || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == "/") {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }

  // node_modules/engine.io-client/build/esm/socket.js
  var Socket = class extends Emitter {
    constructor(uri, opts = {}) {
      super();
      if (uri && typeof uri === "object") {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query)
          opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
      if (opts.hostname && !opts.port) {
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = opts.transports || ["polling", "websocket"];
      this.readyState = "";
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: true
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
      if (typeof this.opts.query === "string") {
        this.opts.query = decode2(this.opts.query);
      }
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (this.opts.closeOnBeforeunload) {
          addEventListener("beforeunload", () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          }, false);
        }
        if (this.hostname !== "localhost") {
          this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", this.offlineEventListener, false);
        }
      }
      this.open();
    }
    createTransport(name) {
      const query = Object.assign({}, this.opts.query);
      query.EIO = protocol;
      query.transport = name;
      if (this.id)
        query.sid = this.id;
      const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });
      return new transports[name](opts);
    }
    open() {
      let transport;
      if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (this.transports.length === 0) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = "opening";
      try {
        transport = this.createTransport(transport);
      } catch (e) {
        this.transports.shift();
        this.open();
        return;
      }
      transport.open();
      this.setTransport(transport);
    }
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = transport;
      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
    }
    probe(name) {
      let transport = this.createTransport(name);
      let failed = false;
      Socket.priorWebsocketSuccess = false;
      const onTransportOpen = () => {
        if (failed)
          return;
        transport.send([{ type: "ping", data: "probe" }]);
        transport.once("packet", (msg) => {
          if (failed)
            return;
          if (msg.type === "pong" && msg.data === "probe") {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport)
              return;
            Socket.priorWebsocketSuccess = transport.name === "websocket";
            this.transport.pause(() => {
              if (failed)
                return;
              if (this.readyState === "closed")
                return;
              cleanup();
              this.setTransport(transport);
              transport.send([{ type: "upgrade" }]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed)
          return;
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      const onerror = (err) => {
        const error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      function onclose() {
        onerror("socket closed");
      }
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      const cleanup = () => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    onOpen() {
      this.readyState = "open";
      Socket.priorWebsocketSuccess = this.transport.name === "websocket";
      this.emitReserved("open");
      this.flush();
      if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
        let i2 = 0;
        const l = this.upgrades.length;
        for (; i2 < l; i2++) {
          this.probe(this.upgrades[i2]);
        }
      }
    }
    onPacket(packet) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        this.emitReserved("packet", packet);
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;
          case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      } else {
      }
    }
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.maxPayload = data.maxPayload;
      this.onOpen();
      if (this.readyState === "closed")
        return;
      this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (this.writeBuffer.length === 0) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    flush() {
      if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this.getWritablePackets();
        this.transport.send(packets);
        this.prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1;
      for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
        const data = this.writeBuffer[i2].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i2 > 0 && payloadSize > this.maxPayload) {
          return this.writeBuffer.slice(0, i2);
        }
        payloadSize += 2;
      }
      return this.writeBuffer;
    }
    write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    sendPacket(type, data, options, fn) {
      if (typeof data === "function") {
        fn = data;
        data = void 0;
      }
      if (typeof options === "function") {
        fn = options;
        options = null;
      }
      if (this.readyState === "closing" || this.readyState === "closed") {
        return;
      }
      options = options || {};
      options.compress = options.compress !== false;
      const packet = {
        type,
        data,
        options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn)
        this.once("flush", fn);
      this.flush();
    }
    close() {
      const close = () => {
        this.onClose("forced close");
        this.transport.close();
      };
      const cleanupAndClose = () => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      };
      const waitForUpgrade = () => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      };
      if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    onError(err) {
      Socket.priorWebsocketSuccess = false;
      this.emitReserved("error", err);
      this.onClose("transport error", err);
    }
    onClose(reason, description) {
      if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        if (typeof removeEventListener === "function") {
          removeEventListener("offline", this.offlineEventListener, false);
        }
        this.readyState = "closed";
        this.id = null;
        this.emitReserved("close", reason, description);
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      let i2 = 0;
      const j = upgrades.length;
      for (; i2 < j; i2++) {
        if (~this.transports.indexOf(upgrades[i2]))
          filteredUpgrades.push(upgrades[i2]);
      }
      return filteredUpgrades;
    }
  };
  Socket.protocol = protocol;

  // node_modules/engine.io-client/build/esm/index.js
  var protocol2 = Socket.protocol;

  // node_modules/socket.io-client/build/esm/url.js
  function url(uri, path = "", loc) {
    let obj = uri;
    loc = loc || typeof location !== "undefined" && location;
    if (uri == null)
      uri = loc.protocol + "//" + loc.host;
    if (typeof uri === "string") {
      if (uri.charAt(0) === "/") {
        if (uri.charAt(1) === "/") {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if (typeof loc !== "undefined") {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      obj = parse(uri);
    }
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }

  // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    Decoder: () => Decoder,
    Encoder: () => Encoder,
    PacketType: () => PacketType,
    protocol: () => protocol3
  });

  // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/is-binary.js
  var withNativeArrayBuffer3 = typeof ArrayBuffer === "function";
  var isView2 = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  var toString = Object.prototype.toString;
  var withNativeBlob2 = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
  var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
  function isBinary(obj) {
    return withNativeArrayBuffer3 && (obj instanceof ArrayBuffer || isView2(obj)) || withNativeBlob2 && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i2 = 0, l = obj.length; i2 < l; i2++) {
        if (hasBinary(obj[i2])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }

  // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/binary.js
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length;
    return { packet: pack, buffers };
  }
  function _deconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (isBinary(data)) {
      const placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i2 = 0; i2 < data.length; i2++) {
        newData[i2] = _deconstructPacket(data[i2], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    packet.attachments = void 0;
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (data && data._placeholder) {
      return buffers[data.num];
    } else if (Array.isArray(data)) {
      for (let i2 = 0; i2 < data.length; i2++) {
        data[i2] = _reconstructPacket(data[i2], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }

  // node_modules/socket.io-client/node_modules/socket.io-parser/build/esm/index.js
  var protocol3 = 5;
  var PacketType;
  (function(PacketType2) {
    PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
    PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
    PacketType2[PacketType2["ACK"] = 3] = "ACK";
    PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  var Encoder = class {
    constructor(replacer) {
      this.replacer = replacer;
    }
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
          return this.encodeAsBinary(obj);
        }
      }
      return [this.encodeAsString(obj)];
    }
    encodeAsString(obj) {
      let str = "" + obj.type;
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      if (obj.nsp && obj.nsp !== "/") {
        str += obj.nsp + ",";
      }
      if (obj.id != null) {
        str += obj.id;
      }
      if (obj.data != null) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack);
      return buffers;
    }
  };
  var Decoder = class extends Emitter {
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        packet = this.decodeString(obj);
        if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
          this.reconstructor = new BinaryReconstructor(packet);
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    decodeString(str) {
      let i2 = 0;
      const p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === void 0) {
        throw new Error("unknown packet type " + p.type);
      }
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        const start = i2 + 1;
        while (str.charAt(++i2) !== "-" && i2 != str.length) {
        }
        const buf = str.substring(start, i2);
        if (buf != Number(buf) || str.charAt(i2) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      if (str.charAt(i2 + 1) === "/") {
        const start = i2 + 1;
        while (++i2) {
          const c = str.charAt(i2);
          if (c === ",")
            break;
          if (i2 === str.length)
            break;
        }
        p.nsp = str.substring(start, i2);
      } else {
        p.nsp = "/";
      }
      const next = str.charAt(i2 + 1);
      if (next !== "" && Number(next) == next) {
        const start = i2 + 1;
        while (++i2) {
          const c = str.charAt(i2);
          if (c == null || Number(c) != c) {
            --i2;
            break;
          }
          if (i2 === str.length)
            break;
        }
        p.id = Number(str.substring(start, i2 + 1));
      }
      if (str.charAt(++i2)) {
        const payload = this.tryParse(str.substr(i2));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return typeof payload === "object";
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || typeof payload === "object";
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && payload.length > 0;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    }
  };
  var BinaryReconstructor = class {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  };

  // node_modules/socket.io-client/build/esm/on.js
  function on3(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }

  // node_modules/socket.io-client/build/esm/socket.js
  var RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
  });
  var Socket2 = class extends Emitter {
    constructor(io, nsp, opts) {
      super();
      this.connected = false;
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      if (this.io._autoConnect)
        this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs)
        return;
      const io = this.io;
      this.subs = [
        on3(io, "open", this.onopen.bind(this)),
        on3(io, "packet", this.onpacket.bind(this)),
        on3(io, "error", this.onerror.bind(this)),
        on3(io, "close", this.onclose.bind(this))
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      if (this.connected)
        return this;
      this.subEvents();
      if (!this.io["_reconnecting"])
        this.io.open();
      if (this.io._readyState === "open")
        this.onopen();
      return this;
    }
    open() {
      return this.connect();
    }
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev + '" is a reserved event name');
      }
      args.unshift(ev);
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      if (typeof args[args.length - 1] === "function") {
        const id = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
      if (discardPacket) {
      } else if (this.connected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    _registerAckCallback(id, ack) {
      const timeout = this.flags.timeout;
      if (timeout === void 0) {
        this.acks[id] = ack;
        return;
      }
      const timer = this.io.setTimeoutFn(() => {
        delete this.acks[id];
        for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
          if (this.sendBuffer[i2].id === id) {
            this.sendBuffer.splice(i2, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      this.acks[id] = (...args) => {
        this.io.clearTimeoutFn(timer);
        ack.apply(this, [null, ...args]);
      };
    }
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    onopen() {
      if (typeof this.auth == "function") {
        this.auth((data) => {
          this.packet({ type: PacketType.CONNECT, data });
        });
      } else {
        this.packet({ type: PacketType.CONNECT, data: this.auth });
      }
    }
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
    }
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace)
        return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            const id = packet.data.sid;
            this.onconnect(id);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    onevent(packet) {
      const args = packet.data || [];
      if (packet.id != null) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
    }
    ack(id) {
      const self2 = this;
      let sent = false;
      return function(...args) {
        if (sent)
          return;
        sent = true;
        self2.packet({
          type: PacketType.ACK,
          id,
          data: args
        });
      };
    }
    onack(packet) {
      const ack = this.acks[packet.id];
      if (typeof ack === "function") {
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      } else {
      }
    }
    onconnect(id) {
      this.id = id;
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
    }
    emitBuffered() {
      this.receiveBuffer.forEach((args) => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach((packet) => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    destroy() {
      if (this.subs) {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs = void 0;
      }
      this.io["_destroy"](this);
    }
    disconnect() {
      if (this.connected) {
        this.packet({ type: PacketType.DISCONNECT });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    close() {
      return this.disconnect();
    }
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  };

  // node_modules/socket.io-client/build/esm/contrib/backo2.js
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 1e4;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  Backoff.prototype.duration = function() {
    var ms2 = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms2);
      ms2 = (Math.floor(rand * 10) & 1) == 0 ? ms2 - deviation : ms2 + deviation;
    }
    return Math.min(ms2, this.max) | 0;
  };
  Backoff.prototype.reset = function() {
    this.attempts = 0;
  };
  Backoff.prototype.setMin = function(min) {
    this.ms = min;
  };
  Backoff.prototype.setMax = function(max) {
    this.max = max;
  };
  Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
  };

  // node_modules/socket.io-client/build/esm/manager.js
  var Manager = class extends Emitter {
    constructor(uri, opts) {
      var _a;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
      this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || esm_exports;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect)
        this.open();
    }
    reconnection(v2) {
      if (!arguments.length)
        return this._reconnection;
      this._reconnection = !!v2;
      return this;
    }
    reconnectionAttempts(v2) {
      if (v2 === void 0)
        return this._reconnectionAttempts;
      this._reconnectionAttempts = v2;
      return this;
    }
    reconnectionDelay(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelay;
      this._reconnectionDelay = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v2);
      return this;
    }
    randomizationFactor(v2) {
      var _a;
      if (v2 === void 0)
        return this._randomizationFactor;
      this._randomizationFactor = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v2);
      return this;
    }
    reconnectionDelayMax(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v2);
      return this;
    }
    timeout(v2) {
      if (!arguments.length)
        return this._timeout;
      this._timeout = v2;
      return this;
    }
    maybeReconnectOnOpen() {
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    open(fn) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Socket(this.uri, this.opts);
      const socket2 = this.engine;
      const self2 = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      const openSubDestroy = on3(socket2, "open", function() {
        self2.onopen();
        fn && fn();
      });
      const errorSub = on3(socket2, "error", (err) => {
        self2.cleanup();
        self2._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          self2.maybeReconnectOnOpen();
        }
      });
      if (this._timeout !== false) {
        const timeout = this._timeout;
        if (timeout === 0) {
          openSubDestroy();
        }
        const timer = this.setTimeoutFn(() => {
          openSubDestroy();
          socket2.close();
          socket2.emit("error", new Error("timeout"));
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    connect(fn) {
      return this.open(fn);
    }
    onopen() {
      this.cleanup();
      this._readyState = "open";
      this.emitReserved("open");
      const socket2 = this.engine;
      this.subs.push(on3(socket2, "ping", this.onping.bind(this)), on3(socket2, "data", this.ondata.bind(this)), on3(socket2, "error", this.onerror.bind(this)), on3(socket2, "close", this.onclose.bind(this)), on3(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(data) {
      this.decoder.add(data);
    }
    ondecoded(packet) {
      this.emitReserved("packet", packet);
    }
    onerror(err) {
      this.emitReserved("error", err);
    }
    socket(nsp, opts) {
      let socket2 = this.nsps[nsp];
      if (!socket2) {
        socket2 = new Socket2(this, nsp, opts);
        this.nsps[nsp] = socket2;
      }
      return socket2;
    }
    _destroy(socket2) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket3 = this.nsps[nsp];
        if (socket3.active) {
          return;
        }
      }
      this._close();
    }
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i2 = 0; i2 < encodedPackets.length; i2++) {
        this.engine.write(encodedPackets[i2], packet.options);
      }
    }
    cleanup() {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
      if (this.engine)
        this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(reason, description) {
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const self2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer = this.setTimeoutFn(() => {
          if (self2.skipReconnect)
            return;
          this.emitReserved("reconnect_attempt", self2.backoff.attempts);
          if (self2.skipReconnect)
            return;
          self2.open((err) => {
            if (err) {
              self2._reconnecting = false;
              self2.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self2.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function subDestroy() {
          clearTimeout(timer);
        });
      }
    }
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  };

  // node_modules/socket.io-client/build/esm/index.js
  var cache = {};
  function lookup2(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  Object.assign(lookup2, {
    Manager,
    Socket: Socket2,
    io: lookup2,
    connect: lookup2
  });

  // client/src/index.js
  no({
    background: [36, 81, 149],
    crisp: true
  });
  var socket = lookup2("localhost:3000");
  var drawingsx = [];
  var drawingsy = [];
  var player_id = [];
  var SPEED = 320;
  loadSprite("gun", "src/textures/gun.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
      g1: {
        from: 0,
        to: 0
      },
      g2: {
        from: 1,
        to: 1
      },
      g3: {
        from: 2,
        to: 2
      }
    }
  });
  loadSprite("title", "src/textures/pixilart-frames(40)/pixil-frame-0.png");
  loadSprite("player", "src/textures/circles.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
      c1: {
        from: 0,
        to: 0
      },
      c2: {
        from: 1,
        to: 1
      },
      c3: {
        from: 2,
        to: 2
      },
      c4: {
        from: 3,
        to: 3
      },
      c5: {
        from: 4,
        to: 4
      }
    }
  });
  var an = [
    "c1",
    "c2",
    "c3",
    "c4",
    "c5"
  ];
  var gu = [
    "g1",
    "g2",
    "g3"
  ];
  loadSprite("chair", "src/textures/furniture/pixil-frame-1.png");
  loadSprite("tv", "src/textures/furniture/pixil-frame-2.png");
  loadSprite("rug", "src/textures/furniture/pixil-frame-3.png");
  loadSprite("table", "src/textures/furniture/pixil-frame-4.png");
  loadSprite("bed", "src/textures/furniture/pixil-frame-5.png");
  loadSprite("fan", "src/textures/furniture/pixil-frame-6.png");
  loadSprite("fish", "src/textures/furniture/pixil-frame-7.png");
  loadSprite("spawn", "src/textures/furniture/pixil-frame-8.png");
  loadSprite("bullet", "src/textures/bullet.png");
  loadSound("main_music", "src/sounds/game_music.mp3");
  loadSprite("background", "src/textures/1.png");
  loadSprite("title", "src/textures/2.png");
  scene("game", () => {
    addLevel([
      "====================================",
      "=                                  =",
      "=           >                      =",
      "=   !             6        !       =",
      "=                                  =",
      "=    {                             =",
      "= ?                       %        =",
      "=            @                     =",
      "=                  *               =",
      "=                                  =",
      "=       !               !          =",
      "=                                  =",
      "===================================="
    ], {
      width: 100,
      height: 100,
      "=": () => [
        rect(100, 100),
        area(),
        pos(),
        solid(),
        "wall"
      ],
      "@": () => [
        sprite("rug"),
        "spawn",
        origin("center"),
        area()
      ],
      "*": () => [
        sprite("fan"),
        scale(0.7)
      ],
      ">": () => [
        sprite("tv")
      ],
      "{": () => [
        sprite("table")
      ],
      "%": () => [
        sprite("fish")
      ],
      "?": () => [
        sprite("chair")
      ],
      "6": () => [
        sprite("bed")
      ],
      "!": () => [
        sprite("spawn"),
        "spawn",
        origin("center"),
        area()
      ]
    });
    setTimeout(() => {
      socket.emit("og_init");
      socket.emit("emit_init");
    }, 500);
    setTimeout(() => {
      socket.emit("server_init");
    }, 100);
    socket.on("e_check", (r) => {
      player_id.push(r);
    });
    var spawns = get("spawn");
    var spawn = spawns[Math.floor(Math.random() * spawns.length)];
    gravity(1e3);
    var v2 = add([
      sprite("spawn"),
      area(),
      scale(3, 3),
      pos(spawn.pos.x, spawn.pos.y - 200),
      origin("center"),
      z(1e5)
    ]);
    v2.onUpdate(() => {
      v2.pos.y = v2.pos.y + 300 * (1 / debug.fps()) * 1;
    });
    socket.on("init_og", (id) => {
      const og = add([
        area({
          width: 50,
          height: 50
        }),
        solid(),
        pos(center()),
        origin("center"),
        String(id) + "og",
        "og"
      ]);
      og.pos.x = spawn.pos.x;
      og.pos.y = spawn.pos.y;
    });
    function draw() {
      socket.emit("tag_it");
      if (drawing_time) {
        socket.on("tag_id", (tag_id) => {
          var tag = Math.floor(Math.random() * 1e4);
          every(tag_id + "og", (og) => {
            var drawing = add([
              rect(25, 25),
              origin("center"),
              pos(toWorld(mousePos())),
              area({
                width: 0.1,
                height: 0.1
              }),
              scale(),
              follow(og, vec2(toWorld(mousePos()).x - og.pos.x, toWorld(mousePos()).y - og.pos.y)),
              color([0, 0, 0]),
              String(tag_id),
              String(tag)
            ]);
            drawingsx.push(drawing.pos.x);
            drawingsy.push(drawing.pos.y);
            player_id.push(tag_id);
          });
        });
      }
    }
    var fine = true;
    onMousePress(() => {
      if (!drawing_time && fine) {
        socket.emit("bullet_shot");
        every(String(player_id[0]) + "gun", (gu2) => {
          add([
            sprite("bullet"),
            outline(2),
            area(),
            scale(0.2),
            pos(gu2.pos),
            move(gu2.angle, 1200),
            lifespan(1),
            origin("center")
          ]);
        });
        fine = false;
        setTimeout(() => {
          if (fine == false) {
            fine = true;
          }
        }, 1e3);
      }
    });
    var ani = an[Math.floor(Math.random() * an.length)];
    var gus = gu[Math.floor(Math.random() * gu.length)];
    socket.on("shoot_bullet", (e) => {
      every(String(e) + "gun", (gu2) => {
        add([
          sprite("bullet"),
          outline(2),
          area(),
          scale(0.2),
          pos(gu2.pos),
          move(gu2.angle, 1200),
          lifespan(1),
          origin("center"),
          String(e) + "bullet",
          "bullet"
        ]);
      });
    });
    socket.on("init_player", (d) => {
      every(d + "og", (og) => {
        player_id.push(d);
        var gun = add([
          sprite("gun"),
          pos(og.x + 200, og.y),
          origin("center"),
          scale(0.7),
          area(),
          z(0),
          follow(og, vec2(og.pos.x + 300 - og.pos.x, og.pos.y - og.pos.y)),
          String(d),
          String(d) + "gun",
          "gun"
        ]);
        var player_temp = add([
          sprite("player"),
          pos(og.pos),
          origin("center"),
          area(),
          follow(og, vec2(og.pos.x - og.pos.x, og.pos.y - og.pos.y)),
          String(d),
          health(5),
          z(100001),
          "temp",
          "player",
          "temp" + String(d)
        ]);
        player_id.push(d);
        player_temp.play(ani);
        debug.log(gus);
        og.pos.x = spawn.pos.x;
        og.pos.y = spawn.pos.y;
        gun.play(gus);
      });
    });
    onKeyDown("a", () => {
      every(player_id[0] + "og", (og) => {
        og.move(-SPEED, 0);
      });
    });
    onKeyDown("d", () => {
      every(player_id[0] + "og", (og) => {
        og.move(SPEED, 0);
      });
    });
    onKeyDown("w", () => {
      every(player_id[0] + "og", (og) => {
        og.move(0, -SPEED);
      });
    });
    onKeyDown("s", () => {
      every(player_id[0] + "og", (og) => {
        og.move(0, SPEED);
      });
    });
    onCollide("bullet", "player", (e, a2) => {
      socket.emit("bullet_hit");
    });
    socket.on("hit_bullet", (e) => {
      every("temp" + e, (r) => {
        r.hurt(1);
      });
    });
    on("death", "player", () => {
      socket.emit("killed_someone");
    });
    socket.on("someone_killed", (a2) => {
      every(String(a2) + "og", (r) => {
        r.pos.x = spawn.pos.x;
        r.pos.y = spawn.pos.y;
        every("player", (g) => {
          g.heal(5);
        });
      });
    });
    var paper = add([
      rect(0, 0)
    ]);
    var pencil = add([
      rect(25, 25),
      color([0, 0, 0]),
      origin("center"),
      area()
    ]);
    const speed = 500;
    onMouseDown("left", () => {
      if (drawing_time) {
        draw();
      }
    });
    var drawing_time = true;
    var gun_up = false;
    setTimeout(() => {
      gun_up = true;
      return gun_up;
    }, 500);
    onUpdate(() => {
      if (drawing_time) {
        pencil.pos = toWorld(mousePos());
      }
      if (gun_up) {
        every(String(player_id[0]) + "gun", (gun) => {
          every(String(player_id[0] + "og"), (e) => {
            gun.angle = toWorld(mousePos()).angle(gun.pos);
            socket.emit("update_gun", gun.angle);
          });
        });
      }
      if (!drawing_time) {
        every(player_id[0] + "og", (e) => {
          socket.emit("o_pos", e.pos);
        });
      }
      if (!drawing_time) {
        every(player_id[0] + "og", (e) => {
          camPos(e.pos);
        });
      }
      if (drawing_time) {
        camPos(spawn.pos.x, spawn.pos.y);
      }
    });
    socket.on("pos_o", (p) => {
      every(p.id + "og", (e) => {
        e.pos.x = p.posx;
        e.pos.y = p.posy;
      });
    });
    socket.on("change_gun", (a2) => {
      every(String(a2.id) + "gun", (gun_tar) => {
        gun_tar.angle = a2.angle;
      });
    });
    var draw_pos = [];
    setTimeout(() => {
      drawing_time = false;
      destroy(paper);
      destroy(pencil);
      new_drawingsx = [...new Set(drawingsx)];
      new_drawingsy = [...new Set(drawingsy)];
      socket.emit("ready", {
        dx: new_drawingsx,
        dy: new_drawingsy,
        animation: ani,
        spawnx: spawn.pos.x,
        spawny: spawn.pos.y,
        gun_t: gus
      });
      return drawing_time;
    }, 5e3);
    socket.on("update_pos", (a2) => {
      if (a2.dir === "down") {
        every(String(a2.id), (d) => {
          d.move(0, speed);
        });
      }
      if (a2.dir === "up") {
        every(String(a2.id), (d) => {
          d.move(0, -speed);
        });
      }
      if (a2.dir === "right") {
        every(String(a2.id), (d) => {
          d.move(speed, 0);
        });
      }
      if (a2.dir === "left") {
        every(String(a2.id), (d) => {
          d.move(-speed, 0);
        });
      }
    });
    socket.on("create", (poss) => {
      var eog = add([
        area({
          width: 50,
          height: 50
        }),
        solid(),
        pos(poss.spawnx, poss.spawny),
        origin("center"),
        String(poss.id) + "og",
        "og"
      ]);
      for (let d in poss.dx) {
        var drawing = add([
          rect(25, 25),
          origin("center"),
          pos(poss.dx[d], poss.dy[d]),
          area(),
          scale(),
          color([0, 0, 0]),
          follow(eog, vec2(poss.dx[d] - eog.pos.x, poss.dy[d] - eog.pos.y)),
          String(poss.id),
          String(poss.id) + "enemy"
        ]);
      }
      var gun = add([
        sprite("gun"),
        pos(eog.x + 200, eog.y),
        origin("center"),
        scale(0.7),
        area(),
        z(1e3),
        String(poss.id),
        String(poss.id) + "gun",
        follow(eog, vec2(eog.pos.x + 200 - eog.pos.x, eog.pos.y - eog.pos.y)),
        "gun"
      ]);
      var player_temp = add([
        sprite("player"),
        pos(eog.pos),
        origin("center"),
        area(),
        follow(eog, vec2(eog.pos.x - eog.pos.x, eog.pos.y - eog.pos.y)),
        String(poss.id),
        "temp",
        health(5),
        "enemy",
        "temp" + poss.id
      ]);
      player_temp.play(poss.animation);
      gun.play(poss.gun_t);
    });
  });
  scene("title", () => {
    add([
      sprite("background"),
      pos(center()),
      origin("center"),
      scale(1.1, 1.1)
    ]);
    add([
      sprite("title"),
      pos(1378, 262),
      rotate(20),
      origin("center"),
      "title",
      area(),
      scale()
    ]);
    let curDraggin = false;
    onMouseRelease(() => {
      curDraggin = false;
      tar.pop();
    });
    onMouseDown(() => {
      curDraggin = true;
    });
    add([
      rect(1e4, 1e4),
      color(242, 111, 155),
      z(-1)
    ]);
    var tar = [];
    onClick("title", (e) => {
      if (curDraggin) {
        tar.pop();
        tar.push(e);
      }
    });
    play("main_music", {
      loop: true
    });
    onUpdate(() => {
      if (curDraggin && tar.length == 1)
        tar[0].pos = mousePos();
    });
    add([
      area({
        width: 1e5,
        height: 50
      }),
      solid(),
      pos(0, 800)
    ]);
    var m = add([
      text("Play! 0"),
      area(),
      pos(center().x, center().y + 200),
      origin("center"),
      "play",
      "title",
      scale()
    ]);
    add([
      text(":"),
      area(),
      pos(center().x + 100, m.pos.y),
      origin("center"),
      scale(),
      "play",
      "title"
    ]);
    onClick("play", () => {
      go("game");
    });
    var size = 0.01;
    setInterval(() => {
      size = -size;
      return size;
    }, 500);
    onUpdate(() => {
      every("title", (r) => {
        r.scale.x = r.scale.x + size;
        r.scale.y = r.scale.y + size;
      });
    });
  });
  go("title");
})();
