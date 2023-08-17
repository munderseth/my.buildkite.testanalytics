call echo " [TEST] Install packages"
call npm install
call echo " [TEST] Run tests"
call npm test
call echo " [TEST] Configure Testspace"
call testspace config url munderseth.testspace.com
call echo " [TEST] Publish Results to Testspace"
call testspace junit.xml{tests}