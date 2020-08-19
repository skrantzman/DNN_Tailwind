<header class="bg-gray-300">
	<div class="flex items-center h-12 bg-tertiary">
		<div class="w-full max-w-6xl mx-auto">
			<div class="flex justify-end user-controls md:mr-4 xl:mr-0">
				<ul>
					<li><dnn:Login runat="server" id="dnnLogin" /></li>
					<li><dnn:User runat="server" id="dnnUser" /></li>
					<li><dnn:Search runat="server" id="dnnSearch" ShowSite="false" ShowWeb="false" Submit="<i class='fas fa-search'></i>" /></li>
					<li style="display: none;"><dnn:Language runat="server" id="dnnLanguage" ShowMenu="false" ShowLinks="false" /></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-between w-full max-w-6xl py-4 mx-auto">
		<div class="ml-4">
			<dnn:LOGO id="dnnLOGO" runat="server" CssClass="h-10 sm:h-12" />
		</div>

		<div class="flex flex-row md:mr-4 xl:mr-0 nav-main">
			<nav class="nav-items">
				<dnn:MENU id="menu" MenuStyle="menus/razor" runat="server" NodeSelector="*"></dnn:MENU>
			</nav>
		</div>
	</div>
</header>
