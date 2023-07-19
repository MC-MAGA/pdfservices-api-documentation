"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[11],{8676:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return P}});var o=t(87462),r=t(45987),i=(t(15007),t(64983)),s=t(91515);const a=["components"],c={},p=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var d;const l={_frontmatter:c},u=s.Z;function P(e){let{components:n}=e,t=(0,r.Z)(e,a);return(0,i.mdx)(u,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"protect-pdf"},"Protect PDF"),(0,i.mdx)("p",null,"Secure a PDF file with a password encrypt the document. Set an owner password and restrictions on certain features like printing, editing and copying in the PDF document to prevent end users from modifying it."),(0,i.mdx)("p",null,"Support for AES-128 and AES-256 encryption on PDF files, with granular permissions for high and low quality printing and fill and sign form field restrictions."),(0,i.mdx)("h2",{id:"rest-api"},"Rest API"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF"},"Protect PDF")),(0,i.mdx)("h2",{id:"protect-pdfs-with-user-password"},"Protect PDFs with user password"),(0,i.mdx)("p",null,"You can password protect PDFs so that only users with a document open\npassword can open the file."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(p,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.protectpdf.ProtectPDF\n \n      public class ProtectPDF {\n        // Initialize the logger.\n        private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDF.class);\n     \n        public static void main(String[] args) {\n     \n            try {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                        .fromFile("pdfservices-api-credentials.json")\n                        .build();\n     \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.create(credentials);\n     \n                // Build ProtectPDF options by setting a User Password and Encryption\n                // Algorithm (used for encrypting the PDF file).\n                ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.passwordProtectOptionsBuilder()\n                        .setUserPassword("encryptPassword")\n                        .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)\n                        .build();\n     \n                // Create a new operation instance.\n                ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.createNew(protectPDFOptions);\n     \n                // Set operation input from a source file.\n                FileRef source = FileRef.createFromLocalFile("src/main/resources/protectPDFInput.pdf");\n                protectPDFOperation.setInput(source);\n     \n                // Execute the operation\n                FileRef result = protectPDFOperation.execute(executionContext);\n     \n                // Save the result at the specified location\n                result.saveAs("output/protectPDFOutput.pdf");\n     \n            } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n                LOGGER.error("Exception encountered while executing operation", ex);\n            }\n        }\n      }\n')),(0,i.mdx)("h4",{id:"net"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ProtectPDF/\n// dotnet run ProtectPDF.csproj\n\n  namespace ProtectPDF\n  {\n    class Program\n    {\n        private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n        static void Main()\n        {\n            //Configure the logging\n            ConfigureLogging();\n            try\n            {\n                // Initial setup, create credentials instance.\n                Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                .Build();\n \n                // Create an ExecutionContext using credentials.\n                ExecutionContext executionContext = ExecutionContext.Create(credentials);\n \n                // Build ProtectPDF options by setting a User Password and Encryption\n                // Algorithm (used for encrypting the PDF file).\n                ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.PasswordProtectOptionsBuilder()\n                        .SetUserPassword("encryptPassword")\n                        .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)\n                        .Build();\n \n                // Create a new operation instance\n                ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.CreateNew(protectPDFOptions);\n \n                // Set operation input from a source file.\n                FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"protectPDFInput.pdf");\n                protectPDFOperation.SetInput(sourceFileRef);\n \n                // Execute the operation.\n                FileRef result = protectPDFOperation.Execute(executionContext);\n \n                // Save the result to the specified location.\n                result.SaveAs(Directory.GetCurrentDirectory() + "/output/protectPDFOutput.pdf");\n            }\n            catch (ServiceUsageException ex)\n            {\n                log.Error("Exception encountered while executing operation", ex);\n            }\n            // Catch more errors here . . .\n        }\n \n        static void ConfigureLogging()\n        {\n            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n        }\n    }\n  }\n')),(0,i.mdx)("h4",{id:"node-js"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/protectpdf/protect-pdf.js\n\n    const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n   \n    try {\n      // Initial setup, create credentials instance.\n      const credentials =  PDFServicesSdk.Credentials\n          .serviceAccountCredentialsBuilder()\n          .fromFile(\"pdfservices-api-credentials.json\")\n          .build();\n   \n      // Create an ExecutionContext using credentials\n      const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n   \n      // Build ProtectPDF options by setting a User Password and Encryption\n      // Algorithm (used for encrypting the PDF file).\n      const protectPDF = PDFServicesSdk.ProtectPDF,\n          options = new protectPDF.options.PasswordProtectOptions.Builder()\n              .setUserPassword(\"encryptPassword\")\n              .setEncryptionAlgorithm(PDFServicesSdk.ProtectPDF.options.EncryptionAlgorithm.AES_256)\n              .build();\n   \n      // Create a new operation instance.\n      const protectPDFOperation = protectPDF.Operation.createNew(options);\n   \n      // Set operation input from a source file.\n      const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/protectPDFInput.pdf');\n      protectPDFOperation.setInput(input);\n   \n      // Execute the operation and Save the result to the specified location.\n      protectPDFOperation.execute(executionContext)\n          .then(result => result.saveAsFile('output/protectPDFOutput.pdf'))\n          .catch(err => {\n              if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                  || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                  console.log('Exception encountered while executing operation', err);\n              } else {\n                  console.log('Exception encountered while executing operation', err);\n              }\n          });\n    } catch (err) {\n      console.log('Exception encountered while executing operation', err);\n    }\n")),(0,i.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/protectpdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "passwordProtection": {\n        "userPassword": "user_password"\n    },\n    "encryptionAlgorithm": "AES_128",\n    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-protectPDF\n')),(0,i.mdx)("h2",{id:"protect-pdfs-with-owner-password"},"Protect PDFs with owner password"),(0,i.mdx)("p",null,"You can secure a PDF file with owner/permissions password and set the\nrestriction on certain features like printing, editing and copying in\nthe PDF document. Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"ContentEncryption")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Permission")," in the\nAPI docs for a list of supported types of content to encrypt and types\nof document permissions."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(p,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java-1"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.protectpdf.ProtectPDFWithOwnerPassword\n \n public class ProtectPDFWithOwnerPassword {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDFWithOwnerPassword.class);\n\n   public static void main(String[] args) {\n\n       try {\n           // Initial setup, create credentials instance.\n           Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                   .fromFile("pdfservices-api-credentials.json")\n                   .build();\n\n           // Create an ExecutionContext using credentials.\n           ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n           // Create new permissions instance and add the required permissions\n           Permissions permissions = Permissions.createNew();\n           permissions.addPermission(Permission.PRINT_LOW_QUALITY);\n           permissions.addPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);\n           permissions.addPermission(Permission.COPY_CONTENT);\n\n           // Build ProtectPDF options by setting an Owner/Permissions Password, Permissions,\n           // Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.\n           ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.passwordProtectOptionsBuilder()\n                   .setOwnerPassword("password")\n                   .setPermissions(permissions)\n                   .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)\n                   .setContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)\n                   .build();\n\n           // Create a new operation instance.\n           ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.createNew(protectPDFOptions);\n\n           // Set operation input from a source file.\n           FileRef source = FileRef.createFromLocalFile("src/main/resources/protectPDFInput.pdf");\n           protectPDFOperation.setInput(source);\n\n           // Execute the operation\n           FileRef result = protectPDFOperation.execute(executionContext);\n\n           // Save the result at the specified location\n           result.saveAs("output/protectPDFWithOwnerPasswordOutput.pdf");\n\n       } catch (ServiceApiException | IOException | SdkException | ServiceUsageException ex) {\n           LOGGER.error("Exception encountered while executing operation", ex);\n       }\n   }\n }\n     \n')),(0,i.mdx)("h4",{id:"net-1"},".NET"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ProtectPDFWithOwnerPassword/\n// dotnet run ProtectPDFWithOwnerPassword.csproj\n\n namespace ProtectPDFWithOwnerPassword\n {\n   class Program\n   {\n       private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n       static void Main()\n       {\n           //Configure the logging\n           ConfigureLogging();\n           try\n           {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                               .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                               .Build();\n\n               // Create an ExecutionContext using credentials.\n               ExecutionContext executionContext = ExecutionContext.Create(credentials);\n\n               // Create new permissions instance and add the required permissions\n               Permissions permissions = Permissions.CreateNew();\n               permissions.AddPermission(Permission.PRINT_LOW_QUALITY);\n               permissions.AddPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);\n               permissions.AddPermission(Permission.COPY_CONTENT);\n\n               // Build ProtectPDF options by setting an Owner/Permissions Password, Permissions,\n               // Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.\n               ProtectPDFOptions protectPDFOptions = ProtectPDFOptions.PasswordProtectOptionsBuilder()\n                   .SetOwnerPassword("password")\n                   .SetPermissions(permissions)\n                   .SetEncryptionAlgorithm(EncryptionAlgorithm.AES_256)\n                   .SetContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)\n                   .Build();\n\n               // Create a new operation instance\n               ProtectPDFOperation protectPDFOperation = ProtectPDFOperation.CreateNew(protectPDFOptions);\n\n               // Set operation input from a source file.\n               FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"protectPDFInput.pdf");\n               protectPDFOperation.SetInput(sourceFileRef);\n\n               // Execute the operation.\n               FileRef result = protectPDFOperation.Execute(executionContext);\n\n               // Save the result to the specified location.\n               result.SaveAs(Directory.GetCurrentDirectory() + "/output/protectPDFWithOwnerPasswordOutput.pdf");\n           }\n           catch (ServiceUsageException ex)\n           {\n               log.Error("Exception encountered while executing operation", ex);\n           }\n           // Catch more errors here . . .\n       }\n\n       static void ConfigureLogging()\n       {\n           ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n           XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n       }\n   }\n }\n   \n')),(0,i.mdx)("h4",{id:"node-js-1"},"Node JS"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/protectpdf/protect-pdf-with-owner-password.js\n\n  const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n \n  try {\n    // Initial setup, create credentials instance.\n    const credentials =  PDFServicesSdk.Credentials\n        .serviceAccountCredentialsBuilder()\n        .fromFile(\"pdfservices-api-credentials.json\")\n        .build();\n \n    // Create an ExecutionContext using credentials\n    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);\n \n    // Create new permissions instance and add the required permissions\n    const protectPDF = PDFServicesSdk.ProtectPDF,\n        protectPDFOptions = protectPDF.options,\n        permissions = protectPDFOptions.Permissions.createNew();\n    permissions.addPermission(protectPDFOptions.Permission.PRINT_LOW_QUALITY);\n    permissions.addPermission(protectPDFOptions.Permission.EDIT_DOCUMENT_ASSEMBLY);\n    permissions.addPermission(protectPDFOptions.Permission.COPY_CONTENT);\n \n    // Build ProtectPDF options by setting an Owner/Permissions Password, Permissions,\n    // Encryption Algorithm (used for encrypting the PDF file) and specifying the type of content to encrypt.\n    const options = new protectPDFOptions.PasswordProtectOptions.Builder()\n            .setOwnerPassword(\"password\")\n            .setPermissions(permissions)\n            .setEncryptionAlgorithm(protectPDFOptions.EncryptionAlgorithm.AES_256)\n            .setContentEncryption(protectPDFOptions.ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)\n            .build();\n \n    // Create a new operation instance.\n    const protectPDFOperation = protectPDF.Operation.createNew(options);\n \n    // Set operation input from a source file.\n    const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/protectPDFInput.pdf');\n    protectPDFOperation.setInput(input);\n \n    // Execute the operation and Save the result to the specified location.\n    protectPDFOperation.execute(executionContext)\n        .then(result => result.saveAsFile('output/protectPDFWithOwnerPasswordOutput.pdf'))\n        .catch(err => {\n            if(err instanceof PDFServicesSdk.Error.ServiceApiError\n                || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n                console.log('Exception encountered while executing operation', err);\n            } else {\n                console.log('Exception encountered while executing operation', err);\n            }\n        });\n  } catch (err) {\n    console.log('Exception encountered while executing operation', err);\n  }\n")),(0,i.mdx)("h4",{id:"rest-api-2"},"Rest API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/protectpdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n  "passwordProtection": {\n    "ownerPassword": "owner_password"\n  },\n  "encryptionAlgorithm": "AES_256",\n  "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-protectPDF\n')))}P.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-services-api-howtos-protect-pdf-md-a72114f3253363383a6d.js.map