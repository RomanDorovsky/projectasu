const page = document.getElementById('page');
const header = document.getElementById('header-txt');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const menu4 = document.getElementById('menu4');
const menu5 = document.getElementById('menu5');
const menu6 = document.getElementById('menu6');
const menu7 = document.getElementById('menu7');


const headerHide = () =>{
    document.getElementById('header').classList.add('header-hidden')
}
const mainMenuHide = () => {
    document.getElementById('main-menu').classList.add('main-menu-hidden')
}
const secondMenuHide = () => {
    document.getElementById('second-menu').classList.add('second-menu-hidden')
}
const contentHide = () => {
    document.getElementById('page').classList.add('text-area-hidden')
}
const headerUnhide = () => {
    document.getElementById('header').classList.remove('header-hidden')
}
const mainMenuUnhide = () => {
    document.getElementById('main-menu').classList.remove('main-menu-hidden')
}
const secondMenuUnhide = () => {
    document.getElementById('second-menu').classList.remove('second-menu-hidden')
}
const contentUnhide = () => {
    document.getElementById('page').classList.remove('text-area-hidden')
}
const triMenuHide = () => {
    document.getElementById('tri-menu').classList.add('second-menu-hidden')
}
const triMenuUnhide = () => {
    document.getElementById('tri-menu').classList.remove('second-menu-hidden')
}
const fMenuHide = () => {
    document.getElementById('f-menu').classList.add('second-menu-hidden')
}
const fMenuUnhide = () => {
    document.getElementById('f-menu').classList.remove('second-menu-hidden')
}

document.getElementById('menu2').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuHide,200)
    setTimeout(renderSec,800)
    setTimeout(secondMenuUnhide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('s-menu2').checked = true;
}
document.getElementById('s-menu1').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuUnhide,200)
    setTimeout(renderMain,800)
    setTimeout(secondMenuHide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('menu1').checked = true;
}
document.getElementById('menu3').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuHide,200)
    setTimeout(renderTri,800)
    setTimeout(triMenuUnhide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('t-menu2').checked = true;
}
document.getElementById('t-menu1').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuUnhide,200)
    setTimeout(renderMain,800)
    setTimeout(triMenuHide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('menu1').checked = true;
}

document.getElementById('menu4').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuHide,200)
    setTimeout(renderF,800)
    setTimeout(fMenuUnhide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('f-menu2').checked = true;
}
document.getElementById('f-menu1').onclick = function(){
    setTimeout(headerHide,0)
    setTimeout(mainMenuUnhide,200)
    setTimeout(renderMain,800)
    setTimeout(fMenuHide,200)
    setTimeout(headerUnhide,1000)
    setTimeout(contentHide,0)
    setTimeout(contentUnhide,1200)
    document.getElementById('menu1').checked = true;
}

