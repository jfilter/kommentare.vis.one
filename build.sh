# hopeless attempt to aim for IE11

rm -rf docs &&
idyll build &&
echo "import 'core-js'; import 'regenerator-runtime/runtime';" >> docs/static/idyll_index.js &&
npx babel docs/static/idyll_index.js --out-file docs/static/idyll_index.js &&
browserify docs/static/idyll_index.js -o docs/static/idyll_index.js2 &&
mv docs/static/idyll_index.js2 docs/static/idyll_index.js &&
/usr/local/opt/gnu-sed/libexec/gnubin/sed -i 's/new Proxy/new window.Proxy/g' docs/static/idyll_index.js