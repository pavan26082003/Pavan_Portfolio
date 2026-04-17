# 🚀 QUICK REFERENCE CARD

## Your Daily Git Workflow (Copy & Paste)

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with message
git commit -m "your message here"

# Push to GitHub (triggers auto-deploy)
git push origin main
```

---

## Important URLs

| What | URL |
|------|-----|
| **Live Site** | https://pavankiran.netlify.app/ |
| **GitHub Repo** | https://github.com/pavan26082003/Pavan_Portfolio |
| **Netlify Dashboard** | https://app.netlify.com/sites/pavankiran |
| **Deploy Logs** | https://app.netlify.com/sites/pavankiran/deploys |

---

## Common Issues & Quick Fixes

### CSS not updating?
```bash
# Increment version number in index.html
# Change: css/style.css?v=2
# To: css/style.css?v=3

# Then commit and push
git add index.html
git commit -m "fix: update CSS cache version"
git push origin main
```

### Hard refresh browser
- **Windows**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`
- **Or**: Test in incognito/private mode

### Check if deploy succeeded
1. Go to: https://app.netlify.com/sites/pavankiran/deploys
2. Latest deploy should show green "Published"
3. Wait 1-2 minutes if "Building"

---

## Commit Message Templates

```bash
git commit -m "feat: add new project section"
git commit -m "fix: correct mobile menu bug"
git commit -m "style: update color scheme"
git commit -m "docs: update README"
git commit -m "refactor: reorganize CSS"
```

---

## Emergency Commands

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Discard all local changes
```bash
git reset --hard origin/main
```

### View recent commits
```bash
git log --oneline -10
```

### Check which branch you're on
```bash
git branch
# Should show: * main
```

---

## Deployment Timeline

1. **You push**: `git push origin main`
2. **GitHub receives**: Instant
3. **Netlify detects**: 5-10 seconds
4. **Build starts**: 10-30 seconds
5. **Deploy completes**: 30-60 seconds
6. **CDN updates**: 1-2 minutes
7. **Total time**: ~2-3 minutes

---

## Browser Testing Checklist

After each deploy:
- [ ] Hard refresh (`Ctrl + Shift + R`)
- [ ] Test in incognito mode
- [ ] Check on mobile device
- [ ] Open browser console (F12) - should be no errors
- [ ] Verify CSS is loading (colors, layout, animations)

---

## File Structure (Don't Change)

```
Pavan_Portfolio/
├── index.html          ← Main page
├── css/
│   ├── style.css       ← Main styles
│   └── blog.css        ← Blog styles
├── js/
│   └── main.js         ← JavaScript
├── assets/
│   ├── icons/          ← Favicons
│   └── images/         ← Profile images
├── blog/               ← Blog posts
├── netlify.toml        ← Netlify config
├── _headers            ← Security headers
├── robots.txt          ← SEO
└── sitemap.xml         ← SEO
```

---

## When to Update CSS Version

Update `?v=X` in index.html when you:
- Change CSS colors
- Modify layouts
- Update animations
- Add new styles
- Fix CSS bugs

**Example:**
```html
<!-- Increment the number -->
<link rel="stylesheet" href="css/style.css?v=3">
```

---

## Git Status Meanings

```bash
git status

# Untracked files (red) = New files not in git
# Changes not staged (red) = Modified files
# Changes to be committed (green) = Staged files
# nothing to commit = All changes pushed
```

---

## Netlify Deploy Status

| Status | Meaning | Action |
|--------|---------|--------|
| 🟢 **Published** | Live on site | ✅ Done |
| 🟡 **Building** | In progress | ⏳ Wait 1-2 min |
| 🔴 **Failed** | Build error | 🔍 Check logs |
| ⚪ **Queued** | Waiting to start | ⏳ Wait |

---

## Pro Tips

1. **Always commit before closing VS Code**
2. **Push at least once per day**
3. **Test in incognito after every deploy**
4. **Keep commit messages clear and short**
5. **Don't create new branches (you're solo)**
6. **Wait 2 minutes after push before checking site**

---

## Help Commands

```bash
# Show all git commands
git help

# Show specific command help
git help commit

# Show git version
git --version

# Show remote repository
git remote -v

# Show all branches
git branch -a
```

---

## Contact Form Testing

Your EmailJS contact form:
- Service ID: Check `js/main.js`
- Template ID: Check `js/main.js`
- Public Key: Check `js/main.js`

Test at: https://pavankiran.netlify.app/#contact

---

## Performance Check

Test your site speed:
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

---

## SEO Check

Verify your SEO:
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster**: https://www.bing.com/webmasters
- **Sitemap**: https://pavankiran.netlify.app/sitemap.xml
- **Robots.txt**: https://pavankiran.netlify.app/robots.txt

---

## Security Headers Check

Test your security:
- **Security Headers**: https://securityheaders.com/
- Your site should score **A** or **A+**

---

## Mobile Testing

Test on real devices or:
- **Chrome DevTools**: F12 → Toggle device toolbar
- **Responsive Design Mode**: Ctrl + Shift + M
- **BrowserStack**: https://www.browserstack.com/

---

## Backup Strategy

Your code is safe because:
1. ✅ Stored on GitHub (cloud backup)
2. ✅ Deployed on Netlify (separate copy)
3. ✅ Local copy on your computer

**To download backup:**
```bash
git clone https://github.com/pavan26082003/Pavan_Portfolio.git backup-folder
```

---

## Remember

🎯 **One branch**: `main`
🚀 **One command**: `git push origin main`
⏱️ **Wait time**: 2 minutes for deploy
🔄 **Hard refresh**: `Ctrl + Shift + R`
🕵️ **Test mode**: Incognito/private browsing

---

**Keep this file handy! Bookmark it in VS Code.**
