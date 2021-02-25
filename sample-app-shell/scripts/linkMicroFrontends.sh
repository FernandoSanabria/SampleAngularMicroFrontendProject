#!/usr/bin/env bash
cd "src"
rm -rf "ui-modules"
mkdir "ui-modules"
ln -s ~/Desktop/sample-micro-frontend-project/sample-feature1/dist/bundles ./ui-modules/sample-feature1
ln -s ~/Desktop/sample-micro-frontend-project/sample-feature2/dist/bundles ./ui-modules/sample-feature2
