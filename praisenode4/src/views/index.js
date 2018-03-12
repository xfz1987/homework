module.exports = function(templateParams){
	const _cssList = ['vendor'];
	const webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
	console.log(webAssetsHelp.scriptsShow);
	let _html = `
		{% extends 'layout.html' %}
		{% block title %} {{title}} {% endblock %}
		{% block styles %}${webAssetsHelp.styles}{% endblock %}
		{% block content %} {% include '../widget/praise.html' %} {% endblock %}
		{% block script %}
		<script>
		(function(){
			var flag = false;
    		var scriptsShow = [${webAssetsHelp.scriptsShow}];
    		for(let i=0;i<scriptsShow.length;i++){
        		let a=scriptsShow[i];
        		if(localStorage.getItem(a)){
        		 	$('<scr'+'ipt>'+localStorage.getItem(a)+'</scr'+'ipt>').attr({type:'text/javascript',id:i}).appendTo($('head'));
        		}else{
        			localStorage.clear();
        			// $.getScript({
           //     			url:a,
           //     			success:function(data){
           //        			localStorage.setItem(a,data);
           //     			}
           //  		});
           			//lazyload方式
           			flag = true;
           			axios.get(a).then(function(data){localStorage.setItem(a,data.data)});
        		}
        	}
        	if(flag){
        		LazyLoad.js(scriptsShow,function(){});
        	}
        })()
		</script>
		{% endblock %}`;
				
    return _html;
};