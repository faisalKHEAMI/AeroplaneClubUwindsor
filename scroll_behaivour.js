$(document).ready(function () {
    const navBar = $('.nav_bar');
    const button = $('button');
    const textElement = $('.text');
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const list = $('.list1');
    const unorganizedList = $('ul');
    const listItem = $('li');
    const home = $('.home');
    const Competiton = $('.Competiton');
    const sponsors = $('.sponsors');
    const join = $('.join');
    const projects = $('.projects');
    const contact = $('.contact');
    //for about us headliner
    const saeTitle = $('.about_us');
    const info = $('.info');
    let distTopInfoToMax, infoBehindNavBar;

    if (screenWidth < 850) {
        unorganizedList.css({
            'display': 'grid',
            'margin-left': '10%'
        });
        listItem.css('margin-left', '0');
        list.css('margin', '0').css('padding', '0'); // Combined method chaining
    } else {
        $('body').on('scroll', function (e) {
            const topOfInfo = $(this).scrollTop();
            distTopInfoToMax = screenHeight - topOfInfo;
            infoBehindNavBar = (distTopInfoToMax / screenHeight) * 100;
            const navBarSize = infoBehindNavBar > 66 ? infoBehindNavBar : 66;

            if (infoBehindNavBar > 15) {
                navBar.css('width', navBarSize + 2 + '%');
            }
            if (navBarSize - 90 > 3.5) {
                button.css('font-size', '1rem');
                home.css('margin-left', (navBarSize - 90 > 3.5 && navBarSize - 90 < 5 ? navBarSize - 90 : 5) + '%');
                Competiton.add(sponsors).add(join).add(projects).add(contact).css('margin-left', (navBarSize - 90 > 3.5 && navBarSize - 90 < 6 ? navBarSize - 90 : 5) + '%');
            }

            if (infoBehindNavBar < 39 && infoBehindNavBar > 33) {

                saeTitle.css('margin-top', -infoBehindNavBar / 24 + '%');

                const membersMargin = Math.max(infoBehindNavBar - 30, 0);
                info.css('top', membersMargin + '%');
            }

            if (topOfInfo === 0) {
                sponsors.add(button).add(navBarSize).add(info).add(saeTitle).add(listItem).add(join).add(button).add(listItem).add(contact).add(projects).add(navBar).add(home).add(Competiton).removeAttr('style');
            }
            else if (infoBehindNavBar > 70) {
                saeTitle.css('margin-top', -infoBehindNavBar / 24 + '%');
                textElement.stop().animate({ 'margin-top': '0%' }, 500);
            }

        });
    }
});
