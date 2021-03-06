

/*!это работает для одного поля, а вызываемый 
	render_page работает для всех
	
	то есть на анимацию каждого элемента идет 
	рендер всех!
*/
function fragment_refresh(e){


	var content_waiting = function (_boxes, deep){
	
		//console.log(deep + ' - waiting for ' +_box.id);
		
		if (!deep){
			//animation отсутствия интернета
			
			alert('время ожидания сервера истекло');
			
			return false;
		}							
	
		setTimeout(function(){
										
			if (responsed_content){

				render_page(
					responsed_content.pop(), //json
					responsed_content.pop()	 //url
				);
				
				setTimeout(function(){
					
					for(var key in _boxes){
						_boxes[key].style.opacity =1;
					}
					
				}, 40);
			}
			else{
				//анимация и рекурсия	
				
				content_waiting(_boxes, --deep);
			}

		},700);								
	};

	/*!
		готовит боксы к анимфции
	*/
	function content_animate(_boxes){
		
		for(var key in _boxes){
			
			var _box = _boxes[key];
			var attribute=abstract_viewer.property(_box);	
			
			//это можно вынести в позиционирующие классы:
			//либо (правильнее) в id этих|управляющих элементов
			_box.style.transition = '0.5s linear';
			_box.style.opacity = 0;			
		}

		content_waiting(_boxes, 3);		
	}

	//если это ссылка, берем из адреса
	//если это кнопка, берем из formAction-атрибута
	//если иное, берем из атрибута data-to
	
	var target = 
		e.target.href || 
		e.target.formAction || 			
		e.target.getAttribute('data-to')||
		e.target.getAttribute('formaction'); //for ie8-9
		
	
	//если цель не найдена, выкидываем ошибку
	if (!target) {
		
		new Error('fragment_refresh без цели');
		alert('fragment_refresh без цели');
	};
	
	//для <ie10 осуществляем прямой переход
	if (!window.atob){   //<ie10
	
		document.location.href = target;
	}
							
	
	e.preventDefault();
	
	
	
	/*определяем, есть ли те или иные элементы на странице, чтобы собщить серверу, какой из
	шаблонов рендерить и возвращать*/
	
	/*теоретически это можно получать на сервере 
	из адреса страницы, но тогда по сути придется проверять весь список адресов
	(регулярк) на соответствие, после нахождения
	необходимо распарсить шаблон и найти, есть ли там этот элемент. Проще найти тут:
	*/
				
	
	//main(username|age|city),section
	//main>age.*,section
	var unique_templates = 
		e.target.dataset['_refresh']
			.replace(/[\s]+/,'')
			.split(',');
	
	var _box = null;
	
	//анимация ожидания для каждого unique_template:
	for (var key in unique_templates){
		
		//ищем детальные (внут) элементы для переопределения
		var details = unique_templates[key].split(">");
		
		//независимо от того, есть они или нет, 1й элемент будет корневой. Ищем его в любом случае, он нам пригодится
		_box = document.getElementById(details[0]);
		
		//если он не найден, ошибка (должен быть всегда)
		if (!_box){
			alert('не найден корневой элемент');
			new Error('не найден корневой элемент');
		}
			
		var _boxes = [];
		
		//если они заданы
		if (details[1]){
			//получаем их:
			var signs = details[1].split('.');			
			
			//если есть обобщитель среди них:
			var sign = signs.indexOf('*');
			if (sign>=0){
				
				
				if (sign==0){
					
					_boxes =_box.parentElement.querySelectorAll('[id]');
				}
				else{
					var sample= _box.querySelector(
						'#'+signs[0]
					);
					
					//если типовой элемент найден
					if (sample){
						_boxes =sample.parentElement.querySelectorAll('[id]');
						
					}
					else{
						//значит надо обновить корневой элемент:
						alert('update root element');
						_boxes = [_box];
					}
				}					
				
			}
			else{
				for(var key in signs){
					_boxes.push(
						_box.querySelector('#'+signs[key])
					);					
				}								
			}
			
			content_animate(_boxes);
			

		}
		//если не заданы, то просто продолжаем выполнение:
		
		content_animate([_box]);
		
	}					
	
	var responsed_content = null;
	var box_onload = function (resp, set_url)
	{
		responsed_content = [set_url,resp];
	
		//render_page(resp, set_url);
	}
	
	var ajax = new Ajax(target, box_onload);
	ajax.onfail = function(){
		//здесь может быть относительно 
		// навязчивое сообщение о том, что 
		//ваш браузер не поддерживает 
		//автоматические переходы
		alert('ваш браузер не смог осуществить частичное обновление контента страницы.'+
		' Нажмите ок, чтобы перейти напрямую');
		document.location.href = target;
	};
	
	
	//что отправляем на сервер? - :
	
	//define flag:
	
	//мы знаем из data-_refresh-атрибута, что содержимое, которое вернется с сервера, явлется[, например, для #_dialogs-селектора]  полноценным содержимым селектора '.content'. Для других элементов это может быть .main, .section и т.п.
	
	//однако, если на странице отсутствует блок .aside (что возможно в некоторых вариантах шаблонов), то его так же нужно запросить с сервера. То же самое касается и .section и др блоков
	
	

	
	//теперь, получаем все требуемые элементы для запрашиваемой с сервера страницы, чтобы отправить на сервер данные о том, каких фрагментов на запрашиваемой странице не хватает (которые нужно обновить)
	/*
		user.articles|1
		user 1
		user 1.aside
	*/
	function get_required_blocks(tag){
		
		
		
		//получаем массив id-шников с их состояниями
		var required_blocks = 
				tag.dataset['_require'].split('.');
							
		//проверяем их: если элемент существует и состояние соответствует, то
		
		var requested_blocks = [];
		
		for(var key in required_blocks){
			var detail = required_blocks[key].split('|');
			
			var b_id = detail.pop(); //id элемента
			var r_state =detail.length ?detail.pop(): '';
			var state = '';
			
			required_block = dom.obj(b_id);
			if (required_block && r_state){
				//получили блок. Теперь необходимо получить его состояние:
				
				//для (неуправляющего) простого тега (который содержит только текст) допускается атрибут data-state, который содержит состояние этого элемента (например data-state='1')
				state = 	
					required_block.getAttribute['data-state'];
				
				//если тег является управляющим (управляющие элементы не содержат своего состояния), то ловим состояние в его контенте, а именно - в элементе, управляющем позиционированием контента, - это первый элемент контента
				if (!state){
					var elem=
						required_block.children[0];
						
					//его состояние хранится в его id
					//либо в data-state, либо и там и там
					state = 
						elem? 
							elem.id+
							elem.dataset['state'] || ""
						:"";

					
				}
				
			}
			
			//теперь у нас есть required_block и r_state:
			//для выполнения условия required_block должен быть thruthy, а state==r_state
			
			if (required_block && r_state==state){
				continue;
			}
			else 
				requested_blocks.push(b_id);
						
		}	

		return requested_blocks;
		
	}
	
	var requested_blocks = get_required_blocks();
	
	
	//юзер на сервере получает всего лишь id юзера
	//попробуем изменить:
	/*!
		Для юзера нужны следующие поля:
		
		main(sex.age.city.ava.action),section,header
		
		#sex
		#age
		#city						
		#image? - #ava как управляющий
		#action%{formAction|value(innerText)} - слож
		
		#section|article_block__[\d]+			-упра
		#header|username[\d]* - управляющий
	*/
	
	var data = requested_blocks;
	
	var flag = requested_blocks.length;
	
	/*!dialogs - только требуемые для обновления поля:
		- content_
		- aside?
		var data = requested_blocks;
		['aside']
		
	!user - требуемые поля и id-юзера:
		- main?
		- aside?
		- id юзера
		- *_...----
		['main','aside',\d+]
	*/
	
	
	ajax.postData('detail='+Number(flag));
}