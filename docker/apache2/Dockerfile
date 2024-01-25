# 기본 이미지 설저
FROM httpd

# SSL 인증서 복사
COPY ~/SSL/server.crt /usr/local/apache2/conf/server.crt
COPY ~/SSL/server.key /usr/local/apache2/conf/server.key

ADD httpd.conf /usr/local/apache2/conf
ADD httpd-vhosts.conf /usr/local/apache2/conf/extra
ADD build /usr/local/apache2/htdocs
WORKDIR /usr/local/apache2
EXPOSE 80
