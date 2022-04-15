## Encryption and Decryption

- openssl aes-256-cbc -e -md sha256 -in service-account.json -out service-account.enc -pass pass:$CIRCLECI_ENC_VAR_OPENSSL_PASS

- openssl aes-256-cbc -d -md sha256 -in service-account.enc -out service-account-x.json -pass pass:$CIRCLECI_ENC_VAR_OPENSSL_PASS

## Circle CI