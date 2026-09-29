/* Tandem hero animation: a teacher's note rewritten by Tandem. Mount: <div class="tandem-note"></div> */
(()=>{
const CSS=`.tandem-note{position:relative;container-type:inline-size;overflow:hidden;background:#ECE6FF}
.tandem-note::before,.tandem-note::after{content:"";position:absolute;border-radius:50%;pointer-events:none}
.tandem-note::before{width:46cqw;aspect-ratio:1;background:#FFD58E;right:-12cqw;bottom:-16cqw;opacity:.9}
.tandem-note::after{width:30cqw;aspect-ratio:1;background:#9FD4B8;left:-9cqw;top:-10cqw;opacity:.8}
.tn-scene{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4.2cqw;padding:6cqw;transition:opacity .5s;font-family:"Inter",system-ui,sans-serif;text-align:left}
.tn-scene.out{opacity:0}
.tn-note{position:relative;width:100%;max-width:86cqw;background:#F7F5FA;border:0;border-radius:3cqw;box-shadow:0 2cqw 5cqw -3cqw rgba(46,42,51,.3);padding:4.4cqw 4.8cqw 5.4cqw;transition:background .6s ease,box-shadow .6s ease}
.tn-note.warm{background:#fff;box-shadow:0 2.8cqw 6cqw -3cqw rgba(46,42,51,.38)}
.tn-note.in{animation:tn-rise .5s cubic-bezier(.2,.8,.2,1)}
.tn-lbl{display:flex;justify-content:space-between;align-items:center;gap:2cqw;margin:0 0 2cqw!important;font:500 1.9cqw/1 "JetBrains Mono",monospace!important;letter-spacing:.12em;text-transform:uppercase;color:#6d6878!important}
.tn-sent{color:#2E2A33;display:flex;align-items:center;gap:1cqw;opacity:0;transform:translateY(.6cqw);transition:opacity .4s,transform .4s}
.tn-sent.on{opacity:1;transform:none}
.tn-sent::before{content:"";width:1.6cqw;height:1.6cqw;border-radius:50%;background:#9FD4B8}
.tn-txt{margin:0!important;font-size:3.5cqw!important;line-height:1.5!important;color:#2E2A33!important;min-height:10.5cqw;text-wrap:pretty;max-width:none!important}
.tn-f{position:relative;border-radius:.6cqw;transition:background-color .6s}
.tn-f.flag{background-image:linear-gradient(#FFB3C1,#FFB3C1);border-radius:.8cqw;background-repeat:no-repeat;background-position:0 100%;background-size:var(--u,0%) 100%;color:#2E2A33}
.tn-f.shake{display:inline-block;animation:tn-shake .35s ease}
.tn-f.strike{text-decoration:line-through;text-decoration-color:#2E2A33;text-decoration-thickness:.25cqw;color:#8a8494;background:rgba(255,179,193,.35);border-radius:.8cqw}
.tn-f.soft{background:rgba(159,212,184,var(--hl,0));border-radius:.8cqw}
.tn-caret{display:inline-block;width:.35cqw;height:3.6cqw;background:#2E2A33;vertical-align:-.6cqw;margin-left:.1cqw;animation:tn-blink 1s steps(1) infinite}
.tn-pill{position:absolute;right:-1.6cqw;bottom:-3.4cqw;display:flex;align-items:center;gap:1.2cqw;background:#2E2A33;color:#fff;border-radius:99px;padding:1.4cqw 2.6cqw;font:600 2.3cqw/1 "Inter",sans-serif;opacity:0;transform:scale(.7);transition:opacity .35s,transform .35s cubic-bezier(.3,1.5,.5,1);box-shadow:0 1.4cqw 3cqw -1.6cqw rgba(46,42,51,.45),0 0 0 .3cqw rgba(255,255,255,.7)}
.tn-pill.on{opacity:1;transform:none}
.tn-pill.pulse{animation:tn-pulse 1.1s ease}
.tn-pill i{width:1.8cqw;height:1.8cqw;border-radius:50%;background:conic-gradient(#C9B8FF 0 40%,#FFD58E 0 72%,#9FD4B8 0)}
.tn-pill.busy i{animation:tn-dot .7s ease-in-out infinite alternate}
.tn-reply{align-self:flex-end;margin-right:4cqw;max-width:60cqw;background:#C9B8FF;color:#2E2A33;border-radius:3cqw 3cqw .8cqw 3cqw;box-shadow:0 1.6cqw 3.6cqw -2cqw rgba(46,42,51,.35);padding:2.4cqw 3.2cqw;font-size:3cqw;line-height:1.4;opacity:0;transform:translateY(2cqw) scale(.94);transform-origin:100% 100%;transition:opacity .45s,transform .45s cubic-bezier(.3,1.4,.5,1)}
.tn-reply.on{opacity:1;transform:none}
.tn-reply small{display:block;font:500 1.7cqw/1 "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:#4a3f7a;margin-bottom:1cqw}
@keyframes tn-shake{0%,100%{transform:none}25%{transform:translateX(-.5cqw)}75%{transform:translateX(.5cqw)}}
@keyframes tn-blink{50%{opacity:0}}
@keyframes tn-pulse{0%{box-shadow:0 0 0 0 rgba(201,184,255,.9)}100%{box-shadow:0 0 0 3.4cqw rgba(201,184,255,0)}}
@keyframes tn-dot{to{transform:scale(.5);opacity:.5}}
@keyframes tn-rise{from{opacity:0;transform:translateY(3cqw)}}`;
const st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
const T=26,SPEED=.72;
const S0=[{p:"Liam "},{h:"can't sit still during reading.",s:"brings a lot of energy to group reading."},{p:" "},{h:"Possible attention issues.",s:"Here's what we're noticing,"},{p:" "},{h:"May need evaluation.",s:"and a couple of things we can try together."}];
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),p=(t,a,b)=>cl((t-a)/(b-a));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".tandem-note").forEach(host=>{
host.innerHTML='<div class="tn-scene"><div class="tn-note"><p class="tn-lbl"><span class="tn-l">Teacher\'s note</span><span class="tn-sent">Sent to parent</span></p><p class="tn-txt"></p><div class="tn-pill"><i></i><span>Tandem</span></div></div><div class="tn-reply"><small>Parent</small>Thank you. We\'ll try that at home too.</div></div>';
const q=s=>host.querySelector(s),scene=q(".tn-scene"),note=q(".tn-note"),lbl=q(".tn-l"),sent=q(".tn-sent"),txt=q(".tn-txt"),pill=q(".tn-pill"),reply=q(".tn-reply");
const S=S0.map(g=>({...g}));const TYPE0=.6,CPS=22;let acc=0;S.forEach(g=>{g.o=acc;acc+=(g.p||g.h).length});const TOTAL=acc,TYPE1=TYPE0+TOTAL/CPS;
S.filter(g=>g.h).forEach((g,i)=>{g.st=7.4+i*3.4});
let last="",lastT=-1;
function frame(t){
if(t<lastT){note.classList.remove("in");void note.offsetWidth;note.classList.add("in")}lastT=t;
const typed=Math.floor(cl((t-TYPE0)*CPS,0,TOTAL));const caretAt=t<TYPE1+.4?typed:-1;let html="";
S.forEach(g=>{
if(g.p){const n=cl(typed-g.o,0,g.p.length);html+=esc(g.p.slice(0,n));if(caretAt>=g.o&&caretAt<g.o+g.p.length&&n===caretAt-g.o)html+='<span class="tn-caret"></span>';return}
const n=cl(typed-g.o,0,g.h.length);let cls="tn-f",str=g.h.slice(0,n),style="",car=false;
if(caretAt>=g.o&&caretAt<=g.o+g.h.length&&caretAt<TOTAL)car=(n===caretAt-g.o);
if(t>=5.2&&t<g.st){cls+=" flag";style=`--u:${(100*p(t,5.2,5.9)).toFixed(0)}%`;if(t<6.2)cls+=" shake"}
if(t>=g.st&&t<g.st+1){cls+=" strike";str=g.h}
if(t>=g.st+1&&t<g.st+1.6){const k=1-p(t,g.st+1,g.st+1.6);str=g.h.slice(0,Math.floor(g.h.length*k));cls+=" strike";car=true}
if(t>=g.st+1.6){const m=Math.floor(cl((t-g.st-1.6)*18,0,g.s.length));str=g.s.slice(0,m);cls+=" soft";style=`--hl:${(.35*(1-p(t,g.st+4,g.st+6.5))).toFixed(2)}`;car=m<g.s.length}
html+=`<span class="${cls}" style="${style}">${esc(str)}</span>`+(car?'<span class="tn-caret"></span>':"");
if(caretAt===TOTAL&&g===S[S.length-1]&&t<5.2)html+='<span class="tn-caret"></span>';
});
if(html!==last){txt.innerHTML=html;last=html}
pill.classList.toggle("on",t>=6.6&&t<25.2);pill.classList.toggle("busy",t>=7.2&&t<18.4);
if(t>=6.7&&t<6.8){pill.classList.remove("pulse");void pill.offsetWidth;pill.classList.add("pulse")}
note.classList.toggle("warm",t>=19.2);lbl.textContent=t>=19.2?"What the parent receives":"Teacher's note";
sent.classList.toggle("on",t>=19.6);reply.classList.toggle("on",t>=20.6&&t<25.2);scene.classList.toggle("out",t>=25.2);
}
if(reduce){frame(23);return}
let t0=null,vis=false,acc2=0,lastNow=0;
new IntersectionObserver(es=>{vis=es[0].isIntersecting},{threshold:.25}).observe(host);
const loop=now=>{if(vis){if(t0===null){t0=now;note.classList.add("in")}acc2+=Math.min(now-lastNow,100);frame((acc2/1000*SPEED)%T)}lastNow=now;requestAnimationFrame(loop)};
frame(0);requestAnimationFrame(n=>{lastNow=n;loop(n)});
});
})();
