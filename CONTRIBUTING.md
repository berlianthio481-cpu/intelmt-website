# 智医科技官网 - 设计协作指南

**项目地址：** https://github.com/berlianthio481-cpu/intelmt-website  
**在线预览：** https://berlianthio481-cpu.github.io/intelmt-website  
**文档版本：** v1.0  
**更新日期：** 2026-03-31

---

## 📖 如何使用这份指南

这份指南帮助你：
1. **理解现有设计** - 品牌规范、设计原则、组件库
2. **快速上手开发** - 项目结构、开发流程、部署方式
3. **设计新页面** - 页面模板、设计规范、示例代码
4. **协作开发** - Git 流程、代码规范、提交约定

---

## 🎯 第一部分：理解现有设计

### 1.1 品牌 VI 规范

| 元素 | 值 | 使用场景 |
|------|-----|----------|
| **科技蓝** | `#35ADF3` | 主按钮、链接、图标、强调文字 |
| **生命青** | `#62D0EC` | 辅助按钮、次要图标、渐变搭配 |
| **极客黑** | `#222222` | 主标题、正文文字 |
| **浅灰背景** | `#F8FAFC` | 板块背景、卡片背景 |
| **白色** | `#FFFFFF` | 卡片背景、内容区域 |

**渐变组合：**
```css
/* 主渐变 */
background: linear-gradient(135deg, #35ADF3 0%, #0852F7 100%);

/* 辅助渐变 */
background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%);
```

### 1.2 设计原则

1. **极简主义** - 去掉多余元素，聚焦核心信息
2. **品牌一致** - 颜色、字体、间距保持统一
3. **层次清晰** - 通过背景色区隔板块
4. **交互流畅** - 悬停动画、平滑过渡
5. **响应式** - 适配桌面、平板、手机

### 1.3 字体规范

```css
/* 字体栈 */
font-family: 'Noto Sans SC', 'Alibaba PuHuiTi', sans-serif;

/* 字号规范 */
--text-xs: 12px;    /* 标签、辅助文字 */
--text-sm: 14px;    /* 正文、描述 */
--text-base: 15px;  /* 主要内容 */
--text-lg: 18px;    /* 小标题 */
--text-xl: 22px;    /* 中标题 */
--text-2xl: 28px;   /* 大标题 */
--text-3xl: 36px;   /* 超大标题 */
--text-4xl: 42px;   /* 首屏标题 */
```

### 1.4 间距规范

```css
/* 统一使用 4px 倍数 */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
```

---

## 🏗️ 第二部分：项目结构

### 2.1 目录结构

```
intelmt-website/
├── index.html              # 首页（参考模板）
├── insights.html           # 行业观察（待开发）
├── solutions.html          # 解决方案（待开发）
├── cases.html              # 客户案例（待开发）
├── co-build.html           # 合作伙伴（待开发）
├── about.html              # 关于我们（待开发）
├── css/
│   └── style.css           # 全局样式（组件库）
├── js/
│   └── main.js             # 交互脚本
├── images/                 # 图片资源
│   ├── logo.png
│   ├── product-ui.png
│   └── wechat-qr.jpg
├── DESIGN.md               # 设计思路文档
├── CONTRIBUTING.md         # 协作指南（本文件）
└── README.md               # 项目说明
```

### 2.2 样式组织

```css
/* style.css 结构 */
1. 全局重置与变量
2. 导航栏
3. 首屏模块
4. 解决方案模块
5. 客户案例模块
6. 强强联合模块
7. 底部模块
8. 响应式设计
```

### 2.3 组件库

现有可复用组件：

| 组件 | CSS 类 | 说明 |
|------|--------|------|
| 按钮 | `.btn`, `.btn-primary`, `.btn-outline` | 主按钮、描边按钮 |
| 卡片 | `.solution-card`, `.case-item`, `.eco-card` | 各种卡片样式 |
| 标签 | `.category-tab`, `.insight-tag` | 分类标签 |
| 图标 | SVG 内联 | 统一使用 SVG 图标 |

---

## 📝 第三部分：开发新页面

### 3.1 页面模板

创建新页面时，复制以下模板：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 - 智医科技</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- 导航栏（与首页一致） -->
    <nav class="navbar">
        <!-- 复制首页导航栏代码 -->
    </nav>

    <!-- 页面内容 -->
    <section class="page-section">
        <div class="container">
            <div class="section-header">
                <h2>页面标题</h2>
                <div class="section-divider"></div>
                <p>页面描述</p>
            </div>
            
            <!-- 内容区域 -->
        </div>
    </section>

    <!-- 底部（与首页一致） -->
    <footer>
        <!-- 复制首页底部代码 -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### 3.2 板块样式参考

**浅色背景板块：**
```css
.page-section {
    padding: 100px 0;
    background: #F8FAFC;  /* 浅灰背景 */
}
```

**白色背景板块：**
```css
.page-section {
    padding: 100px 0;
    background: #FFFFFF;  /* 白色背景 */
}
```

**标题样式：**
```css
.section-header h2 {
    font-size: 36px;
    font-weight: 900;
    color: #222222;
    text-align: center;
}

.section-divider {
    width: 96px;
    height: 6px;
    background: linear-gradient(90deg, #35ADF3 0%, #62D0EC 100%);
    border-radius: 3px;
    margin: 24px auto;
}
```

