(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(47),o=n.n(i),l=n(25),c=n(22),u=n(11),s=n.n(u),p=n(21),m=n(14),d=n(15),f=n(16),g=n(17),v=n(3),h=n(2),b=n(19);n(70);function x(){var e=Object(v.a)(["\n    margin-top:25px;            \n    /* display:grid;    \n    grid-template-columns:repeat(auto-fill, minmax(150px, 2fr)); */\n    display:flex;\n    font-size:12px;    \n    overflow:hidden;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n    font-size:20px;\n    font-weight: 600;\n    margin-bottom:55px;\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n    right: ",";\n    left: ",";\n    color: white;\n    margin-top:25px;   \n    background-color: rgba(20, 20, 20, 0.2);\n    width: 4%;\n    height: 220px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    cursor: pointer;\n    font-size: 7vw;\n    opacity: 1;\n    &:hover {\n        font-size: 8vw;\n        transition: 0.1s;        \n    }\n"]);return y=function(){return e},e}function j(){var e=Object(v.a)(["\n   font-size:5vw;\n   justify-content: center;\n   align-items: center;\n   position: absolute;\n   width: 4%;\n   height: 100%;\n   opacity:0.2;   \n"]);return j=function(){return e},e}function w(){var e=Object(v.a)(["\n    &:not(:last-child){\n        margin-bottom: 100px;\n    }    \n    margin-bottom: 10px;\n    /* display: flex;\n    flex-direction: row;    \n    justify-content:center;\n    align-items:center;\n    height:100vh; \n    overflow:hidden;    \n    &:hover {\n    .arrow-right,\n    .arrow-left {\n      opacity: 1;\n      transition: 0.2s;\n    }};   */\n"]);return w=function(){return e},e}var _=h.default.div(w()),O=(h.default.i(j()),h.default.div(y(),(function(e){return e.rightIdx}),(function(e){return e.leftIdx}))),k=h.default.span(E()),S=h.default.div(x()),T=function(e){var t=e.title,n=e.children;return(r.a.createElement(_,null,r.a.createElement(k,null,t),r.a.createElement(O,{leftIdx:100,className:"fa fa-angle-left"}),r.a.createElement(O,{rightIdx:0,className:"fa fa-angle-right"}),r.a.createElement(S,null,n)))},R=n(53),z=n.n(R);function M(){var e=Object(v.a)(["\n    height:100vh;\n    width:100vw;\n    display:flex;\n    justify-content: center;\n    margin-top:20px;    \n"]);return M=function(){return e},e}var I=h.default.div(M()),U=function(){return r.a.createElement(I,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},r.a.createElement("img",{src:z.a,alt:"LoadingImg"})))};function N(){var e=Object(v.a)(["    \n    font-weight:600;\n    color:",";\n"]);return N=function(){return e},e}function C(){var e=Object(v.a)(["\n    width:100vw;\n    display:flex;\n    justify-content:center;\n\n"]);return C=function(){return e},e}var P=h.default.div(C()),F=h.default.span(N(),(function(e){return e.color})),L=function(e){var t=e.text,n=e.color;return(r.a.createElement(P,null,r.a.createElement(F,{color:n},t)))},A=n(10),V=n(54),D={api_key:"97c0dbad929d4f173cc7f596ceac2247",language:"en-US"},B=n.n(V).a.create({baseURL:"https://api.themoviedb.org/3/"}),G=function(){return B.get("movie/now_playing",{params:Object(A.a)({},D)})},J=function(){return B.get("movie/upcoming",{params:Object(A.a)({},D)})},q=function(){return B.get("movie/popular",{params:Object(A.a)({},D)})},W=function(e){return B.get("movie/".concat(e),{params:Object(A.a)({},D,{append_to_response:"videos"})})},H=function(e){return B.get("search/movie",{params:Object(A.a)({},D,{query:encodeURIComponent(e)})})},K=function(){return B.get("tv/top_rated",{params:Object(A.a)({},D)})},Q=function(){return B.get("tv/popular",{params:Object(A.a)({},D)})},X=function(){return B.get("tv/airing_today",{params:Object(A.a)({},D)})},Y=function(e){return B.get("tv/".concat(e),{params:Object(A.a)({},D,{append_to_response:"videos"})})},Z=function(e){return B.get("search/tv",{params:Object(A.a)({},D,{query:encodeURIComponent(e)})})};function $(){var e=Object(v.a)(["\n    margin-bottom:5px;\n    position:relative;\n    &:hover{\n        ","{\n            opacity:0.3;\n        }\n        ","{\n            opacity:1;\n        }\n        \n    }\n"]);return $=function(){return e},e}function ee(){var e=Object(v.a)(["\n    background-size:cover;\n    border-radius:8px;\n    background-position:center center;\n    height:180px;\n    width:150px;\n    background-image:url(",");\n    transition: opacity 0.1s linear;\n    /*\n    display:flex;\n    justify-content:space-between;    \n    width:180px;\n    height:180px;\n    background-image:url(",");\n    width: 15vw;\n    height: 15vw;\n    background-size: 100% 100%;\n    margin: 0 2px 0 2px;\n    border-radius: 1px;\n    cursor: pointer;\n    transition: 0.5s;\n    color: white;     */\n    /* &:hover {\n      width: 30vw;\n      height: 22vw;\n      transition: 0.5s;\n      opacity: 1;\n      transition-delay: 0.3s;      \n    } */\n"]);return ee=function(){return e},e}function te(){var e=Object(v.a)(["\n    color:rgba(255,255,255,0.5);    \n    margin-bottom:10px;\n"]);return te=function(){return e},e}function ne(){var e=Object(v.a)(["\n    display: block;\n    margin-bottom:3px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(v.a)(["\n    bottom:-5px;\n    right:5px;\n    position:absolute;\n    opacity:0;\n    transition: opacity 0.1s linear;\n"]);return ae=function(){return e},e}function re(){var e=Object(v.a)(["\n    font-size:12px;\n"]);return re=function(){return e},e}var ie=h.default.div(re()),oe=h.default.span(ae()),le=h.default.span(ne()),ce=h.default.span(te()),ue=h.default.div(ee(),(function(e){return e.bgUrl}),(function(e){return e.bgUrl})),se=h.default.div($(),ue,oe),pe=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,c=e.year,u=e.isMovie,s=void 0!==u&&u;return(r.a.createElement(l.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(ie,null,r.a.createElement(se,null,r.a.createElement(ue,{bgUrl:a?"http://image.tmdb.org/t/p/w300/"+a:n(34)}),r.a.createElement(oe,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2606"),o,"/10")),r.a.createElement(le,null,i&&i.length>18?"".concat(i.substring(0,18),"..."):i," "),r.a.createElement(ce,null,c))))},me=n(30),de=n(26);a.PureComponent;function fe(){var e=Object(v.a)(["\n    padding:20px;\n    /* display: flex;\n    flex-direction: row;\n    flex-wrap: no-wrap;\n    justify-content: space-between;     */\n    /* height: 100vh;\n    width: 100vw;     */\n"]);return fe=function(){return e},e}var ge=h.default.div(fe()),ve=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.loading,o=e.error;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Movies | Nomflix")),i?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null,t&&t.length>0&&r.a.createElement(T,{title:"Now Playing"},t.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})})))),r.a.createElement(ge,null,n&&n.length>0&&r.a.createElement(T,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})})))),r.a.createElement(ge,null,r.a.createElement(T,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),o&&r.a.createElement(L,{color:"#e74c3c",text:o}))),";"))},he=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:return t=e.sent,n=t.data.results,e.next=7,J();case 7:return a=e.sent,r=a.data.results,e.next=11,q();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return(r.a.createElement(ve,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o}))}}]),n}(r.a.Component);function be(){var e=Object(v.a)(["\n    all: unset;\n    font-size: 28px;\n    width:100%;\n"]);return be=function(){return e},e}function xe(){var e=Object(v.a)(["\n    margin-bottom:50px;\n    width:100%;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(v.a)(["\n    padding: 0px 20px;\n"]);return Ee=function(){return e},e}var ye=h.default.div(Ee()),je=h.default.form(xe()),we=h.default.input(be()),_e=function(e){var t=e.movieResult,n=e.tvResult,a=e.searchTerm,i=e.error,o=e.loading,l=e.handleSubmit,c=e.updateTerm,u=e.texting;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(ye,null,r.a.createElement(je,{onSubmit:l},r.a.createElement(we,{placeholder:"Search Movies or TV Shows...",value:a,onChange:c})),o?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(T,{title:"Movie Result"},t.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(T,{title:"TV Show Result"},n.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(L,{color:"#e74c3c",text:i}),u?r.a.createElement(L,{text:"Waiting..... ".concat(a," "),color:"#95a5a6"}):t&&n&&0===n.length&&0===t.length&&r.a.createElement(L,{text:"Nothing Found for : ".concat(a," "),color:"#95a5a6"})))))},Oe=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResult:null,tvResult:null,error:null,searchTerm:"",loading:!1,texting:!1},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n,texting:!0})},e.searchByTerm=Object(p.a)(s.a.mark((function t(){var n,a,r,i,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,e.setState({loading:!0}),t.next=5,H(n);case 5:return a=t.sent,r=a.data.results,t.next=9,Z(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResult:r,tvResult:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Can't find Result"});case 17:return t.prev=17,e.setState({loading:!1,texting:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResult,n=e.tvResult,a=e.searchTerm,i=e.error,o=e.loading,l=e.texting;return(r.a.createElement(_e,{movieResult:t,tvResult:n,searchTerm:a,error:i,loading:o,texting:l,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm}))}}]),n}(r.a.Component);function ke(){var e=Object(v.a)(["\n    padding:0px 20px;\n"]);return ke=function(){return e},e}var Se=h.default.div(ke()),Te=function(e){var t=e.topRated,n=e.airingToday,a=e.popular,i=e.error,o=e.loading;return(r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"TV | Nomflix")),o?r.a.createElement(U,null):r.a.createElement(Se,null,t&&t.length>0&&r.a.createElement(T,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),a&&a.length>0&&r.a.createElement(T,{title:"Popular Shows"},a.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),n&&n.length>0&&r.a.createElement(T,{title:"Airing Today"},n.map((function(e){return r.a.createElement(pe,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),i&&r.a.createElement(L,{color:"#e74c3c",text:i})),";"))},Re=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:return t=e.sent,n=t.data.results,e.next=7,Q();case 7:return a=e.sent,r=a.data.results,e.next=11,X();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(Te,{topRated:t,airingToday:a,popular:n,error:i,loading:o})}}]),n}(r.a.Component);function ze(){var e=Object(v.a)(["\n    height:50px;\n    display:flex;    \n    align-items : center;\n    justify-content:center;\n"]);return ze=function(){return e},e}function Me(){var e=Object(v.a)(["\n    width: 50px;\n    height:50px;\n    text-align:center;\n    font-size:20px;\n    &:not(:last-child) {\n        margin-right: 10px;\n        margin-bottom: 10px;\n    }\n    border-bottom : 5px solid ",";\n    transition:border-bottom 0.5s ease-in-out;\n"]);return Me=function(){return e},e}function Ie(){var e=Object(v.a)(["    \n    &:hover{\n    background-color : transparent;\n    }\n"]);return Ie=function(){return e},e}function Ue(){var e=Object(v.a)(["\n    width:50px;\n    height:50px;\n    z-index:0;    \n    background:url(/images/LoadingImg.gif) no-repeat center center;\n"]);return Ue=function(){return e},e}function Ne(){var e=Object(v.a)(["\n    color: white;\n    position:fixed;\n    top:0;\n    left:0;\n    width:100px;\n    height:100%;\n    display:flex;\n    justify-content:center;\n    padding: 0px 10px;\n    background-color:rgba(20,20,20,0.8);\n    z-index: 0;\n    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]);return Ne=function(){return e},e}var Ce=h.default.header(Ne()),Pe=h.default.div(Ue()),Fe=h.default.ul(Ie()),Le=h.default.li(Me(),(function(e){return e.current?"#3498db":"transparent"})),Ae=Object(h.default)(l.b)(ze()),Ve=Object(c.g)((function(e){var t=e.location.pathname;return(r.a.createElement(Ce,null,r.a.createElement(Fe,null,r.a.createElement(Pe,{current:"/"===t},r.a.createElement(Ae,{to:"/"})),r.a.createElement(Le,{current:"/movie"===t},r.a.createElement(Ae,{to:"/movie"},"Movies")),r.a.createElement(Le,{current:"/tv"===t},r.a.createElement(Ae,{to:"/tv"},"TV")),r.a.createElement(Le,{current:"/search"===t},r.a.createElement(Ae,{to:"/search"},"Search")))))})),De=n(58);function Be(){var e=Object(v.a)(["\n    font-size:14px;\n    opacity:0.7;\n    line-height:1.5;\n    width:50%;\n    margin-bottom:20px;\n"]);return Be=function(){return e},e}function Ge(){var e=Object(v.a)(["\n    margin:0 10px;\n"]);return Ge=function(){return e},e}function Je(){var e=Object(v.a)(["\n\n"]);return Je=function(){return e},e}function qe(){var e=Object(v.a)(["\n    font-size:20px;\n    margin:20px 0;\n"]);return qe=function(){return e},e}function We(){var e=Object(v.a)(["\n    font-size:32px;\n    margin-bottom:10px;\n"]);return We=function(){return e},e}function He(){var e=Object(v.a)(["\n    width:70%;\n    margin-left: 10px;    \n"]);return He=function(){return e},e}function Ke(){var e=Object(v.a)(["\n    width:30%;\n    background-image:url(",");\n    background-position: center center;\n    background-size:cover;\n    height:100%;\n    border-radius:5px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(v.a)(["\n    display:flex;    \n    height:100%;\n    width:100%;\n    position:relative;\n    z-index:1;\n"]);return Qe=function(){return e},e}function Xe(){var e=Object(v.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    filter:blur(3px);\n    opacity:0.5;\n    background-image:url(",");\n    background-position: center center;\n    background-size:cover;\n    z-index:0;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(v.a)(["\n    height:calc(100vh - 50px);\n    width:100%;\n    display :flex;\n    justify-content:space-between;\n    position:relative;\n    padding:50px;\n    align-self: auto;\n"]);return Ye=function(){return e},e}var Ze={height:"500vh",width:"840",playerVars:{autoplay:1}},$e=h.default.div(Ye()),et=h.default.div(Xe(),(function(e){return e.bgImage})),tt=h.default.div(Qe()),nt=h.default.div(Ke(),(function(e){return e.bgImage})),at=h.default.div(He()),rt=h.default.h3(We()),it=h.default.div(qe()),ot=h.default.span(Je()),lt=h.default.span(Ge()),ct=h.default.p(Be()),ut=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(U,null)):r.a.createElement($e,null,r.a.createElement(b.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | Nomflix")),r.a.createElement(et,{bgImage:t.backdrop_path?"http://image.tmdb.org/t/p/original"+t.backdrop_path:n(34)}),r.a.createElement(tt,null,r.a.createElement(nt,{bgImage:t.poster_path?"http://image.tmdb.org/t/p/original"+t.poster_path:n(34)}),r.a.createElement(at,null,r.a.createElement(rt,null,t.original_title?t.original_title:t.original_name),r.a.createElement(it,null,r.a.createElement(ot,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(lt,null," \xb7 "),r.a.createElement(ot,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(lt,null," \xb7 "),r.a.createElement(ot,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(lt,null," \xb7 "),r.a.createElement(ot,null,t.runtime?t.runtime:t.episode_run_time[0]," min")),r.a.createElement(ct,null,t.overview),t.videos.results[0]&&r.a.createElement(De.a,{videoId:t.videos.results[0].key,opts:Ze}))))},st=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var a;Object(m.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie")},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,i,o,l,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=14;break}return e.next=9,W(i);case 9:o=e.sent,l=o.data,this.setState({result:l}),e.next=19;break;case 14:return e.next=16,Y(i);case 16:c=e.sent,u=c.data,this.setState({result:u});case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),this.setState({error:"Can't find anything"});case 24:return e.prev=24,this.setState({loading:!1}),e.finish(24);case 27:case"end":return e.stop()}}),e,this,[[5,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return(r.a.createElement(ut,{result:t,error:n,loading:a}))}}]),n}(r.a.Component),pt=function(){return r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:he}),r.a.createElement(c.b,{path:"/search",exact:!0,component:Oe}),r.a.createElement(c.b,{path:"/tv",component:Re}),r.a.createElement(c.b,{path:"/movie/:id",component:st}),r.a.createElement(c.b,{path:"/show/:id",component:st}),r.a.createElement(c.a,{from:"*",to:"/"}))))},mt=n(61),dt=n.n(mt);function ft(){var e=Object(v.a)(["\n    ",';\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: Georgia, "Times New Roman", serif;\n        font-size: 8px;\n        background-color:rgba(20,20,20,1);        \n        color:white;\n        padding-top:15px;\n        padding-left:100px;\n    }\n']);return ft=function(){return e},e}var gt=Object(h.createGlobalStyle)(ft(),dt.a);var vt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,null),r.a.createElement(gt,null)))};o.a.render(r.a.createElement(vt,null),document.getElementById("root"))},34:function(e,t,n){e.exports=n.p+"static/media/NoneImage.0eaafba0.JPG"},53:function(e,t,n){e.exports=n.p+"static/media/LoadingImg2.d05223f7.gif"},62:function(e,t,n){e.exports=n(103)}},[[62,1,2]]]);
//# sourceMappingURL=main.6a366716.chunk.js.map