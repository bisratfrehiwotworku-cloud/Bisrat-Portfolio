// Function to open image in fullscreen modal
function openFullImage(imageSrc) {
  const modal = document.getElementById('fullImageModal');
  const modalImg = document.getElementById('modalTargetImg');
  
  modalImg.src = imageSrc;
  modal.style.display = 'flex'; // Opens modal over whole screen
}

// Function to close modal when clicked
function closeFullImage() {
  document.getElementById('fullImageModal').style.display = 'none';
}

window.addEventListener('DOMContentLoaded',()=>{
  let selected = document.querySelector('.selected');
  let saved = localStorage.getItem('lan')||"en";
  if(selected){
    selected.value=saved;
  }
  translates(saved)
  Check();
});

function pages(idd){
  let sec = document.querySelectorAll('.page');
  sec.forEach(s=>{
    s.classList.remove('active');
  })
  let one = document.getElementById(idd);

    one.classList.add('active');
}

//Language Exchange 
const language={
  en:{
    t1:'Home',
    t2:'Contact',
    t3:'Projects',
    t4:'Welcome to my portfolio!',
    t5:'Hi, I am Bisrat Frehiwot grade 11 Ethiopian Highschool student passionate about algorithmic problem solving, modern web interfaces, and data-driven applications. I build responsive, full-stack and front-end web applications with pure JavaScript, solving real-world challenges through creative engineering.',
    t6:'Recognition',
    t7:'Certified in Data Analysis and Web Development by internationally recognized institutions.',
    t8:'Projects',
    t9:'Hotel Website Demo',
    t10:'Link: ',
    t11:'Contact',
    t12:'You can contact me in my phone number, email address, telegram account.',
    t13:'Phone:',
    t14:'Telegram: ',
    t15:'Gmail: '
  },
  am:{
    t1:'ዋና ገጽ',
    t2:'ያግኙኝ',
    t3:'ፕሮጀክቶች',
    t4:'ወደ ፖርትፎሊዮዬ እንኳን ደህና መጡ!',
    t5:'ሰላም፣ እኔ ብስራት ፍሬሕይወት እባላለሁ። የአልጎሪዝም ችግር አፈታት፣ ዘመናዊ የዌብ ገጾች እና በመረጃ ላይ የተመሰረቱ (data-driven) አፕሊኬሽኖች የሚስቡኝ የ11ኛ ክፍል ኢትዮጵያዊ የሁለተኛ ደረጃ ተማሪ ነኝ። በፈጠራ ምህንድስና እውነተኛ ዓለም ችግሮችን ለመፍታት ሙሉ ጃቫስክሪፕት (pure JavaScript) በመጠቀም ተጠቃሚን ያማከሉ ፉል-ስታክ (full-stack) እና የፊት-ለፊት (front-end) የዌብ አፕሊኬሽኖችን እገነባለሁ።',
    t6:'ዕውቅና እና የምስክር ወረቀቶች',
    t7:'በመረጃ ትንተና (Data Analysis) እና በዌብ ልማት (Web Development) በዓለም አቀፍ ደረጃ እውቅና ባላቸው ተቋማት የተረጋገጠ የምስክር ወረቀት አግኝቻለሁ።',
    t8:'ፕሮጀክቶች',
    t9:'የሆቴል ድረ-ገጽ ማሳያ (Demo)',
    t10:'ማስፈንጠሪያ (Link): ',
    t11:'ያግኙኝ',
    t12:'በስልክ ቁጥሬ፣ በኢሜይል አድራሻዬ ወይም በቴሌግራም አካውንቴ ሊያገኙኝ ይችላሉ።',
    t13:'ስልክ:',
    t14:'ቴሌግራም: ',
    t15:'ጂሜይል: '
  }
}

function translates(lang){
  document.querySelectorAll('[data-i18n]').forEach(s=>{
    let key = s.getAttribute('data-i18n');
    if(language[lang]&& language[lang][key]){
       s.textContent=language[lang][key];
      localStorage.setItem('lan',lang);
    }
  })
  Check()
}

function Check(){
  let ams = document.querySelectorAll('.as');
  let na = document.getElementById('hoe');
  let te = document.getElementById('te');
  let tel = document.getElementById('tel');
  let nu =na.textContent;
  let no = 'Home';
  if(nu!==no){
    ams.forEach(s=>{
      s.style.fontSize='17px';
    })
    /*
    te.style.position='relative';
    te.style.left='-210px';
    te.style.top='230px';
    tel.style.position='relative';
    tel.style.left='110px';
    */
  }else{
    /*
      te.style.position='relative';
    te.style.left='10px';
    te.style.top='200px';
    tel.style.left='30px';
    */
 ams.forEach(s=>{
      s.style.fontSize='20px';
    })
  }
}
