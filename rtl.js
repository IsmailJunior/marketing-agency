const switchButton = document.querySelector( '.switch' );
const brandNavLink = document.querySelector( '.brand-link' );
const recourcesNavLink = document.querySelector( '.resources-link' );
const productNavLink = document.querySelector( '.product-link' );
const pricingNavLink = document.querySelector( '.pricing-link' );
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
const iconAudience = document.querySelector( '.icon-audience' );
const iconSales = document.querySelector( '.icon-sales' );
const audienceTitle = document.querySelector( '.audience-title' );
const iconCustomers = document.querySelector( '.icon-customers' );
const customersTitle = document.querySelector( '.customers-title' );
const salesTitle = document.querySelector( '.sales-title' );
const businessDescription = document.querySelector( '.business-description' );
const audienceDescription = document.querySelector( '.audience-description' );
const customersDescription = document.querySelector( '.customers-description' );
const salesDescription = document.querySelector( '.sales-description' );
const headline = document.querySelectorAll( '.headline' );
const moreLink = document.querySelectorAll( '.more_link' );
const text = document.querySelectorAll( '.text' );
const businessSubHeading = document.querySelector( '.business-sub-heading' );
const salesSubHeading = document.querySelector( '.sales-sub-heading' );
const customerSubHeading = document.querySelector( '.customers-sub-heading' );
const audienceSubHeading = document.querySelector( '.audience-sub-heading' );
const toolsTitle = document.querySelector( '.tools-title' );
const entrepreneur = document.querySelector( '.entrepreneur' );
const entrepreneurDescription = document.querySelector( '.entrepreneur-description' );
const onlineMarketer = document.querySelector( '.online-marketer' );
const onlineMarketerdescription = document.querySelector( '.online-marketer-description' );
const marketignManger = document.querySelector( '.marketing-manger' );
const marketingManger = document.querySelector( '.marketing-manger' );
const marketingMangerDescription = document.querySelector( '.marketing-manger-description' );
const largeCompanies = document.querySelector( '.large-companies' );
const largeCompaniesDescription = document.querySelector( '.large-companies-description' );
const details = document.querySelectorAll( '.details' );
const largeCompaniesComponent = document.querySelector( '.large-companies-component' );
const entrepreneurComponent = document.querySelector( '.entrepreneur-component' );
const onlineMarketerComponent = document.querySelector( '.online-marketer-component' );
const marketingMangerComponent = document.querySelector( '.marketing-manger-component' );
const listBlock = document.querySelectorAll( '.list-block' );
const spec = document.querySelectorAll( '.spec' );
const column = document.querySelectorAll( '.column' );
const linkIcon = document.querySelectorAll( '.link-icon' );
const emailMarkteingLink = document.querySelector( '.email-marketing-link' );
const websiteBuilderLink = document.querySelector( '.website-builder-link' );
const paidAdsLink = document.querySelector( '.paid-ads-link' );
const salesFunnelsLink = document.querySelector( '.sales-funnels-link' );
const popupFormLink = document.querySelector( '.popup-forms-link' );
const autoresponderLink = document.querySelector( '.autoresponders-link' );
const marketingAutomationLink = document.querySelector( '.marketing-automation-link' );
const onDemandLink = document.querySelector( '.on-demand-link' );
const transactionalEmailsLink = document.querySelector( '.transactional-emails-link' );
const dedicatedSupportLink = document.querySelector( '.dedicated-support-link' );
const websiteTrackingLink = document.querySelector( '.website-tracking-link' );
const leftColumn = document.querySelectorAll( '.left_column' );
const featuresText = document.querySelector( '.features-text' );
const featuresButton = document.querySelector( '.features-button' );
const priceTitle = document.querySelector( '.price-title' );
const priceDescription = document.querySelector( '.price-description' );
const freeTitlePlan = document.querySelector( '.free-title-plan' );
const paidTitlePlan = document.querySelector( '.paid-title-plan' );
const maxTitlePlan = document.querySelector( '.max-title-plan' );
const paidPlanDescription = document.querySelector( '.paid-plan-description' );
const freePlanDescription = document.querySelector( '.free-plan-description' );
const maxPlanDescription = document.querySelector( '.max-plan-description' );

