docker run -dit --name Movies-httpd -p 8081:80 -v /media/pi/PiTB/media/Movies:/usr/local/apache2/htdocs/ httpd:2.4

docker run -dit --name TVShows-httpd -p 8082:80 -v /media/pi/PiTB/media/TVShows:/usr/local/apache2/htdocs/ httpd:2.4