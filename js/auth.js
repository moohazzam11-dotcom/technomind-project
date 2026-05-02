const Auth = {
    // Keys
    USER_KEY: 'technomind_user',

    // Create Account
    signup: (name, email, _password) => {
        if (localStorage.getItem('technomind_user')) {
            return { success: false, message: 'المستخدم مسجل الدخول بالفعل. قم بتسجيل الخروج أولاً.' };
        }
        // Never store the password — this is a demo/client-side auth only.
        const user = { name, email, joined: new Date().toLocaleDateString() };
        localStorage.setItem('technomind_user', JSON.stringify(user));
        return { success: true, message: 'تم إنشاء الحساب بنجاح!' };
    },

    // Login (demo — email-only match, no real credential verification)
    login: (email, _password) => {
        const stored = localStorage.getItem('technomind_user');
        if (!stored) return { success: false, message: 'لا يوجد حساب بهذا البريد الإلكتروني.' };

        const user = JSON.parse(stored);
        if (user.email === email) {
            return { success: true, user };
        }
        return { success: false, message: 'البريد الإلكتروني غير صحيح.' };
    },

    // Social Login Simulation
    socialLogin: (provider) => {
        if (localStorage.getItem('technomind_user')) return { success: false, message: 'مسجل الدخول بالفعل.' };

        let user;
        if (provider === 'google') {
            user = { name: 'Google User', email: 'user@gmail.com', method: 'google' };
        } else if (provider === 'phone') {
            const phone = prompt('أدخل رقم هاتفك (خطوة محاكاة OTP):', '05xxxxxxx');
            if (!phone) return { success: false, message: 'تم الإلغاء' };
            user = { name: 'Mobile User', email: phone, method: 'phone' };
        }

        localStorage.setItem('technomind_user', JSON.stringify(user));
        return { success: true, user };
    },

    // Logout
    logout: () => {
        localStorage.removeItem('technomind_user');
        window.location.reload();
    },

    // Get Current User
    getUser: () => {
        const stored = localStorage.getItem('technomind_user');
        return stored ? JSON.parse(stored) : null;
    },

    // Update UI based on auth state
    updateNav: () => {
        const user = Auth.getUser();
        const loginItem = document.getElementById('menu-login-item');

        if (!loginItem) return;

        if (user) {
            // Logged In State — use textContent to avoid XSS with user-supplied name
            loginItem.textContent = '';
            const iconSpan = document.createElement('span');
            iconSpan.textContent = '👤';
            const labelSpan = document.createElement('span');
            labelSpan.className = 'text';
            labelSpan.textContent = ` مرحباً، ${user.name}`;
            loginItem.append(iconSpan, labelSpan);
            loginItem.onclick = (e) => {
                e.preventDefault();
                if (confirm('هل تريد تسجيل الخروج؟')) Auth.logout();
            };
            loginItem.href = "#";
        } else {
            // Logged Out State
            loginItem.textContent = '';
            const iconSpan = document.createElement('span');
            iconSpan.textContent = '👤';
            const labelSpan = document.createElement('span');
            labelSpan.className = 'text';
            labelSpan.textContent = ' تسجيل الدخول / حساب جديد';
            loginItem.append(iconSpan, labelSpan);
            loginItem.onclick = null; // Remove previous handlers if any

            // Fix path based on location
            const isPages = window.location.pathname.includes('/pages/');
            loginItem.href = isPages ? 'signup.html' : 'pages/signup.html';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Auth.updateNav();
});
