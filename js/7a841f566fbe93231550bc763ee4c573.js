$(".js_shop_depend_param, .shop_form .depend_param").change(function(){select_param_price($(this).parents('form'));});$(".catalog__item").on('change','.js_shop_depend_param',function(){select_param_price($(this).parents('form'));});$(".js_shop_form, .shop_form").each(function(){select_param_price($(this));var th=$(this);if(th.find('.js_shop_param_price').length&&th.find(".js_shop_depend_param").length)
{if(!th.find('.js_shop_param_price:visible').length){var el=th.find('.js_shop_param_price').get(0),re=/param(\d+)/;for(var att,i=0,atts=el.attributes,n=atts.length;i<n;i++){att=atts[i];if(re.test(att.nodeName)){$('.js_shop_depend_param[name="'+att.nodeName+'"]',th).val(att.nodeValue).trigger('refresh');}}
$('.js_shop_depend_param',th).trigger('change');}}});$("[action=buy]").click(function(e){e.preventDefault();$(this).parents('form').find('input[name=action]').val('buy');$(this).parents('form').submit();});$("[action=wish]").click(function(e){e.preventDefault();$(this).parents('form').find('input[name=action]').val('wish');$(this).parents('form').submit();});$("[action=wait]").click(function(e){e.preventDefault();$(this).parents('form').find('input[name=action]').val('wait');$(this).parents('form').submit();});$(".js_shop_form, .catalog__item").on('click',"[action=one_click]",function(e){e.stopPropagation();e.preventDefault();$('form[one_click=true]').removeAttr('one_click');$('form[data-good_id="'+$(this).attr("data-good_id")+'"]').attr('one_click','true');centralize($('.js_cart_one_click[data-good_id="'+$(this).attr("data-good_id")+'"]'));});$(".js_cart_one_click_form, .cart_one_click_form").on('click',":button",function(e){e.stopPropagation();e.preventDefault();var self=$(this).parents(".js_cart_one_click_form, .cart_one_click_form");$('.js_shop_form_param input, .js_shop_form_param select, .shop_form_param input, .shop_form_param select, input[name=count]','form[one_click=true]').each(function(){$("input[name="+$(this).attr('name')+"]",self).remove();self.prepend('<input type="hidden" name="'+$(this).attr('name')+'" value="'+$(this).val()+'">');});self.trigger('submit');});$('.js_shop_wishlist, .shop-like').click(function(){var form=$(this).parents('.js_shop, .shop').find('.js_shop_form, .shop_form').first();form.find('input[name=action]').val('wish')
form.submit();});$('.js_shop_add_compare, .shop_compare_button').click(function(){$(this).parents('form').submit();});diafan_ajax.success['shop_buy']=function(form,response){centralize($('.popup_cart'));return true;}
function select_param_price(th)
{var param_code='';$(".js_shop_depend_param, .depend_param",th).each(function(){param_code=param_code+'['+$(this).attr('name')+'='+$(this).val()+']';});if(th.find('.js_shop_param_price, .shop_param_price').length)
{th.find('.js_shop_param_price, .shop_param_price').hide();if(th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).length)
{th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).show();var image_id=th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).attr('image_id');if(image_id)
{var item=th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).parents(".catalog__item");if(item.length){$(".catalog__pic",item).hide();$(".catalog__pic[data-id='"+image_id+"']").show();}
else{$(".pics .pics__big").hide();$(".pics .pics__big[data-id='"+image_id+"']").show();$(".pics__mini").removeClass("pics__mini_active");$(".pics__mini[data-id='"+image_id+"']").addClass("pics__mini_active");}}
if(th.find('.js_shop_param_price'+param_code+', .shop_param_price'+param_code).find('.js_shop_no_buy, .shop_no_buy').length)
{th.find('.js_show_waitlist, .shop_waitlist').show();th.find('.js_shop_buy, .to-cart').hide();th.find('.js_shop_one_click, .shop_one_click').hide();}
else
{if(th.find('.js_shop_no_buy_good, .shop_no_buy_good').length)
{th.find('.js_shop_waitlist, .shop_waitlist').show();}
else
{th.find('.js_shop_waitlist, .shop_waitlist').hide();}
th.find('.js_shop_buy, .to-cart').show();th.find('.js_shop_one_click, .shop_one_click').show();}}
else
{th.parents('.js_shop, .shop').find('.js_shop_img, .shop_img img, .shop_all_img img').each(function(){if(th.find('.js_shop_param_price[image_id='+$(this).attr('image_id')+'], .shop_param_price[image_id='+$(this).attr('image_id')+']').length)
{$(this).hide();}});th.find('.js_shop_buy, .to-cart').hide();th.find('.js_shop_one_click, .shop_one_click').hide();th.find('.js_shop_waitlist, .shop_waitlist').hide();}}}