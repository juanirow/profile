<template>
	<header class="header">
		<nav class="navbar navbar-custom" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>

				<div class="collapse navbar-collapse" id="custom-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#resume">Resume</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div><!-- .container -->
		</nav>
	</header>
</template>

<script>
export default {
 name: 'Header'
}
</script>
