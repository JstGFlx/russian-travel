const buttonRu = document.querySelector('.header__lang-link_type_ru');
const buttonEn = document.querySelector('.header__lang-link_type_en');

const leadTitle = document.querySelector('.lead__title');
const leadSubtitle = document.querySelector('.lead__subtitle');
const leadCaption = document.querySelector('.lead__caption');
const introTitle = document.querySelector('.intro__title');
const introText = document.querySelector('.intro__text');
const introSpanA = document.querySelector('.intro__span_type_a');
const introSpanB = document.querySelector('.intro__span_type_b');
const introSpanC = document.querySelector('.intro__span_type_c');
const introSpanD = document.querySelector('.intro__span_type_d');
const introSpanF = document.querySelector('.intro__span_type_f');
const placeTitle1 = document.querySelector('.place__title_number_1');
const placeTitle2 = document.querySelector('.place__title_number_2');
const placeTitle3 = document.querySelector('.place__title_number_3');
const placeTitle4 = document.querySelector('.place__title_number_4');
const placeTitle5 = document.querySelector('.place__title_number_5');
const placeParagraph1 = document.querySelector('.place__paragraph_number_1');
const placeParagraph2 = document.querySelector('.place__paragraph_number_2');
const placeParagraph3 = document.querySelector('.place__paragraph_number_3');
const placeParagraph4 = document.querySelector('.place__paragraph_number_4');
const placeParagraph5 = document.querySelector('.place__paragraph_number_5');
const placeParagraph6 = document.querySelector('.place__paragraph_number_6');
const placeParagraph7 = document.querySelector('.place__paragraph_number_7');
const placeParagraph8 = document.querySelector('.place__paragraph_number_8');
const placeParagraph9 = document.querySelector('.place__paragraph_number_9');
const contentTitleA = document.querySelector('.content-title_type_a');
const contentTitleB = document.querySelector('.content-title_type_b');
const contentSubtitleA = document.querySelector('.content-subtitle_type_a');
const contentSubtitleB = document.querySelector('.content-subtitle_type_b');
const commentQuoteA = document.querySelector('.comment__quote_type_a');
const commentQuoteB = document.querySelector('.comment__quote_type_b');
const commentQuoteC = document.querySelector('.comment__quote_type_c');
const commentAuthorA = document.querySelector('.comment__author_type_a');
const commentAuthorB = document.querySelector('.comment__author_type_b');
const commentAuthorC = document.querySelector('.comment__author_type_c');
const coverTitle = document.querySelector('.cover__title');
const coverSubtitle = document.querySelector('.cover__subtitle');
const footerLinkA = document.querySelector('.footer__link_type_a');
const footerLinkB = document.querySelector('.footer__link_type_b');
const footerLinkC = document.querySelector('.footer__link_type_c');
const footerLinkD = document.querySelector('.footer__link_type_d');
const footerLinkE = document.querySelector('.footer__link_type_e');



buttonRu.addEventListener('click', () => {
	buttonRu.classList.add('header__lang-link_hover');
	buttonEn.classList.remove('header__lang-link_hover');
	switchToRu();
});

buttonEn.addEventListener('click', () => {
	buttonEn.classList.add('header__lang-link_hover');
	buttonRu.classList.remove('header__lang-link_hover');
	switchToEn();
});


