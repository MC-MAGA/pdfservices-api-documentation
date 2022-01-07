"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3495],{85726:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return m}});var i=t(87462),n=t(63366),d=(t(15007),t(64983)),o=t(99536),c=["components"],s={},p={_frontmatter:s},r=o.Z;function m(e){var a=e.components,t=(0,n.Z)(e,c);return(0,d.mdx)(r,(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"dynamic-table-constructs"},"Dynamic Table Constructs"),(0,d.mdx)("p",null,"Add dynamic behaviour to a table using ",(0,d.mdx)("a",{parentName:"p",href:"../document-generation-api/dynamictableconstructs.md#dynamic-table-columns"},"dynamic table columns constructs")," to discard column or set of columns at runtime."),(0,d.mdx)("h2",{id:"dynamic-table-columns"},"Dynamic table columns"),(0,d.mdx)("p",null,"Discard a column or set of columns in a table from the final generated document as follows :"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../document-generation-api/dynamictableconstructs.md#discard-column-if-empty"},"Discard column if empty"),"."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../document-generation-api/dynamictableconstructs.md#discard-column-if-condition-evaluates-to-true"},"Discard column if condition evaluates to true"),".")),(0,d.mdx)("h3",{id:"discard-column-if-empty"},"Discard column if empty"),(0,d.mdx)("p",null,"Column in a table can be discarded if every element of an array in the input json is empty or null."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"How to use")," ",(0,d.mdx)("br",null),"\nAdd discard-if-empty construct with boolean false/true along with the template tag to activate discard if empty feature for the corresponding column."),(0,d.mdx)("p",null,"JSON representation of the input data:"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Json 1")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "Project": [\n    {\n      "Name": "ABC Infra",\n      "Milestone": "First Milestone",\n      "DateComplete": "24/06/2021",\n      "Notes": ""\n    },\n    {\n      "Name": "ABC Infra",\n      "Milestone": "Second Milestone",\n      "DateComplete": "24/06/2022",\n      "Notes": ""\n    },\n    {\n      "Name": "DEF Computer Labs",\n      "Milestone": "First Milestone",\n      "DateComplete": "12/12/2021",\n      "Notes": ""\n    },\n    {\n      "Name": "DEF Computer Labs",\n      "Milestone": "Second Milestone",\n      "DateComplete": "12/12/2021",\n      "Notes": ""\n    }\n  ]\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Json2")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "Project": [\n    {\n      "Name": "ABC Infra",\n      "Milestone": "First Milestone",\n      "DateComplete": "24/06/2021"\n    },\n    {\n      "Name": "ABC Infra",\n      "Milestone": "Second Milestone",\n      "DateComplete": "24/06/2022"\n    },\n    {\n      "Name": "DEF Computer Labs",\n      "Milestone": "First Milestone",\n      "DateComplete": "12/12/2021"\n    },\n    {\n      "Name": "DEF Computer Labs",\n      "Milestone": "Second Milestone",\n      "DateComplete": "12/12/2021"\n    }\n  ]\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.687500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/cb523/discard_column_if_empty.webp 320w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/797b9/discard_column_if_empty.webp 640w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/4b075/discard_column_if_empty.webp 1280w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/82a76/discard_column_if_empty.webp 1766w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/72799/discard_column_if_empty.png 320w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/6af66/discard_column_if_empty.png 640w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/21b4d/discard_column_if_empty.png 1280w","/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/f4fb1/discard_column_if_empty.png 1766w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/a88d8ee0937bdc784c496a2f039acbe5/21b4d/discard_column_if_empty.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"{{Project.Notes:",(0,d.mdx)("strong",{parentName:"li"},"discard_if_empty(true)"),"}} tag lets the engine discard the particular column if every element of an array in the input json is either empty or null.")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note"),": The row above the authored row will be considered as a header row. Cell from the header row will be discarded along with discarded column."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/cb523/header_row1.webp 320w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/797b9/header_row1.webp 640w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/4b075/header_row1.webp 1280w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/be437/header_row1.webp 1572w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/72799/header_row1.png 320w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/6af66/header_row1.png 640w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/21b4d/header_row1.png 1280w","/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/5df5d/header_row1.png 1572w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/5ab461602db5fb7e0e065e3903428ef2/21b4d/header_row1.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/cb523/header_row2.webp 320w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/797b9/header_row2.webp 640w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/4b075/header_row2.webp 1280w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/d245c/header_row2.webp 1576w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/72799/header_row2.png 320w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/6af66/header_row2.png 640w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/21b4d/header_row2.png 1280w","/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/016a8/header_row2.png 1576w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/7c4cc8d11e9d8676e557f90645d0a4bb/21b4d/header_row2.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/cb523/without_header_row.webp 320w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/797b9/without_header_row.webp 640w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/4b075/without_header_row.webp 1280w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/43d96/without_header_row.webp 1600w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/72799/without_header_row.png 320w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/6af66/without_header_row.png 640w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/21b4d/without_header_row.png 1280w","/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/29007/without_header_row.png 1600w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/9b0626ed88ca96edaf3a2cce899b59b3/21b4d/without_header_row.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h3",{id:"discard-column-if-condition-evaluates-to-true"},"Discard column if condition evaluates to true"),(0,d.mdx)("p",null,"Column in the table can be discarded If condition provided in the discard-if(expr(",(0,d.mdx)("strong",{parentName:"p"},"condition"),")) evaluates to true. Add discard-if(expr(",(0,d.mdx)("strong",{parentName:"p"},"condition"),")) construct along with the template tag to activate discard if feature for the corresponding column."),(0,d.mdx)("p",null,"JSON representation of the input data:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "Conversion": [\n    {\n      "Month": "July, 2021",\n      "Rate": 10,\n      "Method": "Payout by Cheque"\n    },\n    {\n      "Month": "September, 2021",\n      "Rate": 30,\n      "Method": "Payout by Cheque"\n    },\n    {\n      "Month": "Dec, 2021",\n      "Rate": 20,\n      "Method": "Payout by Cheque"\n    },\n    {\n      "Month": "April, 2022",\n      "Rate": 20,\n      "Method": "Payout by Cheque"\n    },\n    {\n      "Month": "Dec, 2022",\n      "Rate": 30,\n      "Method": "Payout by Cheque"\n    }\n  ]\n}\n')),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/cb523/discard_if_condition_true.webp 320w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/797b9/discard_if_condition_true.webp 640w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/4b075/discard_if_condition_true.webp 1280w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/ac5a1/discard_if_condition_true.webp 1696w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/72799/discard_if_condition_true.png 320w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/6af66/discard_if_condition_true.png 640w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/21b4d/discard_if_condition_true.png 1280w","/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/bce1e/discard_if_condition_true.png 1696w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3bf5cc63a5dfaad7a8a1172a7e5e8586/21b4d/discard_if_condition_true.png",alt:"image",title:"image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"{{Conversion.Rate:",(0,d.mdx)("strong",{parentName:"li"},"discard-if(expr($sum(Conversion.Rate)!= 100))"),"}}% tag lets the engine discard the particular column if condition provided in the ",(0,d.mdx)("strong",{parentName:"li"},"expr")," construct evaluates to true.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-document-generation-api-dynamictableconstructs-md-184824b56dbaa0084f44.js.map