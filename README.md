# 风华无缺 - HTML版本

# 代码二改： 百业成员 鄢奕秋 
1. 添加动画 动效
2. 优化一小部分代码
3. 添加点击动画

# 成员数据： 百业成员 温相逢 
1. 以JOSN格式递增百业成员数据

## 项目结构

```
html/
├── index.html          # 主页面文件
├── styles.css          # 主样式文件
├── script.js           # 主JavaScript文件
├── config.js           # 配置文件（颜色、背景、音乐等设置）
├── data.js             # 数据文件（角色、组织等）
├── imageUtils.js       # 图片处理工具函数
├── test.html           # 配置测试页面
└── README.md           # 说明文档
```

## 使用方法

1. **直接打开**：双击 `index.html` 文件在浏览器中打开

## 注意事项

1. **音频自动播放**：现代浏览器可能阻止自动播放，需要用户交互后才能播放

## 自定义配置

### 🎨 主配置文件 (config.js)
所有可自定义的设置都集中在 `config.js` 文件中，包括：

#### 🎵 音频设置
```javascript
audio: {
    backgroundMusic: "/Music/background.mp3",  // 背景音乐文件路径
    defaultVolume: 0.3,                         // 默认音量 (0-1)
    autoPlay: true,                             // 是否自动播放
    loop: true                                  // 是否循环播放
}
```

#### 🖼️ 背景设置
```javascript
backgrounds: {
    heroBackground: "图片URL",                      // 英雄区域背景图片
    demoVideoBackground: "视频URL",                 // 视频展示区域背景视频
    organizationVideoBackground: "视频URL",         // 组织活动区域背景视频
    characterBackground: "渐变色或图片URL"           // 角色区域背景
}
```

#### 🎨 颜色主题
```javascript
colors: {
    primary: {
        main: "#F7FAFC",                        // 主色调
        secondary: "#E2E8F0",                   // 次要颜色
        accent: "#2D3748"                       // 强调色
    },
    navbar: {
        background: "rgba(45, 55, 72, 0.95)",   // 导航栏背景
        textColor: "#E2E8F0"                    // 导航栏文字颜色
    },
    // ... 更多颜色设置
}
```

#### 📐 布局设置
```javascript
layout: {
    containerWidth: "1200px",                   // 容器最大宽度
    minPageWidth: "1920px",                     // 最小页面宽度
    navbarHeight: "70px"                        // 导航栏高度
}
```

#### ✨ 动画设置
```javascript
animations: {
    transitionDuration: "0.3s",                 // 过渡动画时长
    titleGlowDuration: "3s",                    // 标题发光动画时长
    flipDuration: "0.5s"                        // 3D翻转动画时长
}
```

#### 🔧 功能设置
```javascript
features: {
    charactersPerPage: 24,                      // 每页显示角色数
    characterInfoDisplayTime: 2000,             // 角色信息显示时长
    enableImagePreload: true,                   // 是否启用图片预加载
    enable3DFlip: true                          // 是否启用3D翻转效果
}
```

#### 📝 角色信息样式设置
```javascript
typography: {
    characterInfo: {
        // 角色名称样式
        name: {
            fontSize: "8.0rem",                 // 字体大小
            color: "#ffffff",                   // 文字颜色
            textAlign: "center",                // 对齐方式（left/center/right）
        },
        // 角色职位样式
        title: {
            fontSize: "2.5rem",                 // 字体大小
            color: "#E2E8F0",                   // 文字颜色
            textAlign: "center",                // 对齐方式（left/center/right）对应（左靠齐）（居中）（右靠齐）
        },
        // 角色描述样式
        description: {
            fontSize: "1.8rem",                 // 字体大小
            color: "#CBD5E0",                   // 文字颜色
            textAlign: "center",                // 对齐方式（left/center/right）对应（左靠齐）（居中）（右靠齐）
        }
    }
}
```

### 📝 修改角色数据
编辑 `data.js` 文件中的 `characterData` 数组：

```javascript
{
  id: 'unique_id',
  name: "角色名称",
  title: "角色职位",
  desc: "角色描述",
  tags: ["标签1", "标签2"],
  avatar: "头像URL",
  art: ["立绘URL1", "立绘URL2"]
}
```

### 🏢 修改组织活动
编辑 `data.js` 文件中的 `organizationsData` 数组。

### 🎯 性能优化建议
1. **图片优化**：使用适当的图片格式和尺寸
2. **视频优化**：选择合适的视频质量和格式
3. **预加载控制**：根据需要启用/禁用图片预加载
4. **缓存策略**：合理设置静态资源的缓存时间

## 📝 常用工具命令

### sharp  CLI

使用教程

```bash
npm install -g sharp-cli

sharp -i *.png -o ./ --format avif
```

### surge  CLI

使用教程

```bash
npm install --global surge

surge
```

图床链接

https://tc.qdqqd.com/



## 嵌入抖音视频

要在网页中嵌入抖音视频，可以通过获取视频的分享链接，然后生成对应的iframe代码。

步骤

- **获取分享链接**： 选中需要分享的视频。 点击“分享”按钮。 选择“复制链接”。

- **解析视频ID**： 将复制的链接粘贴到浏览器中打开。 从链接中提取视频ID，例如：https://v.douyin.com/i2YArd1J/，放入浏览器打开后，其中7364265076712312127就是视频ID。
- **获取IFrame代码**：将获取到的视频id填入下面的链接中“https://open.douyin.com/api/douyin/v1/video/get_iframe_by_video?video_id=   ID放在这里”，并在浏览器中输入

- **生成iframe代码**： 使用以下格式生成iframe代码：

- ```json
   <iframe width="1920" height="1080" frameborder="0" src="https://open.douyin.com/player/video?vid=7364265076712312127&autoplay=0" referrerpolicy="unsafe-url" allowfullscreen> </iframe>
  ```

```html
src="https://open.douyin.com/player/video?vid=7364265076712312127&autoplay=0"
```

把src后面的链接放入到dada的链接中，你就可以在网页中嵌入并播放抖音视频了。

# 部署完后的注意事项：查看网页时要在连接前添加“https://”
