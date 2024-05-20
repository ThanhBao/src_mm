"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[739], {
    2739: function(e, t, r) {
        r.r(t),
        r.d(t, {
            default: function() {
                return p
            }
        });
        var l = r(7437)
          , n = r(1235)
          , a = r.n(n);
        let s = async e=>{
            let t = document.createElement("a");
            t.href = URL.createObjectURL(e),
            t.download = "meme" + Math.floor(1e6 * Math.random()) + ".jpg",
            t.click()
        }
          , o = async(e,t,r)=>{
            if (t.value)
                return new Promise(r=>{
                    let l = new (a()).Layer;
                    e.add(l);
                    let n = new Image;
                    n.onload = async()=>{
                        let e = new (a()).Image({
                            x: 0,
                            y: 0,
                            image: n,
                            width: 1024,
                            height: 1024,
                            rotation: 0
                        });
                        l.add(e),
                        l.draw(),
                        r(void 0)
                    }
                    ,
                    n.src = "/assets/" + t.name + "/" + t.value
                }
                )
        }
          , i = async e=>{
            let t = document.createElement("div");
            t.id = "previewContainer",
            document.body.appendChild(t),
            t.style.display = "none";
            let r = new (a()).Stage({
                container: "previewContainer",
                width: 1024,
                height: 1024
            });
            for (let t of e) {
                var l;
                await o(r, t, null !== (l = null == t ? void 0 : t.tempImg) && void 0 !== l ? l : null == t ? void 0 : t.src)
            }
            let n = null;
            n = function(e, t) {
                let r = e.split(",")
                  , l = r[0].match(/:(.*?);/)[1]
                  , n = atob(r[1])
                  , a = n.length
                  , s = new Uint8Array(a);
                for (; a--; )
                    s[a] = n.charCodeAt(a);
                return new File([s],t,{
                    type: l
                })
            }(r.toDataURL({
                mimeType: "image/jpg"
            }), "preview.jpg"),
            await s(n),
            r.destroy(),
            t.remove()
        }
        ;
        var c = r(2265)
          , d = r(2466)
          , u = e=>{
            let {layer: t, scale: r} = e
              , [n,a] = (0,
            c.useState)(void 0);
            return (0,
            c.useEffect)(()=>{
                let e = new Image;
                if (!t.value)
                    return a(null);
                e.src = "./assets/" + t.name + "/" + t.value,
                e.crossOrigin = "Anonymous",
                e.onload = async()=>{
                    a(e)
                }
            }
            , [t]),
            (0,
            l.jsx)(l.Fragment, {
                children: n && (0,
                l.jsx)(d.Ee, {
                    image: n,
                    x: 0,
                    y: 0,
                    scaleX: r,
                    scaleY: r
                })
            })
        }
          , m = r(3853)
          , f = r(1942)
          , h = r(3872)
          , x = r(7261)
          , p = e=>{
            let {canvasW: t, canvasH: r, scale: n, layers: a, randomizeLayers: s, resetLayers: o} = e
              , p = c.useRef(null)
              , v = c.useRef(null);
            return (0,
            l.jsxs)("div", {
                id: "canvas-parent",
                className: "flex overflow-hidden flex-col justify-center items-center w-full laptop:w-auto laptop:flex-shrink-0",
                children: [(0,
                l.jsx)(d.Hf, {
                    ref: v,
                    width: t,
                    height: r,
                    className: "border-8 border-[#764824] rounded-[16px] overflow-hidden",
                    id: "canvas-stage",
                    children: (0,
                    l.jsx)(d.mh, {
                        ref: p,
                        children: a.map((e,t)=>(0,
                        l.jsx)(u, {
                            layer: e,
                            scale: n
                        }, t))
                    })
                }), (0,
                l.jsxs)("div", {
                    onClick: ()=>o(),
                    className: "select-none mt-4 flex justify-center items-center w-full rounded-full py-4 bg-[#FDF6E7] border-4 border-[#764824] cursor-pointer hover:scale-95 transition-all",
                    children: [(0,
                    l.jsx)(x.zoN, {
                        className: "w-5 h-5 text-primary"
                    }), (0,
                    l.jsx)(m.Z, {
                        variant: "h2",
                        className: "text-center font-extrabold pl-4 text-primary",
                        color: "100",
                        children: "RESET MICHI"
                    })]
                }), (0,
                l.jsxs)("div", {
                    onClick: ()=>s(),
                    className: "select-none mt-4 flex justify-center items-center w-full rounded-full py-4 bg-[#FDF6E7] border-4 border-[#764824] cursor-pointer hover:scale-95 transition-all",
                    children: [(0,
                    l.jsx)(f.zLx, {
                        className: "w-5 h-5 text-primary"
                    }), (0,
                    l.jsx)(m.Z, {
                        variant: "h2",
                        className: "text-center font-extrabold pl-4 text-primary",
                        color: "100",
                        children: "GENERATE RANDOM"
                    })]
                }), (0,
                l.jsxs)("div", {
                    onClick: ()=>i(a),
                    className: "select-none mt-4 flex justify-center items-center w-full rounded-full py-4 bg-[#764824] border-4 border-[#FDF6E7] cursor-pointer hover:scale-95 transition-all",
                    children: [(0,
                    l.jsx)(h.aBF, {
                        className: "w-5 h-5 text-[#FDF6E7]"
                    }), (0,
                    l.jsx)(m.Z, {
                        variant: "h2",
                        className: "text-center font-extrabold pl-4 text-[#FDF6E7]",
                        color: "custom",
                        children: "DOWNLOAD"
                    })]
                })]
            })
        }
    }
}]);
