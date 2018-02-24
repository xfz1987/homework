import { Thumb } from './index.es';

const f = new Thumb();

const _content = `
  <div class="hand" id="thumb">
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger thumb"></div>
    <div class="arm"></div>
  </div>
  <span class="hide" id="animation">+1</span>`;

xtag.register('x-praise', {
  content: _content,
  methods: {
    praise: function() {
      let _this = this;
      f.clickAction();
      let animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function() {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function(e){
      let _this = this;
      if(e.target.id == 'thumb'){
        let t = '';
        if(t) clearTimeout(t);
        t = setTimeout(function(){
          _this.praise();
        }, 500);
      }
    },
  }
});