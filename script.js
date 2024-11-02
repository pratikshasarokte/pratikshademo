
//$('#customers-testimonials').owlCarousel( {
//		loop: true,
//		center: true,
//		items: 3,
//		margin: 30,
//		autoplay: true,
//		dots:true,
//    nav:true,
//		autoplayTimeout: 8500,
//		smartSpeed: 450,
//  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//		responsive: {
//			0: {
//				items: 1
//			},
//			768: {
//				items: 2
//			},
//			1170: {
//				items: 3
//			}
//		}
//	});


$('#customers-testimonials').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    dots:true,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>",
             "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
    }
})


$('#services').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    dots:true,
    items: 4,
    nav:true,
//    navText:["<i class='fa-solid fa-arrow-left'></i>",
//             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			},
        
           1170: {
				items: 4
			}
    }
})

$('.banner-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    dots:true,
    items: 4,
    nav:true,
   navText:["<i class=' fa fa-angle-left'></i>",
            "<i class=' fa fa-angle-right'></i>"],
    responsive:{
        0: {
				items: 1
			}
			
    }
})
