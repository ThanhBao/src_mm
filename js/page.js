(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    193: function(n, e, a) {
        Promise.resolve().then(a.bind(a, 8415))
    },
    3853: function(n, e, a) {
        "use strict";
        a.d(e, {
            Z: function() {
                return l
            }
        });
        var t = a(7437);
        function r(n) {
            return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase().replace(/_/g, " ").replace(/-/g, " ")
        }
        a(2265);
        var l = n=>{
            let {children: e, color: a, className: l, humanized: p, variant: i, onClick: o} = n
              , s = "".concat(l ? l + " " : "").concat("custom" !== a ? "text-".concat(a) : "");
            return (0,
            t.jsx)(t.Fragment, {
                children: "h1" === i ? (0,
                t.jsx)("h1", {
                    className: s + " text-h1",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : "h2" === i ? (0,
                t.jsx)("h2", {
                    className: s + " text-h2",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : "h3" === i ? (0,
                t.jsx)("h3", {
                    className: s + " text-h3",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : "h4" === i ? (0,
                t.jsx)("h4", {
                    className: s + " text-h4",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : "h5" === i ? (0,
                t.jsx)("h5", {
                    className: s + " text-h5",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : "h6" === i ? (0,
                t.jsx)("h6", {
                    className: s + " text-h6",
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                }) : (0,
                t.jsx)("p", {
                    className: "".concat(s, " ").concat("sub" === i ? "text-sub" : "text-body"),
                    onClick: ()=>{
                        o && o()
                    }
                    ,
                    children: p && e ? r(e.toString()) : e
                })
            })
        }
    },
    8415: function(n, e, a) {
        "use strict";
        a.r(e),
        a.d(e, {
            default: function() {
                return h
            }
        });
        var t = a(7437)
          , r = a(2265)
          , l = a(6648)
          , p = a(4440)
          , i = a(9690)
          , o = a(1942)
          , s = a(3853);
        function g() {
            var n, e, a;
            let l = (0,
            r.useContext)(p.$8)
              , i = l.useIsVisible("first", !1) || (null !== (a = null == l ? void 0 : null === (e = l.scrollContainer) || void 0 === e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : n.scrollLeft) && void 0 !== a ? a : 0) < 10;
            return (0,
            t.jsx)("div", {
                onClick: ()=>l.scrollPrev(),
                className: "h-[84px] left-0 flex justify-end items-end mt-0 pr-4 transition-all  ".concat(i ? "opacity-10 cursor-not-allowed" : "opacity-100 cursor-pointer"),
                children: (0,
                t.jsx)("button", {
                    className: "w-[42px] h-[84px] rounded-xl flex justify-center items-center border-2 border-[#764824] transition-all hover:bg-white bg-[#FDF6E7] ".concat(i ? "cursor-not-allowed" : "cursor-pointer"),
                    children: (0,
                    t.jsx)(o.bUI, {
                        className: "w-5 h-5 text-[#764824]"
                    })
                })
            })
        }
        function c() {
            var n, e, a, l, i, s, g;
            let c = (0,
            r.useContext)(p.$8)
              , d = (null == c ? void 0 : c.scrollContainer) && (null == c ? void 0 : null === (n = c.scrollContainer) || void 0 === n ? void 0 : n.current) ? (null == c ? void 0 : null === (a = c.scrollContainer) || void 0 === a ? void 0 : null === (e = a.current) || void 0 === e ? void 0 : e.scrollWidth) - (null == c ? void 0 : null === (i = c.scrollContainer) || void 0 === i ? void 0 : null === (l = i.current) || void 0 === l ? void 0 : l.scrollLeft) - (null == c ? void 0 : null === (g = c.scrollContainer) || void 0 === g ? void 0 : null === (s = g.current) || void 0 === s ? void 0 : s.clientWidth) : 0
              , u = c.useIsVisible("last", !1) || d < 10;
            return (0,
            t.jsx)("div", {
                onClick: ()=>c.scrollNext(),
                className: "h-[84px] right-0 flex justify-end items-end mt-0 pl-4 transition-all ".concat(u ? "opacity-10 cursor-not-allowed" : "opacity-100 cursor-pointer"),
                children: (0,
                t.jsx)("button", {
                    className: "w-[42px] h-[84px] rounded-xl flex justify-center items-center border-2 border-[#764824] transition-all hover:bg-white bg-[#FDF6E7] ".concat(u ? "cursor-not-allowed" : "cursor-pointer"),
                    children: (0,
                    t.jsx)(o.Dli, {
                        className: "w-5 h-5 text-[#764824]"
                    })
                })
            })
        }
        a(1223);
        var d = n=>{
            let {layers: e, config: a, selectLayer: r} = n
              , o = [...a.layers].sort((n,e)=>n.order - e.order);
            return (0,
            t.jsxs)("div", {
                className: "mt-8 laptop:mt-0 flex justify-start items-start flex-col w-full laptop:w-auto laptop:flex-grow px-4 laptop:ml-16 laptop:px-16 py-12 overflow-hidden laptop:border-l-2 border-[#764824]",
                children: [(0,
                t.jsx)(s.Z, {
                    variant: "h1",
                    className: "font-extrabold text-primary",
                    color: "custom",
                    children: "CREATE YOUR MICHI"
                }), o.map((n,a)=>{
                    if (!n.editable || 0 === n.options.length)
                        return null;
                    let o = e.find(e=>e.name === n.name);
                    return o ? (!0 === n.nullable && null !== n.options[0] && n.options.unshift(null),
                    (0,
                    t.jsxs)("div", {
                        className: "flex flex-col mt-8 w-full overflow-hidden relative",
                        id: "generator-row-".concat(a),
                        children: [(0,
                        t.jsx)(s.Z, {
                            variant: "h3",
                            className: "font-bold text-primary text-[24px] uppercase",
                            color: "custom",
                            children: n.type
                        }), (0,
                        t.jsx)(p.lS, {
                            LeftArrow: g,
                            RightArrow: c,
                            wrapperClassName: "scroll-menu-wrapper",
                            scrollContainerClassName: "scroll-menu-container gap-3 overflow-x-hidden relative",
                            children: n.options.map((e,a)=>(0,
                            t.jsx)("div", {
                                className: "flex justify-center items-center cursor-pointer w-[84px] h-[84px] border-[#764824] rounded-xl overflow-hidden transition-all ".concat(o.value === e ? "border-4 bg-white" : "border"),
                                onClick: ()=>r(n.type, e),
                                children: null === e ? (0,
                                t.jsx)(i.cq1, {
                                    className: "text-[#764824] w-7 h-7"
                                }) : (0,
                                t.jsx)(l.default, {
                                    src: "/assets/".concat(n.name, "/").concat(e, "?index=").concat(a),
                                    alt: "".concat(n.type, " ").concat(e),
                                    width: 80,
                                    height: 80
                                })
                            }, a))
                        })]
                    }, a)) : null
                }
                )]
            })
        }
        ;
        let u = (0,
        a(7818).default)(()=>Promise.all([a.e(212), a.e(240), a.e(466), a.e(739)]).then(a.bind(a, 2739)), {
            loadableGenerated: {
                webpack: ()=>[2739]
            },
            ssr: !1
        });
        var m = ()=>{
            var n, e, a, l, p, i, o, s;
            let g = [{
                name: "back-accessories",
                files: ["ansem.png", "aura.png", "bear_dead.png", "blue_aura.png", "bull.png", "ghost.png", "golf.png", "naruto.png", "pigeon.png", "red_aura.png", "smoke.png", "stan2-removebg-preview.png", "tiger.png", "ufo.png", "ufo_2.png", "wojak.png"]
            }, {
                name: "backgrounds",
                files: ["classic.png", "merlin.png", "moon.png", "standup.png"]
            }, {
                name: "face",
                files: ["animeface.png", "beat_eyes.png", "big_smile.png", "chadface.png", "cheek.png", "cigar.png", "cute.png", "cute_anime_eyes.png", "cute_eyes.png", "happy_eyes.png", "heisenbeard.png", "mask.png", "mike.png", "mouth.png", "smile.png", "white_beard.png"]
            }, {
                name: "cat",
                files: ["brown.png", "cat_a.png", "cat_black.png", "cloud.png", "cube.png", "green.png", "michiwhat.png", "party.png", "purp.png", "scary2.png", "white.png"]
            }, {
                name: "pants",
                files: ["beige.png", "black.png", "blue 2.png", "blue.png", "green.png", "grey.png", "lime.png", "orange.png", "pink.png", "yellow.png"]
            }, {
                name: "outfits",
                files: ["GREY.png", "ansem.png", "black.png", "blue 2.png", "blue.png", "blurorgold.png", "brazil.png", "cb.png", "coingecko.png", "const 2.png", "const.png", "cowboy.png", "dress.png", "dress1.png", "dress10.png", "dress11.png", "dress2.png", "dress3.png", "dress4.png", "dress5.png", "dress6.png", "dress7.png", "dress8.png", "dress9.png", "frank.png", "ganja-removebg-preview-2.png", "general.png", "goku.png", "guerrero.png", "heisenmichiwomask-removebg-preview.png", "jfc.png", "joker.png", "khaki.png", "kitty.png", "lowride.png", "madrid.png", "marshmellow.png", "mich_Q_hulk-removebg-preview.png", "mortal.png", "muzan.png", "nance.png", "naruto.png", "pal_nohead.png", "palenquera.png", "panda.png", "pink.png", "psyko.png", "red.png", "smoking.png", "solsupermansuit.png", "spider.png", "spidergray.png", "spiderorange.png", "spiderpink.png", "spiderpuprpl.png", "spiderred.png", "spideryellow.png", "squid.png", "supermansuit.png", "twitch.png", "virus.png", "white.png", "wonka.png", "xa.png", "yellow.png", "yolo.png", "zenitsu.png"]
            }, {
                name: "front-accessories",
                files: ["airpods.png", "airpodscable.png", "americaburger.png", "an94.png", "assault.png", "balloon.png", "banda1.png", "banda2.png", "banda3.png", "banda4.png", "banda5.png", "banda6.png", "banda7.png", "banjo.png", "big_balls.png", "blade.png", "breakfast.png", "china.png", "death.png", "demon_sword.png", "dj-bass.png", "dj.png", "doom_shooter.png", "double.png", "dr_sevs.png", "fl.png", "football.png", "gunn.png", "hammer.png", "honor.png", "kusarigama.png", "lightning_sword.png", "lightsaber.png", "lv.png", "mac.png", "magic.png", "michi_lisa.png", "monster.png", "pistol.png", "ray_gun.png", "rocket.png", "rog.png", "rubik.png", "rune.png", "shield.png", "shovel.png", "sword.png", "sword2.png", "sword_mc.png", "tea.png", "thor.png", "tyson.png", "weap.png", "zoro.png"]
            }, {
                name: "hats",
                files: ["alien.png", "anime2.png", "ans.png", "ansem.png", "aot.png", "ape.png", "ash.png", "atchhat.png", "australia.png", "basic_cap.png", "bearf.png", "blackhat.png", "blue_party_hat.png", "cb.png", "cg.png", "chuck.png", "const.png", "constr2.png", "cowboy.png", "cowboy_2.png", "darth.png", "death_note.png", "dm.png", "fancy.png", "frank.png", "frog_hat.png", "gang1.png", "gang2.png", "gang3.png", "gang4.png", "gang5.png", "gang6.png", "gang7.png", "ganja.png", "general.png", "ghost.png", "goku.png", "gucci.png", "habibi.png", "hair.png", "hair_gray.png", "hairbrown.png", "halo.png", "headphone.png", "horse.png", "hulk.png", "jfc.png", "joker.png", "king.png", "kittyhead.png", "lfc.png", "magic.png", "marsh.png", "mcdonalds.png", "mexican_hat.png", "mich_Q_guerrero-removebg-preview-2.png", "mich_Q_psyko-removebg-preview-2.png", "mika.png", "muzan.png", "naruto.png", "pal.png", "palenquera.png", "pickachu.png", "purple_hat.png", "putin.png", "red_hair.png", "red_party_hat.png", "rice.png", "rune.png", "sadpepe.png", "scar.png", "screamask.png", "seuss.png", "sharkcat.png", "sku.png", "superman_hair.png", "tanjiro.png", "teemo.png", "turkis.png", "v.png", "viking.png", "white_hair.png", "yugi.png", "zenitsu.png", "zoro.png"]
            }]
              , c = {
                layers: [{
                    type: "Background",
                    name: "backgrounds",
                    editable: !0,
                    initial: "classic.png",
                    nullable: !1,
                    options: (null === (n = g.find(n=>"backgrounds" === n.name)) || void 0 === n ? void 0 : n.files) || [],
                    order: 6
                }, {
                    type: "Back Accessory",
                    name: "back-accessories",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    options: (null === (e = g.find(n=>"back-accessories" === n.name)) || void 0 === e ? void 0 : e.files) || [],
                    order: 3
                }, {
                    type: "Cat",
                    name: "cat",
                    editable: !0,
                    initial: "cat_a.png",
                    nullable: !1,
                    options: (null === (a = g.find(n=>"cat" === n.name)) || void 0 === a ? void 0 : a.files) || [],
                    order: 0
                }, {
                    type: "Face",
                    name: "face",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    options: (null === (l = g.find(n=>"face" === n.name)) || void 0 === l ? void 0 : l.files) || [],
                    order: 2
                }, {
                    type: "Outfit",
                    name: "outfits",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    options: (null === (p = g.find(n=>"outfits" === n.name)) || void 0 === p ? void 0 : p.files) || [],
                    order: 5
                }, {
                    type: "Pant",
                    name: "pants",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    randomizable: !1,
                    options: (null === (i = g.find(n=>"pants" === n.name)) || void 0 === i ? void 0 : i.files) || [],
                    order: 4
                }, {
                    type: "Hat",
                    name: "hats",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    options: (null === (o = g.find(n=>"hats" === n.name)) || void 0 === o ? void 0 : o.files) || [],
                    order: 1
                }, {
                    type: "Front Accessory",
                    name: "front-accessories",
                    editable: !0,
                    initial: null,
                    nullable: !0,
                    options: (null === (s = g.find(n=>"front-accessories" === n.name)) || void 0 === s ? void 0 : s.files) || [],
                    order: 2
                }]
            }
              , [m,h] = (0,
            r.useState)(1)
              , [f,b] = (0,
            r.useState)(1024)
              , [v,y] = (0,
            r.useState)(1024)
              , [w,x] = (0,
            r.useState)(1024)
              , [k,_] = (0,
            r.useState)(null)
              , [j,C] = (0,
            r.useState)([])
              , N = ()=>{
                var n;
                let e = null === (n = document.getElementById("meme-container")) || void 0 === n ? void 0 : n.getBoundingClientRect().width;
                return e ? e < 1440 && e > 768 ? "tablet" : e < 768 ? "mobile" : "desktop" : "desktop"
            }
            ;
            return (0,
            r.useEffect)(()=>{
                C(c.layers.map(n=>({
                    type: n.type,
                    name: n.name,
                    value: n.initial
                })))
            }
            , []),
            (0,
            r.useEffect)(()=>{
                let n = ()=>{
                    var n;
                    let e = null === (n = document.getElementById("meme-container")) || void 0 === n ? void 0 : n.getBoundingClientRect().width
                      , a = 0;
                    if (e) {
                        "desktop" === N() ? b(a = 500) : "tablet" === N() ? b(a = 400) : b(a = e - 16),
                        y(a),
                        x(a),
                        h(a / 1024);
                        return
                    }
                }
                ;
                n(),
                window.addEventListener("resize", n);
                let e = setInterval(()=>{
                    n()
                }
                , 500);
                return ()=>{
                    window.removeEventListener("resize", n),
                    clearInterval(e)
                }
            }
            , []),
            (0,
            t.jsxs)("section", {
                className: "flex flex-col laptop:flex-row justify-start items-start w-full overflow-hidden",
                id: "meme-container",
                children: [(0,
                t.jsx)(u, {
                    canvasW: f,
                    canvasH: v,
                    stageSize: w,
                    scale: m,
                    layers: j,
                    setLayers: C,
                    error: k,
                    setError: _,
                    randomizeLayers: ()=>{
                        C(j.map(n=>{
                            var e, a, t, r;
                            let l = (null === (e = c.layers.find(e=>e.type === n.type)) || void 0 === e ? void 0 : e.options) || []
                              , p = Math.floor(Math.random() * (l.length + 1));
                            return (null === (a = c.layers.find(e=>e.type === n.type)) || void 0 === a ? void 0 : a.randomizable) === !1 ? n : {
                                ...n,
                                value: p === l.length ? null !== (r = null === (t = c.layers.find(e=>e.type === n.type)) || void 0 === t ? void 0 : t.initial) && void 0 !== r ? r : null : l[p]
                            }
                        }
                        ))
                    }
                    ,
                    resetLayers: ()=>{
                        C(j.map(n=>{
                            var e, a;
                            return {
                                ...n,
                                value: null !== (a = null === (e = c.layers.find(e=>e.type === n.type)) || void 0 === e ? void 0 : e.initial) && void 0 !== a ? a : null
                            }
                        }
                        ))
                    }
                }), (0,
                t.jsx)(d, {
                    layers: j,
                    config: c,
                    selectLayer: (n,e)=>{
                        C(j.map(a=>a.type === n ? {
                            ...a,
                            value: e
                        } : a))
                    }
                })]
            })
        }
        ;
        function h() {
            return (0,
            r.useEffect)(()=>{
                window.parent.postMessage({
                    frameHeight: document.body.scrollHeight,
                    frameId: "meme-generator"
                }, "*"),
                window.addEventListener("resize", ()=>{
                       window.parent.postMessage({
                        frameHeight: document.body.scrollHeight,
                        frameId: "meme-generator"
                    }, "*")
                }
                )
            }
            , []),
            (0,
            t.jsx)("main", {
                className: "w-full h-auto bg-primary",
                id: "wrapper",
                children: (0,
                t.jsx)(m, {})
            })
        }
    }
}, function(n) {
    n.O(0, [680, 699, 259, 707, 971, 23, 744], function() {
        return n(n.s = 193)
    }),
    _N_E = n.O()
}
]);
