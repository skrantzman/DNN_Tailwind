<!--#include file="partials/_registers.ascx" -->
<!--#include file="partials/_includes.ascx" -->

<!-- Header/NavBar -->
<!--#include file="partials/_header.ascx" -->

<!-- Main Content -->
<main>
	<div class="bg-gradient-dk_blue-lt_blue">
		<div class="flex items-center justify-center w-full max-w-3xl px-8 mx-auto">
			<div id="BannerPane" class="w-full pt-24 pb-24 text-center hide-if-empty" runat="server"></div>
		</div>
	</div>

	<div class="flex justify-center max-w-3xl px-8 mx-auto mt-16">
		<div id="ContentPane" class="w-full text-center" runat="server"></div>
	</div>

	<div class="flex flex-col items-center justify-center px-8 mx-auto mt-16 space-y-0 md:max-w-6xl md:space-x-6 md:flex-row">
		<div id="DoublePaneOneOne" class="w-full md:w-6/12" runat="server"></div>
		<div id="DoublePaneOneTwo" class="w-full bg-gray-300 bg- md:w-6/12" runat="server"></div>
	</div>

	<div class="bg-dnnbrown-500">
		<div class="flex flex-col items-center justify-center px-8 mx-auto mt-16 space-y-0 md:max-w-6xl md:space-x-6 md:flex-row">
			<div id="FullWidthBGDoublePaneOne" class="w-full md:w-6/12" runat="server"></div>
			<div id="FullWidthBGDoublePaneTwo" class="w-full md:w-6/12" runat="server"></div>
		</div>
	</div>

	<div class="flex justify-center max-w-3xl px-8 mx-auto mt-16">
		<div id="SinglePaneOne" class="w-full text-center" runat="server"></div>
	</div>
</main>

<!-- Footer -->
<!--#include file="partials/_footer.ascx" -->
