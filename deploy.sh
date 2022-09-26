#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/youmikuang/web-frontend-study.git" main:gh-pages

cd -

rm -rf docs/.vitepress/dist