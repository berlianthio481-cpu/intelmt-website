# 🚀 智医科技官网 - 快速部署指南

## 方案一：Netlify Drop（最简单，推荐！）⭐

**无需注册，30 秒上线**

1. 打开 https://app.netlify.com/drop
2. 把整个 `intelmt-website` 文件夹拖进去
3. 等待上传完成（约 10 秒）
4. 获得公开访问链接（如：`https://yoursite-123456.netlify.app`）

**优点：**
- ✅ 无需注册即可预览
- ✅ 免费 HTTPS
- ✅ 全球 CDN 加速
- ✅ 后续可绑定自定义域名

---

## 方案二：GitHub Pages（永久免费）

**适合长期运营**

### 步骤：

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 创建新仓库，例如：intelmt-website
   ```

2. **上传代码**
   ```bash
   cd /home/admin/.openclaw/workspace/intelmt-website
   
   git init
   git add .
   git commit -m "Initial commit - 智医科技官网首页"
   
   # 替换为你的 GitHub 仓库地址
   git remote add origin https://github.com/YOUR_USERNAME/intelmt-website.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支
   - 保存后获得访问链接：`https://YOUR_USERNAME.github.io/intelmt-website/`

**优点：**
- ✅ 永久免费
- ✅ 可绑定自定义域名
- ✅ 版本管理方便

---

## 方案三：Vercel（推荐企业使用）

**专业部署平台**

1. 访问 https://vercel.com
2. 用 GitHub 账号登录
3. Import 项目（选择你的仓库）
4. 点击 Deploy

**优点：**
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（Git 推送即更新）
- ✅ 企业级稳定性

---

## 方案四：临时预览（快速测试）

**使用本地服务器 + 内网穿透**

```bash
# 1. 启动本地服务器
cd /home/admin/.openclaw/workspace/intelmt-website
python3 -m http.server 8888

# 2. 使用 ngrok 暴露到公网（需要先安装 ngrok）
ngrok http 8888
```

获得临时链接（有效期几小时）

---

## 🎯 推荐流程

**快速预览 → Netlify Drop（方案一）**
**长期使用 → GitHub Pages（方案二）**

---

## 📱 部署后检查清单

- [ ] 首页正常显示
- [ ] 移动端适配正常
- [ ] 所有链接可点击
- [ ] 表单可以提交
- [ ] 图片加载正常

---

## 🔧 需要帮助？

联系技术支持或查看 README.md 获取更多文档。

---

*最后更新：2026-03-28*
