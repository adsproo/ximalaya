#!name = cnftp
#!desc = China Film and Television Platform.
#!author = RuCu6 Zoo
#!update = 2023-08-28 19:20

# 爱奇艺 //-i.vip.iqiyi.com, *.iqiyi.com
# 开屏广告,播放广告
^http:\/\/(kjp|t7z)\.cupid\.iqiyi\.com\/mixer\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 首页,信息流广告,我的页面,左上角天气,底部菜单,顶部菜单,青少年弹窗
^http:\/\/[0-9\.]+\/3f1\/cards\.iqiyi\.com\/(views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^http:\/\/access\.if\.iqiyi\.com\/3f1\/cards\.iqiyi\.com\/(views_category\/3\.0\/category_home|views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/cards\.iqiyi\.com\/(views_category\/3\.0\/category_home|views_home\/3\.0\/qy_home|waterfall\/3\.0\/feed)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/iface2\.iqiyi\.com\/aggregate\/3\.0\/getMyMenus\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/iface2\.iqiyi\.com\/control\/3\.0\/init_proxy\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/iface2\.iqiyi\.com\/views\/3\.0\/(bottom_theme|home_top_menu)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/iface2\.iqiyi\.com\/views_pop\/3\.0\/pop_control\? url reject-dict
# 播放页,开通会员提示
^https:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v2\/show\? url reject-dict
^https:\/\/cards\.iqiyi\.com\/views_plt\/3\.0\/player_tabs_v2\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 搜索页,列表广告,填充词
^https:\/\/cards\.iqiyi\.com\/views_search\/3\.0\/(hot_query_)?search\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^https:\/\/search\.video\.iqiyi\.com\/q\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
# 评论区
^https:\/\/comment-card\.iqiyi\.com\/views_comment\/3\.0\/long_video_comments\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js

# 芒果tv //*.mgtv.com
^http://dc.bz.mgtv.com/dynamic/v1/channel/index/.+ url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js
^http://dflow.bz.mgtv.com/flow/getExtensionPosition url reject-200
^http://iphone.v0.mgtv.com/show.php?abroad.+ url reject-200
^http://rc-topic-api.bz.mgtv.com/rc/topic/rank url reject-200
^https://credits.bz.mgtv.com/credits/selectedToast url reject-dict
^https://credits.bz.mgtv.com/credits/url url reject-200
^https://dc.bz.mgtv.com/dynamic/v1/channel/vrsList url response-body .+ response-body {}
^https://floor.bz.mgtv.com/floor/detail.+ url reject-200
^https://img.da.mgtv.com/mediafiles/wiad_creative/1008/*.gif url reject-img
^https://layer.bz.mgtv.com/layer/conf.* url reject-dict
^https://layer.bz.mgtv.com/layer/confv2 url reject-200
^https://layer.bz.mgtv.com/layer/report url reject-200
^https://me.bz.mgtv.com/v3/module/list url reject-200
^https://me2.bz.mgtv.com/v3/module/list.+ url reject-dict
^https://mob.bz.mgtv.com/odin/c1/channel/ads url reject-200
^https://mob.bz.mgtv.com/odin/c1/skin/config url reject-200
^https://mobile.api.mgtv.com/v2/mobile/checkUpdate url reject-200
^https://mobile.da.mgtv.com/app/el url reject-200
^https://mobile.da.mgtv.com/creative/list url reject-dict
^https://mobile.da.mgtv.com/json/app/bdboot url reject-200
^https://mobile.da.mgtv.com/m/page url reject-200
^https://pcvideoaliyun.titan.mgtv.com url reject-dict
^https://playgift.api.mgtv.com/play/gift/api/play/config url reject-200
^https://video.da.mgtv.com url reject-dict
^https://vipcdn.mgtv.com/act_ugc/billing/20220825/tmp/acf2efcc245911edbe6e00163e308875.png url reject-img
^https?:\/\/recom\.api\.mgtv\.com\/xyt\/banner.+ url reject-200
^https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry.+ url reject-200

# 腾讯视频
^http:\/\/[0-9\.:]*\/?(defaultts|vmind\.qqvideo)\.tc\.qq\.com\/\w+ url reject
^http:\/\/apd-vlive\.apdcdn\.tc\.qq\.com\/vmind\.qqvideo\.tc\.qq\.com\/\w+ url reject-dict

# 优酷 //un-acs.youku.com
^https:\/\/un-acs\.youku\.com\/gw\/mtop\.youku\.play\.ups\.appinfo\.get url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/cnftp.js

hostname = -i.vip.iqiyi.com, *.iqiyi.com, *.mgtv.com, un-acs.youku.com
