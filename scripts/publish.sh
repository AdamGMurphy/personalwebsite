# Adds and replaces but does not delete removed files
scp -r -i ${WEBSITE_ID_RSA} public ${WEBSITE_USER}@adammurphy.ca:public_html