const renderMain = () => {
    header.innerHTML = `<h1>Главная страница</h1>`
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Главная страница</div>
    <p>Добро пожаловать на сайт проекта «Взаимосвязь эмоционального интеллекта и психологической безопасности подростков», посвящённый развитию навыков понимания и контроля своих эмоций и эмоций окружающих!</p>
    <p>В ходе нашей научно-исследовательской работы были выявлены достоверные взаимосвязи между:</li>
    <li>Позитивным отношением (Прим. - здесь и далее по «Шкала психологического благополучия» К.Рифф) и МП (Прим. - здесь и далее по «ЭмИН» Д.В.Люсина); позитивным отношением и ВУ; позитивным отношением и МЭИ;</li>
    <li>Управлением средой и ВУ; управлением средой и МУ; управлением средой и МЭИ; управлением средой и ОЭИ;</li>
    <li>Самопринятием и ВУ; самопринятием и МЭИ; самопринятием и ПЭ; самопринятием и МП;</p>
    <p>Что позволяет нам предположить о том, что чем лучше развит эмоциональный интеллект личности, тем он более психологически благополучен.</p>
    <p>В связи с этим мы решили создать данный сайт, в котором будут собраны различные упражнения для самостоятельного развития человеком своего эмоционального интеллекта, что может изменить его состояние психологического благополучия и безопасности.</p>
    <p>На данном сайте вы можете изучить такие блоки, как: понимание эмоций, эмпатия, контроль эмоций.</p>
    <p>В каждом блоке представлено несколько упражнений, письменные инструкции к которым подкрепляются различными наглядными изображениями и видеоматериалами.</p>
    <p>На данный момент работать с сайтом рекомендуется только на ПК, но в дальнейшем мы планируем адаптировать данную версию сайта для мобильных устройств, расширить количество различных упражнений и практик для развития эмоционального интеллекта.</p>
    </div>`
};

const renderSec = () => {
    header.innerHTML = `<h1>Понимание эмоций</h1>`
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Понимание эмоций</div>
    <p>В данном разделе мы предлагаем Вам познакомиться со своими эмоциями, отработать навыки их определения, понимания и осознания того, какие они бывают и откуда берутся.</p>
    <p>Вам предоставляется на выбор три упражнения: <b>зеркало</b>, <b>раздражители</b> и <b>дневник эмоций</b>.</p>
    <p>Вы можете проходить данные упражнения в любом порядке, главное для достижения результата - это дисциплинированность и ежедневные подходы.</p>
    <p>Не стоит беспокоиться, если у Вас не всё сразу получается, ведь это навык, требующий отработки, практики и упорства, в соответствии с чем каждому человеку понадобится разное время для его оттачивания.</p>
    </div>`
};

document.getElementById('s-menu2').onclick = function() {
    renderSec()
}

const renderSec1 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Зеркало</div>
    <p>Встаньте напротив зеркала, расслабьтесь. Начните изображать различные эмоции.</p>
    <li>Радость: расслабьте мышцы лица и широко улыбнитесь, при этом подумайте о чем-нибудь приятном, будь то вкусный перекус или прогулка с друзьями.</li>
    <li>Отвращение: расслабьте мышцы лица, прищурьтесь, отверните лицо чуть в сторону, при этом напрягите нос, приподнимите верхнюю губу и представьте протухшую пищу или ваше самое нелюбимое блюдо.</li>
    <li>Страх: расслабьте мышцы лица, приподнимите и вытяните брови, приподнимите верхние веки, держа в напряжении нижние, вытяните губы, при этом представьте что-то пугающее, опасное.</li>
    <li>Удивление: расслабьте мышцы лица, широко откройте глаза, при этом подумав с удивлением: «Для чего это делать?» — спокойно закройте глаза.</li>
    <li>Печаль: расслабьте мышцы лица, опустите уголки рта, рассейте взгляд (начните смотреть в одну точку, постепенно рассеивая своё внимание, пытаясь рассмотреть из этой точки всю картину в целом), приопустите верхние веки, вспомните ситуацию, вызвавшую у вас грусть, тоску.</li>
    <li>Гнев: расслабьте мышцы лица и прищурьтесь, при этом напрягите нос и подумайте: «Как мне всё это надоело!»</li>
    <li>Счастье: расслабьте мышцы лица, приподнимите щёки, чуть прищурьте глаза, легко улыбнитесь, представьте себе самый счастливый момент в вашей жизни.</li>
    <p>Повторяйте данное упражнение ежедневно на протяжении недели, попробуйте изображать данные эмоции исключительно при помощи глаз, думая о соответствующей эмоции. Попробуйте себя в тренажёре распознавания эмоций, который поможет вам не только закрепить свой результат, но и начать лучше и быстрее распознавать эмоции окружающих вас людей.</p>
    <p><a href="https://ceilonsoft.ru/mimika/index.html">Онлайн-тренажер для отработки навыка распознания эмоций.</a></p>
    </div>`
};

document.getElementById('s-menu3').onclick = function() {
    renderSec1()
}

const renderSec2 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Раздражители</div>
    <p>Попробуйте в течение нескольких дней целенаправленно обращать внимание на неожиданные раздражающие факторы: например, на резкие и громкие звуки, такие как сигнал клаксона автомобиля, лай соседской собаки, а также на яркий свет, например, вспышку света от фотоаппарата, яркое солнце.</p>
    <p>Попытайтесь подробно описать, какие эмоции и чувства Вы испытываете при столкновении с ними и каким образом данные раздражители влияют на ваше настроение и эмоциональное состояние.</p>
    <div class="display-flex"><p class="margin-top"><b>Пример</b>: рядом резко подлетает и начинает жужжать оса, это вызывает у меня удивление и последующий испуг, страх того, что она может меня ужалить, я начинаю отмахиваться от неё и отходить от того места подальше. Больше я не хочу идти туда, где я её встретил.</p>
    <img src="../img/2.jpg"></div>
    </div>`
};

