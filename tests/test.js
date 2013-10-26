$(function () {

	module( 'Anchorific' );

	var subject = '#qunit-fixture > #default', 
			$el = $( 'h1, h2, h3, h4, h5, h6', subject );

	test( 'ID is correctly generated', function() {
		var results = [ 'hello-world', 'existing-id' ];

		$( subject ).anchorific({
			navigation: false,
			spy: false
		});

		equal( $el.eq( 0 ).attr( 'id' ), results[ 0 ], 'Correct ID is generated' );
		equal( $el.eq( 1 ).attr( 'id' ), results[ 1 ], 'Existing ID is used instead');
	});

	test( 'Anchor link is correctly generated', function() {
		var results = [ '#hello-world', '#existing-id' ], actual, anchor;

		$( subject ).anchorific({
			navigation: false,
			spy: false
		});

		actual = function( eq ) {
			return $el.eq( eq ).find( '.anchor' ).attr( 'href' );
		};

		anchor = function( eq ) {
			return $el.eq( eq ).find( '.anchor');
		};

		equal( $el.eq( 0 ).text(), 'Hello World!#', 'Anchor link is appended correctly' );
		equal( anchor( 0 ).text(), '#', 'Link text is correctly generated' );
		equal( actual( 0 ), results[ 0 ], 'href is generated based on the ids' );
		equal( actual( 1 ), results[ 1 ], 'href is generated based on the existing ids' );
	});

	test( 'Anchor link is correctly generated based on options specified', function() {
		var subject = '#qunit-fixture > #default', 
			$el = $( 'h1, h2, h3, h4, h5, h6', subject ), actual = 0;

		$( subject ).anchorific({
			position: 'prepend',
			navigation: false,
			anchorText: '&para',
			anchorClass: 'newclass',
			spy: false
		});

		actual = function( eq, me ) {
			if ( me !== undefined )
				return $el.eq( eq ).find( me );
			else 
				return $el.eq( eq );
		};

		equal( actual( 0, 'a' ).attr( 'class' ), 'newclass', 'Class uses option specified' );
		equal( actual( 0 ).text(), '¶Hello World!', 'Option prepend works as expected' );
		equal( actual( 0, '.newclass' ).text(), '¶', 'Text uses option specified' );
	});

	test( 'Navigation links are generated as expected', function() {
		var $el = $( '.anchor-default', subject ), 
			tags = $( 'h1, h2, h3, h4, h5, h6', subject ),
			actual = 0, text = 0;

		$( subject ).anchorific({
			navigation: '#qunit-fixture > #default > .anchor-default'
		});

		actual = function( eq ) {
			return $el.find( 'a' ).eq( eq );
		};

		text = function( eq ) {
			return tags.eq( eq ).text().replace( '#', '' );
		};

		equal( actual( 0 ).attr( 'href' ), '#hello-world', 'href is correct for no id' );
		equal( actual( 0 ).text(), text( 0 ), 'link text is correct for non-existing id' );
		equal( actual( 1 ).attr( 'href' ), '#existing-id', 'href is correct when id exist' );
		equal( actual( 1 ).text(), text( 1 ), 'link text is correct for existing id' );
	});

	test( 'Navigation link is correctly generated based on given headers', function() {
		var subject = '#qunit-fixture > #navigation', 
			$el = $( '.anchorific', subject ),
			expected = $.trim( $( '#expected' ).html() );

		$( subject ).anchorific({
			navigation: '#qunit-fixture > #navigation > .anchorific'
		});

		equal( $el.html(), expected, 'Navigation is generated as expected' );
	});

	asyncTest( 'Scrollspy highlights links correctly when scroll', function() {
		setTimeout(function() {
			var s = $( '#scroll' ).contents().find( '.anchorific' ).find( 'li.active' );
			equal( s.length, 6, "No of links highlighted is correct when scroll to h6" );
			start();
		}, 100 );
	});

	asyncTest( 'Back to top link is visible when configured', function() {
		setTimeout(function() {
			var s = $( '#scroll' ).contents().find( '.top' );
			equal( s.is( ':visible' ), true, 'Top button is visible' );
			start();
		}, 100 );
	});

	asyncTest( 'Clicking back to top link works as expected', function() {
		var fixture = 0, test = 0, actions = [];
		// simulate click for top button
		fixture = function() {
			var s = $( '#scroll' ).contents().find( '.top' );
			s.trigger( "click" );
		};
		// ensure that it moves the scroll back to top
		test = function() {
			equal( $( '#scroll' ).contents().scrollTop(), 0, 'Back to top works' );
			start();
		};

		actions = [ fixture(), test() ];

		actions.map(function( action, index ) {
			setTimeout( action, 100 + index * 100 );
		});
	});
});