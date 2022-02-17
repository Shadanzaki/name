let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван',surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]
  
    function filter(objects, key, value) {
      for (i=0; i < objects.length; ++i) {                                   
         if (objects[i][key] == value) {                    
           console.log(objects[i]);                                  
         }
         }
        }
  
  filter(objects, 'name', 'Иван');