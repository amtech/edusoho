webpackJsonp(["app/js/classroom-manage/set-info/index"],{"5d31da2441e6b75d3a07":function(e,a){"use strict";function t(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){var e;""!=$("#create-classroom").val()&&(1==$("#showable-open").data("showable")?($("#showable-open").attr("checked","checked"),1==$("#buyable-open").data("buyable")?$("#buyable-open").attr("checked","checked"):$("#buyable-close").attr("checked","checked")):($("#showable-close").attr("checked","checked"),1==$("#buyable-open").data("buyable")?$("#buyable-open").attr("checked","checked"):$("#buyable-close").attr("checked","checked"),$("#buyable").attr("hidden","hidden"))),$("#showable-close").click(function(){$("#buyable").attr("hidden","hidden")}),$("#showable-open").click(function(){$("#buyable").removeAttr("hidden")}),$("#classroom_tags").select2((e={ajax:{url:app.arguments.tagMatchUrl+"#",dataType:"json",quietMillis:100,data:function(e,a){return{q:e,page_limit:10}},results:function e(a){var e=[];return $.each(a,function(a,t){e.push({id:t.name,name:t.name})}),{results:e}}},initSelection:function(e,a){var t=[];$(e.val().split(",")).each(function(){t.push({id:this,name:this})}),a(t)},formatSelection:function(e){return e.name},formatResult:function(e){return e.name},width:"off",multiple:!0,maximumSelectionSize:20,placeholder:Translator.trans("classroom.manage.tag_required_hint")},t(e,"width","off"),t(e,"multiple",!0),t(e,"createSearchChoice",function(){return null}),t(e,"maximumSelectionSize",20),e))};a.default=r()},0:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){CKEDITOR.replace("about",{allowedContent:!0,toolbar:"Detail",filebrowserImageUploadUrl:$("#about").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#about").data("flashUploadUrl")});$('[data-role="tree-select"], [name="categoryId"]').select2({treeview:!0,dropdownAutoWidth:!0,treeviewInitState:"collapsed",placeholderOption:"first"})}function l(){return $("#classroom-set-form").validate({rules:{title:{required:!0}}})}function o(e){switch($("[name='expiryValue']").val()||$("[name='expiryValue']").val($("[name='expiryValue']").data(e)),u($("[name='expiryValue']")),e){case"days":$('[name="expiryValue"]').datetimepicker("remove"),$(".expiry-value-js .controls > span").removeClass("hidden"),d($('[name="expiryValue"]'),i()),m.form();break;case"date":if(void 0!==$("#classroom_expiryValue").attr("readonly"))return!1;$(".expiry-value-js .controls > span").addClass("hidden"),$("#classroom_expiryValue").datetimepicker({language:document.documentElement.lang,autoclose:!0,format:"yyyy-mm-dd",minView:"month",endDate:new Date(Date.now()+31536e7)}),$("#classroom_expiryValue").datetimepicker("setStartDate",new Date),d($('[name="expiryValue"]'),s()),m.form()}}function i(){return{required:!0,digits:!0,min:1,max:1e4,messages:{required:Translator.trans("classroom.manage.expiry_mode_days_error_hint")}}}function s(){return{required:!0,date:!0,after_now_date:!0,messages:{required:Translator.trans("classroom.manage.expiry_mode_date_error_hint")}}}function d(e,a){e.rules("add",a)}function u(e){e.rules("remove")}var c=t("b334fd7e4c5a19234db2");r(c);t("5d31da2441e6b75d3a07"),n();var m=l();o($("[name=expiryMode]:checked").val()),$("[name='expiryMode']").change(function(){if("published"===app.arguments.classroomStatus)return!1;var e=$("[name='expiryValue']").val();if(e&&(e.match("-")?$("[name='expiryValue']").data("date",$("[name='expiryValue']").val()):$("[name='expiryValue']").data("days",$("[name='expiryValue']").val()),$("[name='expiryValue']").val("")),"forever"==$(this).val())$(".expiry-value-js").addClass("hidden");else{$(".expiry-value-js").removeClass("hidden");var a=$(".expiry-value-js > .controls > .help-block");a.text(a.data($(this).val()))}o($(this).val())})}});