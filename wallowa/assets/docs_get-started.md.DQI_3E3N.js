import{_ as a,c as e,o as i,a4 as t}from"./chunks/framework.w9Oelmv5.js";const g=JSON.parse('{"title":"Get started","description":"","frontmatter":{},"headers":[],"relativePath":"docs/get-started.md","filePath":"docs/get-started.md"}'),s={name:"docs/get-started.md"},l=t('<h1 id="get-started" tabindex="-1">Get started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get started&quot;">​</a></h1><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h3><p><code>wallowa</code> deploys as a <a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker</a> container with data stored in a <a href="http://duckdb.org/" target="_blank" rel="noreferrer">DuckDB</a> database file. If you&#39;d rather not use Docker you can <a href="#build-from-source">build a <code>wallowa</code> binary from source</a>.</p><h3 id="start-your-first-project" tabindex="-1">Start your first project <a class="header-anchor" href="#start-your-first-project" aria-label="Permalink to &quot;Start your first project&quot;">​</a></h3><ol><li>Navigate to the directory you&#39;d like as the parent to your <code>wallowa</code> project directory</li><li>Run <code>wallowa new MY-PROJECT</code>, replacing <code>MY-PROJECT</code> with the name of your project:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .:/usr/wallowa:rw</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:9843:9843</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gunrein/wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MY-PROJECT</span></span></code></pre></div><ol start="3"><li>Change directory into the new project:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MY-PROJECT</span></span></code></pre></div><ol start="4"><li>Add a <a href="./configuration.html#github-auth-token">GitHub auth token to the <code>.env</code> file</a></li><li>Configure your project by editing <code>wallowa.config.toml</code> with a convenient text editor. The default file contains an overview of each setting and there is <a href="./configuration.html">documentation for all configuration options</a>.</li><li>Fetch data for the first time using <a href="./cli.html#wallowa-fetch">the <code>wallowa fetch</code> CLI command</a>:<div class="info custom-block"><p class="custom-block-title">This will take a while the first time if your repo(s) have a large number of PRs</p></div></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .:/usr/wallowa:rw</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:9843:9843</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gunrein/wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span></span></code></pre></div><ol start="7"><li>Start the server using <a href="./cli.html#wallowa-serve">the <code>wallowa serve</code> CLI command</a>:</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .:/usr/wallowa:rw</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.0.0.1:9843:9843</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --platform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gunrein/wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span></span></code></pre></div><ol start="8"><li>Open your browser to <a href="http://localhost:9843/" target="_blank" rel="noreferrer">http://localhost:9843/</a></li><li>Explore what&#39;s available and check out the documentation for the <a href="./web-ui.html">web UI</a> and <a href="./cli.html">CLI</a></li></ol><p>Thanks for using <code>wallowa</code>!</p><h3 id="build-from-source" tabindex="-1">Build from source <a class="header-anchor" href="#build-from-source" aria-label="Permalink to &quot;Build from source {#build-from-source}&quot;">​</a></h3><ol><li>Install build-time dependencies <ul><li>A recent version of <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">NPM</a></li><li>A recent version of the <a href="https://www.rust-lang.org/learn/get-started" target="_blank" rel="noreferrer">Rust toolchain</a></li></ul></li><li>Download the <a href="https://github.com/gunrein/wallowa/tags" target="_blank" rel="noreferrer">source code for the tagged version you&#39;re building</a></li><li>In the root directory of the source code, run: <ol><li><code>npm install</code></li><li><code>npm run build</code></li></ol></li><li>Use the newly-built binary at <code>target/release/wallowa</code></li></ol>',16),r=[l];function o(n,h,d,c,p,k){return i(),e("div",null,r)}const F=a(s,[["render",o]]);export{g as __pageData,F as default};
