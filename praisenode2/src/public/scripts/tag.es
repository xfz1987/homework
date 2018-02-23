import PraiseButton from './index.js';

xtag.register('x-praise', {
  content: '<div class="hand" id="thumb">' + 
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger"></div>' +
        '<div class="finger thumb"></div>' +
        '<div class="arm"></div>' +
    '</div>' +
    '<span class="hide" id="animation">+1</span>',
  methods: {
    praise: function(){
      let _this = this;
      f.clickAction();
    }
  },
  events: {
    click: function(e){
      
    }
  }
});