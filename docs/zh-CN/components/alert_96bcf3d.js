amis.define('docs/zh-CN/components/alert.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Alert 提示",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Alert 提示",
    "icon": null,
    "order": 27,
    "html": "<div class=\"markdown-body\"><p>用来做文字特殊提示，分为四类：提示类、成功类、警告类和危险类。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p><code>level</code>属性支持 4 种预设样式：<code>info</code>, <code>success</code>, <code>warning</code>, <code>danger</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"alert\",\n    \"body\": \"提示类文案\",\n    \"level\": \"info\",\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"提示类标题\",\n    \"body\": \"提示类文案\",\n    \"level\": \"info\",\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"成功类文案\",\n    \"level\": \"success\",\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"成功类标题\",\n    \"body\": \"成功类文案\",\n    \"level\": \"success\",\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"警告类文案\",\n    \"level\": \"warning\",\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"警告类标题\",\n    \"body\": \"警告类文案\",\n    \"level\": \"warning\",\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"危险类文案\",\n    \"level\": \"danger\",\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"危险类标题\",\n    \"body\": \"危险类文案\",\n    \"level\": \"danger\",\n  },\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%9B%BE%E6%A0%87\" href=\"#%E5%9B%BE%E6%A0%87\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图标</h2><p>配置<code>&quot;showIcon&quot;: true</code>后展示图标让信息更加醒目。可以通过<code>icon</code>属性自定义设置 icon 内容，如果<code>icon</code>属性为空，则根据<code>level</code>值添加默认 icon。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"alert\",\n    \"body\": \"提示类文案\",\n    \"level\": \"info\",\n    \"showIcon\": true,\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"提示类标题\",\n    \"body\": \"提示类文案\",\n    \"level\": \"info\",\n    \"showIcon\": true,\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"成功类文案\",\n    \"level\": \"success\",\n    \"showIcon\": true,\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"成功类标题\",\n    \"body\": \"成功类文案\",\n    \"level\": \"success\",\n    \"showIcon\": true,\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"警告类文案\",\n    \"level\": \"warning\",\n    \"showIcon\": true,\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"警告类标题\",\n    \"body\": \"警告类文案\",\n    \"level\": \"warning\",\n    \"showIcon\": true,\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"危险类文案\",\n    \"level\": \"danger\",\n    \"showIcon\": true,\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"危险类标题\",\n    \"body\": \"危险类文案\",\n    \"level\": \"danger\",\n    \"showIcon\": true,\n    \"className\": \"mb-3\"\n  },\n  {\n    \"type\": \"alert\",\n    \"body\": \"自定义ICON文案\",\n    \"showIcon\": true,\n    \"icon\": \"info-circle\",\n    \"className\": \"mb-1\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"自定义ICON标题\",\n    \"body\": \"自定义ICON文案\",\n    \"showIcon\": true,\n    \"icon\": \"fa fa-list\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"level-%E6%94%AF%E6%8C%81%E8%A1%A8%E8%BE%BE%E5%BC%8F\" href=\"#level-%E6%94%AF%E6%8C%81%E8%A1%A8%E8%BE%BE%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>level 支持表达式</h2><blockquote>\n<p>1.6.4 及以上版本</p>\n</blockquote>\n<p>修改下面例子的 status 值为 2 就能看到变化</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" >{\n  \"type\": \"page\",\n  \"data\": {\n    \"status\": 1\n  },\n  \"body\": [\n    {\n      \"type\": \"alert\",\n      \"level\": \"${IFS(status===1, 'danger', status===2, 'warning')}\",\n      \"body\": \"这是内容区\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>同时 icon 和 showIcon 也都支持表达式</p>\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE\" href=\"#%E6%98%BE%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示关闭按钮</h2><p>配置<code>&quot;showCloseButton&quot;: true</code>实现显示关闭按钮。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"alert\",\n    \"body\": \"显示关闭按钮的提示\",\n    \"level\": \"info\",\n    \"showCloseButton\": true,\n    \"showIcon\": true,\n    \"className\": \"mb-2\"\n  },\n  {\n    \"type\": \"alert\",\n    \"title\": \"可关闭提示\",\n    \"body\": \"显示关闭按钮的提示\",\n    \"level\": \"success\",\n    \"showCloseButton\": true,\n    \"showIcon\": true\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;alert&quot;</code></td>\n<td>指定为 alert 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>level</td>\n<td><code>string</code></td>\n<td><code>info</code></td>\n<td>级别，可以是：<code>info</code>、<code>success</code>、<code>warning</code> 或者 <code>danger</code></td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>显示内容</td>\n</tr>\n<tr>\n<td>showCloseButton</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示关闭按钮</td>\n</tr>\n<tr>\n<td>closeButtonClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>关闭按钮的 CSS 类名</td>\n</tr>\n<tr>\n<td>showIcon</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示 icon</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td></td>\n<td>自定义 icon</td>\n</tr>\n<tr>\n<td>iconClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>icon 的 CSS 类名</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "图标",
          "fragment": "%E5%9B%BE%E6%A0%87",
          "fullPath": "#%E5%9B%BE%E6%A0%87",
          "level": 2
        },
        {
          "label": "level 支持表达式",
          "fragment": "level-%E6%94%AF%E6%8C%81%E8%A1%A8%E8%BE%BE%E5%BC%8F",
          "fullPath": "#level-%E6%94%AF%E6%8C%81%E8%A1%A8%E8%BE%BE%E5%BC%8F",
          "level": 2
        },
        {
          "label": "显示关闭按钮",
          "fragment": "%E6%98%BE%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E5%85%B3%E9%97%AD%E6%8C%89%E9%92%AE",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
