include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/list.js: src/index.js
	$(BABEL) $< -o $@

dist/list.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/list.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/list.js dist/list.min.js

all: test dist-all lib/list.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
