const DATA = [ 'Первое сентября - всегда особенный день, только вот для меня (шестиклассника Димки Сомова, напомню) эта дата не представляла из себя нечто невероятное. Вокруг всё те же ребята, Шмакова как обычно сразу заняла место за одной партой со мной, Валька как всегда мечтал о миллионе да о том, на что его бы спустить, все галдели, вспоминали летние истории, Васильев как обычно сидел за учебниками. Правда Мироновой да Рыжего нет, ну да это пусть, ведь есть более интересные вещи - сегодня к нам должна была прийти девочка, что только перевелась, внучка Заплаточника. Так мы звали Бессольцева, старика помешанного на картинах да истории.',
    'Но вот, из глубоких раздумий меня вывел Рыжий, который влетел в класс и что есть мочи закричал: «Ребята, у нас такая новенькая...». После этого он втащил за собой девочку, которая чуть успела переступить порог как сразу врезалась в последнего и оба рухнули на пол. А как встали, так она, Лена, сразу начала лыбиться до ушей. Более того, стоило всем начать глумиться над Заплаточником, так она ничего и не сказала, наоборот продолжала улыбаться и хохотать, более того, даже подхватывала издёвки над самой собой да стариком с нескрываемой улыбкой, радостью что ли?. «Странная она какая-то», - стоило мне подумать, как я обнаружил, что уже на полпути к своре одноклассников, окруживших новенькую, Лену. В один момент Рыжий обозвал её чучелом, после чего...',
    '',
    '',
    'Я толкнул Рыжего в спину так, что тот аж врезался в Попова, который отправил его обратно. Он было, решил учудить драку, да не тут-то было. Секунда и вот уже я одной рукой скрутил его и сказал «Сам ты чучело, и не огородное, а обыкновенно-рыжее». После чего он снова начал кривляться и паясничать. Стоило отпустить его, как в класс вошла Маргарита Ивановна, наша классная руководительница. Она стала раздавать подарочные конфеты, одну из которых мне принесла Шмакова. К тому времени подошла и Миронова, колко заметившая, что чем-чем, а вот поеданием конфет на уроках не занимаются. Классная начала было урок, да надо было ещё новенькую куда-нибудь посадить.',
    'Тут Лена подошла ко мне да спросила:<br>— У тебя место свободное? — она всё пялилась на меня и глупо улыбалась.<br>— Занято, — ответил я без задней мысли.<br>Со мной всегда сидела Шмакова, да и странная она какая-то.<br>— А что? — я улыбнулся, всё-таки интересная она. Да и чего упускать возможность лишний раз повеселиться.<br>— Хотела сесть к тебе, ты же меня спас, — cказала она всё с такой же улыбкой до ушей...',
    '',
    '«Ну что ж, сейчас попробуем. — Сказал я и громко крикнул: — Шмакова, новенькая твоё место хочет занять!»Услышав мои слова, она здорово рассердилась, схватила свои вещи и пересела к Попову. После этого Маргарита Ивановна объявила, что на осенние каникулы мы едем на экскурсию в Москву. «Снова на родительские?» - пока все визжали от радости, понимание того, что в очередной раз придётся выпрашивать деньги у родителей не давало мне покоя. Высказав данную мысль, пошла волна шуток, мол, я выделываюсь перед новенькой.',
]


const counterIndex = document.getElementById('counter')
const btnBack = document.getElementById('back-button')
const btnNext = document.getElementById('next-button')
const header = document.getElementById('header')
const expbg = document.getElementById('exp-bg')
const bg = document.getElementById('bg')
const btns = document.getElementById('btns1')
const body = document.getElementById('body')
const choiceBtns = document.getElementById('choice-btns')
const choiceBtn1 = document.getElementById('choice-btn1')
const choiceBtn2 = document.getElementById('choice-btn2')
const choiceBtn3 = document.getElementById('choice-btn3')
const expp1 = document.getElementById('expp1')
const expp2 = document.getElementById('expp2')
const expp3 = document.getElementById('expp3')
const explab = document.getElementById('explab')
let choice

const renderText = (index) => {
    header.dataset.currentStep = index
    const page = index + 1
    header.innerHTML = `<p class="exp-header">Чучело: глава 1</p>`
    counterIndex.innerHTML = `<p class="counter-index">${page}/${DATA.length}</p>`
    if (page !== 3 && page !== 4 && page !== 7){
        expbg.innerHTML = `<p class="exp-text">${DATA[index]}</p>`
    }
    else if (page === 3){
        renderChoice3()
    }
    else if (page === 4){
        renderImg4()
    }
    else if (page === 7){
        renderChoice7()
    }
}

const renderChoice3 = () => {
    choiceBtns.classList.add('choice-btns-on')
    choiceBtn1.classList.add('choice-btn-on')
    choiceBtn2.classList.add('choice-btn-on')
    choiceBtn3.classList.add('choice-btn-on')
    expbg.classList.add('exp-bgoff')
    btnNext.disabled = true
    expp1.innerHTML = `Появилось странное чувство. «Почему это ОН в центре внимания? Сколько же наглости надо иметь, чтобы позволять себе такое перед новенькой? Ну, довольно с меня...»`,
    expp2.innerHTML = 'Как молнией пронеслось в голове: «Что ты себе позволяешь, как ты обращаешься с девушкой? Никакое она не чучело! Даже первого урока не прошло, а ты уже такое себе позволяешь. Не позволю, так мужчины не поступают!».',
    expp3.innerHTML = 'Почему она смеётся, улыбается и... (радуется?) когда её дедушку осмеивают, да и над ней самой насмехаются? Странно это как-то, не понимаю, хотя, да какая разница? Самое время заткнуть этого выскочку.'
}

