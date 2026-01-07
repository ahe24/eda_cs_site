# Deploying Formal FPGA V&V Site on Rocky Linux 9

This guide outlines the steps to deploy the website on a Rocky Linux 9 server using **Nginx** as the web server.

## Prerequisites

Access to your Rocky 9 server with `sudo` privileges.

## Step 1: Install Dependencies

Update your system and install necessary tools (Git, Node.js, Nginx).

```bash
# 1. Update system packages
sudo dnf update -y

# 2. Install Git
sudo dnf install git -y

# 3. Install Node.js (via DNF module or NodeSource)
# Using standard app stream for Node 18+ (Vite requires Node 18+)
sudo dnf module enable nodejs:18 -y
sudo dnf install nodejs -y

# 4. Install Nginx
sudo dnf install nginx -y
```

## Step 2: Clone and Build the Project

Clone the repository and build the static assets.

```bash
# 1. Clone the repo (replace with your repo URL if different)
cd ~
git clone https://github.com/ahe24/eda_cs_site.git
cd eda_cs_site

# 2. Install NPM dependencies
npm install

# 3. Build for production
# This creates a 'dist' directory with the final HTML/CSS/JS files
npm run build
```

## Step 3: Deploy to Nginx

Move the built files to the web server directory.

```bash
# 1. Create a directory for the site (optional, or use default)
sudo mkdir -p /var/www/eda_site

# 2. Copy the contents of 'dist' to the web directory
sudo cp -r dist/* /var/www/eda_site/

# 3. Set permissions (Nginx needs read access)
sudo chown -R nginx:nginx /var/www/eda_site
sudo chmod -R 755 /var/www/eda_site
```

## Step 4: Configure Nginx

Create a configuration file for the site.

```bash
# 1. Create a new config file
sudo nano /etc/nginx/conf.d/eda_site.conf
```

**Paste the following configuration:**

```nginx
server {
    listen 80;
    server_name _;  # Or yourdomain.com if you have one

    root /var/www/eda_site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optional: Enable Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Save and exit** (Ctrl+O, Enter, Ctrl+X).

## Step 5: Configure Firewall and Start Service

Open the firewall ports and start Nginx.

```bash
# 1. Allow HTTP traffic
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# 2. Disable default Nginx server (if it conflicts)
# If /etc/nginx/nginx.conf includes default settings, you might need to comment out the default server block
# or simply rename the default config if it exists in conf.d
# sudo mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak

# 3. Test Nginx configuration
sudo nginx -t

# 4. Enable and Start Nginx
sudo systemctl enable --now nginx
```

## Step 6: Verify

Open your browser and navigate to your server's IP address:
`http://<YOUR_SERVER_IP>/`

You should see the "Formal-Based FPGA Design & Verification" site live.
