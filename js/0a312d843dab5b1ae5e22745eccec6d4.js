$(document).on('click','.js_captcha_update, .captcha_update',function(){$(this).parents("form").find("input[name=captcha_update]").val("1");$(this).parents("form").submit();});