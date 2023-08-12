const switchButton = document.querySelector( '.switch' );
const linksContainer = document.querySelector( '.links_container' );
const brandLink = document.querySelector( '.brand' );
const productLink = document.querySelector( '.product' );
const pricingLink = document.querySelector( '.pricing' );
const recourcesLink = document.querySelector( '.resources' );
const loginLink = document.querySelector( '.login' );
const signUp = document.querySelector( '.sign-up' );
const heroTitle = document.querySelector( '.hero-title' );
const heroDescription = document.querySelector( '.hero-description' );
const accountButton = document.querySelector( '.account-button' );
const emailInput = document.querySelector( '.email-input' );
const accountDescription = document.querySelector( '.account-description' );
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
	heroTitle.classList.add( 'rtl-text' );
	heroDescription.classList.add( 'rtl-text' );
	accountDescription.classList.add( 'rtl-text' );
	brandLink.innerHTML = 'شعار';
	productLink.innerHTML = 'المنتجات';
	pricingLink.innerHTML = 'السعر';
	recourcesLink.innerHTML = 'الموارد';
	loginLink.innerHTML = 'تسجيل الدخول';
	signUp.innerHTML = 'التسجيل';
	heroTitle.innerHTML = 'اعلانات عبر<br/> مواقع التواصل الاجتماعي';
	heroDescription.innerHTML = 'منصة موفرة وسهلة الاستخدام،<br/> نمي جمهورك';
	accountButton.innerHTML = 'انشاء حساب';
	emailInput.placeholder = 'عنوان البريد الالكتروني';
	accountDescription.innerHTML = 'جرب مجاناً | لا تحتاج بطاقة دفع | الغي في اي وقت';
} else 
{
	localStorage.clear();
	linksContainer.classList.remove( 'order' );
}