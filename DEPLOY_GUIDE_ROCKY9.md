# Deploying Formal FPGA V&V Site on Rocky Linux 9 (with PM2)

This guide outlines how to deploy the website using **PM2** to manage the process, with **Nginx** acting as a reverse proxy. This is ideal if you are already hosting multiple services on the same machine using PM2.

## Prerequisites

Access to your Rocky 9 server with `sudo` privileges and PM2 installed.

## Step 1: Install Dependencies

Ensure Node.js and Git are installed.

```bash
# 1. Update & Install Git
sudo dnf update -y
sudo dnf install git -y

# 2. Install Node.js (v18+)
sudo dnf module enable nodejs:18 -y
sudo dnf install nodejs -y

# 3. Install PM2 globally (if not already installed)
sudo npm install -g pm2
```

## Step 2: Clone and Build

 Clone the code and build the production assets.

```bash
# 1. Clone the repo
cd ~
git clone https://github.com/ahe24/eda_cs_site.git
cd eda_cs_site

# 2. Install dependencies
npm install

# 3. Build the static site
# This creates the 'dist' folder
npm run build
```

## Step 3: Start with PM2

Since this is a static site, we can use PM2's built-in static file server functionality (`pm2 serve`).

```bash
# Serve the 'dist' folder on port 4173 (or any free port)
# --spa creates a Single Page Application redirect (redirects 404s to index.html)
pm2 serve dist 4173 --name "eda-site" --spa

# Save the PM2 list so it restarts on boot
pm2 save
pm2 startup
```

## Step 4: Configure Nginx Reverse Proxy

Since you have multiple services, you likely want to map a domain (or specific path) to this internal port (4173).

```bash
# Create/Edit Nginx config
sudo nano /etc/nginx/conf.d/eda_site.conf
```

**Configuration:**

```nginx
server {
    listen 80;
    server_name your-domain.com;  # Replace with actual domain or IP

    location / {
        proxy_pass http://localhost:4173; # Points to PM2 process
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Step 5: Reload Services

```bash
# 1. Test Nginx
sudo nginx -t

# 2. Reload Nginx to apply changes
sudo systemctl reload nginx

# 3. Update Firewall (if strictly ensuring port 80/443 only)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Summary
*   **Source**: `/home/user/eda_cs_site`
*   **Build**: `npm run build` (outputs to `dist/`)
*   **Process**: PM2 serving `dist/` on port **4173**
*   **Access**: Nginx Proxy :80 -> :4173
