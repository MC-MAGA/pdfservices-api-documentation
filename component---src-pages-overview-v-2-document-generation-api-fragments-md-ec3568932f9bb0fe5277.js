"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9147],{3296:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return f}});var n=a(87462),i=a(45987),s=(a(15007),a(64983)),p=a(91515);const d=["components"],o={},c=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var m;const r={_frontmatter:o},l=p.Z;function f(e){let{components:t}=e,a=(0,i.Z)(e,d);return(0,s.mdx)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"fragments"},"Fragments"),(0,s.mdx)("p",null,"Fragments are special tags which enables users to write a composition using text tags or other fragments. Fragments introduce re-usability among the tags and enable users to create multiple such compositions and use them in their templates."),(0,s.mdx)("h2",{id:"how-to-use-"},"How to use ?"),(0,s.mdx)("p",null,"To use fragments in the api, user will need to create a ",(0,s.mdx)("strong",{parentName:"p"},"fragments")," json and pass it as a parameter in the api request body or they can use SDKs as well."),(0,s.mdx)("p",null,"Below is a json defining fragments related to an ",(0,s.mdx)("strong",{parentName:"p"},"address")," and a ",(0,s.mdx)("strong",{parentName:"p"},"name")," use-case."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "addressDetails" : "<br>{{streetDetails}}<br>{{localityDetails}}",\n  "streetDetails":"<span style=\\"color: 0000FF;\\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",\n  "localityDetails" : "<span style=\\"color: 006400;\\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>",\n  "fullname": "<span style=\\"color: ff0000;\\">{{firstname}} {{lastnameStyled}}",\n  "lastnameStyled": "<span STYLE=\\"font-size:14mm\\"><b><i>{{lastname}}</i></b>"\n}\n')),(0,s.mdx)("p",null,"In the above json, we have defined fragments named ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressDetails"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"streetDetails"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"localityDetails")," related to the ",(0,s.mdx)("strong",{parentName:"p"},"address")," use-case and,  ",(0,s.mdx)("inlineCode",{parentName:"p"},"fullname")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"lastnameStyled")," for the ",(0,s.mdx)("strong",{parentName:"p"},"name")," use-case. Below is the explanation of the fragments defined above: "),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressDetails")," fragment composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"streetDetails")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"localityDetails")," fragment tags."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"streetDetails")," fragment composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressline1"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressline2")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressline3")," text tags."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"localityDetails")," fragment composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"state"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"city")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"pincode")," text tags."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"fullname")," fragment composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"firstname")," text tag and a ",(0,s.mdx)("inlineCode",{parentName:"p"},"lastnameStyled")," fragment tag."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"lastnameStyled")," fragment composes ",(0,s.mdx)("inlineCode",{parentName:"p"},"lastname")," text tag."),(0,s.mdx)("p",null,"To resolve the text tags used in the above fragments, the ",(0,s.mdx)("strong",{parentName:"p"},"jsonDataForMerge")," json would be:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "addressline1": "Sample Address Line 1",\n  "addressline2": "Sample Address Line 2",\n  "addressline3": "Sample Address Line 3",\n  "city": "Sample City",\n  "state": "Sample State",\n  "pincode": "42132xx",\n  "firstname": "John",\n  "lastname": "Roy"\n}\n')),(0,s.mdx)("p",null,"There is one more way to define ",(0,s.mdx)("strong",{parentName:"p"},"fragments")," json which can be used to organize related fragments together and separate unrelated fragments into another object, then all such objects can be combined in a json array. "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "addressDetails": "<br>{{streetDetails}}<br>{{localityDetails}}",\n    "streetDetails": "<span style=\\"color: 0000FF;\\">{{addressline1}}<br>{{addressline2}}<br>{{addressline3}}",\n    "localityDetails": "<span style=\\"color: 006400;\\">{{city}},<i>{{state}}</i>-<b>{{pincode}}</b>"\n  },\n  {\n    "fullname": "<span style=\\"color: ff0000;\\">{{firstname}} {{lastnameStyled}}",\n    "lastnameStyled": "<span STYLE=\\"font-size:14mm\\"><b><i>{{lastname}}</i></b>"\n  }\n]\n')),(0,s.mdx)("p",null,"In the above json array, first json object corresponds to the ",(0,s.mdx)("strong",{parentName:"p"},"address")," related fragments and second for ",(0,s.mdx)("strong",{parentName:"p"},"name")," related fragments"),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"To resolve the value of nested fragment like ",(0,s.mdx)("inlineCode",{parentName:"p"},"streetDetails")," above, the same object containing the parent fragment i.e. ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressDetails")," will be looked up. This is how the nested fragments are resolved."),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"If there are name collisions in the fragment keys within multiple objects, the first object (containing the key) in the list, will be used to resolve it."),(0,s.mdx)("p",null,"Below are the sample input and output documents snapshots describing the use of fragments."),(0,s.mdx)("p",null,"Here the ",(0,s.mdx)("inlineCode",{parentName:"p"},"addressDetails")," fragment is used in the word document template file."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"3.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/5530d/address_input.webp 320w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/0c8fb/address_input.webp 640w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/94b1e/address_input.webp 1280w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/0b34d/address_input.webp 1920w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/4d98c/address_input.webp 2212w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/dd4a7/address_input.png 320w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/0f09e/address_input.png 640w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/bbbf7/address_input.png 1280w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/ac7a9/address_input.png 1920w","/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/d55ca/address_input.png 2212w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/bb631aa876f86b9ccc92f1fde952ccbf/bbbf7/address_input.png",alt:"Address Input fragment",title:"Address Input fragment",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The output document generated will look like:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/5530d/address_output.webp 320w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/0c8fb/address_output.webp 640w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/94b1e/address_output.webp 1280w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/0b34d/address_output.webp 1920w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/9858b/address_output.webp 2116w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/dd4a7/address_output.png 320w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/0f09e/address_output.png 640w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/bbbf7/address_output.png 1280w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/ac7a9/address_output.png 1920w","/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/f7edd/address_output.png 2116w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/eb9f7592f203c7bf37034697a4375e03/bbbf7/address_output.png",alt:"Output of address fragment in document",title:"Output of address fragment in document",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Similarly,  the ",(0,s.mdx)("inlineCode",{parentName:"p"},"fullname")," fragment can be used like this in the word document template file."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"3.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/5530d/name_input.webp 320w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/0c8fb/name_input.webp 640w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/94b1e/name_input.webp 1280w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/0b34d/name_input.webp 1920w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/d2cb1/name_input.webp 2216w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/dd4a7/name_input.png 320w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/0f09e/name_input.png 640w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/bbbf7/name_input.png 1280w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/ac7a9/name_input.png 1920w","/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/7a54e/name_input.png 2216w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/028445b0098e3b4092236aea6d57c6e9/bbbf7/name_input.png",alt:"Name Input fragment",title:"Name Input fragment",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"And the output document generated will look like:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"4.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/5530d/name_output.webp 320w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/0c8fb/name_output.webp 640w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/94b1e/name_output.webp 1280w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/0b34d/name_output.webp 1920w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/9d55f/name_output.webp 2166w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/dd4a7/name_output.png 320w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/0f09e/name_output.png 640w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/bbbf7/name_output.png 1280w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/ac7a9/name_output.png 1920w","/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/e058c/name_output.png 2166w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/c40256836008d0e524fcc0d4f90fcaf3/bbbf7/name_output.png",alt:"Output of name fragment in document",title:"Output of name fragment in document",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"limitations"},"Limitations"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The Expressions and Jsonata functions are not supported inside the fragment definition.")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-v-2-document-generation-api-fragments-md-ec3568932f9bb0fe5277.js.map