const e=document.getElementById("search-form"),t=document.querySelector(".gallery"),a=document.querySelector(".load-more"),n=document.querySelector(".error");let o="",i=1,r=0;async function s(){try{const a=await axios.get("https://pixabay.com/api/",{params:{key:"38303120-77261ecd691aecbe62c4afdac",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:40}}),{hits:s,totalHits:y}=a.data;if(r=y,1===i&&s.length>0&&(e=`Hooray! We found ${r} images.`,n.textContent=e,n.style.display="block",Notiflix.Notify.success(e),d()),0===s.length&&1===i)return m("Sorry, there are no images matching your search query. Please try again."),void l();!function(e){const a=document.createDocumentFragment();e.forEach((e=>{const{webformatURL:t,tags:n,likes:o,views:i,comments:r,downloads:s}=e,l=document.createElement("div");l.classList.add("photo-card");const d=document.createElement("img");d.src=t,d.alt=n,d.loading="lazy";const u=document.createElement("div");u.classList.add("info");const m=c("Likes",o),y=c("Views",i),f=c("Comments",r),h=c("Downloads",s);u.append(m,y,f,h),l.append(d,u),a.appendChild(l)})),t.appendChild(a)}(s),40*i<r?d():(u(),m("We're sorry, but you've reached the end of search results."),Notiflix.Notify.failure("We're sorry, but you've reached the end of search results."))}catch(e){console.log(e),m("Something went wrong. Please try again later."),Notiflix.Notify.failure("Something went wrong. Please try again later.")}var e}function c(e,t){const a=document.createElement("p");return a.classList.add("info-item"),a.innerHTML=`<b>${e}:</b> ${t}`,a}function l(){t.innerHTML=""}function d(){a.classList.remove("hide")}function u(){a.classList.add("hide")}function m(e){n.textContent=e,n.style.display="block",Notiflix.Notify.failure(e)}a.classList.add("hide"),n.style.display="none",e.addEventListener("submit",(async function(e){if(e.preventDefault(),o=e.target.elements.searchQuery.value.trim(),""===o)return void m("Please enter a search query.");i=1,r=0,l(),u(),await s()})),a.addEventListener("click",(async function(){i++,await s()}));
//# sourceMappingURL=index.3f1e0809.js.map