const renderImg4 = () => {
    bg.classList.add('bg-img4')
    btns.classList.add('navigation-off')
    expbg.classList.add('exp-bgoff')
    btnBack.disabled = true
}

const renderChoice7 = () => {
    choiceBtns.classList.add('choice-btns-on')
    choiceBtn1.classList.add('choice-btn-on')
    choiceBtn2.classList.add('choice-btn-on')
    choiceBtn3.classList.add('choice-btn-on')
    expbg.classList.add('exp-bgoff')
    btnNext.disabled = true
    expp1.innerHTML = `«Сесть ко мне? Улыбается и не сводит глаз. Смущается, ехидничает или... Подлизывается? Даже не знаю. Ну, ладно, натравлю на неё Шмакову и пусть всё идёт своим чередом.»`
    expp2.innerHTML = `«Интересно, Ленка эта всё глаз с меня не сводит. Ну, что же, отличная возможность подтрунить над этой бедняжкой, а заодно и над Шмаковой, пусть поревнует.»`
    expp3.innerHTML = `«Спас... Как рыцарь..? Вот это хорошо получается. Да и нравится мне, как она смотрит на меня, пожалуй, пусть сядет, ничего страшного с этого не будет.»`

}

btnBack.addEventListener('click', (event) => {
    renderText(Number(header.dataset.currentStep) - 1)
    bg.classList.remove('bg-img4')
    btns.classList.remove('navigation-off')
    expbg.classList.remove('exp-bgoff')
    choiceBtns.classList.remove('choice-btns-on')
    choiceBtn1.classList.remove('choice-btn-on')
    choiceBtn2.classList.remove('choice-btn-on')
    choiceBtn3.classList.remove('choice-btn-on')
    btnNext.disabled=false
    console.log('back')
    if(Number(header.dataset.currentStep) === 0){
        btnBack.disabled=true
    }
    if(Number(header.dataset.currentStep) === 3){
        renderImg4()
        btnBack.disabled = true
    }
    if (Number(header.dataset.currentStep) === 7){
        btnBack.disabled = true
    
    }
});

btnNext.addEventListener('click', (event) => {
        btnBack.disabled = false
        const nextTextIndex = Number(header.dataset.currentStep) + 1
        if(DATA.length === nextTextIndex){
            //render()  
        } else {
            bg.classList.remove('bg-img4')
            btns.classList.remove('navigation-off')
            expbg.classList.remove('exp-bgoff')
            choiceBtns.classList.remove('choice-btns-on')
            choiceBtn1.classList.remove('choice-btn-on')
            choiceBtn2.classList.remove('choice-btn-on')
            choiceBtn3.classList.remove('choice-btn-on')
            renderText(Number(header.dataset.currentStep) + 1)
            if (Number(header.dataset.currentStep) === 7){
                btnBack.disabled = true
                if (choiceBtn1.checked === true){
                    expbg.innerHTML = `<p class="exp-text"> <em>— А, Лена. Не то чтобы мне было до этого дело, но в целом, посмотрим что она будет делать дальше.</em><br>Правда, особо роли это не сыграло, так как моё дальнейшее предложение насчёт того, чтобы самим заработать на поездку всё равно было поддержано всем классом, за исключением Вальки-живодёра. Кстати об этом...</p>`
                }
                else if (choiceBtn2.checked === true){
                    expbg.innerHTML = `<p class="exp-text"> <em>— Перед кем? Да перед ней-то? Ага, разбежался.</em><br>Правда, особо роли это не сыграло, так как моё дальнейшее предложение насчёт того, чтобы самим заработать на поездку всё равно было поддержано всем классом, за исключением Вальки-живодёра. Кстати об этом...</p>`
                }
                else if (choiceBtn3.checked === true){
                    expbg.innerHTML = `<p class="exp-text"> <em>— Перед ней? Пожалуй, а почему бы и нет? Быть рыцарем - вообще отлично.</em><br>Правда, особо роли это не сыграло, так как моё дальнейшее предложение насчёт того, чтобы самим заработать на поездку всё равно было поддержано всем классом, за исключением Вальки-живодёра. Кстати об этом...</p>`
                }
                btnNext.addEventListener('click', (event) => {
                    window.location.href = 'home.html'
            })
            }   
            
                
    

        }
        choiceBtn1.checked = false
        choiceBtn2.checked = false
        choiceBtn3.checked = false

});

choiceBtn1.addEventListener('change', (event) => {
    btnNext.disabled = false
});
choiceBtn2.addEventListener('change', (event) => {
    btnNext.disabled = false
});
choiceBtn3.addEventListener('change', (event) => {
    btnNext.disabled = false
});


renderText (0)
