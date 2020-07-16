<footer class="bg-gray-300">
	<div class="container mx-auto">
		<div class="flex justify-between py-5">
			<div id="FooterPaneOne" class="" runat="server"></div>
			<div id="FooterPaneTwo" class="" runat="server"></div>
			<div id="FooterPaneThree" class="" runat="server"></div>
		</div>
	</div>
	<div class="h-12 text-xs text-white bg-dnnred-500">
		<div class="flex items-center justify-center py-4">
			<ul>
				<li class="inline-block mx-1"><dnn:COPYRIGHT id="dnnCopyright" runat="server" /></li>
				<li class="inline-block mx-1">
					|
				</li>
				<li class="inline-block mx-1"><dnn:TERMS id="dnnTerms" runat="server" /></li>
				<li class="inline-block mx-1">
					|
				</li>
				<li class="inline-block mx-1"><dnn:PRIVACY id="dnnPrivacy" runat="server" /></li>
			</ul>
		</div>
	</div>

	<dnn:Login runat="server" id="dnnHiddenLogin" CssClass="hidden" />
</footer>
<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
	integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
	crossorigin="anonymous"
/>
