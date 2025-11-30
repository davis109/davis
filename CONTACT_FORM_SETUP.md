# Contact Form Setup Instructions

Your portfolio now has a working contact form that will send emails directly to you!

## 🚀 Quick Setup (2 minutes)

### Step 1: Get Your Free API Key

1. Go to **[Web3Forms.com](https://web3forms.com/)**
2. Enter your email: **sebastiandavis109@gmail.com**
3. Click "Create Access Key"
4. Copy the access key you receive

### Step 2: Add Your Access Key

1. Open `index.html`
2. Find this line (around line 245):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### Step 3: Test It!

1. Open your portfolio
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox!

## ✨ Features

✅ **Free Forever** - No credit card required
✅ **Unlimited Submissions** - No limits on the free plan
✅ **Spam Protection** - Built-in spam filtering
✅ **Email Notifications** - Instant email to sebastiandavis109@gmail.com
✅ **No Backend Needed** - Works with static HTML
✅ **Beautiful Animations** - Success/error messages with smooth animations

## 📧 Email Format

You'll receive emails with:
- **Subject**: New Contact from Portfolio
- **From**: The visitor's email
- **Content**: Name, email, and message

## 🛠️ Alternative Options

If you prefer other services:

### 1. **EmailJS** (More features)
- Visit [emailjs.com](https://www.emailjs.com/)
- Free tier: 200 emails/month
- Requires more setup but offers templates

### 2. **Formspree** (Popular choice)
- Visit [formspree.io](https://formspree.io/)
- Free tier: 50 submissions/month
- Simple integration

### 3. **Getform** (Developer-friendly)
- Visit [getform.io](https://getform.io/)
- Free tier: 50 submissions/month
- Nice dashboard

## 🔧 Troubleshooting

**Not receiving emails?**
- Check your spam folder
- Verify the access key is correct
- Make sure your email is verified with Web3Forms

**Form not submitting?**
- Check browser console for errors
- Ensure you have internet connection
- Verify the access key is added

## 📝 Customization

Want to customize the email subject or format?

Edit these lines in `index.html`:
```html
<input type="hidden" name="subject" value="New Contact from Portfolio">
<input type="hidden" name="from_name" value="Portfolio Contact Form">
```

You can also add:
- Auto-reply to visitors
- CC/BCC to multiple emails
- Custom redirect after submission

Check [Web3Forms Documentation](https://docs.web3forms.com/) for all options!

---

**Need Help?** Contact Web3Forms support or check your console for error messages.