document.getElementById('s-menu4').onclick = function() {
    renderSec2()
}

const renderSec3 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Дневник эмоций</div>
    <p>	В данном упражнение Вам предлагается записывать все свои эмоции, что вы испытали за день, определять их силу от 1 до 10 и описывать причину, описать, какой реакцией организма сопровождается данная эмоция, как вы себя чувствовали в тот момент физически и ментально.</p>
    <div class="display-flex"><p class="margin-top"><b>Пример</b>: сегодня днём я испытал счастье, это просто 10 из 10! Я погулял с Таней, как же это было чудесно! Всё тело было лёгкое, словно пёрышко, а я так и горел энергией и был полон сил! Хотелось улететь на седьмое небо от счастья!</p>
    <img class="img" src="../img/3.jpg"></div>
    </div>`
};

document.getElementById('s-menu5').onclick = function() {
    renderSec3()
}

const renderTri = () => {
    header.innerHTML = `<h1>Эмпатия</h1>`
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Эмпатия</div>
    <p>В данном разделе мы предлагаем Вам улучшить своё понимания эмоций других людей.</p>
    <p>Вам предоставляется на выбор три упражнения: <b>наблюдение</b>, <b>эмоции персонажей</b> и <b>эмпатия и злость</b>.</p>
    <p>Вы можете проходить данные упражнения в любом порядке, главное для достижения результата - это дисциплинированность и ежедневные подходы.</p>
    <p>Не стоит беспокоиться, если у Вас не всё сразу получается, ведь это навык, требующий отработки, практики и упорства, в соответствии с чем каждому человеку понадобится разное время для его оттачивания.</p>
    </div>`
};

document.getElementById('t-menu2').onclick = function() {
    renderTri()
}

const renderTri1 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Наблюдение</div>
    <p>Изучайте поведение людей в общественном транспорте, на отдыхе, или в любых других местах, где есть возможность наблюдать и проанализировать их реакции. Подумайте о том, что чувствуют эти люди, в каких отношениях они находятся, какие эмоции передают или стараются скрыть. Какие эмоции, на ваш взгляд, они должны испытывать? Оцените, соответствует ли выражаемая эмоция действительной ситуации, или же человек подавляет либо преувеличивает свои чувства.</p>
    </div>`
};

document.getElementById('t-menu3').onclick = function() {
    renderTri1()
}

const renderTri2 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Эмоции персонажей</div>
    <p>Вспомните пять известных исторических личностей и сфокусируйтесь на их эмоциональном состоянии в различные моменты жизни.</p>
    <p>Приведу примеры: Махатма Ганди. Борьба за независимость Индии и мирное сопротивление Ганди исходили из его глубоких убеждений в ненасилии и праведности. В то же время он мог чувствовать усталость от непрерывной борьбы, решимость в достижении своих целей и сострадание к страдающим.</p>
    <p>Или, Василий IV: Судьба царевича Василия IV была полна испытаний и борьбы за власть во времена Смутного времени. Он мог чувствовать страх за свою жизнь, обиду от неправедных обвинений в измене, но тем не менее сохранять надежду на будущее и веру в свою справедливость.</p>
    </div>`
};

