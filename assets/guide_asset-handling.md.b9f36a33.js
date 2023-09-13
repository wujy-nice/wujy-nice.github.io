import{_ as s,o as e,c as a,S as o}from"./chunks/framework.c59ae78c.js";const E=JSON.parse('{"title":"Asset Handling","description":"","frontmatter":{},"headers":[],"relativePath":"guide/asset-handling.md","filePath":"guide/asset-handling.md","lastUpdated":null}'),n={name:"guide/asset-handling.md"},t=o(`<h1 id="asset-handling" tabindex="-1">Asset Handling <a class="header-anchor" href="#asset-handling" aria-label="Permalink to &quot;Asset Handling&quot;">​</a></h1><h2 id="referencing-static-assets" tabindex="-1">Referencing Static Assets <a class="header-anchor" href="#referencing-static-assets" aria-label="Permalink to &quot;Referencing Static Assets&quot;">​</a></h2><p>All Markdown files are compiled into Vue components and processed by <a href="https://vitejs.dev/guide/assets.html" target="_blank" rel="noreferrer">Vite</a>. You can, <strong>and should</strong>, reference any assets using relative URLs:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">![</span><span style="color:#DBEDFF;text-decoration:underline;">An image</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">./image.png</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">![</span><span style="color:#032F62;text-decoration:underline;">An image</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">./image.png</span><span style="color:#24292E;">)</span></span></code></pre></div><p>You can reference static assets in your markdown files, your <code>*.vue</code> components in the theme, styles and plain <code>.css</code> files either using absolute public paths (based on project root) or relative paths (based on your file system). The latter is similar to the behavior you are used to if you have used Vite, Vue CLI, or webpack&#39;s <code>file-loader</code>.</p><p>Common image, media, and font filetypes are detected and included as assets automatically.</p><p>All referenced assets, including those using absolute paths, will be copied to the output directory with a hashed file name in the production build. Never-referenced assets will not be copied. Image assets smaller than 4kb will be base64 inlined - this can be configured via the <a href="./../reference/site-config#vite"><code>vite</code></a> config option.</p><p>All <strong>static</strong> path references, including absolute paths, should be based on your working directory structure.</p><h2 id="the-public-directory" tabindex="-1">The Public Directory <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;The Public Directory&quot;">​</a></h2><p>Sometimes you may need to provide static assets that are not directly referenced in any of your Markdown or theme components, or you may want to serve certain files with the original filename. Examples of such files include <code>robots.txt</code>, favicons, and PWA icons.</p><p>You can place these files in the <code>public</code> directory under the <a href="./routing#source-directory">source directory</a>. For example, if your project root is <code>./docs</code> and using default source directory location, then your public directory will be <code>./docs/public</code>.</p><p>Assets placed in <code>public</code> will be copied to the root of the output directory as-is.</p><p>Note that you should reference files placed in <code>public</code> using root absolute path - for example, <code>public/icon.png</code> should always be referenced in source code as <code>/icon.png</code>.</p><h2 id="base-url" tabindex="-1">Base URL <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;Base URL&quot;">​</a></h2><p>If your site is deployed to a non-root URL, you will need to set the <code>base</code> option in <code>.vitepress/config.js</code>. For example, if you plan to deploy your site to <code>https://foo.github.io/bar/</code>, then <code>base</code> should be set to <code>&#39;/bar/&#39;</code> (it should always start and end with a slash).</p><p>All your static asset paths are automatically processed to adjust for different <code>base</code> config values. For example, if you have an absolute reference to an asset under <code>public</code> in your markdown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">![</span><span style="color:#DBEDFF;text-decoration:underline;">An image</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/image-inside-public.png</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">![</span><span style="color:#032F62;text-decoration:underline;">An image</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/image-inside-public.png</span><span style="color:#24292E;">)</span></span></code></pre></div><p>You do <strong>not</strong> need to update it when you change the <code>base</code> config value in this case.</p><p>However, if you are authoring a theme component that links to assets dynamically, e.g. an image whose <code>src</code> is based on a theme config value:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">theme.logoPath</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">theme.logoPath</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>In this case it is recommended to wrap the path with the <a href="./../reference/runtime-api#withbase"><code>withBase</code> helper</a> provided by VitePress:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { withBase, useData } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;withBase(theme.logoPath)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { withBase, useData } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;withBase(theme.logoPath)&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,22),l=[t];function p(c,r,i,d,y,u){return e(),a("div",null,l)}const g=s(n,[["render",p]]);export{E as __pageData,g as default};
