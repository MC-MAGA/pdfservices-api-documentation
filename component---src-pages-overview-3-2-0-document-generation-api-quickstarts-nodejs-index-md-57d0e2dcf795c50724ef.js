"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6671],{67838:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n=a(87462),i=a(45987),o=(a(15007),a(64983)),s=a(91515);const p=["components"],r={},d=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const m={_frontmatter:r},l=s.Z;function u(e){let{components:t}=e,a=(0,i.Z)(e,p);return(0,o.mdx)(l,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"quickstart-for-adobe-document-generation-api-nodejs"},"Quickstart for Adobe Document Generation API (Node.js)"),(0,o.mdx)("p",null,"To get started using Adobe Document Generation API, let's walk through a simple scenario - using a Word document as a template for dynamic receipt generation in PDF. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"To complete this guide, you will need:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," - Node.js version 14.0 or higher is required. "),(0,o.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,o.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,o.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,o.mdx)("p",null,"1) To begin, open your browser to ",(0,o.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api"},"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,o.mdx)("p",null,'3) Change the "Choose language" setting to "Node.js". '),(0,o.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,o.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1015px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/5530d/shot2.webp 320w","/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/0c8fb/shot2.webp 640w","/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/5599d/shot2.webp 1015w"],sizes:"(max-width: 1015px) 100vw, 1015px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/dd4a7/shot2.png 320w","/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/0f09e/shot2.png 640w","/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/4d2c8/shot2.png 1015w"],sizes:"(max-width: 1015px) 100vw, 1015px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/1e7c0fef108f028f605ba72d32f2618f/4d2c8/shot2.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"612px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/5530d/shot3.webp 320w","/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/d408e/shot3.webp 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dd4a7/shot3.png 320w","/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dbf98/shot3.png 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/d2030d39b896b1e3829f05a972fc7af7/dbf98/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,o.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-Node.jsSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"382px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/3ca76/shot5.webp 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"2) We need two things from this download. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/e4092/shot6.webp 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Note that that private key is ",(0,o.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,o.mdx)("p",null,"3) Take these two files and place them in a new directory. Remember that these credential files are important and should be stored safely."),(0,o.mdx)("p",null,"4) At the command line, change to the directory you created, and initialize a new Node.js project with ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm init -y")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/5530d/shot7.webp 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0c8fb/shot7.webp 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/84c6d/shot7.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/dd4a7/shot7.png 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0f09e/shot7.png 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"5) Install the Adobe PDF Services Node.js SDK by typing ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install --save @adobe/pdfservices-node-sdk")," at the command line."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/5530d/shot8.webp 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0c8fb/shot8.webp 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/84c6d/shot8.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/dd4a7/shot8.png 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0f09e/shot8.png 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"At this point, we've installed the Node.js SDK for Adobe PDF Services API as a dependency for our project and have copied over our credentials files. "),(0,o.mdx)("p",null,"Our application will take a Word document, ",(0,o.mdx)("inlineCode",{parentName:"p"},"receiptTemplate.docx")," (downloadable from ",(0,o.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/receiptTemplate.docx"},"here"),"), and combine it with data in a JSON file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"receipt.json")," (downloadable from ",(0,o.mdx)("a",{parentName:"p",href:"/pdfservices-api-documentation/receipt.json"},"here"),"), to be sent to the Acrobat Services API and generate a receipt PDF."),(0,o.mdx)("p",null,"7) In your editor, open the directory where you previously copied the credentials. Create a new file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"generatePDF.js"),"."),(0,o.mdx)("p",null,"Now you're ready to begin coding."),(0,o.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,o.mdx)("p",null,"1) Let's start by looking at the Word template. If you open the document in Microsoft Word, you'll notice multiple tokens throughout the document (called out by the use of ",(0,o.mdx)("inlineCode",{parentName:"p"},"{{")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"}}"),")."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/5530d/shot10.webp 320w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/0c8fb/shot10.webp 640w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/94b1e/shot10.webp 1280w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/708fc/shot10.webp 1359w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/dd4a7/shot10.png 320w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/0f09e/shot10.png 640w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/bbbf7/shot10.png 1280w","/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/14c08/shot10.png 1359w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/98518ce1f0921da4983ede2890a013de/bbbf7/shot10.png",alt:"Example of tokens",title:"Example of tokens",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"When the Document Generation API is used, these tokens are replaced with the JSON data sent to the API. These tokens support simple replacements, for example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"{{Customer.Name}}"),' will be replaced by a customer\'s name passed in JSON. You can also have dynamic tables. In the Word template, the table uses invoice items as a way to dynamically render whatever items were ordered. Conditions can also be used to hide or show content as you can see two conditions at the end of the document. Finally, basic math can be also be dynamically applied, as seen in the "Grand Total". '),(0,o.mdx)("p",null,"2) Next, let's look at our sample data: "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "author": "Gary Lee",\n  "Company": {\n    "Name": "Projected",\n    "Address": "19718 Mandrake Way",\n    "PhoneNumber": "+1-100000098"\n  },\n  "Invoice": {\n    "Date": "January 15, 2021",\n    "Number": 123,\n    "Items": [\n      {\n        "item": "Gloves",\n        "description": "Microwave gloves",\n        "UnitPrice": 5,\n        "Quantity": 2,\n        "Total": 10\n      },\n      {\n        "item": "Bowls",\n        "description": "Microwave bowls",\n        "UnitPrice": 10,\n        "Quantity": 2,\n        "Total": 20\n      }\n    ]\n  },\n  "Customer": {\n    "Name": "Collins Candy",\n    "Address": "315 Dunning Way",\n    "PhoneNumber": "+1-200000046",\n    "Email": "cc@abcdef.co.dw"\n  },\n  "Tax": 5,\n  "Shipping": 5,\n  "clause": {\n    "overseas": "The shipment might take 5-10 more than informed."\n  },\n  "paymentMethod": "Cash"\n}\n')),(0,o.mdx)("p",null,"Notice how the tokens in the Word document match up with values in our JSON. While our example will use a hard coded set of data in a file, production applications can get their data from anywhere. Now let's get into our code."),(0,o.mdx)("p",null,"3) We'll begin by including our required dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\n")),(0,o.mdx)("p",null,"The first line includes the Adobe PDF Services Node.js SDK. The second third include Node's ",(0,o.mdx)("inlineCode",{parentName:"p"},"filesystem")," package. "),(0,o.mdx)("p",null,"2) Now let's define our input and output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const OUTPUT = './generatedReceipt.pdf';\n\n// If our output already exists, remove it so we can run the application again.\nif(fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);\n\nconst INPUT = './receiptTemplate.docx';\n\nconst JSON_INPUT = require('./receipt.json');\n")),(0,o.mdx)("p",null,"These lines are hard coded but in a real application would typically be dynamic."),(0,o.mdx)("p",null,"3) Next, we setup the SDK to use our credentials."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n")),(0,o.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,o.mdx)("p",null,"4) Now, let's create the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const documentMerge = PDFServicesSdk.DocumentMerge,\n       documentMergeOptions = documentMerge.options,\n       options = new documentMergeOptions.DocumentMergeOptions(JSON_INPUT, documentMergeOptions.OutputFormat.PDF);\n\n// Create a new operation instance using the options instance.\nconst documentMergeOperation = documentMerge.Operation.createNew(options);\n\n// Set operation input document template from a source file.\nconst input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);\ndocumentMergeOperation.setInput(input);\n")),(0,o.mdx)("p",null,"This set of code defines what we're doing (a document merge operation, the SDK's way of describing Document Generation), points to our local JSON file and specifies the output is a PDF. It also points to the Word file used as a template."),(0,o.mdx)("p",null,"5) The next code block executes the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Execute the operation and Save the result to the specified location.\ndocumentMergeOperation.execute(executionContext)\n.then(result => result.saveAsFile(OUTPUT))\n.catch(err => {\n    if(err instanceof PDFServicesSdk.Error.ServiceApiError\n        || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n        console.log('Exception encountered while executing operation', err);\n    } else {\n        console.log('Exception encountered while executing operation', err);\n    }\n});\n")),(0,o.mdx)("p",null,"This code runs the document generation process and then stores the result PDF document to the file system. "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1107px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/5530d/shot9.webp 320w","/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/0c8fb/shot9.webp 640w","/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/a8a52/shot9.webp 1107w"],sizes:"(max-width: 1107px) 100vw, 1107px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/dd4a7/shot9.png 320w","/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/0f09e/shot9.png 640w","/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/3fa5a/shot9.png 1107w"],sizes:"(max-width: 1107px) 100vw, 1107px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/508c9db52730dd4c998060c6c6101854/3fa5a/shot9.png",alt:"Example running at the command line",title:"Example running at the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Here's the complete application (",(0,o.mdx)("inlineCode",{parentName:"p"},"documentmerge.js"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\n\nconst OUTPUT = './generatedReceipt.pdf';\n\n// If our output already exists, remove it so we can run the application again.\nif(fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);\n\nconst INPUT = './receiptTemplate.docx';\n\nconst JSON_INPUT = require('./receipt.json');\n\n\n// Set up our credentials object.\nconst credentials = PDFServicesSdk.Credentials\n    .serviceAccountCredentialsBuilder()\n    .fromFile('pdfservices-api-credentials.json')\n    .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n// This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)\nconst documentMerge = PDFServicesSdk.DocumentMerge,\n    documentMergeOptions = documentMerge.options,\n    options = new documentMergeOptions.DocumentMergeOptions(JSON_INPUT, documentMergeOptions.OutputFormat.PDF);\n\n// Create a new operation instance using the options instance.\nconst documentMergeOperation = documentMerge.Operation.createNew(options);\n\n// Set operation input document template from a source file.\nconst input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);\ndocumentMergeOperation.setInput(input);\n\n\n// Execute the operation and Save the result to the specified location.\ndocumentMergeOperation.execute(executionContext)\n    .then(result => result.saveAsFile(OUTPUT))\n    .catch(err => {\n        if(err instanceof PDFServicesSdk.Error.ServiceApiError\n            || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n            console.log('Exception encountered while executing operation', err);\n        } else {\n            console.log('Exception encountered while executing operation', err);\n        }\n    });\n\n")),(0,o.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,o.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/document-generation-api/"},"review the documentation")," for many other examples and reach out on our ",(0,o.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-2-0-document-generation-api-quickstarts-nodejs-index-md-57d0e2dcf795c50724ef.js.map