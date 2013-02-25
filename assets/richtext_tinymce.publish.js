/*
	Implements tinyMCE for available textareas. The tinyMCE.init call can be
	extended with further buttons/configuration options. For details, see:
	http://tinymce.moxiecode.com/wiki.php/Configuration
*/

jQuery(document).ready(function() {
	
	jQuery('textarea.tinymce').tinymce({
		
		script_url: Symphony.Context.get('root') + '/extensions/richtext_tinymce/lib/tiny_mce.js',

		theme: 'advanced',
		plugins: 'paste,fullscreen,table,advimage',
		skin: 'symphony',
		width: '100%',
		language: 'ru',
		theme_advanced_buttons1 : 'fullscreen,|,pastetext,pasteword,|,undo,redo,|,formatselect,bold,italic,underline,|,bullist,numlist,outdent,indent,hr,|,blockquote,link,unlink,image',
		theme_advanced_buttons2 : 'forecolor,|,justifyleft,justifyright,justifycenter,justifyfull,|,tablecontrols,|,cleanup,code',
		theme_advanced_buttons3 : '',
		theme_advanced_buttons4 : '',
		theme_advanced_toolbar_location : 'top',
		theme_advanced_toolbar_align : 'left',
		theme_advanced_resizing : true,
		extended_valid_elements : 'img[!src|border:0|alt|title|width|height|style]a[name|href|target|title|onclick]',

		template_external_list_url : 'lists/template_list.js',
		external_link_list_url : 'lists/link_list.js',
		external_image_list_url : 'lists/image_list.js',
		media_external_list_url : 'lists/media_list.js',
		paste_auto_cleanup_on_paste : true,

		// entities: '',
		// encoding : 'xml',
		entity_encoding : 'raw'
		
	});
	
});