### 3.3 卡片样式参考

**标准卡片：**
```css
.standard-card {
    background: #FFFFFF;
    border: 1px solid rgba(204, 204, 204, 0.3);
    border-radius: 12px;
    padding: 40px;
    transition: all 0.3s ease;
}

.standard-card:hover {
    border-color: rgba(53, 173, 243, 0.5);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}
```

---

## 🔧 第四部分：开发流程

### 4.1 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/berlianthio481-cpu/intelmt-website.git

# 2. 进入目录
cd intelmt-website

# 3. 创建新分支
git checkout -b feature/新页面名称

# 4. 开发新页面
# 复制 index.html 为模板，修改内容

# 5. 本地预览
open index.html  # Mac
xdg-open index.html  # Linux
start index.html  # Windows
```

### 4.2 提交代码

```bash
# 1. 添加文件
git add .

# 2. 提交（使用约定式提交）
git commit -m "feat: 添加行业观察页面"
git commit -m "style: 优化卡片样式"
git commit -m "docs: 更新设计文档"

# 3. 推送
git push origin feature/新页面名称
```

### 4.3 提交约定

| 前缀 | 说明 | 示例 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加行业观察页面` |
| `style:` | 样式调整 | `style: 优化卡片悬停效果` |
| `docs:` | 文档更新 | `docs: 更新 README.md` |
| `fix:` | Bug 修复 | `fix: 修复移动端布局问题` |
| `refactor:` | 重构 | `refactor: 重构导航栏代码` |

### 4.4 部署

```bash
# 推送到 main 分支，GitHub Pages 自动部署
git checkout main
git merge feature/新页面名称
git push origin main

# 访问：https://berlianthio481-cpu.github.io/intelmt-website
```

---

## 🎨 第五部分：设计示例

### 示例 1：行业观察页面

```html
<section class="insights-page">
    <div class="container">
        <div class="section-header">
            <h2>行业观察</h2>
            <div class="section-divider"></div>
            <p>洞察医疗数字化趋势</p>
        </div>
        
        <div class="insights-grid">
            <article class="insight-card">
                <span class="insight-category">重磅发布</span>
                <h3>文章标题</h3>
                <p>文章摘要...</p>
                <a href="#" class="read-more">阅读更多 →</a>
            </article>
            <!-- 更多文章卡片 -->
        </div>
    </div>
</section>
```

### 示例 2：解决方案详情页

```html
<section class="solution-detail">
    <div class="container">
        <div class="solution-header">
            <h1>解决方案名称</h1>
            <p>解决方案描述</p>
        </div>
        
        <div class="solution-content">
            <div class="feature-list">
                <div class="feature-item">
                    <div class="feature-icon">
                        <!-- SVG 图标 -->
                    </div>
                    <h3>功能特性</h3>
                    <p>功能描述...</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🤝 第六部分：协作建议

### 6.1 分工建议

| 角色 | 职责 |
|------|------|
| **设计师** | 页面视觉设计、UI 规范 |
| **前端开发** | HTML/CSS/JS实现、响应式适配 |
| **内容编辑** | 文案撰写、图片准备 |
| **测试** | 多浏览器测试、多设备测试 |

### 6.2 沟通方式

1. **GitHub Issues** - 提交问题、需求讨论
2. **Pull Requests** - 代码审查、合并讨论
3. **项目看板** - 任务分配、进度跟踪

### 6.3 代码审查清单

- [ ] 代码格式是否统一
- [ ] 是否符合品牌 VI 规范
- [ ] 是否适配移动端
- [ ] 是否有浏览器兼容性测试
- [ ] 是否有性能优化考虑

---

## 📚 第七部分：学习资源

### 7.1 参考项目

- [华为云官网](https://www.huaweicloud.com/) - 卡片设计参考
- [阿里云官网](https://www.aliyun.com/) - 板块布局参考
- [腾讯医典](https://yixian.qq.com/) - 医疗行业参考

### 7.2 设计工具

- **Figma** - UI 设计、原型制作
- **VS Code** - 代码编辑
- **Live Server** - 本地预览

### 7.3 技术文档

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS 文档
- [CSS Tricks](https://css-tricks.com/) - CSS 技巧
- [Can I Use](https://caniuse.com/) - 浏览器兼容性查询

---

## ❓ 常见问题

### Q1: 如何修改 logo？
A: 替换 `images/logo.png`，保持尺寸比例一致。

### Q2: 如何修改颜色？
A: 在 `css/style.css` 中修改 CSS 变量 `--color-blue` 等。

### Q3: 如何添加新字体？
A: 在 `<head>` 中添加 Google Fonts 链接，然后在 CSS 中使用。

### Q4: 如何测试移动端？
A: 浏览器开发者工具 → 切换设备模式，或实际用手机访问。

### Q5: 部署后多久生效？
A: GitHub Pages 通常 1-3 分钟完成部署。

---

## 📞 联系与支持

**项目维护：** 智医科技  
**联系方式：** chench@intelmt.com  
**GitHub Issues:** https://github.com/berlianthio481-cpu/intelmt-website/issues

---

*本协作指南持续更新，最后更新：2026-03-31*
