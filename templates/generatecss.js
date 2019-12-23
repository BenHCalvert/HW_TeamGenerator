function generateCSS(bgColor) {
	return`	
	body {
		background: rgb(2,0,36);
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
	}
	.container {
		width: 100%;
		height: 100%
	}
	ul {
		list-style-type:none;
		}
	
	/*Responsive code*/
	
	@media (min-width: 576px) {
		.banner{
		height: 200px;
		}
	}
	
	/*Medium devices (tablets, 768px and up)*/
	@media (min-width: 768px) {
		.banner{
		height: 300px;
		}
	}
	
	/*Large devices (desktops, 992px and up)*/
	@media (min-width: 992px) {
		.banner{
		height: 400px;
		}
	}
	
	/*Extra large devices (large desktops, 1200px and up)*/
	@media (min-width: 1200px) {
	
}
	`;
}

module.exports = generateCSS;