"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1002],{17382:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return u}});var n=a(87462),i=a(45987),o=(a(15007),a(64983)),d=a(91515);const s=["components"],p={},r=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const c={_frontmatter:p},l=d.Z;function u(e){let{components:t}=e,a=(0,i.Z)(e,s);return(0,o.mdx)(l,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started"},"Getting Started"),(0,o.mdx)("h2",{id:"getting-credentials"},"Getting credentials"),(0,o.mdx)("p",null,"You'll need a client ID to use the Adobe PDF Embed API. To\nget one, ",(0,o.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api"},"click HERE"),", and\ncomplete the workflow."),(0,o.mdx)("h2",{id:"copy-it-run-it"},"Copy it. Run it."),(0,o.mdx)("p",null,"The quickest way to get up and running is to simply copy the code below\nto an index.html file. The example already\npoints to an online PDF."),(0,o.mdx)("p",null,"Generate a client ID from\n",(0,o.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api"},"here"),". Insert the client\nID within the double quotes in line 16 in the code below and run the\nwebpage from your server in any browser."),(0,o.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"After the first page of the PDF is rendered, PDF Embed API calls into a service to validate if the client ID is used with the correct website domain. If the client ID is incorrect or you are using it on a domain other than the one you registered, then the PDF preview is blocked with an error message."),(0,o.mdx)("p",null,"There really are no environment setup steps or system requirements.\nDevelop your web app using your preferred methods and tools."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!--Get the samples from https://www.adobe.com/go/pdfembedapi_samples--\x3e\n<!DOCTYPE html>\n<html>\n<head>\n <title>Adobe Acrobat Services PDF Embed API Sample</title>\n <meta charset="utf-8"/>\n <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1"/>\n</head>\n<body style="margin: 0px">\n <div id="adobe-dc-view"></div>\n <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"><\/script>\n <script type="text/javascript">\n    document.addEventListener("adobe_dc_view_sdk.ready", function()\n    {\n        var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});\n        adobeDCView.previewFile(\n       {\n          content:   {location: {url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},\n          metaData: {fileName: "Bodea Brochure.pdf"}\n       });\n    });\n <\/script>\n</body>\n</html>\n')),(0,o.mdx)("h2",{id:"run-ready-samples"},"Run ready samples"),(0,o.mdx)("p",null,"The PDF Embed API provides ready-to-run sample files for every feature."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Download the ",(0,o.mdx)("a",{parentName:"li",href:"https://www.adobe.com/go/pdfembedapi_samples"},"samples repo"),"."),(0,o.mdx)("li",{parentName:"ol"},"Place the files in any location that has internet access."),(0,o.mdx)("li",{parentName:"ol"},"Navigate to the index.html file for any sample, and open it in a\nbrowser.")),(0,o.mdx)("p",null,"If a PDF renders in the web viewer, the sample has correctly executed."),(0,o.mdx)("h2",{id:"live-demo"},"Live demo"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/FULL_WINDOW/Bodea%20Brochure.pdf"},"Adobe PDF Embed API\ndemo"),' demonstrates how easy it\nis to configure the viewer and also provides a "generate code" button so\nthat you can immediately see your UI changes reflected in a live code\nsample.'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/5530d/playground.webp 320w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/0c8fb/playground.webp 640w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/94b1e/playground.webp 1280w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/90d1c/playground.webp 1728w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/dd4a7/playground.png 320w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/0f09e/playground.png 640w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/bbbf7/playground.png 1280w","/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/617a2/playground.png 1728w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/a01e3096be949ad633a19a16944a3050/bbbf7/playground.png",alt:"View SDK Playground with customization tools such as annotation, download etc and generate code button on the left",title:"View SDK Playground with customization tools such as annotation, download etc and generate code button on the left",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"supported-browsers"},"Supported browsers"),(0,o.mdx)("p",null,"PDF Embed API is supported on the latest versions of the following\nbrowsers:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Windows - Microsoft Edge, Google Chrome, Mozilla Firefox."),(0,o.mdx)("li",{parentName:"ul"},"macOS - Safari, Google Chrome, Microsoft Edge, Mozilla Firefox."),(0,o.mdx)("li",{parentName:"ul"},"Android - Google Chrome."),(0,o.mdx)("li",{parentName:"ul"},"iOS - Safari, Google Chrome.")),(0,o.mdx)("h3",{id:"support-for-print-pdf"},"Support for print PDF"),(0,o.mdx)("p",null,"PDF printing is currently not supported in Firefox browser. Clicking on the print PDF button will show a popup asking users to download the file and print using Adobe Acrobat Reader."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/5530d/print_unsupported_FF.webp 320w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/0c8fb/print_unsupported_FF.webp 640w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/94b1e/print_unsupported_FF.webp 1280w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/f952e/print_unsupported_FF.webp 1488w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/dd4a7/print_unsupported_FF.png 320w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/0f09e/print_unsupported_FF.png 640w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/bbbf7/print_unsupported_FF.png 1280w","/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/58a83/print_unsupported_FF.png 1488w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f48f80a115ce5260fdd7b85022e36b2f/bbbf7/print_unsupported_FF.png",alt:"Print Unsupported Error in Firefox",title:"Print Unsupported Error in Firefox",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"mobile-support"},"Mobile support"),(0,o.mdx)("p",null,"Much of what the PDF Embed API delivers is supported in the mobile\ndevices. However, there are some limitations:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Annotation tools are not supported on phones in Full Window embed\nmode. These tools are supported on tablets (both Android and iOS)."),(0,o.mdx)("li",{parentName:"ul"},"Print functionality is unsupported."),(0,o.mdx)("li",{parentName:"ul"},"PDF download is unsupported on iOS devices, but it is supported on\nAndroid.")),(0,o.mdx)("p",null,"PDF Embed API provides some optimizations in order to enhance the mobile\nview experience. These optimizations are available only in mobile phone\nbrowsers."),(0,o.mdx)("h3",{id:"view-modes-in-mobile-browsers"},"View modes in mobile browsers"),(0,o.mdx)("p",null,"PDF Embed API provides a couple of view modes on mobile phone browsers\nto enhance the viewing experience of the PDFs. Note that these modes are\navailable only with Full Window embed mode."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Continuous view mode: This mode displays all the document pages one\nafter the other and users can easily navigate through the pages by\nscrolling up or down. This is the default view mode to render PDFs\nin mobile phone browsers."),(0,o.mdx)("li",{parentName:"ul"},"Single Page view mode: This mode displays only a single document\npage at a time and doesn't show any adjoining page. Users can use\nthe swipe gesture to navigate to other pages which will be displayed\none at a time.")),(0,o.mdx)("p",null,"The view mode toggle is available in the top bar. Click on the toggle\nand select the desired view mode from the dropdown."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Continuous view mode")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/5530d/continuous_mode.webp 320w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/0c8fb/continuous_mode.webp 640w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/94b1e/continuous_mode.webp 1280w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/a90fd/continuous_mode.webp 1764w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/dd4a7/continuous_mode.png 320w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/0f09e/continuous_mode.png 640w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/bbbf7/continuous_mode.png 1280w","/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/1888f/continuous_mode.png 1764w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b20337da73bfb8ef68a989e09f17e33/bbbf7/continuous_mode.png",alt:"Continous Mode",title:"Continous Mode",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Single page view mode")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/5530d/single_page_mode.webp 320w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/0c8fb/single_page_mode.webp 640w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/94b1e/single_page_mode.webp 1280w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/4e013/single_page_mode.webp 1776w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/dd4a7/single_page_mode.png 320w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/0f09e/single_page_mode.png 640w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/bbbf7/single_page_mode.png 1280w","/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/064ff/single_page_mode.png 1776w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b7d1fb4387e4f64c0ccd470693ccb63f/bbbf7/single_page_mode.png",alt:"Single Page Mode",title:"Single Page Mode",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"These view modes can also be set using the configuration variable\n",(0,o.mdx)("inlineCode",{parentName:"p"},"defaultViewMode"),". Set the appropriate value of the variable and pass it\nas a preview configuration to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"previewFile")," API. For details, see\n",(0,o.mdx)("a",{parentName:"p",href:"./howtos_ui.md#menu-and-tool-options"},"Menu and tool options"),"."),(0,o.mdx)("h3",{id:"go-to-a-page"},"Go to a Page"),(0,o.mdx)("p",null,"PDF Embed API provides a page handle for quick navigation to a specific\npage in the PDF. The page handle displays the current page number in\nview. The page handle appears on the right side for continuous view mode\nwhereas it appears at the bottom for single page mode."),(0,o.mdx)("p",null,"Click on the page handle and a dialog appears asking to enter a page\nnumber. Enter the desired page number and user will be navigated to that\nparticular page."),(0,o.mdx)("p",null,"Note that this functionality is available only with Full Window embed\nmode."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/5530d/goto_page.webp 320w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/0c8fb/goto_page.webp 640w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/94b1e/goto_page.webp 1280w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/66c59/goto_page.webp 1722w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/dd4a7/goto_page.png 320w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/0f09e/goto_page.png 640w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/bbbf7/goto_page.png 1280w","/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/36cec/goto_page.png 1722w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/356bce5ddcd2e97bc9f7955fbf2eb258/bbbf7/goto_page.png",alt:"Go To Page Dialog",title:"Go To Page Dialog",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"zoom-in"},"Zoom in"),(0,o.mdx)("p",null,"PDF Embed API also supports pinch zoom gesture and users can zoom-in to\nmagnify the PDF content for better reading experience. This\nfunctionality is supported with all embed modes."),(0,o.mdx)("h2",{id:"analytics"},"Analytics"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"What information is collected to analyze PDF Embed API usage?")),(0,o.mdx)("p",null,"PDF Embed API ONLY collects essential information which helps Adobe understand how to scale the product and gain insights on product usage. The following information is collected:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Browser and operating system type and version."),(0,o.mdx)("li",{parentName:"ul"},"Type of device used to open the PDF - desktop, mobile or tablet."),(0,o.mdx)("li",{parentName:"ul"},"Embed mode used to render the PDF."),(0,o.mdx)("li",{parentName:"ul"},"File size and number of pages."),(0,o.mdx)("li",{parentName:"ul"},"Performance metrics, such as whether PDF was rendered in linearized manner or not, time taken to download the PDF and render the first page."),(0,o.mdx)("li",{parentName:"ul"},"URL of the webpage.")),(0,o.mdx)("p",null,"Please note that PDF Embed API doesn’t store any user-generated content and never shares user-generated content with Adobe servers."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"How will Adobe use the information?")),(0,o.mdx)("p",null,"The anonymous information will be used to develop new features, collect performance metrics and understand product usage in order to make improvements."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"How is my privacy protected?")),(0,o.mdx)("p",null,"Adobe takes many precautions in protecting the information that is collected and transmitted. Since no personally identifiable information is collected, the data will not be meaningful to anyone outside Adobe."),(0,o.mdx)("h2",{id:"feedback-and-forum"},"Feedback and forum"),(0,o.mdx)("p",null,"Customer feedback is particularly valuable as it helps the team validate\nuse cases, guide development, and troubleshoot issues. Comments and\nquestions are always welcome on the ",(0,o.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/Document-Cloud-SDK/bd-p/Document-Cloud-SDK"},"Community\nForum"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-embed-api-gettingstarted-md-fe7917aed0bc9183247b.js.map