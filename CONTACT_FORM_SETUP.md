# Contact Form Setup Documentation

## Overview

The contact form uses **FormSubmit** (https://formsubmit.co) - a free form backend service that sends form submissions directly to your email without requiring any server-side code.

## Current Configuration

### Email Address
- **Primary Email**: `mwaleedkhalil@gmail.com`
- All form submissions will be sent to this email address

### Form Features Enabled

✅ **Subject Line**: "New Contact Form Submission - Muhammad Waleed Khalil Portfolio"  
✅ **Email Template**: Table format (clean, organized display)  
✅ **reCAPTCHA**: Enabled (spam protection)  
✅ **Honeypot Field**: Hidden field to catch bots  
✅ **Success Redirect**: Returns to contact page with success message  
✅ **Reply-To Field**: Automatically set to sender's email for easy replies  

### Form Fields

1. **Name** (Required)
   - Field name: `name`
   - Type: Text
   - Validation: Required

2. **Email** (Required)
   - Field name: `email`
   - Type: Email
   - Validation: Required, valid email format
   - Used for Reply-To functionality

3. **Message** (Required)
   - Field name: `message`
   - Type: Textarea
   - Validation: Required

4. **Phone Number** (Optional)
   - Field name: `phone`
   - Type: Tel
   - Validation: None

### Hidden Configuration Fields

```html
<!-- Subject line for emails -->
<input type="hidden" name="_subject" value="New Contact Form Submission - Muhammad Waleed Khalil Portfolio" />

<!-- Redirect after submission -->
<input type="hidden" name="_next" value="https://yoursite.com/contact?success=true" />

<!-- Email template format -->
<input type="hidden" name="_template" value="table" />

<!-- Enable reCAPTCHA -->
<input type="hidden" name="_captcha" value="true" />

<!-- Honeypot spam protection -->
<input type="text" name="_honey" style="display:none" />
```

## First-Time Setup

### Step 1: Activate Your Email

When you first deploy the site and someone submits the form, FormSubmit will send you a **confirmation email** to `mwaleedkhalil@gmail.com`.

**Important**: You MUST click the confirmation link in that email to activate the form!

### Step 2: Test the Form

1. Go to your deployed site's contact page
2. Fill out the form with test data
3. Click "Send Message"
4. Complete the reCAPTCHA
5. Check your email inbox for the confirmation email
6. Click the activation link

### Step 3: Verify It Works

After activation:
1. Submit another test form
2. You should receive the submission directly in your inbox
3. The email will have "Reply-To" set to the sender's email

## Email Format

You will receive emails formatted like this:

```
Subject: New Contact Form Submission - Muhammad Waleed Khalil Portfolio

From: FormSubmit <noreply@formsubmit.co>
Reply-To: sender@example.com

┌─────────────┬────────────────────────────────┐
│ Field       │ Value                          │
├─────────────┼────────────────────────────────┤
│ Name        │ John Doe                       │
│ Email       │ john@example.com               │
│ Message     │ I would like to hire you...    │
│ Phone       │ +92 300 1234567                │
└─────────────┴────────────────────────────────┘
```

## Advanced Configuration Options

### Add CC Recipients

To send copies to additional email addresses:

```html
<input type="hidden" name="_cc" value="assistant@example.com,manager@example.com" />
```

### Custom Auto-Response

To send an automatic reply to users:

```html
<input type="hidden" name="_autoresponse" value="Thank you for contacting Muhammad Waleed Khalil. I will respond within 24-48 hours." />
```

### Blacklist Spam Keywords

To filter out spam:

```html
<input type="hidden" name="_blacklist" value="viagra,casino,lottery" />
```

### Disable reCAPTCHA (Not Recommended)

```html
<input type="hidden" name="_captcha" value="false" />
```

## Troubleshooting

### Form Not Working

1. **Check Email Activation**: Make sure you clicked the confirmation link
2. **Check Spam Folder**: FormSubmit emails might go to spam initially
3. **Verify Email Address**: Ensure `mwaleedkhalil@gmail.com` is correct
4. **Test Without Ad Blockers**: Some ad blockers interfere with forms

### Not Receiving Emails

1. Check your spam/junk folder
2. Add `noreply@formsubmit.co` to your contacts
3. Whitelist the domain in your email settings
4. Verify email activation was completed

### Success Message Not Showing

1. Check browser console for JavaScript errors
2. Ensure the URL parameter `?success=true` is in the redirect URL
3. Clear browser cache and test again

## Submission Archive

FormSubmit keeps submissions for **30 days**. You can access them via their API.

### Get API Key

```bash
curl -X GET https://formsubmit.co/api/get-apikey/mwaleedkhalil@gmail.com
```

Check your email for the API key.

### Retrieve Submissions

```bash
curl -X GET https://formsubmit.co/api/get-submissions/<your-api-key>
```

**Note**: API access is limited to 5 times per day.

## Security Features

✅ **reCAPTCHA v2**: Prevents bot submissions  
✅ **Honeypot Field**: Hidden field catches simple bots  
✅ **HTTPS Only**: All submissions encrypted in transit  
✅ **No Database Storage**: Submissions sent directly to email  
✅ **Email Validation**: Built-in email format checking  

## Limitations

- **Rate Limiting**: Submissions may be rate-limited per IP
- **File Size**: No file uploads in current configuration
- **Retention**: Submissions archived for 30 days only
- **API Calls**: 5 API calls per day limit

## Backup Solution

If FormSubmit experiences downtime, you can quickly switch to an alternative:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms (if hosted on Netlify)
```html
<form name="contact" netlify>
```

### Option 3: Custom Backend
The existing `/api/contact` route is still available if you want to set up your own email service using Nodemailer.

## Contact Information

**Developer**: Muhammad Waleed Khalil  
**Email**: mwaleedkhalil@gmail.com  
**Portfolio**: https://waleedkhalil.vercel.app

## Links

- FormSubmit Documentation: https://formsubmit.co
- FormSubmit API Docs: https://formsubmit.co/#api
- Support: Use the contact form on FormSubmit's website

---

**Last Updated**: 2025
**Version**: 1.0