<?php
/**
 * Welcome screen getting started template
 */

?>
<script>!function(e,o,n){window.HSCW=o,window.HS=n,n.beacon=n.beacon||{};var t=n.beacon;t.userConfig={},t.readyQueue=[],t.config=function(e){this.userConfig=e},t.ready=function(e){this.readyQueue.push(e)},o.config={docs:{enabled:!0,baseUrl:"//uxthemes.helpscoutdocs.com/"},contact:{enabled:!1,formId:"0fec07d3-7b3b-11e6-91aa-0a5fecc78a4d"}};var r=e.getElementsByTagName("script")[0],c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://djtflbt20bdde.cloudfront.net/",r.parentNode.insertBefore(c,r)}(document,window.HSCW||{},window.HS||{});</script>

<script>
  HS.beacon.config({
    modal: true,
    instructions:'This is instructional text that goes above the form.'
  });

  HS.beacon.ready(function() {
  	HS.beacon.suggest([
	    '57036ff9903360288a77fc9a',
	    '57ceb6e0903360649f6e5a39',
	    '57cea07bc6979108399a0722',
  	]);
  	// Open the Beacon as soon as it's ready
  	jQuery('#search-docs').focus(function(){
  		HS.beacon.open();
  	});
  });
</script>

<div id="tab-support" class="coltwo-col panel flatsome-panel">
	<div class="cols">
		<div class="inner-panel" style="text-align: center; padding:0;">
	    	<input type="text" id="search-docs" style="padding:15px;width: 100%; margin:0;" value="搜索文档..."/>
		</div>
	</div>
	<div class="cols">

	<div class="inner-panel" style="text-align: center;">
		<img style="width:100px; margin:30px 15px 0;" src="<?php echo get_template_directory_uri().'/inc/admin/panel/img/videos.png'; ?>"/>
		<h3>如何视频</h3>
		<p>我们的操作视频非常适合学习Flatsome。</p>
        <a href="http://v.youku.com/v_show/id_XMTg5MjgwNTQ2MA==.html" target="_blank" class="button button-primary">
        <?php _e( 'Open Videos', 'flatsome-admin' ); ?></a>
	</div>

	<div class="inner-panel" style="text-align: center;">
		<img style="width:100px; margin:30px 15px 0;" src="<?php echo get_template_directory_uri().'/inc/admin/panel/img/documentation.png'; ?>"/>
		<h3>在线文档</h3>
		<p>如果你有任何问题，你应该看的第一个地方是我们的主题文档。</p>
        <a href="http://uxthemes.helpscoutdocs.com" target="_blank" class="button button-primary">
        <?php _e( 'Open Documentation', 'flatsome-admin' ); ?></a>
	</div>

	<div class="inner-panel" style="text-align: center;">
	<img style="width:100px; margin:30px 15px 0;" src="<?php echo get_template_directory_uri().'/inc/admin/panel/img/emailsupport.png'; ?>"/>			<h3>高级邮件支持</h3>
		<p>Flatsome的所有客户都可以访问高级电子邮件支持。</p>
		<?php if(!flatsome_is_theme_enabled())	{ ?>
			<a href="<?php echo admin_url().'admin.php?page=flatsome-panel';?>" class="button button-primary">激活主题获取支持</a>
    	<?php } else if(flatsome_is_support_expired(basename( get_template_directory() ))){ ?>
    		<p><strong>Support has expired :(</strong></p>
    		<a target="_blank" href="//themeforest.net/item/flatsome-responsive-woocommerce-theme/5484319?ref=UX-themes" class="button button-warning" style="color:red;">+ Extend Support time</a>
		<?php } else {
			global $current_user;
			?>
		<a href="mailto:support@uxthemes.com?subject=Need help with Flatsome &body=Enter Your Message here...%0D%0A%0D%0A Best regards,%0D%0A <?php echo $current_user->user_firstname.' '; echo $current_user->user_lastname; ?> %0D%0A %0D%0A%0D%0A[Keep this] Theme license: <?php echo sanitize_text_field( get_option( basename( get_template_directory() ) . '_wup_purchase_code', '' ) );?> [Required for support]" class="button button-primary">
			<?php _e( 'Send us a Support Ticket', 'flatsome-admin' ); ?>
		</a>
		<br><br><small><a href="https://themeforest.net/page/item_support_policy">支持包括什么？</a></small>
		<?php } ?>
	</div>

	</div>

	<div class="cols">

		<div class="inner-panel" style="text-align: center;">
			<h3>Flatsome主题用户</h3>
			<p>加入我们的社区并从其他Flatsome用户获得帮助。</p>
		    <a href="//www.facebook.com/groups/flatsome/" class="button button-primary">
	        <?php _e( 'Join Community', 'flatsome-admin' ); ?></a>
		</div>

		<div class="inner-panel" style="text-align: center;">
			<h3>Beta测试组</h3>
			<p>在其他人之前测试Flatsome的新版本</p>
		    <a href="//www.facebook.com/groups/flatsomebeta/" class="button button-primary">
	        <?php _e( 'Join Beta Group', 'flatsome-admin' ); ?></a>
		</div>


    <div class="inner-panel" style="text-align: center;">
      <h3>功能要求</h3>
      <p>发送Flatsome主题的功能请求并投票给你喜欢的主题。</p>
      <a href="//uxthemes.canny.io/flatsome" class="button button-primary">
      <?php _e( 'Feature Requests', 'flatsome-admin' ); ?></a>
    </div>

	</div>

</div>
