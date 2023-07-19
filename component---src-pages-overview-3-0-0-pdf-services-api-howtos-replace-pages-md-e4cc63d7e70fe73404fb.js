"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3032],{56748:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return c},default:function(){return u}});var t=a(87462),r=a(45987),i=(a(15007),a(64983)),s=a(91515);const o=["components"],c={},p=(l="CodeBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var l;const g={_frontmatter:c},d=s.Z;function u(e){let{components:n}=e,a=(0,r.Z)(e,o);return(0,i.mdx)(d,(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"replace-pages"},"Replace Pages"),(0,i.mdx)("p",null,"Replace one or more pages with another page in an existing document"),(0,i.mdx)("h2",{id:"rest-api"},"Rest API"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF"},"Replace Pages")),(0,i.mdx)("h2",{id:"replace-pages-in-pdf"},"Replace Pages in PDF"),(0,i.mdx)("p",null,"The replace pages operation replaces pages in a PDF with pages from\nother PDF files."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(p,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.replacepages.ReplacePDFPages\n \n     public class ReplacePDFPages {\n    \n       // Initialize the logger.\n       private static final Logger LOGGER = LoggerFactory.getLogger(ReplacePDFPages.class);\n    \n       public static void main(String[] args) {\n    \n           try {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                       .fromFile("pdfservices-api-credentials.json")\n                       .build();\n    \n               // Create an ExecutionContext using credentials and create a new operation instance.\n               ExecutionContext executionContext = ExecutionContext.create(credentials);\n               ReplacePagesOperation replacePagesOperation = ReplacePagesOperation.createNew();\n    \n               // Set operation base input from a source file.\n               FileRef baseSourceFile = FileRef.createFromLocalFile("src/main/resources/baseInput.pdf");\n               replacePagesOperation.setBaseInput(baseSourceFile);\n    \n               // Create a FileRef instance using a local file.\n               FileRef firstInputFile = FileRef.createFromLocalFile("src/main/resources/replacePagesInput1.pdf");\n               PageRanges pageRanges = getPageRangeForFirstFile();\n    \n               // Adds the pages (specified by the page ranges) of the input PDF file for replacing the\n               // page of the base PDF file.\n               replacePagesOperation.addPagesForReplace(firstInputFile, pageRanges, 1);\n    \n    \n               // Create a FileRef instance using a local file.\n               FileRef secondInputFile = FileRef.createFromLocalFile("src/main/resources/replacePagesInput2.pdf");\n    \n               // Adds all the pages of the input PDF file for replacing the page of the base PDF file.\n               replacePagesOperation.addPagesForReplace(secondInputFile, 3);\n    \n               // Execute the operation\n               FileRef result = replacePagesOperation.execute(executionContext);\n    \n               // Save the result at the specified location\n               result.saveAs("output/replacePagesOutput.pdf");\n           } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n               LOGGER.error("Exception encountered while executing operation", e);\n           }\n       }\n    \n       private static PageRanges getPageRangeForFirstFile() {\n           // Specify pages of the first file for replacing the page of base PDF file.\n           PageRanges pageRanges = new PageRanges();\n           // Add pages 1 to 3.\n           pageRanges.addRange(1, 3);\n    \n           // Add page 4.\n           pageRanges.addSinglePage(4);\n    \n           return pageRanges;\n       }\n     }\n')),(0,i.mdx)("h4",{id:"net"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ReplacePDFPages/\n// dotnet run ReplacePDFPages.csproj\n\n   namespace ReplacePDFPages\n   {\n     class Program\n     {\n         private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n         static void Main()\n         {\n             //Configure the logging\n             ConfigureLogging();\n             try\n             {\n                 // Initial setup, create credentials instance.\n                 Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                 .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                 .Build();\n  \n                 // Create an ExecutionContext using credentials.\n                 ExecutionContext executionContext = ExecutionContext.Create(credentials);\n  \n                 // Create a new operation instance\n                 ReplacePagesOperation replacePagesOperation = ReplacePagesOperation.CreateNew();\n  \n                 // Set operation base input from a source file.\n                 FileRef baseSourceFile = FileRef.CreateFromLocalFile(@"baseInput.pdf");\n                 replacePagesOperation.SetBaseInput(baseSourceFile);\n  \n                 // Create a FileRef instance using a local file.\n                 FileRef firstInputFile = FileRef.CreateFromLocalFile(@"replacePagesInput1.pdf");\n                 PageRanges pageRanges = GetPageRangeForFirstFile();\n  \n                 // Adds the pages (specified by the page ranges) of the input PDF file for replacing the\n                 // page of the base PDF file.\n                 replacePagesOperation.AddPagesForReplace(firstInputFile, pageRanges, 1);\n  \n                 // Create a FileRef instance using a local file.\n                 FileRef secondInputFile = FileRef.CreateFromLocalFile(@"replacePagesInput2.pdf");\n  \n                 // Adds all the pages of the input PDF file for replacing the page of the base PDF file.\n                 replacePagesOperation.AddPagesForReplace(secondInputFile, 3);\n  \n                 // Execute the operation.\n                 FileRef result = replacePagesOperation.Execute(executionContext);\n  \n                 // Save the result to the specified location.\n                 result.SaveAs(Directory.GetCurrentDirectory() + "/output/replacePagesOutput.pdf");\n             }\n             catch (ServiceUsageException ex)\n             {\n                 log.Error("Exception encountered while executing operation", ex);\n             // Catch more errors here . . .\n         }\n  \n         private static PageRanges GetPageRangeForFirstFile()\n         {\n             // Specify pages of the first file for replacing the page of base PDF file.\n             PageRanges pageRanges = new PageRanges();\n             // Add pages 1 to 3.\n             pageRanges.AddRange(1, 3);\n  \n             // Add page 4.\n             pageRanges.AddSinglePage(4);\n  \n             return pageRanges;\n         }\n  \n         static void ConfigureLogging()\n         {\n             ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n             XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n         }\n     }\n   }\n')),(0,i.mdx)("h4",{id:"node-js"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/replacepages/replace-pdf-pages.js\n\n     const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n    \n     const getPageRangesForFirstFile = () => {\n       // Specify pages of the first file for replacing the page of base PDF file.\n       const pageRangesForFirstFile = new PDFServicesSdk.PageRanges();\n       // Add pages 1 to 3.\n       pageRangesForFirstFile.addPageRange(1, 3);\n    \n       // Add page 4.\n       pageRangesForFirstFile.addSinglePage(4);\n    \n       return pageRangesForFirstFile;\n     };\n    \n     try {\n       // Initial setup, create credentials instance.\n       const credentials = PDFServicesSdk.Credentials\n           .serviceAccountCredentialsBuilder()\n           .fromFile(\"pdfservices-api-credentials.json\")\n           .build();\n    \n       // Create an ExecutionContext using credentials and create a new operation instance.\n       const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n           replacePagesOperation = PDFServicesSdk.ReplacePages.Operation.createNew();\n    \n       // Set operation base input from a source file.\n       const baseInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/baseInput.pdf');\n       replacePagesOperation.setBaseInput(baseInputFile);\n    \n       // Create a FileRef instance using a local file.\n       const firstInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput1.pdf'),\n           pageRanges = getPageRangesForFirstFile();\n    \n       // Adds the pages (specified by the page ranges) of the input PDF file for replacing the\n       // page of the base PDF file.\n       replacePagesOperation.addPagesForReplace(1, firstInputFile, pageRanges);\n    \n       // Create a FileRef instance using a local file.\n       const secondInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/replacePagesInput2.pdf');\n    \n       // Adds all the pages of the input PDF file for replacing the page of the base PDF file.\n       replacePagesOperation.addPagesForReplace(3, secondInputFile);\n    \n       // Execute the operation and Save the result to the specified location.\n       replacePagesOperation.execute(executionContext)\n           .then(result => result.saveAsFile('output/replacePagesOutput.pdf'))\n           .catch(err => {\n               if (err instanceof PDFServicesSdk.Error.ServiceApiError\n                   || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                   console.log('Exception encountered while executing operation', err);\n               } else {\n                   console.log('Exception encountered while executing operation', err);\n               }\n           });\n     } catch (err) {\n       console.log('Exception encountered while executing operation', err);\n     }\n")),(0,i.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/combinepdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assets": [\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 1,\n                    "end": 1\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 2\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 3\n                }\n            ]\n        }\n    ]\n}\'\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-services-api-howtos-replace-pages-md-e4cc63d7e70fe73404fb.js.map