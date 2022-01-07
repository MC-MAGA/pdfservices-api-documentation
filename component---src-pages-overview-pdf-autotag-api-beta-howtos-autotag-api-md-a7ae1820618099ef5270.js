"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2942],{77454:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return m}});var a,i=n(87462),o=n(63366),r=(n(15007),n(64983)),s=n(99536),d=["components"],p={},l=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:p},g=s.Z;function m(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)(g,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"autotag-pdf"},"Autotag PDF"),(0,r.mdx)("h2",{id:"autotag-output-format"},"Autotag Output Format"),(0,r.mdx)("p",null,"The output of an SDK autotag operation contains the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The tagged pdf file of version 1.7 or 2.0 as per the option set and with headings shifted if the option of shift headings is set."),(0,r.mdx)("li",{parentName:"ul"},"An optional excel report containing the information of the tagging if the option of generatereport is set.")),(0,r.mdx)("h2",{id:"api-limitations"},"API limitations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"File size:")," Files up to a maximum of 100MB are supported."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Number of Pages:")," Non-scanned PDFs up to 200 pages and scanned PDFs up to 100 pages are supported, however limits may be lower for files with a large number of tables."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Rate limits:")," Keep request rate below 25 requests per minutes."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Page Size:")," The API supports standard page sizes not to exceed 17.5” or less than 6” in either dimension."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Hidden Objects:")," PDF files that contain content that is not visible on the page like javascript, OCG (optional content groups), etc are not supported. Files that contain such hidden information may fail to process. For such cases, ",(0,r.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/acrobat/using/removing-sensitive-content-pdfs.html"},"removing hidden content")," prior to processing files again may return a successful result."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Language:")," The API is currently optimized for English language content. Files containing content in other Latin languages should return good results, but may have issues with non-English punctuation."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"OCR and Scan quality:")," The quality of text extracted from scanned files is dependent on the clarity of content in the input file. Conditions like skewed pages, shadowing, obscured or overlapping fonts, and page resolution less than 200 DPI can all result in lower quality text output."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Form fields:")," Files containing XFA and other fillable form elements are not supported."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Unprotected files:")," The API supports files that are unprotected or where security restrictions allow copying of content. Files that are secured and do not allow copying of content will not be processed."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Annotations:")," Content in PDF files containing annotations such as highlights and sticky notes will be processed, but annotations that obscure text could impact output quality. Text within annotations will not be included in the output."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Producers:")," The Autotag API is designed to make to PDF accessible. Files created from applications that produce other types of content like illustrations, CAD drawings or other types of vector art may not return quality results."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"PDF Collections:")," PDFs that are made from a collection of files including PDF Portfolios are not currently supported.")),(0,r.mdx)("h2",{id:"error-codes"},"Error codes"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Scenario"),(0,r.mdx)("th",{parentName:"tr",align:null},"Error code"),(0,r.mdx)("th",{parentName:"tr",align:null},"Error message"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unsuitable file"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED"),(0,r.mdx)("td",{parentName:"tr",align:null},"File is not suitable for conversion. Note this can still be returned even if the file was prequalified on the client.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Bad Input"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_INPUT"),(0,r.mdx)("td",{parentName:"tr",align:null},"Input is corrupted or empty.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Bad PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"BAD_PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"Not a PDF, File is corrupted, malformed or an empty PDF.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Protected PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"PROTECTED_PDF"),(0,r.mdx)("td",{parentName:"tr",align:null},"PDF is encrypted or password protected.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Disqualified Experiment"),(0,r.mdx)("td",{parentName:"tr",align:null},"DISQUALIFIED_EXPERIMENT"),(0,r.mdx)("td",{parentName:"tr",align:null},"File belongs to an experiment.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Unknown error / failure"),(0,r.mdx)("td",{parentName:"tr",align:null},"ERROR"),(0,r.mdx)("td",{parentName:"tr",align:null},"Unexpected error.")))),(0,r.mdx)("h2",{id:"code-samples"},"Code samples"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-17-from-a-pdf"},"Generate tagged pdf of version 1.7 from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-17-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 1.7 and an excel report from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-17-and-shift-its-headings-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 1.7 and shift its headings and an excel report from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-17-from-a-pdf-and-shift-its-headings"},"Generate tagged pdf of version 1.7 from a PDF and shift its headings")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-20-from-a-pdf"},"Generate tagged pdf of version 2.0 from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-20-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 2.0 and an excel report from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-20-and-shifting-its-headings-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 2.0 and shifting its headings and an excel report from a PDF")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"autotag-api/#generate-tagged-pdf-of-version-20-from-a-pdf-and-shift-its-headings"},"Generate tagged pdf of version 2.0 from a PDF and shift its headings"))),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-17-from-a-pdf"},"Generate tagged pdf of version 1.7 from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 1.7 from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV17 \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV17 {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV17.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n            String filename = "src/main/resources/autotagPdfInput.pdf";\n            FileRef source = FileRef.createFromLocalFile(filename);\n            autotagPDFOperation.setInputFile(source);\n\n            //Extract the name of the input file to be used in saving output file with same name\n            String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .pdfVersion(PDFVersion.v17)\n                    .build();\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            String outputDirectory = "output/AutotagPDFWithV17/";\n            String taggedPDFPath = outputDirectory + inputFileName+ "-taggedPDF.pdf";\n\n            autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n          System.out.println(e);\n        }\n    }\n}\n      \n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-17-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 1.7 and an excel report from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 1.7 and an excel report from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV17AndReport\n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV17AndReport {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV17AndReport.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n            String filename = "src/main/resources/autotagPdfInput.pdf";\n            FileRef source = FileRef.createFromLocalFile(filename);\n            autotagPDFOperation.setInputFile(source);\n\n            //Extract the name of the input file to be used in saving output file with same name\n            String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n            // Build AutotagPDF options and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .pdfVersion(PDFVersion.v17)\n                    .generateReport()\n                    .build();\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            String outputDirectory = "output/AutotagPDFWithV17AndReport/";\n            String taggedPDFPath = outputDirectory + inputFileName+ "-taggedPDF.pdf";\n            String reportPath = outputDirectory  + inputFileName + "-report.xlsx";\n\n            autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n            autotagOutputFiles.saveReport(reportPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}      \n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-17-and-shift-its-headings-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 1.7 and shift its headings and an excel report from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 1.7 and shift its headings an excel report from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV17AndReportAndShiftHeadings \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV17AndReportAndShiftHeadings {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV17AndReportAndShiftHeadings.class);\n\n    public static void main(String[] args) {\n\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n            String filename = "src/main/resources/autotagPdfInput.pdf";\n            FileRef source = FileRef.createFromLocalFile(filename);\n            autotagPDFOperation.setInputFile(source);\n\n            //Extract the name of the input file to be used in saving output file with same name\n            String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n            // Build AutotagPDF options and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .pdfVersion(PDFVersion.v17)\n                    .shiftHeadings()\n                    .generateReport()\n                    .build();\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            String outputDirectory = "output/AutotagPDFWithV17AndReportAndShiftHeadings/";\n            String taggedPDFPath = outputDirectory +inputFileName+ "-taggedPDF.pdf";\n            String reportPath = outputDirectory  + inputFileName + "-report.xlsx";\n\n            autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n            autotagOutputFiles.saveReport(reportPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-17-from-a-pdf-and-shift-its-headings"},"Generate tagged pdf of version 1.7 from a PDF and shift its headings"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 1.7 from a PDF and shift its headings."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV17AndShiftHeadings \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-3"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV17AndShiftHeadings {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV17AndShiftHeadings.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                     .fromFile("pdfservices-api-credentials.json")\n                     .build();\n\n             //Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n             AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n             // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n             String filename = "src/main/resources/autotagPdfInput.pdf";\n             FileRef source = FileRef.createFromLocalFile(filename);\n             autotagPDFOperation.setInputFile(source);\n\n             //Extract the name of the input file to be used in saving output file with same name\n             String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n             AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                     .pdfVersion(PDFVersion.v17)\n                     .shiftHeadings()\n                     .build();\n             autotagPDFOperation.setOptions(autotagPDFOptions);\n\n             // Execute the operation\n             AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n             // Save the output files at the specified location\n             String outputDirectory = "output/AutotagPDFWithV17AndShiftHeadings/";\n             String taggedPDFPath = outputDirectory +inputFileName+ "-taggedPDF.pdf";\n\n             autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n             System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-20-from-a-pdf"},"Generate tagged pdf of version 2.0 from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 2.0 from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV20 \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-4"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV20 {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV20.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                     .fromFile("pdfservices-api-credentials.json")\n                     .build();\n\n             //Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n             AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n             // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n             String filename = "src/main/resources/autotagPdfInput.pdf";\n             FileRef source = FileRef.createFromLocalFile(filename);\n             autotagPDFOperation.setInputFile(source);\n\n             //Extract the name of the input file to be used in saving output file with same name\n             String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n             AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                     .pdfVersion(PDFVersion.v20)\n                     .build();\n             autotagPDFOperation.setOptions(autotagPDFOptions);\n\n             // Execute the operation\n             AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n             // Save the output files at the specified location\n             String outputDirectory = "output/AutotagPDFWithV20/";\n             String taggedPDFPath = outputDirectory + inputFileName+ "-taggedPDF.pdf";\n\n             autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-20-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 2.0 and an excel report from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 2.0 and an excel report from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV20AndReport \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-5"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV20AndReport {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV20AndReport.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                     .fromFile("pdfservices-api-credentials.json")\n                     .build();\n\n             //Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n             AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n             // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n             String filename = "src/main/resources/autotagPdfInput.pdf";\n             FileRef source = FileRef.createFromLocalFile(filename);\n             autotagPDFOperation.setInputFile(source);\n\n             //Extract the name of the input file to be used in saving output file with same name\n             String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n             AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .pdfVersion(PDFVersion.v20)\n                    .generateReport()\n                    .build();\n             autotagPDFOperation.setOptions(autotagPDFOptions);\n\n             // Execute the operation\n             AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n             // Save the output files at the specified location\n             String outputDirectory = "output/AutotagPDFWithV20AndReport/";\n             String taggedPDFPath = outputDirectory + inputFileName+ "-taggedPDF.pdf";\n             String reportPath = outputDirectory  + inputFileName + "-report.xlsx";\n\n             autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n             autotagOutputFiles.saveReport(reportPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-20-and-shifting-its-headings-and-an-excel-report-from-a-pdf"},"Generate tagged pdf of version 2.0 and shifting its headings and an excel report from a PDF"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 2.0 and shifting its headings an excel report from a PDF document."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV20AndReportAndShiftHeadings \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-6"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV20AndReportAndShiftHeadings {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV20AndReportAndShiftHeadings.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n             //Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n             AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n             // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n             String filename = "src/main/resources/autotagPdfInput.pdf";\n             FileRef source = FileRef.createFromLocalFile(filename);\n             autotagPDFOperation.setInputFile(source);\n\n             //Extract the name of the input file to be used in saving output file with same name\n             String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n             AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .pdfVersion(PDFVersion.v20)\n                    .generateReport()\n                    .shiftHeadings()\n                    .build();\n             autotagPDFOperation.setOptions(autotagPDFOptions);\n\n             // Execute the operation\n             AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n             // Save the output files at the specified location\n             String outputDirectory = "output/AutotagPDFWithV20AndReportAndShiftHeadings/";\n             String taggedPDFPath = outputDirectory +inputFileName+ "-taggedPDF.pdf";\n             String reportPath = outputDirectory +inputFileName+ "-report.xlsx";\n\n             autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n             autotagOutputFiles.saveReport(reportPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,r.mdx)("h2",{id:"generate-tagged-pdf-of-version-20-from-a-pdf-and-shift-its-headings"},"Generate tagged pdf of version 2.0 from a PDF and shift its headings"),(0,r.mdx)("p",null,"Use the sample below to generate tagged pdf of version 2.0 from a PDF and shift its headings."),(0,r.mdx)("p",null,"Copy this command in terminal to run the sample:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithV20AndShiftHeadings \n")),(0,r.mdx)("p",null,"Sample code:"),(0,r.mdx)(l,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java-7"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'public class AutotagPDFWithV20AndShiftHeadings {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithV20AndShiftHeadings.class);\n\n    public static void main(String[] args) {\n\n        try {\n\n             // Initial setup, create credentials instance.\n             Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                      .fromFile("pdfservices-api-credentials.json")\n                      .build();\n\n             //Create an ExecutionContext using credentials and create a new operation instance.\n             ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n             AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n             // Provide an input FileRef for the operation and take the name of the input file to be used in output file\n             String filename = "src/main/resources/autotagPdfInput.pdf";\n             FileRef source = FileRef.createFromLocalFile(filename);\n             autotagPDFOperation.setInputFile(source);\n\n             //Extract the name of the input file to be used in saving output file with same name\n             String inputFileName = filename.substring(filename.lastIndexOf(\'/\') + 1, filename.indexOf(\'.\'));\n\n             // Build AutotagPDF options and set them into the operation\n             AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                      .pdfVersion(PDFVersion.v20)\n                      .shiftHeadings()\n                      .build();\n             autotagPDFOperation.setOptions(autotagPDFOptions);\n\n             // Execute the operation\n             AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n             // Save the output files at the specified location\n             String outputDirectory = "output/AutotagPDFWithV20AndShiftHeadings/";\n             String taggedPDFPath = outputDirectory +inputFileName+ "-taggedPDF.pdf";\n\n             autotagOutputFiles.saveTaggedPDF(taggedPDFPath);\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n              System.out.println(e);\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-autotag-api-beta-howtos-autotag-api-md-a7ae1820618099ef5270.js.map