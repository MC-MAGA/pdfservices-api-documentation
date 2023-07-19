"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6454],{11915:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var i=a(87462),n=a(45987),s=(a(15007),a(64983)),o=a(91515);const p=["components"],d={},c=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var r;const l={_frontmatter:d},m=o.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,p);return(0,s.mdx)(m,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"quickstart-for-pdf-accessibility-auto-tag-api-nodejs"},"Quickstart for PDF Accessibility Auto-Tag API (Node.js)"),(0,s.mdx)("p",null,"To get started using Adobe PDF Accessibility Auto-Tag API, let's walk through a simple scenario - taking an input PDF document and running PDF Accessibility Auto-Tag API against it. Once the PDF has been tagged, we'll provide the document with tags and optionally, a report file. In this guide, we will walk you through the complete process for creating a program that will accomplish this task."),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"To complete this guide, you will need:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")," - Node.js version 10.13.0 or higher is required. "),(0,s.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,s.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,s.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,s.mdx)("p",null,"1) To begin, open your browser to ",(0,s.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"},"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,s.mdx)("p",null,'3) Change the "Choose language" setting to "Node.js". '),(0,s.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,s.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/5530d/shot2_ga.webp 320w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/0c8fb/shot2_ga.webp 640w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/94b1e/shot2_ga.webp 1280w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/7bcab/shot2_ga.webp 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/dd4a7/shot2_ga.png 320w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/0f09e/shot2_ga.png 640w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/bbbf7/shot2_ga.png 1280w","/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/df264/shot2_ga.png 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/ac51aff99c75da9064ca177de7b988fe/bbbf7/shot2_ga.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.62500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/5530d/shot3_ga.webp 320w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/0c8fb/shot3_ga.webp 640w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/94b1e/shot3_ga.webp 1280w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/50ff9/shot3_ga.webp 1604w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/dd4a7/shot3_ga.png 320w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/0f09e/shot3_ga.png 640w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/bbbf7/shot3_ga.png 1280w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/fe147/shot3_ga.png 1604w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/bbbf7/shot3_ga.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,s.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-Node.jsSamples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"382px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/3ca76/shot5.webp 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png 382w"],sizes:"(max-width: 382px) 100vw, 382px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/91f031b1140406838be3613b9dd5a4b1/29984/shot5.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"2) We need two things from this download. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/e4092/shot6.webp 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/4f6d63b65e10d5ced5d061201d41b5a4/41b39/shot6.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Note that that private key is ",(0,s.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,s.mdx)("p",null,"3) Take these two files and place them in a new directory. Remember that these credential files are important and should be stored safely."),(0,s.mdx)("p",null,"4) At the command line, change to the directory you created, and initialize a new Node.js project with ",(0,s.mdx)("inlineCode",{parentName:"p"},"npm init -y")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/5530d/shot7.webp 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0c8fb/shot7.webp 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/84c6d/shot7.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/dd4a7/shot7.png 320w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/0f09e/shot7.png 640w","/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/b74ea3688c47c1502a9a31b757fab1aa/a27c6/shot7.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"5) Install the Adobe PDF Services Node.js SDK by typing ",(0,s.mdx)("inlineCode",{parentName:"p"},"npm install --save @adobe/pdfservices-node-sdk")," at the command line."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"700px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/5530d/shot8.webp 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0c8fb/shot8.webp 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/84c6d/shot8.webp 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/dd4a7/shot8.png 320w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/0f09e/shot8.png 640w","/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png 700w"],sizes:"(max-width: 700px) 100vw, 700px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f5ac6e649e7705ac54c0d9eeb0ffa676/a27c6/shot8.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"6) Install a package to help us work with ZIP files. Type ",(0,s.mdx)("inlineCode",{parentName:"p"},"npm install --save adm-zip"),"."),(0,s.mdx)("p",null,"At this point, we've installed the Node.js SDK for Adobe PDF Services API as a dependency for our project and have copied over our credentials files. "),(0,s.mdx)("p",null,"Our application will take a PDF, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Accesibility Auto-Tag API Sample.pdf")," (downloadable from ",(0,s.mdx)("a",{href:"../../../../overview/pdf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),")) and tag its contents. The results will be saved in a given directory ",(0,s.mdx)("inlineCode",{parentName:"p"},"/output/AutotagPDF"),"."),(0,s.mdx)("p",null,"7) In your editor, open the directory where you previously copied the credentials. Create a new file, ",(0,s.mdx)("inlineCode",{parentName:"p"},"autotag-pdf.js"),"."),(0,s.mdx)("p",null,"Now you're ready to begin coding."),(0,s.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,s.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n")),(0,s.mdx)("p",null,"The first line includes the Adobe PDF Services Node.js SDK. The second third include Node's ",(0,s.mdx)("inlineCode",{parentName:"p"},"filesystem")," package as well as the package that will work with the ZIP file returned from the API. "),(0,s.mdx)("p",null,"2) Now let's define our input and output:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const INPUT_PDF = './Adobe Accessibility Auto-Tag API Sample.pdf';\nconst OUTPUT_PATH = './output/AutotagPDF/';\n\n//Remove if the output already exists.\nif(fs.existsSync(OUTPUT_PATH)) fs.unlinkSync(OUTPUT_PATH);\n\nconst TAGGED_PDF = OUTPUT_PATH + INPUT_PDF + \"-tagged-pdf.pdf\";\nconst TAGGING_REPORT = OUTPUT_PATH + INPUT_PDF + \"-tagging-report.xlsx\";\n")),(0,s.mdx)("p",null,"This defines what our output directory will be and optionally deletes it if it already exists. Then we define what PDF will be tagged. (You can download the source we used ",(0,s.mdx)("a",{href:"../../../../overview/pdf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),".) In a real application, these values would be typically be dynamic."),(0,s.mdx)("p",null,"3) Next, we setup the SDK to use our credentials."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n")),(0,s.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,s.mdx)("p",null,"4) Now, let's create the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"// Create a new operation instance.\nconst autotagPDFOperation = PDFServicesSdk.AutotagPDF.Operation.createNew(),\n    input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT_PDF);\n\n// Build autotagPDF options\nconst autotagPDFOptions = new PDFServicesSdk.AutotagPDF.options.AutotagPDFOptions.Builder()\n    .shiftHeadings()\n    .generateReport()\n    .build();\nautotagPDFOperation.setInput(input);\nautotagPDFOperation.setOptions(options);\n")),(0,s.mdx)("p",null,"This set of code defines what we're doing (an Auto-Tag operation), points to our local file and specifies the input is a PDF, and then defines options for the Auto-Tag call. PDF Accessibility Auto-Tag API has a few different options, but in this example, we're simply asking for a basic tagging operation, which returns the tagged PDF document and an XLSX report of the document."),(0,s.mdx)("p",null,"5) The next code block executes the operation:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"// Execute the operation\nautotagPDFOperation.execute(executionContext)\n    .then(result => {\n        result.taggedPDF.saveAsFile(TAGGED_PDF);\n        result.report.saveAsFile(TAGGING_REPORT);\n    })\n    .then(() => {\n        console.log('Successfully tagged information in PDF.');\n    })\n    .catch(err => console.log(err));\n")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"5.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/5530d/shot9_ga.webp 320w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/0c8fb/shot9_ga.webp 640w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/94b1e/shot9_ga.webp 1280w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/0b34d/shot9_ga.webp 1920w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/d5269/shot9_ga.webp 2560w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/2ca4e/shot9_ga.webp 3656w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/dd4a7/shot9_ga.png 320w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/0f09e/shot9_ga.png 640w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/bbbf7/shot9_ga.png 1280w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/ac7a9/shot9_ga.png 1920w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/c7a69/shot9_ga.png 2560w","/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/ac2f3/shot9_ga.png 3656w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/07a08650ec6d4a9098777e8671d03ea4/bbbf7/shot9_ga.png",alt:"Example running at the command line",title:"Example running at the command line",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Here's the complete application (",(0,s.mdx)("inlineCode",{parentName:"p"},"autotag-pdf.js"),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\nconst INPUT_PDF = './Adobe Accessibility Auto-Tag API Sample.pdf';\nconst OUTPUT_PATH = './output/AutotagPDF/';\n\n//Remove if the output already exists.\nif(fs.existsSync(OUTPUT_PATH)) fs.unlinkSync(OUTPUT_PATH);\n\nconst TAGGED_PDF = OUTPUT_PATH + INPUT_PDF + \"-tagged-pdf.pdf\";\nconst TAGGING_REPORT = OUTPUT_PATH + INPUT_PDF + \"-tagging-report.xlsx\";\n\nconst credentials = PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile('pdfservices-api-credentials.json')\n        .build();\n\n// Create an ExecutionContext using credentials\nconst executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n\n// Create a new operation instance.\nconst autotagPDFOperation = PDFServicesSdk.AutotagPDF.Operation.createNew(),\n    input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT_PDF);\n\n// Build autotagPDF options\nconst autotagPDFOptions = new PDFServicesSdk.AutotagPDF.options.AutotagPDFOptions.Builder()\n    .shiftHeadings()\n    .generateReport()\n    .build();\nautotagPDFOperation.setInput(input);\nautotagPDFOperation.setOptions(options);\n\n// Execute the operation\nautotagPDFOperation.execute(executionContext)\n    .then(result => {\n        result.taggedPDF.saveAsFile(TAGGED_PDF);\n        result.report.saveAsFile(TAGGING_REPORT);\n    })\n    .then(() => {\n        console.log('Successfully tagged information in PDF.');\n    })\n    .catch(err => console.log(err));\n")),(0,s.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,s.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,s.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-services-apis/ct-p/ct-Document-Cloud-SDK"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-accessibility-auto-tag-api-quickstarts-nodejs-index-md-3083ec53d0d8360647e1.js.map