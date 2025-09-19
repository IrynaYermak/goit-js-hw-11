import{a as p,i as c}from"./assets/vendor-B7zuf52O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="52353296-7e1352dd89e2156c2e1f9fbb2",m="https://pixabay.com/api/";function h(i){return p.get(m,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}const y=document.querySelector(".gallery"),n=document.querySelector(".load");function g(i){const s=i.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t=0,views:o=0,comments:u=0,downloads:d=0})=>`<li class="gallery-item">
  <a href="${l}" class="link" target="_blank">
  <img src="${r}" alt="${e}" width="360" /></a>
  <ul class="description-list">
    
  <li class="description-item">
      <h3 class="description-title">Likes</h3>
        <p class="description-text">${t}</p>
    </li>
    
  <li class="description-item">
    <h3 class="description-title">Views</h3>
      <p class="description-text">${o}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Comments</h3>
      <p class="description-text">${u}</p>
  </li>
  <li class="description-item">
    <h3 class="description-title">Downloads</h3>
      <p class="description-text">${d}</p>
  </li>
</ul>
</li>`).join("");y.innerHTML=s}function L(){n.classList.add("loader")}function b(){n.classList.contains("loader")&&n.classList.remove("loader")}const a=document.querySelector(".form");a.addEventListener("submit",q);function q(i){i.preventDefault();const s=i.target.elements["search-text"].value.trim();if(s===""){c.error({message:"Sorry, you need to fill searсh query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"});return}h(s).then(r=>{if(console.log(r),r.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"});return}L(),g(r),b()}).catch(r=>{console.log(r)}).finally(()=>a.reset())}
//# sourceMappingURL=index.js.map
