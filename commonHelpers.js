import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as C}from"./assets/vendor-77e16229.js";const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(C.error({message:"Please choose a date in the future",position:"topRight"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1,f=e}};let f;const a=document.getElementById("datetime-picker");p(a,D);const o=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");o.addEventListener("click",()=>{o.disabled=!0,a.disabled=!0;const t=setInterval(()=>{const e=f-new Date;if(e<=0){clearInterval(t),u.textContent="00",i.textContent="00",l.textContent="00",m.textContent="00",o.disabled=!1,a.disabled=!1;return}const{days:r,hours:c,minutes:d,seconds:s}=b(e);u.textContent=n(r),i.textContent=n(c),l.textContent=n(d),m.textContent=n(s)},1e3)});function n(t){return String(t).padStart(2,"0")}function b(t){const s=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:h,minutes:y,seconds:S}}o.disabled=!0;
//# sourceMappingURL=commonHelpers.js.map
