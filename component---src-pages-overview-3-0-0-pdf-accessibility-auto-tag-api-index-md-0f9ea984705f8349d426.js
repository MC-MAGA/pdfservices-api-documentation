"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2379],{6272:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var i=a(87462),n=a(45987),o=(a(15007),a(64983)),s=a(91515);const r=["components"],d={},l={_frontmatter:d},u=s.Z;function c(e){let{components:t}=e,a=(0,n.Z)(e,r);return(0,o.mdx)(u,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"overview"},"Overview"),(0,o.mdx)("p",null,(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"What is PDF Tag structure?")),(0,o.mdx)("p",null,"To read a document’s text and present it in a way that makes sense to users using assistive technology, a screen reader\nor other text-to-speech tool requires that the document be structured. Document structure tags in a PDF define the\nreading order and identify headings, paragraphs, sections, tables and other page elements. The tags structure also\nallows for documents to be resized and reflowed for viewing at larger sizes and on mobile devices."),(0,o.mdx)("p",null,"You can learn more about PDF Accessibility in ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html"},"this overview"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"What is Adobe PDF Accessibility Auto-Tag API?")),(0,o.mdx)("p",null,"PDF Accessibility Auto-Tag API is a powerful tool that may be used as part of the process of improving accessibility in\nindividual PDFs and can be applied at scale for large backlogs of PDFs. Part of the Adobe PDF Services API offering, it\nis available as a REST-powered SDK with underlying Sensei AI and is easily called by automated workflows."),(0,o.mdx)("p",null,"Automatic tagging is a good first step on a document’s journey to full accessibility. It outputs the tagged pdf, along\nwith an optional report providing detailed information about the added tags. The service replaces any existing tags\nwithin your document, so it provides the most benefit for PDFs that have no tags or low-quality tags. After\nauto-tagging, to further improve accessibility, you may add alt-text to all figures and review the tagging of complex\ntables. Next you should check the first page and how the title is identified, the reading order, and then run the\naccessibility report, resolving any errors."),(0,o.mdx)("p",null,"Automatic tagging provides significant quality improvements over untagged PDF files including more accurate results for\nheading levels, reading order, complex lists, links, references, and tables. Screen reader users also benefit\nsignificantly from the improvements to heading levels for navigation."),(0,o.mdx)("p",null,"The Excel report generated by the PDF Accessibility Auto-Tag service provides information related to the tagging of the\ndocument and helps you find content that you might need to review or correct."),(0,o.mdx)("p",null,"The service has the following options:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"GenerateReport")," - Create a report about the document and its tags (in XLSX format)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"ShiftHeadings")," - The default tagging identifies a title (if present) and includes it as an additional heading level 1 (H1). If you wish to be more consistent with WCAG HTML accessibility, if a title is identified, then it is marked as an H1, and all remaining headings in the document can be shifted down one level (e.g., H1->H2). This defaults to false (no shift).")),(0,o.mdx)("p",null,"The PDF produced by PDF Accessibility Auto-Tag API has its structure identified (Headings, Tables, Lists, Paragraphs,\netc), along with language identification for each paragraph for content and to improve word breaks. The output is a\ntagged PDF, however it is not guaranteed to comply with accessibility standards such as\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/standards-guidelines/wcag/"},"WCAG")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://www.pdfa.org/resource/iso-14289-pdfua/"},"PDF/UA"),",\nas you may need to perform further downstream remediation to meet those standards.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-accessibility-auto-tag-api-index-md-0f9ea984705f8349d426.js.map