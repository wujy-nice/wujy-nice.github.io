import{V as n}from"./chunks/theme.99b3a1d7.js";import{o as l,c as p,H as e,l as o,S as s}from"./chunks/framework.c59ae78c.js";const t=s(`<h1 id="team-page" tabindex="-1">Team Page <a class="header-anchor" href="#team-page" aria-label="Permalink to &quot;Team Page&quot;">​</a></h1><p>If you would like to introduce your team, you may use Team components to construct the Team Page. There are two ways of using these components. One is to embed it in doc page, and another is to create a full Team Page.</p><h2 id="show-team-members-in-a-page" tabindex="-1">Show team members in a page <a class="header-anchor" href="#show-team-members-in-a-page" aria-label="Permalink to &quot;Show team members in a page&quot;">​</a></h2><p>You may use <code>&lt;VPTeamMembers&gt;</code> component exposed from <code>vitepress/theme</code> to display a list of team members on any page.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VPTeamMembers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">members</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: </span><span style="color:#9ECBFF;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Evan You&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Creator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;twitter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;members&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { VPTeamMembers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">members</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: </span><span style="color:#032F62;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Evan You&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Creator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;twitter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;members&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>The above will display a team member in card looking element. It should display something similar to below.</p>`,6),c=s(`<p><code>&lt;VPTeamMembers&gt;</code> component comes in 2 different sizes, <code>small</code> and <code>medium</code>. While it boils down to your preference, usually <code>small</code> size should fit better when used in doc page. Also, you may add more properties to each member such as adding &quot;description&quot; or &quot;sponsor&quot; button. Learn more about it in <a href="#vpteammembers"><code>&lt;VPTeamMembers&gt;</code></a>.</p><p>Embedding team members in doc page is good for small size team where having dedicated full team page might be too much, or introducing partial members as a reference to documentation context.</p><p>If you have large number of members, or simply would like to have more space to show team members, consider <a href="#create-a-full-team-page">creating a full team page</a>.</p><h2 id="create-a-full-team-page" tabindex="-1">Create a full Team Page <a class="header-anchor" href="#create-a-full-team-page" aria-label="Permalink to &quot;Create a full Team Page&quot;">​</a></h2><p>Instead of adding team members to doc page, you may also create a full Team Page, similar to how you can create a custom <a href="./default-theme-home-page">Home Page</a>.</p><p>To create a team page, first, create a new md file. The file name doesn&#39;t matter, but here lets call it <code>team.md</code>. In this file, set frontmatter option <code>layout: page</code>, and then you may compose your page structure using <code>TeamPage</code> components.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">layout: page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">members</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: </span><span style="color:#9ECBFF;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Evan You&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Creator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;twitter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Our Team</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#E1E4E8;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;members&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">layout: page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">members</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: </span><span style="color:#032F62;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Evan You&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Creator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;twitter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Our Team</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#24292E;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;members&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>When creating a full team page, remember to wrap all components with <code>&lt;VPTeamPage&gt;</code> component. This component will ensure all nested team related components get the proper layout structure like spacings.</p><p><code>&lt;VPPageTitle&gt;</code> component adds the page title section. The title being <code>&lt;h1&gt;</code> heading. Use <code>#title</code> and <code>#lead</code> slot to document about your team.</p><p><code>&lt;VPMembers&gt;</code> works as same as when used in a doc page. It will display list of members.</p><h3 id="add-sections-to-divide-team-members" tabindex="-1">Add sections to divide team members <a class="header-anchor" href="#add-sections-to-divide-team-members" aria-label="Permalink to &quot;Add sections to divide team members&quot;">​</a></h3><p>You may add &quot;sections&quot; to the team page. For example, you may have different types of team members such as Core Team Members and Community Partners. You can divide these members into sections to better explain the roles of each group.</p><p>To do so, add <code>&lt;VPTeamPageSection&gt;</code> component to the <code>team.md</code> file we created previously.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">layout: page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageSection</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">coreMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">partners</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Our Team&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;medium&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;coreMembers&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Partners&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#members</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;partners&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">layout: page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageSection</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">coreMembers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">partners</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Our Team&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;medium&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;coreMembers&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Partners&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#members</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;partners&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>The <code>&lt;VPTeamPageSection&gt;</code> component can have <code>#title</code> and <code>#lead</code> slot similar to <code>VPTeamPageTitle</code> component, and also <code>#members</code> slot for displaying team members.</p><p>Remember to put in <code>&lt;VPTeamMembers&gt;</code> component within <code>#members</code> slot.</p><h2 id="vpteammembers" tabindex="-1"><code>&lt;VPTeamMembers&gt;</code> <a class="header-anchor" href="#vpteammembers" aria-label="Permalink to &quot;\`&lt;VPTeamMembers&gt;\`&quot;">​</a></h2><p>The <code>&lt;VPTeamMembers&gt;</code> component displays a given list of members.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;medium&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    ...</span></span>
<span class="line"><span style="color:#9ECBFF;">  ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;medium&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    ...</span></span>
<span class="line"><span style="color:#032F62;">  ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Size of each members. Defaults to \`medium\`.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">size</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;small&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;medium&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// List of members to display.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">members</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TeamMember</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TeamMember</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Avatar image for the member.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">avatar</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Name of the member.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Title to be shown below member&#39;s name.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// e.g. Developer, Software Engineer, etc.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Organization that the member belongs.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">org</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// URL for the organization.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">orgLink</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Description for the member.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">desc</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Social links. e.g. GitHub, Twitter, etc. You may pass in</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// the Social Links object here.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// See: https://vitepress.dev/reference/default-theme-config.html#sociallinks</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">links</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SocialLink</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// URL for the sponsor page for the member.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">sponsor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Props</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Size of each members. Defaults to \`medium\`.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">size</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;small&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;medium&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// List of members to display.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">members</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TeamMember</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TeamMember</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Avatar image for the member.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">avatar</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Name of the member.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Title to be shown below member&#39;s name.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// e.g. Developer, Software Engineer, etc.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Organization that the member belongs.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">org</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// URL for the organization.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">orgLink</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Description for the member.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">desc</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Social links. e.g. GitHub, Twitter, etc. You may pass in</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// the Social Links object here.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// See: https://vitepress.dev/reference/default-theme-config.html#sociallinks</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">links</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SocialLink</span><span style="color:#24292E;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// URL for the sponsor page for the member.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">sponsor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="vpteampage" tabindex="-1"><code>&lt;VPTeamPage&gt;</code> <a class="header-anchor" href="#vpteampage" aria-label="Permalink to &quot;\`&lt;VPTeamPage&gt;\`&quot;">​</a></h2><p>The root component when creating a full team page. It only accepts a single slot. It will style all passed in team related components.</p><h2 id="vpteampagetitle" tabindex="-1"><code>&lt;VPTeamPageTitle&gt;</code> <a class="header-anchor" href="#vpteampagetitle" aria-label="Permalink to &quot;\`&lt;VPTeamPageTitle&gt;\`&quot;">​</a></h2><p>Adds &quot;title&quot; section of the page. Best use at the very beginning under <code>&lt;VPTeamPage&gt;</code>. It accepts <code>#title</code> and <code>#lead</code> slot.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Our Team</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#E1E4E8;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Our Team</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#24292E;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="vpteampagesection" tabindex="-1"><code>&lt;VPTeamPageSection&gt;</code> <a class="header-anchor" href="#vpteampagesection" aria-label="Permalink to &quot;\`&lt;VPTeamPageSection&gt;\`&quot;">​</a></h2><p>Creates a &quot;section&quot; with in team page. It accepts <code>#title</code>, <code>#lead</code>, and <code>#members</code> slot. You may add as many sections as you like inside <code>&lt;VPTeamPage&gt;</code>.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Partners&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;Lorem ipsum...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#members</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Partners&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;Lorem ipsum...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#members</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,28),d=JSON.parse('{"title":"Team Page","description":"","frontmatter":{},"headers":[],"relativePath":"reference/default-theme-team-page.md","filePath":"reference/default-theme-team-page.md","lastUpdated":null}'),r={name:"reference/default-theme-team-page.md"},h=Object.assign(r,{setup(E){const a=[{avatar:"https://github.com/yyx990803.png",name:"Evan You",title:"Creator",links:[{icon:"github",link:"https://github.com/yyx990803"},{icon:"twitter",link:"https://twitter.com/youyuxi"}]},{avatar:"https://github.com/kiaking.png",name:"Kia King Ishii",title:"Developer",links:[{icon:"github",link:"https://github.com/kiaking"},{icon:"twitter",link:"https://twitter.com/KiaKing85"}]}];return(y,i)=>(l(),p("div",null,[t,e(o(n),{size:"small",members:a}),c]))}});export{d as __pageData,h as default};
