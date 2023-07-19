"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9592],{28108:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var a=n(87462),i=n(45987),o=(n(15007),n(64983)),r=n(91515);const l=["components"],m={},s=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var d;const p={_frontmatter:m},u=r.Z;function c(e){let{components:t}=e,n=(0,i.Z)(e,l);return(0,o.mdx)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-tos"},"How Tos"),(0,o.mdx)("p",null,"The samples and documentation here should get you quickly up and running with the PDF Services SDK. These code examples illustrate how to perform PDF actions using the SDK, including:",(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Creating a PDF from multiple formats, including HTML, Microsoft\nOffice documents, and text files"),(0,o.mdx)("li",{parentName:"ul"},"Exporting a PDF to other formats or an image"),(0,o.mdx)("li",{parentName:"ul"},"Combining entire PDFs or specified page ranges"),(0,o.mdx)("li",{parentName:"ul"},"Using OCR to make a PDF file searchable with a custom locale"),(0,o.mdx)("li",{parentName:"ul"},"Compress PDFs with compression level and Linearize PDFs"),(0,o.mdx)("li",{parentName:"ul"},"Protect PDFs with password(s) and Remove password protection from\nPDFs"),(0,o.mdx)("li",{parentName:"ul"},"Common page operations, including inserting, replacing, deleting,\nreordering, and rotating"),(0,o.mdx)("li",{parentName:"ul"},"Splitting PDFs into multiple files"),(0,o.mdx)("li",{parentName:"ul"},"Extract PDF as JSON: the content, structure & renditions of table\nand figure elements along with Character Bounding Boxes"),(0,o.mdx)("li",{parentName:"ul"},"Get the properties of a PDF file like page count, PDF version, file size, compliance levels, font info, permissions and more"),(0,o.mdx)("li",{parentName:"ul"},"Improving the accessibility of PDFs (Available under Early Access Program)"))),(0,o.mdx)("h2",{id:"service-region-configuration"},"Service region configuration"),(0,o.mdx)("p",null,"Adobe PDF Services SDKs use ",(0,o.mdx)("inlineCode",{parentName:"p"},"US (United States)")," as a default region to process all the documents.\nOnce you purchase PDF Services SDK, the SDKs can be configured to process the documents in a specified region that is listed below.\nCurrently, PDF Services SDKs has support for the following regions :"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Region Code"),(0,o.mdx)("th",{parentName:"tr",align:null},"Name"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"US")),(0,o.mdx)("td",{parentName:"tr",align:null},"United States (default)")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"EU")),(0,o.mdx)("td",{parentName:"tr",align:null},"Europe")))),(0,o.mdx)("p",null,"In addition to\nthe details below, you can refer to working code samples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/ExportPDFWithSpecifiedRegion.java"},"Java")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/ExportPDFWithSpecifiedRegion/Program.cs"},".NET")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/export-pdf-with-specified-region.js"},"Node.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/blob/master/src/extractpdf/extract_txt_from_pdf_with_specified_region.py"},"Python"))),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"region"),": Default: ",(0,o.mdx)("inlineCode",{parentName:"li"},"US"),". All documents will be processed in the specified region.")),(0,o.mdx)("p",null,"Override the ",(0,o.mdx)("inlineCode",{parentName:"p"},"region")," property via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Python",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.builder()\n    .setRegion(Region.EU)\n    .build();\n")),(0,o.mdx)("h3",{id:"net"},".NET"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.ConfigBuilder()\n    .SetRegion(Region.EU)\n    .Build();\n")),(0,o.mdx)("h3",{id:"nodejs"},"Node.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const clientConfig = PDFServicesSdk.ClientConfig\n    .clientConfigBuilder()\n    .setRegion(Region.EU)\n    .build();\n")),(0,o.mdx)("h3",{id:"python"},"Python"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"client_config = ClientConfig.builder()\n    .with_region(Region.EU)\n    .build()\n")),(0,o.mdx)("h2",{id:"runtime-in-memory-authentication"},"Runtime in-memory authentication"),(0,o.mdx)("p",null,"The SDK supports providing the authentication credentials at runtime.\nDoing so allows fetching the credentials from a secret server during\nruntime instead of storing them in a file. Please refer the following\nsamples for details."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithInMemoryAuthCredentials.java"},"Java")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithInMemoryAuthCredentials/Program.cs"},".NET")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-inmemory-auth-credentials.js"},"Node.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/blob/master/src/extractpdf/extract_txt_from_pdf_with_in_memory_auth_credentials.py"},"Python"))),(0,o.mdx)("h2",{id:"proxy-server-configuration"},"Proxy Server Configuration"),(0,o.mdx)("p",null,"The Java SDK enables connection to API calls through Proxy via Client Configurations.\nAlso, it supports username and password based authentication for the proxy server.\nIt allows the clients to use SDK within the network where all outgoing calls have to\ngo through a proxy and are allowed only if allow-listed on the proxy. Please refer to the\nfollowing sample for details."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithProxyServer.java"},"Java Sample for Proxy Server Config")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithAuthenticatedProxyServer.java"},"Java Sample for Proxy Server Config With Basic Authentication"))),(0,o.mdx)("h3",{id:"java-proxy-server-configuration"},"Java Proxy Server configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"host"),": The proxy Server Hostname (DNS or IP Address)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"scheme"),": Default: http. Scheme of the proxy server i.e. http or https."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"port"),": Default: 80 for http, 443 for https. Port on which proxy server is listening."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"username"),": Username for the authentication."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"password"),": Password for the authentication.")),(0,o.mdx)("p",null,"All these properties are wrapped within the ",(0,o.mdx)("inlineCode",{parentName:"p"},"proxyServerConfig")," object. Further, ",(0,o.mdx)("inlineCode",{parentName:"p"},"username")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"password")," is to be provided\ninside the nested object ",(0,o.mdx)("inlineCode",{parentName:"p"},"usernamePasswordCredentials"),"."),(0,o.mdx)("p",null,"Set the above properties using a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ProxyServerConfig")," class, and use ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class to configure proxy server."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample showing proxy server configuration without authentication.")),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:""}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()\n    .withHost("PROXY_HOSTNAME")\n    .withProxyScheme(ProxyScheme.HTTPS)\n    .withPort(443)\n    .build();\n\nClientConfig clientConfig = ClientConfig.builder()\n    .withConnectTimeout(10000)\n    .withSocketTimeout(40000)\n    .withProxyServerConfig(proxyServerConfig)\n    .build();\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample showing proxy server configuration with authentication.")),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-1"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'ProxyServerConfig proxyServerConfig = new ProxyServerConfig.Builder()\n    .withHost("PROXY_HOSTNAME")\n    .withProxyScheme(ProxyScheme.HTTPS)\n    .withPort(443)\n    .withCredentials(new UsernamePasswordCredentials("USERNAME", "PASSWORD"))\n    .build();\n\nClientConfig clientConfig = ClientConfig.builder()\n    .withConnectTimeout(10000)\n    .withSocketTimeout(40000)\n    .withProxyServerConfig(proxyServerConfig)\n    .build();\n')),(0,o.mdx)("h2",{id:"custom-timeout-configuration"},"Custom timeout configuration"),(0,o.mdx)("p",null,"The APIs use inferred timeout properties and provide defaults. However,\nthe SDK supports custom timeouts for the API calls. You can tailor the\ntimeout settings for your environment and network speed. In addition to\nthe details below, you can refer to working code samples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/blob/master/src/main/java/com/adobe/pdfservices/operation/samples/customconfigurations/CreatePDFWithCustomTimeouts.java"},"Java")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/PDFServices.NET.SDK.Samples/blob/master/CreatePDFWithCustomTimeouts/Program.cs"},".NET")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-node-sdk-samples/blob/master/src/customconfigurations/create-pdf-with-custom-timeouts.js"},"Node.js")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/blob/master/src/extractpdf/extract_txt_from_pdf_with_custom_timeouts.py"},"Python"))),(0,o.mdx)("h3",{id:"java-timeout-configuration"},"Java timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 2000. The maximum allowed time in\nmilliseconds for creating an initial HTTPS connection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"socketTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds between two successive HTTP response packets.")),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Java",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-2"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.builder()\n    .withConnectTimeout(3000)\n    .withSocketTimeout(20000)\n    .build();\n")),(0,o.mdx)("h3",{id:"net-timeout-configuration"},".NET timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"timeout"),": Default: 400000. The maximum allowed time in\nmilliseconds for establishing a connection, sending a request, and\ngetting a response."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readWriteTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds to read or write data after connection is established.")),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:".NET",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-3"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ClientConfig clientConfig = ClientConfig.ConfigBuilder()\n    .timeout(500000)\n    .readWriteTimeout(15000)\n    .Build();\n")),(0,o.mdx)("h3",{id:"nodejs-timeout-configuration"},"Node.js timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds for creating an initial HTTPS connection."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readTimeout"),": Default: 10000. The maximum allowed time in\nmilliseconds between two successive HTTP response packets.")),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Node JS",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-4"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const clientConfig = PDFServicesSdk.ClientConfig\n  .clientConfigBuilder()\n  .withConnectTimeout(15000)\n  .withReadTimeout(15000)\n  .build();\n")),(0,o.mdx)("h3",{id:"python-timeout-configuration"},"Python timeout configuration"),(0,o.mdx)("p",null,"Available properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"connectTimeout"),": Default: 4000. The number of milliseconds\nRequests will wait for the client to establish a connection to\nServer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"readTimeout"),": Default: 10000. The number of milliseconds the\nclient will wait for the server to send a response.")),(0,o.mdx)("p",null,"Override the timeout properties via a custom ",(0,o.mdx)("inlineCode",{parentName:"p"},"ClientConfig")," class:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"1",languages:"Python",mdxType:"CodeBlock"}),(0,o.mdx)("h3",{id:"-5"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"client_config = ClientConfig.builder()\n    .with_connect_timeout(10000)\n    .with_read_timeout(40000)\n    .build()\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-3-0-pdf-services-api-howtos-index-md-4abbca483ab3ffca6c34.js.map