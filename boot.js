define([], function() {
    'use strict';

    // https://github.com/rgrove/lazyload/
    var LazyLoad=(function(j){var g,h,b={},e=0,f={css:[],js:[]},m=j.styleSheets;function l(p,o){var q=j.createElement(p),n;for(n in o){if(o.hasOwnProperty(n)){q.setAttribute(n,o[n])}}return q}function i(n){var q=b[n],r,o;if(q){r=q.callback;o=q.urls;o.shift();e=0;if(!o.length){r&&r.call(q.context,q.obj);b[n]=null;f[n].length&&k(n)}}}function c(){var n=navigator.userAgent;g={async:j.createElement("script").async===true};(g.webkit=/AppleWebKit\//.test(n))||(g.ie=/MSIE|Trident/.test(n))||(g.opera=/Opera/.test(n))||(g.gecko=/Gecko\//.test(n))||(g.unknown=true)}function k(z,y,A,v,r){var t=function(){i(z)},B=z==="css",o=[],u,w,s,q,x,n;g||c();if(y){y=typeof y==="string"?[y]:y.concat();if(B||g.async||g.gecko||g.opera){f[z].push({urls:y,callback:A,obj:v,context:r})}else{for(u=0,w=y.length;u<w;++u){f[z].push({urls:[y[u]],callback:u===w-1?A:null,obj:v,context:r})}}}if(b[z]||!(q=b[z]=f[z].shift())){return}h||(h=j.head||j.getElementsByTagName("head")[0]);x=q.urls;for(u=0,w=x.length;u<w;++u){n=x[u];if(B){s=g.gecko?l("style"):l("link",{href:n,rel:"stylesheet"})}else{s=l("script",{src:n});s.async=false}s.className="lazyload";s.setAttribute("charset","utf-8");if(g.ie&&!B&&"onreadystatechange" in s&&!("draggable" in s)){s.onreadystatechange=function(){if(/loaded|complete/.test(s.readyState)){s.onreadystatechange=null;t()}}}else{if(B&&(g.gecko||g.webkit)){if(g.webkit){q.urls[u]=s.href;d()}else{s.innerHTML='@import "'+n+'";';a(s)}}else{s.onload=s.onerror=t}}o.push(s)}for(u=0,w=o.length;u<w;++u){h.appendChild(o[u])}}function a(p){var o;try{o=!!p.sheet.cssRules}catch(n){e+=1;if(e<200){setTimeout(function(){a(p)},50)}else{o&&i("css")}return}i("css")}function d(){var o=b.css,n;if(o){n=m.length;while(--n>=0){if(m[n].href===o.urls[0]){i("css");break}}e+=1;if(o){if(e<200){setTimeout(d,50)}else{i("css")}}}}return{css:function(p,q,o,n){k("css",p,q,o,n)},js:function(p,q,o,n){k("js",p,q,o,n)}}})(document); // jshint ignore:line

    return {
        /**
         *
         * @param el        : The Element of the interactive that is being progressively enhanced.
         * @param context   : The DOM context this module must work within.
         * @param config    : The configuration object for this page.
         *
         **/
        boot : function(el, context, config) {
            var loadingEl = document.createElement('p');
            loadingEl.setAttribute('style', 'text-align: center; color: #999;');
            loadingEl.innerHTML = 'Loading...';
            el.appendChild(loadingEl);

            LazyLoad.css('http://interactive.guim.co.uk/watch-app-landing-page/style.css');
            LazyLoad.js([
                '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
                'http://interactive.guim.co.uk/watch-app-landing-page/apps.js'
            ]);
        }
    };
});
