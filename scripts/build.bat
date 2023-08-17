call echo "Install packages"
call npm install
call echo "Run tests"
call npm test
call echo "Configure Testspace"
call testspace config url munderseth.testspace.com
call echo "Publish Results to Testspace"
call testspace junit.xml{tests}