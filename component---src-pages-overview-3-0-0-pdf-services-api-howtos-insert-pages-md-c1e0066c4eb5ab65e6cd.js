"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5670],{47309:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return u}});var a=t(87462),s=t(45987),i=(t(15007),t(64983)),r=t(91515);const o=["components"],c={},l=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var d;const p={_frontmatter:c},g=r.Z;function u(e){let{components:n}=e,t=(0,s.Z)(e,o);return(0,i.mdx)(g,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"insert-pages"},"Insert Pages"),(0,i.mdx)("p",null,"Insert one or more pages into an existing document"),(0,i.mdx)("h2",{id:"rest-api"},"Rest API"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF"},"Insert Pages")),(0,i.mdx)("h2",{id:"insert-pages-in-pdf"},"Insert Pages in PDF"),(0,i.mdx)("p",null,"The insert operation inserts additional pages from different PDFs into\nan existing PDF."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.insertpages.InsertPDFPages\n \n    public class InsertPDFPages {\n  \n     // Initialize the logger.\n     private static final Logger LOGGER = LoggerFactory.getLogger(InsertPDFPages.class);\n  \n     public static void main(String[] args) {\n         try {\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                     .fromFile("pdfservices-api-credentials.json")\n                     .build();\n  \n             // Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n             InsertPagesOperation insertPagesOperation = InsertPagesOperation.createNew();\n  \n             // Set operation base input from a source file.\n             FileRef baseSourceFile = FileRef.createFromLocalFile("src/main/resources/baseInput.pdf");\n             insertPagesOperation.setBaseInput(baseSourceFile);\n  \n             // Create a FileRef instance using a local file.\n             FileRef firstFileToInsert = FileRef.createFromLocalFile("src/main/resources/firstFileToInsertInput.pdf");\n             PageRanges pageRanges = getPageRangeForFirstFile();\n  \n             // Adds the pages (specified by the page ranges) of the input PDF file to be inserted at\n             // the specified page of the base PDF file.\n             insertPagesOperation.addPagesToInsertAt(firstFileToInsert, pageRanges, 2);\n  \n             // Create a FileRef instance using a local file.\n             FileRef secondFileToInsert = FileRef.createFromLocalFile("src/main/resources/secondFileToInsertInput.pdf");\n  \n             // Adds all the pages of the input PDF file to be inserted at the specified page of the\n             // base PDF file.\n             insertPagesOperation.addPagesToInsertAt(secondFileToInsert, 3);\n  \n             // Execute the operation.\n             FileRef result = insertPagesOperation.execute(executionContext);\n  \n             // Save the result to the specified location.\n             result.saveAs("output/insertPagesOutput.pdf");\n  \n         } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n             LOGGER.error("Exception encountered while executing operation", e);\n         }\n     }\n  \n     private static PageRanges getPageRangeForFirstFile() {\n         // Specify which pages of the first file are to be inserted in the base file.\n         PageRanges pageRanges = new PageRanges();\n         // Add pages 1 to 3.\n         pageRanges.addRange(1, 3);\n  \n         // Add page 4.\n         pageRanges.addSinglePage(4);\n  \n         return pageRanges;\n     }\n   }\n')),(0,i.mdx)("h4",{id:"net"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd InsertPDFPages/\n// dotnet run InsertPDFPages.csproj\n\n  namespace InsertPDFPages\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            // Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Create a new operation instance\n                InsertPagesOperation insertPagesOperation = InsertPagesOperation.CreateNew();\n \n                // Set operation base input from a source file.\n                FileRef baseSourceFile = FileRef.CreateFromLocalFile(@"baseInput.pdf");\n                insertPagesOperation.SetBaseInput(baseSourceFile);\n \n                // Create a FileRef instance using a local file.\n                FileRef firstFileToInsert = FileRef.CreateFromLocalFile(@"firstFileToInsertInput.pdf");\n                PageRanges pageRanges = GetPageRangeForFirstFile();\n \n                // Adds the pages (specified by the page ranges) of the input PDF file to be inserted at\n                // the specified page of the base PDF file.\n                insertPagesOperation.AddPagesToInsertAt(firstFileToInsert, pageRanges, 2);\n \n                // Create a FileRef instance using a local file.\n                FileRef secondFileToInsert = FileRef.CreateFromLocalFile(@"secondFileToInsertInput.pdf");\n \n                // Adds all the pages of the input PDF file to be inserted at the specified page of the\n                // base PDF file.\n                insertPagesOperation.AddPagesToInsertAt(secondFileToInsert, 3);\n \n                // Execute the operation.\n                FileRef result = insertPagesOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + "/output/insertPagesOutput.pdf");\n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            // Catch more errors here . . .\n        }\n \n        private static PageRanges GetPageRangeForFirstFile()\n        {\n            // Specify which pages of the first file are to be inserted in the base file.\n            PageRanges pageRanges = new PageRanges();\n            // Add pages 1 to 3.\n            pageRanges.AddRange(1, 3);\n \n            // Add page 4.\n            pageRanges.AddSinglePage(4);\n \n            return pageRanges;\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"node-js"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/insertpages/insert-pdf-pages.js\n\n    const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n   \n    const getPageRangesForFirstFile = () => {\n      // Specify which pages of the first file are to be inserted in the base file.\n      const pageRangesForFirstFile = new PDFServicesSdk.PageRanges();\n      // Add pages 1 to 3.\n      pageRangesForFirstFile.addPageRange(1, 3);\n   \n      // Add page 4.\n      pageRangesForFirstFile.addSinglePage(4);\n   \n      return pageRangesForFirstFile;\n    };\n   \n    try {\n      // Initial setup, create credentials instance.\n      const credentials = PDFServicesSdk.Credentials\n          .serviceAccountCredentialsBuilder()\n          .fromFile(\"pdfservices-api-credentials.json\")\n          .build();\n   \n      // Create an ExecutionContext using credentials and create a new operation instance.\n      const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n          insertPagesOperation = PDFServicesSdk.InsertPages.Operation.createNew();\n   \n      // Set operation base input from a source file.\n      const baseInputFile = PDFServicesSdk.FileRef.createFromLocalFile('resources/baseInput.pdf');\n      insertPagesOperation.setBaseInput(baseInputFile);\n   \n      // Create a FileRef instance using a local file.\n      const firstFileToInsert = PDFServicesSdk.FileRef.createFromLocalFile('resources/firstFileToInsertInput.pdf'),\n          pageRanges = getPageRangesForFirstFile();\n   \n      // Adds the pages (specified by the page ranges) of the input PDF file to be inserted at\n      // the specified page of the base PDF file.\n      insertPagesOperation.addPagesToInsertAt(2, firstFileToInsert, pageRanges);\n   \n      // Create a FileRef instance using a local file.\n      const secondFileToInsert = PDFServicesSdk.FileRef.createFromLocalFile('resources/secondFileToInsertInput.pdf');\n   \n      // Adds all the pages of the input PDF file to be inserted at the specified page of the\n      // base PDF file.\n      insertPagesOperation.addPagesToInsertAt(3, secondFileToInsert);\n   \n      // Execute the operation and Save the result to the specified location.\n      insertPagesOperation.execute(executionContext)\n          .then(result => result.saveAsFile('output/insertPagesOutput.pdf'))\n          .catch(err => {\n              if (err instanceof PDFServicesSdk.Error.ServiceApiError\n                  || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                  console.log('Exception encountered while executing operation', err);\n              } else {\n                  console.log('Exception encountered while executing operation', err);\n              }\n          });\n    } catch (err) {\n      console.log('Exception encountered while executing operation', err);\n    }\n")),(0,i.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/combinepdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assets": [\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 1,\n                    "end": 1\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 4\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 1\n                }\n            ]\n        },\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 2\n                }\n            ]\n        }\n    ]\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-services-api-howtos-insert-pages-md-c1e0066c4eb5ab65e6cd.js.map