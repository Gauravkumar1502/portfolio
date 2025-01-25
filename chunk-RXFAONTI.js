import{a as b}from"./chunk-XQ54TZCG.js";import{g as x}from"./chunk-XZ3BNUOK.js";import{Ab as y,Db as g,Nb as _,Ob as h,Ra as m,Sa as u,ab as a,fc as M,gc as l,mb as d,rb as f,tb as C,ub as v,vb as s,wb as p,xb as n,yb as t}from"./chunk-YI6BQVMU.js";function O(o,i){if(o&1&&(n(0,"p"),_(1),t()),o&2){let e=i.$implicit;m(),h(e)}}var c=class o{lines=[];type="info";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=a({type:o,selectors:[["app-message"]],inputs:{lines:"lines",type:"type"},decls:3,vars:3,template:function(e,r){e&1&&(n(0,"div"),s(1,O,2,1,"p",null,C),t()),e&2&&(f("message message--",r.type,""),m(),p(r.lines))},dependencies:[l],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.message[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem 2rem}.message--error[_ngcontent-%COMP%]{color:var(--error-color)}"]})};function P(o,i){if(o&1&&y(0,7),o&2){let e=i.$implicit;d("ngComponentOutlet",e.component)("ngComponentOutletInputs",e.inputs)}}var S=class o{constructor(i){this.themeService=i;this.themeService.initTheme("terminal"),this.themeService.removeTheme("gui")}counter=0;renderedComponents=[];addMessageComponent(){console.log("Adding message component"),this.renderedComponents.push({component:c,inputs:{lines:["This is a message component",`Message number: ${this.counter}`],type:this.counter%2===0?"info":"error"}}),this.counter++}clearMessages(){this.renderedComponents=[],this.counter=0}static \u0275fac=function(e){return new(e||o)(u(b))};static \u0275cmp=a({type:o,selectors:[["app-cli"]],decls:24,vars:1,consts:[[1,"version"],[1,"intro"],[1,"art"],[1,"name"],[1,"help"],[1,"keyword"],["id","terminal"],[3,"ngComponentOutlet","ngComponentOutletInputs"],[1,"clear",3,"click"],[3,"routerLink"]],template:function(e,r){e&1&&(n(0,"p",0),_(1,"Terminal Portfolio v1.0.0"),t(),n(2,"div",1)(3,"pre",2),_(4,`                  ,---------------------------,
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
    `),t()(),n(7,"div",4)(8,"p"),_(9,"Welcome to my interactive web terminal."),t(),n(10,"p"),_(11,"For a list of available commands, type "),n(12,"span",5),_(13,"help"),t(),_(14,"."),t()(),n(15,"div",6),s(16,P,1,2,"ng-container",7,v),n(18,"button",8),g("click",function(){return r.addMessageComponent()}),_(19,"Add a Message component"),t(),n(20,"button",8),g("click",function(){return r.clearMessages()}),_(21,"Add an Input component"),t(),n(22,"button",9),_(23,"Switch to GUI"),t()()),e&2&&(m(16),p(r.renderedComponents),m(6),d("routerLink","/"))},dependencies:[l,M,x],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}[_nghost-%COMP%]{display:flex;flex-direction:column;color:var(--text-color);background-color:var(--bg-color);padding:1rem}.version[_ngcontent-%COMP%]{font-weight:bolder}app-message[_ngcontent-%COMP%]{margin-top:10px;background-color:#639}.intro[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:end;gap:min(2rem,2vw)}"]})};export{S as CliComponent};
