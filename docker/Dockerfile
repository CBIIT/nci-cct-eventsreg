FROM drupal
MAINTAINER Shaun Einolf
RUN apt-get update
WORKDIR /tmp
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN apt-get -y install mariadb-client git vim unzip
RUN git clone https://github.com/drush-ops/drush.git /usr/local/src/drush
WORKDIR /usr/local/src/drush
RUN ln -s /usr/local/src/drush/drush /usr/bin/drush
RUN composer install
COPY run.sh /usr/bin/run.sh
COPY settings.php /tmp/settings.php
COPY 000-default.conf /etc/apache2/sites-available
COPY apache2.conf /etc/apache2
COPY .htaccess /tmp
WORKDIR /local/drupal
ENTRYPOINT "/usr/bin/run.sh"
