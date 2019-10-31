<!DOCTYPE html>
<html>
<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" /> 
        <meta name="robots" content="index, follow">
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="theme-color" content="#333" />
		<link rel="manifest" href="manifest.json" />
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<link rel="icon" type="image/png" href="https://res.cloudinary.com/thecavemann/image/upload/v1571839870/logo_g4kuoa.png"/>
        
        <link rel="stylesheet" type="text/css" href="https://dl.dropbox.com/s/v5nuo2k9pvuoogf/rose.css">
        <link rel="stylesheet" type="text/css" href="https://dl.dropbox.com/s/j4fpnd5yvaexq0c/docufixHomepage.css">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap"
            rel="stylesheet"
        />
        <link 
        	rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"
        />
  		<link 
  			rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"
  		/>
        <title>Docufix | Compare Files</title>
        <meta name="description" content="Docufix HNG Intership Project" />
        <script type="text/javascript" src ="//widget.instabot.io/jsapi/rokoInstabot.js" crossorigin>
		apiKey: "vXj90M2ifAvu8fS739jFKepTXtES72ur59sGR5TPK9c="
		</script>
		<style>
			body {
				overflow-x: hidden;
			}
			.contain {
				text-align: center;
			}
			@media(min-width: 800px) {
				.content1 {
					margin-top: 7rem !important;
				}
				.contain {
					text-align: left;
				}
			}

			#btn-link button {
				border: none;
				outline: none;
				padding: 0.5rem 1rem;
				color: #fff;
				border-radius: 10px;
				background: #141460;
				margin: 1.5rem 0.5rem 0.5rem 0.5rem;
				transition: transform .5s;
			}

			button a {
				text-decoration: none;
				color: #fff;
			}

			button a:hover {
				text-decoration: none;
				color: #fff
			}

			#btn-link button:hover {
				transform: scale(0.9);
			}

			@keyframes bottom {
				from {
					transform: translateY(50%);
					opacity: 0;
				}
				to {
					transform: translateY(0);
					opacity: 1;
				}
			}

			@keyframes left {
				from {
					transform: translateX(-50%);
					opacity: 0;
				}
				to {
					transform: translateX(0);
					opacity: 1;
				}
			}
			@keyframes right {
				from {
					transform: translateX(50%);
					opacity: 0;
				}
				to {
					transform: translateX(0);
					opacity: 1;
				}
			}
			
			.anime-head {
			    animation: head 1s ease-in-out;
			}
			
			@keyframes head {
			    0% {
			        transform: translateX(-50%);
			    }
			    100% {
			        transform: translateX(0);
			    }
			}
			
			#anime-txt {
			    animation: txt 1s 1s ease-in-out forwards;
			    opacity: 0;
			}
			
			@keyframes txt {
			    0% {
			        opacity: 0;
			    }
			    100% {
			        opacity: 1;
			    }
			}
			
			#btn-one {
			    animation: btnOne .7s 1.5s ease-in-out forwards;
			    opacity: 0;
			}
			
			@keyframes btnOne {
				from {
					transform: translateY(50%);
					opacity: 0;
				}
				to {
					transform: translateY(0);
					opacity: 1;
				}
			}
			
			#btn-two {
			    animation: btnTwo .7s 2s ease-in-out forwards;
			    opacity: 0;
			}
			
			@keyframes btnTwo {
				from {
					transform: translateY(50%);
					opacity: 0;
				}
				to {
					transform: translateY(0);
					opacity: 1;
				}
			}

			@keyframes pop {
        from {
          transform: scale(0);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
		</style>
    </head>
<body>
	<header>
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
		    <a class="navbar-brand" href="index.html" id="logo">
		      <svg width="321" height="100" viewBox="0 0 321 100" fill="none" xmlns="http://www.w3.org/2000/svg">
		        <path d="M37.5171 38.9927C37.5171 45.4559 35.673 50.4062 31.9849 53.8438C28.3146 57.2812 23.0062 59 16.0596 59H4.94141V19.7373H17.2681C23.6776 19.7373 28.6548 21.4292 32.1997 24.813C35.7446 28.1968 37.5171 32.9233 37.5171 38.9927ZM28.8696 39.2075C28.8696 30.7749 25.1457 26.5586 17.6978 26.5586H13.2666V52.125H16.8384C24.8592 52.125 28.8696 47.8192 28.8696 39.2075ZM86.7915 39.3149C86.7915 45.814 85.1802 50.8091 81.9575 54.3003C78.7349 57.7915 74.1157 59.5371 68.1001 59.5371C62.0845 59.5371 57.4653 57.7915 54.2427 54.3003C51.02 50.8091 49.4087 45.7961 49.4087 39.2612C49.4087 32.7264 51.02 27.7402 54.2427 24.3027C57.4832 20.8473 62.1203 19.1196 68.1538 19.1196C74.1873 19.1196 78.7975 20.8563 81.9844 24.3296C85.1891 27.8029 86.7915 32.798 86.7915 39.3149ZM58.1367 39.3149C58.1367 43.7013 58.9692 47.0046 60.6343 49.2246C62.2993 51.4447 64.7879 52.5547 68.1001 52.5547C74.7424 52.5547 78.0635 48.1414 78.0635 39.3149C78.0635 30.4705 74.7603 26.0483 68.1538 26.0483C64.8416 26.0483 62.3441 27.1673 60.6611 29.4053C58.9782 31.6253 58.1367 34.9285 58.1367 39.3149ZM117.106 26.1021C113.973 26.1021 111.547 27.2837 109.828 29.647C108.109 31.9924 107.25 35.2687 107.25 39.4761C107.25 48.231 110.535 52.6084 117.106 52.6084C119.863 52.6084 123.202 51.9191 127.123 50.5405V57.5229C123.9 58.8657 120.302 59.5371 116.327 59.5371C110.616 59.5371 106.247 57.8094 103.222 54.354C100.196 50.8807 98.6831 45.9035 98.6831 39.4224C98.6831 35.3403 99.4261 31.7686 100.912 28.707C102.398 25.6276 104.529 23.2733 107.304 21.644C110.097 19.9969 113.364 19.1733 117.106 19.1733C120.919 19.1733 124.751 20.0954 128.6 21.9395L125.915 28.707C124.446 28.0088 122.969 27.4001 121.483 26.8809C119.997 26.3617 118.538 26.1021 117.106 26.1021ZM172.96 19.7373V45.1426C172.96 48.043 172.306 50.5853 171 52.7695C169.71 54.9538 167.84 56.6278 165.387 57.7915C162.934 58.9552 160.034 59.5371 156.686 59.5371C151.637 59.5371 147.716 58.248 144.923 55.6699C142.13 53.0739 140.733 49.529 140.733 45.0352V19.7373H149.032V43.7729C149.032 46.7987 149.64 49.0187 150.858 50.4331C152.075 51.8475 154.09 52.5547 156.9 52.5547C159.622 52.5547 161.591 51.8475 162.809 50.4331C164.044 49.0008 164.662 46.7629 164.662 43.7192V19.7373H172.96ZM196.265 59H188.074V19.7373H210.579V26.5586H196.265V36.6831H209.585V43.4775H196.265V59ZM223.76 59V19.7373H232.085V59H223.76Z" fill="white"/>
		        <path d="M267.093 12.1182L268.688 10.689C269.728 9.75781 269.508 8.2006 268.254 7.5265L256.171 1.02961C252.999 -0.672068 248.963 -0.227882 246.357 2.11339C243.744 4.45278 243.248 8.06934 245.147 10.908L252.397 21.734C253.151 22.8589 254.897 23.0539 255.927 22.1229L257.524 20.6937L269.729 31.6137L279.288 23.0471L267.093 12.1182Z" fill="white"/>
		        <path d="M319.462 8.04977C318.8 6.80386 316.94 6.49363 315.832 7.49103L309.996 12.7205C309.141 13.4865 307.661 13.4865 306.806 12.7205C305.927 11.9328 305.927 10.6497 306.806 9.86195L312.642 4.63253C313.74 3.64888 313.424 1.97968 312.018 1.37916C305.989 -1.20294 298.767 -0.0915298 294.044 4.14481C289.706 8.02982 288.305 13.8041 290.332 18.9032L265.094 41.5186C259.408 39.7023 252.962 40.9579 248.624 44.845C243.899 49.0794 242.658 55.5525 245.538 60.9517C246.209 62.2146 248.073 62.4914 249.168 61.5104L255.004 56.281C255.885 55.4953 257.317 55.4933 258.194 56.283C259.073 57.0664 259.079 58.3421 258.194 59.1395L252.358 64.3689C251.26 65.3526 251.576 67.0218 252.982 67.6223C255.147 68.5499 257.467 69 259.771 69C263.877 69 267.929 67.5688 270.953 64.8564C275.293 60.9714 276.692 55.1971 274.665 50.098L299.904 27.4829C305.588 29.2971 312.036 28.0435 316.376 24.1565C321.101 19.922 322.342 13.449 319.462 8.04977Z" fill="white"/>
		        <path d="M317.67 51.9063C310.012 45.0694 305.814 42.3531 296.837 36.0972L284.079 47.5306C290.389 54.7891 294.21 59.4707 301.376 65.8947C303.72 67.9951 306.835 68.975 309.9 68.975C312.149 68.975 314.37 68.4965 316.236 67.2944C318.956 65.5374 320.67 62.8309 320.937 59.8718C321.203 56.9087 320.014 54.0066 317.67 51.9063ZM311.172 60.2011C310.274 60.9343 308.875 60.8639 308.016 60.0941L299.082 52.0884C298.223 51.3186 298.144 50.0646 298.962 49.2598C299.836 48.4008 301.32 48.3775 302.227 49.1897L311.25 57.2756C312.157 58.0881 312.131 59.4185 311.172 60.2011Z" fill="white"/>
		      </svg>
		    </a>
		    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="btn">
		      <span><i class="fa fa-bars" aria-hidden="true" id="toggle"></i></span>
		    </button>
		    <div class="collapse navbar-collapse" id="navbarNavDropdown">
		      <ul class="navbar-nav">
		        <li class="nav-item active">
		          <a class="nav-link" href="about_us.html">About Us<span class="sr-only">(current)</span></a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" href="teampage.html">Team</a>
		        </li>
		        <li class="nav-item dropdown">
		          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		            Tools
		          </a>
		          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		            <a class="dropdown-item" href="fileUpload.html">Compare files</a>
		            <a class="dropdown-item" href="fileDelimiter.html">Check for duplicates</a>
		          </div>
		        </li>
		        <li class="nav-item dropdown">
		            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		              Support
		            </a>
		            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		              <a class="dropdown-item" href="faq.html">FAQ</a>
		              <a class="dropdown-item" href="userguide.html">User guide</a>
		              <a class="dropdown-item" href="use.html">Why use Docufix</a>
		              <a class="dropdown-item" href="feedback.html">Feedback</a>
		              <a class="dropdown-item" href="privacy.html">Privacy policy</a>
		              <a class="dropdown-item" href="t&c.html">Terms & Conditions</a>
		            </div>
		          </li>
		          <li class="nav-item">
		            <a class="nav-link" href="donation.html" target="_blank">Pricing</a>
		          </li>
				  
				  <li class="nav-item">
		            <a class="nav-link" href="signup.php" target="_blank">Sign Up</a>
				  </li>
				  
				  <li class="nav-item">
		            <a class="nav-link" href="login.php" target="_blank">Sign In</a>
				  </li>

		      </ul>
		    </div>
		  </nav>
		</div>
	</header>
	<div style="background: linear-gradient(230.94deg, #D7B1F6 -15.75%, #404CB7 87.3%); padding-bottom: 40px;" class="contain">
		<div class="container">
		  <div class="row">
		    <div class="col-md-6 content1">
		      <h2 class="anime-head">Document Comparison <br>Solution</h2>
		      <img src="https://res.cloudinary.com/ros4eva/image/upload/v1571850647/Group35_oixima.png" class="img-fluid img4mobile anime-img">
		      <span id="anime-txt">Compare documents content and find out the differences in each content of the files without much stress</span>
		    </div>
		    <div class="col-md-6 content-img">
		      <img src="https://res.cloudinary.com/ros4eva/image/upload/v1571850647/Group35_oixima.png" class="img-fluid anime-img">
		    </div>
		</div>
	    <div class="row">
		    <div class="col " align="center" id="btn-link">
					<button id="btn-one">
						<a href="fileUpload.html">Compare Files</a>
					</button>
					<button id="btn-two">
						<a href="fileDelimiter.html">Check For Duplicates</a>
					</button>
					
		    </div>
		  </div>
		 </div>
	</div>

	<div class="container content2" align="center">
		<h2 class="left">Our Features</h2>
		<div class="container features-cont">
		  <div class="row">
		    <div class="col">
		      <div class="container border bottom">
		      	<h4>Plagiarism Checker</h4>
		      	<img src="https://res.cloudinary.com/ros4eva/image/upload/v1571850647/feature1_vjffqi.png" width="165" height="165">
		      	<p>Plagiarism checker detects plagiarism in your text and checks for other writing issues. Our plagiarism checker flags specific sentences and provides reference information about the source, calculates an overall originality score for your document. So you don’t need to worry we have you covered.</p>
		      </div>
		    </div>
		    <div class="col">
		      <div class="container border bottom">
		      	<h4>Avoid Word Duplicates</h4>
		      	<img src="https://res.cloudinary.com/ros4eva/image/upload/v1571850646/feature2_d0tfpm.png" width="165" height="165">
		      	<p>One of the main problem in document is that most of the words that are duplicated also appear in the previous line, which makes it difficult to achieve your goal. If you'd want to remove all duplicated words, then it wasn't that difficult by using our tool, all duplicated file will be reviewed.</p>
		      </div>
		      
		    </div>
		    <div class="col">
		      <div class="container border bottom">
		      	<h4>File Comparison</h4>
		      	<img src="https://res.cloudinary.com/ros4eva/image/upload/v1571850646/feature3_ozmb0n.png" width="165" height="165">
		      	<p>We help you compare files and texts, and generate differences in a visual text format which is easy to manage and understand. Comparing hundreds of files can be a tedious task, there are high chances that you would miss out on something. Here we make that easy for you.</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
	
	<div class="container content4">
		<div class="container newsletter">
			
		  <div class="row">
		    <div class="col img2" align="center">
		      <img src="https://res.cloudinary.com/ros4eva/image/upload/v1572022559/imageedit_19_6799104496_nxtyvo.png" class="bottom" >
		    </div>
		    <div class="col bottom">
					<div style="display:none" id="success" class="bg-light text-center text-dark">Successfully submitted</div>
		    	<div align="center">
		    		<h5>NEWSLETTER</h5>
		    		<h3 id='Sub'>SUBSCRIBE</h3>
		      <div align="center">
		      	<input type="email" id='email' name="Email" placeholder="johndoe@email.com">
		      	<br>
		      	<br>
		      	<input type="checkbox" name="">
		      	<small>Send me Promotional Offers</small>
		      	<br>
		      	<input id='button' type="submit">
			  </div>
		  	</div>
		    </div>
		  </div>
		</div>
	</div>

	<footer>
	    <div class="section-one">
	      <section class="left">
	        <h4>DOCUFIX</h4>
	        <p>We help you arrange, sort, compare and extract information from different file formats</p>
	  
	        <p class="text-two">This app was built by <a href="https://hng.tech/" target="_blank">HNGi6</a> interns</p>
	      </section>
	      <section class="right">
	        <ul>
	          <li><a href="about_us.html">About us</a></li>
	          <li><a href="teampage.html">Our Team</a></li>
	          <li><a href="feedback.html">Feedback</a></li>
	          <li><a href="privacy.html">Privacy policy</a></li>
	        </ul>
	      </section>
	    </div>
	    <div class="footer-line"></div>
	    <div class="section-two">
	      <section class="icons">
	        <a href="#">
	          <i class="fab fa-facebook-f" aria-hidden="true"></i>
	        </a>
	        <a href="#">
	          <i class="fab fa-twitter" aria-hidden="true"></i>
	        </a>
	        <a href="#">
	          <i class="fab fa-google-plus-g" aria-hidden="true"></i>
	        </a>
	        <a href="#">
	          <i class="fab fa-linkedin" aria-hidden="true"></i>
	        </a>
	      </section>
	      <section class="copy">
	          &copy; 2019 Copyright: Docufix
	      </section>
	    </div>
  </footer>
		
	<div>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script src="https://kit.fontawesome.com/7967e81f77.js" crossorigin="anonymous"></script>
	</div>
	<script src="/daveScroll.js"></script>
	<script>
		
        const url = 'https://docufixmail.herokuapp.com/add-user';
        async function handleSubmit(e) {
          let Email = document.querySelector('#email').value;
          console.log({Email})
          axios.post(url, { Email })
          .then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
		  });
		  document.getElementById("success").style.display="block";
		setTimeout(() => {
			document.getElementById("success").style.display="none";
		}, 3000);
		}
		

    document.querySelector('#button').addEventListener('click',handleSubmit);

		const bottom = document.querySelectorAll('.bottom');
		let left = document.querySelectorAll('.left');
		let right = document.querySelector('.right');

		bottom.forEach(ctn => scroll(ctn, 'bottom'));
		left.forEach(x => scroll(x, 'left'))
		scroll(right, 'right');
    </script>
</body>
</html>
