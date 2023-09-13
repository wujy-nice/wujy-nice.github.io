import{_ as s,o as n,c as a,S as l}from"./chunks/framework.c59ae78c.js";const p="/search.png";const u=JSON.parse('{"title":"Search","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/default-theme-search.md","filePath":"reference/default-theme-search.md","lastUpdated":null}'),o={name:"reference/default-theme-search.md"},e=l(`<h1 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;Search&quot;">​</a></h1><h2 id="local-search" tabindex="-1">Local Search <a class="header-anchor" href="#local-search" aria-label="Permalink to &quot;Local Search&quot;">​</a></h2><p>VitePress supports fuzzy full-text search using a in-browser index thanks to <a href="https://github.com/lucaong/minisearch/" target="_blank" rel="noreferrer">minisearch</a>. To enable this feature, simply set the <code>themeConfig.search.provider</code> option to <code>&#39;local&#39;</code> in your <code>.vitepress/config.ts</code> file:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>Example result:</p><p><img src="`+p+`" alt="screenshot of the search modal"></p><p>Alternatively, you can use <a href="#algolia-search">Algolia DocSearch</a> or some community plugins like <a href="https://www.npmjs.com/package/vitepress-plugin-search" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vitepress-plugin-search</a> or <a href="https://www.npmjs.com/package/vitepress-plugin-pagefind" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vitepress-plugin-pagefind</a>.</p><h3 id="local-search-i18n" tabindex="-1">i18n <a class="header-anchor" href="#local-search-i18n" aria-label="Permalink to &quot;i18n {#local-search-i18n}&quot;">​</a></h3><p>You can use a config like this to use multilingual search:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          zh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            translations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              button: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              modal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        locales: {</span></span>
<span class="line"><span style="color:#24292E;">          zh: {</span></span>
<span class="line"><span style="color:#24292E;">            translations: {</span></span>
<span class="line"><span style="color:#24292E;">              button: {</span></span>
<span class="line"><span style="color:#24292E;">                buttonText: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                buttonAriaLabel: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              modal: {</span></span>
<span class="line"><span style="color:#24292E;">                noResultsText: </span><span style="color:#032F62;">&#39;无法找到相关结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                resetButtonTitle: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                footer: {</span></span>
<span class="line"><span style="color:#24292E;">                  selectText: </span><span style="color:#032F62;">&#39;选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  navigateText: </span><span style="color:#032F62;">&#39;切换&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="minisearch-options" tabindex="-1">miniSearch options <a class="header-anchor" href="#minisearch-options" aria-label="Permalink to &quot;miniSearch options&quot;">​</a></h3><p>You can configure MiniSearch like this:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        miniSearch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Pick&lt;import(&#39;minisearch&#39;).Options, &#39;extractField&#39; | &#39;tokenize&#39; | &#39;processTerm&#39;&gt;}</span></span>
<span class="line"><span style="color:#6A737D;">           */</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;minisearch&#39;).SearchOptions}</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#F97583;">@default</span></span>
<span class="line"><span style="color:#6A737D;">           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }</span></span>
<span class="line"><span style="color:#6A737D;">           */</span></span>
<span class="line"><span style="color:#E1E4E8;">          searchOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        miniSearch: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{Pick&lt;import(&#39;minisearch&#39;).Options, &#39;extractField&#39; | &#39;tokenize&#39; | &#39;processTerm&#39;&gt;}</span></span>
<span class="line"><span style="color:#6A737D;">           */</span></span>
<span class="line"><span style="color:#24292E;">          options: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;minisearch&#39;).SearchOptions}</span></span>
<span class="line"><span style="color:#6A737D;">           * </span><span style="color:#D73A49;">@default</span></span>
<span class="line"><span style="color:#6A737D;">           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }</span></span>
<span class="line"><span style="color:#6A737D;">           */</span></span>
<span class="line"><span style="color:#24292E;">          searchOptions: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>Learn more in <a href="https://lucaong.github.io/minisearch/classes/_minisearch_.minisearch.html" target="_blank" rel="noreferrer">MiniSearch docs</a>.</p><h3 id="custom-content-renderer" tabindex="-1">Custom content renderer <a class="header-anchor" href="#custom-content-renderer" aria-label="Permalink to &quot;Custom content renderer&quot;">​</a></h3><p>You can customize the function used to render the markdown content before indexing it:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">src</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).MarkdownEnv}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">env</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;markdown-it&#39;)}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">md</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// return html string</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">src</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;vitepress&#39;).MarkdownEnv}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">env</span></span>
<span class="line"><span style="color:#6A737D;">         * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;markdown-it&#39;)}</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">md</span></span>
<span class="line"><span style="color:#6A737D;">         */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">src</span><span style="color:#24292E;">, </span><span style="color:#E36209;">env</span><span style="color:#24292E;">, </span><span style="color:#E36209;">md</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// return html string</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>This function will be stripped from client-side site data, so you can use Node.js APIs in it.</p><h4 id="example-excluding-pages-from-search" tabindex="-1">Example: Excluding pages from search <a class="header-anchor" href="#example-excluding-pages-from-search" aria-label="Permalink to &quot;Example: Excluding pages from search&quot;">​</a></h4><p>You can exclude pages from search by adding <code>search: false</code> to the frontmatter of the page. Alternatively:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(src, env)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.frontmatter?.search </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.relativePath.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;some/path&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">src</span><span style="color:#24292E;">, </span><span style="color:#E36209;">env</span><span style="color:#24292E;">, </span><span style="color:#E36209;">md</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">html</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> md.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(src, env)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (env.frontmatter?.search </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (env.relativePath.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;some/path&#39;</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> html</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Note</p><p>In case a custom <code>_render</code> function is provided, you need to handle the <code>search: false</code> frontmatter yourself. Also, the <code>env</code> object won&#39;t be completely populated before <code>md.render</code> is called, so any checks on optional <code>env</code> properties like <code>frontmatter</code> should be done after that.</p></div><h4 id="example-transforming-content-adding-anchors" tabindex="-1">Example: Transforming content - adding anchors <a class="header-anchor" href="#example-transforming-content-adding-anchors" aria-label="Permalink to &quot;Example: Transforming content - adding anchors&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(src, env)</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.frontmatter?.title)</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`# \${</span><span style="color:#E1E4E8;">env</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">frontmatter</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">_render</span><span style="color:#24292E;">(</span><span style="color:#E36209;">src</span><span style="color:#24292E;">, </span><span style="color:#E36209;">env</span><span style="color:#24292E;">, </span><span style="color:#E36209;">md</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">html</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> md.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(src, env)</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (env.frontmatter?.title)</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> md.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`# \${</span><span style="color:#24292E;">env</span><span style="color:#032F62;">.</span><span style="color:#24292E;">frontmatter</span><span style="color:#032F62;">.</span><span style="color:#24292E;">title</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> html</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> html</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="algolia-search" tabindex="-1">Algolia Search <a class="header-anchor" href="#algolia-search" aria-label="Permalink to &quot;Algolia Search&quot;">​</a></h2><p>VitePress supports searching your docs site using <a href="https://docsearch.algolia.com/docs/what-is-docsearch" target="_blank" rel="noreferrer">Algolia DocSearch</a>. Refer their getting started guide. In your <code>.vitepress/config.ts</code> you&#39;ll need to provide at least the following to make it work:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;algolia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        indexName: </span><span style="color:#032F62;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="algolia-search-i18n" tabindex="-1">i18n <a class="header-anchor" href="#algolia-search-i18n" aria-label="Permalink to &quot;i18n {#algolia-search-i18n}&quot;">​</a></h3><p>You can use a config like this to use multilingual search:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          zh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            placeholder: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            translations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              button: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              modal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                searchBox: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  resetButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  cancelButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                startScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  recentSearchesTitle: </span><span style="color:#9ECBFF;">&#39;搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  noRecentSearchesText: </span><span style="color:#9ECBFF;">&#39;没有搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  saveRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;保存至搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  removeRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从搜索历史中移除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  favoriteSearchesTitle: </span><span style="color:#9ECBFF;">&#39;收藏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  removeFavoriteSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                errorScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  titleText: </span><span style="color:#9ECBFF;">&#39;无法获取结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  helpText: </span><span style="color:#9ECBFF;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  closeText: </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  searchByText: </span><span style="color:#9ECBFF;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                noResultsScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  suggestedQueryText: </span><span style="color:#9ECBFF;">&#39;你可以尝试查询&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  reportMissingResultsText: </span><span style="color:#9ECBFF;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  reportMissingResultsLinkText: </span><span style="color:#9ECBFF;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;algolia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        indexName: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        locales: {</span></span>
<span class="line"><span style="color:#24292E;">          zh: {</span></span>
<span class="line"><span style="color:#24292E;">            placeholder: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            translations: {</span></span>
<span class="line"><span style="color:#24292E;">              button: {</span></span>
<span class="line"><span style="color:#24292E;">                buttonText: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                buttonAriaLabel: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              modal: {</span></span>
<span class="line"><span style="color:#24292E;">                searchBox: {</span></span>
<span class="line"><span style="color:#24292E;">                  resetButtonTitle: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  resetButtonAriaLabel: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  cancelButtonText: </span><span style="color:#032F62;">&#39;取消&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  cancelButtonAriaLabel: </span><span style="color:#032F62;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                startScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                  recentSearchesTitle: </span><span style="color:#032F62;">&#39;搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  noRecentSearchesText: </span><span style="color:#032F62;">&#39;没有搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  saveRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;保存至搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  removeRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;从搜索历史中移除&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  favoriteSearchesTitle: </span><span style="color:#032F62;">&#39;收藏&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  removeFavoriteSearchButtonTitle: </span><span style="color:#032F62;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                errorScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                  titleText: </span><span style="color:#032F62;">&#39;无法获取结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  helpText: </span><span style="color:#032F62;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                footer: {</span></span>
<span class="line"><span style="color:#24292E;">                  selectText: </span><span style="color:#032F62;">&#39;选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  navigateText: </span><span style="color:#032F62;">&#39;切换&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  closeText: </span><span style="color:#032F62;">&#39;关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  searchByText: </span><span style="color:#032F62;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                noResultsScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                  noResultsText: </span><span style="color:#032F62;">&#39;无法找到相关结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  suggestedQueryText: </span><span style="color:#032F62;">&#39;你可以尝试查询&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  reportMissingResultsText: </span><span style="color:#032F62;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                  reportMissingResultsLinkText: </span><span style="color:#032F62;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p><a href="https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts" target="_blank" rel="noreferrer">These options</a> can be overridden. Refer official Algolia docs to learn more about them.</p><h3 id="crawler-config" tabindex="-1">Crawler Config <a class="header-anchor" href="#crawler-config" aria-label="Permalink to &quot;Crawler Config&quot;">​</a></h3><p>Here is an example config based on what this site uses:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Crawler</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  rateLimit: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  startUrls: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  renderJavaScript: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  sitemaps: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  exclusionPatterns: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  ignoreCanonicalTo: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  discoveryPatterns: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  schedule: </span><span style="color:#9ECBFF;">&#39;at 05:10 on Saturday&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      indexName: </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      pathsToMatch: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">recordExtractor</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">$</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">helpers</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> helpers.</span><span style="color:#B392F0;">docsearch</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          recordProps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl1: </span><span style="color:#9ECBFF;">&#39;.content h1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            content: </span><span style="color:#9ECBFF;">&#39;.content p, .content li&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl0: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              selectors: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              defaultValue: </span><span style="color:#9ECBFF;">&#39;Documentation&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl2: </span><span style="color:#9ECBFF;">&#39;.content h2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl3: </span><span style="color:#9ECBFF;">&#39;.content h3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl4: </span><span style="color:#9ECBFF;">&#39;.content h4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            lvl5: </span><span style="color:#9ECBFF;">&#39;.content h5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          indexHeadings: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  initialIndexSettings: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    vitepress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributesForFaceting: [</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;lang&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributesToRetrieve: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;anchor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributesToHighlight: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hierarchy_camel&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributesToSnippet: [</span><span style="color:#9ECBFF;">&#39;content:10&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      camelCaseAttributes: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hierarchy_radio&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      searchableAttributes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      distinct: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributeForDistinct: </span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      customRanking: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;desc(weight.pageRank)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;desc(weight.level)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;asc(weight.position)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      ranking: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;words&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;filters&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;typo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;attribute&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;proximity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;exact&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;custom&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      highlightPreTag: </span><span style="color:#9ECBFF;">&#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      highlightPostTag: </span><span style="color:#9ECBFF;">&#39;&lt;/span&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minWordSizefor1Typo: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minWordSizefor2Typos: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      allowTyposOnNumericTokens: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minProximity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ignorePlurals: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      advancedSyntax: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      attributeCriteriaComputedByMinProximity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      removeWordsIfNoResults: </span><span style="color:#9ECBFF;">&#39;allOptional&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Crawler</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  rateLimit: </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  startUrls: [</span><span style="color:#032F62;">&#39;https://vitepress.dev/&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  renderJavaScript: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  sitemaps: [],</span></span>
<span class="line"><span style="color:#24292E;">  exclusionPatterns: [],</span></span>
<span class="line"><span style="color:#24292E;">  ignoreCanonicalTo: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  discoveryPatterns: [</span><span style="color:#032F62;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  schedule: </span><span style="color:#032F62;">&#39;at 05:10 on Saturday&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  actions: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      indexName: </span><span style="color:#032F62;">&#39;vitepress&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      pathsToMatch: [</span><span style="color:#032F62;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">recordExtractor</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">$</span><span style="color:#24292E;">, </span><span style="color:#E36209;">helpers</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> helpers.</span><span style="color:#6F42C1;">docsearch</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          recordProps: {</span></span>
<span class="line"><span style="color:#24292E;">            lvl1: </span><span style="color:#032F62;">&#39;.content h1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            content: </span><span style="color:#032F62;">&#39;.content p, .content li&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            lvl0: {</span></span>
<span class="line"><span style="color:#24292E;">              selectors: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              defaultValue: </span><span style="color:#032F62;">&#39;Documentation&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            lvl2: </span><span style="color:#032F62;">&#39;.content h2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            lvl3: </span><span style="color:#032F62;">&#39;.content h3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            lvl4: </span><span style="color:#032F62;">&#39;.content h4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            lvl5: </span><span style="color:#032F62;">&#39;.content h5&#39;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          indexHeadings: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  initialIndexSettings: {</span></span>
<span class="line"><span style="color:#24292E;">    vitepress: {</span></span>
<span class="line"><span style="color:#24292E;">      attributesForFaceting: [</span><span style="color:#032F62;">&#39;type&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;lang&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      attributesToRetrieve: [</span><span style="color:#032F62;">&#39;hierarchy&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;content&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;anchor&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      attributesToHighlight: [</span><span style="color:#032F62;">&#39;hierarchy&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;hierarchy_camel&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;content&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      attributesToSnippet: [</span><span style="color:#032F62;">&#39;content:10&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      camelCaseAttributes: [</span><span style="color:#032F62;">&#39;hierarchy&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;hierarchy_radio&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;content&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      searchableAttributes: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl2)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl2)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl4)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl4)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio_camel.lvl6)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_radio.lvl6)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl0)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl1)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl2)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl2)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl3)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl4)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl4)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl5)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy_camel.lvl6)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;unordered(hierarchy.lvl6)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      distinct: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      attributeForDistinct: </span><span style="color:#032F62;">&#39;url&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      customRanking: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;desc(weight.pageRank)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;desc(weight.level)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;asc(weight.position)&#39;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      ranking: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;words&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;filters&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;typo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;attribute&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;proximity&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;exact&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;custom&#39;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      highlightPreTag: </span><span style="color:#032F62;">&#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      highlightPostTag: </span><span style="color:#032F62;">&#39;&lt;/span&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minWordSizefor1Typo: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minWordSizefor2Typos: </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      allowTyposOnNumericTokens: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minProximity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      ignorePlurals: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      advancedSyntax: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      attributeCriteriaComputedByMinProximity: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      removeWordsIfNoResults: </span><span style="color:#032F62;">&#39;allOptional&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,34),c=[e];function r(t,E,y,i,d,F){return n(),a("div",null,c)}const m=s(o,[["render",r]]);export{u as __pageData,m as default};
