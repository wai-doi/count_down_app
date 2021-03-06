$(function() {
  countDown();
});
function countDown() {
  var startDateTime = new Date();
  $('div.event').each(function(_,value){
    var endDateTime = new Date($(value).children('.date_text').text());
    var left = endDateTime - startDateTime;
    var a_day = 24 * 60 * 60 * 1000;
  
    // 期限から現在までの『残時間の日の部分』
    var d = Math.floor(left / a_day) 
  
    // 期限から現在までの『残時間の時間の部分』
    var h = Math.floor((left % a_day) / (60 * 60 * 1000)) 
  
    // 残時間を秒で割って残分数を出す。
    // 残分数を60で割ることで、残時間の「時」の余りとして、『残時間の分の部分』を出す
    var m = Math.floor((left % a_day) / (60 * 1000)) % 60 
  
    // 残時間をミリ秒で割って、残秒数を出す。
    // 残秒数を60で割った余りとして、「秒」の余りとしての残「ミリ秒」を出す。
    // 更にそれを60で割った余りとして、「分」で割った余りとしての『残時間の秒の部分』を出す
    var s = Math.floor((left % a_day) / 1000) % 60 % 60 
  
    $(value).find("div.TimeLeft").text(d + '日' + h + '時間' + m + '分' + s + '秒');
  })
  setTimeout('countDown()', 1000);
}

