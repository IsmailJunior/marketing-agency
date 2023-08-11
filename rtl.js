const switchButton = document.querySelector( '.switch' );
const linksContainer = document.querySelector( '.links_container' );
const brandLink = document.querySelector( '.brand' );
const productLink = document.querySelector( '.product' );
const pricingLink = document.querySelector( '.pricing' );
const recourcesLink = document.querySelector( '.resources' );
const loginLink = document.querySelector( '.login' );
const signUp = document.querySelector( '.sign-up' );
const heroTitle = document.querySelector( '.hero-title' );

if ( localStorage.getItem( 'arabic' ) !== null )
{
	switchButton.checked = true;
}

switchButton.addEventListener( 'click', ( event ) =>
{
	if ( event.target.checked )
	{
		localStorage.setItem( 'arabic', true );
		setTimeout( () =>
		{
			window.location.reload();
		}, 300 );
	} else
	{
		localStorage.clear();
		setTimeout( () =>
		{
			window.location.reload();
		}, 300 );
	}
} );

if ( localStorage.getItem( 'arabic' ) !== null )
{
	linksContainer.classList.add( 'order' );
	brandLink.innerText = 'شعار';
	productLink.innerText = 'المنتجات';
	pricingLink.innerText = 'السعر';
	recourcesLink.innerText = 'الموارد';
	loginLink.innerText = 'تسجيل الدخول';
	signUp.innerText = 'التسجيل';
	heroTitle.innerHTML = 'اعلانات عبر<br/> مواقع التواصل الاجتماعي';
} else 
{
	localStorage.clear();
	linksContainer.classList.remove( 'order' );
	brandLink.innerText = 'Brand';
	productLink.innerText = 'Product';
	pricingLink.innerText = 'Pricing';
	recourcesLink.innerText = 'Resources';
	loginLink.innerText = 'Login';
	signUp.innerText = 'Sign Up';
	heroTitle.innerHTML = 'Email marketing <br/>and beyond';
}