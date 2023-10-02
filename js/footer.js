const { ipcRenderer } = require('electron');

var timer = 3000; //for every 5 sec; default

 //Check Hardware Changes code starting point:
 setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_hardware_changes',input_values);
},900000); // 15min 

 //Check Software Changes code starting point:
 setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_software_changes',input_values);
},24000); // 17min

// Keyboard Update code start here 
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_keyboard_changes',input_values);
},1200000); // 20min

// Mouse Update code start here 
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_mouse_changes',input_values);
},1320000); // 22min

// Graphics Card Update code start here 
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_graphic_card',input_values);
},1380000); // 23min

// Motherboard Update code start here 
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_motherboard_changes',input_values);
},1440000); // 24min


// check scrap asset code:
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('check_scrap_asset_request',input_values);
 },1500000); // 25min

 

// preventive maintenance code starting point for One Time:
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('Preventive_Maintenance_Main',input_values,'One Time');
},1620000); // 27min

// preventive maintenance code starting point for Scheduled:
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('Preventive_Maintenance_Main',input_values,'Scheduled');
},1740000); // 29min

// preventive maintenance code starting point for Recurring:
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('Preventive_Maintenance_Main',input_values,'Recurring');
},1860000); // 31mins

// Network Monitor
setInterval(function(){
	const input_values = {};
	ipcRenderer.send('Network_Monitor_Main',input_values,'One Time');
},2400000); // 40min

