#!/bin/bash
# ============================================
#  Rankston VPS Deployment Script (Ubuntu)
#  Run this on your VPS as root user
# ============================================

set -e

echo "🚀 Starting Rankston Deployment..."

# ── Step 1: System Update ──
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# ── Step 2: Install Node.js 20 LTS ──
echo "📦 Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# ── Step 3: Install PM2 (Process Manager) ──
echo "📦 Installing PM2..."
npm install -g pm2

# ── Step 4: Install Nginx ──
echo "📦 Installing Nginx..."
apt install -y nginx
systemctl enable nginx
systemctl start nginx

# ── Step 5: Install Certbot (SSL) ──
echo "📦 Installing Certbot for SSL..."
apt install -y certbot python3-certbot-nginx

# ── Step 6: Clone Repository ──
echo "📥 Cloning Rankston repository..."
cd /var/www
rm -rf rankston 2>/dev/null
git clone https://github.com/abialtechnologies/rankston.git
cd rankston

# ── Step 7: Create Environment File ──
echo "⚙️ Creating .env.local file..."
cat > .env.local << 'ENVEOF'
GMAIL_USER=rankstonleads@gmail.com
GMAIL_APP_PASS=YOUR_APP_PASSWORD_HERE
ENVEOF

echo ""
echo "⚠️  IMPORTANT: Edit .env.local with your actual GMAIL_APP_PASS!"
echo "   Run: nano /var/www/rankston/.env.local"
echo ""

# ── Step 8: Install Dependencies & Build ──
echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

# ── Step 9: Start with PM2 ──
echo "🚀 Starting application with PM2..."
pm2 delete rankston 2>/dev/null || true
pm2 start npm --name "rankston" -- start
pm2 save
pm2 startup

# ── Step 10: Configure Nginx ──
echo "🌐 Configuring Nginx..."
cat > /etc/nginx/sites-available/rankston << 'NGINXEOF'
server {
    listen 80;
    server_name rankston.com www.rankston.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINXEOF

ln -sf /etc/nginx/sites-available/rankston /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo ""
echo "============================================"
echo "✅ Rankston Deployed Successfully!"
echo "============================================"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. Edit your .env.local file:"
echo "   nano /var/www/rankston/.env.local"
echo "   (Add your actual GMAIL_APP_PASS)"
echo ""
echo "2. Point your domain DNS to this server IP"
echo "   Add A Record: rankston.com → YOUR_SERVER_IP"
echo "   Add A Record: www.rankston.com → YOUR_SERVER_IP"
echo ""
echo "3. After DNS propagation, enable SSL:"
echo "   certbot --nginx -d rankston.com -d www.rankston.com"
echo ""
echo "4. Restart app after .env changes:"
echo "   cd /var/www/rankston && pm2 restart rankston"
echo ""
echo "🌐 Your site will be live at: http://YOUR_SERVER_IP:3000"
echo "============================================"
