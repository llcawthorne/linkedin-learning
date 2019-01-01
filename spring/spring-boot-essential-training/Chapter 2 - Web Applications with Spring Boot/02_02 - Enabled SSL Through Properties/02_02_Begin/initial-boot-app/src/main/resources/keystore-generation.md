# Generating The Key #

`cd src/main/resources`

`keytool -genkey -keyalg RSA -alias linkedin -keystore keystore.jks -storepass password -validity 4000 -keysize 4096`

`// Prompted for name, organization unit, organization, city, state, country.  It didn't prompt me for or set a key password`

`// Note: it's probably better to use a pkcs12 keystore instead of a jks, but I'm used to jks`