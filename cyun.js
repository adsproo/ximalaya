# 彩云天气 //*.cyapi.cn
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/entries|p\/v1\/trial_card\/info|v2\/product) url reject-dict
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/vip_info|v2\/user) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/starplucker\.cyapi\.cn\/v3\/(config\/cypage\/\w+\/conditions|notification\/message_center|operation\/homefeatures) url reject-dict
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
^https:\/\/wrapper\.cyapi\.cn\/v1\/(nafp\/origin_images|satellite)\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/caiyun.js
hostname = *.cyapi.cn
