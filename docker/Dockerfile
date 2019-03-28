FROM cbiit/centos7_base
RUN yum -y update \
    && yum -y install yum-utils wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm epel-release yum-utils \
    && yum-config-manager --disable remi-php54 \
    && yum-config-manager --enable remi-php73 \
    && yum install -y php php-cli php-fpm php-mysqlnd \
       php-zip php-devel php-gd php-mcrypt php-mbstring php-curl \
       php-xml php-pear php-bcmath php-json drush composer which vi 
COPY resources/run.sh /usr/bin
COPY resources/000-default.conf /etc/httpd/conf.d
COPY resources/httpd.conf /etc/httpd/conf
RUN mkdir -p /local/drupal/site

EXPOSE 80
WORKDIR /local/drupal
ENTRYPOINT run.sh
