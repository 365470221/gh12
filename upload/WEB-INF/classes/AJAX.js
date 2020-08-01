function get(url,param,rollback)
{
	var xml=new XMLHttpRequest();
  xml.onreadystatechange=function()
  {
	  if(xml.status==200&&xml.onready==4)
		  {
		  rollback(xml.responseText);
		  }
  }
  xml.open("post",url);
  xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xml.send(param);
}