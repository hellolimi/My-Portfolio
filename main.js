/* gnb - panel */
const windowWidth = window.innerWidth;
const activatePanel = () => {
    const panelBtn = document.querySelector('.panel a');
    const mainNav = document.querySelectorAll('.mainNav');
    const header = document.querySelector('header');
    panelBtn.onclick = e => {
        e.preventDefault();
        header.classList.toggle('active');
        document.body.classList.toggle('active');
    }
    for(var i=0;i<mainNav.length;i++){
        mainNav[i].onclick = e => {
            e.stopPropagation();
            header.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    }
}
if(windowWidth < 768){
    activatePanel();
}

/* project preview under 1024px */
const preview = document.querySelectorAll('.preview');
const previewBtn = document.querySelectorAll('.goView');
const viewList = () => {
    for(var i=0;i<5;i++){
        const thisView = preview[i];
        previewBtn[i].onclick = e => {
            e.preventDefault();
            e.stopPropagation();
            thisView.classList.toggle("active");
        }
    }
}
if(windowWidth <= 1024){
    viewList();
}

/* windowResize */
window.addEventListener('resize', e => {
    const currentW = e.currentTarget.outerWidth;
    if(currentW < 768){
        activatePanel();
    }
    if(currentW <= 1024){
        viewList();
    }
});


/* loading & main_animation */
const typing = () => {
    const text = '안녕하세요, 신입 프론트엔드 개발자 김경림입니다!';
    const main = document.getElementById('main');
    const mainText = document.querySelector('.mainText');

    let num = 0;
    let typing;
    setTimeout(()=>{
        typing = setInterval(()=>{
            num<text.length&&(mainText.textContent += text[num]);
            num++;
        }, 90);
    }, 1800);
    clearInterval(typing);
}

/* window onload */
window.onload = () => {
    main.classList.add('active');
    setTimeout(()=>{
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
    }, 800);
    typing();
};

/* projects navigation */
const list = document.querySelectorAll('#projects .project');
const projects = document.getElementById('projects');
const proMenu = document.querySelectorAll('#projects .proMenu');

for(var i=0;i<5;i++){
    let thisList = list[i];
    proMenu[i].addEventListener("click", e => {
        e.preventDefault();
        thisList.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
}

/* contact */
(function() {
    emailjs.init("user_DcQkjZ0ln7K2juuO6onfp");
})();

/* const contactForm = document.getElementById('contactForm'); */
const message = document.getElementById('message');
function sendEmail(e) {
    e.preventDefault();
    const sender = document.contactForm.name;
    const contact = document.contactForm.contact;
    const addr = document.contactForm.address;
    const message = document.contactForm.message;

    emailjs.sendForm('service_musfz3i', 'template_nixwv2g', e.target, 'user_DcQkjZ0ln7K2juuO6onfp')
        .then((result) => {
            alert("연락주셔서 감사합니다! 빠른 시일 내 답변드리겠습니다 :)");
        }, (error) => {
            console.log(error.text);
            alert("SORRY! 메일을 보내는 데 실패하였습니다.");
        });

        sender.value = '';
        contact.value = '';
        addr.value = '';
        message.value = '';
}

contactForm.addEventListener('submit', sendEmail);
