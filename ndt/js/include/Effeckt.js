var Effeckt = {

//  isTouchDevice: Modernizr.touch,
  buttonPressedEvent: ( this.isTouchDevice ) ? 'touchstart' : 'click',

  animationEndEventNames: {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'OAnimation' : 'oAnimationEnd',
    'msAnimation' : 'MSAnimationEnd',
    'animation' : 'animationend'
  },

  transitionEndEventNames: {
    'WebkitTransition' : 'webkitTransitionEnd',
    'OTransition' : 'oTransitionEnd',
    'msTransition' : 'MSTransitionEnd',
    'transition' : 'transitionend'
  },

  init: function() {

    //event trigger after animation/transition end.
//    this.transitionEndEventName = this.transitionEndEventNames[Modernizr.prefixed('transition')];
//    this.animationEndEventName = this.animationEndEventNames[Modernizr.prefixed('animation')];
    this.transitionAnimationEndEvent = this.animationEndEventName + ' ' + this.transitionEndEventName;

  },

  getViewportHeight: function() {

    var docElement = document.documentElement,
      client = docElement['clientHeight'],
      inner = window['innerHeight'];

    if( client < inner )
      return inner;
    else
      return client;
  },
}

Effeckt.init();

var EffecktListItems = {

  init: function() {

    this.bindUIActions();

  },

  bindUIActions: function() {

    var self = this;

    $(".effeckt-list-wrap button.add").on( Effeckt.buttonPressedEvent, function() {
      self.addListItem(this);
    });

    $(".effeckt-list-wrap button.remove").on( Effeckt.buttonPressedEvent, function() {
      self.removeListItem(this);
    });

    $("button.remove").hide();
  },

  addListItem: function(el) {

    var insertPoint = $(el).parent().find("li:nth-child(3)");
    $(el).parent().find("button.remove").show();

    $("<li />", {
      'text': "new item",
      'class': "new-item"
    }).insertAfter(insertPoint);

  },

  removeListItem: function(el) {

    var $parent = $(el).parent(),
        self = this;

    var elToRemove = $parent.find("li.new-item").last();
    elToRemove.on( Effeckt.transitionAnimationEndEvent, function () {
      elToRemove.off( Effeckt.transitionAnimationEndEvent );
      elToRemove.remove();
    });

    elToRemove.toggleClass("remove-item new-item");
    if (!$parent.find("li.new-item").length) {
      $parent.find("button.remove").hide();
    }

  }

};

EffecktListItems.init();

var EffecktPageTransitions = {

  fromPage: '',
  toPage: '',
  isAnimating: false,
  isNextPageEnd: false,
  isCurrentPageEnd: false,
  transitionInEffect: '',
  transitionOutEffect: '',

  init: function() {

    this.initPages();
    this.bindUIActions();

  },

  initPages: function(){

    var $pages = $('[data-effeckt-page]');

    this.fromPage = $pages.first().addClass('effeckt-page-active');

  },

  bindUIActions: function() {

    var self = this;

    $('.effeckt-page-transition-button').on( Effeckt.buttonPressedEvent, function(e){

      e.preventDefault();

      var transitionInEffect  = $(this).data('effeckt-transition-in'),
          transitionOutEffect = $(this).data('effeckt-transition-out')
          transitionPage      = $(this).data('effeckt-transition-page');

      if ( $(this).data("effeckt-needs-perspective")) {
        $("html").addClass("md-perspective");
      }

      self.transitionPage( transitionPage, transitionInEffect, transitionOutEffect );

    });
  },

  transitionPage: function( transitionPage, transitionInEffect, transitionOutEffect ) {

    if ( this.isAnimating ) {

      return false;

    }

    this.isAnimating = true;
    this.isCurrentPageEnd = false;
    this.isNextPageEnd = false;
    this.transitionInEffect = transitionInEffect;
    this.transitionOutEffect= transitionOutEffect;

    // Get Pages
    this.fromPage = $('[data-effeckt-page].effeckt-page-active');
    this.toPage   = $('[data-effeckt-page="' + transitionPage + '"]');

    // Add this class to prevent scroll to be displayed
    this.toPage.addClass('effeckt-page-animating effeckt-page-active ' + this.transitionInEffect);
    this.fromPage.addClass('effeckt-page-animating');

    // Set Transition Class
    this.fromPage.addClass(this.transitionOutEffect);
    
    var self= this;
    
    this.toPage.on( Effeckt.transitionAnimationEndEvent, function() {
      
      self.toPage.off( Effeckt.transitionAnimationEndEvent );
      self.isNextPageEnd = true;

      if ( self.isCurrentPageEnd ) {
        self.resetTransition();
      }
    });

    this.fromPage.on( Effeckt.transitionAnimationEndEvent, function () {

      self.fromPage.off( Effeckt.transitionAnimationEndEvent );
      self.isCurrentPageEnd = true;

      if ( self.isNextPageEnd ) {
        self.resetTransition();
      }

    });

  },

  resetTransition: function() {

    this.isAnimating = false;
    this.isCurrentPageEnd = false;
    this.isNextPageEnd = false;

    this.fromPage.removeClass('effeckt-page-animating effeckt-page-active ' + this.transitionOutEffect);//.hide();
    this.toPage.removeClass('effeckt-page-animating ' + this.transitionInEffect);

    $("html").removeClass("md-perspective");
  }

};

EffecktPageTransitions.init();