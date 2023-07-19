"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2899],{41177:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var n=a(87462),o=a(45987),i=(a(15007),a(64983)),r=a(91515);const s=["components"],d={},c={_frontmatter:d},l=r.Z;function m(e){let{components:t}=e,a=(0,o.Z)(e,s);return(0,i.mdx)(l,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"introduction"},"Introduction"),(0,i.mdx)("h2",{id:"what-are-acrobat-services-apis"},"What are Acrobat Services APIs?"),(0,i.mdx)("p",null,"Increasingly content and application owners are looking for easy-to-use PDF functionality when building modern web experiences. They are looking to cloud-based platforms with simple and reliable plug-and-play services."),(0,i.mdx)("p",null,"Adobe Acrobat Services has five main APIs: the Adobe PDF Services API , the Adobe PDF Embed API, the Adobe Document Generation API, the Adobe PDF Extract API and Adobe PDF Accessibility Auto-Tag API. The latter two APIs and their SDKs are bundled into Adobe PDF Services API as part of a paid offering. PDF Embed API is a free offering. These APIs automate the generation, manipulation, and transformation of document content via a set of modern cloud-based web services. They help you deliver simpler, faster, and branded experiences so that you control user interaction with your documents, streamline PDF workflows and promote usage and retention."),(0,i.mdx)("p",null,"With tools and language support that caters to developers’ existing skill sets, you can now create compelling and consistent PDF experiences, including viewing, exporting, creating and working with PDFs."),(0,i.mdx)("p",null,"These APIs represent a paradigm shift in the way PDF workflows exist and interact with your environment and digital documents. Adobe is rapidly evolving and expanding the portfolio of APIs to support additional use cases. We are also continually enhancing the APIs, including supporting SDKs, sample code, and documentation."),(0,i.mdx)("h2",{id:"pdf-embed-api-for-viewing-and-collaboration-within-your-web-pages"},"PDF Embed API for viewing and collaboration within your web pages"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"pdf-embed-api"},"PDF Embed API")," brings PDF viewing to any web application with only a few lines of JavaScript. Multiple embed modes make it easy to support different views, from full browser to boxed containers and in line. Document collaboration is achieved with support for commenting, drawing, highlighting, and text editing tools. Analytics insights provide an opportunity to embed dynamic interactivity to enhance end-user experiences with chats, prompts, and other with event triggers based on PDF viewing activity."),(0,i.mdx)("h2",{id:"pdf-services-api-to-automate-for-your-document-workflows"},"PDF Services API to automate for your document workflows"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"pdf-services-api"},"PDF Services API")," offers a number of operations to programmatically manipulate documents and automate many different types of document workflows. You can easily create a PDF from a dynamic HTML report, set a password to prevent unauthorized opening of the document, compress it for sharing as an attachment, or extract text, tables, images and document structure to enable downstream solutions. "),(0,i.mdx)("p",null,"There are also capabilities to compress or linearize document for faster web viewing, and to insert, reorder, rotate, replace, and delete pages within documents."),(0,i.mdx)("p",null,"The PDF Services API includes ready-to-use code samples for Java, Node.js and .NET and offers a ",(0,i.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api"},"PDF Services Free Tier which includes 500 free Document Transactions per month.")),(0,i.mdx)("p",null,"The PDF Services API is also available on ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-automate/"},"Power Automate")," with easy to integrate Power Automate connectors."),(0,i.mdx)("h2",{id:"document-generation-api-for-automating-document-workflows"},"Document Generation API for automating document workflows"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"document-generation-api"},"Document Generation API")," is a cloud-based web service that allows you to produce high fidelity PDF and Word documents with dynamic data inputs. Using Document Generation API, you can merge your data(e.g. JSON file) with Word templates to create dynamic documents for contracts and agreements, invoices, proposals, reports, forms, branded marketing documents and more."),(0,i.mdx)("p",null,"Embed Document Generation API into any application using ",(0,i.mdx)("a",{parentName:"p",href:"pdf-services-api#sdk"},"PDFServices SDK")," for Node.js, .Net, and Java. ",(0,i.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=document-generation-api"},"Start a Document Generation Free Tier which includes 500 free Document Transactions per month.")),(0,i.mdx)("h2",{id:"pdf-extract-api-for-extracting-pdf-structure-and-information"},"PDF Extract API for extracting PDF structure and information"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"pdf-extract-api/index.md"},"PDF Extract API (included with the PDF Services API)")," is a cloud-based web service that uses Adobe’s Sensei AI technology to automatically extract content and structural information from PDF documents – native or scanned – and to output it in a structured JSON format. The service extracts text, complex tables, and figures as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Text is extracted in contextual blocks – paragraphs, headings, lists, footnotes, etc. – and includes font, styling, and other text formatting information.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Tables are extracted and parsed with the contents and table formatting information delivered for each cell. The service automatically identifies table cells that span multiple rows or columns. Table data is delivered within the resulting JSON and can also optionally be output in CSV and XLSX files. Tables are also output as PNG images allowing the table data to be visually validated.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Objects that are identified as figures or images are extracted as PNG files."))),(0,i.mdx)("p",null,"The JSON output also captures document structure information, such as the natural reading order of the various extracted elements and the layout of the elements on each given page."),(0,i.mdx)("p",null,"The PDF Extract API provides a method for developers to extract and structure content for use in a number of downstream applications including content republishing, workflow automation, content analysis, and data aggregation, management, and search."),(0,i.mdx)("p",null,"The PDF Extract API can be embedded into any application using the ",(0,i.mdx)("a",{parentName:"p",href:"./pdf-services-api/index.md#sdk"},"PDFServices SDK")," for Node.js, Python, and Java. ",(0,i.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-extract-api"},"Start a PDF Extract Free Tier which includes 500 free Document Transactions per month.")),(0,i.mdx)("h2",{id:"pdf-accessibility-auto-tag-api-for-improving-accessibility-in-pdfs"},"PDF Accessibility Auto-Tag API for improving accessibility in PDFs"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"pdf-accessibility-auto-tag-api/index.md"},"PDF Accessibility Auto-Tag API")," is a powerful tool that may be used as part of the process of improving accessibility in individual PDFs and can be applied at scale for large backlogs of PDFs. Auto-tagging adds document structure tags to the PDF file that are used to read a document's text and present it in a way that makes sense to users using assistive technology. Part of the Adobe PDF Services API offering, it is available as a REST-powered SDK with underlying Sensei AI and is easily called by automated workflows."),(0,i.mdx)("p",null,"Automatic tagging is a good first step on a document’s journey to full accessibility. It provides significant quality improvements over untagged PDF files including more accurate results for heading levels, reading order, complex lists, links, references, and tables. Screen reader users also benefit significantly from the improvements to heading levels for navigation.The service replaces any existing tags within your document, so it provides the most benefit for PDFs that have no tags or low-quality tags. An optional Excel report generated by the PDF Accessibility Auto-Tag service provides information related to the tagging of the document and helps to find content that you might need to review or correct."),(0,i.mdx)("p",null,"The output from the API is a tagged PDF, but it is not guaranteed to fully comply with accessibility standards such as WCAG and PDF/UA, as you may need to perform further downstream remediation and it is your responsibility to seek independent review of the same to meet those standards. After auto-tagging, to further improve accessibility, you may use Adobe Acrobat Pro to add alt-text to all figures and review the tagging of complex tables. Next you should check the first page and how the title is identified, the reading order, and then run the accessibility report, resolving any errors."),(0,i.mdx)("p",null,"You can learn more about PDF Accessibility in ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html"},"this overview"),"."),(0,i.mdx)("p",null,"The PDF Accessibility Auto-Tag API can be embedded into any application using the ",(0,i.mdx)("a",{parentName:"p",href:"./pdf-services-api/index.md#sdk"},"PDFServices SDK")," for Java, .NET, Node.js and Python. ",(0,i.mdx)("a",{parentName:"p",href:"https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"},"Start a PDF Accessibility Auto-Tag Free Tier which includes 500 free Document Transactions per month.")),(0,i.mdx)("h2",{id:"pdf-services-region-support"},"PDF Services Region Support"),(0,i.mdx)("p",null,"PDF Services now support two regions for transacting and working with documents. The default region uses the United States to process documents. Developers can now also use the European region (Ireland) for API calls. This can be done on a call by call basis so one project may make use of both. Details on how this is done can be found in ",(0,i.mdx)("a",{parentName:"p",href:"./pdf-services-api/howtos/service-region-configuration-for-apis"},"our documentation"),"."),(0,i.mdx)("h2",{id:"community-forum-and-feedback"},"Community forum and feedback"),(0,i.mdx)("p",null,"Customer feedback is particularly valuable as it helps the team validate use cases, guide development, and troubleshoot issues. Comments and questions are always welcome on the ",(0,i.mdx)("a",{parentName:"p",href:"https://community.adobe.com/t5/document-cloud-sdk/bd-p/Document-Cloud-SDK?page=1&sort=latest_replies&filter=all"},"Community Forum"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-2-0-index-md-12e0b5c49fc42e045b4b.js.map