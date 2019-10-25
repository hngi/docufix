$(document).on('click', '.prev', function () {
//1- get first element to check if it has class 'active', 
// to prevent class 'active' from moving to prev button on click,
// if explanation isn't clear try removing if(){} to see it.
      const first = $(this).siblings().first();
      if (!first.hasClass('active')) {
//2- search <li>'s to get the one that has 'active' class.
        const active = $(this).siblings('.active');
//3- get the previous item of the <li class"active"> to move to.
        const prevItem = active.prev();
//4- get href of the item to redirect to.
        const link = prevItem.children('a').prop('href');
//5- remove 'active' class from the current <li> and give it to prev <li>.
        active.removeClass('active');
        prevItem.addClass('active');
//6- redirect to href of the new <li>.
        window.location.href = link;
      }
    });
    $(document).on('click', '.next', function () {
      const last = $(this).siblings().last();
      if (!last.hasClass('active')) {
        const active = $(this).siblings('.active');
        const nextItem = active.next();
        const link = nextItem.children('a').prop('href');
        active.removeClass('active');
        nextItem.addClass('active');
        window.location.href = link;
      }
    });