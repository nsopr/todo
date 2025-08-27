
var wasm_todo_entry = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptName = _scriptName || __filename;
  return (
function(moduleArg = {}) {
  var moduleRtn;

var k = moduleArg, aa, ba, ca = new Promise((a, b) => {
  aa = a;
  ba = b;
}), ea = "object" == typeof window, fa = "function" == typeof importScripts, ha = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node && "renderer" != process.type, ia = Object.assign({}, k), ja = [], ka = "./this.program", la = (a, b) => {
  throw b;
}, ma = "", oa, pa;
if (ha) {
  var fs = require("fs"), qa = require("path");
  ma = __dirname + "/";
  pa = a => {
    a = ra(a) ? new URL(a) : qa.normalize(a);
    return fs.readFileSync(a);
  };
  oa = a => {
    a = ra(a) ? new URL(a) : qa.normalize(a);
    return new Promise((b, c) => {
      fs.readFile(a, void 0, (d, e) => {
        d ? c(d) : b(e.buffer);
      });
    });
  };
  !k.thisProgram && 1 < process.argv.length && (ka = process.argv[1].replace(/\\/g, "/"));
  ja = process.argv.slice(2);
  la = (a, b) => {
    process.exitCode = a;
    throw b;
  };
} else if (ea || fa) {
  fa ? ma = self.location.href : "undefined" != typeof document && document.currentScript && (ma = document.currentScript.src), _scriptName && (ma = _scriptName), ma.startsWith("blob:") ? ma = "" : ma = ma.substr(0, ma.replace(/[?#].*/, "").lastIndexOf("/") + 1), fa && (pa = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  }), oa = a => ra(a) ? new Promise((b, c) => {
    var d = new XMLHttpRequest();
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
      200 == d.status || 0 == d.status && d.response ? b(d.response) : c(d.status);
    };
    d.onerror = c;
    d.send(null);
  }) : fetch(a, {credentials:"same-origin"}).then(b => b.ok ? b.arrayBuffer() : Promise.reject(Error(b.status + " : " + b.url)));
}
var sa = k.print || console.log.bind(console), ta = k.printErr || console.error.bind(console);
Object.assign(k, ia);
ia = null;
k.arguments && (ja = k.arguments);
k.thisProgram && (ka = k.thisProgram);
var ua = k.wasmBinary, va, wa = !1, xa, m, p, r, ya, v, x, z, za, Aa, Ba;
function Ca() {
  var a = va.buffer;
  k.HEAP8 = m = new Int8Array(a);
  k.HEAP16 = r = new Int16Array(a);
  k.HEAPU8 = p = new Uint8Array(a);
  k.HEAPU16 = ya = new Uint16Array(a);
  k.HEAP32 = v = new Int32Array(a);
  k.HEAPU32 = x = new Uint32Array(a);
  k.HEAPF32 = z = new Float32Array(a);
  k.HEAPF64 = Ba = new Float64Array(a);
  k.HEAP64 = za = new BigInt64Array(a);
  k.HEAPU64 = Aa = new BigUint64Array(a);
}
var Da = [], Ea = [], Fa = [], Ga = [];
function Ha() {
  var a = k.preRun;
  a && ("function" == typeof a && (a = [a]), a.forEach(Ia));
  Ja(Da);
}
function Ia(a) {
  Da.unshift(a);
}
function Ka(a) {
  Ga.unshift(a);
}
var La = 0, Ma = null, Na = null;
function Oa() {
  La++;
  k.monitorRunDependencies?.(La);
}
function Pa() {
  La--;
  k.monitorRunDependencies?.(La);
  if (0 == La && (null !== Ma && (clearInterval(Ma), Ma = null), Na)) {
    var a = Na;
    Na = null;
    a();
  }
}
function Qa(a) {
  k.onAbort?.(a);
  a = "Aborted(" + a + ")";
  ta(a);
  wa = !0;
  a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
  ba(a);
  throw a;
}
var Ra = a => a.startsWith("data:application/octet-stream;base64,"), ra = a => a.startsWith("file://"), Sa;
function Ta(a) {
  if (a == Sa && ua) {
    return new Uint8Array(ua);
  }
  if (pa) {
    return pa(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function Ua(a) {
  return ua ? Promise.resolve().then(() => Ta(a)) : oa(a).then(b => new Uint8Array(b), () => Ta(a));
}
function Va(a, b, c) {
  return Ua(a).then(d => WebAssembly.instantiate(d, b)).then(c, d => {
    ta(`failed to asynchronously prepare wasm: ${d}`);
    Qa(d);
  });
}
function Wa(a, b) {
  var c = Sa;
  return ua || "function" != typeof WebAssembly.instantiateStreaming || Ra(c) || ra(c) || ha || "function" != typeof fetch ? Va(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
    ta(`wasm streaming compile failed: ${e}`);
    ta("falling back to ArrayBuffer instantiation");
    return Va(c, a, b);
  }));
}
function Xa(a) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${a})`;
  this.status = a;
}
var Ja = a => {
  a.forEach(b => b(k));
}, Ya = k.noExitRuntime || !0, Za = [], $a, A = a => {
  var b = Za[a];
  b || (a >= Za.length && (Za.length = a + 1), Za[a] = b = $a.get(a));
  return b;
}, ab = [], bb = 0, cb = 0;
class db {
  constructor(a) {
    this.lk = a;
    this.xi = a - 24;
  }
  Pj(a, b) {
    x[this.xi + 16 >>> 2 >>> 0] = 0;
    x[this.xi + 4 >>> 2 >>> 0] = a;
    x[this.xi + 8 >>> 2 >>> 0] = b;
  }
}
var gb = a => {
  var b = cb;
  if (!b) {
    return eb(0), 0;
  }
  var c = new db(b);
  x[c.xi + 16 >>> 2 >>> 0] = b;
  var d = x[c.xi + 4 >>> 2 >>> 0];
  if (!d) {
    return eb(0), b;
  }
  for (var e of a) {
    if (0 === e || e === d) {
      break;
    }
    if (fb(e, d, c.xi + 16)) {
      return eb(e), b;
    }
  }
  eb(d);
  return b;
}, hb = () => {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    return c => crypto.getRandomValues(c);
  }
  if (ha) {
    try {
      var a = require("crypto");
      if (a.randomFillSync) {
        return c => a.randomFillSync(c);
      }
      var b = a.randomBytes;
      return c => (c.set(b(c.byteLength)), c);
    } catch (c) {
    }
  }
  Qa("initRandomDevice");
}, ib = a => (ib = hb())(a), jb = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, kb = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = jb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, lb = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b &&= b.substr(0, b.length - 1);
  return a + b;
}, mb = a => {
  if ("/" === a) {
    return "/";
  }
  a = kb(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, nb = (a, b) => kb(a + "/" + b), ob = (...a) => {
  for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? a[d] : B.cwd();
    if ("string" != typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    b = c + "/" + b;
    c = "/" === c.charAt(0);
  }
  b = jb(b.split("/").filter(e => !!e), !c).join("/");
  return (c ? "/" : "") + b || ".";
}, pb = (a, b) => {
  function c(g) {
    for (var h = 0; h < g.length && "" === g[h]; h++) {
    }
    for (var l = g.length - 1; 0 <= l && "" === g[l]; l--) {
    }
    return h > l ? [] : g.slice(h, l - h + 1);
  }
  a = ob(a).substr(1);
  b = ob(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) {
    if (a[f] !== b[f]) {
      e = f;
      break;
    }
  }
  d = [];
  for (f = e; f < a.length; f++) {
    d.push("..");
  }
  d = d.concat(b.slice(e));
  return d.join("/");
}, qb = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, rb = (a, b = 0, c = NaN) => {
  b >>>= 0;
  var d = b + c;
  for (c = b; a[c] && !(c >= d);) {
    ++c;
  }
  if (16 < c - b && a.buffer && qb) {
    return qb.decode(a.subarray(b, c));
  }
  for (d = ""; b < c;) {
    var e = a[b++];
    if (e & 128) {
      var f = a[b++] & 63;
      if (192 == (e & 224)) {
        d += String.fromCharCode((e & 31) << 6 | f);
      } else {
        var g = a[b++] & 63;
        e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
      }
    } else {
      d += String.fromCharCode(e);
    }
  }
  return d;
}, sb = [], tb = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, E = (a, b, c, d) => {
  c >>>= 0;
  if (!(0 < d)) {
    return 0;
  }
  var e = c;
  d = c + d - 1;
  for (var f = 0; f < a.length; ++f) {
    var g = a.charCodeAt(f);
    if (55296 <= g && 57343 >= g) {
      var h = a.charCodeAt(++f);
      g = 65536 + ((g & 1023) << 10) | h & 1023;
    }
    if (127 >= g) {
      if (c >= d) {
        break;
      }
      b[c++ >>> 0] = g;
    } else {
      if (2047 >= g) {
        if (c + 1 >= d) {
          break;
        }
        b[c++ >>> 0] = 192 | g >> 6;
      } else {
        if (65535 >= g) {
          if (c + 2 >= d) {
            break;
          }
          b[c++ >>> 0] = 224 | g >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          b[c++ >>> 0] = 240 | g >> 18;
          b[c++ >>> 0] = 128 | g >> 12 & 63;
        }
        b[c++ >>> 0] = 128 | g >> 6 & 63;
      }
      b[c++ >>> 0] = 128 | g & 63;
    }
  }
  b[c >>> 0] = 0;
  return c - e;
};
function ub(a) {
  var b = Array(tb(a) + 1);
  a = E(a, b, 0, b.length);
  b.length = a;
  return b;
}
var vb = [];
function wb(a, b) {
  vb[a] = {input:[], output:[], Zi:b};
  xb(a, yb);
}
var yb = {open(a) {
  var b = vb[a.node.rdev];
  if (!b) {
    throw new B.ri(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close(a) {
  a.tty.Zi.fsync(a.tty);
}, fsync(a) {
  a.tty.Zi.fsync(a.tty);
}, read(a, b, c, d) {
  if (!a.tty || !a.tty.Zi.nk) {
    throw new B.ri(60);
  }
  for (var e = 0, f = 0; f < d; f++) {
    try {
      var g = a.tty.Zi.nk(a.tty);
    } catch (h) {
      throw new B.ri(29);
    }
    if (void 0 === g && 0 === e) {
      throw new B.ri(6);
    }
    if (null === g || void 0 === g) {
      break;
    }
    e++;
    b[c + f] = g;
  }
  e && (a.node.timestamp = Date.now());
  return e;
}, write(a, b, c, d) {
  if (!a.tty || !a.tty.Zi.Uj) {
    throw new B.ri(60);
  }
  try {
    for (var e = 0; e < d; e++) {
      a.tty.Zi.Uj(a.tty, b[c + e]);
    }
  } catch (f) {
    throw new B.ri(29);
  }
  d && (a.node.timestamp = Date.now());
  return e;
}}, zb = {nk() {
  a: {
    if (!sb.length) {
      var a = null;
      if (ha) {
        var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
        try {
          c = fs.readSync(d, b, 0, 256);
        } catch (e) {
          if (e.toString().includes("EOF")) {
            c = 0;
          } else {
            throw e;
          }
        }
        0 < c && (a = b.slice(0, c).toString("utf-8"));
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
      }
      if (!a) {
        a = null;
        break a;
      }
      sb = ub(a);
    }
    a = sb.shift();
  }
  return a;
}, Uj(a, b) {
  null === b || 10 === b ? (sa(rb(a.output)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (sa(rb(a.output)), a.output = []);
}, bl() {
  return {xl:25856, zl:5, wl:191, yl:35387, vl:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
}, cl() {
  return 0;
}, dl() {
  return [24, 80];
}}, Ab = {Uj(a, b) {
  null === b || 10 === b ? (ta(rb(a.output)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (ta(rb(a.output)), a.output = []);
}}, Db = a => {
  a = 65536 * Math.ceil(a / 65536);
  var b = Cb(65536, a);
  b && p.fill(0, b, b + a);
  return b;
};
function Eb(a, b) {
  var c = a.wi ? a.wi.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.wi, a.wi = new Uint8Array(b), 0 < a.zi && a.wi.set(c.subarray(0, a.zi), 0));
}
var F = {Wi:null, Bi() {
  return F.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || B.isFIFO(c)) {
    throw new B.ri(63);
  }
  F.Wi || (F.Wi = {dir:{node:{Ui:F.ui.Ui, Gi:F.ui.Gi, lookup:F.ui.lookup, Yi:F.ui.Yi, rename:F.ui.rename, unlink:F.ui.unlink, rmdir:F.ui.rmdir, readdir:F.ui.readdir, symlink:F.ui.symlink}, stream:{Ki:F.vi.Ki}}, file:{node:{Ui:F.ui.Ui, Gi:F.ui.Gi}, stream:{Ki:F.vi.Ki, read:F.vi.read, write:F.vi.write, ej:F.vi.ej, jj:F.vi.jj, pj:F.vi.pj}}, link:{node:{Ui:F.ui.Ui, Gi:F.ui.Gi, readlink:F.ui.readlink}, stream:{}}, gk:{node:{Ui:F.ui.Ui, Gi:F.ui.Gi}, stream:B.Lk}});
  c = B.createNode(a, b, c, d);
  G(c.mode) ? (c.ui = F.Wi.dir.node, c.vi = F.Wi.dir.stream, c.wi = {}) : B.isFile(c.mode) ? (c.ui = F.Wi.file.node, c.vi = F.Wi.file.stream, c.zi = 0, c.wi = null) : 40960 === (c.mode & 61440) ? (c.ui = F.Wi.link.node, c.vi = F.Wi.link.stream) : 8192 === (c.mode & 61440) && (c.ui = F.Wi.gk.node, c.vi = F.Wi.gk.stream);
  c.timestamp = Date.now();
  a && (a.wi[b] = c, a.timestamp = c.timestamp);
  return c;
}, Pl(a) {
  return a.wi ? a.wi.subarray ? a.wi.subarray(0, a.zi) : new Uint8Array(a.wi) : new Uint8Array(0);
}, ui:{Ui(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  G(a.mode) ? b.size = 4096 : B.isFile(a.mode) ? b.size = a.zi : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.Jk = 4096;
  b.blocks = Math.ceil(b.size / b.Jk);
  return b;
}, Gi(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  if (void 0 !== b.size && (b = b.size, a.zi != b)) {
    if (0 == b) {
      a.wi = null, a.zi = 0;
    } else {
      var c = a.wi;
      a.wi = new Uint8Array(b);
      c && a.wi.set(c.subarray(0, Math.min(b, a.zi)));
      a.zi = b;
    }
  }
}, lookup() {
  throw B.Nj[44];
}, Yi(a, b, c, d) {
  return F.createNode(a, b, c, d);
}, rename(a, b, c) {
  if (G(a.mode)) {
    try {
      var d = Fb(b, c);
    } catch (f) {
    }
    if (d) {
      for (var e in d.wi) {
        throw new B.ri(55);
      }
    }
  }
  delete a.parent.wi[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.wi[c] = a;
  b.timestamp = a.parent.timestamp;
}, unlink(a, b) {
  delete a.wi[b];
  a.timestamp = Date.now();
}, rmdir(a, b) {
  var c = Fb(a, b), d;
  for (d in c.wi) {
    throw new B.ri(55);
  }
  delete a.wi[b];
  a.timestamp = Date.now();
}, readdir(a) {
  var b = [".", ".."], c;
  for (c of Object.keys(a.wi)) {
    b.push(c);
  }
  return b;
}, symlink(a, b, c) {
  a = F.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new B.ri(28);
  }
  return a.link;
}}, vi:{read(a, b, c, d, e) {
  var f = a.node.wi;
  if (e >= a.node.zi) {
    return 0;
  }
  a = Math.min(a.node.zi - e, d);
  if (8 < a && f.subarray) {
    b.set(f.subarray(e, e + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = f[e + d];
    }
  }
  return a;
}, write(a, b, c, d, e, f) {
  b.buffer === m.buffer && (f = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.wi || a.wi.subarray)) {
    if (f) {
      return a.wi = b.subarray(c, c + d), a.zi = d;
    }
    if (0 === a.zi && 0 === e) {
      return a.wi = b.slice(c, c + d), a.zi = d;
    }
    if (e + d <= a.zi) {
      return a.wi.set(b.subarray(c, c + d), e), d;
    }
  }
  Eb(a, e + d);
  if (a.wi.subarray && b.subarray) {
    a.wi.set(b.subarray(c, c + d), e);
  } else {
    for (f = 0; f < d; f++) {
      a.wi[e + f] = b[c + f];
    }
  }
  a.zi = Math.max(a.zi, e + d);
  return d;
}, Ki(a, b, c) {
  1 === c ? b += a.position : 2 === c && B.isFile(a.node.mode) && (b += a.node.zi);
  if (0 > b) {
    throw new B.ri(28);
  }
  return b;
}, ej(a, b, c) {
  Eb(a.node, b + c);
  a.node.zi = Math.max(a.node.zi, b + c);
}, jj(a, b, c, d, e) {
  if (!B.isFile(a.node.mode)) {
    throw new B.ri(43);
  }
  a = a.node.wi;
  if (e & 2 || !a || a.buffer !== m.buffer) {
    d = !0;
    e = Db(b);
    if (!e) {
      throw new B.ri(48);
    }
    if (a) {
      if (0 < c || c + b < a.length) {
        a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
      }
      m.set(a, e >>> 0);
    }
  } else {
    d = !1, e = a.byteOffset;
  }
  return {xi:e, aj:d};
}, pj(a, b, c, d) {
  F.vi.write(a, b, 0, d, c, !1);
  return 0;
}}}, Gb = (a, b, c) => {
  var d = `al ${a}`;
  oa(a).then(e => {
    b(new Uint8Array(e));
    d && Pa();
  }, () => {
    if (c) {
      c();
    } else {
      throw `Loading data file "${a}" failed.`;
    }
  });
  d && Oa();
}, Hb = k.preloadPlugins || [], Kb = (a, b, c, d) => {
  "undefined" != typeof Ib && Jb();
  var e = !1;
  Hb.forEach(f => {
    !e && f.canHandle(b) && (f.handle(a, b, c, d), e = !0);
  });
  return e;
}, Lb = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
};
function xb(a, b) {
  B.jk[a] = {vi:b};
}
function G(a) {
  return 16384 === (a & 61440);
}
function Fb(a, b) {
  var c = G(a.mode) ? (c = Mb(a, "x")) ? c : a.ui.lookup ? 0 : 2 : 54;
  if (c) {
    throw new B.ri(c);
  }
  for (c = B.Vi[Nb(a.id, b)]; c; c = c.kj) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return B.lookup(a, b);
}
function I(a, b = {}) {
  a = ob(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({Mj:!0, Vj:0}, b);
  if (8 < b.Vj) {
    throw new B.ri(32);
  }
  a = a.split("/").filter(g => !!g);
  for (var c = B.root, d = "/", e = 0; e < a.length; e++) {
    var f = e === a.length - 1;
    if (f && b.parent) {
      break;
    }
    c = Fb(c, a[e]);
    d = kb(d + "/" + a[e]);
    c.Ri && (!f || f && b.Mj) && (c = c.Ri.root);
    if (!f || b.Qi) {
      for (f = 0; 40960 === (c.mode & 61440);) {
        if (c = B.readlink(d), d = ob(lb(d), c), c = I(d, {Vj:b.Vj + 1}).node, 40 < f++) {
          throw new B.ri(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function Ob(a) {
  for (var b;;) {
    if (B.rk(a)) {
      return a = a.Bi.sk, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function Nb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % B.Vi.length;
}
function Pb(a) {
  var b = Nb(a.parent.id, a.name);
  a.kj = B.Vi[b];
  B.Vi[b] = a;
}
function Qb(a) {
  var b = Nb(a.parent.id, a.name);
  if (B.Vi[b] === a) {
    B.Vi[b] = a.kj;
  } else {
    for (b = B.Vi[b]; b;) {
      if (b.kj === a) {
        b.kj = a.kj;
        break;
      }
      b = b.kj;
    }
  }
}
function Rb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function Mb(a, b) {
  if (B.qk) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Sb(a, b) {
  try {
    return Fb(a, b), 20;
  } catch (c) {
  }
  return Mb(a, "wx");
}
function Tb(a, b, c) {
  try {
    var d = Fb(a, b);
  } catch (e) {
    return e.ti;
  }
  if (a = Mb(a, "wx")) {
    return a;
  }
  if (c) {
    if (!G(d.mode)) {
      return 54;
    }
    if (B.rk(d) || Ob(d) === B.cwd()) {
      return 10;
    }
  } else {
    if (G(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function K(a) {
  a = B.mk(a);
  if (!a) {
    throw new B.ri(8);
  }
  return a;
}
function Ub(a, b = -1) {
  a = Object.assign(new B.Fk(), a);
  if (-1 == b) {
    a: {
      for (b = 0; b <= B.Hk; b++) {
        if (!B.streams[b]) {
          break a;
        }
      }
      throw new B.ri(33);
    }
  }
  a.fd = b;
  return B.streams[b] = a;
}
function Vb(a, b = -1) {
  a = Ub(a, b);
  a.vi?.Il?.(a);
  return a;
}
function Wb(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push(...c.uj);
  }
  return b;
}
function Xb(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  return B.Yi(a, b | 8192, c);
}
function Yb(a, b, c, d) {
  a = "string" == typeof a ? a : Ob(a);
  b = kb(a + "/" + b);
  return B.create(b, Lb(c, d));
}
function Zb(a) {
  if (!(a.el || a.fl || a.link || a.wi)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    try {
      a.wi = pa(a.url), a.zi = a.wi.length;
    } catch (b) {
      throw new B.ri(29);
    }
  }
}
var B = {root:null, uj:[], jk:{}, streams:[], hl:1, Vi:null, hk:"/", Qj:!1, qk:!0, ri:class {
  constructor(a) {
    this.name = "ErrnoError";
    this.ti = a;
  }
}, Nj:{}, Vk:null, Hj:0, xk:{}, Fk:class {
  constructor() {
    this.Di = {};
    this.node = null;
  }
  get object() {
    return this.node;
  }
  set object(a) {
    this.node = a;
  }
  get flags() {
    return this.Di.flags;
  }
  set flags(a) {
    this.Di.flags = a;
  }
  get position() {
    return this.Di.position;
  }
  set position(a) {
    this.Di.position = a;
  }
}, Ek:class {
  constructor(a, b, c, d) {
    a ||= this;
    this.parent = a;
    this.Bi = a.Bi;
    this.Ri = null;
    this.id = B.hl++;
    this.name = b;
    this.mode = c;
    this.ui = {};
    this.vi = {};
    this.rdev = d;
  }
  get read() {
    return 365 === (this.mode & 365);
  }
  set read(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return 146 === (this.mode & 146);
  }
  set write(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }
  get fl() {
    return G(this.mode);
  }
  get el() {
    return 8192 === (this.mode & 61440);
  }
}, createNode(a, b, c, d) {
  a = new B.Ek(a, b, c, d);
  Pb(a);
  return a;
}, rk(a) {
  return a === a.parent;
}, isFile(a) {
  return 32768 === (a & 61440);
}, isFIFO(a) {
  return 4096 === (a & 61440);
}, isSocket(a) {
  return 49152 === (a & 49152);
}, Hk:4096, mk:a => B.streams[a], Lk:{open(a) {
  a.vi = B.Xk(a.node.rdev).vi;
  a.vi.open?.(a);
}, Ki() {
  throw new B.ri(70);
}}, Sj:a => a >> 8, Wl:a => a & 255, ij:(a, b) => a << 8 | b, Xk:a => B.jk[a], yk(a, b) {
  function c(g) {
    B.Hj--;
    return b(g);
  }
  function d(g) {
    if (g) {
      if (!d.Rk) {
        return d.Rk = !0, c(g);
      }
    } else {
      ++f >= e.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  B.Hj++;
  1 < B.Hj && ta(`warning: ${B.Hj} FS.syncfs operations in flight at once, probably just doing extra work`);
  var e = Wb(B.root.Bi), f = 0;
  e.forEach(g => {
    if (!g.type.yk) {
      return d(null);
    }
    g.type.yk(g, a, d);
  });
}, Bi(a, b, c) {
  var d = "/" === c;
  if (d && B.root) {
    throw new B.ri(10);
  }
  if (!d && c) {
    var e = I(c, {Mj:!1});
    c = e.path;
    e = e.node;
    if (e.Ri) {
      throw new B.ri(10);
    }
    if (!G(e.mode)) {
      throw new B.ri(54);
    }
  }
  b = {type:a, am:b, sk:c, uj:[]};
  a = a.Bi(b);
  a.Bi = b;
  b.root = a;
  d ? B.root = a : e && (e.Ri = b, e.Bi && e.Bi.uj.push(b));
  return a;
}, km(a) {
  a = I(a, {Mj:!1});
  if (!a.node.Ri) {
    throw new B.ri(28);
  }
  a = a.node;
  var b = a.Ri, c = Wb(b);
  Object.keys(B.Vi).forEach(d => {
    for (d = B.Vi[d]; d;) {
      var e = d.kj;
      c.includes(d.Bi) && Qb(d);
      d = e;
    }
  });
  a.Ri = null;
  a.Bi.uj.splice(a.Bi.uj.indexOf(b), 1);
}, lookup(a, b) {
  return a.ui.lookup(a, b);
}, Yi(a, b, c) {
  var d = I(a, {parent:!0}).node;
  a = mb(a);
  if (!a || "." === a || ".." === a) {
    throw new B.ri(28);
  }
  var e = Sb(d, a);
  if (e) {
    throw new B.ri(e);
  }
  if (!d.ui.Yi) {
    throw new B.ri(63);
  }
  return d.ui.Yi(d, a, b, c);
}, create(a, b) {
  return B.Yi(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
}, mkdir(a, b) {
  return B.Yi(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}, Yl(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        B.mkdir(c, b);
      } catch (e) {
        if (20 != e.ti) {
          throw e;
        }
      }
    }
  }
}, symlink(a, b) {
  if (!ob(a)) {
    throw new B.ri(44);
  }
  var c = I(b, {parent:!0}).node;
  if (!c) {
    throw new B.ri(44);
  }
  b = mb(b);
  var d = Sb(c, b);
  if (d) {
    throw new B.ri(d);
  }
  if (!c.ui.symlink) {
    throw new B.ri(63);
  }
  return c.ui.symlink(c, b, a);
}, rename(a, b) {
  var c = lb(a), d = lb(b), e = mb(a), f = mb(b);
  var g = I(a, {parent:!0});
  var h = g.node;
  g = I(b, {parent:!0});
  g = g.node;
  if (!h || !g) {
    throw new B.ri(44);
  }
  if (h.Bi !== g.Bi) {
    throw new B.ri(75);
  }
  var l = Fb(h, e);
  a = pb(a, d);
  if ("." !== a.charAt(0)) {
    throw new B.ri(28);
  }
  a = pb(b, c);
  if ("." !== a.charAt(0)) {
    throw new B.ri(55);
  }
  try {
    var n = Fb(g, f);
  } catch (q) {
  }
  if (l !== n) {
    b = G(l.mode);
    if (e = Tb(h, e, b)) {
      throw new B.ri(e);
    }
    if (e = n ? Tb(g, f, b) : Sb(g, f)) {
      throw new B.ri(e);
    }
    if (!h.ui.rename) {
      throw new B.ri(63);
    }
    if (l.Ri || n && n.Ri) {
      throw new B.ri(10);
    }
    if (g !== h && (e = Mb(h, "w"))) {
      throw new B.ri(e);
    }
    Qb(l);
    try {
      h.ui.rename(l, g, f), l.parent = g;
    } catch (q) {
      throw q;
    } finally {
      Pb(l);
    }
  }
}, rmdir(a) {
  var b = I(a, {parent:!0}).node;
  a = mb(a);
  var c = Fb(b, a), d = Tb(b, a, !0);
  if (d) {
    throw new B.ri(d);
  }
  if (!b.ui.rmdir) {
    throw new B.ri(63);
  }
  if (c.Ri) {
    throw new B.ri(10);
  }
  b.ui.rmdir(b, a);
  Qb(c);
}, readdir(a) {
  a = I(a, {Qi:!0}).node;
  if (!a.ui.readdir) {
    throw new B.ri(54);
  }
  return a.ui.readdir(a);
}, unlink(a) {
  var b = I(a, {parent:!0}).node;
  if (!b) {
    throw new B.ri(44);
  }
  a = mb(a);
  var c = Fb(b, a), d = Tb(b, a, !1);
  if (d) {
    throw new B.ri(d);
  }
  if (!b.ui.unlink) {
    throw new B.ri(63);
  }
  if (c.Ri) {
    throw new B.ri(10);
  }
  b.ui.unlink(b, a);
  Qb(c);
}, readlink(a) {
  a = I(a).node;
  if (!a) {
    throw new B.ri(44);
  }
  if (!a.ui.readlink) {
    throw new B.ri(28);
  }
  return ob(Ob(a.parent), a.ui.readlink(a));
}, stat(a, b) {
  a = I(a, {Qi:!b}).node;
  if (!a) {
    throw new B.ri(44);
  }
  if (!a.ui.Ui) {
    throw new B.ri(63);
  }
  return a.ui.Ui(a);
}, lstat(a) {
  return B.stat(a, !0);
}, chmod(a, b, c) {
  a = "string" == typeof a ? I(a, {Qi:!c}).node : a;
  if (!a.ui.Gi) {
    throw new B.ri(63);
  }
  a.ui.Gi(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, lchmod(a, b) {
  B.chmod(a, b, !0);
}, fchmod(a, b) {
  a = K(a);
  B.chmod(a.node, b);
}, chown(a, b, c, d) {
  a = "string" == typeof a ? I(a, {Qi:!d}).node : a;
  if (!a.ui.Gi) {
    throw new B.ri(63);
  }
  a.ui.Gi(a, {timestamp:Date.now()});
}, lchown(a, b, c) {
  B.chown(a, b, c, !0);
}, fchown(a, b, c) {
  a = K(a);
  B.chown(a.node, b, c);
}, truncate(a, b) {
  if (0 > b) {
    throw new B.ri(28);
  }
  a = "string" == typeof a ? I(a, {Qi:!0}).node : a;
  if (!a.ui.Gi) {
    throw new B.ri(63);
  }
  if (G(a.mode)) {
    throw new B.ri(31);
  }
  if (!B.isFile(a.mode)) {
    throw new B.ri(28);
  }
  var c = Mb(a, "w");
  if (c) {
    throw new B.ri(c);
  }
  a.ui.Gi(a, {size:b, timestamp:Date.now()});
}, open(a, b, c) {
  if ("" === a) {
    throw new B.ri(44);
  }
  if ("string" == typeof b) {
    var d = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090}[b];
    if ("undefined" == typeof d) {
      throw Error(`Unknown file open mode: ${b}`);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var e = a;
  } else {
    a = kb(a);
    try {
      e = I(a, {Qi:!(b & 131072)}).node;
    } catch (f) {
    }
  }
  d = !1;
  if (b & 64) {
    if (e) {
      if (b & 128) {
        throw new B.ri(20);
      }
    } else {
      e = B.Yi(a, c, 0), d = !0;
    }
  }
  if (!e) {
    throw new B.ri(44);
  }
  8192 === (e.mode & 61440) && (b &= -513);
  if (b & 65536 && !G(e.mode)) {
    throw new B.ri(54);
  }
  if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : G(e.mode) && ("r" !== Rb(b) || b & 512) ? 31 : Mb(e, Rb(b)) : 44)) {
    throw new B.ri(c);
  }
  b & 512 && !d && B.truncate(e, 0);
  b &= -131713;
  e = Ub({node:e, path:Ob(e), flags:b, seekable:!0, position:0, vi:e.vi, ol:[], error:!1});
  e.vi.open && e.vi.open(e);
  !k.logReadFiles || b & 1 || a in B.xk || (B.xk[a] = 1);
  return e;
}, close(a) {
  if (null === a.fd) {
    throw new B.ri(8);
  }
  a.hj && (a.hj = null);
  try {
    a.vi.close && a.vi.close(a);
  } catch (b) {
    throw b;
  } finally {
    B.streams[a.fd] = null;
  }
  a.fd = null;
}, Ki(a, b, c) {
  if (null === a.fd) {
    throw new B.ri(8);
  }
  if (!a.seekable || !a.vi.Ki) {
    throw new B.ri(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new B.ri(28);
  }
  a.position = a.vi.Ki(a, b, c);
  a.ol = [];
  return a.position;
}, read(a, b, c, d, e) {
  if (0 > d || 0 > e) {
    throw new B.ri(28);
  }
  if (null === a.fd) {
    throw new B.ri(8);
  }
  if (1 === (a.flags & 2097155)) {
    throw new B.ri(8);
  }
  if (G(a.node.mode)) {
    throw new B.ri(31);
  }
  if (!a.vi.read) {
    throw new B.ri(28);
  }
  var f = "undefined" != typeof e;
  if (!f) {
    e = a.position;
  } else if (!a.seekable) {
    throw new B.ri(70);
  }
  b = a.vi.read(a, b, c, d, e);
  f || (a.position += b);
  return b;
}, write(a, b, c, d, e, f) {
  if (0 > d || 0 > e) {
    throw new B.ri(28);
  }
  if (null === a.fd) {
    throw new B.ri(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new B.ri(8);
  }
  if (G(a.node.mode)) {
    throw new B.ri(31);
  }
  if (!a.vi.write) {
    throw new B.ri(28);
  }
  a.seekable && a.flags & 1024 && B.Ki(a, 0, 2);
  var g = "undefined" != typeof e;
  if (!g) {
    e = a.position;
  } else if (!a.seekable) {
    throw new B.ri(70);
  }
  b = a.vi.write(a, b, c, d, e, f);
  g || (a.position += b);
  return b;
}, ej(a, b, c) {
  if (null === a.fd) {
    throw new B.ri(8);
  }
  if (0 > b || 0 >= c) {
    throw new B.ri(28);
  }
  if (0 === (a.flags & 2097155)) {
    throw new B.ri(8);
  }
  if (!B.isFile(a.node.mode) && !G(a.node.mode)) {
    throw new B.ri(43);
  }
  if (!a.vi.ej) {
    throw new B.ri(138);
  }
  a.vi.ej(a, b, c);
}, jj(a, b, c, d, e) {
  if (0 !== (d & 2) && 0 === (e & 2) && 2 !== (a.flags & 2097155)) {
    throw new B.ri(2);
  }
  if (1 === (a.flags & 2097155)) {
    throw new B.ri(2);
  }
  if (!a.vi.jj) {
    throw new B.ri(43);
  }
  if (!b) {
    throw new B.ri(28);
  }
  return a.vi.jj(a, b, c, d, e);
}, pj(a, b, c, d, e) {
  return a.vi.pj ? a.vi.pj(a, b, c, d, e) : 0;
}, oj(a, b, c) {
  if (!a.vi.oj) {
    throw new B.ri(59);
  }
  return a.vi.oj(a, b, c);
}, readFile(a, b = {}) {
  b.flags = b.flags || 0;
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error(`Invalid encoding type "${b.encoding}"`);
  }
  var c, d = B.open(a, b.flags);
  a = B.stat(a).size;
  var e = new Uint8Array(a);
  B.read(d, e, 0, a, 0);
  "utf8" === b.encoding ? c = rb(e) : "binary" === b.encoding && (c = e);
  B.close(d);
  return c;
}, writeFile(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = B.open(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(tb(b) + 1);
    b = E(b, d, 0, d.length);
    B.write(a, d, 0, b, void 0, c.Kk);
  } else if (ArrayBuffer.isView(b)) {
    B.write(a, b, 0, b.byteLength, void 0, c.Kk);
  } else {
    throw Error("Unsupported data type");
  }
  B.close(a);
}, cwd:() => B.hk, chdir(a) {
  a = I(a, {Qi:!0});
  if (null === a.node) {
    throw new B.ri(44);
  }
  if (!G(a.node.mode)) {
    throw new B.ri(54);
  }
  var b = Mb(a.node, "x");
  if (b) {
    throw new B.ri(b);
  }
  B.hk = a.path;
}, Pj(a, b, c) {
  B.Qj = !0;
  a ??= k.stdin;
  b ??= k.stdout;
  c ??= k.stderr;
  a ? B.gj("/dev", "stdin", a) : B.symlink("/dev/tty", "/dev/stdin");
  b ? B.gj("/dev", "stdout", null, b) : B.symlink("/dev/tty", "/dev/stdout");
  c ? B.gj("/dev", "stderr", null, c) : B.symlink("/dev/tty1", "/dev/stderr");
  B.open("/dev/stdin", 0);
  B.open("/dev/stdout", 1);
  B.open("/dev/stderr", 1);
}, fm() {
  B.Qj = !1;
  for (var a = 0; a < B.streams.length; a++) {
    var b = B.streams[a];
    b && B.close(b);
  }
}, Kl(a, b) {
  try {
    var c = I(a, {Qi:!b});
    a = c.path;
  } catch (f) {
  }
  var d = !1, e = null;
  try {
    c = I(a, {parent:!0}), mb(a), c = I(a, {Qi:!b}), d = !0, e = c.node;
  } catch (f) {
  }
  return d ? e : null;
}, Cl(a, b) {
  a = "string" == typeof a ? a : Ob(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = kb(a + "/" + c);
      try {
        B.mkdir(d);
      } catch (e) {
      }
      a = d;
    }
  }
  return d;
}, gj(a, b, c, d) {
  a = nb("string" == typeof a ? a : Ob(a), b);
  b = Lb(!!c, !!d);
  var e;
  (e = B.gj).Sj ?? (e.Sj = 64);
  e = B.ij(B.gj.Sj++, 0);
  xb(e, {open(f) {
    f.seekable = !1;
  }, close() {
    d?.buffer?.length && d(10);
  }, read(f, g, h, l) {
    for (var n = 0, q = 0; q < l; q++) {
      try {
        var t = c();
      } catch (y) {
        throw new B.ri(29);
      }
      if (void 0 === t && 0 === n) {
        throw new B.ri(6);
      }
      if (null === t || void 0 === t) {
        break;
      }
      n++;
      g[h + q] = t;
    }
    n && (f.node.timestamp = Date.now());
    return n;
  }, write(f, g, h, l) {
    for (var n = 0; n < l; n++) {
      try {
        d(g[h + n]);
      } catch (q) {
        throw new B.ri(29);
      }
    }
    l && (f.node.timestamp = Date.now());
    return n;
  }});
  return Xb(a, b, e);
}, Bl(a, b, c, d, e) {
  function f(t, y, H, C, u) {
    t = t.node.wi;
    if (u >= t.length) {
      return 0;
    }
    C = Math.min(t.length - u, C);
    if (t.slice) {
      for (var J = 0; J < C; J++) {
        y[H + J] = t[u + J];
      }
    } else {
      for (J = 0; J < C; J++) {
        y[H + J] = t.get(u + J);
      }
    }
    return C;
  }
  class g {
    constructor() {
      this.Zj = !1;
      this.Di = [];
      this.Xj = void 0;
      this.zk = this.Ck = 0;
    }
    get(t) {
      if (!(t > this.length - 1 || 0 > t)) {
        var y = t % this.chunkSize;
        return this.Xj(t / this.chunkSize | 0)[y];
      }
    }
    sl(t) {
      this.Xj = t;
    }
    Dk() {
      var t = new XMLHttpRequest();
      t.open("HEAD", c, !1);
      t.send(null);
      if (!(200 <= t.status && 300 > t.status || 304 === t.status)) {
        throw Error("Couldn't load " + c + ". Status: " + t.status);
      }
      var y = Number(t.getResponseHeader("Content-length")), H, C = (H = t.getResponseHeader("Accept-Ranges")) && "bytes" === H;
      t = (H = t.getResponseHeader("Content-Encoding")) && "gzip" === H;
      var u = 1048576;
      C || (u = y);
      var J = this;
      J.sl(w => {
        var L = w * u, D = (w + 1) * u - 1;
        D = Math.min(D, y - 1);
        if ("undefined" == typeof J.Di[w]) {
          var da = J.Di;
          if (L > D) {
            throw Error("invalid range (" + L + ", " + D + ") or no bytes requested!");
          }
          if (D > y - 1) {
            throw Error("only " + y + " bytes available! programmer error!");
          }
          var M = new XMLHttpRequest();
          M.open("GET", c, !1);
          y !== u && M.setRequestHeader("Range", "bytes=" + L + "-" + D);
          M.responseType = "arraybuffer";
          M.overrideMimeType && M.overrideMimeType("text/plain; charset=x-user-defined");
          M.send(null);
          if (!(200 <= M.status && 300 > M.status || 304 === M.status)) {
            throw Error("Couldn't load " + c + ". Status: " + M.status);
          }
          L = void 0 !== M.response ? new Uint8Array(M.response || []) : ub(M.responseText || "");
          da[w] = L;
        }
        if ("undefined" == typeof J.Di[w]) {
          throw Error("doXHR failed!");
        }
        return J.Di[w];
      });
      if (t || !y) {
        u = y = 1, u = y = this.Xj(0).length, sa("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.Ck = y;
      this.zk = u;
      this.Zj = !0;
    }
    get length() {
      this.Zj || this.Dk();
      return this.Ck;
    }
    get chunkSize() {
      this.Zj || this.Dk();
      return this.zk;
    }
  }
  if ("undefined" != typeof XMLHttpRequest) {
    if (!fa) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var h = new g();
    var l = void 0;
  } else {
    l = c, h = void 0;
  }
  var n = Yb(a, b, d, e);
  h ? n.wi = h : l && (n.wi = null, n.url = l);
  Object.defineProperties(n, {zi:{get:function() {
    return this.wi.length;
  }}});
  var q = {};
  Object.keys(n.vi).forEach(t => {
    var y = n.vi[t];
    q[t] = (...H) => {
      Zb(n);
      return y(...H);
    };
  });
  q.read = (t, y, H, C, u) => {
    Zb(n);
    return f(t, y, H, C, u);
  };
  q.jj = (t, y, H) => {
    Zb(n);
    var C = Db(y);
    if (!C) {
      throw new B.ri(48);
    }
    f(t, m, C, y, H);
    return {xi:C, aj:!0};
  };
  n.vi = q;
  return n;
}};
function $b(a, b) {
  if (1 === a.type && a.Ei) {
    throw new B.ri(53);
  }
  var c = a.qj.shift();
  if (!c) {
    if (1 === a.type) {
      a = a.Xi[a.Ji + ":" + a.Oi];
      if (!a) {
        throw new B.ri(53);
      }
      if (a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED) {
        return null;
      }
    }
    throw new B.ri(6);
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data;
  b = Math.min(b, d);
  var g = {buffer:new Uint8Array(f, e, b), Ai:c.Ai, port:c.port};
  1 === a.type && b < d && (c.data = new Uint8Array(f, e + b, d - b), a.qj.unshift(c));
  return g;
}
function ac(a, b, c, d, e, f) {
  if (2 === a.type) {
    if (void 0 === e || void 0 === f) {
      e = a.Ji, f = a.Oi;
    }
    if (void 0 === e || void 0 === f) {
      throw new B.ri(17);
    }
  } else {
    e = a.Ji, f = a.Oi;
  }
  var g = a.Xi[e + ":" + f];
  if (1 === a.type && (!g || g.socket.readyState === g.socket.CLOSING || g.socket.readyState === g.socket.CLOSED)) {
    throw new B.ri(53);
  }
  ArrayBuffer.isView(b) && (c += b.byteOffset, b = b.buffer);
  b = b.slice(c, c + d);
  if (!g || g.socket.readyState !== g.socket.OPEN) {
    return 2 === a.type && (g && g.socket.readyState !== g.socket.CLOSING && g.socket.readyState !== g.socket.CLOSED || (g = bc(a, e, f))), g.Dj.push(b), d;
  }
  try {
    return g.socket.send(b), d;
  } catch (h) {
    throw new B.ri(28);
  }
}
function cc(a, b) {
  function c() {
    k.websocket.emit("open", a.stream.fd);
    try {
      for (var f = b.Dj.shift(); f;) {
        b.socket.send(f), f = b.Dj.shift();
      }
    } catch (g) {
      b.socket.close();
    }
  }
  function d(f) {
    if ("string" == typeof f) {
      f = (new TextEncoder()).encode(f);
    } else {
      void 0 !== f.byteLength || Qa();
      if (0 == f.byteLength) {
        return;
      }
      f = new Uint8Array(f);
    }
    var g = e;
    e = !1;
    g && 10 === f.length && 255 === f[0] && 255 === f[1] && 255 === f[2] && 255 === f[3] && 112 === f[4] && 111 === f[5] && 114 === f[6] && 116 === f[7] ? (f = f[8] << 8 | f[9], delete a.Xi[b.Ai + ":" + b.port], b.port = f, a.Xi[b.Ai + ":" + b.port] = b) : (a.qj.push({Ai:b.Ai, port:b.port, data:f}), k.websocket.emit("message", a.stream.fd));
  }
  var e = !0;
  ha ? (b.socket.on("open", c), b.socket.on("message", function(f, g) {
    g && d((new Uint8Array(f)).buffer);
  }), b.socket.on("close", function() {
    k.websocket.emit("close", a.stream.fd);
  }), b.socket.on("error", function() {
    a.error = 14;
    k.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"]);
  })) : (b.socket.onopen = c, b.socket.onclose = function() {
    k.websocket.emit("close", a.stream.fd);
  }, b.socket.onmessage = function(f) {
    d(f.data);
  }, b.socket.onerror = function() {
    a.error = 14;
    k.websocket.emit("error", [a.stream.fd, a.error, "ECONNREFUSED: Connection refused"]);
  });
}
function bc(a, b, c) {
  if ("object" == typeof b) {
    var d = b;
    c = b = null;
  }
  if (d) {
    if (d._socket) {
      b = d._socket.remoteAddress, c = d._socket.remotePort;
    } else {
      c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
      if (!c) {
        throw Error("WebSocket URL must be in the format ws(s)://address:port");
      }
      b = c[1];
      c = parseInt(c[2], 10);
    }
  } else {
    try {
      var e = k.websocket && "object" === typeof k.websocket, f = "ws://";
      e && "string" === typeof k.websocket.url && (f = k.websocket.url);
      if ("ws://" === f || "wss://" === f) {
        var g = b.split("/");
        f = f + g[0] + ":" + c + "/" + g.slice(1).join("/");
      }
      g = "binary";
      e && "string" === typeof k.websocket.subprotocol && (g = k.websocket.subprotocol);
      var h = void 0;
      "null" !== g && (h = g = g.replace(/^ +| +$/g, "").split(/ *, */));
      e && null === k.websocket.subprotocol && (h = void 0);
      d = new (ha ? require("ws") : WebSocket)(f, h);
      d.binaryType = "arraybuffer";
    } catch (l) {
      throw new B.ri(23);
    }
  }
  b = {Ai:b, port:c, socket:d, Dj:[]};
  a.Xi[b.Ai + ":" + b.port] = b;
  cc(a, b);
  2 === a.type && "undefined" != typeof a.lj && b.Dj.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.lj & 65280) >> 8, a.lj & 255]));
  return b;
}
var dc = {Bi() {
  k.websocket = k.websocket && "object" === typeof k.websocket ? k.websocket : {};
  k.websocket.Ij = {};
  k.websocket.on = function(a, b) {
    "function" === typeof b && (this.Ij[a] = b);
    return this;
  };
  k.websocket.emit = function(a, b) {
    "function" === typeof this.Ij[a] && this.Ij[a].call(this, b);
  };
  return B.createNode(null, "/", 16895, 0);
}, createSocket(a, b, c) {
  b &= -526337;
  if (1 == b && c && 6 != c) {
    throw new B.ri(66);
  }
  a = {family:a, type:b, protocol:c, Ei:null, error:null, Xi:{}, pending:[], qj:[], dj:dc.ql};
  b = dc.Ej();
  c = B.createNode(dc.root, b, 49152, 0);
  c.rj = a;
  b = Ub({path:b, node:c, flags:2, seekable:!1, vi:dc.vi});
  a.stream = b;
  return a;
}, vi:{tk(a) {
  a = a.node.rj;
  return a.dj.tk(a);
}, oj(a, b, c) {
  a = a.node.rj;
  return a.dj.oj(a, b, c);
}, read(a, b, c, d) {
  a = $b(a.node.rj, d);
  if (!a) {
    return 0;
  }
  b.set(a.buffer, c);
  return a.buffer.length;
}, write(a, b, c, d) {
  return ac(a.node.rj, b, c, d);
}, close(a) {
  a = a.node.rj;
  a.dj.close(a);
}}, Ej() {
  dc.Ej.current || (dc.Ej.current = 0);
  return "socket[" + dc.Ej.current++ + "]";
}, ql:{tk(a) {
  if (1 === a.type && a.Ei) {
    return a.pending.length ? 65 : 0;
  }
  var b = 0, c = 1 === a.type ? a.Xi[a.Ji + ":" + a.Oi] : null;
  if (a.qj.length || !c || c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED) {
    b |= 65;
  }
  if (!c || c && c.socket.readyState === c.socket.OPEN) {
    b |= 4;
  }
  if (c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED) {
    b |= 16;
  }
  return b;
}, oj(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.qj.length && (b = a.qj[0].data.length), v[c >>> 2 >>> 0] = b, 0;
    default:
      return 28;
  }
}, close(a) {
  if (a.Ei) {
    try {
      a.Ei.close();
    } catch (e) {
    }
    a.Ei = null;
  }
  for (var b = Object.keys(a.Xi), c = 0; c < b.length; c++) {
    var d = a.Xi[b[c]];
    try {
      d.socket.close();
    } catch (e) {
    }
    delete a.Xi[d.Ai + ":" + d.port];
  }
  return 0;
}, bind(a, b, c) {
  if ("undefined" != typeof a.Gj || "undefined" != typeof a.lj) {
    throw new B.ri(28);
  }
  a.Gj = b;
  a.lj = c;
  if (2 === a.type) {
    a.Ei && (a.Ei.close(), a.Ei = null);
    try {
      a.dj.listen(a, 0);
    } catch (d) {
      if ("ErrnoError" !== d.name) {
        throw d;
      }
      if (138 !== d.ti) {
        throw d;
      }
    }
  }
}, connect(a, b, c) {
  if (a.Ei) {
    throw new B.ri(138);
  }
  if ("undefined" != typeof a.Ji && "undefined" != typeof a.Oi) {
    var d = a.Xi[a.Ji + ":" + a.Oi];
    if (d) {
      if (d.socket.readyState === d.socket.CONNECTING) {
        throw new B.ri(7);
      }
      throw new B.ri(30);
    }
  }
  b = bc(a, b, c);
  a.Ji = b.Ai;
  a.Oi = b.port;
}, listen(a) {
  if (!ha) {
    throw new B.ri(138);
  }
  if (a.Ei) {
    throw new B.ri(28);
  }
  var b = require("ws").Server;
  a.Ei = new b({host:a.Gj, port:a.lj});
  k.websocket.emit("listen", a.stream.fd);
  a.Ei.on("connection", function(c) {
    if (1 === a.type) {
      var d = dc.createSocket(a.family, a.type, a.protocol);
      c = bc(d, c);
      d.Ji = c.Ai;
      d.Oi = c.port;
      a.pending.push(d);
      k.websocket.emit("connection", d.stream.fd);
    } else {
      bc(a, c), k.websocket.emit("connection", a.stream.fd);
    }
  });
  a.Ei.on("close", function() {
    k.websocket.emit("close", a.stream.fd);
    a.Ei = null;
  });
  a.Ei.on("error", function() {
    a.error = 23;
    k.websocket.emit("error", [a.stream.fd, a.error, "EHOSTUNREACH: Host is unreachable"]);
  });
}, accept(a) {
  if (!a.Ei || !a.pending.length) {
    throw new B.ri(28);
  }
  var b = a.pending.shift();
  b.stream.flags = a.stream.flags;
  return b;
}, Rl(a, b) {
  if (b) {
    if (void 0 === a.Ji || void 0 === a.Oi) {
      throw new B.ri(53);
    }
    b = a.Ji;
    a = a.Oi;
  } else {
    b = a.Gj || 0, a = a.lj || 0;
  }
  return {Ai:b, port:a};
}}}, ec = a => {
  a = (a = B.mk(a)) && B.isSocket(a.node.mode) ? a.node.rj : null;
  if (!a) {
    throw new B.ri(8);
  }
  return a;
}, fc = a => {
  a = a.split(".");
  for (var b = 0; 4 > b; b++) {
    var c = Number(a[b]);
    if (isNaN(c)) {
      return null;
    }
    a[b] = c;
  }
  return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
}, hc = a => {
  var b, c, d = [];
  if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) {
    return null;
  }
  if ("::" === a) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  a = a.startsWith("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
  0 < a.indexOf(".") ? (a = a.replace(RegExp("[.]", "g"), ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
  for (b = c = 0; b < a.length; b++) {
    if ("string" == typeof a[b]) {
      if ("Z" === a[b]) {
        for (c = 0; c < 8 - a.length + 1; c++) {
          d[b + c] = 0;
        }
        --c;
      } else {
        d[b + c] = gc(parseInt(a[b], 16));
      }
    } else {
      d[b + c] = a[b];
    }
  }
  return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
}, ic = (a, b, c, d, e) => {
  switch(b) {
    case 2:
      c = fc(c);
      p.fill(0, a, a + 16);
      e && (v[e >>> 2 >>> 0] = 16);
      r[a >>> 1 >>> 0] = b;
      v[a + 4 >>> 2 >>> 0] = c;
      r[a + 2 >>> 1 >>> 0] = gc(d);
      break;
    case 10:
      c = hc(c);
      p.fill(0, a, a + 28);
      e && (v[e >>> 2 >>> 0] = 28);
      v[a >>> 2 >>> 0] = b;
      v[a + 8 >>> 2 >>> 0] = c[0];
      v[a + 12 >>> 2 >>> 0] = c[1];
      v[a + 16 >>> 2 >>> 0] = c[2];
      v[a + 20 >>> 2 >>> 0] = c[3];
      r[a + 2 >>> 1 >>> 0] = gc(d);
      break;
    default:
      return 5;
  }
  return 0;
}, jc = 1, kc = {}, lc = {};
function mc(a) {
  var b = fc(a);
  if (null !== b) {
    return a;
  }
  b = hc(a);
  if (null !== b) {
    return a;
  }
  kc[a] ? b = kc[a] : (b = jc++, 65535 > b || Qa("exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), lc[b] = a, kc[a] = b);
  return b;
}
var nc = a => (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255), pc = a => {
  var b = "", c, d = 0, e = 0, f = 0, g = 0;
  a = [a[0] & 65535, a[0] >> 16, a[1] & 65535, a[1] >> 16, a[2] & 65535, a[2] >> 16, a[3] & 65535, a[3] >> 16];
  var h = !0;
  for (c = 0; 5 > c; c++) {
    if (0 !== a[c]) {
      h = !1;
      break;
    }
  }
  if (h) {
    c = nc(a[6] | a[7] << 16);
    if (-1 === a[5]) {
      return "::ffff:" + c;
    }
    if (0 === a[5]) {
      return "0.0.0.0" === c && (c = ""), "0.0.0.1" === c && (c = "1"), "::" + c;
    }
  }
  for (c = 0; 8 > c; c++) {
    0 === a[c] && (1 < c - e && (g = 0), e = c, g++), g > d && (d = g, f = c - d + 1);
  }
  for (c = 0; 8 > c; c++) {
    1 < d && 0 === a[c] && c >= f && c < f + d ? c === f && (b += ":", 0 === f && (b += ":")) : (b += Number(oc(a[c] & 65535)).toString(16), b += 7 > c ? ":" : "");
  }
  return b;
}, qc = (a, b) => {
  var c = r[a >>> 1 >>> 0], d = oc(ya[a + 2 >>> 1 >>> 0]);
  switch(c) {
    case 2:
      if (16 !== b) {
        return {ti:28};
      }
      a = v[a + 4 >>> 2 >>> 0];
      a = nc(a);
      break;
    case 10:
      if (28 !== b) {
        return {ti:28};
      }
      a = [v[a + 8 >>> 2 >>> 0], v[a + 12 >>> 2 >>> 0], v[a + 16 >>> 2 >>> 0], v[a + 20 >>> 2 >>> 0]];
      a = pc(a);
      break;
    default:
      return {ti:5};
  }
  return {family:c, Ai:a, port:d};
}, rc = (a, b) => {
  a = qc(a, b);
  if (a.ti) {
    throw new B.ri(a.ti);
  }
  b = a.Ai;
  a.Ai = (lc[b] ? lc[b] : null) || a.Ai;
  return a;
}, N = (a, b) => (a >>>= 0) ? rb(p, a, b) : "";
function sc(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? B.cwd() : K(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new B.ri(44);
    }
    return a;
  }
  return kb(a + "/" + b);
}
function tc(a, b, c) {
  a = a(b);
  v[c >>> 2 >>> 0] = a.dev;
  v[c + 4 >>> 2 >>> 0] = a.mode;
  x[c + 8 >>> 2 >>> 0] = a.nlink;
  v[c + 12 >>> 2 >>> 0] = a.uid;
  v[c + 16 >>> 2 >>> 0] = a.gid;
  v[c + 20 >>> 2 >>> 0] = a.rdev;
  za[c + 24 >>> 3] = BigInt(a.size);
  v[c + 32 >>> 2 >>> 0] = 4096;
  v[c + 36 >>> 2 >>> 0] = a.blocks;
  b = a.atime.getTime();
  var d = a.mtime.getTime(), e = a.ctime.getTime();
  za[c + 40 >>> 3] = BigInt(Math.floor(b / 1e3));
  x[c + 48 >>> 2 >>> 0] = b % 1e3 * 1E6;
  za[c + 56 >>> 3] = BigInt(Math.floor(d / 1e3));
  x[c + 64 >>> 2 >>> 0] = d % 1e3 * 1E6;
  za[c + 72 >>> 3] = BigInt(Math.floor(e / 1e3));
  x[c + 80 >>> 2 >>> 0] = e % 1e3 * 1E6;
  za[c + 88 >>> 3] = BigInt(a.ino);
  return 0;
}
var uc = void 0;
function vc() {
  var a = v[+uc >>> 2 >>> 0];
  uc += 4;
  return a;
}
var wc = a => {
  if (null === a) {
    return "null";
  }
  var b = typeof a;
  return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
}, xc, yc = a => {
  for (var b = ""; p[a >>> 0];) {
    b += xc[p[a++ >>> 0]];
  }
  return b;
}, zc = {}, Ac = {}, Bc = {}, O, Cc = a => {
  throw new O(a);
}, Dc, Fc = (a, b, c) => {
  function d(h) {
    h = c(h);
    if (h.length !== a.length) {
      throw new Dc("Mismatched type converter count");
    }
    for (var l = 0; l < a.length; ++l) {
      Ec(a[l], h[l]);
    }
  }
  a.forEach(h => Bc[h] = b);
  var e = Array(b.length), f = [], g = 0;
  b.forEach((h, l) => {
    Ac.hasOwnProperty(h) ? e[l] = Ac[h] : (f.push(h), zc.hasOwnProperty(h) || (zc[h] = []), zc[h].push(() => {
      e[l] = Ac[h];
      ++g;
      g === f.length && d(e);
    }));
  });
  0 === f.length && d(e);
};
function Gc(a, b, c = {}) {
  var d = b.name;
  if (!a) {
    throw new O(`type "${d}" must have a positive integer typeid pointer`);
  }
  if (Ac.hasOwnProperty(a)) {
    if (c.$k) {
      return;
    }
    throw new O(`Cannot register type '${d}' twice`);
  }
  Ac[a] = b;
  delete Bc[a];
  zc.hasOwnProperty(a) && (b = zc[a], delete zc[a], b.forEach(e => e()));
}
function Ec(a, b, c = {}) {
  return Gc(a, b, c);
}
var Hc = (a, b, c) => {
  switch(b) {
    case 1:
      return c ? d => m[d >>> 0] : d => p[d >>> 0];
    case 2:
      return c ? d => r[d >>> 1 >>> 0] : d => ya[d >>> 1 >>> 0];
    case 4:
      return c ? d => v[d >>> 2 >>> 0] : d => x[d >>> 2 >>> 0];
    case 8:
      return c ? d => za[d >>> 3] : d => Aa[d >>> 3];
    default:
      throw new TypeError(`invalid integer width (${b}): ${a}`);
  }
}, Ic = a => {
  throw new O(a.si.Ci.yi.name + " instance already deleted");
}, Jc = !1, Kc = () => {
}, Lc = (a, b, c) => {
  if (b === c) {
    return a;
  }
  if (void 0 === c.Ii) {
    return null;
  }
  a = Lc(a, b, c.Ii);
  return null === a ? null : c.Qk(a);
}, Mc = {}, Nc = {}, Oc = (a, b) => {
  if (void 0 === b) {
    throw new O("ptr should not be undefined");
  }
  for (; a.Ii;) {
    b = a.xj(b), a = a.Ii;
  }
  return Nc[b];
}, Qc = (a, b) => {
  if (!b.Ci || !b.xi) {
    throw new Dc("makeClassHandle requires ptr and ptrType");
  }
  if (!!b.Li !== !!b.Hi) {
    throw new Dc("Both smartPtrType and smartPtr must be specified");
  }
  b.count = {value:1};
  return Pc(Object.create(a, {si:{value:b, writable:!0}}));
}, Pc = a => {
  if ("undefined" === typeof FinalizationRegistry) {
    return Pc = b => b, a;
  }
  Jc = new FinalizationRegistry(b => {
    b = b.si;
    --b.count.value;
    0 === b.count.value && (b.Hi ? b.Li.cj(b.Hi) : b.Ci.yi.cj(b.xi));
  });
  Pc = b => {
    var c = b.si;
    c.Hi && Jc.register(b, {si:c}, b);
    return b;
  };
  Kc = b => {
    Jc.unregister(b);
  };
  return Pc(a);
}, Rc = [];
function Sc() {
}
var Tc = (a, b) => Object.defineProperty(b, "name", {value:a}), Uc = (a, b, c) => {
  if (void 0 === a[b].Fi) {
    var d = a[b];
    a[b] = function(...e) {
      if (!a[b].Fi.hasOwnProperty(e.length)) {
        throw new O(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].Fi})!`);
      }
      return a[b].Fi[e.length].apply(this, e);
    };
    a[b].Fi = [];
    a[b].Fi[d.sj] = d;
  }
}, Vc = (a, b, c) => {
  if (k.hasOwnProperty(a)) {
    if (void 0 === c || void 0 !== k[a].Fi && void 0 !== k[a].Fi[c]) {
      throw new O(`Cannot register public name '${a}' twice`);
    }
    Uc(k, a, a);
    if (k[a].Fi.hasOwnProperty(c)) {
      throw new O(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`);
    }
    k[a].Fi[c] = b;
  } else {
    k[a] = b, k[a].sj = c;
  }
}, Wc = a => {
  a = a.replace(/[^a-zA-Z0-9_]/g, "$");
  var b = a.charCodeAt(0);
  return 48 <= b && 57 >= b ? `_${a}` : a;
};
function Xc(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.constructor = b;
  this.nj = c;
  this.cj = d;
  this.Ii = e;
  this.Wk = f;
  this.xj = g;
  this.Qk = h;
  this.jl = [];
}
var Yc = (a, b, c) => {
  for (; b !== c;) {
    if (!b.xj) {
      throw new O(`Expected null or instance of ${c.name}, got an instance of ${b.name}`);
    }
    a = b.xj(a);
    b = b.Ii;
  }
  return a;
};
function Zc(a, b) {
  if (null === b) {
    if (this.Rj) {
      throw new O(`null is not a valid ${this.name}`);
    }
    return 0;
  }
  if (!b.si) {
    throw new O(`Cannot pass "${wc(b)}" as a ${this.name}`);
  }
  if (!b.si.xi) {
    throw new O(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  return Yc(b.si.xi, b.si.Ci.yi, this.yi);
}
function $c(a, b) {
  if (null === b) {
    if (this.Rj) {
      throw new O(`null is not a valid ${this.name}`);
    }
    if (this.zj) {
      var c = this.kl();
      null !== a && a.push(this.cj, c);
      return c;
    }
    return 0;
  }
  if (!b || !b.si) {
    throw new O(`Cannot pass "${wc(b)}" as a ${this.name}`);
  }
  if (!b.si.xi) {
    throw new O(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  if (!this.yj && b.si.Ci.yj) {
    throw new O(`Cannot convert argument of type ${b.si.Li ? b.si.Li.name : b.si.Ci.name} to parameter type ${this.name}`);
  }
  c = Yc(b.si.xi, b.si.Ci.yi, this.yi);
  if (this.zj) {
    if (void 0 === b.si.Hi) {
      throw new O("Passing raw pointer to smart pointer is illegal");
    }
    switch(this.nl) {
      case 0:
        if (b.si.Li === this) {
          c = b.si.Hi;
        } else {
          throw new O(`Cannot convert argument of type ${b.si.Li ? b.si.Li.name : b.si.Ci.name} to parameter type ${this.name}`);
        }
        break;
      case 1:
        c = b.si.Hi;
        break;
      case 2:
        if (b.si.Li === this) {
          c = b.si.Hi;
        } else {
          var d = b.clone();
          c = this.ll(c, ad(() => d["delete"]()));
          null !== a && a.push(this.cj, c);
        }
        break;
      default:
        throw new O("Unsupporting sharing policy");
    }
  }
  return c;
}
function bd(a, b) {
  if (null === b) {
    if (this.Rj) {
      throw new O(`null is not a valid ${this.name}`);
    }
    return 0;
  }
  if (!b.si) {
    throw new O(`Cannot pass "${wc(b)}" as a ${this.name}`);
  }
  if (!b.si.xi) {
    throw new O(`Cannot pass deleted object as a pointer of type ${this.name}`);
  }
  if (b.si.Ci.yj) {
    throw new O(`Cannot convert argument of type ${b.si.Ci.name} to parameter type ${this.name}`);
  }
  return Yc(b.si.xi, b.si.Ci.yi, this.yi);
}
function cd(a) {
  return this.fromWireType(x[a >>> 2 >>> 0]);
}
function dd(a, b, c, d, e, f, g, h, l, n, q) {
  this.name = a;
  this.yi = b;
  this.Rj = c;
  this.yj = d;
  this.zj = e;
  this.il = f;
  this.nl = g;
  this.wk = h;
  this.kl = l;
  this.ll = n;
  this.cj = q;
  e || void 0 !== b.Ii ? this.toWireType = $c : (this.toWireType = d ? Zc : bd, this.Mi = null);
}
var ed = (a, b, c) => {
  if (!k.hasOwnProperty(a)) {
    throw new Dc("Replacing nonexistent public symbol");
  }
  void 0 !== k[a].Fi && void 0 !== c ? k[a].Fi[c] = b : (k[a] = b, k[a].sj = c);
}, fd = (a, b, c = []) => {
  b = A(b)(...c);
  return "p" == a[0] ? b >>> 0 : b;
}, gd = (a, b) => (...c) => fd(a, b, c), hd = (a, b) => {
  a = yc(a);
  var c = a.includes("p") ? gd(a, b) : A(b);
  if ("function" != typeof c) {
    throw new O(`unknown function pointer with signature ${a}: ${b}`);
  }
  return c;
}, jd, md = a => {
  a = kd(a);
  var b = yc(a);
  ld(a);
  return b;
}, nd = (a, b) => {
  function c(f) {
    e[f] || Ac[f] || (Bc[f] ? Bc[f].forEach(c) : (d.push(f), e[f] = !0));
  }
  var d = [], e = {};
  b.forEach(c);
  throw new jd(`${a}: ` + d.map(md).join([", "]));
}, od = (a, b) => {
  for (var c = [], d = 0; d < a; d++) {
    c.push(x[b + 4 * d >>> 2 >>> 0]);
  }
  return c;
}, pd = a => {
  for (; a.length;) {
    var b = a.pop();
    a.pop()(b);
  }
};
function qd(a) {
  for (var b = 1; b < a.length; ++b) {
    if (null !== a[b] && void 0 === a[b].Mi) {
      return !0;
    }
  }
  return !1;
}
function rd(a) {
  var b = Function;
  if (!(b instanceof Function)) {
    throw new TypeError(`new_ called with constructor type ${typeof b} which is not a function`);
  }
  var c = Tc(b.name || "unknownFunctionName", function() {
  });
  c.prototype = b.prototype;
  c = new c();
  a = b.apply(c, a);
  return a instanceof Object ? a : c;
}
function sd(a, b, c, d, e, f) {
  var g = b.length;
  if (2 > g) {
    throw new O("argTypes array size mismatch! Must at least get return value and 'this' types!");
  }
  var h = null !== b[1] && null !== c, l = qd(b);
  c = "void" !== b[0].name;
  d = [a, Cc, d, e, pd, b[0], b[1]];
  for (e = 0; e < g - 2; ++e) {
    d.push(b[e + 2]);
  }
  if (!l) {
    for (e = h ? 1 : 2; e < b.length; ++e) {
      null !== b[e].Mi && d.push(b[e].Mi);
    }
  }
  l = qd(b);
  e = b.length - 2;
  var n = [], q = ["fn"];
  h && q.push("thisWired");
  for (g = 0; g < e; ++g) {
    n.push(`arg${g}`), q.push(`arg${g}Wired`);
  }
  n = n.join(",");
  q = q.join(",");
  n = `return function (${n}) {\n`;
  l && (n += "var destructors = [];\n");
  var t = l ? "destructors" : "null", y = "humanName throwBindingError invoker fn runDestructors retType classParam".split(" ");
  h && (n += `var thisWired = classParam['toWireType'](${t}, this);\n`);
  for (g = 0; g < e; ++g) {
    n += `var arg${g}Wired = argType${g}['toWireType'](${t}, arg${g});\n`, y.push(`argType${g}`);
  }
  n += (c || f ? "var rv = " : "") + `invoker(${q});\n`;
  if (l) {
    n += "runDestructors(destructors);\n";
  } else {
    for (g = h ? 1 : 2; g < b.length; ++g) {
      f = 1 === g ? "thisWired" : "arg" + (g - 2) + "Wired", null !== b[g].Mi && (n += `${f}_dtor(${f});\n`, y.push(`${f}_dtor`));
    }
  }
  c && (n += "var ret = retType['fromWireType'](rv);\nreturn ret;\n");
  let [H, C] = [y, n + "}\n"];
  H.push(C);
  b = rd(H)(...d);
  return Tc(a, b);
}
var td = a => {
  a = a.trim();
  const b = a.indexOf("(");
  return -1 !== b ? a.substr(0, b) : a;
}, ud = [], vd = [];
function wd(a) {
  a >>>= 0;
  9 < a && 0 === --vd[a + 1] && (vd[a] = void 0, ud.push(a));
}
var P = a => {
  if (!a) {
    throw new O("Cannot use deleted val. handle = " + a);
  }
  return vd[a];
}, ad = a => {
  switch(a) {
    case void 0:
      return 2;
    case null:
      return 4;
    case !0:
      return 6;
    case !1:
      return 8;
    default:
      const b = ud.pop() || vd.length;
      vd[b] = a;
      vd[b + 1] = 1;
      return b;
  }
}, xd = {name:"emscripten::val", fromWireType:a => {
  var b = P(a);
  wd(a);
  return b;
}, toWireType:(a, b) => ad(b), Si:8, readValueFromPointer:cd, Mi:null}, yd = (a, b) => {
  switch(b) {
    case 4:
      return function(c) {
        return this.fromWireType(z[c >>> 2 >>> 0]);
      };
    case 8:
      return function(c) {
        return this.fromWireType(Ba[c >>> 3 >>> 0]);
      };
    default:
      throw new TypeError(`invalid float width (${b}): ${a}`);
  }
}, zd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Ad = (a, b) => {
  var c = a >> 1;
  for (var d = c + b / 2; !(c >= d) && ya[c >>> 0];) {
    ++c;
  }
  c <<= 1;
  if (32 < c - a && zd) {
    return zd.decode(p.subarray(a >>> 0, c >>> 0));
  }
  c = "";
  for (d = 0; !(d >= b / 2); ++d) {
    var e = r[a + 2 * d >>> 1 >>> 0];
    if (0 == e) {
      break;
    }
    c += String.fromCharCode(e);
  }
  return c;
}, Bd = (a, b, c) => {
  c ??= 2147483647;
  if (2 > c) {
    return 0;
  }
  c -= 2;
  var d = b;
  c = c < 2 * a.length ? c / 2 : a.length;
  for (var e = 0; e < c; ++e) {
    r[b >>> 1 >>> 0] = a.charCodeAt(e), b += 2;
  }
  r[b >>> 1 >>> 0] = 0;
  return b - d;
}, Cd = a => 2 * a.length, Dd = (a, b) => {
  for (var c = 0, d = ""; !(c >= b / 4);) {
    var e = v[a + 4 * c >>> 2 >>> 0];
    if (0 == e) {
      break;
    }
    ++c;
    65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
  }
  return d;
}, Ed = (a, b, c) => {
  b >>>= 0;
  c ??= 2147483647;
  if (4 > c) {
    return 0;
  }
  var d = b;
  c = d + c - 4;
  for (var e = 0; e < a.length; ++e) {
    var f = a.charCodeAt(e);
    if (55296 <= f && 57343 >= f) {
      var g = a.charCodeAt(++e);
      f = 65536 + ((f & 1023) << 10) | g & 1023;
    }
    v[b >>> 2 >>> 0] = f;
    b += 4;
    if (b + 4 > c) {
      break;
    }
  }
  v[b >>> 2 >>> 0] = 0;
  return b - d;
}, Fd = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && ++c;
    b += 4;
  }
  return b;
}, Gd = (a, b) => {
  var c = Ac[a];
  if (void 0 === c) {
    throw a = `${b} has unknown type ${md(a)}`, new O(a);
  }
  return c;
}, Hd = (a, b, c) => {
  var d = [];
  a = a.toWireType(d, c);
  d.length && (x[b >>> 2 >>> 0] = ad(d));
  return a;
}, Id = [], Jd = {}, Kd = a => {
  var b = Jd[a];
  return void 0 === b ? yc(a) : b;
}, Ld = () => "object" == typeof globalThis ? globalThis : Function("return this")(), Md = a => {
  var b = Id.length;
  Id.push(a);
  return b;
}, Nd = (a, b) => {
  for (var c = Array(a), d = 0; d < a; ++d) {
    c[d] = Gd(x[b + 4 * d >>> 2 >>> 0], "parameter " + d);
  }
  return c;
}, Od = a => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Pd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Qd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Rd = a => {
  if (a instanceof Xa || "unwind" == a) {
    return xa;
  }
  la(1, a);
}, Sd = 0, Td = a => {
  xa = a;
  Ya || 0 < Sd || (k.onExit?.(a), wa = !0);
  la(a, new Xa(a));
}, Ud = a => {
  xa = a;
  Td(a);
}, Vd = () => {
  if (!(Ya || 0 < Sd)) {
    try {
      var a = xa;
      xa = a;
      Td(a);
    } catch (b) {
      Rd(b);
    }
  }
}, Wd = a => {
  if (!wa) {
    try {
      a(), Vd();
    } catch (b) {
      Rd(b);
    }
  }
}, Xd = (a, b) => setTimeout(() => {
  Wd(a);
}, b), ge = (a, b) => {
  Yd = a;
  Zd = b;
  if ($d) {
    if (ae ||= !0, 0 == a) {
      be = function() {
        setTimeout(ce, Math.max(0, de + b - performance.now()) | 0);
      };
    } else if (1 == a) {
      be = function() {
        ee(ce);
      };
    } else if (2 == a) {
      if ("undefined" == typeof fe) {
        if ("undefined" == typeof setImmediate) {
          var c = [];
          addEventListener("message", d => {
            if ("setimmediate" === d.data || "setimmediate" === d.data.target) {
              d.stopPropagation(), c.shift()();
            }
          }, !0);
          fe = d => {
            c.push(d);
            fa ? (k.setImmediates ?? (k.setImmediates = []), k.setImmediates.push(d), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
          };
        } else {
          fe = setImmediate;
        }
      }
      be = function() {
        fe(ce);
      };
    }
  }
}, pe = (a, b, c, d, e) => {
  function f() {
    return g < he ? (Vd(), !1) : !0;
  }
  $d = a;
  ie = d;
  var g = he;
  ae = !1;
  ce = function() {
    if (!wa) {
      if (0 < je.length) {
        var h = je.shift();
        h.Nl(h.tl);
        if (ke) {
          var l = ke, n = 0 == l % 1 ? l - 1 : Math.floor(l);
          ke = h.Al ? n : (8 * l + (n + .5)) / 9;
        }
        k.setStatus && (h = k.statusMessage || "Please wait...", l = ke ?? 0, n = le.Jl ?? 0, l ? l < n ? k.setStatus("{message} ({expected - remaining}/{expected})") : k.setStatus(h) : k.setStatus(""));
        f() && setTimeout(ce, 0);
      } else {
        if (f()) {
          if (me = me + 1 | 0, 1 == Yd && 1 < Zd && 0 != me % Zd) {
            be();
          } else {
            0 == Yd && (de = performance.now());
            a: {
              if (!wa) {
                for (h of ne) {
                  if (!1 === h()) {
                    break a;
                  }
                }
                Wd(a);
                for (l of oe) {
                  l();
                }
              }
            }
            f() && be();
          }
        }
      }
    }
  };
  e || (b && 0 < b ? ge(0, 1e3 / b) : ge(1, 1), be());
  if (c) {
    throw "unwind";
  }
}, ae = !1, be = null, he = 0, $d = null, ie = 0, Yd = 0, Zd = 0, me = 0, je = [], ne = [], oe = [];
function qe() {
  be = null;
  he++;
}
var re = 0;
function ee(a) {
  if ("function" == typeof requestAnimationFrame) {
    requestAnimationFrame(a);
  } else {
    var b = Date.now();
    if (0 === re) {
      re = b + 1e3 / 60;
    } else {
      for (; b + 2 >= re;) {
        re += 1e3 / 60;
      }
    }
    setTimeout(a, Math.max(re - b, 0));
  }
}
var le = {}, de, ce, fe, ke, se = () => {
  var a = 'Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.';
  se.Wj || (se.Wj = {});
  se.Wj[a] || (se.Wj[a] = 1, ha && (a = "warning: " + a), ta(a));
}, te = !1, ue = !1, ve = [];
function Jb() {
  function a() {
    ue = document.pointerLockElement === k.canvas || document.mozPointerLockElement === k.canvas || document.webkitPointerLockElement === k.canvas || document.msPointerLockElement === k.canvas;
  }
  if (!we) {
    we = !0;
    Hb.push({canHandle:function(c) {
      return !k.noImageDecoding && /\.(jpg|jpeg|png|bmp|webp)$/i.test(c);
    }, handle:function(c, d, e, f) {
      var g = new Blob([c], {type:xe(d)});
      g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer], {type:xe(d)}));
      var h = URL.createObjectURL(g), l = new Image();
      l.onload = () => {
        var n = document.createElement("canvas");
        n.width = l.width;
        n.height = l.height;
        n.getContext("2d").drawImage(l, 0, 0);
        URL.revokeObjectURL(h);
        e?.(c);
      };
      l.onerror = () => {
        ta(`Image ${h} could not be decoded`);
        f?.();
      };
      l.src = h;
    }});
    Hb.push({canHandle:function(c) {
      return !k.noAudioDecoding && c.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(c, d, e) {
      function f() {
        g || (g = !0, e?.(c));
      }
      var g = !1, h = URL.createObjectURL(new Blob([c], {type:xe(d)})), l = new Audio();
      l.addEventListener("canplaythrough", () => f(l), !1);
      l.onerror = function() {
        if (!g) {
          ta(`warning: browser could not fully decode audio ${d}, trying slower base64 approach`);
          for (var n = "", q = 0, t = 0, y = 0; y < c.length; y++) {
            for (q = q << 8 | c[y], t += 8; 6 <= t;) {
              var H = q >> t - 6 & 63;
              t -= 6;
              n += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[H];
            }
          }
          2 == t ? (n += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(q & 3) << 4], n += "==") : 4 == t && (n += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(q & 15) << 2], n += "=");
          l.src = "data:audio/x-" + d.substr(-3) + ";base64," + n;
          f(l);
        }
      };
      l.src = h;
      Xd(() => {
        f(l);
      }, 1e4);
    }});
    var b = k.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (() => {
    }), b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
    }), b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), k.elementPointerLock && b.addEventListener("click", c => {
      !ue && k.canvas.requestPointerLock && (k.canvas.requestPointerLock(), c.preventDefault());
    }, !1));
  }
}
var ye = !1, ze = void 0, Ae = void 0;
function Be() {
  if (!te) {
    return !1;
  }
  (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {
  })).apply(document, []);
  return !0;
}
function xe(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
var Ce = [];
function De() {
  var a = k.canvas;
  Ce.forEach(b => b(a.width, a.height));
}
function Ee(a, b, c) {
  b && c ? (a.rl = b, a.Zk = c) : (b = a.rl, c = a.Zk);
  var d = b, e = c;
  k.forcedAspectRatio && 0 < k.forcedAspectRatio && (d / e < k.forcedAspectRatio ? d = Math.round(e * k.forcedAspectRatio) : e = Math.round(d / k.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var f = Math.min(screen.width / d, screen.height / e);
    d = Math.round(d * f);
    e = Math.round(e * f);
  }
  Ae ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var Ib = {}, we, Fe = a => {
  ee(() => {
    Wd(a);
  });
}, Ge = clearTimeout;
function He(a) {
  var b = Q.Pi[a];
  b.target.removeEventListener(b.mj, b.kk, b.bk);
  Q.Pi.splice(a, 1);
}
function Ie() {
  if (navigator.userActivation ? navigator.userActivation.isActive : Q.Oj && Q.Ok.Ik) {
    var a = Q.bj;
    Q.bj = [];
    for (var b of a) {
      b.Yj(...b.ek);
    }
  }
}
function Je(a) {
  if (!a.target) {
    return -4;
  }
  if (a.fk) {
    a.kk = function(c) {
      ++Q.Oj;
      Q.Ok = a;
      Ie();
      a.pk(c);
      Ie();
      --Q.Oj;
    }, a.target.addEventListener(a.mj, a.kk, a.bk), Q.Pi.push(a);
  } else {
    for (var b = 0; b < Q.Pi.length; ++b) {
      Q.Pi[b].target == a.target && Q.Pi[b].mj == a.mj && He(b--);
    }
  }
  return 0;
}
var Q = {ul:0, Ol:0, Tl:0, Zl:0, ck:0, $j:0, Ll:0, Gl:0, bm:0, Fl:0, Ml:0, dm:0, lm:0, jm:0, gm() {
  for (; Q.Pi.length;) {
    He(Q.Pi.length - 1);
  }
  Q.bj = [];
}, Oj:0, bj:[], El(a, b, c) {
  function d(f, g) {
    if (f.length != g.length) {
      return !1;
    }
    for (var h in f) {
      if (f[h] != g[h]) {
        return !1;
      }
    }
    return !0;
  }
  for (var e of Q.bj) {
    if (e.Yj == a && d(e.ek, c)) {
      return;
    }
  }
  Q.bj.push({Yj:a, uk:b, ek:c});
  Q.bj.sort((f, g) => f.uk < g.uk);
}, hm(a) {
  Q.bj = Q.bj.filter(b => b.Yj != a);
}, Pi:[], ml:(a, b) => {
  for (var c = 0; c < Q.Pi.length; ++c) {
    Q.Pi[c].target != a || b && b != Q.Pi[c].mj || He(c--);
  }
}, Ql(a) {
  return a ? a == window ? "#window" : a == screen ? "#screen" : a?.nodeName || "" : "";
}, fullscreenEnabled() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
}}, Ke = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0], Le = a => {
  a = 2 < a ? N(a) : a;
  return Ke[a] || ("undefined" != typeof document ? document.querySelector(a) : void 0);
}, R, Me = a => {
  var b = a.getExtension("ANGLE_instanced_arrays");
  b && (a.vertexAttribDivisor = (c, d) => b.vertexAttribDivisorANGLE(c, d), a.drawArraysInstanced = (c, d, e, f) => b.drawArraysInstancedANGLE(c, d, e, f), a.drawElementsInstanced = (c, d, e, f, g) => b.drawElementsInstancedANGLE(c, d, e, f, g));
}, Ne = a => {
  var b = a.getExtension("OES_vertex_array_object");
  b && (a.createVertexArray = () => b.createVertexArrayOES(), a.deleteVertexArray = c => b.deleteVertexArrayOES(c), a.bindVertexArray = c => b.bindVertexArrayOES(c), a.isVertexArray = c => b.isVertexArrayOES(c));
}, Oe = a => {
  var b = a.getExtension("WEBGL_draw_buffers");
  b && (a.drawBuffers = (c, d) => b.drawBuffersWEBGL(c, d));
}, Pe = a => {
  var b = "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
  return (a.getSupportedExtensions() || []).filter(c => b.includes(c));
}, Qe = 1, Re = [], S = [], Se = [], Te = [], Ue = [], Ve = [], We = [], Xe = [], Ye = [], Ze = [], $e = [], af = [], bf = {}, cf = {}, df = 4, ef = 0, ff = a => {
  for (var b = Qe++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}, gf = (a, b, c, d) => {
  for (var e = 0; e < a; e++) {
    var f = R[c](), g = f && ff(d);
    f ? (f.name = g, d[g] = f) : T ||= 1282;
    v[b + 4 * e >>> 2 >>> 0] = g;
  }
}, jf = (a, b) => {
  a.Di || (a.Di = a.getContext, a.getContext = function(d, e) {
    e = a.Di(d, e);
    return "webgl" == d == e instanceof WebGLRenderingContext ? e : null;
  });
  var c = 1 < b.Tj ? a.getContext("webgl2", b) : a.getContext("webgl", b);
  return c ? hf(c, b) : 0;
}, hf = (a, b) => {
  var c = ff(Xe), d = {handle:c, attributes:b, version:b.Tj, $i:a};
  a.canvas && (a.canvas.Gk = d);
  Xe[c] = d;
  ("undefined" == typeof b.Lj || b.Lj) && kf(d);
  return c;
}, mf = a => {
  lf = Xe[a];
  k.Jj = R = lf?.$i;
  return !(a && !R);
}, kf = a => {
  a ||= lf;
  if (!a.al) {
    a.al = !0;
    var b = a.$i;
    b.$l = b.getExtension("WEBGL_multi_draw");
    b.Uk = b.getExtension("EXT_polygon_offset_clamp");
    b.Tk = b.getExtension("EXT_clip_control");
    b.pl = b.getExtension("WEBGL_polygon_mode");
    Me(b);
    Ne(b);
    Oe(b);
    b.Hl = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
    b.Vl = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
    2 <= a.version && (b.Ni = b.getExtension("EXT_disjoint_timer_query_webgl2"));
    if (2 > a.version || !b.Ni) {
      b.Ni = b.getExtension("EXT_disjoint_timer_query");
    }
    Pe(b).forEach(c => {
      c.includes("lose_context") || c.includes("debug") || b.getExtension(c);
    });
  }
}, nf = {}, T, lf, of = a => {
  R.bindVertexArray(We[a]);
};
function pf(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0];
    R.deleteVertexArray(We[d]);
    We[d] = null;
  }
}
var qf = (a, b, c, d) => {
  R.drawArraysInstanced(a, b, c, d);
}, rf = [];
function sf(a, b) {
  b >>>= 0;
  for (var c = rf[a], d = 0; d < a; d++) {
    c[d] = v[b + 4 * d >>> 2 >>> 0];
  }
  R.drawBuffers(c);
}
function tf(a, b, c, d) {
  R.drawElements(a, b, c, d >>> 0);
}
function uf(a, b, c, d, e) {
  R.drawElementsInstanced(a, b, c, d >>> 0, e);
}
function vf(a, b) {
  gf(a, b >>> 0, "createVertexArray", We);
}
var wf = (a, b, c, d, e, f, g, h) => {
  b = S[b];
  if (a = R[a](b, c)) {
    d = h && E(a.name, p, h, d), e && (v[e >>> 2 >>> 0] = d), f && (v[f >>> 2 >>> 0] = a.size), g && (v[g >>> 2 >>> 0] = a.type);
  }
}, xf = (a, b) => {
  x[a >>> 2 >>> 0] = b;
  x[a + 4 >>> 2 >>> 0] = (b - x[a >>> 2 >>> 0]) / 4294967296;
};
function yf() {
  var a = Pe(R);
  return a = a.concat(a.map(b => "GL_" + b));
}
var zf = (a, b, c) => {
  if (b) {
    var d = void 0;
    switch(a) {
      case 36346:
        d = 1;
        break;
      case 36344:
        0 != c && 1 != c && (T ||= 1280);
        return;
      case 34814:
      case 36345:
        d = 0;
        break;
      case 34466:
        var e = R.getParameter(34467);
        d = e ? e.length : 0;
        break;
      case 33309:
        if (2 > lf.version) {
          T ||= 1282;
          return;
        }
        d = yf().length;
        break;
      case 33307:
      case 33308:
        if (2 > lf.version) {
          T ||= 1280;
          return;
        }
        d = 33307 == a ? 3 : 0;
    }
    if (void 0 === d) {
      switch(e = R.getParameter(a), typeof e) {
        case "number":
          d = e;
          break;
        case "boolean":
          d = e ? 1 : 0;
          break;
        case "string":
          T ||= 1280;
          return;
        case "object":
          if (null === e) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                d = 0;
                break;
              default:
                T ||= 1280;
                return;
            }
          } else {
            if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
              for (a = 0; a < e.length; ++a) {
                switch(c) {
                  case 0:
                    v[b + 4 * a >>> 2 >>> 0] = e[a];
                    break;
                  case 2:
                    z[b + 4 * a >>> 2 >>> 0] = e[a];
                    break;
                  case 4:
                    m[b + a >>> 0] = e[a] ? 1 : 0;
                }
              }
              return;
            }
            try {
              d = e.name | 0;
            } catch (f) {
              T ||= 1280;
              ta(`GL_INVALID_ENUM in glGet${c}v: Unknown object returned from WebGL getParameter(${a})! (error: ${f})`);
              return;
            }
          }
          break;
        default:
          T ||= 1280;
          ta(`GL_INVALID_ENUM in glGet${c}v: Native code calling glGet${c}v(${a}) and it returns ${e} of type ${typeof e}!`);
          return;
      }
    }
    switch(c) {
      case 1:
        xf(b, d);
        break;
      case 0:
        v[b >>> 2 >>> 0] = d;
        break;
      case 2:
        z[b >>> 2 >>> 0] = d;
        break;
      case 4:
        m[b >>> 0] = d ? 1 : 0;
    }
  } else {
    T ||= 1281;
  }
}, Af = (a, b, c, d) => {
  if (c) {
    b = R.getIndexedParameter(a, b);
    switch(typeof b) {
      case "boolean":
        a = b ? 1 : 0;
        break;
      case "number":
        a = b;
        break;
      case "object":
        if (null === b) {
          switch(a) {
            case 35983:
            case 35368:
              a = 0;
              break;
            default:
              T ||= 1280;
              return;
          }
        } else if (b instanceof WebGLBuffer) {
          a = b.name | 0;
        } else {
          T ||= 1280;
          return;
        }
        break;
      default:
        T ||= 1280;
        return;
    }
    switch(d) {
      case 1:
        xf(c, a);
        break;
      case 0:
        v[c >>> 2 >>> 0] = a;
        break;
      case 2:
        z[c >>> 2 >>> 0] = a;
        break;
      case 4:
        m[c >>> 0] = a ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + d;
    }
  } else {
    T ||= 1281;
  }
};
function Bf(a, b, c) {
  if (c >>>= 0) {
    a = Ye[a];
    b = 2 > lf.version ? R.Ni.getQueryObjectEXT(a, b) : R.getQueryParameter(a, b);
    var d;
    "boolean" == typeof b ? d = b ? 1 : 0 : d = b;
    xf(c, d);
  } else {
    T ||= 1281;
  }
}
function Cf(a, b, c) {
  if (c >>>= 0) {
    a = R.Ni.getQueryObjectEXT(Ye[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    v[c >>> 2 >>> 0] = d;
  } else {
    T ||= 1281;
  }
}
var Ef = a => {
  var b = tb(a) + 1, c = Df(b);
  c && E(a, p, c, b);
  return c;
}, Ff = a => "]" == a.slice(-1) && a.lastIndexOf("["), Gf = a => {
  var b = a.wj, c = a.Bk, d;
  if (!b) {
    a.wj = b = {};
    a.Ak = {};
    var e = R.getProgramParameter(a, 35718);
    for (d = 0; d < e; ++d) {
      var f = R.getActiveUniform(a, d);
      var g = f.name;
      f = f.size;
      var h = Ff(g);
      h = 0 < h ? g.slice(0, h) : g;
      var l = a.ak;
      a.ak += f;
      c[h] = [f, l];
      for (g = 0; g < f; ++g) {
        b[l] = g, a.Ak[l++] = h;
      }
    }
  }
}, V = a => {
  var b = R.Pk;
  if (b) {
    var c = b.wj[a];
    "number" == typeof c && (b.wj[a] = c = R.getUniformLocation(b, b.Ak[a] + (0 < c ? `[${c}]` : "")));
    return c;
  }
  T ||= 1282;
}, Hf = (a, b, c, d) => {
  if (c) {
    if (a = S[a], Gf(a), a = R.getUniform(a, V(b)), "number" == typeof a || "boolean" == typeof a) {
      switch(d) {
        case 0:
          v[c >>> 2 >>> 0] = a;
          break;
        case 2:
          z[c >>> 2 >>> 0] = a;
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(d) {
          case 0:
            v[c + 4 * b >>> 2 >>> 0] = a[b];
            break;
          case 2:
            z[c + 4 * b >>> 2 >>> 0] = a[b];
        }
      }
    }
  } else {
    T ||= 1281;
  }
}, If = (a, b, c, d) => {
  if (c) {
    if (a = R.getVertexAttrib(a, b), 34975 == b) {
      v[c >>> 2 >>> 0] = a && a.name;
    } else if ("number" == typeof a || "boolean" == typeof a) {
      switch(d) {
        case 0:
          v[c >>> 2 >>> 0] = a;
          break;
        case 2:
          z[c >>> 2 >>> 0] = a;
          break;
        case 5:
          v[c >>> 2 >>> 0] = Math.fround(a);
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(d) {
          case 0:
            v[c + 4 * b >>> 2 >>> 0] = a[b];
            break;
          case 2:
            z[c + 4 * b >>> 2 >>> 0] = a[b];
            break;
          case 5:
            v[c + 4 * b >>> 2 >>> 0] = Math.fround(a[b]);
        }
      }
    }
  } else {
    T ||= 1281;
  }
};
function Jf(a, b, c) {
  If(a, b, c >>> 0, 0);
}
var Kf = a => (a = We[a]) ? R.isVertexArray(a) : 0, Lf = a => {
  a -= 5120;
  return 0 == a ? m : 1 == a ? p : 2 == a ? r : 4 == a ? v : 6 == a ? z : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? x : ya;
}, Mf = (a, b, c, d, e) => {
  a = Lf(a);
  b = d * ((ef || c) * ({5:3, 6:4, 8:2, 29502:3, 29504:4, 26917:2, 26918:2, 29846:3, 29847:4}[b - 6402] || 1) * a.BYTES_PER_ELEMENT + df - 1 & -df);
  return a.subarray(e >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT) >>> 0, e + b >>> 31 - Math.clz32(a.BYTES_PER_ELEMENT) >>> 0);
}, Nf = [], Of = [], Pf = (a, b) => {
  R.vertexAttribDivisor(a, b);
}, Qf = (a, b) => {
  if (0 >= a) {
    return a;
  }
  var c = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  a >= c && (32 >= b || a > c) && (a = -2 * c + a);
  return a;
}, Rf = (a, b) => 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a, Sf = a => {
  for (var b = a; p[b >>> 0];) {
    ++b;
  }
  return b - a;
}, Tf = (a, b) => {
  function c(L) {
    var D = d;
    ("double" === L || "i64" === L) && D & 7 && (D += 4);
    d = D;
    "double" === L ? (L = Ba[d >>> 3 >>> 0], d += 8) : "i64" == L ? (L = [v[d >>> 2 >>> 0], v[d + 4 >>> 2 >>> 0]], d += 8) : (L = v[d >>> 2 >>> 0], d += 4);
    return L;
  }
  for (var d = b, e = [], f, g;;) {
    var h = a;
    f = m[a >>> 0];
    if (0 === f) {
      break;
    }
    g = m[a + 1 >>> 0];
    if (37 == f) {
      var l = !1, n = b = !1, q = !1, t = !1;
      a: for (;;) {
        switch(g) {
          case 43:
            l = !0;
            break;
          case 45:
            b = !0;
            break;
          case 35:
            n = !0;
            break;
          case 48:
            if (q) {
              break a;
            } else {
              q = !0;
              break;
            }
          case 32:
            t = !0;
            break;
          default:
            break a;
        }
        a++;
        g = m[a + 1 >>> 0];
      }
      var y = 0;
      if (42 == g) {
        y = c("i32"), a++, g = m[a + 1 >>> 0];
      } else {
        for (; 48 <= g && 57 >= g;) {
          y = 10 * y + (g - 48), a++, g = m[a + 1 >>> 0];
        }
      }
      var H = !1, C = -1;
      if (46 == g) {
        C = 0;
        H = !0;
        a++;
        g = m[a + 1 >>> 0];
        if (42 == g) {
          C = c("i32"), a++;
        } else {
          for (;;) {
            g = m[a + 1 >>> 0];
            if (48 > g || 57 < g) {
              break;
            }
            C = 10 * C + (g - 48);
            a++;
          }
        }
        g = m[a + 1 >>> 0];
      }
      0 > C && (C = 6, H = !1);
      switch(String.fromCharCode(g)) {
        case "h":
          g = m[a + 2 >>> 0];
          if (104 == g) {
            a++;
            var u = 1;
          } else {
            u = 2;
          }
          break;
        case "l":
          g = m[a + 2 >>> 0];
          108 == g ? (a++, u = 8) : u = 4;
          break;
        case "L":
        case "q":
        case "j":
          u = 8;
          break;
        case "z":
        case "t":
        case "I":
          u = 4;
          break;
        default:
          u = null;
      }
      u && a++;
      g = m[a + 1 >>> 0];
      switch(String.fromCharCode(g)) {
        case "d":
        case "i":
        case "u":
        case "o":
        case "x":
        case "X":
        case "p":
          h = 100 == g || 105 == g;
          u = u || 4;
          f = c("i" + 8 * u);
          8 == u && (f = 117 == g ? (f[0] >>> 0) + 4294967296 * (f[1] >>> 0) : (f[0] >>> 0) + 4294967296 * f[1]);
          4 >= u && (f = (h ? Qf : Rf)(f & Math.pow(256, u) - 1, 8 * u));
          var J = Math.abs(f);
          h = "";
          if (100 == g || 105 == g) {
            var w = Qf(f, 8 * u).toString(10);
          } else if (117 == g) {
            w = Rf(f, 8 * u).toString(10), f = Math.abs(f);
          } else if (111 == g) {
            w = (n ? "0" : "") + J.toString(8);
          } else if (120 == g || 88 == g) {
            h = n && 0 != f ? "0x" : "";
            if (0 > f) {
              f = -f;
              w = (J - 1).toString(16);
              J = [];
              for (n = 0; n < w.length; n++) {
                J.push((15 - parseInt(w[n], 16)).toString(16));
              }
              for (w = J.join(""); w.length < 2 * u;) {
                w = "f" + w;
              }
            } else {
              w = J.toString(16);
            }
            88 == g && (h = h.toUpperCase(), w = w.toUpperCase());
          } else {
            112 == g && (0 === J ? w = "(nil)" : (h = "0x", w = J.toString(16)));
          }
          if (H) {
            for (; w.length < C;) {
              w = "0" + w;
            }
          }
          0 <= f && (l ? h = "+" + h : t && (h = " " + h));
          "-" == w.charAt(0) && (h = "-" + h, w = w.substr(1));
          for (; h.length + w.length < y;) {
            b ? w += " " : q ? w = "0" + w : h = " " + h;
          }
          w = h + w;
          w.split("").forEach(L => e.push(L.charCodeAt(0)));
          break;
        case "f":
        case "F":
        case "e":
        case "E":
        case "g":
        case "G":
          f = c("double");
          if (isNaN(f)) {
            w = "nan", q = !1;
          } else if (isFinite(f)) {
            H = !1;
            u = Math.min(C, 20);
            if (103 == g || 71 == g) {
              H = !0, C = C || 1, u = parseInt(f.toExponential(u).split("e")[1], 10), C > u && -4 <= u ? (g = (103 == g ? "f" : "F").charCodeAt(0), C -= u + 1) : (g = (103 == g ? "e" : "E").charCodeAt(0), C--), u = Math.min(C, 20);
            }
            if (101 == g || 69 == g) {
              w = f.toExponential(u), /[eE][-+]\d$/.test(w) && (w = w.slice(0, -1) + "0" + w.slice(-1));
            } else if (102 == g || 70 == g) {
              w = f.toFixed(u), 0 === f && (0 > f || 0 === f && -Infinity === 1 / f) && (w = "-" + w);
            }
            h = w.split("e");
            if (H && !n) {
              for (; 1 < h[0].length && h[0].includes(".") && ("0" == h[0].slice(-1) || "." == h[0].slice(-1));) {
                h[0] = h[0].slice(0, -1);
              }
            } else {
              for (n && -1 == w.indexOf(".") && (h[0] += "."); C > u++;) {
                h[0] += "0";
              }
            }
            w = h[0] + (1 < h.length ? "e" + h[1] : "");
            69 == g && (w = w.toUpperCase());
            0 <= f && (l ? w = "+" + w : t && (w = " " + w));
          } else {
            w = (0 > f ? "-" : "") + "inf", q = !1;
          }
          for (; w.length < y;) {
            w = b ? w + " " : !q || "-" != w[0] && "+" != w[0] ? (q ? "0" : " ") + w : w[0] + "0" + w.slice(1);
          }
          97 > g && (w = w.toUpperCase());
          w.split("").forEach(L => e.push(L.charCodeAt(0)));
          break;
        case "s":
          q = (l = c("i8*")) ? Sf(l) : 6;
          H && (q = Math.min(q, C));
          if (!b) {
            for (; q < y--;) {
              e.push(32);
            }
          }
          if (l) {
            for (n = 0; n < q; n++) {
              e.push(p[l++ >>> 0]);
            }
          } else {
            e = e.concat(ub("(null)".substr(0, q)));
          }
          if (b) {
            for (; q < y--;) {
              e.push(32);
            }
          }
          break;
        case "c":
          for (b && e.push(c("i8")); 0 < --y;) {
            e.push(32);
          }
          b || e.push(c("i8"));
          break;
        case "n":
          b = c("i32*");
          v[b >>> 2 >>> 0] = e.length;
          break;
        case "%":
          e.push(f);
          break;
        default:
          for (n = h; n < a + 2; n++) {
            e.push(m[n >>> 0]);
          }
      }
      a += 2;
    } else {
      e.push(f), a += 1;
    }
  }
  return e;
};
function Uf(a) {
  a = eval(N(a >>> 0));
  if (null == a) {
    return 0;
  }
  var b = tb(a);
  if (!Uf.bufferSize || Uf.bufferSize < b + 1) {
    Uf.bufferSize && ld(Uf.buffer), Uf.bufferSize = b + 1, Uf.buffer = Df(Uf.bufferSize);
  }
  E(a, p, Uf.buffer, Uf.bufferSize);
  return Uf.buffer;
}
var Vf = (a, b, c, d) => {
  Q.$j || (Q.$j = Df(36));
  a = Le(a);
  return Je({target:a, mj:"resize", fk:d, pk:(e = event) => {
    if (e.target == a) {
      var f = document.body;
      if (f) {
        var g = Q.$j;
        v[g >>> 2 >>> 0] = 0;
        v[g + 4 >>> 2 >>> 0] = f.clientWidth;
        v[g + 8 >>> 2 >>> 0] = f.clientHeight;
        v[g + 12 >>> 2 >>> 0] = innerWidth;
        v[g + 16 >>> 2 >>> 0] = innerHeight;
        v[g + 20 >>> 2 >>> 0] = outerWidth;
        v[g + 24 >>> 2 >>> 0] = outerHeight;
        v[g + 28 >>> 2 >>> 0] = pageXOffset | 0;
        v[g + 32 >>> 2 >>> 0] = pageYOffset | 0;
        A(d)(10, g, b) && e.preventDefault();
      }
    }
  }, bk:c});
}, Xf = a => {
  var b = tb(a) + 1, c = Wf(b);
  E(a, p, c, b);
  return c;
}, Yf = (a, b, c) => {
  function d(e) {
    try {
      if ("error" === a) {
        var f = W(), g = Xf(e[2]);
        A(c)(e[0], e[1], g, b);
        X(f);
      } else {
        A(c)(e, b);
      }
    } catch (h) {
      if (!(h instanceof Xa)) {
        throw h && "object" == typeof h && h.stack && ta("exception thrown: " + [h, h.stack]), h;
      }
    }
  }
  k.websocket.on(a, c ? d : null);
}, Zf = (a, b, c, d) => {
  Q.ck || (Q.ck = Df(96));
  return Je({target:a, Ik:!0, mj:"wheel", fk:d, pk:(e = event) => {
    var f = Q.ck;
    Ba[f >>> 3 >>> 0] = e.timeStamp;
    var g = f >>> 2;
    v[g + 2 >>> 0] = e.screenX;
    v[g + 3 >>> 0] = e.screenY;
    v[g + 4 >>> 0] = e.clientX;
    v[g + 5 >>> 0] = e.clientY;
    m[f + 24 >>> 0] = e.ctrlKey;
    m[f + 25 >>> 0] = e.shiftKey;
    m[f + 26 >>> 0] = e.altKey;
    m[f + 27 >>> 0] = e.metaKey;
    r[2 * g + 14 >>> 0] = e.button;
    r[2 * g + 15 >>> 0] = e.buttons;
    v[g + 8 >>> 0] = e.movementX;
    v[g + 9 >>> 0] = e.movementY;
    var h = 0 > Ke.indexOf(a) ? a.getBoundingClientRect() : {left:0, top:0};
    v[g + 10 >>> 0] = e.clientX - (h.left | 0);
    v[g + 11 >>> 0] = e.clientY - (h.top | 0);
    Ba[f + 64 >>> 3 >>> 0] = e.deltaX;
    Ba[f + 72 >>> 3 >>> 0] = e.deltaY;
    Ba[f + 80 >>> 3 >>> 0] = e.deltaZ;
    v[f + 88 >>> 2 >>> 0] = e.deltaMode;
    A(d)(9, f, b) && e.preventDefault();
  }, bk:c});
};
class $f {
  constructor() {
    this.aj = [void 0];
    this.Di = [];
  }
  get(a) {
    return this.aj[a];
  }
  has(a) {
    return void 0 !== this.aj[a];
  }
  ej(a) {
    var b = this.Di.pop() || this.aj.length;
    this.aj[b] = a;
    return b;
  }
}
var ag, bg;
function cg(a, b, c, d, e) {
  function f() {
    var M = 0, na = 0;
    D.response && w && 0 === x[a + 12 >>> 2 >>> 0] && (na = D.response.byteLength);
    0 < na && (M = Df(na), p.set(new Uint8Array(D.response), M >>> 0));
    x[a + 12 >>> 2 >>> 0] = M;
    xf(a + 16, na);
    xf(a + 24, 0);
    (M = D.response ? D.response.byteLength : 0) && xf(a + 32, M);
    r[a + 40 >>> 1 >>> 0] = D.readyState;
    r[a + 42 >>> 1 >>> 0] = D.status;
    D.statusText && E(D.statusText, p, a + 44, 64);
  }
  var g = x[a + 8 >>> 2 >>> 0];
  if (g) {
    var h = N(g), l = a + 108, n = N(l + 0);
    n ||= "GET";
    var q = x[l + 56 >>> 2 >>> 0], t = x[l + 68 >>> 2 >>> 0], y = x[l + 72 >>> 2 >>> 0];
    g = x[l + 76 >>> 2 >>> 0];
    var H = x[l + 80 >>> 2 >>> 0], C = x[l + 84 >>> 2 >>> 0], u = x[l + 88 >>> 2 >>> 0], J = x[l + 52 >>> 2 >>> 0], w = !!(J & 1), L = !!(J & 2);
    J = !!(J & 64);
    t = t ? N(t) : void 0;
    y = y ? N(y) : void 0;
    var D = new XMLHttpRequest();
    D.withCredentials = !!p[l + 60 >>> 0];
    D.open(n, h, !J, t, y);
    J || (D.timeout = q);
    D.Di = h;
    D.responseType = "arraybuffer";
    H && (h = N(H), D.overrideMimeType(h));
    if (g) {
      for (;;) {
        l = x[g >>> 2 >>> 0];
        if (!l) {
          break;
        }
        h = x[g + 4 >>> 2 >>> 0];
        if (!h) {
          break;
        }
        g += 8;
        l = N(l);
        h = N(h);
        D.setRequestHeader(l, h);
      }
    }
    var da = ag.ej(D);
    x[a >>> 2 >>> 0] = da;
    g = C && u ? p.slice(C, C + u) : null;
    D.onload = M => {
      ag.has(da) && (f(), 200 <= D.status && 300 > D.status ? b?.(a, D, M) : c?.(a, D, M));
    };
    D.onerror = M => {
      ag.has(da) && (f(), c?.(a, D, M));
    };
    D.ontimeout = M => {
      ag.has(da) && c?.(a, D, M);
    };
    D.onprogress = M => {
      if (ag.has(da)) {
        var na = w && L && D.response ? D.response.byteLength : 0, U = 0;
        0 < na && w && L && (U = Df(na), p.set(new Uint8Array(D.response), U >>> 0));
        x[a + 12 >>> 2 >>> 0] = U;
        xf(a + 16, na);
        xf(a + 24, M.loaded - na);
        xf(a + 32, M.total);
        r[a + 40 >>> 1 >>> 0] = D.readyState;
        3 <= D.readyState && 0 === D.status && 0 < M.loaded && (D.status = 200);
        r[a + 42 >>> 1 >>> 0] = D.status;
        D.statusText && E(D.statusText, p, a + 44, 64);
        d?.(a, D, M);
        U && ld(U);
      }
    };
    D.onreadystatechange = M => {
      ag.has(da) && (r[a + 40 >>> 1 >>> 0] = D.readyState, 2 <= D.readyState && (r[a + 42 >>> 1 >>> 0] = D.status), e?.(a, D, M));
    };
    try {
      D.send(g);
    } catch (M) {
      c?.(a, D, M);
    }
  } else {
    c(a, 0, "no url specified!");
  }
}
function dg(a, b, c, d) {
  var e = bg;
  if (e) {
    var f = x[a + 108 + 64 >>> 2 >>> 0];
    f ||= x[a + 8 >>> 2 >>> 0];
    var g = N(f);
    try {
      var h = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(b, g);
      h.onsuccess = () => {
        r[a + 40 >>> 1 >>> 0] = 4;
        r[a + 42 >>> 1 >>> 0] = 200;
        E("OK", p, a + 44, 64);
        c(a, 0, g);
      };
      h.onerror = l => {
        r[a + 40 >>> 1 >>> 0] = 4;
        r[a + 42 >>> 1 >>> 0] = 413;
        E("Payload Too Large", p, a + 44, 64);
        d(a, 0, l);
      };
    } catch (l) {
      d(a, 0, l);
    }
  } else {
    d(a, 0, "IndexedDB not available!");
  }
}
function eg(a, b, c) {
  var d = bg;
  if (d) {
    var e = x[a + 108 + 64 >>> 2 >>> 0];
    e ||= x[a + 8 >>> 2 >>> 0];
    e = N(e);
    try {
      var f = d.transaction(["FILES"], "readonly").objectStore("FILES").get(e);
      f.onsuccess = g => {
        if (g.target.result) {
          g = g.target.result;
          var h = g.byteLength || g.length, l = Df(h);
          p.set(new Uint8Array(g), l >>> 0);
          x[a + 12 >>> 2 >>> 0] = l;
          xf(a + 16, h);
          xf(a + 24, 0);
          xf(a + 32, h);
          r[a + 40 >>> 1 >>> 0] = 4;
          r[a + 42 >>> 1 >>> 0] = 200;
          E("OK", p, a + 44, 64);
          b(a, 0, g);
        } else {
          r[a + 40 >>> 1 >>> 0] = 4, r[a + 42 >>> 1 >>> 0] = 404, E("Not Found", p, a + 44, 64), c(a, 0, "no data");
        }
      };
      f.onerror = g => {
        r[a + 40 >>> 1 >>> 0] = 4;
        r[a + 42 >>> 1 >>> 0] = 404;
        E("Not Found", p, a + 44, 64);
        c(a, 0, g);
      };
    } catch (g) {
      c(a, 0, g);
    }
  } else {
    c(a, 0, "IndexedDB not available!");
  }
}
function fg(a, b, c) {
  var d = bg;
  if (d) {
    var e = x[a + 108 + 64 >>> 2 >>> 0];
    e ||= x[a + 8 >>> 2 >>> 0];
    e = N(e);
    try {
      var f = d.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
      f.onsuccess = g => {
        g = g.target.result;
        x[a + 12 >>> 2 >>> 0] = 0;
        xf(a + 16, 0);
        xf(a + 24, 0);
        xf(a + 32, 0);
        r[a + 40 >>> 1 >>> 0] = 4;
        r[a + 42 >>> 1 >>> 0] = 200;
        E("OK", p, a + 44, 64);
        b(a, 0, g);
      };
      f.onerror = g => {
        r[a + 40 >>> 1 >>> 0] = 4;
        r[a + 42 >>> 1 >>> 0] = 404;
        E("Not Found", p, a + 44, 64);
        c(a, 0, g);
      };
    } catch (g) {
      c(a, 0, g);
    }
  } else {
    c(a, 0, "IndexedDB not available!");
  }
}
var gg = ["default", "low-power", "high-performance"], hg = {}, jg = () => {
  if (!ig) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:ka || "./this.program"}, b;
    for (b in hg) {
      void 0 === hg[b] ? delete a[b] : a[b] = hg[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    ig = c;
  }
  return ig;
}, ig;
B.Dl = (a, b, c, d, e, f, g, h, l, n) => {
  function q(y) {
    function H(C) {
      n?.();
      if (!h) {
        var u = a, J = b;
        u && (u = "string" == typeof u ? u : Ob(u), J = b ? kb(u + "/" + b) : u);
        u = Lb(d, e);
        J = B.create(J, u);
        if (C) {
          if ("string" == typeof C) {
            for (var w = Array(C.length), L = 0, D = C.length; L < D; ++L) {
              w[L] = C.charCodeAt(L);
            }
            C = w;
          }
          B.chmod(J, u | 146);
          w = B.open(J, 577);
          B.write(w, C, 0, C.length, 0, l);
          B.close(w);
          B.chmod(J, u);
        }
      }
      f?.();
      Pa();
    }
    Kb(y, t, H, () => {
      g?.();
      Pa();
    }) || H(y);
  }
  var t = b ? ob(kb(a + "/" + b)) : a;
  Oa();
  "string" == typeof c ? Gb(c, q, g) : q(c);
};
[44].forEach(a => {
  B.Nj[a] = new B.ri(a);
  B.Nj[a].stack = "<generic error, no stack>";
});
B.Vi = Array(4096);
B.Bi(F, {}, "/");
B.mkdir("/tmp");
B.mkdir("/home");
B.mkdir("/home/web_user");
(function() {
  B.mkdir("/dev");
  xb(B.ij(1, 3), {read:() => 0, write:(d, e, f, g) => g});
  Xb("/dev/null", B.ij(1, 3));
  wb(B.ij(5, 0), zb);
  wb(B.ij(6, 0), Ab);
  Xb("/dev/tty", B.ij(5, 0));
  Xb("/dev/tty1", B.ij(6, 0));
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = ib(a).byteLength);
    return a[--b];
  };
  B.gj("/dev", "random", c);
  B.gj("/dev", "urandom", c);
  B.mkdir("/dev/shm");
  B.mkdir("/dev/shm/tmp");
})();
(function() {
  B.mkdir("/proc");
  var a = B.mkdir("/proc/self");
  B.mkdir("/proc/self/fd");
  B.Bi({Bi() {
    var b = B.createNode(a, "fd", 16895, 73);
    b.ui = {lookup(c, d) {
      var e = K(+d);
      c = {parent:null, Bi:{sk:"fake"}, ui:{readlink:() => e.path}};
      return c.parent = c;
    }};
    return b;
  }}, {}, "/proc/self/fd");
})();
B.Vk = {MEMFS:F};
for (var kg = Array(256), lg = 0; 256 > lg; ++lg) {
  kg[lg] = String.fromCharCode(lg);
}
xc = kg;
O = k.BindingError = class extends Error {
  constructor(a) {
    super(a);
    this.name = "BindingError";
  }
};
Dc = k.InternalError = class extends Error {
  constructor(a) {
    super(a);
    this.name = "InternalError";
  }
};
Object.assign(Sc.prototype, {isAliasOf:function(a) {
  if (!(this instanceof Sc && a instanceof Sc)) {
    return !1;
  }
  var b = this.si.Ci.yi, c = this.si.xi;
  a.si = a.si;
  var d = a.si.Ci.yi;
  for (a = a.si.xi; b.Ii;) {
    c = b.xj(c), b = b.Ii;
  }
  for (; d.Ii;) {
    a = d.xj(a), d = d.Ii;
  }
  return b === d && c === a;
}, clone:function() {
  this.si.xi || Ic(this);
  if (this.si.vj) {
    return this.si.count.value += 1, this;
  }
  var a = Pc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.si;
  a = a(c.call(b, d, {si:{value:{count:e.count, tj:e.tj, vj:e.vj, xi:e.xi, Ci:e.Ci, Hi:e.Hi, Li:e.Li}}}));
  a.si.count.value += 1;
  a.si.tj = !1;
  return a;
}, ["delete"]() {
  this.si.xi || Ic(this);
  if (this.si.tj && !this.si.vj) {
    throw new O("Object already scheduled for deletion");
  }
  Kc(this);
  var a = this.si;
  --a.count.value;
  0 === a.count.value && (a.Hi ? a.Li.cj(a.Hi) : a.Ci.yi.cj(a.xi));
  this.si.vj || (this.si.Hi = void 0, this.si.xi = void 0);
}, isDeleted:function() {
  return !this.si.xi;
}, deleteLater:function() {
  this.si.xi || Ic(this);
  if (this.si.tj && !this.si.vj) {
    throw new O("Object already scheduled for deletion");
  }
  Rc.push(this);
  this.si.tj = !0;
  return this;
}});
Object.assign(dd.prototype, {Yk(a) {
  this.wk && (a = this.wk(a));
  return a;
}, ik(a) {
  this.cj?.(a);
}, Si:8, readValueFromPointer:cd, fromWireType:function(a) {
  function b() {
    return this.zj ? Qc(this.yi.nj, {Ci:this.il, xi:c, Li:this, Hi:a}) : Qc(this.yi.nj, {Ci:this, xi:a});
  }
  var c = this.Yk(a);
  if (!c) {
    return this.ik(a), null;
  }
  var d = Oc(this.yi, c);
  if (void 0 !== d) {
    if (0 === d.si.count.value) {
      return d.si.xi = c, d.si.Hi = a, d.clone();
    }
    d = d.clone();
    this.ik(a);
    return d;
  }
  d = this.yi.Wk(c);
  d = Mc[d];
  if (!d) {
    return b.call(this);
  }
  d = this.yj ? d.Nk : d.pointerType;
  var e = Lc(c, this.yi, d.yi);
  return null === e ? b.call(this) : this.zj ? Qc(d.yi.nj, {Ci:d, xi:e, Li:this, Hi:a}) : Qc(d.yi.nj, {Ci:d, xi:e});
}});
jd = k.UnboundTypeError = ((a, b) => {
  var c = Tc(b, function(d) {
    this.name = b;
    this.message = d;
    d = Error(d).stack;
    void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
  });
  c.prototype = Object.create(a.prototype);
  c.prototype.constructor = c;
  c.prototype.toString = function() {
    return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
  };
  return c;
})(Error, "UnboundTypeError");
vd.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1);
k.count_emval_handles = () => vd.length / 2 - 5 - ud.length;
k.requestAnimationFrame = ee;
k.pauseMainLoop = qe;
k.resumeMainLoop = function() {
  he++;
  var a = Yd, b = Zd, c = $d;
  $d = null;
  pe(c, 0, !1, ie, !0);
  ge(a, b);
  be();
};
k.preMainLoop && ne.push(k.preMainLoop);
k.postMainLoop && oe.push(k.postMainLoop);
k.requestFullscreen = function(a, b) {
  function c() {
    te = !1;
    var f = d.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = Be, ze && d.requestPointerLock(), te = !0, Ae ? ("undefined" != typeof SDL && (v[SDL.screen >>> 2 >>> 0] = x[SDL.screen >>> 2 >>> 0] | 8388608), Ee(k.canvas), De()) : Ee(d)) : (f.parentNode.insertBefore(d, f), f.parentNode.removeChild(f), Ae ? ("undefined" != typeof SDL && (v[SDL.screen >>> 2 >>> 
    0] = x[SDL.screen >>> 2 >>> 0] & -8388609), Ee(k.canvas), De()) : Ee(d));
    k.onFullScreen?.(te);
    k.onFullscreen?.(te);
  }
  ze = a;
  Ae = b;
  "undefined" == typeof ze && (ze = !0);
  "undefined" == typeof Ae && (Ae = !1);
  var d = k.canvas;
  ye || (ye = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
  var e = document.createElement("div");
  d.parentNode.insertBefore(e, d);
  e.appendChild(d);
  e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ? () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
  e.requestFullscreen();
};
k.setCanvasSize = function(a, b, c) {
  Ee(k.canvas, a, b);
  c || De();
};
k.getUserMedia = function(a) {
  let b;
  (b = window).getUserMedia || (b.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(a);
};
k.createContext = function(a, b, c, d) {
  if (b && k.Jj && a == k.canvas) {
    return k.Jj;
  }
  var e;
  if (b) {
    var f = {antialias:!1, alpha:!1, Tj:"undefined" != typeof WebGL2RenderingContext ? 2 : 1};
    if (d) {
      for (var g in d) {
        f[g] = d[g];
      }
    }
    if ("undefined" != typeof nf && (e = jf(a, f))) {
      var h = Xe[e].$i;
    }
  } else {
    h = a.getContext("2d");
  }
  if (!h) {
    return null;
  }
  c && (k.Jj = h, b && mf(e), ve.forEach(l => l()), Jb());
  return h;
};
for (var mg = 0; 32 > mg; ++mg) {
  rf.push(Array(mg));
}
var ng = new Float32Array(288);
for (mg = 0; 288 >= mg; ++mg) {
  Nf[mg] = ng.subarray(0, mg);
}
var og = new Int32Array(288);
for (mg = 0; 288 >= mg; ++mg) {
  Of[mg] = og.subarray(0, mg);
}
ag = new $f();
Oa();
(function(a, b) {
  try {
    var c = indexedDB.open("emscripten_filesystem", 1);
  } catch (d) {
    b(d);
    return;
  }
  c.onupgradeneeded = d => {
    d = d.target.result;
    d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
    d.createObjectStore("FILES");
  };
  c.onsuccess = d => a(d.target.result);
  c.onerror = b;
})(a => {
  bg = a;
  Pa();
}, () => {
  bg = !1;
  Pa();
});
var Kh = {Aa:function() {
  return Asyncify.Sl(async() => {
    void 0 === k.Fj && (k.Fj = 0);
    ++k.Fj;
    await new Promise(a => {
      k.vk = a;
    });
  });
}, Gb:function(a, b) {
  return A(a >>> 0)(b);
}, U:function(a) {
  a >>>= 0;
  var b = new db(a);
  0 == m[b.xi + 12 >>> 0] && (m[b.xi + 12 >>> 0] = 1, bb--);
  m[b.xi + 13 >>> 0] = 0;
  ab.push(b);
  pg(a);
  return qg(a);
}, qa:() => {
  Y(0, 0);
  var a = ab.pop();
  rg(a.lk);
  cb = 0;
}, a:function() {
  return gb([]);
}, k:function(a) {
  return gb([a >>> 0]);
}, ne:() => {
  var a = ab.pop();
  a || Qa("no exception to throw");
  var b = a.lk;
  0 == m[a.xi + 13 >>> 0] && (ab.push(a), m[a.xi + 13 >>> 0] = 1, m[a.xi + 12 >>> 0] = 0, bb++);
  cb = b;
  throw cb;
}, la:function(a, b, c) {
  a >>>= 0;
  (new db(a)).Pj(b >>> 0, c >>> 0);
  cb = a;
  bb++;
  throw cb;
}, b:function(a) {
  cb ||= a >>> 0;
  throw cb;
}, Ja:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = ec(a), e = d.dj.accept(d);
    b && ic(b, e.family, mc(e.Ji), e.Oi, c);
    return e.stream.fd;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, tb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = ec(a), e = rc(b, c);
    d.dj.bind(d, e.Ai, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, Ma:function(a, b) {
  a >>>= 0;
  try {
    return a = N(a), B.chmod(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, sb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = ec(a), e = rc(b, c);
    d.dj.connect(d, e.Ai, e.port);
    return 0;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, bc:function(a, b, c) {
  b >>>= 0;
  try {
    b = N(b);
    b = sc(a, b);
    if (c & -8) {
      return -28;
    }
    var d = I(b, {Qi:!0}).node;
    if (!d) {
      return -44;
    }
    a = "";
    c & 4 && (a += "r");
    c & 2 && (a += "w");
    c & 1 && (a += "x");
    return a && Mb(d, a) ? -2 : 0;
  } catch (e) {
    if ("undefined" == typeof B || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.ti;
  }
}, $b:function(a, b) {
  try {
    return B.fchmod(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, T:function(a, b, c) {
  uc = c >>> 0;
  try {
    var d = K(a);
    switch(b) {
      case 0:
        var e = vc();
        if (0 > e) {
          break;
        }
        for (; B.streams[e];) {
          e++;
        }
        return Vb(d, e).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return e = vc(), d.flags |= e, 0;
      case 12:
        return e = vc(), r[e + 0 >>> 1 >>> 0] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, Yb:function(a, b) {
  b >>>= 0;
  try {
    var c = K(a);
    return tc(B.stat, c.path, b);
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, Tb:function(a, b) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var c = K(a);
    if (0 === (c.flags & 2097155)) {
      throw new B.ri(28);
    }
    B.truncate(c.node, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, Sb:function(a, b) {
  b >>>= 0;
  try {
    if (0 === b) {
      return -28;
    }
    var c = B.cwd(), d = tb(c) + 1;
    if (b < d) {
      return -68;
    }
    E(c, p, a >>> 0, b);
    return d;
  } catch (e) {
    if ("undefined" == typeof B || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.ti;
  }
}, Fb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = K(a);
    d.hj || (d.hj = B.readdir(d.path));
    a = 0;
    for (var e = B.Ki(d, 0, 1), f = Math.floor(e / 280); f < d.hj.length && a + 280 <= c;) {
      var g = d.hj[f];
      if ("." === g) {
        var h = d.node.id;
        var l = 4;
      } else if (".." === g) {
        h = I(d.path, {parent:!0}).node.id, l = 4;
      } else {
        var n = Fb(d.node, g);
        h = n.id;
        l = 8192 === (n.mode & 61440) ? 2 : G(n.mode) ? 4 : 40960 === (n.mode & 61440) ? 10 : 8;
      }
      za[b + a >>> 3] = BigInt(h);
      za[b + a + 8 >>> 3] = BigInt(280 * (f + 1));
      r[b + a + 16 >>> 1 >>> 0] = 280;
      m[b + a + 18 >>> 0] = l;
      E(g, p, b + a + 19, 256);
      a += 280;
      f += 1;
    }
    B.Ki(d, 280 * f, 0);
    return a;
  } catch (q) {
    if ("undefined" == typeof B || "ErrnoError" !== q.name) {
      throw q;
    }
    return -q.ti;
  }
}, rb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = ec(a);
    if (!d.Ji) {
      return -53;
    }
    ic(b, d.family, mc(d.Ji), d.Oi, c);
    return 0;
  } catch (e) {
    if ("undefined" == typeof B || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.ti;
  }
}, qb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    var d = ec(a);
    ic(b, d.family, mc(d.Gj || "0.0.0.0"), d.lj, c);
    return 0;
  } catch (e) {
    if ("undefined" == typeof B || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.ti;
  }
}, ta:function(a, b, c, d, e) {
  d >>>= 0;
  e >>>= 0;
  try {
    var f = ec(a);
    return 1 === b && 4 === c ? (v[d >>> 2 >>> 0] = f.error, v[e >>> 2 >>> 0] = 4, f.error = null, 0) : -50;
  } catch (g) {
    if ("undefined" == typeof B || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.ti;
  }
}, Ka:function(a, b, c) {
  uc = c >>> 0;
  try {
    var d = K(a);
    switch(b) {
      case 21509:
        return d.tty ? 0 : -59;
      case 21505:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.Zi.bl) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var e = vc();
          v[e >>> 2 >>> 0] = 25856;
          v[e + 4 >>> 2 >>> 0] = 5;
          v[e + 8 >>> 2 >>> 0] = 191;
          v[e + 12 >>> 2 >>> 0] = 35387;
          for (var f = 0; 32 > f; f++) {
            m[e + f + 17 >>> 0] = a[f] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return d.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.Zi.cl) {
          for (e = vc(), a = [], f = 0; 32 > f; f++) {
            a.push(m[e + f + 17 >>> 0]);
          }
        }
        return 0;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        e = vc();
        return v[e >>> 2 >>> 0] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        return e = vc(), B.oj(d, b, e);
      case 21523:
        if (!d.tty) {
          return -59;
        }
        d.tty.Zi.dl && (f = [24, 80], e = vc(), r[e >>> 1 >>> 0] = f[0], r[e + 2 >>> 1 >>> 0] = f[1]);
        return 0;
      case 21524:
        return d.tty ? 0 : -59;
      case 21515:
        return d.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch (g) {
    if ("undefined" == typeof B || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.ti;
  }
}, pb:function(a, b) {
  try {
    var c = ec(a);
    c.dj.listen(c, b);
    return 0;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, Vb:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  try {
    return a = N(a), tc(B.lstat, a, b);
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, Ob:function(a, b, c) {
  b >>>= 0;
  try {
    return b = N(b), b = sc(a, b), b = kb(b), "/" === b[b.length - 1] && (b = b.substr(0, b.length - 1)), B.mkdir(b, c, 0), 0;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, Wb:function(a, b, c, d) {
  b >>>= 0;
  c >>>= 0;
  try {
    b = N(b);
    var e = d & 256;
    b = sc(a, b, d & 4096);
    return tc(e ? B.lstat : B.stat, b, c);
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, _b:function(a, b, c, d) {
  b >>>= 0;
  uc = d >>>= 0;
  try {
    b = N(b);
    b = sc(a, b);
    var e = d ? vc() : 0;
    return B.open(b, c, e).fd;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return -f.ti;
  }
}, Eb:function(a, b, c, d) {
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  try {
    b = N(b);
    b = sc(a, b);
    if (0 >= d) {
      return -28;
    }
    var e = B.readlink(b), f = Math.min(d, tb(e)), g = m[c + f >>> 0];
    E(e, p, c, d + 1);
    m[c + f >>> 0] = g;
    return f;
  } catch (h) {
    if ("undefined" == typeof B || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.ti;
  }
}, ob:function(a, b, c, d, e, f) {
  b >>>= 0;
  c >>>= 0;
  e >>>= 0;
  f >>>= 0;
  try {
    var g = ec(a), h = $b(g, c);
    if (!h) {
      return 0;
    }
    e && ic(e, g.family, mc(h.Ai), h.port, f);
    p.set(h.buffer, b >>> 0);
    return h.buffer.byteLength;
  } catch (l) {
    if ("undefined" == typeof B || "ErrnoError" !== l.name) {
      throw l;
    }
    return -l.ti;
  }
}, nb:function(a, b) {
  b >>>= 0;
  try {
    var c = ec(a), d = x[b + 8 >>> 2 >>> 0], e = v[b + 12 >>> 2 >>> 0], f = 0;
    for (a = 0; a < e; a++) {
      f += v[d + (8 * a + 4) >>> 2 >>> 0];
    }
    var g = $b(c, f);
    if (!g) {
      return 0;
    }
    var h = x[b >>> 2 >>> 0];
    h && ic(h, c.family, mc(g.Ai), g.port);
    b = 0;
    var l = g.buffer.byteLength;
    for (a = 0; 0 < l && a < e; a++) {
      var n = v[d + (8 * a + 4) >>> 2 >>> 0];
      if (n) {
        var q = Math.min(n, l);
        p.set(g.buffer.subarray(b, b + q), x[d + 8 * a >>> 2 >>> 0] + b >>> 0);
        b += q;
        l -= q;
      }
    }
    return b;
  } catch (t) {
    if ("undefined" == typeof B || "ErrnoError" !== t.name) {
      throw t;
    }
    return -t.ti;
  }
}, Bb:function(a, b, c, d) {
  b >>>= 0;
  d >>>= 0;
  try {
    return b = N(b), d = N(d), b = sc(a, b), d = sc(c, d), B.rename(b, d), 0;
  } catch (e) {
    if ("undefined" == typeof B || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.ti;
  }
}, Cb:function(a) {
  a >>>= 0;
  try {
    return a = N(a), B.rmdir(a), 0;
  } catch (b) {
    if ("undefined" == typeof B || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.ti;
  }
}, mb:function(a, b) {
  b >>>= 0;
  try {
    var c = ec(a), d = x[b + 8 >>> 2 >>> 0], e = v[b + 12 >>> 2 >>> 0], f = x[b >>> 2 >>> 0], g = v[b + 4 >>> 2 >>> 0];
    if (f) {
      var h = rc(f, g);
      var l = h.port;
      var n = h.Ai;
    }
    for (b = a = 0; b < e; b++) {
      a += v[d + (8 * b + 4) >>> 2 >>> 0];
    }
    var q = new Uint8Array(a);
    for (b = f = 0; b < e; b++) {
      var t = x[d + 8 * b >>> 2 >>> 0], y = v[d + (8 * b + 4) >>> 2 >>> 0];
      for (g = 0; g < y; g++) {
        q[f++] = m[t + g >>> 0];
      }
    }
    return ac(c, q, 0, a, n, l);
  } catch (H) {
    if ("undefined" == typeof B || "ErrnoError" !== H.name) {
      throw H;
    }
    return -H.ti;
  }
}, Ia:function(a, b, c) {
  try {
    return dc.createSocket(a, b, c).stream.fd;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, Xb:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  try {
    return a = N(a), tc(B.stat, a, b);
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, Ab:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  try {
    return a = N(a), b = N(b), B.symlink(a, b), 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, yb:function(a, b) {
  a >>>= 0;
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    a = N(a);
    B.truncate(a, b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.ti;
  }
}, Db:function(a, b, c) {
  b >>>= 0;
  try {
    return b = N(b), b = sc(a, b), 0 === c ? B.unlink(b) : 512 === c ? B.rmdir(b) : Qa("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.ti;
  }
}, xb:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  try {
    b = N(b);
    b = sc(a, b, !0);
    var d = Date.now();
    if (c) {
      var e = x[c >>> 2 >>> 0] + 4294967296 * v[c + 4 >>> 2 >>> 0], f = v[c + 8 >>> 2 >>> 0];
      var g = 1073741823 == f ? d : 1073741822 == f ? -1 : 1e3 * e + f / 1E6;
      c += 16;
      e = x[c >>> 2 >>> 0] + 4294967296 * v[c + 4 >>> 2 >>> 0];
      f = v[c + 8 >>> 2 >>> 0];
      var h = 1073741823 == f ? d : 1073741822 == f ? -1 : 1e3 * e + f / 1E6;
    } else {
      h = g = d;
    }
    if (-1 != h || -1 != g) {
      a = g;
      var l = I(b, {Qi:!0}).node;
      l.ui.Gi(l, {timestamp:Math.max(a, h)});
    }
    return 0;
  } catch (n) {
    if ("undefined" == typeof B || "ErrnoError" !== n.name) {
      throw n;
    }
    return -n.ti;
  }
}, cc:() => {
  Qa("");
}, Ta:function(a, b, c) {
  b = yc(b >>> 0);
  Ec(a >>> 0, {name:b, fromWireType:d => d, toWireType:function(d, e) {
    if ("bigint" != typeof e && "number" != typeof e) {
      throw new TypeError(`Cannot convert "${wc(e)}" to ${this.name}`);
    }
    "number" == typeof e && (e = BigInt(e));
    return e;
  }, Si:8, readValueFromPointer:Hc(b, c >>> 0, -1 == b.indexOf("u")), Mi:null});
}, Nh:function(a, b, c, d) {
  b = yc(b >>> 0);
  Ec(a >>> 0, {name:b, fromWireType:function(e) {
    return !!e;
  }, toWireType:function(e, f) {
    return f ? c : d;
  }, Si:8, readValueFromPointer:function(e) {
    return this.fromWireType(p[e >>> 0]);
  }, Mi:null});
}, Da:function(a, b, c, d, e, f, g, h, l, n, q, t, y) {
  a >>>= 0;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  f >>>= 0;
  g >>>= 0;
  h >>>= 0;
  l >>>= 0;
  n >>>= 0;
  q >>>= 0;
  t >>>= 0;
  y >>>= 0;
  q = yc(q);
  f = hd(e >>> 0, f);
  h &&= hd(g, h);
  n &&= hd(l, n);
  y = hd(t, y);
  var H = Wc(q);
  Vc(H, function() {
    nd(`Cannot construct ${q} due to unbound types`, [d]);
  });
  Fc([a, b, c], d ? [d] : [], C => {
    C = C[0];
    if (d) {
      var u = C.yi;
      var J = u.nj;
    } else {
      J = Sc.prototype;
    }
    C = Tc(q, function(...da) {
      if (Object.getPrototypeOf(this) !== w) {
        throw new O("Use 'new' to construct " + q);
      }
      if (void 0 === L.fj) {
        throw new O(q + " has no accessible constructor");
      }
      var M = L.fj[da.length];
      if (void 0 === M) {
        throw new O(`Tried to invoke ctor of ${q} with invalid number of parameters (${da.length}) - expected (${Object.keys(L.fj).toString()}) parameters instead!`);
      }
      return M.apply(this, da);
    });
    var w = Object.create(J, {constructor:{value:C}});
    C.prototype = w;
    var L = new Xc(q, C, w, y, u, f, h, n);
    if (L.Ii) {
      var D;
      (D = L.Ii).dk ?? (D.dk = []);
      L.Ii.dk.push(L);
    }
    u = new dd(q, L, !0, !1, !1);
    D = new dd(q + "*", L, !1, !1, !1);
    J = new dd(q + " const*", L, !1, !0, !1);
    Mc[a] = {pointerType:D, Nk:J};
    ed(H, C);
    return [u, D, J];
  });
}, Ca:function(a, b, c, d, e, f) {
  a >>>= 0;
  d >>>= 0;
  e >>>= 0;
  f >>>= 0;
  var g = od(b, c >>> 0);
  e = hd(d, e);
  Fc([], [a], h => {
    h = h[0];
    var l = `constructor ${h.name}`;
    void 0 === h.yi.fj && (h.yi.fj = []);
    if (void 0 !== h.yi.fj[b - 1]) {
      throw new O(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
    }
    h.yi.fj[b - 1] = () => {
      nd(`Cannot construct ${h.name} due to unbound types`, g);
    };
    Fc([], g, n => {
      n.splice(1, 0, null);
      h.yi.fj[b - 1] = sd(l, n, null, e, f);
      return [];
    });
    return [];
  });
}, Ba:function(a, b, c, d, e, f, g, h, l) {
  a >>>= 0;
  b >>>= 0;
  e >>>= 0;
  f >>>= 0;
  g >>>= 0;
  var n = od(c, d >>> 0);
  b = yc(b);
  b = td(b);
  f = hd(e, f);
  Fc([], [a], q => {
    function t() {
      nd(`Cannot call ${y} due to unbound types`, n);
    }
    q = q[0];
    var y = `${q.name}.${b}`;
    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
    h && q.yi.jl.push(b);
    var H = q.yi.nj, C = H[b];
    void 0 === C || void 0 === C.Fi && C.className !== q.name && C.sj === c - 2 ? (t.sj = c - 2, t.className = q.name, H[b] = t) : (Uc(H, b, y), H[b].Fi[c - 2] = t);
    Fc([], n, u => {
      u = sd(y, u, q, f, g, l);
      void 0 === H[b].Fi ? (u.sj = c - 2, H[b] = u) : H[b].Fi[c - 2] = u;
      return [];
    });
    return [];
  });
}, Mh:function(a) {
  return Ec(a >>> 0, xd);
}, Sa:function(a, b, c) {
  b = yc(b >>> 0);
  Ec(a >>> 0, {name:b, fromWireType:d => d, toWireType:(d, e) => e, Si:8, readValueFromPointer:yd(b, c >>> 0), Mi:null});
}, D:function(a, b, c, d, e, f, g) {
  a >>>= 0;
  d >>>= 0;
  e >>>= 0;
  f >>>= 0;
  var h = od(b, c >>> 0);
  a = yc(a);
  a = td(a);
  e = hd(d, e);
  Vc(a, function() {
    nd(`Cannot call ${a} due to unbound types`, h);
  }, b - 1);
  Fc([], h, l => {
    l = [l[0], null].concat(l.slice(1));
    ed(a, sd(a, l, null, e, f, g), b - 1);
    return [];
  });
}, X:function(a, b, c, d, e) {
  a >>>= 0;
  c >>>= 0;
  b = yc(b >>> 0);
  -1 === e && (e = 4294967295);
  e = h => h;
  if (0 === d) {
    var f = 32 - 8 * c;
    e = h => h << f >>> f;
  }
  var g = b.includes("unsigned") ? function(h, l) {
    return l >>> 0;
  } : function(h, l) {
    return l;
  };
  Ec(a, {name:b, fromWireType:e, toWireType:g, Si:8, readValueFromPointer:Hc(b, c, 0 !== d), Mi:null});
}, M:function(a, b, c) {
  function d(f) {
    return new e(m.buffer, x[f + 4 >>> 2 >>> 0], x[f >>> 2 >>> 0]);
  }
  var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][b];
  c = yc(c >>> 0);
  Ec(a >>> 0, {name:c, fromWireType:d, Si:8, readValueFromPointer:d}, {$k:!0});
}, Ra:function(a, b) {
  b = yc(b >>> 0);
  var c = "std::string" === b;
  Ec(a >>> 0, {name:b, fromWireType:function(d) {
    var e = x[d >>> 2 >>> 0], f = d + 4;
    if (c) {
      for (var g = f, h = 0; h <= e; ++h) {
        var l = f + h;
        if (h == e || 0 == p[l >>> 0]) {
          g = N(g, l - g);
          if (void 0 === n) {
            var n = g;
          } else {
            n += String.fromCharCode(0), n += g;
          }
          g = l + 1;
        }
      }
    } else {
      n = Array(e);
      for (h = 0; h < e; ++h) {
        n[h] = String.fromCharCode(p[f + h >>> 0]);
      }
      n = n.join("");
    }
    ld(d);
    return n;
  }, toWireType:function(d, e) {
    e instanceof ArrayBuffer && (e = new Uint8Array(e));
    var f = "string" == typeof e;
    if (!(f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array)) {
      throw new O("Cannot pass non-string to std::string");
    }
    var g = c && f ? tb(e) : e.length;
    var h = Df(4 + g + 1), l = h + 4;
    x[h >>> 2 >>> 0] = g;
    if (c && f) {
      E(e, p, l, g + 1);
    } else {
      if (f) {
        for (f = 0; f < g; ++f) {
          var n = e.charCodeAt(f);
          if (255 < n) {
            throw ld(l), new O("String has UTF-16 code units that do not fit in 8 bits");
          }
          p[l + f >>> 0] = n;
        }
      } else {
        for (f = 0; f < g; ++f) {
          p[l + f >>> 0] = e[f];
        }
      }
    }
    null !== d && d.push(ld, h);
    return h;
  }, Si:8, readValueFromPointer:cd, Mi(d) {
    ld(d);
  }});
}, xa:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  c = yc(c);
  if (2 === b) {
    var d = Ad;
    var e = Bd;
    var f = Cd;
    var g = h => ya[h >>> 1 >>> 0];
  } else {
    4 === b && (d = Dd, e = Ed, f = Fd, g = h => x[h >>> 2 >>> 0]);
  }
  Ec(a >>> 0, {name:c, fromWireType:h => {
    for (var l = x[h >>> 2 >>> 0], n, q = h + 4, t = 0; t <= l; ++t) {
      var y = h + 4 + t * b;
      if (t == l || 0 == g(y)) {
        q = d(q, y - q), void 0 === n ? n = q : (n += String.fromCharCode(0), n += q), q = y + b;
      }
    }
    ld(h);
    return n;
  }, toWireType:(h, l) => {
    if ("string" != typeof l) {
      throw new O(`Cannot pass non-string to C++ string type ${c}`);
    }
    var n = f(l), q = Df(4 + n + b);
    x[q >>> 2 >>> 0] = n / b;
    e(l, q + 4, n + b);
    null !== h && h.push(ld, q);
    return q;
  }, Si:8, readValueFromPointer:cd, Mi(h) {
    ld(h);
  }});
}, Oh:function(a, b) {
  b = yc(b >>> 0);
  Ec(a >>> 0, {gl:!0, name:b, Si:0, fromWireType:() => {
  }, toWireType:() => {
  }});
}, Jh:function(a) {
  if (ag.has(a)) {
    var b = ag.get(a), c = ag;
    c.aj[a] = void 0;
    c.Di.push(a);
    0 < b.readyState && 4 > b.readyState && b.abort();
  }
}, Hh:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  a = ag.get(a).getAllResponseHeaders();
  var d = tb(a) + 1;
  E(a, p, b, c);
  return Math.min(d, c);
}, Ih:function(a) {
  return tb(ag.get(a).getAllResponseHeaders()) + 1;
}, ac:() => 1, Ib:() => {
  Ya = !1;
  Sd = 0;
}, ub:() => {
  throw Infinity;
}, v:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  a = P(a >>> 0);
  b = Gd(b, "emval::as");
  return Hd(b, c, a);
}, aa:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  a = Id[a >>> 0];
  b = P(b >>> 0);
  return a(null, b, c, d);
}, t:function(a, b, c, d, e) {
  c >>>= 0;
  d >>>= 0;
  e >>>= 0;
  a = Id[a >>> 0];
  b = P(b >>> 0);
  c = Kd(c);
  return a(b, b[c], d, e);
}, h:wd, Oa:function(a, b) {
  b >>>= 0;
  a = P(a >>> 0);
  b = P(b);
  return delete a[b];
}, $:function(a, b) {
  b >>>= 0;
  a = P(a >>> 0);
  b = P(b);
  return a == b;
}, z:function(a) {
  a >>>= 0;
  if (0 === a) {
    return ad(Ld());
  }
  a = Kd(a);
  return ad(Ld()[a]);
}, s:function(a, b, c) {
  b = Nd(a, b >>> 0);
  var d = b.shift();
  a--;
  var e = "return function (obj, func, destructorsRef, args) {\n", f = 0, g = [];
  0 === c && g.push("obj");
  for (var h = ["retType"], l = [d], n = 0; n < a; ++n) {
    g.push("arg" + n), h.push("argType" + n), l.push(b[n]), e += `  var arg${n} = argType${n}.readValueFromPointer(args${f ? "+" + f : ""});\n`, f += b[n].Si;
  }
  e += `  var rv = ${1 === c ? "new func" : "func.call"}(${g.join(", ")});\n`;
  d.gl || (h.push("emval_returnValue"), l.push(Hd), e += "  return emval_returnValue(retType, destructorsRef, rv);\n");
  h.push(e + "};\n");
  a = rd(h)(...l);
  c = `methodCaller<(${b.map(q => q.name).join(", ")}) => ${d.name}>`;
  return Md(Tc(c, a));
}, B:function(a) {
  a = Kd(a >>> 0);
  return ad(k[a]);
}, q:function(a, b) {
  b >>>= 0;
  a = P(a >>> 0);
  b = P(b);
  return ad(a[b]);
}, r:function(a) {
  a >>>= 0;
  9 < a && (vd[a + 1] += 1);
}, Fh:function(a, b) {
  b >>>= 0;
  a = P(a >>> 0);
  b = P(b);
  return a instanceof b;
}, na:function() {
  return ad([]);
}, l:function(a) {
  return ad(Kd(a >>> 0));
}, da:function() {
  return ad({});
}, Dh:function(a) {
  a = P(a >>> 0);
  return !a;
}, m:function(a) {
  a >>>= 0;
  var b = P(a);
  pd(b);
  wd(a);
}, y:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  a = P(a >>> 0);
  b = P(b);
  c = P(c);
  a[b] = c;
}, w:function(a, b) {
  b >>>= 0;
  a = Gd(a >>> 0, "_emval_take_value");
  a = a.readValueFromPointer(b);
  return ad(a);
}, Lb:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  b >>>= 0;
  a = new Date(1e3 * a);
  v[b >>> 2 >>> 0] = a.getUTCSeconds();
  v[b + 4 >>> 2 >>> 0] = a.getUTCMinutes();
  v[b + 8 >>> 2 >>> 0] = a.getUTCHours();
  v[b + 12 >>> 2 >>> 0] = a.getUTCDate();
  v[b + 16 >>> 2 >>> 0] = a.getUTCMonth();
  v[b + 20 >>> 2 >>> 0] = a.getUTCFullYear() - 1900;
  v[b + 24 >>> 2 >>> 0] = a.getUTCDay();
  v[b + 28 >>> 2 >>> 0] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
}, Mb:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  b >>>= 0;
  a = new Date(1e3 * a);
  v[b >>> 2 >>> 0] = a.getSeconds();
  v[b + 4 >>> 2 >>> 0] = a.getMinutes();
  v[b + 8 >>> 2 >>> 0] = a.getHours();
  v[b + 12 >>> 2 >>> 0] = a.getDate();
  v[b + 16 >>> 2 >>> 0] = a.getMonth();
  v[b + 20 >>> 2 >>> 0] = a.getFullYear() - 1900;
  v[b + 24 >>> 2 >>> 0] = a.getDay();
  v[b + 28 >>> 2 >>> 0] = (Od(a.getFullYear()) ? Pd : Qd)[a.getMonth()] + a.getDate() - 1 | 0;
  v[b + 36 >>> 2 >>> 0] = -(60 * a.getTimezoneOffset());
  var c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset(), d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  v[b + 32 >>> 2 >>> 0] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, Nb:function(a) {
  a >>>= 0;
  var b = new Date(v[a + 20 >>> 2 >>> 0] + 1900, v[a + 16 >>> 2 >>> 0], v[a + 12 >>> 2 >>> 0], v[a + 8 >>> 2 >>> 0], v[a + 4 >>> 2 >>> 0], v[a >>> 2 >>> 0], 0), c = v[a + 32 >>> 2 >>> 0], d = b.getTimezoneOffset(), e = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), f = (new Date(b.getFullYear(), 0, 1)).getTimezoneOffset(), g = Math.min(f, e);
  0 > c ? v[a + 32 >>> 2 >>> 0] = Number(e != f && g == d) : 0 < c != (g == d) && (e = Math.max(f, e), b.setTime(b.getTime() + 6e4 * ((0 < c ? g : e) - d)));
  v[a + 24 >>> 2 >>> 0] = b.getDay();
  v[a + 28 >>> 2 >>> 0] = (Od(b.getFullYear()) ? Pd : Qd)[b.getMonth()] + b.getDate() - 1 | 0;
  v[a >>> 2 >>> 0] = b.getSeconds();
  v[a + 4 >>> 2 >>> 0] = b.getMinutes();
  v[a + 8 >>> 2 >>> 0] = b.getHours();
  v[a + 12 >>> 2 >>> 0] = b.getDate();
  v[a + 16 >>> 2 >>> 0] = b.getMonth();
  v[a + 20 >>> 2 >>> 0] = b.getYear();
  a = b.getTime();
  return BigInt(isNaN(a) ? -1 : a / 1e3);
}, Jb:function(a, b, c, d, e, f, g) {
  a >>>= 0;
  e = -9007199254740992 > e || 9007199254740992 < e ? NaN : Number(e);
  f >>>= 0;
  g >>>= 0;
  try {
    if (isNaN(e)) {
      return 61;
    }
    var h = K(d), l = B.jj(h, a, e, b, c), n = l.xi;
    v[f >>> 2 >>> 0] = l.aj;
    x[g >>> 2 >>> 0] = n;
    return 0;
  } catch (q) {
    if ("undefined" == typeof B || "ErrnoError" !== q.name) {
      throw q;
    }
    return -q.ti;
  }
}, Kb:function(a, b, c, d, e, f) {
  a >>>= 0;
  b >>>= 0;
  f = -9007199254740992 > f || 9007199254740992 < f ? NaN : Number(f);
  try {
    var g = K(e);
    if (c & 2) {
      if (!B.isFile(g.node.mode)) {
        throw new B.ri(43);
      }
      if (!(d & 2)) {
        var h = p.slice(a, a + b);
        B.pj(g, h, f, b, d);
      }
    }
  } catch (l) {
    if ("undefined" == typeof B || "ErrnoError" !== l.name) {
      throw l;
    }
    return -l.ti;
  }
}, dc:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  var e = (new Date()).getFullYear(), f = (new Date(e, 0, 1)).getTimezoneOffset();
  e = (new Date(e, 6, 1)).getTimezoneOffset();
  x[a >>> 0 >>> 2 >>> 0] = 60 * Math.max(f, e);
  v[b >>> 0 >>> 2 >>> 0] = Number(f != e);
  b = g => {
    var h = Math.abs(g);
    return `UTC${0 <= g ? "-" : "+"}${String(Math.floor(h / 60)).padStart(2, "0")}${String(h % 60).padStart(2, "0")}`;
  };
  a = b(f);
  b = b(e);
  e < f ? (E(a, p, c, 17), E(b, p, d, 17)) : (E(a, p, d, 17), E(b, p, c, 17));
}, ya:function(a, b, c) {
  function d() {
    A(a)(b);
  }
  a >>>= 0;
  b >>>= 0;
  0 <= c || ha ? Xd(d, c) : Fe(d);
}, wa:a => cancelAnimationFrame(a), ra:Ge, La:() => Date.now(), yh:function(a, b, c) {
  b >>>= 0;
  c >>>= 0;
  a = Le(a >>> 0);
  if (!a) {
    return -4;
  }
  a = 0 > Ke.indexOf(a) ? a.getBoundingClientRect() : {left:0, top:0};
  Ba[b >>> 3 >>> 0] = a.width;
  Ba[c >>> 3 >>> 0] = a.height;
  return 0;
}, zb:function() {
  return 4294901760;
}, va:() => performance.now(), Wg:a => R.activeTexture(a), Vg:(a, b) => {
  R.attachShader(S[a], Ve[b]);
}, Vd:(a, b) => {
  R.beginQuery(a, Ye[b]);
}, mh:(a, b) => {
  R.Ni.beginQueryEXT(a, Ye[b]);
}, Cd:a => R.beginTransformFeedback(a), Ug:function(a, b, c) {
  R.bindAttribLocation(S[a], b, N(c >>> 0));
}, Tg:(a, b) => {
  35051 == a ? R.Kj = b : 35052 == a && (R.Ti = b);
  R.bindBuffer(a, Re[b]);
}, zd:(a, b, c) => {
  R.bindBufferBase(a, b, Re[c]);
}, Ad:function(a, b, c, d, e) {
  R.bindBufferRange(a, b, Re[c], d >>> 0, e >>> 0);
}, Sg:(a, b) => {
  R.bindFramebuffer(a, Se[b]);
}, Rg:(a, b) => {
  R.bindRenderbuffer(a, Te[b]);
}, Fc:(a, b) => {
  R.bindSampler(a, Ze[b]);
}, Qg:(a, b) => {
  R.bindTexture(a, Ue[b]);
}, xc:(a, b) => {
  R.bindTransformFeedback(a, $e[b]);
}, Hd:of, dh:of, Pg:(a, b, c, d) => R.blendColor(a, b, c, d), Og:a => R.blendEquation(a), Ng:(a, b) => R.blendEquationSeparate(a, b), Mg:(a, b) => R.blendFunc(a, b), Lg:(a, b, c, d) => R.blendFuncSeparate(a, b, c, d), Kd:(a, b, c, d, e, f, g, h, l, n) => R.blitFramebuffer(a, b, c, d, e, f, g, h, l, n), Kg:function(a, b, c, d) {
  b >>>= 0;
  c >>>= 0;
  R.bufferData(a, c ? p.subarray(c >>> 0, c + b >>> 0) : b, d);
}, Jg:function(a, b, c, d) {
  d >>>= 0;
  R.bufferSubData(a, b >>> 0, p.subarray(d >>> 0, d + (c >>> 0) >>> 0));
}, Ig:a => R.checkFramebufferStatus(a), Hg:a => R.clear(a), bd:(a, b, c, d) => R.clearBufferfi(a, b, c, d), cd:function(a, b, c) {
  R.clearBufferfv(a, b, z, c >>> 0 >>> 2);
}, ed:function(a, b, c) {
  R.clearBufferiv(a, b, v, c >>> 0 >>> 2);
}, dd:function(a, b, c) {
  R.clearBufferuiv(a, b, x, c >>> 0 >>> 2);
}, Gg:(a, b, c, d) => R.clearColor(a, b, c, d), Fg:a => R.clearDepth(a), Eg:a => R.clearStencil(a), Oc:function(a, b, c) {
  c = Number(c);
  return R.clientWaitSync(af[a >>> 0], b, c);
}, je:(a, b) => {
  R.Tk.clipControlEXT(a, b);
}, Dg:(a, b, c, d) => {
  R.colorMask(!!a, !!b, !!c, !!d);
}, Cg:a => {
  R.compileShader(Ve[a]);
}, Bg:function(a, b, c, d, e, f, g, h) {
  h >>>= 0;
  2 <= lf.version && (R.Ti || !g) ? R.compressedTexImage2D(a, b, c, d, e, f, g, h) : R.compressedTexImage2D(a, b, c, d, e, f, p.subarray(h >>> 0, h + g >>> 0));
}, _d:function(a, b, c, d, e, f, g, h, l) {
  l >>>= 0;
  R.Ti ? R.compressedTexImage3D(a, b, c, d, e, f, g, h, l) : R.compressedTexImage3D(a, b, c, d, e, f, g, p, l, h);
}, Ag:function(a, b, c, d, e, f, g, h, l) {
  l >>>= 0;
  2 <= lf.version && (R.Ti || !h) ? R.compressedTexSubImage2D(a, b, c, d, e, f, g, h, l) : R.compressedTexSubImage2D(a, b, c, d, e, f, g, p.subarray(l >>> 0, l + h >>> 0));
}, Zd:function(a, b, c, d, e, f, g, h, l, n, q) {
  q >>>= 0;
  R.Ti ? R.compressedTexSubImage3D(a, b, c, d, e, f, g, h, l, n, q) : R.compressedTexSubImage3D(a, b, c, d, e, f, g, h, l, p, q, n);
}, $c:function(a, b, c, d, e) {
  return R.copyBufferSubData(a, b, c >>> 0, d >>> 0, e >>> 0);
}, zg:(a, b, c, d, e, f, g, h) => R.copyTexImage2D(a, b, c, d, e, f, g, h), yg:(a, b, c, d, e, f, g, h) => R.copyTexSubImage2D(a, b, c, d, e, f, g, h), $d:(a, b, c, d, e, f, g, h, l) => R.copyTexSubImage3D(a, b, c, d, e, f, g, h, l), xg:() => {
  var a = ff(S), b = R.createProgram();
  b.name = a;
  b.Cj = b.Aj = b.Bj = 0;
  b.ak = 1;
  S[a] = b;
  return a;
}, wg:a => {
  var b = ff(Ve);
  Ve[b] = R.createShader(a);
  return b;
}, vg:a => R.cullFace(a), ug:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Re[d];
    e && (R.deleteBuffer(e), e.name = 0, Re[d] = null, d == R.Kj && (R.Kj = 0), d == R.Ti && (R.Ti = 0));
  }
}, tg:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; ++c) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Se[d];
    e && (R.deleteFramebuffer(e), e.name = 0, Se[d] = null);
  }
}, rg:a => {
  if (a) {
    var b = S[a];
    b ? (R.deleteProgram(b), b.name = 0, S[a] = null) : T ||= 1281;
  }
}, Xd:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Ye[d];
    e && (R.deleteQuery(e), Ye[d] = null);
  }
}, oh:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Ye[d];
    e && (R.Ni.deleteQueryEXT(e), Ye[d] = null);
  }
}, qg:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Te[d];
    e && (R.deleteRenderbuffer(e), e.name = 0, Te[d] = null);
  }
}, Hc:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Ze[d];
    e && (R.deleteSampler(e), e.name = 0, Ze[d] = null);
  }
}, pg:a => {
  if (a) {
    var b = Ve[a];
    b ? (R.deleteShader(b), Ve[a] = null) : T ||= 1281;
  }
}, Pc:function(a) {
  if (a >>>= 0) {
    var b = af[a];
    b ? (R.deleteSync(b), b.name = 0, af[a] = null) : T ||= 1281;
  }
}, og:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = Ue[d];
    e && (R.deleteTexture(e), e.name = 0, Ue[d] = null);
  }
}, wc:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = v[b + 4 * c >>> 2 >>> 0], e = $e[d];
    e && (R.deleteTransformFeedback(e), e.name = 0, $e[d] = null);
  }
}, Gd:pf, ch:pf, ng:a => R.depthFunc(a), mg:a => {
  R.depthMask(!!a);
}, lg:(a, b) => R.depthRange(a, b), kg:(a, b) => {
  R.detachShader(S[a], Ve[b]);
}, jg:a => R.disable(a), ig:a => {
  R.disableVertexAttribArray(a);
}, hg:(a, b, c) => {
  R.drawArrays(a, b, c);
}, Tc:qf, _g:qf, gc:qf, ge:qf, hc:qf, Rd:sf, ee:sf, $g:sf, gg:tf, Sc:uf, Zg:uf, ec:uf, fc:uf, fe:uf, ce:function(a, b, c, d, e, f) {
  tf(a, d, e, f >>> 0);
}, fg:a => R.enable(a), eg:a => {
  R.enableVertexAttribArray(a);
}, Ud:a => R.endQuery(a), lh:a => {
  R.Ni.endQueryEXT(a);
}, Bd:() => R.endTransformFeedback(), Rc:function(a, b) {
  return (a = R.fenceSync(a, b)) ? (b = ff(af), a.name = b, af[b] = a, b) : 0;
}, dg:() => R.finish(), cg:() => R.flush(), bg:(a, b, c, d) => {
  R.framebufferRenderbuffer(a, b, c, Te[d]);
}, ag:(a, b, c, d, e) => {
  R.framebufferTexture2D(a, b, c, Ue[d], e);
}, Id:(a, b, c, d, e) => {
  R.framebufferTextureLayer(a, b, Ue[c], d, e);
}, $f:a => R.frontFace(a), _f:function(a, b) {
  gf(a, b >>> 0, "createBuffer", Re);
}, Yf:function(a, b) {
  gf(a, b >>> 0, "createFramebuffer", Se);
}, Yd:function(a, b) {
  gf(a, b >>> 0, "createQuery", Ye);
}, ph:function(a, b) {
  b >>>= 0;
  for (var c = 0; c < a; c++) {
    var d = R.Ni.createQueryEXT();
    if (!d) {
      for (T ||= 1282; c < a;) {
        v[b + 4 * c++ >>> 2 >>> 0] = 0;
      }
      break;
    }
    var e = ff(Ye);
    d.name = e;
    Ye[e] = d;
    v[b + 4 * c >>> 2 >>> 0] = e;
  }
}, Xf:function(a, b) {
  gf(a, b >>> 0, "createRenderbuffer", Te);
}, Ic:function(a, b) {
  gf(a, b >>> 0, "createSampler", Ze);
}, Wf:function(a, b) {
  gf(a, b >>> 0, "createTexture", Ue);
}, vc:function(a, b) {
  gf(a, b >>> 0, "createTransformFeedback", $e);
}, Fd:vf, bh:vf, Zf:a => R.generateMipmap(a), Vf:function(a, b, c, d, e, f, g) {
  wf("getActiveAttrib", a, b, c, d >>> 0, e >>> 0, f >>> 0, g >>> 0);
}, Uf:function(a, b, c, d, e, f, g) {
  wf("getActiveUniform", a, b, c, d >>> 0, e >>> 0, f >>> 0, g >>> 0);
}, Vc:function(a, b, c, d, e) {
  d >>>= 0;
  e >>>= 0;
  a = S[a];
  if (a = R.getActiveUniformBlockName(a, b)) {
    e && 0 < c ? (c = E(a, p, e, c), d && (v[d >>> 2 >>> 0] = c)) : d && (v[d >>> 2 >>> 0] = 0);
  }
}, Wc:function(a, b, c, d) {
  if (d >>>= 0) {
    if (a = S[a], 35393 == c) {
      v[d >>> 2 >>> 0] = R.getActiveUniformBlockName(a, b).length + 1;
    } else {
      if (a = R.getActiveUniformBlockParameter(a, b, c), null !== a) {
        if (35395 == c) {
          for (c = 0; c < a.length; c++) {
            v[d + 4 * c >>> 2 >>> 0] = a[c];
          }
        } else {
          v[d >>> 2 >>> 0] = a;
        }
      }
    }
  } else {
    T ||= 1281;
  }
}, Zc:function(a, b, c, d, e) {
  c >>>= 0;
  if (e >>>= 0) {
    if (0 < b && 0 == c) {
      T ||= 1281;
    } else {
      a = S[a];
      for (var f = [], g = 0; g < b; g++) {
        f.push(v[c + 4 * g >>> 2 >>> 0]);
      }
      if (a = R.getActiveUniforms(a, f, d)) {
        for (b = a.length, g = 0; g < b; g++) {
          v[e + 4 * g >>> 2 >>> 0] = a[g];
        }
      }
    }
  } else {
    T ||= 1281;
  }
}, Tf:function(a, b, c, d) {
  d >>>= 0;
  a = R.getAttachedShaders(S[a]);
  var e = a.length;
  e > b && (e = b);
  v[c >>> 0 >>> 2 >>> 0] = e;
  for (b = 0; b < e; ++b) {
    v[d + 4 * b >>> 2 >>> 0] = Ve.indexOf(a[b]);
  }
}, Sf:function(a, b) {
  return R.getAttribLocation(S[a], N(b >>> 0));
}, Rf:function(a, b) {
  return zf(a, b >>> 0, 4);
}, Jc:function(a, b, c) {
  (c >>>= 0) ? xf(c, R.getBufferParameter(a, b)) : T ||= 1281;
}, Qf:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getBufferParameter(a, b) : T ||= 1281;
}, Of:() => {
  var a = R.getError() || T;
  T = 0;
  return a;
}, Nf:function(a, b) {
  return zf(a, b >>> 0, 2);
}, od:function(a, b) {
  return R.getFragDataLocation(S[a], N(b >>> 0));
}, Mf:function(a, b, c, d) {
  a = R.getFramebufferAttachmentParameter(a, b, c);
  if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) {
    a = a.name | 0;
  }
  v[d >>> 0 >>> 2 >>> 0] = a;
}, Kc:function(a, b, c) {
  return Af(a, b, c >>> 0, 1);
}, Mc:function(a, b) {
  zf(a, b >>> 0, 1);
}, Dd:function(a, b, c) {
  return Af(a, b, c >>> 0, 0);
}, Lf:function(a, b) {
  return zf(a, b >>> 0, 0);
}, kc:function(a, b, c, d, e) {
  e >>>= 0;
  if (0 > d) {
    T ||= 1281;
  } else {
    if (e) {
      if (a = R.getInternalformatParameter(a, b, c), null !== a) {
        for (b = 0; b < a.length && b < d; ++b) {
          v[e + 4 * b >>> 2 >>> 0] = a[b];
        }
      }
    } else {
      T ||= 1281;
    }
  }
}, rc:function() {
  T ||= 1282;
}, Jf:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  a = R.getProgramInfoLog(S[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? E(a, p, d, b) : 0;
  c && (v[c >>> 2 >>> 0] = b);
}, Kf:function(a, b, c) {
  if (c >>>= 0) {
    if (a >= Qe) {
      T ||= 1281;
    } else {
      if (a = S[a], 35716 == b) {
        a = R.getProgramInfoLog(a), null === a && (a = "(unknown error)"), v[c >>> 2 >>> 0] = a.length + 1;
      } else if (35719 == b) {
        if (!a.Cj) {
          var d = R.getProgramParameter(a, 35718);
          for (b = 0; b < d; ++b) {
            a.Cj = Math.max(a.Cj, R.getActiveUniform(a, b).name.length + 1);
          }
        }
        v[c >>> 2 >>> 0] = a.Cj;
      } else if (35722 == b) {
        if (!a.Aj) {
          for (d = R.getProgramParameter(a, 35721), b = 0; b < d; ++b) {
            a.Aj = Math.max(a.Aj, R.getActiveAttrib(a, b).name.length + 1);
          }
        }
        v[c >>> 2 >>> 0] = a.Aj;
      } else if (35381 == b) {
        if (!a.Bj) {
          for (d = R.getProgramParameter(a, 35382), b = 0; b < d; ++b) {
            a.Bj = Math.max(a.Bj, R.getActiveUniformBlockName(a, b).length + 1);
          }
        }
        v[c >>> 2 >>> 0] = a.Bj;
      } else {
        v[c >>> 2 >>> 0] = R.getProgramParameter(a, b);
      }
    }
  } else {
    T ||= 1281;
  }
}, fh:Bf, ih:Cf, eh:Bf, Sd:function(a, b, c) {
  if (c >>>= 0) {
    a = R.getQueryParameter(Ye[a], b);
    var d;
    "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
    v[c >>> 2 >>> 0] = d;
  } else {
    T ||= 1281;
  }
}, hh:Cf, Td:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getQuery(a, b) : T ||= 1281;
}, jh:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.Ni.getQueryEXT(a, b) : T ||= 1281;
}, If:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getRenderbufferParameter(a, b) : T ||= 1281;
}, zc:function(a, b, c) {
  (c >>>= 0) ? z[c >>> 2 >>> 0] = R.getSamplerParameter(Ze[a], b) : T ||= 1281;
}, Ac:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getSamplerParameter(Ze[a], b) : T ||= 1281;
}, Gf:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  a = R.getShaderInfoLog(Ve[a]);
  null === a && (a = "(unknown error)");
  b = 0 < b && d ? E(a, p, d, b) : 0;
  c && (v[c >>> 2 >>> 0] = b);
}, Ff:function(a, b, c, d) {
  c >>>= 0;
  a = R.getShaderPrecisionFormat(a, b);
  v[c >>> 2 >>> 0] = a.rangeMin;
  v[c + 4 >>> 2 >>> 0] = a.rangeMax;
  v[d >>> 0 >>> 2 >>> 0] = a.precision;
}, Ef:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  if (a = R.getShaderSource(Ve[a])) {
    b = 0 < b && d ? E(a, p, d, b) : 0, c && (v[c >>> 2 >>> 0] = b);
  }
}, Hf:function(a, b, c) {
  (c >>>= 0) ? 35716 == b ? (a = R.getShaderInfoLog(Ve[a]), null === a && (a = "(unknown error)"), v[c >>> 2 >>> 0] = a ? a.length + 1 : 0) : 35720 == b ? (a = R.getShaderSource(Ve[a]), v[c >>> 2 >>> 0] = a ? a.length + 1 : 0) : v[c >>> 2 >>> 0] = R.getShaderParameter(Ve[a], b) : T ||= 1281;
}, Df:function(a) {
  var b = bf[a];
  if (!b) {
    switch(a) {
      case 7939:
        b = Ef(yf().join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        (b = R.getParameter(a)) || (T ||= 1280);
        b = b ? Ef(b) : 0;
        break;
      case 7938:
        b = R.getParameter(7938);
        var c = `OpenGL ES 2.0 (${b})`;
        2 <= lf.version && (c = `OpenGL ES 3.0 (${b})`);
        b = Ef(c);
        break;
      case 35724:
        b = R.getParameter(35724);
        c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
        null !== c && (3 == c[1].length && (c[1] += "0"), b = `OpenGL ES GLSL ES ${c[1]} (${b})`);
        b = Ef(b);
        break;
      default:
        T ||= 1280;
    }
    bf[a] = b;
  }
  return b;
}, ad:function(a, b) {
  if (2 > lf.version) {
    return T ||= 1282, 0;
  }
  var c = cf[a];
  if (c) {
    return 0 > b || b >= c.length ? (T ||= 1281, 0) : c[b];
  }
  switch(a) {
    case 7939:
      return c = yf().map(Ef), c = cf[a] = c, 0 > b || b >= c.length ? (T ||= 1281, 0) : c[b];
    default:
      return T ||= 1280, 0;
  }
}, Lc:function(a, b, c, d, e) {
  d >>>= 0;
  e >>>= 0;
  0 > c ? T ||= 1281 : e ? (a = R.getSyncParameter(af[a >>> 0], b), null !== a && (v[e >>> 2 >>> 0] = a, d && (v[d >>> 2 >>> 0] = 1))) : T ||= 1281;
}, Cf:function(a, b, c) {
  (c >>>= 0) ? z[c >>> 2 >>> 0] = R.getTexParameter(a, b) : T ||= 1281;
}, Bf:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getTexParameter(a, b) : T ||= 1281;
}, xd:function(a, b, c, d, e, f, g) {
  d >>>= 0;
  e >>>= 0;
  f >>>= 0;
  g >>>= 0;
  a = S[a];
  if (a = R.getTransformFeedbackVarying(a, b)) {
    g && 0 < c ? (c = E(a.name, p, g, c), d && (v[d >>> 2 >>> 0] = c)) : d && (v[d >>> 2 >>> 0] = 0), e && (v[e >>> 2 >>> 0] = a.size), f && (v[f >>> 2 >>> 0] = a.type);
  }
}, Yc:function(a, b) {
  return R.getUniformBlockIndex(S[a], N(b >>> 0));
}, _c:function(a, b, c, d) {
  c >>>= 0;
  if (d >>>= 0) {
    if (0 < b && (0 == c || 0 == d)) {
      T ||= 1281;
    } else {
      a = S[a];
      for (var e = [], f = 0; f < b; f++) {
        e.push(N(v[c + 4 * f >>> 2 >>> 0]));
      }
      if (a = R.getUniformIndices(a, e)) {
        for (b = a.length, f = 0; f < b; f++) {
          v[d + 4 * f >>> 2 >>> 0] = a[f];
        }
      }
    }
  } else {
    T ||= 1281;
  }
}, yf:function(a, b) {
  b = N(b >>> 0);
  if (a = S[a]) {
    Gf(a);
    var c = a.wj, d = 0, e = b, f = Ff(b);
    0 < f && (d = parseInt(b.slice(f + 1)) >>> 0, e = b.slice(0, f));
    if ((e = a.Bk[e]) && d < e[0] && (d += e[1], c[d] = c[d] || R.getUniformLocation(a, b))) {
      return d;
    }
  } else {
    T ||= 1281;
  }
  return -1;
}, Af:function(a, b, c) {
  Hf(a, b, c >>> 0, 2);
}, zf:function(a, b, c) {
  Hf(a, b, c >>> 0, 0);
}, pd:function(a, b, c) {
  return Hf(a, b, c >>> 0, 0);
}, vd:Jf, ud:Jf, vf:function(a, b, c) {
  (c >>>= 0) ? v[c >>> 2 >>> 0] = R.getVertexAttribOffset(a, b) : T ||= 1281;
}, xf:function(a, b, c) {
  If(a, b, c >>> 0, 2);
}, wf:function(a, b, c) {
  If(a, b, c >>> 0, 5);
}, uf:(a, b) => R.hint(a, b), oc:function(a, b, c) {
  c >>>= 0;
  for (var d = rf[b], e = 0; e < b; e++) {
    d[e] = v[c + 4 * e >>> 2 >>> 0];
  }
  R.invalidateFramebuffer(a, d);
}, nc:function(a, b, c, d, e, f, g) {
  c >>>= 0;
  for (var h = rf[b], l = 0; l < b; l++) {
    h[l] = v[c + 4 * l >>> 2 >>> 0];
  }
  R.invalidateSubFramebuffer(a, h, d, e, f, g);
}, tf:a => (a = Re[a]) ? R.isBuffer(a) : 0, sf:a => R.isEnabled(a), rf:a => (a = Se[a]) ? R.isFramebuffer(a) : 0, qf:a => (a = S[a]) ? R.isProgram(a) : 0, Wd:a => (a = Ye[a]) ? R.isQuery(a) : 0, nh:a => (a = Ye[a]) ? R.Ni.isQueryEXT(a) : 0, pf:a => (a = Te[a]) ? R.isRenderbuffer(a) : 0, Gc:a => (a = Ze[a]) ? R.isSampler(a) : 0, of:a => (a = Ve[a]) ? R.isShader(a) : 0, Qc:function(a) {
  return R.isSync(af[a >>> 0]);
}, nf:a => (a = Ue[a]) ? R.isTexture(a) : 0, uc:a => R.isTransformFeedback($e[a]), Ed:Kf, ah:Kf, mf:a => R.lineWidth(a), lf:a => {
  a = S[a];
  R.linkProgram(a);
  a.wj = 0;
  a.Bk = {};
}, tc:() => R.pauseTransformFeedback(), kf:(a, b) => {
  3317 == a ? df = b : 3314 == a && (ef = b);
  R.pixelStorei(a, b);
}, ie:(a, b) => {
  R.pl.polygonModeWEBGL(a, b);
}, jf:(a, b) => R.polygonOffset(a, b), ke:(a, b, c) => {
  R.Uk.polygonOffsetClampEXT(a, b, c);
}, qc:function() {
  T ||= 1280;
}, pc:() => {
  T ||= 1280;
}, kh:(a, b) => {
  R.Ni.queryCounterEXT(Ye[a], b);
}, de:a => R.readBuffer(a), hf:function(a, b, c, d, e, f, g) {
  g >>>= 0;
  2 <= lf.version && R.Kj ? R.readPixels(a, b, c, d, e, f, g) : (g = Mf(f, e, c, d, g)) ? R.readPixels(a, b, c, d, e, f, g) : T ||= 1280;
}, gf:() => {
}, ff:(a, b, c, d) => R.renderbufferStorage(a, b, c, d), Jd:(a, b, c, d, e) => R.renderbufferStorageMultisample(a, b, c, d, e), sc:() => R.resumeTransformFeedback(), ef:(a, b) => {
  R.sampleCoverage(a, !!b);
}, Cc:(a, b, c) => {
  R.samplerParameterf(Ze[a], b, c);
}, Bc:function(a, b, c) {
  R.samplerParameterf(Ze[a], b, z[c >>> 0 >>> 2 >>> 0]);
}, Ec:(a, b, c) => {
  R.samplerParameteri(Ze[a], b, c);
}, Dc:function(a, b, c) {
  R.samplerParameteri(Ze[a], b, v[c >>> 0 >>> 2 >>> 0]);
}, df:(a, b, c, d) => R.scissor(a, b, c, d), cf:function() {
  T ||= 1280;
}, bf:function(a, b, c, d) {
  c >>>= 0;
  d >>>= 0;
  for (var e = "", f = 0; f < b; ++f) {
    e += N(x[c + 4 * f >>> 2 >>> 0], d ? x[d + 4 * f >>> 2 >>> 0] : void 0);
  }
  R.shaderSource(Ve[a], e);
}, af:(a, b, c) => R.stencilFunc(a, b, c), $e:(a, b, c, d) => R.stencilFuncSeparate(a, b, c, d), _e:a => R.stencilMask(a), Ze:(a, b) => R.stencilMaskSeparate(a, b), Ye:(a, b, c) => R.stencilOp(a, b, c), Xe:(a, b, c, d) => R.stencilOpSeparate(a, b, c, d), We:function(a, b, c, d, e, f, g, h, l) {
  l >>>= 0;
  2 <= lf.version && R.Ti ? R.texImage2D(a, b, c, d, e, f, g, h, l) : (l = l ? Mf(h, g, d, e, l) : null, R.texImage2D(a, b, c, d, e, f, g, h, l));
}, be:function(a, b, c, d, e, f, g, h, l, n) {
  n >>>= 0;
  R.Ti ? R.texImage3D(a, b, c, d, e, f, g, h, l, n) : n ? (n = Mf(l, h, d, e * f, n), R.texImage3D(a, b, c, d, e, f, g, h, l, n)) : R.texImage3D(a, b, c, d, e, f, g, h, l, null);
}, Ve:(a, b, c) => R.texParameterf(a, b, c), Ue:function(a, b, c) {
  R.texParameterf(a, b, z[c >>> 0 >>> 2 >>> 0]);
}, Te:(a, b, c) => R.texParameteri(a, b, c), Se:function(a, b, c) {
  R.texParameteri(a, b, v[c >>> 0 >>> 2 >>> 0]);
}, mc:(a, b, c, d, e) => R.texStorage2D(a, b, c, d, e), lc:(a, b, c, d, e, f) => R.texStorage3D(a, b, c, d, e, f), Re:function(a, b, c, d, e, f, g, h, l) {
  l >>>= 0;
  2 <= lf.version && R.Ti ? R.texSubImage2D(a, b, c, d, e, f, g, h, l) : (l = l ? Mf(h, g, e, f, l) : null, R.texSubImage2D(a, b, c, d, e, f, g, h, l));
}, ae:function(a, b, c, d, e, f, g, h, l, n, q) {
  q >>>= 0;
  if (R.Ti) {
    R.texSubImage3D(a, b, c, d, e, f, g, h, l, n, q);
  } else if (q) {
    var t = Lf(n);
    R.texSubImage3D(a, b, c, d, e, f, g, h, l, n, t, q >>> 31 - Math.clz32(t.BYTES_PER_ELEMENT));
  } else {
    R.texSubImage3D(a, b, c, d, e, f, g, h, l, n, null);
  }
}, yd:function(a, b, c, d) {
  c >>>= 0;
  a = S[a];
  for (var e = [], f = 0; f < b; f++) {
    e.push(N(v[c + 4 * f >>> 2 >>> 0]));
  }
  R.transformFeedbackVaryings(a, e, d);
}, Qe:(a, b) => {
  R.uniform1f(V(a), b);
}, Pe:function(a, b, c) {
  c >>>= 0;
  if (288 >= b) {
    for (var d = Nf[b], e = 0; e < b; ++e) {
      d[e] = z[c + 4 * e >>> 2 >>> 0];
    }
  } else {
    d = z.subarray(c >>> 2 >>> 0, c + 4 * b >>> 2 >>> 0);
  }
  R.uniform1fv(V(a), d);
}, Oe:(a, b) => {
  R.uniform1i(V(a), b);
}, Ne:function(a, b, c) {
  c >>>= 0;
  if (288 >= b) {
    for (var d = Of[b], e = 0; e < b; ++e) {
      d[e] = v[c + 4 * e >>> 2 >>> 0];
    }
  } else {
    d = v.subarray(c >>> 2 >>> 0, c + 4 * b >>> 2 >>> 0);
  }
  R.uniform1iv(V(a), d);
}, nd:(a, b) => {
  R.uniform1ui(V(a), b);
}, jd:function(a, b, c) {
  c >>>= 0;
  b && R.uniform1uiv(V(a), x, c >>> 2, b);
}, Me:(a, b, c) => {
  R.uniform2f(V(a), b, c);
}, Le:function(a, b, c) {
  c >>>= 0;
  if (144 >= b) {
    b *= 2;
    for (var d = Nf[b], e = 0; e < b; e += 2) {
      d[e] = z[c + 4 * e >>> 2 >>> 0], d[e + 1] = z[c + (4 * e + 4) >>> 2 >>> 0];
    }
  } else {
    d = z.subarray(c >>> 2 >>> 0, c + 8 * b >>> 2 >>> 0);
  }
  R.uniform2fv(V(a), d);
}, Ke:(a, b, c) => {
  R.uniform2i(V(a), b, c);
}, Je:function(a, b, c) {
  c >>>= 0;
  if (144 >= b) {
    b *= 2;
    for (var d = Of[b], e = 0; e < b; e += 2) {
      d[e] = v[c + 4 * e >>> 2 >>> 0], d[e + 1] = v[c + (4 * e + 4) >>> 2 >>> 0];
    }
  } else {
    d = v.subarray(c >>> 2 >>> 0, c + 8 * b >>> 2 >>> 0);
  }
  R.uniform2iv(V(a), d);
}, md:(a, b, c) => {
  R.uniform2ui(V(a), b, c);
}, id:function(a, b, c) {
  c >>>= 0;
  b && R.uniform2uiv(V(a), x, c >>> 2, 2 * b);
}, Ie:(a, b, c, d) => {
  R.uniform3f(V(a), b, c, d);
}, He:function(a, b, c) {
  c >>>= 0;
  if (96 >= b) {
    b *= 3;
    for (var d = Nf[b], e = 0; e < b; e += 3) {
      d[e] = z[c + 4 * e >>> 2 >>> 0], d[e + 1] = z[c + (4 * e + 4) >>> 2 >>> 0], d[e + 2] = z[c + (4 * e + 8) >>> 2 >>> 0];
    }
  } else {
    d = z.subarray(c >>> 2 >>> 0, c + 12 * b >>> 2 >>> 0);
  }
  R.uniform3fv(V(a), d);
}, Ge:(a, b, c, d) => {
  R.uniform3i(V(a), b, c, d);
}, Fe:function(a, b, c) {
  c >>>= 0;
  if (96 >= b) {
    b *= 3;
    for (var d = Of[b], e = 0; e < b; e += 3) {
      d[e] = v[c + 4 * e >>> 2 >>> 0], d[e + 1] = v[c + (4 * e + 4) >>> 2 >>> 0], d[e + 2] = v[c + (4 * e + 8) >>> 2 >>> 0];
    }
  } else {
    d = v.subarray(c >>> 2 >>> 0, c + 12 * b >>> 2 >>> 0);
  }
  R.uniform3iv(V(a), d);
}, ld:(a, b, c, d) => {
  R.uniform3ui(V(a), b, c, d);
}, hd:function(a, b, c) {
  c >>>= 0;
  b && R.uniform3uiv(V(a), x, c >>> 2, 3 * b);
}, Ee:(a, b, c, d, e) => {
  R.uniform4f(V(a), b, c, d, e);
}, De:function(a, b, c) {
  c >>>= 0;
  if (72 >= b) {
    var d = Nf[4 * b], e = z;
    c >>>= 2;
    b *= 4;
    for (var f = 0; f < b; f += 4) {
      var g = c + f;
      d[f] = e[g >>> 0];
      d[f + 1] = e[g + 1 >>> 0];
      d[f + 2] = e[g + 2 >>> 0];
      d[f + 3] = e[g + 3 >>> 0];
    }
  } else {
    d = z.subarray(c >>> 2 >>> 0, c + 16 * b >>> 2 >>> 0);
  }
  R.uniform4fv(V(a), d);
}, Ce:(a, b, c, d, e) => {
  R.uniform4i(V(a), b, c, d, e);
}, Be:function(a, b, c) {
  c >>>= 0;
  if (72 >= b) {
    b *= 4;
    for (var d = Of[b], e = 0; e < b; e += 4) {
      d[e] = v[c + 4 * e >>> 2 >>> 0], d[e + 1] = v[c + (4 * e + 4) >>> 2 >>> 0], d[e + 2] = v[c + (4 * e + 8) >>> 2 >>> 0], d[e + 3] = v[c + (4 * e + 12) >>> 2 >>> 0];
    }
  } else {
    d = v.subarray(c >>> 2 >>> 0, c + 16 * b >>> 2 >>> 0);
  }
  R.uniform4iv(V(a), d);
}, kd:(a, b, c, d, e) => {
  R.uniform4ui(V(a), b, c, d, e);
}, fd:function(a, b, c) {
  c >>>= 0;
  b && R.uniform4uiv(V(a), x, c >>> 2, 4 * b);
}, Uc:(a, b, c) => {
  a = S[a];
  R.uniformBlockBinding(a, b, c);
}, Ae:function(a, b, c, d) {
  d >>>= 0;
  if (72 >= b) {
    b *= 4;
    for (var e = Nf[b], f = 0; f < b; f += 4) {
      e[f] = z[d + 4 * f >>> 2 >>> 0], e[f + 1] = z[d + (4 * f + 4) >>> 2 >>> 0], e[f + 2] = z[d + (4 * f + 8) >>> 2 >>> 0], e[f + 3] = z[d + (4 * f + 12) >>> 2 >>> 0];
    }
  } else {
    e = z.subarray(d >>> 2 >>> 0, d + 16 * b >>> 2 >>> 0);
  }
  R.uniformMatrix2fv(V(a), !!c, e);
}, Qd:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix2x3fv(V(a), !!c, z, d >>> 2, 6 * b);
}, Od:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix2x4fv(V(a), !!c, z, d >>> 2, 8 * b);
}, ze:function(a, b, c, d) {
  d >>>= 0;
  if (32 >= b) {
    b *= 9;
    for (var e = Nf[b], f = 0; f < b; f += 9) {
      e[f] = z[d + 4 * f >>> 2 >>> 0], e[f + 1] = z[d + (4 * f + 4) >>> 2 >>> 0], e[f + 2] = z[d + (4 * f + 8) >>> 2 >>> 0], e[f + 3] = z[d + (4 * f + 12) >>> 2 >>> 0], e[f + 4] = z[d + (4 * f + 16) >>> 2 >>> 0], e[f + 5] = z[d + (4 * f + 20) >>> 2 >>> 0], e[f + 6] = z[d + (4 * f + 24) >>> 2 >>> 0], e[f + 7] = z[d + (4 * f + 28) >>> 2 >>> 0], e[f + 8] = z[d + (4 * f + 32) >>> 2 >>> 0];
    }
  } else {
    e = z.subarray(d >>> 2 >>> 0, d + 36 * b >>> 2 >>> 0);
  }
  R.uniformMatrix3fv(V(a), !!c, e);
}, Pd:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix3x2fv(V(a), !!c, z, d >>> 2, 6 * b);
}, Md:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix3x4fv(V(a), !!c, z, d >>> 2, 12 * b);
}, ye:function(a, b, c, d) {
  d >>>= 0;
  if (18 >= b) {
    var e = Nf[16 * b], f = z;
    d >>>= 2;
    b *= 16;
    for (var g = 0; g < b; g += 16) {
      var h = d + g;
      e[g] = f[h >>> 0];
      e[g + 1] = f[h + 1 >>> 0];
      e[g + 2] = f[h + 2 >>> 0];
      e[g + 3] = f[h + 3 >>> 0];
      e[g + 4] = f[h + 4 >>> 0];
      e[g + 5] = f[h + 5 >>> 0];
      e[g + 6] = f[h + 6 >>> 0];
      e[g + 7] = f[h + 7 >>> 0];
      e[g + 8] = f[h + 8 >>> 0];
      e[g + 9] = f[h + 9 >>> 0];
      e[g + 10] = f[h + 10 >>> 0];
      e[g + 11] = f[h + 11 >>> 0];
      e[g + 12] = f[h + 12 >>> 0];
      e[g + 13] = f[h + 13 >>> 0];
      e[g + 14] = f[h + 14 >>> 0];
      e[g + 15] = f[h + 15 >>> 0];
    }
  } else {
    e = z.subarray(d >>> 2 >>> 0, d + 64 * b >>> 2 >>> 0);
  }
  R.uniformMatrix4fv(V(a), !!c, e);
}, Nd:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix4x2fv(V(a), !!c, z, d >>> 2, 8 * b);
}, Ld:function(a, b, c, d) {
  d >>>= 0;
  b && R.uniformMatrix4x3fv(V(a), !!c, z, d >>> 2, 12 * b);
}, xe:a => {
  a = S[a];
  R.useProgram(a);
  R.Pk = a;
}, we:a => {
  R.validateProgram(S[a]);
}, ve:(a, b) => R.vertexAttrib1f(a, b), ue:function(a, b) {
  R.vertexAttrib1f(a, z[b >>> 0 >>> 2]);
}, te:(a, b, c) => R.vertexAttrib2f(a, b, c), se:function(a, b) {
  b >>>= 0;
  R.vertexAttrib2f(a, z[b >>> 2], z[b + 4 >>> 2]);
}, re:(a, b, c, d) => R.vertexAttrib3f(a, b, c, d), qe:function(a, b) {
  b >>>= 0;
  R.vertexAttrib3f(a, z[b >>> 2], z[b + 4 >>> 2], z[b + 8 >>> 2]);
}, pe:(a, b, c, d, e) => R.vertexAttrib4f(a, b, c, d, e), oe:function(a, b) {
  b >>>= 0;
  R.vertexAttrib4f(a, z[b >>> 2], z[b + 4 >>> 2], z[b + 8 >>> 2], z[b + 12 >>> 2]);
}, yc:Pf, Yg:Pf, ic:Pf, he:Pf, jc:Pf, td:(a, b, c, d, e) => R.vertexAttribI4i(a, b, c, d, e), rd:function(a, b) {
  b >>>= 0;
  R.vertexAttribI4i(a, v[b >>> 2], v[b + 4 >>> 2], v[b + 8 >>> 2], v[b + 12 >>> 2]);
}, sd:(a, b, c, d, e) => R.vertexAttribI4ui(a, b, c, d, e), qd:function(a, b) {
  b >>>= 0;
  R.vertexAttribI4ui(a, x[b >>> 2], x[b + 4 >>> 2], x[b + 8 >>> 2], x[b + 12 >>> 2]);
}, wd:function(a, b, c, d, e) {
  R.vertexAttribIPointer(a, b, c, d, e >>> 0);
}, me:function(a, b, c, d, e, f) {
  R.vertexAttribPointer(a, b, c, !!d, e, f >>> 0);
}, le:(a, b, c, d) => R.viewport(a, b, c, d), Nc:function(a, b, c) {
  c = Number(c);
  R.waitSync(af[a >>> 0], b, c);
}, eb:function() {
  throw "Please compile your program with async support in order to use synchronous operations like emscripten_idb_delete, etc.";
}, gb:function() {
  throw "Please compile your program with async support in order to use synchronous operations like emscripten_idb_exists, etc.";
}, fb:function() {
  throw "Please compile your program with async support in order to use synchronous operations like emscripten_idb_load, etc.";
}, db:function() {
  throw "Please compile your program with async support in order to use synchronous operations like emscripten_idb_store, etc.";
}, Lh:() => !fa, zh:function(a) {
  a >>>= 0;
  return !Xe[a] || Xe[a].$i.isContextLost();
}, sg:function(a, b, c) {
  b = Tf(b >>> 0, c >>> 0);
  c = rb(b);
  if (a & 24) {
    b = c = c.replace(/\s+$/, "");
    c = 0 < c.length ? "\n" : "";
    var d = a, e = Error().stack.toString();
    e = e.slice(e.indexOf("\n", Math.max(e.lastIndexOf("_emscripten_log"), e.lastIndexOf("_emscripten_get_callstack"))) + 1);
    d & 8 && "undefined" == typeof emscripten_source_map && (se(), d = d ^ 8 | 16);
    var f = e.split("\n");
    e = "";
    var g = RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"), h = RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"), l = RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)"), n;
    for (n in f) {
      var q = f[n], t;
      if ((t = l.exec(q)) && 5 == t.length) {
        q = t[1];
        var y = t[2];
        var H = t[3];
        t = t[4];
      } else {
        if ((t = g.exec(q) || h.exec(q)) && 4 <= t.length) {
          q = t[1], y = t[2], H = t[3], t = t[4] | 0;
        } else {
          e += q + "\n";
          continue;
        }
      }
      var C = !1;
      if (d & 8) {
        var u = emscripten_source_map.cm({line:H, Mk:t});
        if (C = u?.source) {
          d & 64 && (u.source = u.source.substring(u.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), e += `    at ${q} (${u.source}:${u.line}:${u.Mk})\n`;
        }
      }
      if (d & 16 || !C) {
        d & 64 && (y = y.substring(y.replace(/\\/g, "/").lastIndexOf("/") + 1)), e += (C ? `     = ${q}` : `    at ${q}`) + ` (${y}:${H}:${t})\n`;
      }
    }
    e = e.replace(/\s+$/, "");
    c = b + (c + e);
  }
  a & 1 ? a & 4 ? console.error(c) : a & 2 ? console.warn(c) : a & 512 ? console.info(c) : a & 256 ? console.debug(c) : console.log(c) : a & 6 ? ta(c) : sa(c);
}, Sh:() => {
  qe();
}, Eh:() => performance.now(), Qa:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  return requestAnimationFrame(c => A(a)(c, b));
}, vb:function(a) {
  a >>>= 0;
  var b = p.length;
  if (4294901760 < a) {
    return !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + .2 / c);
    d = Math.min(d, a + 100663296);
    a: {
      d = (Math.min(4294901760, 65536 * Math.ceil(Math.max(a, d) / 65536)) - va.buffer.byteLength + 65535) / 65536 | 0;
      try {
        va.grow(d);
        Ca();
        var e = 1;
        break a;
      } catch (f) {
      }
      e = void 0;
    }
    if (e) {
      return !0;
    }
  }
  return !1;
}, Xh:function(a) {
  eval(N(a >>> 0));
}, Wh:Uf, Vh:function(a, b, c) {
  a = A(a >>> 0);
  pe(a, b, c);
}, Pa:function(a, b, c, d) {
  return Vf(a >>> 0, b >>> 0, c, d >>> 0);
}, Va:function(a, b) {
  Yf("close", a >>> 0, b >>> 0);
}, Xa:function(a, b) {
  Yf("connection", a >>> 0, b >>> 0);
}, _a:function(a, b) {
  Yf("error", a >>> 0, b >>> 0);
}, Ya:function(a, b) {
  Yf("listen", a >>> 0, b >>> 0);
}, Wa:function(a, b) {
  Yf("message", a >>> 0, b >>> 0);
}, Za:function(a, b) {
  Yf("open", a >>> 0, b >>> 0);
}, Rh:function(a, b, c) {
  a >>>= 0;
  c >>>= 0;
  return Xd(() => A(a)(c), b);
}, $a:function(a, b, c, d) {
  b >>>= 0;
  d >>>= 0;
  return (a = Le(a >>> 0)) ? "undefined" != typeof a.onwheel ? Zf(a, b, c, d) : -1 : -4;
}, Uh:() => {
  throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
}, Kh:function(a, b, c, d, e) {
  function f(U) {
    y ? U() : Wd(U);
  }
  a >>>= 0;
  var g = a + 108, h = x[g + 36 >>> 2 >>> 0], l = x[g + 40 >>> 2 >>> 0], n = x[g + 44 >>> 2 >>> 0], q = x[g + 48 >>> 2 >>> 0], t = x[g + 52 >>> 2 >>> 0], y = !!(t & 64), H = U => {
    f(() => {
      h ? A(h)(U) : b?.(U);
    });
  }, C = U => {
    f(() => {
      n ? A(n)(U) : d?.(U);
    });
  }, u = U => {
    f(() => {
      l ? A(l)(U) : c?.(U);
    });
  }, J = U => {
    f(() => {
      q ? A(q)(U) : e?.(U);
    });
  }, w = U => {
    cg(U, H, u, C, J);
  }, L = (U, zg) => {
    dg(U, zg.response, Bb => {
      f(() => {
        h ? A(h)(Bb) : b?.(Bb);
      });
    }, Bb => {
      f(() => {
        h ? A(h)(Bb) : b?.(Bb);
      });
    });
  }, D = U => {
    cg(U, L, u, C, J);
  }, da = N(g), M = !!(t & 16), na = !!(t & 4);
  t = !!(t & 32);
  if ("EM_IDB_STORE" === da) {
    w = x[g + 84 >>> 2 >>> 0], dg(a, p.slice(w, w + x[g + 88 >>> 2 >>> 0]), H, u);
  } else if ("EM_IDB_DELETE" === da) {
    fg(a, H, u);
  } else if (M) {
    if (t) {
      return 0;
    }
    cg(a, na ? L : H, u, C, J);
  } else {
    eg(a, H, t ? u : na ? D : w);
  }
  return a;
}, Na:function(a, b) {
  b >>>= 0;
  var c = b >>> 2;
  b = {alpha:!!m[b >>> 0], depth:!!m[b + 1 >>> 0], stencil:!!m[b + 2 >>> 0], antialias:!!m[b + 3 >>> 0], premultipliedAlpha:!!m[b + 4 >>> 0], preserveDrawingBuffer:!!m[b + 5 >>> 0], powerPreference:gg[v[c + 2 >>> 0]], failIfMajorPerformanceCaveat:!!m[b + 12 >>> 0], Tj:v[c + 4 >>> 0], Xl:v[c + 5 >>> 0], Lj:m[b + 24 >>> 0], Sk:m[b + 25 >>> 0], em:v[c + 7 >>> 0], im:m[b + 32 >>> 0]};
  a = Le(a >>> 0);
  return !a || b.Sk ? 0 : jf(a, b);
}, Ch:function(a) {
  a >>>= 0;
  lf == a && (lf = 0);
  lf === Xe[a] && (lf = null);
  "object" == typeof Q && Q.ml(Xe[a].$i.canvas);
  Xe[a] && Xe[a].$i.canvas && (Xe[a].$i.canvas.Gk = void 0);
  Xe[a] = null;
}, Bh:function(a, b) {
  b >>>= 0;
  if (!b) {
    return -5;
  }
  a = Xe[a >>> 0];
  if (!a) {
    return -3;
  }
  var c = a.$i;
  if (!c) {
    return -3;
  }
  c = c.getContextAttributes();
  m[b >>> 0] = c.alpha;
  m[b + 1 >>> 0] = c.depth;
  m[b + 2 >>> 0] = c.stencil;
  m[b + 3 >>> 0] = c.antialias;
  m[b + 4 >>> 0] = c.premultipliedAlpha;
  m[b + 5 >>> 0] = c.preserveDrawingBuffer;
  v[b + 8 >>> 2 >>> 0] = c.powerPreference && gg.indexOf(c.powerPreference);
  m[b + 12 >>> 0] = c.failIfMajorPerformanceCaveat;
  v[b + 16 >>> 2 >>> 0] = a.version;
  v[b + 20 >>> 2 >>> 0] = 0;
  m[b + 24 >>> 0] = a.attributes.Lj;
  return 0;
}, Ah:function(a) {
  return mf(a >>> 0) ? 0 : -5;
}, Qb:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  var c = 0;
  jg().forEach((d, e) => {
    var f = b + c;
    e = x[a + 4 * e >>> 2 >>> 0] = f;
    for (f = 0; f < d.length; ++f) {
      m[e++ >>> 0] = d.charCodeAt(f);
    }
    m[e >>> 0] = 0;
    c += d.length + 1;
  });
  return 0;
}, Rb:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  var c = jg();
  x[a >>> 2 >>> 0] = c.length;
  var d = 0;
  c.forEach(e => d += e.length + 1);
  x[b >>> 2 >>> 0] = d;
  return 0;
}, Ua:Ud, pa:function(a) {
  try {
    var b = K(a);
    B.close(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.ti;
  }
}, wb:function(a, b) {
  b >>>= 0;
  try {
    var c = K(a);
    m[b >>> 0] = c.tty ? 2 : G(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
    r[b + 2 >>> 1 >>> 0] = 0;
    za[b + 8 >>> 3] = BigInt(0);
    za[b + 16 >>> 3] = BigInt(0);
    return 0;
  } catch (d) {
    if ("undefined" == typeof B || "ErrnoError" !== d.name) {
      throw d;
    }
    return d.ti;
  }
}, Zb:function(a, b, c, d) {
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  try {
    a: {
      var e = K(a);
      a = b;
      for (var f, g = b = 0; g < c; g++) {
        var h = x[a >>> 2 >>> 0], l = x[a + 4 >>> 2 >>> 0];
        a += 8;
        var n = B.read(e, m, h, l, f);
        if (0 > n) {
          var q = -1;
          break a;
        }
        b += n;
        if (n < l) {
          break;
        }
        "undefined" != typeof f && (f += n);
      }
      q = b;
    }
    x[d >>> 2 >>> 0] = q;
    return 0;
  } catch (t) {
    if ("undefined" == typeof B || "ErrnoError" !== t.name) {
      throw t;
    }
    return t.ti;
  }
}, Pb:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  d >>>= 0;
  try {
    if (isNaN(b)) {
      return 61;
    }
    var e = K(a);
    B.Ki(e, b, c);
    za[d >>> 3] = BigInt(e.position);
    e.hj && 0 === b && 0 === c && (e.hj = null);
    return 0;
  } catch (f) {
    if ("undefined" == typeof B || "ErrnoError" !== f.name) {
      throw f;
    }
    return f.ti;
  }
}, Ub:function(a) {
  try {
    var b = K(a);
    return b.vi?.fsync ? b.vi.fsync(b) : 0;
  } catch (c) {
    if ("undefined" == typeof B || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.ti;
  }
}, ua:function(a, b, c, d) {
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  try {
    a: {
      var e = K(a);
      a = b;
      for (var f, g = b = 0; g < c; g++) {
        var h = x[a >>> 2 >>> 0], l = x[a + 4 >>> 2 >>> 0];
        a += 8;
        var n = B.write(e, m, h, l, f);
        if (0 > n) {
          var q = -1;
          break a;
        }
        b += n;
        if (n < l) {
          break;
        }
        "undefined" != typeof f && (f += n);
      }
      q = b;
    }
    x[d >>> 2 >>> 0] = q;
    return 0;
  } catch (t) {
    if ("undefined" == typeof B || "ErrnoError" !== t.name) {
      throw t;
    }
    return t.ti;
  }
}, Ph:function(a, b, c, d) {
  function e(t, y, H, C, u, J) {
    var w = 10 === t ? 28 : 16;
    u = 10 === t ? pc(u) : nc(u);
    w = Df(w);
    !ic(w, t, u, J) || Qa();
    u = Df(32);
    v[u + 4 >>> 2 >>> 0] = t;
    v[u + 8 >>> 2 >>> 0] = y;
    v[u + 12 >>> 2 >>> 0] = H;
    x[u + 24 >>> 2 >>> 0] = C;
    x[u + 20 >>> 2 >>> 0] = w;
    v[u + 16 >>> 2 >>> 0] = 10 === t ? 28 : 16;
    v[u + 28 >>> 2 >>> 0] = 0;
    return u;
  }
  a >>>= 0;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  var f = 0, g = 0, h = 0, l = 0, n = 0, q = 0;
  c && (h = v[c >>> 2 >>> 0], l = v[c + 4 >>> 2 >>> 0], n = v[c + 8 >>> 2 >>> 0], q = v[c + 12 >>> 2 >>> 0]);
  n && !q && (q = 2 === n ? 17 : 6);
  !n && q && (n = 17 === q ? 2 : 1);
  0 === q && (q = 6);
  0 === n && (n = 1);
  if (!a && !b) {
    return -2;
  }
  if (h & -1088 || 0 !== c && v[c >>> 2 >>> 0] & 2 && !a) {
    return -1;
  }
  if (h & 32) {
    return -2;
  }
  if (0 !== n && 1 !== n && 2 !== n) {
    return -7;
  }
  if (0 !== l && 2 !== l && 10 !== l) {
    return -6;
  }
  if (b && (b = N(b), g = parseInt(b, 10), isNaN(g))) {
    return h & 1024 ? -2 : -8;
  }
  if (!a) {
    return 0 === l && (l = 2), 0 === (h & 1) && (2 === l ? f = sg(2130706433) : f = [0, 0, 0, sg(1)]), a = e(l, n, q, null, f, g), x[d >>> 2 >>> 0] = a, 0;
  }
  a = N(a);
  f = fc(a);
  if (null !== f) {
    if (0 === l || 2 === l) {
      l = 2;
    } else if (10 === l && h & 8) {
      f = [0, 0, sg(65535), f], l = 10;
    } else {
      return -2;
    }
  } else {
    if (f = hc(a), null !== f) {
      if (0 === l || 10 === l) {
        l = 10;
      } else {
        return -2;
      }
    }
  }
  if (null != f) {
    return a = e(l, n, q, a, f, g), x[d >>> 2 >>> 0] = a, 0;
  }
  if (h & 4) {
    return -2;
  }
  a = mc(a);
  f = fc(a);
  0 === l ? l = 2 : 10 === l && (f = [0, 0, sg(65535), f]);
  a = e(l, n, q, null, f, g);
  x[d >>> 2 >>> 0] = a;
  return 0;
}, Pf:function(a, b) {
  a >>>= 0;
  ib(p.subarray(a >>> 0, a + (b >>> 0) >>> 0));
  return 0;
}, kb:tg, N:ug, oa:vg, W:wg, sh:xg, A:yg, f:Ag, P:Bg, c:Cg, g:Dg, vh:Eg, o:Fg, x:Gg, ba:Hg, wh:Ig, R:Jg, ja:Kg, ma:Lg, xh:Mg, Xc:Ng, ha:Og, G:Pg, _:Qg, Ga:Rg, fa:Sg, cb:Tg, ib:Ug, hb:Vg, C:Wg, S:Xg, H:Yg, Gh:Zg, Fa:$g, O:ah, ca:bh, gd:ch, gh:dh, p:eh, sa:fh, j:gh, uh:hh, lb:ih, d:jh, qh:kh, ea:lh, th:mh, e:nh, rh:oh, i:ph, n:qh, E:rh, ga:sh, J:th, L:uh, Ha:vh, Z:wh, F:xh, jb:yh, u:zh, ka:Ah, Y:Bh, ab:Ch, Q:Dh, I:Eh, V:Fh, K:Gh, Th:Hh, Qh:Ih, Xg:Jh, bb:function() {
  return "undefined" !== typeof Asyncify;
}, Ea:function() {
  return "undefined" !== typeof Asyncify && !!Asyncify.Ul && (!!WebAssembly.Function || !!WebAssembly.Suspending);
}, ia:function(a) {
  return a >>> 0;
}, Hb:Td, za:function() {
  let a = k.vk;
  if (void 0 != a) {
    k.vk = void 0;
    var b = k.Fj;
    setTimeout(() => {
      k.Fj === b && a();
    });
  }
}}, Z = function() {
  function a(c) {
    Z = c.exports;
    Z = Lh();
    va = Z.Yh;
    Ca();
    $a = Z._h;
    Ea.unshift(Z.Zh);
    Pa();
    return Z;
  }
  var b = {a:Kh};
  Oa();
  if (k.instantiateWasm) {
    try {
      return k.instantiateWasm(b, a);
    } catch (c) {
      ta(`Module.instantiateWasm callback failed with error: ${c}`), ba(c);
    }
  }
  Sa ??= Ra("wasm_todo.wasm") ? "wasm_todo.wasm" : k.locateFile ? k.locateFile("wasm_todo.wasm", ma) : ma + "wasm_todo.wasm";
  Wa(b, function(c) {
    a(c.instance);
  }).catch(ba);
  return {};
}(), Mh = k._main = (a, b) => (Mh = k._main = Z.$h)(a, b), ld = a => (ld = Z.ai)(a), Df = a => (Df = Z.bi)(a), sg = a => (sg = Z.ci)(a), gc = a => (gc = Z.di)(a), oc = a => (oc = Z.ei)(a), kd = a => (kd = Z.fi)(a), Cb = (a, b) => (Cb = Z.gi)(a, b), Y = (a, b) => (Y = Z.hi)(a, b), eb = a => (eb = Z.ii)(a), X = a => (X = Z.ji)(a), Wf = a => (Wf = Z.ki)(a), W = () => (W = Z.li)(), rg = a => (rg = Z.mi)(a), pg = a => (pg = Z.ni)(a), fb = (a, b, c) => (fb = Z.oi)(a, b, c), qg = a => (qg = Z.pi)(a);
function nh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Ag(a, b) {
  var c = W();
  try {
    return A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function eh(a) {
  var b = W();
  try {
    A(a)();
  } catch (c) {
    X(b);
    if (c !== c + 0) {
      throw c;
    }
    Y(1, 0);
  }
}
function Dg(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function ph(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function yg(a) {
  var b = W();
  try {
    return A(a)();
  } catch (c) {
    X(b);
    if (c !== c + 0) {
      throw c;
    }
    Y(1, 0);
  }
}
function jh(a, b, c) {
  var d = W();
  try {
    A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function Zg(a, b, c, d, e, f) {
  var g = W();
  try {
    return A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
    return 0n;
  }
}
function qh(a, b, c, d, e, f) {
  var g = W();
  try {
    A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function rh(a, b, c, d, e, f, g) {
  var h = W();
  try {
    A(a)(b, c, d, e, f, g);
  } catch (l) {
    X(h);
    if (l !== l + 0) {
      throw l;
    }
    Y(1, 0);
  }
}
function dh(a, b) {
  var c = W();
  try {
    return A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
    return 0n;
  }
}
function Jh(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Cg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function Fg(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Eh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function gh(a, b) {
  var c = W();
  try {
    A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function zh(a, b, c, d, e, f) {
  var g = W();
  try {
    A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function Yg(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
    return 0n;
  }
}
function Pg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function xh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Xg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
    return 0n;
  }
}
function Gg(a, b, c, d, e, f) {
  var g = W();
  try {
    return A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function ah(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
    return 0n;
  }
}
function Wg(a, b) {
  var c = W();
  try {
    return A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
    return 0n;
  }
}
function bh(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
    return 0n;
  }
}
function Og(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function ch(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
    return 0n;
  }
}
function Ng(a, b, c, d, e, f, g) {
  var h = W();
  try {
    return A(a)(b, c, d, e, f, g);
  } catch (l) {
    X(h);
    if (l !== l + 0) {
      throw l;
    }
    Y(1, 0);
  }
}
function Fh(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function sh(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Ah(a, b, c, d, e, f, g) {
  var h = W();
  try {
    A(a)(b, c, d, e, f, g);
  } catch (l) {
    X(h);
    if (l !== l + 0) {
      throw l;
    }
    Y(1, 0);
  }
}
function Jg(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    return A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Kg(a, b, c, d, e, f, g, h, l) {
  var n = W();
  try {
    return A(a)(b, c, d, e, f, g, h, l);
  } catch (q) {
    X(n);
    if (q !== q + 0) {
      throw q;
    }
    Y(1, 0);
  }
}
function uh(a, b, c, d, e, f, g, h, l, n) {
  var q = W();
  try {
    A(a)(b, c, d, e, f, g, h, l, n);
  } catch (t) {
    X(q);
    if (t !== t + 0) {
      throw t;
    }
    Y(1, 0);
  }
}
function Sg(a, b, c, d, e, f) {
  var g = W();
  try {
    return A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function Dh(a, b, c) {
  var d = W();
  try {
    A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function Qg(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Bg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function ih(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function tg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function ug(a, b, c, d) {
  var e = W();
  try {
    return A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function vh(a, b, c, d, e, f, g, h, l, n, q) {
  var t = W();
  try {
    A(a)(b, c, d, e, f, g, h, l, n, q);
  } catch (y) {
    X(t);
    if (y !== y + 0) {
      throw y;
    }
    Y(1, 0);
  }
}
function th(a, b, c, d, e, f, g, h, l) {
  var n = W();
  try {
    A(a)(b, c, d, e, f, g, h, l);
  } catch (q) {
    X(n);
    if (q !== q + 0) {
      throw q;
    }
    Y(1, 0);
  }
}
function wh(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function fh(a, b, c, d, e, f, g, h, l) {
  var n = W();
  try {
    A(a)(b, c, d, e, f, g, h, l);
  } catch (q) {
    X(n);
    if (q !== q + 0) {
      throw q;
    }
    Y(1, 0);
  }
}
function Bh(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Hg(a, b, c, d, e, f, g) {
  var h = W();
  try {
    return A(a)(b, c, d, e, f, g);
  } catch (l) {
    X(h);
    if (l !== l + 0) {
      throw l;
    }
    Y(1, 0);
  }
}
function lh(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Gh(a, b, c, d, e, f) {
  var g = W();
  try {
    A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function yh(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Ug(a, b) {
  var c = W();
  try {
    return A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function Rg(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function $g(a, b, c, d, e, f, g, h, l) {
  var n = W();
  try {
    return A(a)(b, c, d, e, f, g, h, l);
  } catch (q) {
    X(n);
    if (q !== q + 0) {
      throw q;
    }
    Y(1, 0);
    return 0n;
  }
}
function Vg(a, b, c) {
  var d = W();
  try {
    return A(a)(b, c);
  } catch (e) {
    X(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function wg(a, b, c, d, e, f) {
  var g = W();
  try {
    return A(a)(b, c, d, e, f);
  } catch (h) {
    X(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function Tg(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function vg(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Ch(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Hh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Ih(a, b) {
  var c = W();
  try {
    A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function Mg(a, b, c, d, e, f, g, h, l, n, q) {
  var t = W();
  try {
    return A(a)(b, c, d, e, f, g, h, l, n, q);
  } catch (y) {
    X(t);
    if (y !== y + 0) {
      throw y;
    }
    Y(1, 0);
  }
}
function Ig(a, b, c, d, e, f, g, h) {
  var l = W();
  try {
    return A(a)(b, c, d, e, f, g, h);
  } catch (n) {
    X(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Eg(a, b, c, d, e) {
  var f = W();
  try {
    return A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function hh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function mh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Lg(a, b, c, d, e, f, g, h, l, n) {
  var q = W();
  try {
    return A(a)(b, c, d, e, f, g, h, l, n);
  } catch (t) {
    X(q);
    if (t !== t + 0) {
      throw t;
    }
    Y(1, 0);
  }
}
function xg(a, b) {
  var c = W();
  try {
    return A(a)(b);
  } catch (d) {
    X(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function oh(a, b, c, d, e) {
  var f = W();
  try {
    A(a)(b, c, d, e);
  } catch (g) {
    X(f);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function kh(a, b, c, d) {
  var e = W();
  try {
    A(a)(b, c, d);
  } catch (f) {
    X(e);
    if (f !== f + 0) {
      throw f;
    }
    Y(1, 0);
  }
}
function Lh() {
  var a = Z;
  a = Object.assign({}, a);
  var b = c => d => c(d) >>> 0;
  a.bi = b(a.bi);
  a.fi = b(a.fi);
  a.gi = (c => (d, e) => c(d, e) >>> 0)(a.gi);
  a.ki = b(a.ki);
  a.li = (c => () => c() >>> 0)(a.li);
  a.pi = b(a.pi);
  return a;
}
k.callMain = Nh;
k.UTF16ToString = Ad;
k.stringToUTF16 = Bd;
k.JSEvents = Q;
k.specialHTMLTargets = Ke;
k.FS = B;
var Oh, Ph;
Na = function Qh() {
  Oh || Rh();
  Oh || (Na = Qh);
};
function Nh(a = []) {
  var b = Mh;
  a.unshift(ka);
  var c = a.length, d = Wf(4 * (c + 1)), e = d;
  a.forEach(g => {
    x[e >>> 2 >>> 0] = Xf(g);
    e += 4;
  });
  x[e >>> 2 >>> 0] = 0;
  try {
    var f = b(c, d);
    Ud(f, !0);
    return f;
  } catch (g) {
    return Rd(g);
  }
}
function Rh() {
  var a = ja;
  function b() {
    if (!Oh && (Oh = 1, k.calledRun = 1, !wa)) {
      dc.root = B.Bi(dc, {}, null);
      k.noFSInit || B.Qj || B.Pj();
      B.qk = !1;
      Ja(Ea);
      Ja(Fa);
      aa(k);
      k.onRuntimeInitialized?.();
      Sh && Nh(a);
      var c = k.postRun;
      c && ("function" == typeof c && (c = [c]), c.forEach(Ka));
      Ja(Ga);
    }
  }
  if (!(0 < La)) {
    if (!Ph && (Ph = 1, Ha(), 0 < La)) {
      return;
    }
    k.setStatus ? (k.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => k.setStatus(""), 1);
      b();
    }, 1)) : b();
  }
}
if (k.preInit) {
  for ("function" == typeof k.preInit && (k.preInit = [k.preInit]); 0 < k.preInit.length;) {
    k.preInit.pop()();
  }
}
var Sh = !0;
k.noInitialRun && (Sh = !1);
Rh();
moduleRtn = ca;



  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = wasm_todo_entry;
else if (typeof define === 'function' && define['amd'])
  define([], () => wasm_todo_entry);
