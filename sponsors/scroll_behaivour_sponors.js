$(document).ready(function () {
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const navBar = $('.nav_bar');
    const button = $('.list1 button');
    const list = $('.list1');
    const unorganizedList = $('ul');
    const listItem = $('.list1 li');
    const home = $('.home');
    const Competiton = $('.Competiton');
    const sponsors = $('.sponsors');
    const join = $('.join');
    const projects = $('.projects');
    const contact = $('.contact');
    const title = $('.title');
    let prevScrollPos = $(window).scrollTop();
    
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
            const currentScrollPos = $(this).scrollTop();
            
            // Determine scroll direction
            const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';

            // Update previous scroll position
            prevScrollPos = currentScrollPos;

            distTopInfoToMax = screenHeight - currentScrollPos;

            infoBehindNavBar = (distTopInfoToMax / screenHeight) * 100;

            console.log('Info behind nav bar:', infoBehindNavBar);
            console.log('Scroll direction:', scrollDirection);

            if (scrollDirection === 'down' && infoBehindNavBar >40) {
                title.css('top', -infoBehindNavBar * 0.14 + 'vh');
            } else if (scrollDirection === 'up' && infoBehindNavBar <100) {
                title.css('top', -infoBehindNavBar * 0.17 + 'vh');

            }
            else {
                if (infoBehindNavBar > 97) {
                    title.css('top', '-20vh');
                }
            }
            const navBarSize = infoBehindNavBar > 66 ? infoBehindNavBar : 66;

            if (infoBehindNavBar > 15) {
                navBar.css('width', navBarSize + 2 + '%');
            }
            if (navBarSize - 90 > 3.5) {
                button.css('font-size', '1rem');
                home.css('margin-left', (navBarSize - 90 > 3.5 && navBarSize - 90 < 5 ? navBarSize - 90 : 5) + '%');
                Competiton.add(sponsors).add(join).add(projects).add(contact).css('margin-left', (navBarSize - 90 > 3.5 && navBarSize - 90 < 6 ? navBarSize - 90 : 5) + '%');
            }
            if (infoBehindNavBar > 97) {
                navBar.add(title).add(button).add(Competiton).add(sponsors).add(join).add(projects).add(contact).add(home).add(list).removeAttr('style');
     
             }
        });
    }
});
