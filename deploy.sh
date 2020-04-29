
# lol @ idyll, the default language cannot be changed

rm -rf docs/* &&
idyll clean &&
cd posts/zeit && idyll build && cd ../hintergrund && idyll build && cd ../../ && idyll build &&
/usr/local/opt/gnu-sed/libexec/gnubin/sed -i -- 's/<html lang="en" dir="ltr">/<html lang="de" dir="ltr">/' docs/index.html &&
/usr/local/opt/gnu-sed/libexec/gnubin/sed -i -- 's/<html lang="en" dir="ltr">/<html lang="de" dir="ltr">/' docs/zeit/index.html &&
/usr/local/opt/gnu-sed/libexec/gnubin/sed -i -- 's/<html lang="en" dir="ltr">/<html lang="de" dir="ltr">/' docs/hintergrund/index.html &&
rsync --chown=www-data:www-data --exclude='.DS_Store' -azv docs/* b:/var/www/kommentare.vis.one
