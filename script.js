const panel = document.querySelector( '.panel' );
const links = document.querySelector('.links')
const navLink = document.querySelector( '.nav_link' );

console.log(links)

navLink.addEventListener( 'mouseenter', () =>
{
	panel.show();
	panel.classList.remove( 'hide_dialog' );
} );

panel.addEventListener( 'mouseleave', () =>
{
	panel.classList.add( 'hide_dialog' );
	setTimeout( () =>
	{
		panel.close();
	}, 300 );
} );