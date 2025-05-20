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

let room = "";
if (day == '(日)') {
    room = "月曜日の授業\n(1)微分積分学・1303・教科書有\n(2)法学・2306・教科書有\n(3)サイバーセキュリティ・2406・教科書無\n(4)学術英語・2209・教科書有\nバス    8：25";
} else if (day == '(月)') {
    room = `今日の授業\n(1)微分積分・1303・教科書有\n(2)法学・2306・教科書有\n(3)サイバーセキュリティ・2406・教科書無\n(4)学術英語・2209・教科書有\nバス    8：25\n
    明日の授業\n(1・2)総合実験・実験室・教科書有\n(3)中国語・2208・教科書無\n(4)専攻教育・第7講義室・教科書無\nバス    8：25`;
} else if (day == '(火)') {
    room = `今日の授業\n(1・2)総合実験・実験室・教科書有\n(3)中国語・2208・教科書無\n(4)専攻教育・第7講義室・教科書無\nバス    8：25\n
            今日の授業\n(2)線形代数学・1403・教科書有\n(3)力学基礎・1303・教科書無\n(4)リスクマネジメント・2304・教科書無\nバス    10：10`;
} else if (day == '(水)') {
    room = `今日の授業\n(2)線形代数学・1403・教科書有\n(3)力学基礎・1303・教科書無\n(4)リスクマネジメント・2304・教科書無\nバス    10：10\n
            明日の授業\n(2)図形科学・2306・教科書有\n(3)無機物質化学・2404・教科書有\n(4)健スポ・総合体育館・教科書有\nバス    10：10`;
} else if (day == '(木)') {
    room = `今日の授業\n(2)図形科学・2306・教科書有\n(3)無機物質化学・2404・教科書有\n(4)健スポ・総合体育館・教科書有\nバス    10：10\n
            明日の授業\n(3)中国語・2209・教科書有\nバス    12:35`;
} else if (day == '(金)') {
    room = "今日の授業\n(3)中国語・2209・教科書有\nバス    12:35";
} else {
    room = "月曜日の授業\n(1)微分積分学・1303・教科書有\n(2)法学・2306・教科書有\n(3)サイバーセキュリティ・2406・教科書無\n(4)学術英語・2209・教科書有\nバス    8：25";
}

const scheduleDiv = document.getElementById("schedule");
if (scheduleDiv) {
    scheduleDiv.innerHTML = `<span class="date">${today}${day}</span><br>`; 
    scheduleDiv.innerHTML += `<span class="room">${room.replace(/\n/g, "<br>")}</span>`;
}