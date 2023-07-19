"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8448],{42358:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n=a(87462),i=a(45987),o=(a(15007),a(64983)),s=a(91515);const p=["components"],r={},d=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const l={_frontmatter:r},m=s.Z;function u(e){let{components:t}=e,a=(0,i.Z)(e,p);return(0,o.mdx)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"quickstart-for-adobe-pdf-services-api-nodejs"},"Quickstart for Adobe PDF Services API (Node.js)"),(0,o.mdx)("p",null,"To get started using Adobe PDF Services API, let's walk through a simple scenario - taking an input PDF document and exporting it to Microsoft Word. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"To complete this guide, you will need:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," - Node.js version 14.0 or higher is required. "),(0,o.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,o.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,o.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,o.mdx)("p",null,"1) To begin, open your browser to ",(0,o.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"},"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,o.mdx)("p",null,'3) Change the "Choose language" setting to "Node.js". '),(0,o.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,o.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/5530d/shot2_ga.webp 320w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/0c8fb/shot2_ga.webp 640w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/94b1e/shot2_ga.webp 1280w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/09047/shot2_ga.webp 1876w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/dd4a7/shot2_ga.png 320w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/0f09e/shot2_ga.png 640w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/bbbf7/shot2_ga.png 1280w","/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/bd320/shot2_ga.png 1876w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/54e1f0f0e2e9d57699134c4f71599550/bbbf7/shot2_ga.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"913px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.87500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/5530d/shot3.webp 320w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/0c8fb/shot3.webp 640w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/4d027/shot3.webp 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/dd4a7/shot3.png 320w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/0f09e/shot3.png 640w","/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png 913w"],sizes:"(max-width: 913px) 100vw, 913px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3fbc51d5608aaf65ac3ec28ec8b0fefa/200fa/shot3.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,o.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-Node.jsSamples.zip. If you unzip that archive, you will find a README file and a folder of samples:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"382px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/3ca76/shot5.webp 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"2) We need two things from this download. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/e4092/shot6.webp 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Note that that private key is ",(0,o.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,o.mdx)("p",null,"3) Take these two files and place them in a new directory. Remember that these credential files are important and should be stored safely."),(0,o.mdx)("p",null,"4) At the command line, change to the directory you created, and initialize a new Node.js project with ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm init -y")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/5530d/shot7.webp 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0c8fb/shot7.webp 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/84c6d/shot7.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/dd4a7/shot7.png 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0f09e/shot7.png 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"5) Install the Adobe PDF Services Node.js SDK by typing ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install --save @adobe/pdfservices-node-sdk")," at the command line."),(0,o.mdx)("p",null,"6) Install a package to help us work with ZIP files. Type ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install --save adm-zip"),"."),(0,o.mdx)("p",null,"At this point, we've installed the Node.js SDK for Adobe PDF Services API as a dependency for our project and have copied over our credentials files. "),(0,o.mdx)("p",null,"Our application will take a PDF, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.pdf")," (downloadable from ",(0,o.mdx)("a",{href:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"},"here"),") and convert it to a Microsoft Word document, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bodea Brochure.docx"),"."),(0,o.mdx)("p",null,"7) In your editor, open the directory where you previously copied the credentials. Create a new file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"export.js"),"."),(0,o.mdx)("p",null,"Now you're ready to begin coding."),(0,o.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,o.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\n")),(0,o.mdx)("p",null,"The first line includes the Adobe PDF Services Node.js SDK. The second third include Node's ",(0,o.mdx)("inlineCode",{parentName:"p"},"filesystem")," package. "),(0,o.mdx)("p",null,"2) Now let's define our input and output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const OUTPUT = './Bodea Brochure.docx';\n\n// If our output already exists, remove it so we can run the application again.\nif(fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);\n\nconst INPUT = './Bodea Brochure.pdf';\n")),(0,o.mdx)("p",null,"These lines are hard coded but in a real application would typically be dynamic."),(0,o.mdx)("p",null,"3) Next, we setup the SDK to use our credentials."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n")),(0,o.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,o.mdx)("p",null,"4) Now, let's create the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)\nconst exportPdfOperation = PDFServicesSdk.ExportPDF.Operation.createNew(PDFServicesSdk.ExportPDF.SupportedTargetFormats.DOCX);\n\n// Set operation input from a source file\nconst inputPDF = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);\nexportPdfOperation.setInput(inputPDF);\n")),(0,o.mdx)("p",null,"This set of code defines what we're doing (an Export operation), points to our local file and specifies the input is a PDF, and then defines options for the Export call. In this example, the only option is the export format, DOCX."),(0,o.mdx)("p",null,"5) The next code block executes the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"try {\n\n    exportPdfOperation.execute(executionContext)\n    .then(result => result.saveAsFile(OUTPUT))\n    .then(() => {\n        console.log('Export Done')\n    })\n    .catch(err => {\n        console.log('Exception encountered while executing operation', err);\n    });\n\n} catch(err) {\n    console.error('Error:', err);\n}\n")),(0,o.mdx)("p",null,"This code runs the Export process and then stores the result Word document to the file system. "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1098px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/5530d/shot9.webp 320w","/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/0c8fb/shot9.webp 640w","/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/7ec41/shot9.webp 1098w"],sizes:"(max-width: 1098px) 100vw, 1098px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/dd4a7/shot9.png 320w","/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/0f09e/shot9.png 640w","/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/23e59/shot9.png 1098w"],sizes:"(max-width: 1098px) 100vw, 1098px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/1f2f78f78937d3ea1a39ef064e76e906/23e59/shot9.png",alt:"Example running at the command line",title:"Example running at the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"Here's the complete application (",(0,o.mdx)("inlineCode",{parentName:"p"},"export.js"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\nconst fs = require('fs');\n\nconst OUTPUT = './Bodea Brochure.docx';\n\n// If our output already exists, remove it so we can run the application again.\nif(fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);\n\nconst INPUT = './Bodea Brochure.pdf';\n\n\nconsole.log(`About to export ${INPUT} to ${OUTPUT}.`);\n\n// Set up our credentials object.\nconst credentials =  PDFServicesSdk.Credentials\n    .serviceAccountCredentialsBuilder()\n    .fromFile('pdfservices-api-credentials.json')\n    .build();\n\n// An exectuionContext object wraps our credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n// This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)\nconst exportPdfOperation = PDFServicesSdk.ExportPDF.Operation.createNew(PDFServicesSdk.ExportPDF.SupportedTargetFormats.DOCX);\n\n// Set operation input from a source file\nconst inputPDF = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);\nexportPdfOperation.setInput(inputPDF);\n\ntry {\n\n    exportPdfOperation.execute(executionContext)\n    .then(result => result.saveAsFile(OUTPUT))\n    .then(() => {\n        console.log('Export Done')\n    })\n    .catch(err => {\n        console.log('Exception encountered while executing operation', err);\n    });\n\n} catch(err) {\n    console.error('Error:', err);\n}\n")),(0,o.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,o.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,o.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-services-api-quickstarts-nodejs-index-md-0d2e7b17d31723a94391.js.map