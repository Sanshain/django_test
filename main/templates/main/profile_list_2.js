ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

ul.profiles_list
	-for User in Users
	
		/User.Status		
	
		li(id='us_={User.id}' 
			data-_refresh ='content'
			data-to ='~url "user" User.id')
			
			h3 ={User.username} ={User.last_name} 123123
			
			.i_desc Male: 29
				Sex: jenshina
			
			-if User.Image	
				.logo %image(src='={User.Image.url}')
			-else
				.logo 
			
			
			.i_mnu(onclick='friend_act(this,event)')
				/button 12456
			
				-if User.Recipient
					button.to_friend.sended Reconside
					
				-elif User.Sender				
					button.to_friend.sended.out Refuse
					button.to_friend.sended Accept
					
				-elif User.Friend
					button.to_friend Remove friend
					
				-elif User.Me
					button.to_friend(
						name='self'
						style='border:1px solid orange;') Profile
						
				-else
					button.to_friend To_friend
					
	-csrf_token
	
	-include "fragments/___paginator.html" with object_list=page_obj|default:Users
	

