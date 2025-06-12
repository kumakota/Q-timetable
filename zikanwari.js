const basic_today = new Date();
const formatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo'
});
const today = formatter.format(basic_today);
const AllDays = [
    '(日)',
    '(月)',
    '(火)',
    '(水)',
    '(木)',
    '(金)',
    '(土)'
];
const day = AllDays[basic_today.getDay()];

//const day = '(月)';       曜日試験用

const Monday ="(1)微分積分学・1303・教科書有\n(2)法学・2306・教科書有\n(4)英語インタラクト・2209・教科書有\nバス    8：25";
const Tuesday = "(3)中国語・2208・教科書無\n(4)工学倫理・オンライン・教科書無\nバス    8：25";
const Wednesday = "(2)線形代数学・1403・教科書有\n(3)力学基礎・1303・教科書無\n(4)データセキュリティ・1403・教科書無\nバス    10：10";
const Thursday = "(3)英語リテラシー・2203・教科書有\n(4)健スポ・総合体育館・教科書有\nバス    10：10";
const Friday = "(1・2)プログラミング・1403・教科書無\n(3)中国語・2208・教科書有\n(4)基幹教育セミナー・2302・教科書無\nバス    12:35";

const lectureInfo = {
    0: "月曜日の授業\n"+Monday,
    1: `今日の授業\n${Monday}\n
        明日の授業\n${Tuesday}`,
    2: `今日の授業\n${Tuesday}\n
        明日の授業\n${Wednesday}`,
    3: `今日の授業\n${Wednesday}\n
        明日の授業\n${Thursday}`,
    4: `今日の授業\n${Thursday}\n
        明日の授業\n${Friday}`,
    5: `今日の授業\n${Friday}\n
        明日の授業\n${Monday}`,

    6: "月曜日の授業\n"+Monday,
}

const room = lectureInfo[basic_today.getDay()];

const scheduleDiv = document.getElementById("schedule");
if (scheduleDiv) {
    scheduleDiv.innerHTML = `<span class="date">${today}${day}</span><br>`; 
    scheduleDiv.innerHTML += `<span class="room">${room.replace(/\n/g, "<br>")}</span>`;
}