import{_ as s,o as a,c as n,S as e}from"./chunks/framework.c59ae78c.js";const u=JSON.parse('{"title":"Edit Link","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-edit-link.md","filePath":"reference/default-theme-edit-link.md","lastUpdated":null}'),p={name:"reference/default-theme-edit-link.md"},l=e(`<h1 id="edit-link" tabindex="-1">Edit Link <a class="header-anchor" href="#edit-link" aria-label="Permalink to &quot;Edit Link&quot;">​</a></h1><h2 id="site-level-config" tabindex="-1">Site-Level Config <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Site-Level Config&quot;">​</a></h2><p>Edit Link lets you display a link to edit the page on Git management services such as GitHub, or GitLab. To enable it, add <code>themeConfig.editLink</code> options to your config.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    editLink: {</span></span>
<span class="line"><span style="color:#24292E;">      pattern: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>pattern</code> option defines the URL structure for the link, and <code>:path</code> is going to be replaced with the page path.</p><p>You can also put a pure function that accepts <a href="./runtime-api#usedata"><code>PageData</code></a> as the argument and returns the URL string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">pattern</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">filePath</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (filePath.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;packages/&#39;</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`https://github.com/acme/monorepo/edit/main/\${</span><span style="color:#E1E4E8;">filePath</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`https://github.com/acme/monorepo/edit/main/docs/\${</span><span style="color:#E1E4E8;">filePath</span><span style="color:#9ECBFF;">}\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    editLink: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">pattern</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">filePath</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (filePath.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;packages/&#39;</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`https://github.com/acme/monorepo/edit/main/\${</span><span style="color:#24292E;">filePath</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`https://github.com/acme/monorepo/edit/main/docs/\${</span><span style="color:#24292E;">filePath</span><span style="color:#032F62;">}\`</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>It should not have side-effects nor access anything outside of its scope since it will be serialized and executed in the browser.</p><p>By default, this will add the link text &quot;Edit this page&quot; at the bottom of the doc page. You may customize this text by defining the <code>text</code> option.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&#39;Edit this page on GitHub&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    editLink: {</span></span>
<span class="line"><span style="color:#24292E;">      pattern: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&#39;Edit this page on GitHub&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Frontmatter Config <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Frontmatter Config&quot;">​</a></h2><p>This can be disabled per-page using the <code>editLink</code> option on frontmatter:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">editLink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">editLink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div>`,13),o=[l];function t(c,i,r,E,y,d){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
