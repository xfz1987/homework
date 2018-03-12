import { Star } from './index.es';

const f = new Star();

let m = '';

const _content = `
  <div class="star" id="star">
    <div class="star1"></div>
  </div>
  <span class="hide" id="animation">+1</span>`;

xtag.register('x-star', {
  content: _content,
  methods: {
    praise: function() {
      let _this = this;
      f.clickAction();//向后台请求
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
      if(e.target.id == 'star'){
        if(m){
          clearTimeout(m);
        }
        m = setTimeout(() => {
          _this.praise();
        }, 300);
      }
    },
  }
});