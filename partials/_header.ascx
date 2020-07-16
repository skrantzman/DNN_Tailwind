<header class="bg-gray-100">
	<div class="flex items-center h-12 bg-dnnbrown-500">
		<div class="container mx-auto">
			<ul class="flex items-center justify-end">
				<li class="inline-block ml-4 text-white"><dnn:Login runat="server" id="dnnLogin" /></li>
				<li class="inline-block ml-4 text-white"><dnn:User runat="server" id="dnnUser" /></li>
				<li class="inline-block ml-4 text-white">
					<dnn:Search runat="server" id="dnnSearch" ShowSite="false" ShowWeb="false" Submit="<i class='ml-2 fas fa-search'></i>" CssClass="h-10" />
				</li>
				<li style="display: none;"><dnn:Language runat="server" id="dnnLanguage" ShowMenu="false" ShowLinks="false" /></li>
			</ul>
		</div>
	</div>
	<div class="container flex items-center justify-between py-4 mx-auto">
		<div>
			<dnn:LOGO id="dnnLOGO" runat="server" CssClass="h-8" />
		</div>

		<nav class="flex-row items-center justify-center text-gray-900">
			<dnn:MENU id="menu" MenuStyle="menus/razor" runat="server" NodeSelector="*"></dnn:MENU>
		</nav>
	</div>
</header>
