$(document).ready(function () {
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();
    const navBar = $('.nav_bar');
    const button = $('.list1 button');
    const list = $('.list1');
    const unorganizedList = $('ul');
    const listItem = $('.list1 li');
    let prevScrollPos = $(window).scrollTop();
    //for SEA competitions
    const saeTitle = $('.title');

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
        if (infoBehindNavBar < 38) {
            saeTitle.css('margin-top', '0');
            button.css('font-size', '1rem');
            listItem.css('margin-left', (infoBehindNavBar - 90 > 3.5 && infoBehindNavBar - 90 < 7 ? infoBehindNavBar - 90 : 7) + '%');
        }

        if (infoBehindNavBar < 10) {
            button.css('text-shadow', 'none');
        }

        if (infoBehindNavBar > 29 && infoBehindNavBar < 100) {
            saeTitle.css('margin-top', -infoBehindNavBar / 24 + '%');
        } else if (infoBehindNavBar > 70) {
            saeTitle.removeAttr('style');
            button.removeAttr('style');
        }

        console.log('Info behind nav bar:', infoBehindNavBar);
        console.log('Scroll direction:', scrollDirection);

        const navBarSize = infoBehindNavBar > 66 ? infoBehindNavBar : 66;

        if (infoBehindNavBar > 15) {
            navBar.css('width', navBarSize + 2 + '%');
        }
        if (navBarSize - 90 > 3.5) {
            button.css('font-size', '1rem');
       }
        if (infoBehindNavBar > 97) {
            console.log('removing attr');
           navBar.add(saeTitle).add(listItem).add(button).removeAttr('style');

        }
    });
}

}
);