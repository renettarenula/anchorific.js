if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	"use strict";

	var Anchorific = {

		init: function( options, elem ) {
			var self = this;

			self.elem = elem;
			self.$elem = $( elem );

			self.opt = $.extend( {},  this.opt, options );

			self.headers = self.$elem.find( 'h1, h2, h3, h4, h5, h6' );
			self.previous = 0;
			self.first = parseInt( self.headers.prop( 'nodeName' ).substring( 1 ), null );

			self.build();
		},

		opt: {
			navigation: '.anchorific', // position of navigation
			speed: 200, // speed of sliding back to top
			anchorClass: 'anchor', // class of anchor links
			anchorText: '#', // prepended or appended to anchor headings
			top: '.top', // back to top button or link class
			spy: true, // scroll spy
			position: 'append' // position of anchor text
		},
		
		build: function() {
			var self = this, obj, navigations = function() {};
			// when navigation configuration is set
			if ( self.opt.navigation ) {
				$( self.opt.navigation ).append( '<ul />' );
				self.previous = $( self.opt.navigation ).find( 'ul' ).last();
				navigations = function( obj ) {
					return self.navigations( obj );
				};
			}

			for( var i = 0; i < self.headers.length; i++ ) {
				obj = self.headers.eq( i );
				navigations( obj );
				self.anchor( obj );
			}

			if ( self.opt.spy )
				self.spy();

			if ( self.opt.top ) 
				self.back();
		},
		
		navigations: function( obj ) {
			var self = this, link, list, which, name = self.name( obj );

			if ( obj.attr( 'id' ) !== undefined )
				name = obj.attr( 'id' );

			link = $( '<a />' ).attr( 'href', '#' + name ).text( obj.text() );
			list = $( '<li />' ).append( link ); 

			which = parseInt( obj.prop( 'nodeName' ).substring( 1 ), null );
			list.attr( 'data-tag', which );

			self.subheadings( which, list );

			self.first = which;
		},

		subheadings: function( which, a ) {
			var self = this, ul = $( self.opt.navigation ).find( 'ul' ),
				li = $( self.opt.navigation ).find( 'li' );

			if ( which === self.first ) {
				self.previous.append( a );
			} else if ( which > self.first ) {
				li.last().append( '<ul />' );
				// can't use cache ul; need to find ul once more
				$( self.opt.navigation ).find( 'ul' ).last().append( a );
				self.previous = a.parent();
			} else {
				$( 'li[data-tag=' + which + ']' ).last().parent().append( a );
				self.previous = a.parent();
			}
		},

		name: function( obj ) {
			var name = obj.text().replace( /[^\w\s]/gi, '' )
								.replace( /\s+/g, '-' )
								.toLowerCase();

			return name;
		},

		anchor: function( obj ) {
			var self = this, name = self.name( obj ), anchor, text = self.opt.anchorText,
				klass = self.opt.anchorClass, id;

			if ( obj.attr( 'id' ) === undefined )
				obj.attr( 'id', name );

			id = obj.attr( 'id' );

			anchor = $( '<a />' ).attr( 'href', '#' + id ).html( text ).addClass( klass );

			if ( self.opt.position === 'append' ) {
				obj.append( anchor );
			} else {
				obj.prepend( anchor );
			}
		},

		back: function() {
			var self = this, body = $( document.body ), top = $( self.opt.top );

			top.on( 'click', function( e ) {
				e.preventDefault();

				body.animate({
					'scrollTop': 0
				}, self.opt.speed );
			});
		},

		top: function( that ) {
			var self = this, top = self.opt.top, back;

			if ( top !== false ) {
				back = ( $( that ).scrollTop() > 200 ) ?
						$( top ).fadeIn() :
						$( top ).fadeOut();
			}
		},

		spy: function() {
			var self = this, previous, current, list, top, prev;

			$( window ).scroll( function( e ) {
				// show links back to top
				self.top( this );
				// get all the header on top of the viewport
				current = self.headers.map( function( e ) {
					if ( ( $( this ).offset().top - $( window ).scrollTop() ) < 10 ) {
						return this;
					}
				});
				// get only the latest header on the viewport
				current = $( current ).eq( current.length - 1 );

				if ( current && current.length ) {
					// get all li tag that contains href of # ( all the parents )
					list = $( 'li:has("a[href="#' + current.attr( 'id' ) + '"]")' );

					if ( prev !== undefined ) {
						prev.removeClass( 'active' );
					}

					list.addClass( 'active' );
					prev = list;
				}
			});
		}
	};

	$.fn.anchorific = function( options ) {
		return this.each(function() {
			if ( ! $.data( this, 'anchorific' ) ) {
				var anchor = Object.create( Anchorific );

				anchor.init( options, this );

				$.data( this, 'anchorific', anchor );
			}
		});
	};

})( jQuery, window, document );