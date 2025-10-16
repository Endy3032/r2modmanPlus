#!/bin/bash
APP_PATH="/Applications/r2modman.app"
echo "Removing quarantine attributes from $APP_PATH"

if [ ! -d "$APP_PATH" ]; then
		osascript -e 'tell application "System Events" to display dialog "Please move r2modman to the Applications folder before running this script." buttons {"OK"} default button "OK"'
		exit 1
fi

xattr -cr "$APP_PATH"
osascript -e 'tell app "System Events" to display dialog "You should now be able to open r2modman." buttons {"OK"} default button "OK"'