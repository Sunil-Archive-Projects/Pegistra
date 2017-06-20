------------------------------------------------------------------------------------------------------------------------------
|											Cerner Hackathon - 2015	"No Loose Ends" Entry        							 |
------------------------------------------------------------------------------------------------------------------------------

App Name :  "Pegistra"

Team : "No Loose Ends"
			--Shashank Rawoorkar(SR035368)
			--Sunil L(SL044390)
			--Arsad Ali(AA031455)

Technologies Used : -Bootstrap
					-HTML5
					-JavaScript
					-jQuery
					-CSS3

					-pouchDB(Client Side Local Database with Sync Adapter)
					-CouchDB(Server Side Remote Database with Live Synchronization)

	Tools		 :	-Cordova/phoneGap
					-Ripple Emulator
					-Cordova Network Config Plugin

Platforms Supported : -Android
					  -iOS
					  -Windows
					  -Linux

Table Name in DB : patientrepo(both local and remote)

------------------------------------------------------------------------------------------------------------------------------
|										Running The App: (Windows Build Guide)												|
------------------------------------------------------------------------------------------------------------------------------

*Instructions for running the app in the Windows Environment*
*The app will be built in cordova environment, accessing our own test remote couchDB server mentioned in index.js and online mechanism kicks in based on the online status*


-Install nodeJS(www.nodeJS.org)
	-- for npm
-Install Cordova(cordova.apache.org)
	-- for cross-platform building
-Install CouchDB (couchDB.apache.org)
	-- keep the instance of the remote DB running for syncing purpose
-Go into the Pegistra directory in cmd
	-- initializing the cordova environment
-Run the following commands in the Pegistra directory:
	--
		--cordova platform add android
		--cordova platform add ios
		--cordova platform add windows
		--cordova platform add ubuntu

		--cordova build
		--cordova prepare

		--ripple emulate
			--to test in Android and iOS Emulated Environment. Optionally can be run on connected Android and iOS device.

---------------------------------------------------><------------------------------------------------------------------------

|											*Happy Hackathon!*																|

---------------------------------------------------><------------------------------------------------------------------------