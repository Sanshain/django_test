
/*! async get friends for detail-template called onload/

*/
function async_get_friends(response){
	
	window.onpopstate = function(){
	
		console.time('check_for_popstate');

		new Viewer(history.state).render_back();		

		
		/*if (history.state)
			alert(JSON.stringify(Object.keys(history.state)));
		else alert(0);//*/
		
		
		console.timeEnd('check_for_popstate');

	};
	
	
	
	var len = response.length;
	var index = 0;
	var unitSeparator = String.fromCharCode(30);		
	
	while(index <len){
		
		//длина json до 30-го символа
		var currentUserDesc = response.indexOf(unitSeparator, index);
		
		var UserDesc = response.slice(index, currentUserDesc);
		var User = JSON.parse(UserDesc);
		var imglen=response.slice(currentUserDesc+=1, currentUserDesc+=5);
		
		User.img=response.substr(currentUserDesc,imglen);
		

		var user_div = UserItem(User);
		
		var asd = document.querySelector('.aside_menu');
		asd.appendChild(user_div);
		
		index = currentUserDesc + Number(imglen);
		
	}
				
	//							
	
}



function UserItem(user){
	
	var ava_img = document.createElement('img');
	ava_img.style.float = 'left';		
	ava_img.style.borderRadius = '20px';
	ava_img.style.margin = "10px 0 0 10px";	
	ava_img.src='data:image/jpeg;base64,'+ user.img;
	
	var username = document.createElement('span');
	username.innerText = user.username+'sgdgdgdfg';
	username.style.paddingLeft = '9%';		
	var user_div = document.createElement('div');
	user_div.id = 'un' + user.id;
	user_div.className = 'friend_pick';	
	user_div.onclick = function()
	{
		
		var page = '/users/'+user.id + '/';
		var ajax_user = new Ajax(
			page,
			render_page);		
		ajax_user.postData(user.id);	
		
	};		
	
	user_div.appendChild(ava_img);				
	user_div.appendChild(username);				
	
	return user_div;
	
}








