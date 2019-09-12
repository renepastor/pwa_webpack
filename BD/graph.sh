#!/bin/bash

postgraphile \
  --connection postgres://localhost:5432/bd_emavias \
  --schema unitario \
  --host 45.63.2.26 \
  --port 8005 \
  --secret 123456 \
  --default-role root \
  --cors
#  --token sijp.jwt \
#  --host localhost \
#  --host 192.168.56.101 \
