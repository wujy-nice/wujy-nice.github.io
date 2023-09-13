import{_ as s,o as n,c as a,S as l}from"./chunks/framework.c59ae78c.js";const d=JSON.parse('{"title":"Home Page","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-home-page.md","filePath":"reference/default-theme-home-page.md","lastUpdated":null}'),p={name:"reference/default-theme-home-page.md"},o=l(`<h1 id="home-page" tabindex="-1">Home Page <a class="header-anchor" href="#home-page" aria-label="Permalink to &quot;Home Page&quot;">​</a></h1><p>VitePress default theme provides a homepage layout, which you can also see used on <a href="./../">the homepage of this site</a>. You may use it on any of your pages by specifying <code>layout: home</code> in the <a href="./frontmatter-config">frontmatter</a>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>However, this option alone wouldn&#39;t do much. You can add several different pre templated &quot;sections&quot; to the homepage by setting additional other options such as <code>hero</code> and <code>features</code>.</p><h2 id="hero-section" tabindex="-1">Hero Section <a class="header-anchor" href="#hero-section" aria-label="Permalink to &quot;Hero Section&quot;">​</a></h2><p>The Hero section comes at the top of the homepage. Here&#39;s how you can configure the Hero section.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">hero</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tagline</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/logo.png</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">alt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">brand</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get Started</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">alt</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">View on GitHub</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">hero</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">VitePress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tagline</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">src</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/logo.png</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">alt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">VitePress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">brand</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get Started</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">alt</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">View on GitHub</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Hero</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// The string shown top of \`text\`. Comes with brand color</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// and expected to be short, such as product name.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// The main text for the hero section. This will be defined</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// as \`h1\` tag.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Tagline displayed below \`text\`.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tagline</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// The image is displayed next to the text and tagline area.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">image</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThemeableImage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Action buttons to display in home hero section.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">actions</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HeroAction</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThemeableImage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">src</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">alt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">light</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">dark</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">alt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HeroAction</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Color theme of the button. Defaults to \`brand\`.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">theme</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;brand&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;alt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Label of the button.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Destination link of the button.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">link</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Hero</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// The string shown top of \`text\`. Comes with brand color</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// and expected to be short, such as product name.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// The main text for the hero section. This will be defined</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// as \`h1\` tag.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Tagline displayed below \`text\`.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tagline</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// The image is displayed next to the text and tagline area.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">image</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ThemeableImage</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Action buttons to display in home hero section.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">actions</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HeroAction</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ThemeableImage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">src</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">alt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">light</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">dark</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">alt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HeroAction</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Color theme of the button. Defaults to \`brand\`.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">theme</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;brand&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;alt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Label of the button.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Destination link of the button.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">link</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="customizing-the-name-color" tabindex="-1">Customizing the name color <a class="header-anchor" href="#customizing-the-name-color" aria-label="Permalink to &quot;Customizing the name color&quot;">​</a></h3><p>VitePress uses the brand color (<code>--vp-c-brand-1</code>) for the <code>name</code>. However, you may customize this color by overriding <code>--vp-home-hero-name-color</code> variable.</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Also you may customize it further by combining <code>--vp-home-hero-name-background</code> to give the <code>name</code> gradient color.</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-webkit-linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">120</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#bd34fe</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#41d1ff</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-webkit-linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">120</span><span style="color:#D73A49;">deg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#bd34fe</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#41d1ff</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="features-section" tabindex="-1">Features Section <a class="header-anchor" href="#features-section" aria-label="Permalink to &quot;Features Section&quot;">​</a></h2><p>In Features section, you can list any number of features you would like to show right after the Hero section. To configure it, pass <code>features</code> option to the frontmatter.</p><p>You can provide an icon for each feature, which can be an emoji or any type of image. When the configured icon is an image (svg, png, jpeg...), you must provide the icon with the proper width and height; you can also provide the description, its intrinsic size as well as its variants for dark and light theme when required.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">features</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🛠️</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Simple and minimal, always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/cool-feature-icon.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Another cool feature</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">dark</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/dark-feature-icon.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">light</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/light-feature-icon.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Another cool feature</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">features</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🛠️</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Simple and minimal, always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">src</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/cool-feature-icon.svg</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Another cool feature</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">dark</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/dark-feature-icon.svg</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">light</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/light-feature-icon.svg</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Another cool feature</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Show icon on each feature box.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">icon</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FeatureIcon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Title of the feature.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Details of the feature.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">details</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Link when clicked on feature component. The link can</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// be both internal or external.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// e.g. \`guid/reference/default-theme-home-page\` or \`htttps://example.com\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">link</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Link text to be shown inside feature component. Best</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// used with \`link\` option.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// e.g. \`Learn more\`, \`Visit page\`, etc.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">linkText</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Link rel attribute for the \`link\` option.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// e.g. \`external\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">rel</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FeatureIcon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">src</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">alt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">width</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">height</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">light</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">dark</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">alt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">width</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">height</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Show icon on each feature box.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">icon</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FeatureIcon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Title of the feature.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Details of the feature.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">details</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Link when clicked on feature component. The link can</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// be both internal or external.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// e.g. \`guid/reference/default-theme-home-page\` or \`htttps://example.com\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">link</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Link text to be shown inside feature component. Best</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// used with \`link\` option.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// e.g. \`Learn more\`, \`Visit page\`, etc.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">linkText</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Link rel attribute for the \`link\` option.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// e.g. \`external\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">rel</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FeatureIcon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">src</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">alt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">width</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#E36209;">height</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">light</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">dark</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">alt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">width</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">height</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre></div>`,18),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
