/* CeraVe product page movie: zooms through the 8 changes on the redesigned page. Mount: <div data-pdp-movie data-src="assets/cerave-pdp-after.png"></div> */
(()=>{
const CSS=`[data-pdp-movie]{position:relative;aspect-ratio:16/10.4;border-radius:14px;overflow:hidden;background:#f4efe4;container-type:inline-size;box-shadow:0 18px 36px -22px rgba(20,18,15,.45)}
.pm-cam{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}
.pm-cam img{display:block;width:100%;height:auto;border-radius:calc(8px / var(--s,1));box-shadow:0 calc(10px / var(--s,1)) calc(30px / var(--s,1)) calc(-16px / var(--s,1)) rgba(20,18,15,.45)}
.pm-hl{position:absolute;border:calc(2.5px / var(--s,1)) solid #1e3a26;border-radius:calc(8px / var(--s,1));background:rgba(231,169,59,.14);box-shadow:0 0 0 calc(4px / var(--s,1)) rgba(231,169,59,.35);opacity:0;transition:opacity .35s}
.pm-hl.on{opacity:1}
.pm-hl b{position:absolute;left:0;top:50%;transform:translate(-100%,-50%) scale(calc(1 / var(--s,1))) translateX(-6px);transform-origin:100% 50%;width:22px;height:22px;border-radius:50%;background:#1e3a26;color:#f4efe4;font:600 12px/22px "Inter",sans-serif;text-align:center}
.pm-cap{position:absolute;left:2.6cqw;right:2.6cqw;bottom:2.6cqw;background:#fff;border-radius:1.8cqw;padding:1.8cqw 2.4cqw;display:flex;gap:2cqw;align-items:center;box-shadow:0 1.6cqw 4cqw -2cqw rgba(20,18,15,.4);opacity:0;transform:translateY(1.6cqw);transition:opacity .35s,transform .35s}
.pm-cap.on{opacity:1;transform:none}
.pm-cap .n{flex:none;width:clamp(26px,4.6cqw,40px);height:clamp(26px,4.6cqw,40px);border-radius:50%;background:#1e3a26;color:#f4efe4;display:grid;place-items:center;font:600 clamp(12px,2cqw,16px)/1 "Inter",sans-serif}
.pm-cap .t{margin:0!important;font:600 clamp(14px,2.3cqw,19px)/1.25 "Inter",sans-serif!important;color:#1c1a16!important}
.pm-cap .s{margin:2px 0 0!important;font-size:clamp(12.5px,1.9cqw,16px)!important;line-height:1.3!important;color:#55504a!important}
.cc-shell .cc-sec [data-pdp-movie] .pm-cap .n,.cc-shell .cc-sec [data-pdp-movie] .pm-hl b,[data-pdp-movie] .pm-cap .n,[data-pdp-movie] .pm-hl b{color:#fff!important}
.pm-btn{position:absolute;right:2.2cqw;top:2.2cqw;width:34px;height:34px;border-radius:50%;border:0;background:rgba(30,58,38,.85);color:#f4efe4;display:grid;place-items:center;cursor:pointer;font:600 12px/1 "Inter",sans-serif}
.pm-btn:hover{background:#9e2f5a}`;
const st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
const AR=3504/2284;
const C=[
{t:"Descriptor chips up top",s:"Hydrating · Normal skin · Dry skin",a:{x:.528,y:.034,w:.222,h:.037}},
{t:"One-line benefit under the title",s:"Leads with the outcome, not a paragraph",a:{x:.528,y:.150,w:.37,h:.040}},
{t:"Price moved up, beside the rating",s:"The two things people check first",a:{x:.523,y:.255,w:.085,h:.050}},
{t:"Description trimmed to one sentence",s:"Less to read, faster to grasp",a:{x:.523,y:.330,w:.44,h:.075}},
{t:"Specs reframed as outcomes",s:"What you get, not what it is",a:{x:.523,y:.400,w:.205,h:.098}},
{t:"Clearer CTA + delivery reassurance",s:"Add to Cart · free delivery",a:{x:.518,y:.518,w:.452,h:.092}},
{t:"Benefit icon row added",s:"Nourishes · Perfume free · Hypoallergenic",a:{x:.560,y:.720,w:.355,h:.082}},
{t:"Social proof on the image",s:"“90%+ report softer skin”",a:{x:.113,y:.817,w:.378,h:.037}}];
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),e=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
document.querySelectorAll("[data-pdp-movie]").forEach(host=>{
host.innerHTML=`<div class="pm-cam"><img src="${host.dataset.src}" alt=""></div><div class="pm-cap"><span class="n">1</span><div><p class="t"></p><p class="s"></p></div></div>`+(reduce?"":'<button class="pm-btn" type="button" aria-label="Pause">❚❚</button>');
const cam=host.querySelector(".pm-cam"),cap=host.querySelector(".pm-cap"),capN=cap.querySelector(".n"),capT=cap.querySelector(".t"),capS=cap.querySelector(".s"),btn=host.querySelector(".pm-btn");
const hls=C.map((c,i)=>{const d=document.createElement("div");d.className="pm-hl";d.style.cssText=`left:${c.a.x*100}%;top:${c.a.y*100}%;width:${c.a.w*100}%;height:${c.a.h*100}%`;d.innerHTML=`<b>${i+1}</b>`;cam.appendChild(d);return d});
let Fw=1,Fh=1;const measure=()=>{const r=host.getBoundingClientRect();Fw=r.width;Fh=r.height;cam.style.width=Fw+"px"};
const O={cx:.5,cy:.5,s:.9,oy:.5},OE={cx:.5,cy:.5,s:.72,oy:.4};
const target=a=>({cx:a.x+a.w/2,cy:a.y+a.h/2,s:Math.min(3,.55/a.w,(.34*Fh)/(a.h*Fw/AR)),oy:.4});
const INTRO=1.8,STEP=2.6,MOVE=.9,OUTRO=3.4,T=INTRO+C.length*STEP+OUTRO;
const lerpCam=(A,B,k)=>{const ls=Math.log(A.s)+(Math.log(B.s)-Math.log(A.s))*k;return{cx:A.cx+(B.cx-A.cx)*k,cy:A.cy+(B.cy-A.cy)*k,s:Math.exp(ls)*(1-.22*Math.sin(Math.PI*k)),oy:A.oy+(B.oy-A.oy)*k}};
function apply(c){const iw=Fw*c.s,ih=Fw/AR*c.s;const tx=Fw/2-c.cx*iw;let ty=Fh*c.oy-c.cy*ih;if(c.s>1.05)ty=Math.min(ty,Fh*.08);cam.style.transform=`translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) scale(${c.s.toFixed(4)})`;cam.style.setProperty("--s",c.s.toFixed(4))}
let lastCap=-2;
function frame(t){let c,active=-1,all=false;
if(t<INTRO)c=O;
else if(t<INTRO+C.length*STEP){const i=Math.floor((t-INTRO)/STEP),lt=t-INTRO-i*STEP;const prev=i===0?O:target(C[i-1].a),next=target(C[i].a);c=lt<MOVE?lerpCam(prev,next,e(lt/MOVE)):next;if(lt>MOVE*.7)active=i}
else{const lt=t-INTRO-C.length*STEP;const last=target(C[C.length-1].a);c=lt<1.1?lerpCam(last,OE,e(lt/1.1)):OE;all=lt>.9}
apply(c);hls.forEach((h,i)=>h.classList.toggle("on",i===active||all));
const key=all?"all":active;if(key!==lastCap){lastCap=key;if(all){capN.textContent="8";capT.textContent="Eight changes, one page";capS.textContent="Scan, compare, and decide without a wall of text"}else if(active>=0){capN.textContent=active+1;capT.textContent=C[active].t;capS.textContent=C[active].s}}
cap.classList.toggle("on",active>=0||all)}
new ResizeObserver(()=>{measure();if(reduce)frame(T-.5)}).observe(host);measure();
if(reduce){frame(T-.5);return}
let vis=false,paused=false,acc=0,last=0;
new IntersectionObserver(es=>{vis=es[0].isIntersecting},{threshold:.3}).observe(host);
btn.onclick=()=>{paused=!paused;btn.textContent=paused?"▶":"❚❚";btn.setAttribute("aria-label",paused?"Play":"Pause")};
frame(0);
const loop=now=>{if(vis&&!paused){acc+=Math.min(now-last,100);frame((acc/1000)%T)}last=now;requestAnimationFrame(loop)};
requestAnimationFrame(n=>{last=n;loop(n)});
});
})();
