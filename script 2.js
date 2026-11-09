(function(){
var d=document.getElementById('lb'),i=d.querySelector('img');
document.querySelectorAll('.mosaic img').forEach(function(m){
m.addEventListener('click',function(){i.src=m.src;i.alt=m.alt;d.showModal()});
});
d.addEventListener('click',function(){d.close()});
})();

document.querySelectorAll('.vid[data-id]').forEach(function(v){
var b=v.querySelector('.vbtn');
b.addEventListener('click',function(){
var id=v.getAttribute('data-id'),t=v.querySelector('b').textContent;
v.classList.add('on');
v.innerHTML='<div class="frame"><iframe src="https://drive.google.com/file/d/'+id+'/preview" title="'+t+'" allow="autoplay; fullscreen" allowfullscreen></iframe></div><a class="vopen" href="https://drive.google.com/file/d/'+id+'/view" target="_blank" rel="noopener">Buka di Google Drive</a>';
if(window.applyLang)window.applyLang();
});
});

/* bahasa otomatis: Indonesia / Inggris */
(function(){
var EN={
"Tentang": "About",
"Karya": "Work",
"Pengalaman": "Experience",
"Kontak": "Contact",
"SIAP BEKERJA": "AVAILABLE FOR WORK",
"TENTANG SAYA": "ABOUT ME",
"PENGALAMAN": "EXPERIENCE",
"10 TAHUN": "10 YEARS",
"Saya adalah kreator visual yang berpengalaman dalam fotografi, videografi, dan produksi konten kreatif. Saya membantu brand, bisnis, dan individu menghasilkan konten visual yang menarik, profesional, dan efektif untuk kebutuhan promosi maupun komunikasi.": "I am a visual creator experienced in photography, videography, and creative content production. I help brands, businesses, and individuals create visual content that is engaging, professional, and effective for promotion and communication.",
"Perjalanan saya": "My journey",
"Saya belajar secara otodidak sejak kelas 1 SMK dan kini punya pengalaman sekitar 10 tahun: Indonesia 2016 sampai 2020, Malaysia 2021 sampai 2026. Bagi saya waktu adalah aset berharga, jadi kedisiplinan dan manajemen waktu selalu ikut dalam setiap proyek.": "I taught myself video, photography, and editing from my first year of vocational high school, and I now have about 10 years of experience: Indonesia 2016 to 2020, Malaysia 2021 to 2026. To me, time is a valuable asset, so discipline and time management are part of every project.",
"Karya foto": "Photo work",
"Ketuk gambar untuk memperbesar.": "Tap an image to enlarge.",
"Project modeling ZALORA": "ZALORA modeling project",
"Dokumentasi foto dan video acara seleksi model bersama ZALORA, dengan peserta dari berbagai negara Asia termasuk Miss Indonesia dan Miss Singapore. Peran saya: fotografer dan videografer.": "Photo and video documentation of a model selection event with ZALORA, featuring participants from across Asia, including Miss Indonesia and Miss Singapore. My role: photographer and videographer.",
"Photoshoot produk": "Product photoshoot",
"Fotografi produk untuk media sosial dan kampanye pemasaran digital sebuah brand, dengan fokus pada komposisi, pencahayaan, dan penyajian produk. Peran saya: fotografer dan videografer.": "Product photography for a brand's social media and digital marketing campaigns, focused on composition, lighting, and product presentation. My role: photographer and videographer.",
"Karya video": "Video work",
"Ketuk video untuk memutarnya langsung di sini.": "Tap a video to play it right here.",
"Video advertising, fashion, dan dokumentasi event dengan perhatian pada komposisi, teknik pengambilan gambar, pencahayaan, dan editing yang dinamis.": "Advertising, fashion, and event documentation videos with attention to composition, shooting technique, lighting, and dynamic editing.",
"Videografer dan editor": "Videographer and editor",
"Pekerjaan freelance sebagai creative video editor, dikerjakan sambil bekerja penuh waktu di Malaysia.": "Freelance work as a creative video editor, done alongside a full-time job in Malaysia.",
"Gear dan setup": "Gear and setup",
"Kamera": "Camera",
"Lensa zoom": "Zoom lens",
"Lensa prime": "Prime lens",
"Editing": "Editing",
"Alat yang saya pakai dari ide sampai file akhir.": "The tools I use from idea to final file.",
"Desain dan retouch": "Design and retouching",
"Vektor dan logo": "Vectors and logos",
"Foto dan warna": "Photo and color",
"Editing video": "Video editing",
"Edit cepat": "Quick editing",
"Edit di ponsel": "Mobile editing",
"Selain itu saya juga memakai Microsoft Office.": "I also use Microsoft Office.",
"Sekitar 10 tahun berkarya: Indonesia 2016 sampai 2020, Malaysia 2021 sampai 2026.": "About 10 years of work: Indonesia 2016 to 2020, Malaysia 2021 to 2026.",
"2021 sampai 2026": "2021 to 2026",
"2016 sampai 2020": "2016 to 2020",
"Lead Production Quality Control. Memimpin tim PQC untuk menjaga standar kualitas produksi dan berkoordinasi lintas fungsi. Di luar jam kerja, saya mengambil proyek freelance sebagai videografer, fotografer, dan editor video.": "Lead Production Quality Control. Leads the PQC team to maintain production quality standards and coordinates across functions. Outside working hours, I take on freelance projects as a videographer, photographer, and video editor.",
"Videografer di perusahaan produksi kreatif dan periklanan. Menangani produksi video dan foto secara menyeluruh, dari pengembangan konsep, pengarahan, dan pengambilan gambar sampai penyuntingan dan penyerahan hasil akhir: video iklan, video produk, film brand, dokumentasi acara, dan konten pemasaran media sosial. Terlibat sejak fase awal production house pada 2016 sampai usahanya berbadan hukum PT pada 2019.": "Videographer at a creative production and advertising company. Handled full video and photo production, from concept development, direction, and shooting to editing and final delivery: advertising videos, product videos, brand films, event documentation, and social media marketing content. Involved from the early stage of the production house in 2016 until the business became a registered company (PT) in 2019.",
"Mari bikin sesuatu": "Let's make something",
"Ceritakan kebutuhan konten Anda. Cara tercepat adalah lewat WhatsApp.": "Tell me about your content needs. The fastest way is through WhatsApp.",
"Sosial media": "Social media",
"Telepon": "Phone",
"Buka di Google Drive": "Open in Google Drive",
"Navigasi": "Navigation",
"Pratinjau gambar": "Image preview",
"Adi Dwi Danisworo memegang kamera di atas gimbal": "Adi Dwi Danisworo holding a camera on a gimbal",
"Para peserta seleksi model ZALORA berbaris mendengarkan arahan": "ZALORA model selection participants lined up listening to instructions",
"Model berpose di depan logo ZALORA dengan topi hijau": "Model posing in front of the ZALORA logo in a green cap",
"Model berjalan di runway ZALORA": "Model walking on the ZALORA runway",
"Dua juri mencatat saat seleksi model": "Two judges taking notes during model selection",
"Model berbaring di karpet bulu dikelilingi sepatu flat berhias kristal": "Model lying on a fur rug surrounded by crystal-embellished flats",
"Model duduk di samping kursi klasik dengan sepatu hak tinggi di sekitarnya": "Model sitting beside a classic chair with high heels around her",
"Close-up anting manik-manik dengan blazer abu-abu": "Close-up of beaded earrings with a gray blazer",
"Model dengan mantel oranye di antara balok beton": "Model in an orange coat between concrete beams"
};
var META_EN="Photography, videography, and editing portfolio for brands, influencers, and business owners.";
var META_ID=(document.querySelector('meta[name="description"]')||{}).content||'';
var cur='id',tx=new WeakMap(),at=new WeakMap();
function tr(s,l){
 if(l!=='en')return s;
 var k=s.trim(); if(!k)return s;
 if(EN.hasOwnProperty(k))return s.replace(k,EN[k]);
 var m=k.match(/^Logo (.+)$/); if(m)return s.replace(k,m[1]+' logo');
 return s;
}
function apply(l){
 cur=l;
 var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n;
 while((n=w.nextNode())){
  var p=n.parentNode&&n.parentNode.nodeName;
  if(p==='SCRIPT'||p==='STYLE')continue;
  if(!tx.has(n))tx.set(n,n.nodeValue);
  n.nodeValue=tr(tx.get(n),l);
 }
 document.querySelectorAll('[alt],[aria-label],[title]').forEach(function(el){
  var o=at.get(el)||{};
  ['alt','aria-label','title'].forEach(function(a){
   if(el.hasAttribute(a)){ if(!(a in o))o[a]=el.getAttribute(a); el.setAttribute(a,tr(o[a],l)); }
  });
  at.set(el,o);
 });
 document.documentElement.lang=l;
 var md=document.querySelector('meta[name="description"]'); if(md)md.setAttribute('content',l==='en'?META_EN:META_ID);
 document.querySelectorAll('.langs button').forEach(function(b){
  var on=b.getAttribute('data-lang')===l; b.classList.toggle('on',on); b.setAttribute('aria-pressed',on?'true':'false');
 });
}
function detect(){
 var s=null; try{s=localStorage.getItem('lang');}catch(e){}
 if(s==='id'||s==='en')return s;
 var l=(navigator.languages&&navigator.languages[0])||navigator.language||'en';
 return /^(id|in)(-|$)/i.test(l)?'id':'en';
}
window.applyLang=function(){apply(cur);};
document.querySelectorAll('.langs button').forEach(function(b){
 b.addEventListener('click',function(){
  var l=b.getAttribute('data-lang'); try{localStorage.setItem('lang',l);}catch(e){}
  apply(l);
 });
});
apply(detect());
})();
