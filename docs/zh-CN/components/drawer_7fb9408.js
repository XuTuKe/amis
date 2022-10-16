amis.define('docs/zh-CN/components/drawer.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Drawer 抽屉",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Drawer 抽屉",
    "icon": null,
    "order": 43,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"label\": \"弹出\",\n    \"type\": \"button\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n      \"title\": \"抽屉标题\",\n      \"body\": {\n            \"label\": \"第二层\",\n            \"type\": \"button\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"title\": \"抽屉标题\",\n                \"body\": {\n                    \"label\": \"第三层\",\n                    \"type\": \"button\",\n                    \"actionType\": \"drawer\",\n                    \"drawer\": {\n                        \"title\": \"抽屉标题\",\n                        \"body\": \"这是第三层抽屉\"\n                    }\n                }\n            }\n      }\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8\" href=\"#%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>抽屉尺寸</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button-toolbar\",\n    \"className\": \"block m-t\",\n    \"buttons\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"极小框\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"size\": \"xs\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"小框\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"size\": \"sm\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"中框\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"size\": \"md\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"大框\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"size\": \"lg\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"超大框\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"size\": \"xl\",\n                \"position\": \"right\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义抽屉尺寸</h2><p>值如果是数字类型单位默认使用<code>px</code>, 如果是字符串类型可以使用自定义 css 宽度变量，如：<code>%</code>、<code>vw</code>、<code>px</code>等</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button-toolbar\",\n    \"className\": \"block m-t\",\n    \"buttons\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"自定义宽度\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"width\": 300,\n                \"title\": \"提示\",\n                \"body\": \"这是个自定义300px宽度的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"自定义高度\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"bottom\",\n                \"height\": 300,\n                \"title\": \"提示\",\n                \"body\": \"这是个自定义300px高度的弹框\"\n            }\n        },\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8C%87%E5%AE%9A%E5%BC%B9%E5%87%BA%E6%96%B9%E5%90%91\" href=\"#%E6%8C%87%E5%AE%9A%E5%BC%B9%E5%87%BA%E6%96%B9%E5%90%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>指定弹出方向</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button-toolbar\",\n    \"className\": \"block m-t\",\n    \"buttons\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"左侧弹出\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"left\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"右侧弹出\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"right\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"顶部弹出\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"top\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"底部弹出\",\n            \"actionType\": \"drawer\",\n            \"drawer\": {\n                \"position\": \"bottom\",\n                \"title\": \"提示\",\n                \"body\": \"这是个简单的弹框\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E6%8B%96%E6%8B%BD%E6%8A%BD%E5%B1%89%E5%A4%A7%E5%B0%8F\" href=\"#%E5%8F%AF%E6%8B%96%E6%8B%BD%E6%8A%BD%E5%B1%89%E5%A4%A7%E5%B0%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可拖拽抽屉大小</h2><p>配置<code>&quot;resizable&quot;: true</code>，可以拖拽调整<code>drawer</code>大小</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"可拖拽调整大小\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n        \"position\": \"right\",\n        \"resizable\": true,\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%AF%E5%90%A6%E5%B1%95%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE\" href=\"#%E6%98%AF%E5%90%A6%E5%B1%95%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>是否展示关闭按钮</h2><p>配置<code>&quot;showCloseButton&quot;: false</code>，可以隐藏关闭按钮</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"无关闭按钮\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n        \"position\": \"right\",\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\",\n        \"showCloseButton\": false\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" href=\"#%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不显示蒙层</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"不显示蒙层\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n        \"position\": \"right\",\n        \"overlay\": false,\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%82%B9%E5%87%BB%E6%8A%BD%E5%B1%89%E5%A4%96%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD\" href=\"#%E7%82%B9%E5%87%BB%E6%8A%BD%E5%B1%89%E5%A4%96%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>点击抽屉外自动关闭</h2><p>配置<code>&quot;closeOnOutside&quot;:true</code></p>\n<h3><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" href=\"#%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示蒙层</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"点击抽屉外自动关闭\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n        \"position\": \"right\",\n        \"closeOnOutside\": true,\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" href=\"#%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不显示蒙层</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"点击抽屉外自动关闭\",\n    \"actionType\": \"drawer\",\n    \"drawer\": {\n        \"position\": \"right\",\n        \"overlay\": false,\n        \"closeOnOutside\": true,\n        \"title\": \"提示\",\n        \"body\": \"这是个简单的弹框\"\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>&quot;drawer&quot;</code> 指定为 Drawer 渲染器</td>\n</tr>\n<tr>\n<td>title</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>弹出层标题</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>往 Drawer 内容区加内容</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td></td>\n<td>指定 Drawer 大小，支持: <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td><code>string</code></td>\n<td></td>\n<td>指定 Drawer 方向，支持: <code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td>``</td>\n<td>Drawer 最外层容器的样式类名</td>\n</tr>\n<tr>\n<td>headerClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>Drawer 头部 区域的样式类名</td>\n</tr>\n<tr>\n<td>bodyClassName</td>\n<td><code>string</code></td>\n<td><code>modal-body</code></td>\n<td>Drawer body 区域的样式类名</td>\n</tr>\n<tr>\n<td>footerClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>Drawer 页脚 区域的样式类名</td>\n</tr>\n<tr>\n<td>showCloseButton</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否展示关闭按钮，当值为 false 时，默认开启 closeOnOutside</td>\n</tr>\n<tr>\n<td>closeOnEsc</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否支持按 <code>Esc</code> 关闭 Drawer</td>\n</tr>\n<tr>\n<td>closeOnOutside</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>点击内容区外是否关闭 Drawer</td>\n</tr>\n<tr>\n<td>overlay</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示蒙层</td>\n</tr>\n<tr>\n<td>resizable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可通过拖拽改变 Drawer 大小</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string | number</code></td>\n<td><code>500px</code></td>\n<td>容器的宽度，在 position 为 <code>left</code> 或 <code>right</code> 时生效</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string | number</code></td>\n<td><code>500px</code></td>\n<td>容器的高度，在 position 为 <code>top</code> 或 <code>bottom</code> 时生效</td>\n</tr>\n<tr>\n<td>actions</td>\n<td>Array&lt;<a href=\"./action\">Action</a>&gt;</td>\n<td>【确认】和【取消】</td>\n<td>可以不设置，默认只有两个按钮。</td>\n</tr>\n<tr>\n<td>data</td>\n<td><code>object</code></td>\n<td></td>\n<td>支持 <a href=\"../../docs/concepts/data-mapping\">数据映射</a>，如果不设定将默认将触发按钮的上下文中继承数据。</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>confirm</td>\n<td><code>event.data: object</code> 抽屉数据<br/><code>[name]: any</code> 当前数据域中指定字段的值</td>\n<td>点击确认提交时触发</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td><code>event.data: object</code> 抽屉数据<br/><code>[name]: any</code> 当前数据域中指定字段的值</td>\n<td>点击取消时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>confirm</td>\n<td>-</td>\n<td>确认（提交）</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>-</td>\n<td>取消（关闭）</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: object</code> 更新的数据</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "抽屉尺寸",
          "fragment": "%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8",
          "fullPath": "#%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8",
          "level": 2
        },
        {
          "label": "自定义抽屉尺寸",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8A%BD%E5%B1%89%E5%B0%BA%E5%AF%B8",
          "level": 2
        },
        {
          "label": "指定弹出方向",
          "fragment": "%E6%8C%87%E5%AE%9A%E5%BC%B9%E5%87%BA%E6%96%B9%E5%90%91",
          "fullPath": "#%E6%8C%87%E5%AE%9A%E5%BC%B9%E5%87%BA%E6%96%B9%E5%90%91",
          "level": 2
        },
        {
          "label": "可拖拽抽屉大小",
          "fragment": "%E5%8F%AF%E6%8B%96%E6%8B%BD%E6%8A%BD%E5%B1%89%E5%A4%A7%E5%B0%8F",
          "fullPath": "#%E5%8F%AF%E6%8B%96%E6%8B%BD%E6%8A%BD%E5%B1%89%E5%A4%A7%E5%B0%8F",
          "level": 2
        },
        {
          "label": "是否展示关闭按钮",
          "fragment": "%E6%98%AF%E5%90%A6%E5%B1%95%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE",
          "fullPath": "#%E6%98%AF%E5%90%A6%E5%B1%95%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE",
          "level": 2
        },
        {
          "label": "不显示蒙层",
          "fragment": "%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
          "fullPath": "#%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
          "level": 2
        },
        {
          "label": "点击抽屉外自动关闭",
          "fragment": "%E7%82%B9%E5%87%BB%E6%8A%BD%E5%B1%89%E5%A4%96%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD",
          "fullPath": "#%E7%82%B9%E5%87%BB%E6%8A%BD%E5%B1%89%E5%A4%96%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD",
          "level": 2,
          "children": [
            {
              "label": "显示蒙层",
              "fragment": "%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
              "fullPath": "#%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
              "level": 3
            },
            {
              "label": "不显示蒙层",
              "fragment": "%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
              "fullPath": "#%E4%B8%8D%E6%98%BE%E7%A4%BA%E8%92%99%E5%B1%82",
              "level": 3
            }
          ]
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
