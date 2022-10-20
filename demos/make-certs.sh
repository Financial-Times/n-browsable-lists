#!/bin/bash
openssl req -x509 -days 365 -out demos/self-signed-ssl-certificate.pem -keyout demos/self-signed-ssl-key.pem \
		-newkey rsa:2048 -nodes -sha256 \
		-subj '/OU=FT.com dev root for next-router /CN=*.ft.com' -extensions EXT -config <( \
		printf '[dn]\nCN=*.ft.com\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:*.ft.com'); \
	if which security > /dev/null; then \
			echo 'Adding to OSX Keychain...' && security add-trusted-cert -r trustRoot -p ssl -k ~/Library/Keychains/login.keychain 'demos/self-signed-ssl-certificate.pem'; \
	fi;
