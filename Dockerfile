FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY live.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY Sudarshan_Logo.png /usr/share/nginx/html/
COPY Sudarshan_Logo_icon.png /usr/share/nginx/html/
COPY Home.png /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY config/ /usr/share/nginx/html/config/

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
