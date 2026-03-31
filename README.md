# 智医科技官网

> 为患者解忧，让医院更智慧

**在线预览：** https://berlianthio481-cpu.github.io/intelmt-website  
**设计文档：** [DESIGN.md](DESIGN.md)  
**协作指南：** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📖 项目简介

智医科技官网是健康之路（HK2587）集团旗下子公司智医科技的官方网站，展示智慧医疗解决方案、客户案例和行业洞察。

**技术栈：** HTML5 + CSS3 + JavaScript（无框架依赖）  
**部署：** GitHub Pages  
**许可证：** MIT

---

## 🚀 快速开始

### 本地预览

```bash
# 克隆仓库
git clone https://github.com/berlianthio481-cpu/intelmt-website.git

# 进入目录
cd intelmt-website

# 用浏览器打开
open index.html  # Mac
xdg-open index.html  # Linux
start index.html  # Windows
```

### 在线预览

访问：https://berlianthio481-cpu.github.io/intelmt-website

---

## 📁 项目结构

```
intelmt-website/
├── index.html              # 首页
├── insights.html           # 行业观察（待开发）
├── solutions.html          # 解决方案（待开发）
├── cases.html              # 客户案例（待开发）
├── co-build.html           # 合作伙伴（待开发）
├── about.html              # 关于我们（待开发）
├── css/
│   └── style.css           # 全局样式
├── js/
│   └── main.js             # 交互脚本
├── images/                 # 图片资源
├── DESIGN.md               # 设计思路文档
├── CONTRIBUTING.md         # 协作指南
└── README.md               # 项目说明
```

---

## 🎨 设计特点

### 品牌 VI

| 颜色 | 值 | 说明 |
|------|-----|------|
| 科技蓝 | `#35ADF3` | 主色调 |
| 生命青 | `#62D0EC` | 辅助色 |
| 极客黑 | `#222222` | 文字色 |

### 设计原则

- ✅ 极简主义 - 聚焦核心信息
- ✅ 品牌一致 - 颜色、字体统一
- ✅ 层次清晰 - 板块区隔明确
- ✅ 交互流畅 - 动画过渡自然
- ✅ 响应式 - 适配多设备

### 最新设计（2026-03-31）

1. **首屏行业洞察** - 右侧竖向列表布局
2. **客户案例** - 华为云风格卡片设计
3. **板块区隔** - 浅灰 - 白 - 浅灰视觉节奏

---

## 🛠️ 开发指南

### 创建新页面

1. 复制 `index.html` 作为模板
2. 修改页面内容
3. 保持导航栏和底部与首页一致
4. 使用现有的 CSS 组件类

详细指南：[CONTRIBUTING.md](CONTRIBUTING.md)

### 代码规范

```bash
# 提交格式
git commit -m "feat: 添加新功能"
git commit -m "style: 优化样式"
git commit -m "docs: 更新文档"
```

### 部署

```bash
# 推送到 main 分支，自动部署到 GitHub Pages
git push origin main
```

---

## 📋 待开发页面

| 页面 | 状态 | 说明 |
|------|------|------|
| 首页 | ✅ 已完成 | 2026-03-31 版本 |
| 行业观察 | ⏳ 待开发 | 行业洞察、观点文章 |
| 解决方案详情 | ⏳ 待开发 | 各解决方案详细介绍 |
| 客户案例详情 | ⏳ 待开发 | 各案例详细介绍 |
| 合作伙伴 | ⏳ 待开发 | 渠道、投资人、招聘 |
| 关于我们 | ⏳ 待开发 | 公司简介、联系方式 |

---

## 🤝 参与协作

欢迎参与项目开发！

1. **Fork 仓库**
2. **创建分支** `git checkout -b feature/新功能`
3. **提交更改** `git commit -m "feat: 添加新功能"`
4. **推送到分支** `git push origin feature/新功能`
5. **创建 Pull Request**

详细协作指南：[CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📞 联系方式

**公司：** 福州智医科技股份有限公司  
**地址：** 福州市仓山区建新镇金洲北路 33 号瑞科医药健康产业园 4 号楼 B 栋 301 室  
**邮箱：** chench@intelmt.com  
**电话：** 400-811-0699

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 🙏 致谢

- 设计灵感：华为云官网
- 字体：Google Fonts Noto Sans SC
- 托管：GitHub Pages

---

*最后更新：2026-03-31*
