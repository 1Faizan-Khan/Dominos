//toggle visibility affect
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("mixdetails").style.display = 'none';
    document.getElementById("carryoutdetails").style.display = 'none';
    document.getElementById("offersdetails").style.display = 'none';

    document.getElementById('mix').addEventListener('click', function() {
        toggleVisibility('mixdetails');
    });

    document.getElementById('carryout').addEventListener('click', function() {
        toggleVisibility('carryoutdetails');
    });

    document.getElementById('offers').addEventListener('click', function() {
        toggleVisibility('offersdetails');
    });
});

//hover affect
document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('orderonline');
    const element2 = document.getElementById('grey1');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('location');
    const element2 = document.getElementById('grey2');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('menu');
    const element2 = document.getElementById('grey3');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('coupons');
    const element2 = document.getElementById('grey4');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('trackers');
    const element2 = document.getElementById('grey5');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('rewards');
    const element2 = document.getElementById('grey6');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('giftcard');
    const element2 = document.getElementById('grey7');

    element1.addEventListener('mouseover', function() {
        element2.classList.add('hover-effect');
    });

    element1.addEventListener('mouseout', function() {
        element2.classList.remove('hover-effect');
    
    });
});

//open in a new tab
function opentab(elementId) {
    const element = document.getElementById(elementId);
    element.addEventListener('click', function() {
        window.open('https://www.dominos.com/en/pages/order/#!/section/Food/category/AllEntrees/', '_blank');
    });
}

opentab('perfectcombodeal');
opentab('ch');
opentab('all');
opentab('newyorkstyle');


































