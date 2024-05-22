import{_ as s,c as i,o as a,a4 as h}from"./chunks/framework.CqZjjoIK.js";const E=JSON.parse('{"title":"Command line interface","description":"","frontmatter":{"outline":3},"headers":[],"relativePath":"docs/cli.md","filePath":"docs/cli.md"}'),k={name:"docs/cli.md"},n=h(`<h1 id="command-line-interface" tabindex="-1">Command line interface <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;Command line interface&quot;">​</a></h1><p>For an overview of CLI commands, run <code>wallowa help</code>.</p><p>For help with a specific command, run <code>wallowa help &lt;COMMAND&gt;</code> where <code>&lt;COMMAND&gt;</code> is the name of the command to view the help for.</p><h3 id="wallowa-help" tabindex="-1"><code>wallowa help</code> <a class="header-anchor" href="#wallowa-help" aria-label="Permalink to &quot;\`wallowa help\`&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> measuring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aspects</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Software</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Development</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Life</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (SDLC).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallowa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [OPTIONS] [COMMAND]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Commands:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configured</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  serve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Serve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> given</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subcommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CONFI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">G</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WALLOWA_CONFIG=]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wallowa.config.toml]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --log-format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOG_FORMA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accepted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal-friendly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (the </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> richer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> similar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pretty</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newline-delimited</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://docs.rs/tracing-subscriber/latest/tracing_subscriber/fmt/#formatters</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more details. [env: WALLOWA_LOG_FORMAT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [default: terminal]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><h3 id="wallowa-fetch" tabindex="-1"><code>wallowa fetch</code> <a class="header-anchor" href="#wallowa-fetch" aria-label="Permalink to &quot;\`wallowa fetch\`&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configured</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sources</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [OPTIONS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CONFI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">G</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WALLOWA_CONFIG=]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wallowa.config.toml]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --log-format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOG_FORMA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accepted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal-friendly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (the </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> richer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> similar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pretty</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newline-delimited</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://docs.rs/tracing-subscriber/latest/tracing_subscriber/fmt/#formatters</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more details. [env: WALLOWA_LOG_FORMAT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [default: terminal]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span></code></pre></div><h3 id="wallowa-new" tabindex="-1"><code>wallowa new</code> <a class="header-anchor" href="#wallowa-new" aria-label="Permalink to &quot;\`wallowa new\`&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [OPTIONS] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Arguments:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CONFI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">G</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WALLOWA_CONFIG=]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wallowa.config.toml]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --log-format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOG_FORMA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accepted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal-friendly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (the </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> richer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> similar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pretty</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newline-delimited</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://docs.rs/tracing-subscriber/latest/tracing_subscriber/fmt/#formatters</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more details. [env: WALLOWA_LOG_FORMAT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [default: terminal]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span></code></pre></div><h3 id="wallowa-serve" tabindex="-1"><code>wallowa serve</code> <a class="header-anchor" href="#wallowa-serve" aria-label="Permalink to &quot;\`wallowa serve\`&quot;">​</a></h3><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The server should not be exposed directly to the Internet since it has not been hardened for that environment. Run a proxy in front of the server if you choose to expose it to the Internet.</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Serve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> web</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallowa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [OPTIONS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CONFI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">G</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [env: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WALLOWA_CONFIG=]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wallowa.config.toml]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      --log-format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LOG_FORMA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Accepted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal-friendly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (the </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> richer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> human-readable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> messages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">compact</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> similar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> less</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pretty</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multi-line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">full</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> newline-delimited</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSON</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://docs.rs/tracing-subscriber/latest/tracing_subscriber/fmt/#formatters</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                 for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more details. [env: WALLOWA_LOG_FORMAT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [default: terminal]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     Print</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span></span></code></pre></div>`,12),l=[n];function t(p,F,e,r,d,g){return a(),i("div",null,l)}const C=s(k,[["render",t]]);export{E as __pageData,C as default};