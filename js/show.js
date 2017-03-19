/**
 * Created by Administrator on 2017/3/19.
 */
$(function () {
	$('ul').on('click','a',function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
})
