"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3983],{51961:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return r},default:function(){return c}});var n=i(87462),a=i(45987),o=(i(15007),i(64983)),m=i(91515);const l=["components"],r={},s=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var d;const u={_frontmatter:r},p=m.Z;function c(e){let{components:t}=e,i=(0,a.Z)(e,l);return(0,o.mdx)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-tos"},"How Tos"),(0,o.mdx)("p",null,(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"accessibility-auto-tag-api.md/#generate-tagged-pdf-from-a-pdf"},"samples and documentation")," should get you quickly up and running with PDF Accessibility Auto-Tag capabilities in the ",(0,o.mdx)("a",{parentName:"p",href:"../../pdf-services-api/index.md"},"PDFServices SDK")," including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Improving the accessibility of PDFs")),(0,o.mdx)("p",null,"For code examples illustrating other PDF actions including those below, see the ",(0,o.mdx)("a",{parentName:"p",href:"../../pdf-services-api/index.md"},"PDFServices SDK")," :"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Creating a PDF from multiple formats, including HTML, Microsoft Office documents, and text files"),(0,o.mdx)("li",{parentName:"ul"},"Exporting a PDF to other formats or an image"),(0,o.mdx)("li",{parentName:"ul"},"Combining entire PDFs or specified page ranges"),(0,o.mdx)("li",{parentName:"ul"},"Using OCR to make a PDF file searchable with a custom locale"),(0,o.mdx)("li",{parentName:"ul"},"Compress PDFs with compression level and Linearize PDFs"),(0,o.mdx)("li",{parentName:"ul"},"Protect PDFs with password(s) and Remove password protection from PDFs"),(0,o.mdx)("li",{parentName:"ul"},"Common page operations, including inserting, replacing, deleting, reordering, and rotating"),(0,o.mdx)("li",{parentName:"ul"},"Splitting PDFs into multiple files"))),(0,o.mdx)("h2",{id:"custom-timeout-configuration"},"Custom timeout configuration"),(0,o.mdx)("p",null,"The APIs use inferred timeout properties and provide defaults. However,\nthe SDK supports custom timeouts for the API calls. You can tailor the\ntimeout settings for your environment and network speed. In addition to\nthe details below, you can refer to working code samples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java"},"Java")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs"},".NET")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js"},"Node.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/blob/master/src/extractpdf/extract_txt_from_pdf_with_custom_timeouts.py"},"Python"))),(0,o.mdx)("h3",{id:"java-timeout-configuration"},"Java timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 2000. The maximum allowed time in\nmilliseconds for creating an initial HTTPS connection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"socketTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds between two successive HTTP response packets."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"processingTimeout"),": Default: 600000. The maximum allowed time\nin milliseconds for processing the documents. Any operation taking more time than the specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," will result in an operation timeout exception.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Note :")," It is advisable to set the ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," to higher values for processing large files.")))),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:""}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.builder()\n    .withConnectTimeout(3000)\n    .withSocketTimeout(20000)\n    .build();\n")),(0,o.mdx)("h3",{id:"net-timeout-configuration"},".NET timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"timeout"),": Default: 400000. The maximum allowed time in\nmilliseconds for establishing a connection, sending a request, and\ngetting a response."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readWriteTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds to read or write data after connection is established."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"processingTimeout"),": Default: 600000. The maximum allowed time\nin milliseconds for processing the documents. Any operation taking more time than the specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," will result in an operation timeout exception.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Note :")," It is advisable to set the ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," to higher values for processing large files.")))),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:".NET",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-1"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.ConfigBuilder()\n    .timeout(500000)\n    .readWriteTimeout(15000)\n    .Build();\n")),(0,o.mdx)("h3",{id:"nodejs-timeout-configuration"},"Node.js timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds for creating an initial HTTPS connection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds between two successive HTTP response packets."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"processingTimeout"),": Default: 600000. The maximum allowed time\nin milliseconds for processing the documents. Any operation taking more time than the specified ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," will result in an operation timeout exception.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Note :")," It is advisable to set the ",(0,o.mdx)("inlineCode",{parentName:"li"},"processingTimeout")," to higher values for processing large files.")))),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Node JS",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-2"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const clientConfig = PDFServicesSdk.ClientConfig\n  .clientConfigBuilder()\n  .withConnectTimeout(15000)\n  .withReadTimeout(15000)\n  .build();\n")),(0,o.mdx)("h3",{id:"python-timeout-configuration"},"Python timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 4000. The number of milliseconds\nRequests will wait for the client to establish a connection to\nServer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readTimeout"),": Default: 10000. The number of milliseconds the\nclient will wait for the server to send a response.")),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Python",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-3"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"client_config = ClientConfig.builder()\n    .with_connect_timeout(10000)\n    .with_read_timeout(40000)\n    .build()\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-accessibility-auto-tag-api-howtos-index-md-58a332ae527d06ed9c2b.js.map