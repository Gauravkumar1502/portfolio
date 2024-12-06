import{a as b}from"./chunk-NSAEOS4P.js";import{g as S}from"./chunk-E7DLQLLY.js";import{$b as c,Eb as _,Fb as M,Gb as l,Na as a,Oa as f,_b as x,aa as m,fb as g,kb as C,mb as v,nb as y,ob as s,pb as p,qb as n,rb as t,tb as h,wb as u}from"./chunk-RO4ZB3MN.js";function P(o,i){if(o&1&&(n(0,"p"),_(1),t()),o&2){let e=i.$implicit;a(),M(e)}}var d=class o{lines=[];type="info";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-message"]],inputs:{lines:"lines",type:"type"},standalone:!0,features:[l],decls:3,vars:3,template:function(e,r){e&1&&(n(0,"div"),s(1,P,2,1,"p",null,v),t()),e&2&&(C("message message--",r.type,""),a(),p(r.lines))},dependencies:[c],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem 2rem}.message--error[_ngcontent-%COMP%]{color:var(--error-color)}"]})};function E(o,i){if(o&1&&h(0,7),o&2){let e=i.$implicit;g("ngComponentOutlet",e.component)("ngComponentOutletInputs",e.inputs)}}var T=class o{constructor(i){this.themeService=i;this.themeService.initTheme("terminal"),this.themeService.removeTheme("gui")}counter=0;renderedComponents=[];addMessageComponent(){console.log("Adding message component"),this.renderedComponents.push({component:d,inputs:{lines:["This is a message component",`Message number: ${this.counter}`],type:this.counter%2===0?"info":"error"}}),this.counter++}clearMessages(){this.renderedComponents=[],this.counter=0}static \u0275fac=function(e){return new(e||o)(f(b))};static \u0275cmp=m({type:o,selectors:[["app-cli"]],standalone:!0,features:[l],decls:24,vars:1,consts:[[1,"version"],[1,"intro"],[1,"art"],[1,"name"],[1,"help"],[1,"keyword"],["id","terminal"],[3,"ngComponentOutlet","ngComponentOutletInputs"],[1,"clear",3,"click"],[3,"routerLink"]],template:function(e,r){e&1&&(n(0,"p",0),_(1,"Terminal Portfolio v1.0.0"),t(),n(2,"div",1)(3,"pre",2),_(4,`                  ,---------------------------,
                  | ,-----------------------, |
                  | |      Terminal         | |
                  | |       Portfolio       | |
                  | |        with Some      | |
                  | |         CLI Tools     | |
                  | |_______________________| |
                  |___________________________|
                ,---\\_____     []     _______/------,
              /         /______________\\           /|
            /___________________________________ /  | ___
            |                                   |   |    /
            |  _ _ _                 [-------]  |   |   (
            |  o o o                 [-------]  |  /    _)_
            |__________________________________ |/     / / /'
        /-------------------------------------/       /\`\`\`/'
      /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/         \`\`\`\`\`
    /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `),t(),n(5,"pre",3),_(6,`         ______                                __ __
        / ____/___ ___  ___________ __   __   / //_/_  ______ ___  ____ ______
       / / __/ __ \`/ / / / ___/ __ \`/ | / /  / ,< / / / / __ \`__ \\/ __ \`/ ___/
      / /_/ / /_/ / /_/ / /  / /_/ /| |/ /  / /| / /_/ / / / / / / /_/ / /
      \\____/\\__,_/\\__,_/_/   \\__,_/ |___/  /_/ |_\\__,_/_/ /_/ /_/\\__,_/_/
    `),t()(),n(7,"div",4)(8,"p"),_(9,"Welcome to my interactive web terminal."),t(),n(10,"p"),_(11,"For a list of available commands, type "),n(12,"span",5),_(13,"help"),t(),_(14,"."),t()(),n(15,"div",6),s(16,E,1,2,"ng-container",7,y),n(18,"button",8),u("click",function(){return r.addMessageComponent()}),_(19,"Add a Message component"),t(),n(20,"button",8),u("click",function(){return r.clearMessages()}),_(21,"Add an Input component"),t(),n(22,"button",9),_(23,"Switch to GUI"),t()()),e&2&&(a(16),p(r.renderedComponents),a(6),g("routerLink","/portfolio"))},dependencies:[c,x,S],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}[_nghost-%COMP%]{display:flex;flex-direction:column;color:var(--text-color);background-color:var(--bg-color);padding:1rem}.version[_ngcontent-%COMP%]{font-weight:bolder}app-message[_ngcontent-%COMP%]{margin-top:10px;background-color:#639}.intro[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:end;gap:min(2rem,2vw)}"]})};export{T as CliComponent};
