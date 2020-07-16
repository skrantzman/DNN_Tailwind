<!--#include file="partials/_registers.ascx" -->
<!--#include file="partials/_includes.ascx" -->

<!-- Header/NavBar -->
<!--#include file="partials/_header.ascx" -->

<!-- Main Content -->
<main>
	<div class="bg-dnnblue-400">
		<div class="flex justify-center">
			<div id="BannerPane" class="w-full text-center lg:w-8/12" runat="server"></div>
		</div>
	</div>

	<div class="flex justify-center">
		<div id="ContentPane" class="w-full text-center lg:w-8/12" runat="server"></div>
	</div>

	<div class="container">
		<div class="row">
			<div id="DoublePaneOneOne" class="col-md-6 cpr-5" runat="server"></div>
			<div id="DoublePaneOneTwo" class="col-md-6 bg-light-grey cp-5" runat="server"></div>
		</div>
	</div>

	<div class="container-fluid bg-tertiary">
		<div class="container">
			<div class="row align-items-center">
				<div id="FullWidthBGDoublePaneOne" class="col-md-6 cpy-5" runat="server"></div>
				<div id="FullWidthBGDoublePaneTwo" class="col-md-6" runat="server"></div>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row justify-content-center">
			<div id="SinglePaneOne" class="text-center col-md-8" runat="server"></div>
		</div>
	</div>
</main>

<!-- Footer -->
<!--#include file="partials/_footer.ascx" -->
