# 🚀 GitHub Pages 部署指南

## 快速部署步骤（5 分钟完成）

### 第 1 步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. **Repository name:** `intelmt-website`
3. **Description:** 福州智医科技股份有限公司官网
4. **选择:** Public（公开）
5. **不要勾选** Initialize this repository with a README
6. 点击 **Create repository**

---

### 第 2 步：推送代码到 GitHub

在服务器上执行以下命令（替换为你的 GitHub 用户名）：

```bash
cd /home/admin/.openclaw/workspace/intelmt-website

# 添加远程仓库（替换 berlianthio481-cpu 为你的 GitHub 用户名）
git remote add origin https://github.com/berlianthio481-cpu/intelmt-website.git

# 推送代码
git push -u origin main
```

**如果提示需要认证：**
- 使用你的 GitHub Personal Access Token（不是密码）
- 或者使用 SSH 方式（需要先配置 SSH key）

---

### 第 3 步：启用 GitHub Pages

1. 进入你的仓库页面：https://github.com/berlianthio481-cpu/intelmt-website
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. **Source** 选择：`Deploy from a branch`
5. **Branch** 选择：`main` / 文件夹：`/ (root)`
6. 点击 **Save**

---

### 第 4 步：等待部署完成

等待 1-2 分钟，刷新页面，你会看到：

```
Your site is live at https://berlianthio481-cpu.github.io/intelmt-website/
```

---

## 🎉 完成！

你的网站已经上线，可以访问：
```
https://berlianthio481-cpu.github.io/intelmt-website/
```

---

## 🔧 常见问题

### 问题 1：Git Push 需要认证

**解决方案 A - 使用 Personal Access Token：**
1. 访问 https://github.com/settings/tokens
2. 点击 **Generate new token (classic)**
3. 勾选 **repo** 权限
4. 生成后复制 token
5. Push 时用 token 代替密码

**解决方案 B - 使用 SSH：**
```bash
# 生成 SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# 查看公钥
cat ~/.ssh/id_ed25519.pub

# 复制公钥到 GitHub: https://github.com/settings/keys

# 改用 SSH 地址
git remote set-url origin git@github.com:berlianthio481-cpu/intelmt-website.git
git push -u origin main
```

### 问题 2：Pages 页面显示 404

- 等待 2-5 分钟，GitHub 需要时间构建
- 检查 Branch 是否选择了 `main`
- 确认 `index.html` 在仓库根目录

---

## 📝 后续更新

修改网站后，只需执行：
```bash
cd /home/admin/.openclaw/workspace/intelmt-website
git add .
git commit -m "更新说明"
git push
```

GitHub Pages 会自动更新（约 1 分钟）！

---

*最后更新：2026-03-28*
