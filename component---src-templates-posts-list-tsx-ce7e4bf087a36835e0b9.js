"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[621],{4297:function(e,t,r){r.r(t),r.d(t,{Head:function(){return c},default:function(){return s}});var l=r(7294),a=r(1883),o=r(656),n=r(4001),i=r(4842);var s=e=>{let{pageContext:t,data:r,location:n}=e;const{site:{siteMetadata:s},allMarkdownRemark:{nodes:c}}=r,m=null==s?void 0:s.title;if(!m)throw new Error("A title is mandatory for every post");const f=t.categoryFolder||t.foodCategory;return l.createElement(i.Z,{location:n,title:m},l.createElement(o.Z,null),f?l.createElement("p",{id:"filter-alert"},"☝️ Estas filtrant per"," ",l.createElement("i",{className:"filter category"},t.categoryFolder&&t.categoryFolder.slice(1,-1)||t.foodCategory)):null,l.createElement("ol",{style:{listStyle:"none"}},c.filter((e=>!e.frontmatter.draft)).map((e=>{const r=e.frontmatter.title||e.fields.slug,o=e.fields.slug.split("/").filter(Boolean)[0];return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,f?null:l.createElement(a.Link,{to:o,className:"filter category"},o),t.foodCategory||!e.frontmatter.foodCategory?null:l.createElement(a.Link,{to:"/tipus-de-menjar/"+e.frontmatter.foodCategory,className:"filter food-category"},e.frontmatter.foodCategory),l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},r))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const c=()=>l.createElement(n.Z,{title:"Tots els articles"})}}]);
//# sourceMappingURL=component---src-templates-posts-list-tsx-ce7e4bf087a36835e0b9.js.map