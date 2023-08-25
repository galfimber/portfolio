document.addEventListener("DOMContentLoaded", () => {
  const followCursor = () => {
    // объявляем функцию followCursor
    const el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором

    window.addEventListener("mousemove", (e) => {
      // при движении курсора
      const target = e.target; // определяем, где находится курсор
      if (!target) return;

      if (target.closest(".google-icon")) {
        // если курсор наведён на ссылку
        el.classList.add("follow-cursor_active"); // элементу добавляем активный класс
      } else {
        // иначе
        el.classList.remove("follow-cursor_active"); // удаляем активный класс
      }

      el.style.left = e.pageX + "px"; // задаём элементу позиционирование слева
      el.style.top = e.pageY + "px"; // задаём элементу позиционирование сверху
      if (e.pageX >= "1423") {
        el.style.left = "1423px";
      } else if (e.pageX <= "539") {
        el.style.left = "539px";
      }
      if (e.pageY >= "719") {
        el.style.top = "719px";
      } else if (e.pageY <= "178") {
        el.style.top = "178px";
      }
    });
  };

  followCursor(); // вызываем функцию followCursor
});

document.querySelector("#google-icon").onclick = function () {
  google.classList.add("active");
  google__close.classList.add("active");
};

document.querySelector("#google__close").onclick = function () {
  google.classList.remove("active");
  google__close.classList.remove("active");
};

function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
/* функция получения текущей даты и времени */
function date_time() {
  var current_datetime = new Date();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());

  return hours + ":" + minutes;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
setInterval(function () {
  document.getElementById("main__time").innerHTML = date_time();
}, 1000);

function words_format(value) {
  if(value==0){
    value = "Jan";
  } else if(value==1){
    value = "Feb";
  } else if(value==2){
    value = "Mar";
  } else if(value==3){
    value = "Apr";
  } else if(value==4){
    value = "May";
  } else if(value==5){
    value = "Jun";
  } else if(value==6){
    value = "Jul";
  } else if(value==7){
    value = "Aug";
  } else if(value==8){
    value = "Sep";
  } else if(value==9){
    value = "Oct";
  } else if(value==10){
    value = "Nov";
  } else if(value==11){
    value = "Dec";
  }
  return value;
}
function date_time2(){
  var current_date = new Date();
  var day = zero_first_format(current_date.getDate());
  var month = words_format(current_date.getMonth());
  return day + " " + month;
}
setInterval (function(){
  document.getElementById("main__date").innerHTML = date_time2();
}, 1000)