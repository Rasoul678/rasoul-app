#!/usr/bin/env bash

SERVER='http://localhost:3000/api/notion'

wget --spider -S $SERVER 2>&1 | grep "HTTP/" | awk '{print $2}'
