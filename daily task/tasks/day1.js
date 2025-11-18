const $ = id => document.getElementById(id);

// Profile fields
const nameOut = $("display-name"), roleOut = $("display-role"),
      bioOut = $("display-bio"), img = $("avatar"),
      tags = $("tag-list"), more = $("more-info");

// Inputs
const nameIn = $("input-name"), roleIn = $("input-role"),
      bioIn = $("input-bio"), tagIn = $("input-tag"), imgIn = $("input-img");

// Buttons
$("btn-add-tag").onclick = () => {
  if(!tagIn.value.trim()) return;
  const span = document.createElement("span");
  span.className="tag"; span.textContent=tagIn.value;
  span.innerHTML += ' <button class="remove">x</button>';
  tags.append(span); tagIn.value="";
};

$("btn-remove-tag").onclick = () => tags.lastElementChild?.remove();

tags.onclick = e => e.target.classList.contains("remove") && e.target.parentElement.remove();

["name","role","bio"].forEach(k=>{
  $(`input-${k}`).oninput=()=>$( `display-${k}`).textContent = $(`input-${k}`).value;
});

$("btn-update-img").onclick = ()=> img.src = imgIn.value || "default.jpg";

$("btn-toggle-info").onclick = ()=> more.classList.toggle("hidden");

// Theme change
document.querySelectorAll(".theme-btn").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".theme-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    $("profile").style.background=btn.dataset.color;
  };
});
