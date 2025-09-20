import{S as m,a as h,i as l}from"./assets/vendor-D3hl6BCG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),a=document.querySelector(".loader"),g=new m(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,captionPosition:"bottom"});function y(r){const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t=0,views:i=0,comments:p=0,downloads:d=0})=>`<li class="gallery-item">
  <a href="${n}" class="link" target="_blank">
  <img src="${s}" alt="${e}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${t}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${i}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${p}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${d}</p>
  </li>
</ul>
</li>`).join("");c.innerHTML=o,g.refresh()}function x(){c.innerHTML=""}function L(){a.classList.add("loader")}function u(){a.classList.contains("loader")&&a.classList.remove("loader")}const w="52353296-7e1352dd89e2156c2e1f9fbb2",T="https://pixabay.com/api/";function b(r){return L(),h.get(T,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits)}const f=document.querySelector(".form");f.addEventListener("submit",S);u();function S(r){r.preventDefault(),x();const o=r.target.elements["search-text"].value.trim();if(o===""){l.error(O());return}b(o).then(s=>{if(s.length===0){l.info($());return}y(s)}).catch(s=>{l.error(q(s))}).finally(()=>{u(),f.reset()})}function q(r){return{title:"Error",message:`Oops.. something goes wrong, error : ${r.status} !`,position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white",titleColor:"white"}}function $(){return{message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function O(){return{message:"Sorry, you need to fill searсh query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}
//# sourceMappingURL=index.js.map