console.log( paidPlanDescription )

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
	column.forEach( ( item ) => item.style.justifyContent = 'end' );
	leftColumn.forEach( ( item ) => item.style.order = 2 );
	spec.forEach( ( item ) => item.style.justifyContent = 'end' );
	linkIcon.forEach( ( item ) => item.style.order = 2 );
	productNavLink.style.order = 3;
	pricingNavLink.style.order = 2;
	brandNavLink.style.order = 4;
	largeCompaniesComponent.style.order = 1;
	entrepreneurComponent.style.order = 4;
	onlineMarketerComponent.style.order = 3;
	marketingMangerComponent.style.order = 2;
	circleBlock.forEach( ( block ) => block.classList.add( 'circle-right' ) );
	emailControl.classList.add( 'input-left' );
	accountButton.classList.add( 'button-right' );
	heroImage.classList.add( 'image-rtl' );
	featuresBlocks.classList.add( 'left' );
	iconRocket.classList.add( 'order' );
	iconCustomers.classList.add( 'order' );
	iconAudience.classList.add( 'order' );
	iconSales.classList.add( 'order' );
	heroTitle.classList.add( 'rtl-text' );
	heroDescription.classList.add( 'rtl-text' );
	accountDescription.classList.add( 'rtl-text' );
	emailBlock.classList.add( 'rtl-text' );
	websiteBlock.classList.add( 'rtl-text' );
	marketingBlock.classList.add( 'rtl-text' );
	brandsTitle.classList.add( 'rtl-text' );
	businessTitle.classList.add( 'rtl-text' );
	customersTitle.classList.add( 'rtl-text' );
	audienceTitle.classList.add( 'rtl-text' );
	businessDescription.classList.add( 'rtl-text' );
	salesDescription.classList.add( 'rtl-text' );
	customersDescription.classList.add( 'rtl-text' );
	audienceDescription.classList.add( 'rtl-text' );
	text.forEach( ( item ) => item.classList.add( 'rtl-text' ) );
	headline.forEach( ( item ) => item.classList.add( 'rtl-title' ) );
	details.forEach( ( item ) => item.classList.add( 'rtl-text' ) );
	brandLink.innerHTML = 'شعار';
	productLink.innerHTML = 'المنتجات';
	pricingLink.innerHTML = 'السعر';
	recourcesLink.innerHTML = 'الموارد';
	loginLink.innerHTML = 'تسجيل الدخول';
	signUp.innerHTML = 'التسجيل';
	heroTitle.innerHTML = '<span>اعلانات عبر</span><br/>مواقع <span>التواصل الاجتماعي</span>'
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
	audienceTitle.innerHTML = 'نمي جمهورك';
	salesTitle.innerHTML = 'ارفع مبيعاتك';
	businessDescription.innerHTML = 'حزمة من الادوات  التسويقية مصممة لتجعل<br/>عملك على الشبكة وتعبئتها بمحتوى جديد<br/>.بقيادة جديدة';
	audienceDescription.innerHTML = 'ابحث عملاء جدد وابني قائمتك الخاصة<br/>مع ادوات قيادة تقلب<br/>.العملاء المارون الى معجبون';
	customersDescription.innerHTML = 'ابق على تواصل مع عملائك<br/>والذين قد يكونون عملاء مع ادوات<br/>.تجعلهم عملاء';
	salesDescription.innerHTML = 'سوق لعملك التجاري و اوصل<br/>تجارب تجعل عملائك<br/>.يعودون مرة اخرى';
	moreLink.forEach( ( item ) => item.innerHTML = 'معرفة المزيد' );
	moreLink.forEach( ( item ) => item.classList.add( 'rtl-text' ) );
	businessSubHeading.innerHTML = '<span>خطة مجانية</span> للمشاريع الجديدة';
	audienceSubHeading.innerHTML = 'حوالي <span>1,000,00 عميل</span> شهرياً';
	customerSubHeading.innerHTML = 'حوالي <span>700,455,054 معجب</span> شهرياً';
	salesSubHeading.innerHTML = '<span>الاف من عمليات التحويل</span> يومياً';
	toolsTitle.innerHTML = 'ادوات مخصصة <span>لك ولمن تكون</span>';
	entrepreneur.innerHTML = 'رجل اعمال';
	onlineMarketer.innerHTML = 'مسوق عبر الشبكة';
	marketignManger.innerHTML = 'مدير تسويق';
	largeCompanies.innerHTML = 'شركات كبرى';
	entrepreneurDescription.innerHTML = 'سوق لمشروعك عبر الشبكة<br/>مع مزايا تساعدك<br/>على الوصول لعدد مرغوب من العملاء<br/>.وبناء علاقات';
	onlineMarketerdescription.innerHTML = '،اصنع نقود من اي مكان<br/>مع مرونه لانشاء<br/>وايضاً تحويل<br/>.السهولة المنزلية';
	marketingMangerDescription.innerHTML = 'يمكنك الوصول الى عملاء<br/>اكثر مع الية، مخصصة<br/>رسائل عبر مختلف<br/>.القنوات';
	largeCompaniesDescription.innerHTML = 'ضاعف الربح عبر ادوات مخصصة<br/>وقابلة للتوسعة مناسبة لعملك<br/>لنتائج افضل حول الرحلة<br/>.الكاملة للعميل';
	emailMarkteingLink.innerHTML = 'تسويق الكتروني';
	websiteBuilderLink.innerHTML = 'انشاء موقع';
	paidAdsLink.innerHTML = 'اعلانات مدفوعة';
	salesFunnelsLink.innerHTML = 'مراقبة المبيعات';
	popupFormLink.innerHTML = 'نوافذ منبثقة';
	autoresponderLink.innerHTML = 'رد تلقائي';
	onDemandLink.innerHTML = 'بث مباشر حسب الطلب';
	transactionalEmailsLink.innerHTML = 'اعلانات تسويقية';
	dedicatedSupportLink.innerHTML = 'دعم خاص';
	marketingAutomationLink.innerHTML = 'تسويق تلقائي';
	websiteTrackingLink.innerHTML = 'مراقبة نتائج الاعلان';
	featuresText.innerHTML = '+ 23 ميزة اخرى';
	featuresButton.innerHTML = 'اكتشف كل الميزات';
	priceTitle.innerHTML = '<span>سعر لا يقاوم لخطط التسويق</span>';
	priceDescription.innerHTML = 'خطط ومميزات تشحن عملك في كل مرحة من النمو';
	freeTitlePlan.innerHTML = 'مجاناً';
	paidTitlePlan.innerHTML = 'خطط مدفوعة';
	maxTitlePlan.innerHTML = 'ماكس<sup>2</sup>';
	freePlanDescription.innerHTML = ':يتضمن';
	paidPlanDescription.innerHTML = ':كل شيء من مجاناً واكثر';
	maxPlanDescription.innerHTML = ':كل شيء من مدفوع واكثر'

} else 
{
	localStorage.clear();
	linksContainer.classList.remove( 'order' );
}