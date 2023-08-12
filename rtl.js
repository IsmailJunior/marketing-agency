const switchButton = document.querySelector( '.switch' );
const linksContainer = document.querySelector( '.links_container' );
const emailControl = document.querySelector( '.email-input' );
const featuresBlocks = document.querySelector( '.features_blocks' );
const circleBlock = document.querySelectorAll( '.circle-block' );
const leftSection = document.querySelector( '.left_section' );
const heroImage = document.querySelector( '.hero_image' );
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
const emailBlock = document.querySelector( '.email-block' );
const websiteBlock = document.querySelector( '.website-block' );
const marketingBlock = document.querySelector( '.marketing-block' );
const brandsTitle = document.querySelector( '.brands-title' );
const brandsHeading = document.querySelector( '.brands-heading' );
const businessTitle = document.querySelector( '.business-title' );
const iconRocket = document.querySelector( '.icon-rocket' );
const audienceTitle = document.querySelector( '.audience-title' );
const iconCustomers = document.querySelector( '.icon-customers' );
const customersTitle = document.querySelector( '.customers-title' );


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
console.log( accountButton );
if ( localStorage.getItem( 'arabic' ) !== null )
{
	linksContainer.classList.add( 'order' );
	leftSection.classList.add( 'order' );
	circleBlock.forEach( ( block ) => block.classList.add( 'circle-right' ) );
	emailControl.classList.add( 'input-left' );
	accountButton.classList.add( 'button-right' );
	heroImage.classList.add( 'image-rtl' );
	featuresBlocks.classList.add( 'left' );
	iconRocket.classList.add( 'order' );
	iconCustomers.classList.add( 'order' );
	heroTitle.classList.add( 'rtl-text' );
	heroDescription.classList.add( 'rtl-text' );
	accountDescription.classList.add( 'rtl-text' );
	emailBlock.classList.add( 'rtl-text' );
	websiteBlock.classList.add( 'rtl-text' );
	marketingBlock.classList.add( 'rtl-text' );
	brandsTitle.classList.add( 'rtl-text' );
	businessTitle.classList.add( 'rtl-text' );
	customersTitle.classList.add( 'rtl-text' );
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
	emailBlock.innerHTML = 'تسويق<br/>البريد الالكتروني';
	websiteBlock.innerHTML = 'انشاء<br/>مواقع';
	marketingBlock.innerHTML = 'تسويق<br/> الي';
	brandsTitle.innerHTML = 'موثوق بواسطة شركات كبرى وصغرى';
	brandsHeading.innerHTML = 'حلول تسويقية <span>لك ولاحتياجاتك</span>';
	businessTitle.innerHTML = 'اجعل عملك اونلاين';
	customersTitle.innerHTML = 'تواصل مع العملاء';
} else 
{
	localStorage.clear();
	linksContainer.classList.remove( 'order' );
}