FROM cbiit/centos7_base
RUN yum -y update \
    && yum -y install yum-utils wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm epel-release yum-utils \
    && yum-config-manager --disable remi-php54 \
    && yum-config-manager --enable remi-php73 \
    && yum install -y php php-cli php-fpm php-mysqlnd \
       php-zip php-devel php-gd php-mcrypt php-mbstring php-curl \
       php-xml php-pear php-bcmath php-json drush composer which vi 
EXPOSE 80
COPY run.sh /usr/bin
RUN mkdir -p /local/drupal
WORKDIR /local/drupal
ENTRYPOINT run.sh