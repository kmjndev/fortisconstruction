/*
  CONTENU DU SITE
  ----------------
  Pour modifier un texte : change uniquement la valeur française dans `dict.fr`.
  Les versions anglaise et arabe utilisent les traductions existantes comme secours,
  puis se resynchronisent automatiquement pour toute phrase française modifiée,
  via le service Google Translate lorsqu'une connexion Internet est disponible.
*/

const dict = {
  fr: {
    nav:{services:'Nos services',projects:'Nos projets',quote:'Devis',about:'À propos'},
    hero:{eyebrow:'Fortis Construction',title:'Construire solide.<br><em>Construire pour durer.</em>',text:'Maçonnerie, gros œuvre, rénovation et extensions. Un chantier bien préparé, un travail propre, un résultat qui tient dans le temps.',cta:'Demander un devis',more:'Voir nos services',scroll:'Découvrir'},
    services:{eyebrow:'Ce que nous faisons',title:'Des bases solides, du gros œuvre à la finition.',intro:'Nous intervenons sur les étapes qui demandent du savoir-faire, de la précision et une vraie maîtrise du chantier.',items:{1:{title:'Gros œuvre',text:'Fondations, dalles, murs porteurs et structures.'},2:{title:'Maçonnerie',text:'Brique, pierre, parpaing et maçonnerie traditionnelle.'},3:{title:'Rénovation',text:'Réhabilitation et remise à niveau de bâtiments existants.'},4:{title:'Extensions',text:'Agrandissements et surélévations intégrés à l’existant.'},5:{title:'Terrassement',text:'Préparation du terrain, nivellement et excavation.'},6:{title:'Étanchéité',text:'Protection des fondations et toitures contre les infiltrations.'}}},
    projects:{eyebrow:'Quelques réalisations',title:'Des chantiers pensés pour durer.',intro:'Résidentiel, rénovation ou professionnel : chaque projet est suivi avec la même exigence.',items:{1:{type:'Résidentiel',title:'Villa contemporaine',place:'Construction neuve'},2:{type:'Rénovation',title:'Maison de caractère',place:'Réhabilitation complète'},3:{type:'Extension',title:'Atelier & véranda',place:'Agrandissement'},4:{type:'Professionnel',title:'Local commercial',place:'Gros œuvre'}}},
    quote:{eyebrow:'Votre projet',title:'Parlons du chantier.',intro:'Décrivez votre besoin, joignez vos plans ou documents et nous reviendrons vers vous.'},
    about:{eyebrow:'Fortis Construction',title:'Le métier d’abord. Le chantier ensuite.',text1:'Fortis Construction accompagne particuliers et professionnels sur des projets de construction, de rénovation et d’agrandissement. Notre priorité : un chantier maîtrisé, des finitions soignées et une relation claire du premier échange à la livraison.',text2:'Nous privilégions les solutions simples, robustes et adaptées au bâtiment. Chaque projet est suivi avec la même rigueur, quelle que soit sa taille.',stats:{1:"ans d'expérience",2:'chantiers livrés',3:'engagement'}},
    footer:{legal:'Mentions légales'},legal:{title:'Informations légales',text:"Fortis Construction SAS, siège social en France. Les mentions administratives et coordonnées de contact doivent être remplacées par les informations réelles de l’entreprise avant publication."}
  },
  en: {
    nav:{services:'Services',projects:'Projects',quote:'Quote',about:'About'},
    hero:{eyebrow:'Fortis Construction',title:'Build solid.<br><em>Build to last.</em>',text:'Masonry, structural work, renovation and extensions. A well-prepared site, clean work and results made to last.',cta:'Request a quote',more:'View our services',scroll:'Discover'},
    services:{eyebrow:'What we do',title:'Solid foundations, from structure to finish.',intro:'We handle the stages that require know-how, precision and real site management.',items:{1:{title:'Structural work',text:'Foundations, slabs, load-bearing walls and structures.'},2:{title:'Masonry',text:'Brick, stone, blockwork and traditional masonry.'},3:{title:'Renovation',text:'Rehabilitation and upgrades for existing buildings.'},4:{title:'Extensions',text:'Extensions and vertical additions integrated with the existing building.'},5:{title:'Earthworks',text:'Site preparation, grading and excavation.'},6:{title:'Waterproofing',text:'Protection for foundations and roofs against water ingress.'}}},
    projects:{eyebrow:'Selected projects',title:'Sites built to stand the test of time.',intro:'Residential, renovation or commercial: every project is managed with the same standards.',items:{1:{type:'Residential',title:'Contemporary villa',place:'New build'},2:{type:'Renovation',title:'Character home',place:'Full renovation'},3:{type:'Extension',title:'Studio & veranda',place:'Home extension'},4:{type:'Commercial',title:'Retail premises',place:'Structural work'}}},
    quote:{eyebrow:'Your project',title:'Let’s talk about the site.',intro:'Tell us what you need, attach your plans or documents and we’ll get back to you.'},
    about:{eyebrow:'Fortis Construction',title:'Craft first. Site second.',text1:'Fortis Construction supports homeowners and professionals on construction, renovation and extension projects. Our priority is controlled sites, careful finishes and clear communication from the first discussion to handover.',text2:'We favor simple, robust solutions adapted to each building. Every project is followed with the same discipline, whatever its size.',stats:{1:'years of experience',2:'projects delivered',3:'commitment'}},
    footer:{legal:'Legal notice'},legal:{title:'Legal information',text:'Fortis Construction SAS, registered office in France. Administrative details and contact information must be replaced with the company’s actual information before publication.'}
  },
  ar: {
    nav:{services:'خدماتنا',projects:'مشاريعنا',quote:'طلب عرض سعر',about:'من نحن'},
    hero:{eyebrow:'فورتيس للإنشاءات',title:'نبني بإتقان.<br><em>نبني ليدوم.</em>',text:'أعمال البناء والهيكل والتجديد والتوسعات. موقع منظم، تنفيذ نظيف ونتيجة تدوم طويلاً.',cta:'اطلب عرض سعر',more:'اكتشف خدماتنا',scroll:'اكتشف'},
    services:{eyebrow:'ماذا نقدم',title:'أساسات متينة، من الهيكل إلى التشطيب.',intro:'ننجز المراحل التي تحتاج إلى خبرة ودقة وإدارة حقيقية للموقع.',items:{1:{title:'الأعمال الهيكلية',text:'الأساسات والبلاطات والجدران الحاملة والهياكل.'},2:{title:'أعمال البناء',text:'الطوب والحجر والبلوك وأعمال البناء التقليدية.'},3:{title:'التجديد',text:'إعادة تأهيل وتطوير المباني القائمة.'},4:{title:'التوسعات',text:'إضافات وتعلية مندمجة مع المبنى الحالي.'},5:{title:'أعمال التهيئة',text:'تجهيز الأرض والتسوية والحفر.'},6:{title:'العزل المائي',text:'حماية الأساسات والأسطح من تسرب المياه.'}}},
    projects:{eyebrow:'بعض الإنجازات',title:'مشاريع مصممة لتدوم.',intro:'سكنية أو تجديد أو تجارية: كل مشروع يحظى بنفس مستوى العناية.',items:{1:{type:'سكني',title:'فيلا عصرية',place:'بناء جديد'},2:{type:'تجديد',title:'منزل بطابع خاص',place:'تجديد شامل'},3:{type:'توسعة',title:'استوديو وشرفة',place:'توسعة منزل'},4:{type:'تجاري',title:'محل تجاري',place:'أعمال هيكلية'}}},
    quote:{eyebrow:'مشروعك',title:'لنتحدث عن مشروعك.',intro:'اشرح احتياجك وأرفق المخططات أو الملفات وسنتواصل معك.'},
    about:{eyebrow:'فورتيس للإنشاءات',title:'الحرفة أولاً، ثم موقع العمل.',text1:'ترافق فورتيس للإنشاءات الأفراد والمهنيين في مشاريع البناء والتجديد والتوسعة. أولويتنا هي موقع منظم وتشطيبات دقيقة وتواصل واضح من البداية إلى التسليم.',text2:'نختار حلولاً بسيطة ومتينة ومناسبة لكل مبنى. كل مشروع تتم متابعته بنفس الدقة مهما كان حجمه.',stats:{1:'سنوات خبرة',2:'مشروعاً منجزاً',3:'التزام'}},
    footer:{legal:'الإشعار القانوني'},legal:{title:'المعلومات القانونية',text:'شركة Fortis Construction SAS، مقرها في فرنسا. يجب استبدال البيانات الإدارية وبيانات الاتصال بالمعلومات الفعلية للشركة قبل النشر.'}
  }
};

