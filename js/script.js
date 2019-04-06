$(document).ready(function () {

    window.onload = function () {
        function clock() {
            var date = new Date(),
                day = date.getDate(),
                month = date.getMonth(),
                monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                year = date.getFullYear(),
                hour = date.getHours(),
                min = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (hour < 10) hour = "0" + hour;
            if (min < 10) min = "0" + min;

            document.getElementById("date").innerHTML = day + " " + monthArr[month];
            document.getElementById("time").innerHTML = hour + ":" + min;
            document.getElementById("year").innerHTML = year;
        }

        var timer;

        function clockStart() {
            timer = setInterval(clock, 1000);
            clock();
        }

        clockStart();

        $('select').selectric();

        var accord = $('.accordion');

        accord.find('.row:not(.active)').siblings('div').slideUp();

        accord.find('.row').on('click', function () {

            $(this).siblings('div').stop().slideToggle(500);
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }


        })


    }





})