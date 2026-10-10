(function(root){
function delta(r){
 const weekend=[0,6].includes(new Date(r.date+'T12:00:00').getDay());
 if(r.type==='normal')return 0;
 if(r.type==='overtime')return -r.minutes;
 return r.minutes-(weekend?0:480);
}
function duration(n){const sign=n<0?'−':'';n=Math.abs(n);return sign+Math.floor(n/60)+' sa '+n%60+' dk';}
function days(n){const sign=n<0?'−':'';n=Math.abs(n);return sign+Math.floor(n/480)+' gün '+Math.floor(n%480/60)+' sa '+n%60+' dk';}
const api={delta,duration,days};if(typeof module!=='undefined')module.exports=api;else root.Calculator=api;
})(typeof window==='undefined'?globalThis:window);