function getPath(obj,path){ return path.split('.').reduce((o,k)=>o && o[k],obj); }
function setPath(obj,path,value){
  const parts=path.split('.');
  let cursor=obj;
  parts.slice(0,-1).forEach(key=>{
    if(!cursor[key] || typeof cursor[key] !== 'object') cursor[key]={};
    cursor=cursor[key];
  });
  cursor[parts.at(-1)]=value;
}
function flatten(obj,prefix='',out={}){
  Object.entries(obj).forEach(([key,value])=>{
    const path=prefix?`${prefix}.${key}`:key;
    if(value && typeof value==='object') flatten(value,path,out); else out[path]=value;
  });
  return out;
}

const cacheKey='fortis-translation-cache-v2';
const snapshotKey='fortis-fr-snapshot-v2';
let cache=JSON.parse(localStorage.getItem(cacheKey) || '{}');
let sourceSnapshot=JSON.parse(localStorage.getItem(snapshotKey) || '{}');
const frFlat=flatten(dict.fr);

function normalizeForTranslation(value){
  return String(value)
    .replace(/<br\s*\/?>(?=\s*)/gi,' __FORTIS_BR__ ')
    .replace(/<em>/gi,' __FORTIS_EM_START__ ')
    .replace(/<\/em>/gi,' __FORTIS_EM_END__ ');
}
function restoreTranslatedMarkup(value){
  return String(value)
    .replace(/__FORTIS_BR__/gi,'<br>')
    .replace(/__FORTIS_EM_START__/gi,'<em>')
    .replace(/__FORTIS_EM_END__/gi,'</em>');
}
async function translateOne(text,target){
  const q=normalizeForTranslation(text);
  const url=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${target}&dt=t&q=${encodeURIComponent(q)}`;
  const response=await fetch(url,{mode:'cors'});
  if(!response.ok) throw new Error('translation request failed');
  const json=await response.json();
  const translated=(json?.[0] || []).map(part=>part?.[0]||'').join('').trim();
  if(!translated) throw new Error('empty translation');
  return restoreTranslatedMarkup(translated);
}

async function syncChangedFrenchSource(){
  const changed=[];
  for(const [path,value] of Object.entries(frFlat)){
    if(sourceSnapshot[path] !== value) changed.push(path);
  }
  if(!changed.length) return;

  for(const target of ['en','ar']){
    cache[target]=cache[target]||{};
    for(const path of changed){
      try{
        cache[target][path]=await translateOne(frFlat[path],target);
      }catch(err){
        if(!cache[target][path]){
          const fallback=getPath(dict[target],path);
          if(typeof fallback==='string') cache[target][path]=fallback;
        }
      }
    }
  }

  sourceSnapshot={...frFlat};
  localStorage.setItem(cacheKey,JSON.stringify(cache));
  localStorage.setItem(snapshotKey,JSON.stringify(sourceSnapshot));
}

function applyLanguage(lang){
  const data=dict[lang]||dict.fr;
  const dynamic = lang==='fr' ? frFlat : {...flatten(dict[lang]), ...(cache[lang]||{})};
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=dynamic[el.dataset.i18n] ?? getPath(data,el.dataset.i18n);
    if(typeof value==='string') el.innerHTML=value;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
    const spec=el.dataset.i18nAttr.split(':');
    const attr=spec.shift();
    const path=spec.join(':');
    const value=dynamic[path] ?? getPath(data,path);
    if(typeof value==='string') el.setAttribute(attr,value.replace(/<[^>]+>/g,''));
  });
  localStorage.setItem('fortis-lang',lang);
}

const langSelect=document.getElementById('languageSelect');
const saved=localStorage.getItem('fortis-lang')||'fr';
langSelect.value=saved;
applyLanguage(saved);
syncChangedFrenchSource().then(()=>{
  const current=langSelect.value;
  if(current!=='fr') applyLanguage(current);
});
langSelect.addEventListener('change',async e=>{
  const target=e.target.value;
  applyLanguage(target);
  if(target!=='fr'){
    await syncChangedFrenchSource();
    applyLanguage(target);
  }
});

const btn=document.getElementById('menuBtn');
const menu=document.getElementById('mobileMenu');
function closeMenu(){btn.setAttribute('aria-expanded','false');menu.hidden=true;}
btn.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{if(window.innerWidth>900) closeMenu();});

const modal=document.getElementById('legalModal');
const open=document.getElementById('legalOpen');
const close=document.getElementById('legalClose');
open.addEventListener('click',()=>modal.hidden=false);
close.addEventListener('click',()=>modal.hidden=true);
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close-modal')) modal.hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape') modal.hidden=true;});
