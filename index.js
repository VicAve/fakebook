function search() {
	var toSearch = document.getElementById('search');
	toSearch.submit();
}

function loadContactsInfo() {
	var http = new XMLHttpRequest();
	var url = "https://tinyfac.es/api/users";
	var infoParsed;
	http.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//alert(this.responseText);
			infoParsed = JSON.parse(this.responseText);
			loadContactsPane(infoParsed);
			return infoParsed;
		}
	}
	http.open("GET", url, true);
	http.send();
}

function loadFeedsInfo() {
	var http = new XMLHttpRequest();
	var url = "data/posts.txt";
	var infoParsed;
	http.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//alert(this.responseText);
			infoParsed = JSON.parse(this.responseText);
			loadFeeds(infoParsed);
		}
	}
	http.open("GET", url, true);
	http.send();
}

function loadContactsPane(info) {
	var imgSPath,imgMPath,imgLPath,imgOPath,idFriend,firstName,lastName,gender,fbName,fbLink;
	var imgTmp;
	for (var i = 0; i < info.length; i++) {
		imgTmp = info[i].avatars;
		idFriend = info[i].avatars_origin.id;
		firstName = info[i].first_name;
		lastName = info[i].last_name;
		gender = info[i].gender;
		fbName = info[i].avatars_origin.name;
		fbLink = info[i].avatars_origin.facebook_profile_link;
		imgSPath = imgTmp[0].url;
		imgMPath = imgTmp[1].url;
		imgLPath = imgTmp[2].url;
		imgOPath = imgTmp[3].url;
		//alert("Hi "+firstName+" "+lastName+"!! Your id is "+idFriend+". You are "+gender+" You are listed in Fakebook as "+fbName+", and the link is "+fbLink+". Your picture is on: "+imgOPath);
		var parentElement = document.getElementById("contacts-pane");
		var contactAside = document.createElement("div");
		var imgChat = document.createElement("img");
		var contactName = document.createElement("a");
		var indicator = document.createElement("div");
		contactAside.setAttribute("class","contactAside");
		imgChat.setAttribute("src",imgSPath);
		contactName.setAttribute("href",fbLink);
		contactName.setAttribute("class","chatFriendName");
		contactName.innerHTML = firstName + lastName;
		indicator.setAttribute("class","contact-indicator");
		contactAside.appendChild(imgChat);
		contactAside.appendChild(contactName);
		contactAside.appendChild(indicator);
		parentElement.appendChild(contactAside);
	}
}

function loadFeeds(info) {
	var imgMPath,idFriend,firstName,lastName,fbLink,datePost,hourPost,imgPostLink,textPost;
	var imgTmp;
	var contactInfo = loadContactsInfo();

	for (var i = 0; i < contactInfo.length; i++) {
		imgTmp = contactInfo[i].avatars;
		idFriend = contactInfo[i].avatars_origin.id;
		firstName = contactInfo[i].first_name;
		lastName = contactInfo[i].last_name;
		fbName = contactInfo[i].avatars_origin.name;
		fbLink = contactInfo[i].avatars_origin.facebook_profile_link;
		imgMPath = imgTmp[1].url;
		
		//alert("Hi "+firstName+" "+lastName+"!! Your id is "+idFriend+". You are "+gender+" You are listed in Fakebook as "+fbName+", and the link is "+fbLink+". Your picture is on: "+imgOPath);
		var parentElement = document.getElementById("contacts-pane");
		var contactAside = document.createElement("div");
		var imgChat = document.createElement("img");
		var contactName = document.createElement("a");
		var indicator = document.createElement("div");
		contactAside.setAttribute("class","contactAside");
		imgChat.setAttribute("src",imgSPath);
		contactName.setAttribute("href",fbLink);
		contactName.setAttribute("class","chatFriendName");
		contactName.innerHTML = firstName + lastName;
		indicator.setAttribute("class","contact-indicator");
		contactAside.appendChild(imgChat);
		contactAside.appendChild(contactName);
		contactAside.appendChild(indicator);
		parentElement.appendChild(contactAside);
	}
}
			/*<img src="media/thumbs/Carla.gif">
			<h3>Carla</h3>
			<p class="description-post">Posted an Image</p>
			<p class="time-post">10 minutes ago</p>
			<div class="text-post">
			<div class="img-post-news"><img src="media/img/data-doesnt-sleep-night.png"></div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
			</div>
			<div class="comment-post">
				<form id="update-status" action="" method="POST">
		    		<input type="text" name="name" placeholder="Leave a comment...">
		    	</form>
				<span id="comment-wall-btn" >Comment</span>
			</div>*/