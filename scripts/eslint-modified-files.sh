#!/bin/bash
# https://medium.com/@shettyrahul8june/how-to-run-eslint-using-pre-commit-hook-25984fbce17e
# echo $PATH

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"
ESLINT_OPTIONS="--max-warnings=0" #error on warnings

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

# Check for eslint
if [[ ! -x "$ESLINT" ]]; then
  echo "\t\033[41mPlease install ESlint\033[0m (npm i --save-dev eslint)"
  exit 1
fi

"$ESLINT" "$ESLINT_OPTIONS" $STAGED_FILES

if [[ "$?" == 0 ]]; then
  echo "\t\033[32mESLint Passed: $STAGED_FILES\033[0m"
else
  echo "\t\033[41mESLint Failed: $STAGED_FILES\033[0m"
  PASS=false
fi

echo "\nJavascript validation completed!\n"

if ! $PASS; then
  echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  echo "\033[42mCOMMIT SUCCEEDED\033[0m\n"
fi

exit $?
