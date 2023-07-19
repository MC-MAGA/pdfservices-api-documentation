"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5618],{4884:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var i=a(87462),n=a(45987),o=(a(15007),a(64983)),p=a(91515);const s=["components"],d={},r=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const l={_frontmatter:d},m=p.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,o.mdx)(m,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started-with-pdf-accessibility-auto-tag-api-python"},"Getting Started with PDF Accessibility Auto-Tag API (Python)"),(0,o.mdx)("p",null,"To get started using Adobe PDF Accessibility Auto-Tag API, let's walk through a simple scenario - taking an input PDF document and running PDF Accessibility Auto-Tag API against it. Once the PDF has been tagged, we'll provide the document with tags and optionally, a report file. In this guide, we will walk you through the complete process for creating a program that will accomplish this task. "),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"To complete this guide, you will need:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python")," - Python 3.6 or higher is required."),(0,o.mdx)("li",{parentName:"ul"},"An Adobe ID. If you do not have one, the credential setup will walk you through creating one."),(0,o.mdx)("li",{parentName:"ul"},"A way to edit code. No specific editor is required for this guide.")),(0,o.mdx)("h2",{id:"step-one-getting-credentials"},"Step One: Getting credentials"),(0,o.mdx)("p",null,"1) To begin, open your browser to ",(0,o.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"},"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"),". If you are not already logged in to Adobe.com, you will need to sign in or create a new user. Using a personal email account is recommend and not a federated ID."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/5530d/shot1.webp 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0c8fb/shot1.webp 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/3ea8a/shot1.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/dd4a7/shot1.png 320w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/0f09e/shot1.png 640w","/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/3b0d32040b6b20e4343cb27657c7b00a/e9985/shot1.png",alt:"Sign in",title:"Sign in",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,'2) After registering or logging in, you will then be asked to name your new credentials. Use the name, "New Project". '),(0,o.mdx)("p",null,'3) Change the "Choose language" setting to "Python". '),(0,o.mdx)("p",null,'4) Also note the checkbox by, "Create personalized code sample." This will include a large set of samples along with your credentials. These can be helpful for learning more later. '),(0,o.mdx)("p",null,'5) Click the checkbox saying you agree to the developer terms and then click "Create credentials."'),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/5530d/shot2_ga.webp 320w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/0c8fb/shot2_ga.webp 640w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/94b1e/shot2_ga.webp 1280w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/7bcab/shot2_ga.webp 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/dd4a7/shot2_ga.png 320w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/0f09e/shot2_ga.png 640w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/bbbf7/shot2_ga.png 1280w","/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/df264/shot2_ga.png 1878w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/9412ac7a91f0d10d242805a6eb5835bc/bbbf7/shot2_ga.png",alt:"Project setup",title:"Project setup",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"6) After your credentials are created, they are automatically downloaded:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.62500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/5530d/shot3_ga.webp 320w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/0c8fb/shot3_ga.webp 640w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/94b1e/shot3_ga.webp 1280w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/50ff9/shot3_ga.webp 1604w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/dd4a7/shot3_ga.png 320w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/0f09e/shot3_ga.png 640w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/bbbf7/shot3_ga.png 1280w","/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/fe147/shot3_ga.png 1604w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/6b9cfb088e57bad42999c234302aba36/bbbf7/shot3_ga.png",alt:"Credentials",title:"Credentials",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"step-two-setting-up-the-project"},"Step Two: Setting up the project"),(0,o.mdx)("p",null,"1) In your Downloads folder, find the ZIP file with your credentials: PDFServicesSDK-Python (Extract, Auto-tag)Samples.zip. If you unzip that archive, you will find a README file, your private key, and a folder of samples:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"668px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/5530d/shot5.webp 320w","/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/0c8fb/shot5.webp 640w","/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/0a665/shot5.webp 668w"],sizes:"(max-width: 668px) 100vw, 668px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/dd4a7/shot5.png 320w","/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/0f09e/shot5.png 640w","/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/1d36f/shot5.png 668w"],sizes:"(max-width: 668px) 100vw, 668px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/0724c25981dca8957e064f8d1baaf1d9/1d36f/shot5.png",alt:"Samples",title:"Samples",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"2) We need two things from this download. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"private.key")," file (as shown in the screenshot above, and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pdfservices-api-credentials.json")," file found in the samples directory:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/5530d/shot6.webp 320w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/0c8fb/shot6.webp 640w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/94b1e/shot6.webp 1280w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/84f9f/shot6.webp 1552w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/dd4a7/shot6.png 320w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/0f09e/shot6.png 640w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/bbbf7/shot6.png 1280w","/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/cc6c5/shot6.png 1552w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/c8aff0559943d18ba705accf0dbef211/bbbf7/shot6.png",alt:"Private key",title:"Private key",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Note that that private key is ",(0,o.mdx)("em",{parentName:"p"},"also")," found in this directory so feel free to copy them both from here."),(0,o.mdx)("p",null,"3) Take these two files and place them in a new directory."),(0,o.mdx)("p",null,"4) At the command line, change to the directory you created, and run the following command to install the Python SDK: ",(0,o.mdx)("inlineCode",{parentName:"p"},"pip install pdfservices-sdk"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1249px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/5530d/shot7.webp 320w","/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/0c8fb/shot7.webp 640w","/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/db019/shot7.webp 1249w"],sizes:"(max-width: 1249px) 100vw, 1249px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/dd4a7/shot7.png 320w","/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/0f09e/shot7.png 640w","/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/8b667/shot7.png 1249w"],sizes:"(max-width: 1249px) 100vw, 1249px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/d0ccb6447fdc54711ffd5d381a35ddfe/8b667/shot7.png",alt:"alt",title:"alt",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"At this point, we've installed the Python SDK for Adobe PDF Services API as a dependency for our project and have copied over our credentials files."),(0,o.mdx)("p",null,"Our application will take a PDF, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe Accesibility Auto-Tag API Sample.pdf")," (downloadable from ",(0,o.mdx)("a",{href:"../../../../overview/pdf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),") and tag its contents. The results will be saved in a given directory ",(0,o.mdx)("inlineCode",{parentName:"p"},"/output/AutotagPDF"),". "),(0,o.mdx)("p",null,"6) In your editor, open the directory where you previously copied the credentials. Create a new file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"autotag.py"),"."),(0,o.mdx)("p",null,"Now you're ready to begin coding."),(0,o.mdx)("h2",{id:"step-three-creating-the-application"},"Step Three: Creating the application"),(0,o.mdx)("p",null,"1) We'll begin by including our required dependencies:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"from adobe.pdfservices.operation.auth.credentials import Credentials\nfrom adobe.pdfservices.operation.exception.exceptions import ServiceApiException, ServiceUsageException, SdkException\nfrom adobe.pdfservices.operation.execution_context import ExecutionContext\nfrom adobe.pdfservices.operation.io.file_ref import FileRef\nfrom adobe.pdfservices.operation.pdfops.autotag_pdf_operation import AutotagPDFOperation\nfrom adobe.pdfservices.operation.internal.api.dto.request.autotagpdf.autotag_pdf_output import AutotagPDFOutput\n\nimport os.path\nfrom pathlib import Path\n")),(0,o.mdx)("p",null,"The first set of imports bring in the Adobe PDF Accessibility Auto-Tag SDK while the second set will be used by our code later on."),(0,o.mdx)("p",null,"2) Now let's define our input and output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"input_pdf = \"./Adobe Accessibility Auto-Tag API Sample.pdf\"\n\noutput_path = \"./output/AutotagPDF/\"\n\nPath(output_path).mkdir(parents=True, exist_ok=True)\ntagged_pdf_path = f'{output_path}{input_pdf}-tagged.pdf'\nreport_path = f'{output_path}{input_pdf}-report.xlsx'\n")),(0,o.mdx)("p",null,"This defines what our output directory will be and optionally deletes it if it already exists. Then we define what PDF will be tagged. (You can download the source we used ",(0,o.mdx)("a",{href:"../../../../overview/pdf/Adobe_Accessibility_Auto_Tag_API_Sample.pdf",target:"_blank"},"here"),".) In a real application, these values would be typically be dynamic. "),(0,o.mdx)("p",null,"3) Next, we setup the SDK to use our credentials."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'# Initial setup, create credentials instance.\ncredentials = Credentials.service_account_credentials_builder()\\\n    .from_file("./pdfservices-api-credentials.json") \\\n    .build()\n\n# Create an ExecutionContext using credentials and create a new operation instance.\nexecution_context = ExecutionContext.create(credentials)\n')),(0,o.mdx)("p",null,"This code both points to the credentials downloaded previously as well as sets up an execution context object that will be used later."),(0,o.mdx)("p",null,"4) Now, let's create the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"autotag_pdf_operation = AutotagPDFOperation.create_new()\n\n# Set operation input from a source file.\nsource = FileRef.create_from_local_file(input_pdf)\nautotag_pdf_operation.set_input(source)\n\n# Build AutotagPDF options and set them into the operation\nautotag_pdf_options: AutotagPDFOptions = AutotagPDFOptions.builder() \\\n    .with_generate_report() \\\n    .build()\nautotag_pdf_operation.set_options(autotag_pdf_options)\n")),(0,o.mdx)("p",null,"This set of code defines what we're doing (an Auto-Tag operation), points to our local file and specifies the input is a PDF, and then defines options for the Auto-Tag call. PDF Accessibility Auto-Tag API has a few different options, but in this example, we're simply asking for a basic tagging operation, which returns the tagged PDF document and an XLSX report of the document. "),(0,o.mdx)("p",null,"5) The next code block executes the operation:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"# Execute the operation.\nautotag_pdf_output: AutotagPDFOutput = autotag_pdf_operation.execute(execution_context)\n\n# Save the result to the specified location.\nautotag_pdf_output.get_tagged_pdf().save_as(tagged_pdf_path)\nautotag_pdf_output.get_report().save_as(report_path)\n")),(0,o.mdx)("p",null,"This code runs the Auto-Tagging process and then stores the result files in the provided output directory. "),(0,o.mdx)("p",null,"Here's the complete application (",(0,o.mdx)("inlineCode",{parentName:"p"},"autotag.py"),"):"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'from adobe.pdfservices.operation.auth.credentials import Credentials\nfrom adobe.pdfservices.operation.exception.exceptions import ServiceApiException, ServiceUsageException, SdkException\nfrom adobe.pdfservices.operation.execution_context import ExecutionContext\nfrom adobe.pdfservices.operation.io.file_ref import FileRef\nfrom adobe.pdfservices.operation.pdfops.autotag_pdf_operation import AutotagPDFOperation\nfrom adobe.pdfservices.operation.internal.api.dto.request.autotagpdf.autotag_pdf_output import AutotagPDFOutput\n\nimport logging\nimport os.path\nfrom pathlib import Path\n\ninput_pdf = "./Adobe Accessibility Auto-Tag API Sample.pdf"\n\noutput_path = "./output/AutotagPDF/"\n\nPath(output_path).mkdir(parents=True, exist_ok=True)\ntagged_pdf_path = f\'{output_path}{input_pdf}-tagged.pdf\'\nreport_path = f\'{output_path}{input_pdf}-report.xlsx\'\n\ntry:\n\n    # Initial setup, create credentials instance.\n    credentials = Credentials.service_account_credentials_builder()\\\n        .from_file("./pdfservices-api-credentials.json") \\\n        .build()\n\n    # Create an ExecutionContext using credentials and create a new operation instance.\n    execution_context = ExecutionContext.create(credentials)\n    autotag_pdf_operation = AutotagPDFOperation.create_new()\n\n    # Set operation input from a source file.\n    source = FileRef.create_from_local_file(input_pdf)\n    autotag_pdf_operation.set_input(source)\n\n    # Build AutotagPDF options and set them into the operation\n    autotag_pdf_options: AutotagPDFOptions = AutotagPDFOptions.builder() \\\n    .with_generate_report() \\\n    .build()\n    autotag_pdf_operation.set_options(autotag_pdf_options)\n\n    # Execute the operation.\n    autotag_pdf_output: AutotagPDFOutput = autotag_pdf_operation.execute(execution_context)\n\n    # Save the result to the specified location.\n    autotag_pdf_output.get_tagged_pdf().save_as(tagged_pdf_path)\n    autotag_pdf_output.get_report().save_as(report_path)\n\n    print("Successfully tagged information in PDF.")\n    \nexcept (ServiceApiException, ServiceUsageException, SdkException) as e:\n    logging.exception(f"Exception encountered while executing operation : {e}")\n')),(0,o.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,o.mdx)("p",null,"Now that you've successfully performed your first operation, ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/overview/pdf-services-api/"},"review the documentation")," for many other examples and reach out on our ",(0,o.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/acrobat-services-api/ct-p/ct-Document-Cloud-SDK?page=1&sort=latest_replies&filter=all&lang=all&tabid=discussions&topics=label-accessibilityauto-tagapi"},"forums")," with any questions. Also remember the samples you downloaded while creating your credentials also have many demos."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-accessibility-auto-tag-api-quickstarts-python-index-md-5fe0fdb458d7c8bfbb34.js.map