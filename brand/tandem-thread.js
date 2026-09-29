/* Tandem card animation: confusion -> Tandem -> clarity. Mount: <div class="tandem-thread"></div> */
(()=>{
const SVG="<svg viewBox=\"0 0 600 450\" aria-hidden=\"true\" preserveAspectRatio=\"xMidYMid meet\" style=\"display:block;width:100%;height:100%\">\n<defs>\n<filter id=\"f0\" x=\"-10%\" y=\"-30%\" width=\"120%\" height=\"160%\"><feTurbulence id=\"n0\" type=\"fractalNoise\" baseFrequency=\"0.035\" numOctaves=\"2\" seed=\"1\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" scale=\"10\"></feDisplacementMap></filter>\n<filter id=\"f1\" x=\"-10%\" y=\"-30%\" width=\"120%\" height=\"160%\"><feTurbulence id=\"n1\" type=\"fractalNoise\" baseFrequency=\"0.045\" numOctaves=\"2\" seed=\"4\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" scale=\"16\"></feDisplacementMap></filter>\n<filter id=\"f2\" x=\"-10%\" y=\"-30%\" width=\"120%\" height=\"160%\"><feTurbulence id=\"n2\" type=\"fractalNoise\" baseFrequency=\"0.028\" numOctaves=\"3\" seed=\"7\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" scale=\"22\"></feDisplacementMap></filter>\n<filter id=\"f3\" x=\"-10%\" y=\"-30%\" width=\"120%\" height=\"160%\"><feTurbulence id=\"n3\" type=\"fractalNoise\" baseFrequency=\"0.06\" numOctaves=\"2\" seed=\"9\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" scale=\"14\"></feDisplacementMap></filter>\n<filter id=\"f4\" x=\"-10%\" y=\"-30%\" width=\"120%\" height=\"160%\"><feTurbulence id=\"n4\" type=\"fractalNoise\" baseFrequency=\"0.022\" numOctaves=\"3\" seed=\"12\"></feTurbulence><feDisplacementMap in=\"SourceGraphic\" scale=\"28\"></feDisplacementMap></filter>\n<filter id=\"soft\" x=\"-30%\" y=\"-30%\" width=\"160%\" height=\"160%\"><feGaussianBlur stdDeviation=\"7\"></feGaussianBlur></filter>\n</defs>\n<g id=\"conf\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n<g id=\"box\">\n<rect id=\"glow\" x=\"236\" y=\"192\" width=\"128\" height=\"66\" rx=\"33\" fill=\"#e7a93b\" opacity=\"0\" filter=\"url(#soft)\"></rect>\n<rect x=\"236\" y=\"192\" width=\"128\" height=\"66\" rx=\"33\" fill=\"#1e3a26\"></rect>\n<text x=\"300\" y=\"231\" text-anchor=\"middle\" font-family=\"Inter, sans-serif\" font-weight=\"600\" font-size=\"18\" fill=\"#f4efe4\">Tandem</text>\n</g>\n<path id=\"out\" d=\"M300 258 C300 318 304 362 330 367.0 C340.0 349.5 357.5 334.5 355.0 344.5 C352.5 334.5 332.5 337.0 332.5 357.0 C332.5 374.5 352.5 374.5 362.5 362.0 C372.5 342.0 382.5 294.5 372.5 292.0 C362.5 289.5 362.5 334.5 367.5 362.0 C370.0 374.5 380.0 374.5 387.5 359.5 C392.5 347.0 405.0 337.0 410.0 339.5 C400.0 332.0 387.5 344.5 390.0 362.0 C392.5 374.5 407.5 369.5 412.5 347.0 C410.0 359.5 410.0 372.0 420.0 369.5 C425.0 362.0 427.5 344.5 430.0 337.0 C435.0 344.5 440.0 339.5 445.0 339.5 C445.0 339.5 442.5 362.0 452.5 367.0 C457.5 359.5 460.0 344.5 462.5 337.0 C460.0 352.0 460.0 369.5 470.0 367.0 C477.5 354.5 482.5 322.0 485.0 309.5 C482.5 329.5 480.0 362.0 490.0 369.5 C495.0 372.0 500.0 364.5 505.0 344.5 C502.5 337.0 507.5 334.5 507.5 337.0 C505.0 352.0 507.5 369.5 517.5 367.0 C525.0 362.0 527.5 344.5 530.0 337.0 C530.0 359.5 530.0 397.0 517.5 409.5 C507.5 417.0 505.0 397.0 525.0 382.0 C537.5 372.0 550.0 364.5 567.5 362.0\" fill=\"none\" stroke=\"#1e3a26\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n<circle id=\"idot\" cx=\"462.5\" cy=\"319.5\" r=\"3.4\" fill=\"#1e3a26\" opacity=\"0\"></circle>\n<path id=\"tbar\" d=\"M472.5 329.5 L500.0 327.0\" fill=\"none\" stroke=\"#1e3a26\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n</svg>";
const T=8;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let n=0;
document.querySelectorAll(".tandem-thread").forEach(host=>{
const P="tt"+(n++)+"-";
host.innerHTML=SVG.replace(/id="([^"]+)"/g,(m,i)=>'id="'+P+i+'"').replace(/url\(#([^)]+)\)/g,(m,i)=>'url(#'+P+i+')');
const Q=i=>host.querySelector("#"+P+i);

const T=8;
const CW="M0 -4 C8 -18 22 -30 20 -22 C18 -30 2 -28 2 -12 C2 2 18 2 26 -8 C30 -20 40 -30 48 -26 C56 -22 52 -2 42 -2 C32 -2 32 -22 46 -28 C52 -30 56 -26 60 -24 C70 -20 70 -42 60 -38 C50 -34 64 -16 58 -26 C56 -30 60 -30 62 -26 C62 -26 64 -20 64 -2 C64 -20 72 -30 78 -26 C84 -22 80 -6 84 -2 C86 0 92 -2 96 -8 C100 -28 108 -60 104 -64 C98 -68 96 -40 100 -10 C102 10 102 26 98 30 C94 34 92 20 100 4 C104 -4 110 -8 114 -10 C124 -14 118 -34 108 -26 C100 -20 118 -8 114 -10 C116 -18 116 -26 118 -28 C116 -14 118 -2 126 -4 C132 -8 134 -22 136 -28 C134 -14 136 -2 144 -4 C156 -6 152 -24 142 -18 C134 -12 152 -2 146 -8 C140 -14 150 -10 150 -10 C148 -14 150 -26 154 -28 C160 -22 162 -10 156 -4 C152 0 146 0 146 -4 C150 -2 158 -2 166 -8 C170 -14 172 -22 174 -28 C172 -16 172 -2 180 -4 C184 -12 190 -28 198 -26 C206 -24 204 -2 194 -2 C184 -2 184 -22 198 -28 C204 -30 208 -26 212 -24 C222 -22 218 -40 208 -34 C200 -28 216 -18 212 -24 C214 -26 216 -20 216 -2 C216 -20 224 -30 230 -26 C236 -22 232 -6 236 -2 C238 0 244 -2 248 -6";
const cs=1.15,cx0=30,cy0=130,tfp=d=>d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,(m,x,y)=>(+x*cs+cx0).toFixed(1)+" "+(+y*cs+cy0).toFixed(1));
const ex=(248*cs+cx0).toFixed(1),ey=(-6*cs+cy0).toFixed(1);
const CD=tfp(CW)+" C344 116 356 146 330 156 C302 166 298 134 322 138 C350 144 340 174 312 170 C286 166 300 148 318 160 C334 172 310 180 300 192";
const conf=Q("conf"),NS="http://www.w3.org/2000/svg";
const INK="#1e3a26";const sc=[[3,0,0,"f0",1],[1.8,-3,2,"f1",.6],[1.4,3,-3,"f2",.5],[1.6,1,3,"f3",.45],[1.1,-2,-2,"f4",.35]].map(([w,dx,dy,f,o])=>{const c=INK;const el=document.createElementNS(NS,"path");el.setAttribute("d",CD);el.setAttribute("stroke",c);el.setAttribute("stroke-width",w);el.setAttribute("transform","translate("+dx+" "+dy+")");el.setAttribute("filter","url(#"+P+f+")");el.dataset.o=o;conf.appendChild(el);return el});
const cdot=document.createElementNS(NS,"circle");cdot.setAttribute("cx",(174*cs+cx0).toFixed(1));cdot.setAttribute("cy",(-42*cs+cy0).toFixed(1));cdot.setAttribute("r","3.4");cdot.setAttribute("fill",INK);cdot.setAttribute("filter","url(#"+P+"f1)");conf.appendChild(cdot);
const out=Q("out"),glow=Q("glow"),box=Q("box");
const noise=[0,1,2,3,4].map(i=>Q("n"+i));
const SLs=sc.map(s=>s.getTotalLength()+10);sc.forEach((s,i)=>s.style.strokeDasharray=SLs[i]);
const ol=out.getTotalLength();out.style.strokeDasharray=ol;const idot=Q("idot"),tbar=Q("tbar"),bl=tbar.getTotalLength();tbar.style.strokeDasharray=bl;
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),p=(t,a,b)=>cl((t-a)/(b-a)),e=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,eo=x=>1-Math.pow(1-x,3);
let lastBoil=-1;
function frame(t,boil=true){
const fade=1-e(p(t,7.3,7.9));
const reel=e(p(t,2.6,3.8));
sc.forEach((s,i)=>{const L=SLs[i],d=e(p(t,i*.12,1.9+i*.12));s.style.strokeDashoffset=(L*(1-d)-L*reel).toFixed(1);s.setAttribute("opacity",(t>i*.12?(+s.dataset.o)*(1-p(reel,.9,1)):0).toFixed(3))});
conf.setAttribute("transform","rotate("+(Math.sin(t*2.2)*2.2*(1-reel)).toFixed(2)+" 170 115) translate("+(Math.sin(t*3.1)*2*(1-reel)).toFixed(2)+" "+(Math.cos(t*2.7)*2*(1-reel)).toFixed(2)+")");
const b=Math.floor(t*11);if(boil&&b!==lastBoil){lastBoil=b;noise.forEach((n,i)=>n.setAttribute("seed",String((b*7+i*13)%97+1)))}
cdot.setAttribute("opacity",(e(p(t,1.8,2))*(1-p(reel,0,.35))).toFixed(3));
const pulse=Math.sin(Math.PI*p(t,3.1,4.3)),breathe=.012*Math.sin(t*1.6);glow.setAttribute("opacity",(.85*pulse).toFixed(3));box.setAttribute("transform",`translate(300 225) scale(${(1+.06*pulse+breathe).toFixed(3)}) translate(-300 -225)`);
out.style.strokeDashoffset=(ol*(1-e(p(t,3.7,6.1)))).toFixed(1);out.setAttribute("opacity",(t>3.7?fade:0).toFixed(3));
idot.setAttribute("opacity",(e(p(t,6.1,6.35))*fade).toFixed(3));tbar.style.strokeDashoffset=(bl*(1-eo(p(t,6.2,6.5)))).toFixed(1);tbar.setAttribute("opacity",(t>6.2?fade:0).toFixed(3));
}

if(reduce){frame(6.8,false);return}
let vis=false,acc=0,last=0;
new IntersectionObserver(es=>{vis=es[0].isIntersecting},{threshold:.2}).observe(host);
frame(0,false);
const loop=now=>{if(vis){acc+=Math.min(now-last,100);frame((acc/1000)%T)}last=now;requestAnimationFrame(loop)};
requestAnimationFrame(t=>{last=t;loop(t)});
});
})();
