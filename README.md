# 🌍 Imole Network Foundation Website

**Imole Network Foundation** is a humanitarian organization focused on
uplifting communities across Nigeria through **education, healthcare,
and social empowerment**.\
This website was built to showcase the foundation's work, engage donors
and volunteers, and create transparency around its impact-driven
projects.

---

## ✨ Overview

The platform provides a seamless way for visitors to: - Learn about the
foundation's mission and vision - Explore ongoing and completed
projects - Become volunteers or make donations - Stay updated through
blogs and news - Contact the organization easily through structured
forms

It combines a clean UI with scalable architecture and accessibility in
mind --- helping the foundation reach more people digitally.

---

## 🚀 Features

- 🏠 **Dynamic Home Page** --- Hero section, calls to action, and
  mission highlights\
- 🧱 **Projects & Programs** --- Fully detailed project pages with
  images and impact stories\
- ❤️ **Donation System** --- Supports both online and bank transfer
  options\
- 🙌 **Volunteer Application** --- Integrated form with automated
  email notifications (user + admin)\
- 📰 **News & Articles** --- Blog section for stories, updates, and
  community highlights\
- 👥 **Team & Volunteers Section** --- Showcases leadership and active
  contributors\
- 💬 **Contact Form** --- With dropdown subject options and email
  automation\
- 📱 **Fully Responsive** --- Optimized for desktop, tablet, and
  mobile\
- 🔍 **SEO Optimized** --- Structured metadata and accessibility best
  practices

---

## 🧰 Tech Stack

**Frontend:**\

- [Next.js](https://nextjs.org/)\
- [React](https://react.dev/)\
- [Tailwind CSS](https://tailwindcss.com/)

**Form Handling & Emails:**\

- [EmailJS](https://www.emailjs.com/) / Nodemailer\
- [Zod](https://zod.dev/) for validation\
- Custom form logic for admin/user notifications

**Additional Tools:**\

- ShadCN/UI Components\
- Lucide Icons\
- Framer Motion (for subtle animations)

---

## 🧩 Folder Structure

    /app
      /components
      /data
      /pages
      /public
      /styles

---

## 🧪 Setup Instructions

1.  **Clone the repository**

    ```bash
    git clone https://github.com/tomiwa-adelae/Imole-Network-Foundation
    ```

2.  **Navigate into the project directory**

    ```bash
    cd imole-network-foundation
    ```

3.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

5.  Open your browser and visit:\
    👉 `http://localhost:3000`

---

## 🌱 Environment Variables

Create a `.env.local` file and include the following:

    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

_(You can also configure server-side email handling with Nodemailer.)_

---

## 💡 Future Improvements

- Integration with donation payment gateways (e.g. Flutterwave,
  Paystack)
- Multi-language support for regional outreach
- Admin dashboard for managing blogs and projects

---

## 🧠 Lessons Learned

- Importance of accessibility and responsive design for NGOs\
- Structuring reusable components with Next.js App Router\
- Handling form automation with EmailJS and validation with Zod\
- Writing SEO-friendly content for social impact organizations

---

## 👏 Acknowledgements

Special thanks to **Imole Network Foundation** for the opportunity to
build this platform dedicated to serving humanity.

---

## 📞 Contact

If you'd like to connect or collaborate:

**Developer:** Tomiwa Adelae\
**Email:** adelaetomiwa6@gmail.com\
**Portfolio:** [tomiwaadelae.com.ng](https://tomiwaadelae.com.ng)\
**GitHub:** [github.com/tomiwa-adelae](https://github.com/tomiwa-adelae)

---

**⭐️ Star this repo** if you found it helpful or inspiring!
