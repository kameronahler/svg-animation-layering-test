$('document').ready(function () {
    var top = $('#top');
    var middle = $('#middle');
    var bottom = $('#bottom');
    var topLeft = $('#top-left');
    var topMiddle = $('#top-middle');
    var topRight = $('#top-right');
    var middleLeft = $('#middle-left');
    var middleMiddle = $('#middle-middle');
    var middleRight = $('#middle-right');
    var bottomLeft = $('#bottom-left');
    var bottomMiddle = $('#bottom-middle');
    var bottomRight = $('#bottom-right');

    $('.bubble-wrapper').toggle();

    top.click(function () {

        // click on top and it makes all other layers not active and forces them to close and opens top bubbles and closes all other bubbles
        middle.add(bottom).attr('class', 'not-active up');
        topLeft.add(topMiddle).add(topRight).attr('class', 'bubble-active');
        middleLeft
            .add(middleMiddle)
            .add(middleRight)
            .add(bottomLeft)
            .add(bottomMiddle)
            .add(bottomRight).attr('class', 'bubble-not-active');

        // if it is active then make it not-active and close it as well as closing it's speech bubbles
        if (top.hasClass('active')) {
            top.attr('class', 'not-active up');
            topLeft.add(topMiddle).add(topRight).attr('class', 'bubble-not-active');

        } else {
            // otherwise make top active
            top.attr('class', 'active');

            // turn off other speech bubbles
            if (middle.hasClass('not-active')) {
                middle.attr('class', 'top-down');
            }
            if (bottom.hasClass('not-active')) {
                bottom.attr('class', 'top-down');
            }

        };
    });


    middle.click(function () {

        // click on top and it makes all other layers not active and forces them to close and opens top bubbles and closes all other bubbles
        top.add(bottom).attr('class', 'not-active up');
        middleLeft.add(middleMiddle).add(middleRight).attr('class', 'bubble-active');
        topLeft
            .add(topMiddle)
            .add(topRight)
            .add(bottomLeft)
            .add(bottomMiddle)
            .add(bottomRight).attr('class', 'bubble-not-active');

        // if it is active then make it not-active and close it as well as closing its speech bubbles
        if (middle.hasClass('active')) {
            middle.attr('class', 'not-active up');
            middleLeft.add(middleMiddle).add(middleRight).attr('class', 'bubble-not-active');

        } else {
            // otherwise make top active
            middle.attr('class', 'active up');

            if (bottom.hasClass('not-active')) {
                bottom.attr('class', 'middle-down');
            }
        };
    });

    bottom.click(function () {

        // click on top and it makes all other layers not active and forces them to close and opens top bubbles and closes all other bubbles
        top.add(middle).attr('class', 'not-active up');
        bottomLeft.add(bottomMiddle).add(bottomRight).attr('class', 'bubble-active');
        topLeft
            .add(topMiddle)
            .add(topRight)
            .add(middleLeft)
            .add(middleMiddle)
            .add(middleRight).attr('class', 'bubble-not-active');

        // if it is active then make it not-active and close it as well as closing its speech bubbles
        if (bottom.hasClass('active')) {
            bottom.attr('class', 'not-active up');
            bottomLeft.add(bottomMiddle).add(bottomRight).attr('class', 'bubble-not-active');

        } else {
            // otherwise make top active
            bottom.attr('class', 'active up');

            if (bottom.hasClass('not-active')) {
                bottom.attr('class', 'bottom-down');
            }
        };
    });

    $('.accordion .special-button').click(function () {
        $(this).siblings('.bubble-wrapper').slideToggle(500);
    });
});


/*
topLeft
.add(topMiddle)
.add(topRight)
.add(middleLeft)
.add(middleMiddle)
.add(middleRight)
.add(bottomLeft)
.add(bottomMiddle)
.add(bottomRight)
*/