document.getElementById('t-menu4').onclick = function() {
    renderTri2()
}

const renderTri3 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Эмпатия и злость</div>
    <p>Упражнение научит вас применять эмпатию для преодоления чувства злобы к другому человеку. Представьте себе ситуацию, когда вы очень сердились на кого-то, а затем сформулируйте эмпатическое высказывание. Например:</p>
    <p>Раздраженный человек: "Ты никогда не выполняешь то, о чем я прошу!"</p>
    <p>Эмпатический ответ: "Ты чувствуешь раздражение потому, что я не выполнил свои обязанности, и тебе пришлось делать мою работу вместо меня."</p>
    </div>`
};

document.getElementById('t-menu5').onclick = function() {
    renderTri3()
}


const renderF = () => {
    header.innerHTML = `<h1>Контроль эмоций</h1>`
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Контроль эмоций</div>
    <p>В данном разделе мы предлагаем Вам улучшить навык контролирования своих эмоций.</p>
    <p>Вам предоставляется на выбор три упражнения: <b>найти и запомнить</b>, <b>перевод в тело</b> и <b>главное - дышать</b>.</p>
    <p>Вы можете проходить данные упражнения в любом порядке, главное для достижения результата - это дисциплинированность и ежедневные подходы.</p>
    <p>Не стоит беспокоиться, если у Вас не всё сразу получается, ведь это навык, требующий отработки, практики и упорства, в соответствии с чем каждому человеку понадобится разное время для его оттачивания.</p>
    </div>`
};

document.getElementById('f-menu2').onclick = function() {
    renderF()
}

const renderF1 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Найти и запомнить</div>
    <p>В течение дня уделите внимание десяти моментам радости, позвольте себе искренне насладиться ими и заметьте, как изменится ваше настроение. Если получится, взгляните на себя в зеркало, почувствуйте эмоции и постарайтесь сохранить в памяти свои физические ощущения.</p>
    <p>На следующий день обнаружьте десять моментов, вызывающих удивление, и отследите, как это повлияет на ваше состояние.</p>
    <p>По аналогичной схеме попрактикуйтесь вызывать и осознавать все эмоции, способствующие повышению эффективности человеческой деятельности: принятие, доверие, интерес, восхищение.</p>
    </div>`
};

document.getElementById('f-menu3').onclick = function() {
    renderF1()
}

const renderF2 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Перевод в тело</div>
    <p>Поскольку любые эмоции отражаются в нашем теле, у нас есть возможность контролировать эмоциональное состояние, управляя своим телом. Одним из способов регуляции эмоций является техника, заключающаяся в переносе негативной эмоции в определенную часть тела, например, в кулак, который сначала сознательно напрягается, а затем расслабляется. Этот процесс можно повторять несколько раз, пока эмоция не отступит. Другой вариант - удерживать напряжение в мышце максимально долго, пока мышца не начнет постепенно расслабляться ненамеренно.</p>
    <p></p>
    <p></p>
    </div>`
};

document.getElementById('f-menu4').onclick = function() {
    renderF2()
}

const renderF3 = () => {
    page.innerHTML = `<div class="txt">
    <div class="txt-header">Главное - дышать</div>
    <p>Ещё один способ держать эмоции под контролем – это выработать автоматический рефлекс, состоящий из глубокого вдоха и медленного выдоха. Рефлекс вырабатывается регулярным выполнением упражнения – вспомните какую-нибудь негативную эмоцию (например, вспоминаете как вас обругал учитель), и тут же делаете глубокий вдох и медленный выход. Если делать такое упражнение три раза в день и несколько месяцев – это будет происходить на автомате при проживании негативных эмоций.</p>
    <p></p>
    <p></p>
    </div>`
};

document.getElementById('f-menu5').onclick = function() {
    renderF3()
}

renderMain()
