const navSlide = () =>{
	const burger = document.querySelector('.burger');
	const nav=document.querySelector('.nav-link');
	const navLinks=document.querySelectorAll('.nav-link li');
	
	burger.addEventListener('click', () =>{
		// for toggle
		nav.classList.toggle('nav-active');
		// for nav-list
		navLinks.forEach((link, index) => {
			if(link.style.animation)
			{
				link.style.animation='';
			} else {
				link.style.animation = "navLinkFade 0.5s ease-in 0.5s forwards" ;
			}
		
		});
		
	});
	

	


}


const app = () =>{
	navSlide();
}


app();