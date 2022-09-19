<script>
	import { LOREM } from '$lib/utils/lorem';
</script>

<h1>Title 1</h1>
<h2>Title 2</h2>
<h3>Title 3</h3>
<h4>Title 4</h4>
<h5>Title 5</h5>
<h6>Title 6</h6>

<h2>Paragraph & link</h2>

<p>
	{LOREM.IPSUM}
	<a href="?what=ever">never visited link (just don't click or it will becomes visited)</a>,
	<a href=".">visited link</a>.
</p>

<p>
	{LOREM.MAECENAS}
</p>

<p>
	Normal, <abbr title="Abbreviations">abbr</abbr>, <del>del</del>, <dfn>dfn</dfn>, <em>em</em>,
	<ins>ins</ins>, <mark>mark</mark>, <s>strike through</s>, <small>small</small>,
	<strong>strong</strong>, <sub>sub</sub>, <sup>sup</sup>, <u>u</u>
</p>

<h2>Definition list</h2>

<dl>
	<dt>Definition list</dt>
	<dd>
		Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.
	</dd>
	<dt>Lorem ipsum dolor sit amet</dt>
	<dd>
		Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.
	</dd>
</dl>

<h2>Abbreviation</h2>

<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

<h2>Blockquote</h2>

<blockquote cite="http://www.worldwildlife.org/who/index.html">
	For 50 years, WWF has been protecting the future of nature. The world's leading conservation
	organization, WWF works in 100 countries and is supported by 1.2 million members in the United
	States and close to 5 million globally.
</blockquote>

<h2>Citation</h2>

<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

<h2>Code</h2>

<p>
	This is inline code <code>&lt;div&gt;div element&lt;/div&gt;</code>. This is sample output
	<samp>sample</samp> And below is block code.
</p>

<pre>Block of code</pre>

<p>
	The input keyboard <kbd>Ctrl</kbd>+<kbd>S</kbd>. This is variable: <var>y</var> = <var>m</var><var
		>x</var
	>
	+ <var>b</var>
</p>

<h2>Table</h2>

<table>
	<caption>Monthly savings</caption>
	<thead>
		<tr>
			<th colspan="2">Number of</th>
			<th>B</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th>Table footer</th>
			<th>Table footer</th>
			<th>Table footer</th>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<td rowspan="2">grown up</td>
			<td>parents</td>
			<td>123 456</td>
		</tr>
		<tr>
			<td>children</td>
			<td>234 567</td>
		</tr>
	</tbody>
</table>

<h2>Details and summary</h2>

<details>
	<summary>first summary</summary>
	<p>{LOREM.IPSUM}</p>

	<details>
		<summary>second summary</summary>
		<p>{LOREM.IPSUM}</p>
	</details>
</details>

<h2>Lists</h2>

<ul>
	<li>item 1</li>
	<li>
		item 2
		<ul>
			<li>item 1</li>
			<li>item 2</li>
			<li>item 3</li>
		</ul>
	</li>
	<li>item 3</li>
</ul>

<ol>
	<li>item 1</li>
	<li>
		item 2
		<ol>
			<li>item 1</li>
			<li>item 2</li>
			<li>item 3</li>
		</ol>
	</li>
	<li>item 3</li>
</ol>

<h2>Form</h2>
<form>
	<label>
		Text
		<input type="text" placeholder="test" required />
	</label>
	<label>
		Text disabled
		<input type="text" placeholder="test" disabled />
	</label>
	<label>
		Number
		<input type="number" />
	</label>
	<label>
		Password
		<input type="password" />
	</label>
	<fieldset>
		<legend>Input radio</legend>
		<div class="fieldset-fields">
			<label><input type="radio" /> Input radio option 1</label>
			<label><input type="radio" disabled /> Input radio option 2</label>
		</div>
	</fieldset>
	<fieldset>
		<legend>Input checkbox</legend>
		<div class="fieldset-fields">
			<label><input type="checkbox" /> Input checkbox 1</label>
			<label><input type="checkbox" disabled /> Input checkbox 2</label>
		</div>
	</fieldset>
	<label>
		Textarea
		<textarea />
	</label>
	<label>
		Select
		<select>
			<option>item 1</option>
			<option>item 2</option>
			<option>item 3</option>
		</select>
	</label>
	<label>
		Select multiple
		<select multiple>
			<option>item 1</option>
			<option>item 2</option>
			<option>item 3</option>
		</select>
	</label>
	<input id="input-file" type="file" />
	<label for="input-file" data-accept=".xml, .json"> file </label>
	<label>
		color
		<input type="color" />
	</label>
</form>

<h2>Button</h2>

<button>Plain button</button>
<input type="submit" value="Form validation button" />

<h2>Horizontal line</h2>

<hr />

<h2>Scroll bar</h2>

<div style:height="100px" style:width="300px" style:overflow="auto" style:background-color="white">
	<div style:height="200px" style:width="600px" />
</div>