function switchToEn() {
	leadTitle.textContent = 'Traveling in Russia';
	leadSubtitle.textContent = 'The real country is not in the news bulletins, but here.';
	leadCaption.textContent = 'your shelf is top';
	introTitle.textContent = "What didn't we see there?";
	introText.textContent = 'According to VTsIOM polls, 95% of Russians dream of going somewhere, but only 36% are planning	conduct	vacation in your home country.Like, what have we not seen here at home ? In fact, Russia is a whole universe with	the gentle sea of ​​the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau.And	you can also see all these beauties without millions on the account, a passport and many hours of flights.As, for example, Vera Bashmakova is brave	young	mother, who took three children in her arms, sat them in her "Lada" and drove 20 thousand kilometers in her native country.We have selected and described some interesting places worthy of your vacation.';
	introSpanA.textContent = 'Time zones';
	introSpanB.textContent = 'UNESCO Natural Heritage Sites';
	introSpanC.textContent = 'UNESCO Cultural Heritage Sites';
	introSpanD.textContent = 'Natural Reserves';
	introSpanF.textContent = 'Airports';
	placeTitle1.textContent = 'Curonian Spit';
	placeTitle2.textContent = 'Kola';
	placeTitle3.textContent = 'Altai';
	placeTitle4.textContent = 'Winter Baikal';
	placeTitle5.textContent = 'Karelia';
	placeParagraph1.textContent = 'Here, in the middle of forests and sand dunes, you can	see two water horizons - calm Curonian Lagoon on the one hand and rippled waves of the Baltic Sea on the other. Unique natural area on the edge of the Russian enclave.';
	placeParagraph2.textContent = 'The Kaliningrad region does not end there. For	traveler and researcher	in the same neighborhood - the westernmost point of Russia, the Baltic Spit - and the German heritage of the placer	small	seaside towns. The atmosphere of these places excludes the hustle and bustle, plunging into the tranquility of nature	and the smell	steel, cool sea.';
	placeParagraph3.textContent = 'Almost the entire peninsula lies beyond the Arctic Circle.	Sami tundra, from which	on south - taiga, and to the north - the Arctic Ocean, pretending to be the Barents Sea.';
	placeParagraph4.textContent = "You may have watched Zvyagintsev and even heard history of the Arctic festival in Teriberke. Perhaps the word 'Khibiny' did not remain under the snow of school memories of geography lessons.	Perhaps you were not interested in a superdeep borehole piercing the earth's crust, and from apatites you have long	been apathy covers. But your dream of seeing the northern lights starts to come true with your ticket	to Murmansk.";
	placeParagraph5.textContent = 'Altai is one of the most beautiful places in Russia. The first	queue from behind the mountains: if	go along the ridge, you will see pine-covered slopes, mountain rivers and lakes. And if you open in the car	windows, you will be able to get acquainted with the invisible miracle of these places - the mountain air.';
	placeParagraph6.textContent = "The climate in Altai is moderate, so it's better to go here just in the summer. So you will see all the variety of local flora and fauna. Elk roam the forests of Altai, eagles fly over the ridges, and	plains roe deer graze. And the famous Pallas' cat are also inhabitants of the Altai Territory.";
	placeParagraph7.textContent = 'Everyone knows Baikal as the largest lake in the world. Many also know that it is the largest source of fresh water and one of the most beautiful places in Russia.';
	placeParagraph8.textContent = 'Of course it is. But Baikal is still an ideal place for competitions in skioring. This is the kind of sport where the skier straps himself	to the motorcycle, and the tandem tries to develop as fast as possible on the ice. In March 2019 at the festival The Baikal Mile set a world record of 197.011 km / h. ';
	placeParagraph9.textContent = 'Siberia ends not in the Urals, but in Karelia:	Siberian taiga larch does not grow west of Vodlozero. But here it reaches 30 meters - the forests of Karelian	national parks because of the impenetrable swamps have never known an ax. Some pines are already more than half a millennium. Touch a living creature that has seen the sun before Ivan the Terrible saw it. In the virgin forest for a hundred kilometers you will not find a trail. And on rare paths the trees	a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here.';
	contentTitleA.textContent = 'Into the depths of the Earth and into deep space';
	contentTitleB.textContent = 'Russian photographers';
	contentSubtitleA.textContent = 'Video from Stereotactic studio about places in Russia where fundamental research';
	contentSubtitleB.textContent = ' Nature and people inspired their award-winning work international competitions';
	commentQuoteA.textContent = '“If it seems to you that nothing is happening in Russia, then just look out "Out" ... "';
	commentQuoteB.textContent = '“You come and people tell you how bad they are. A when you show how they feel bad, then you bastard and blackened everything."';
	commentQuoteC.textContent = 'Based on the educational topic about Transsib and iframes - a journey from the capital to Lake Baikal by train.';
	commentAuthorA.textContent = 'Victor Lyagushkin';
	commentAuthorB.textContent = 'Ivan Khafizov';
	commentAuthorC.textContent = 'Sergey Maximishin';
	coverTitle.textContent = 'To Baikal “on dogs”';
	coverSubtitle.textContent = 'Based on the educational topic about Transsib and iframes - a journey from the capital to Baikal	by train.';
	footerLinkA.textContent = 'Maps';
	footerLinkB.textContent = 'Weather';
	footerLinkC.textContent = 'Schedule';
	footerLinkD.textContent = 'Calendar';
	footerLinkE.textContent = 'Travel';
}

function switchToRu() {
	leadTitle.textContent = 'Путешествия по России';
	leadSubtitle.textContent = 'Настоящая страна не в выпусках новостей, а здесь.';
	leadCaption.textContent = 'ваша полка — верхняя';
	introTitle.textContent = 'Чего мы там не видели?';
	introText.textContent = 'По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют	провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с	ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно	без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая	молодая	мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной	стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.';
	introSpanA.textContent = 'Часовых поясов';
	introSpanB.textContent = 'Объектов природного наследия ЮНЕСКО';
	introSpanC.textContent = 'Объектов культурного наследия ЮНЕСКО';
	introSpanD.textContent = 'Природных заповедников';
	introSpanF.textContent = 'Аэропортов';
	placeTitle1.textContent = 'Куршская коса';
	placeTitle2.textContent = 'Кольский';
	placeTitle3.textContent = 'Алтай';
	placeTitle4.textContent = 'Зимний Байкал';
	placeTitle5.textContent = 'Карелия';
	placeParagraph1.textContent = 'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта —	спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой.Уникальная	природная зона на краю российского анклава.';
	placeParagraph2.textContent = 'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов.Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.';
	placeParagraph3.textContent = 'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на	юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.';
	placeParagraph4.textContent = 'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в	Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии.	Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно	накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.';
	placeParagraph5.textContent = 'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле	окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.';
	placeParagraph6.textContent = 'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на	равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.';
	placeParagraph7.textContent = 'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.';
	placeParagraph8.textContent = 'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале	«Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.';
	placeParagraph9.textContent = 'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских	национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем	полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный.	В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.';
	contentTitleA.textContent = 'В глубины Земли и в дальний космос';
	contentTitleB.textContent = 'Фотографы, снимающие Россию';
	contentSubtitleA.textContent = 'Видео от студии Stereotactic о местах в России, где ведутся фундаментальные исследования';
	contentSubtitleB.textContent = 'Природа и люди вдохновили их работы, удостоенные наград на международных конкурсах';
	commentQuoteA.textContent = '«Если вам кажется, что в России ничего не происходит, то	просто выгляньте “наружу”…»';
	commentQuoteB.textContent = '«Если в город едут туристы — неважно за чем они туда едут:	за шамбалой или фрески Рублева искать, или на родину Тарковского — туристы обеспечивают любой город молодёжью, рабочими местами и	в конечном счёте наполняют его жизнью.»';
	commentQuoteC.textContent = '«Ты приезжаешь, и люди рассказывают тебе, как им плохо. А когда ты покажешь, как	им плохо, то ты сволочь и всё очернил.»';
	commentAuthorA.textContent = 'Виктор Лягушкин';
	commentAuthorB.textContent = 'Иван Хафизов';
	commentAuthorC.textContent = 'Сергей Максимишин';
	coverTitle.textContent = 'До Байкала «на собаках»';
	coverSubtitle.textContent = 'По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала на электричках.';
	footerLinkA.textContent = 'Карты';
	footerLinkB.textContent = 'Погода';
	footerLinkC.textContent = 'Расписание';
	footerLinkD.textContent = 'Календарь';
	footerLinkE.textContent = 'Путешествия';
}

